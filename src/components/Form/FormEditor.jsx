import React, { useEffect, useState } from "react";
import InputItem from "../InputItem";
import CustomSelect from "../CustomSelect";
import { useLocation } from "react-router-dom";
import Selectbox from "../Selectbox";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";

const FormEditor = (props) => {
  // lists
  const [lists, setLists] = useState([]);

  // tags
  const [tags, setTags] = useState([]);

  const [selectedLists, setSelectedLists] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // Fetch lists & tags
  useEffect(() => {
    // Get lists
    getLists().then((results) => {
      results.data.map(function () {
        setLists(results.data);
      });
    });

    // Get tags
    getTags().then((results) => {
      setTags(results.data);
    });
  }, []);

  const [formData, setValues] = useState({
    title: "",
    form_position: "",
    group_ids: [],
  });

  const [toggleDropdown, setToggleDropdown] = useState(false);

  const location = useLocation();

  localStorage.setItem("reload", true);

  //setReload(location.state.reload);

  // useEffect(() => {
  //   if (localStorage.getItem("reload")) {
  //     localStorage.setItem("reload", false);
  //     window.location.reload();
  //   }
  // }, []);

  // Set values from Title form
  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSelect = (e, name) => {
    const updatedOptions = [...e.target.options]
      .filter((option) => option.selected)
      .map((x) => x.value);

    setValues((prevState) => ({
      ...prevState,
      [name]: updatedOptions,
    }));
  };

  const onRemove = (e, name) => {
    let unselectedItem = e.params.data.id;
    setValues((prevState) => ({
      ...prevState,
      [name]: prevState[name].filter((x) => x !== unselectedItem),
    }));
  };

  const saveForm = async () => {
    const storedBlocks = window.localStorage.getItem("getmrmblocks");
    const post_data = {
      title: formData.title,
      form_body: storedBlocks,
    };
    const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post_data),
    });
    const responseData = await res.json();
    console.log(responseData);
  };

  const handleFormPosition = (param) => {
    setValues((prevState) => ({
      ...prevState,
      form_position: param,
    }));
    setToggleDropdown(false);
  };

  useEffect(() => {
    const lists = selectedLists
      .filter((list) => list.id > 0)
      .map((list) => list.id);

    const tags = selectedTags.filter((tag) => tag.id > 0).map((tag) => tag.id);

    const group_ids = lists.concat(tags);

    setValues((prevState) => ({
      ...prevState,
      group_ids: group_ids,
    }));
  }, [selectedLists, selectedTags]);

  return (
    <>
      {console.log(formData)}
      <div className="add-contact-form">
        <div className="contact-form-body">
          <InputItem
            label="Title"
            name="title"
            handleChange={handleChange}
            value={formData.title}
          />
          <div style={{ position: "relative" }}>
            <button
              className="mintmrm-btn outline"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              Form Position
            </button>
            <ul
              className={
                toggleDropdown ? "mintmrm-dropdown show" : "mintmrm-dropdown "
              }
              style={{ position: "absolute", top: "100px", left: "0px" }}
            >
              <li onClick={() => handleFormPosition("fly_in")}>Fly-In</li>
              <li onClick={() => handleFormPosition("pop_up")}>Pop-Up</li>
            </ul>
          </div>

          <div>{formData.form_position}</div>

          <div className="form-group">
            <CustomSelect
              selected={selectedTags}
              setSelected={setSelectedTags}
              endpoint="/tags"
              placeholder="Tags"
              name="tag"
              listTitle="CHOOSE TAG"
              listTitleOnNotFound="No Data Found"
              searchPlaceHolder="Search..."
              allowMultiple={true}
              showSearchBar={true}
              showListTitle={true}
              showSelectedInside={false}
              allowNewCreate={true}
            />
          </div>

          <div className="form-group">
            <CustomSelect
              selected={selectedLists}
              setSelected={setSelectedLists}
              endpoint="/lists"
              placeholder="Lists"
              name="list"
              listTitle="CHOOSE List"
              listTitleOnNotFound="No Data Found"
              searchPlaceHolder="Search..."
              allowMultiple={true}
              showSearchBar={true}
              showListTitle={true}
              showSelectedInside={false}
              allowNewCreate={true}
            />
          </div>

          <button
            type="submit"
            className="contact-save mintmrm-btn "
            onClick={saveForm}
          >
            Save
          </button>
          <div
            id="mrm-block-editor"
            className="getdave-sbe-block-editor block-editor"
          ></div>
        </div>
      </div>
    </>
  );
};

export default FormEditor;
