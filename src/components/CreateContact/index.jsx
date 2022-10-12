import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Internal dependencies
import { omit } from "lodash";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import AddItemDropdown from "../AddItemDropdown";
import CustomSelect from "../CustomSelect";
import InputItem from "../InputItem/index";
import "./style.css";

const CreateContact = (props) => {
  let navigate = useNavigate();

  // global counter update real time
  const counterRefresh = useGlobalStore((state) => state.counterRefresh);

  // Prepare contact object
  const [contactData, setValues] = useState({
    email: "",
    first_name: "",
    last_name: "",
    status: ["pending"],
    created_by: `${window.MRM_Vars.current_userID}`,
    lists: [],
    tags: [],
  });

  const [errors, setErrors] = useState({});
  const [lists, setLists] = useState([]);
  const [tags, setTags] = useState([]);

  const [isActiveList, setIsActiveList] = useState(false);
  const [isActiveTag, setIsActiveTag] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [assignLists, setAssignLists] = useState([]);
  const [assignTags, setAssignTags] = useState([]);

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

  const validate = (event, name, value) => {
    switch (name) {
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  // Handle contact create form submission
  const handleSubmit = async (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length !== 0) {
      setErrors({
        ...errors,
        email: errors["emails"],
      });
    }

    contactData.lists = assignLists;
    contactData.tags = assignTags;

    const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/contacts/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
    const responseData = await res.json();
    const code = responseData?.code;

    if (code === 201) {
      // Navigate user with success message
      navigate("../contacts", {
        state: { status: "contact-created", message: responseData?.message },
      });
      useGlobalStore.setState({
        counterRefresh: !counterRefresh,
      });
    } else {
      // Validation messages
      setErrors({
        ...errors,
        email: responseData?.message,
      });
    }
  };

  // Set values from contact form
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

  const routeChange = () => {
    let path = `/contacts`;
    navigate(path);
  };
  const handleTag = () => {
    setIsActiveTag(!isActiveTag);
    setIsActiveList(false);
  };
  const handleList = () => {
    setIsActiveList(!isActiveList);
    setIsActiveTag(false);
  };

  return (
    <>
      <div className="create-contact">
        <div className="contact-container">
          <h2 className="conatct-heading">Add Contact</h2>

          <div className="add-contact-form">
            <div className="contact-form-body">
              <InputItem
                label="Email"
                name="email"
                error={errors?.email}
                values={contactData.email}
                handleChange={handleChange}
                // type="email"
                isRequired
              />

              <InputItem
                label="First name"
                name="first_name"
                values={contactData.first_name}
                handleChange={handleChange}
              />
              <InputItem
                label="Last name"
                name="last_name"
                values={contactData.last_name}
                handleChange={handleChange}
              />
              {/* <Selectbox
                label="Status"
                name="status"
                options={[
                  {
                    title: "Pending",
                    id: "pending",
                  },
                  {
                    title: "Subscribed",
                    id: "subscribed",
                  },
                  {
                    title: "Unsubscribed",
                    id: "unsubscribed",
                  },
                ]}
                value={contactData.status}
                tags={false}
                placeholder="Select Status"
                multiple={false}
                onSelect={onSelect}
              /> */}
              <div className="form-group status-dropdown">
                <label>Status</label>
                <CustomSelect
                  selected={selectedStatus}
                  setSelected={setSelectedStatus}
                  endpoint="/status"
                  placeholder="Select Status"
                  name="status"
                  listTitle="CHOOSE Status"
                  listTitleOnNotFound="No Data Found"
                  searchPlaceHolder="Search..."
                  allowMultiple={false}
                  showSearchBar={true}
                  showListTitle={false}
                  showSelectedInside={false}
                  allowNewCreate={false}
                />
              </div>
              <div className="form-group lists-dropdown">
                <label>Lists</label>
                <button
                  type="button"
                  className={
                    isActiveList ? "drop-down-button show" : "drop-down-button"
                  }
                  onClick={handleList}
                >
                  Select List
                </button>
                <AddItemDropdown
                  isActive={isActiveList}
                  setIsActive={setIsActiveList}
                  selected={assignLists}
                  setSelected={setAssignLists}
                  endpoint="lists"
                  items={lists}
                  allowMultiple={true}
                  allowNewCreate={true}
                  name="list"
                />
              </div>
              <div className="form-group tags-dropdown">
                <label>Lists</label>
                <button
                  type="button"
                  className={
                    isActiveTag ? "drop-down-button show" : "drop-down-button"
                  }
                  onClick={handleTag}
                >
                  Select List
                </button>
                <AddItemDropdown
                  isActive={isActiveTag}
                  setIsActive={setIsActiveTag}
                  selected={assignTags}
                  setSelected={setAssignTags}
                  endpoint="tags"
                  items={tags}
                  allowMultiple={true}
                  allowNewCreate={true}
                  name="tag"
                />
              </div>
            </div>

            <div className="contact-button-field">
              <button
                className="contact-cancel mintmrm-btn outline"
                onClick={routeChange}
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="contact-save mintmrm-btn "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateContact;
