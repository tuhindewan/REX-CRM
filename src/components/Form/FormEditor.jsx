import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputItem from "../InputItem";
import CustomSelect from "../CustomSelect";
import { useLocation } from "react-router-dom";
import Selectbox from "../Selectbox";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import CampaignCustomSelect from "../Campaign/CampaignCustomSelect";

import ComputerIcon from "../Icons/ComputerIcon";
import DoubleAngleLeftIcon from "../Icons/DoubleAngleLeftIcon";
import MobileIcon from "../Icons/MobileIcon";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import SettingIcon from "../Icons/SettingIcon";
import DownArrowIcon from "../Icons/DownArrowIcon";
import UpArrowIcon from "../Icons/UpArrowIcon";

const FormEditor = (props) => {
  // lists
  const [lists, setLists] = useState([]);

  // tags
  const [tags, setTags] = useState([]);

  const [selectedLists, setSelectedLists] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const [moreOption, setMoreOption] = useState(false);
  const [listDropdown, setListDropdown] = useState(false);

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
  };

  const [positionName, setPositionName] = useState("");
  const handleFormPosition = (param, name) => {
    setValues((prevState) => ({
      ...prevState,
      form_position: param,
    }));
    setPositionName(name);
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


  //-------show more option click function-------
  const clickShowOption = () => {
    setMoreOption(current => !current);
  };

  //-------list click function-------
  const showListDropdown = () => {
    setListDropdown(current => !current);
  };

  return (
    <>
      <div className="form-editor-page">
        <div className="form-editor-topbar">
          <div className="topbar-left">
            <button className="back-button">
              <Link to="">
                <DoubleAngleLeftIcon />
              </Link>
            </button>

            <div className="responsive-section">
              <button className="computer-view active">
                <ComputerIcon />
              </button>
              <button className="mobile-view">
                <MobileIcon />
              </button>
            </div>
          </div>

          <div className="topbar-right">
            <button className={moreOption ? 'three-dot-btn show' : 'three-dot-btn'} onClick={clickShowOption}>
              <ThreeDotIcon />
              <ul className="mintmrm-dropdown">
                <li>Save as Draft</li>
                <li>Change Template</li>
              </ul>
            </button>
            <button className="mintmrm-btn settings"><SettingIcon/></button>
            <button className="mintmrm-btn enable">Enable</button>
          </div>
        </div>

        <div className="form-editor-body">
          <div className="form-editor-title-area">
            <InputItem
              label="Title"
              name="title"
              handleChange={handleChange}
              value={formData.title}
            />

            <div className="form-group list">
              <label className="list-label">List</label>

              <div className="list-content">
                <button className="all-recipients" onClick={showListDropdown}>
                  All Subscriber
                  {listDropdown ? <UpArrowIcon /> : <DownArrowIcon />}
                </button>

                <CampaignCustomSelect dropDown={listDropdown} />
              </div>
            </div>

            {/* <div className="form-items">
              <div className="left-items">
                <div style={{ position: "relative" }}>
                  <button
                    className="mintmrm-btn outline"
                    onClick={() => setToggleDropdown(!toggleDropdown)}
                  >
                    {formData.form_position ? positionName : "Form Position"}
                  </button>
                  <ul
                    className={
                      toggleDropdown
                        ? "mintmrm-dropdown show"
                        : "mintmrm-dropdown "
                    }
                    style={{ position: "absolute", top: "100px", left: "0px" }}
                  >
                    <li onClick={() => handleFormPosition("fly_in", "Fly-In")}>
                      Fly-In
                    </li>
                    <li onClick={() => handleFormPosition("pop_up", "Pop-Up")}>
                      Pop-Up
                    </li>
                  </ul>
                </div>

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
              </div>

              <div className="right-section">
                <button
                  type="submit"
                  className="contact-save mintmrm-btn "
                  onClick={saveForm}
                >
                  Save
                </button>
              </div>
            </div> */}

          </div>


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
