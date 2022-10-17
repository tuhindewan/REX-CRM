import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Internal dependencies
import { useGlobalStore } from "../../hooks/useGlobalStore";
import { createContact } from "../../services/Contact";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import AddItemDropdown from "../AddItemDropdown";
import InputItem from "../InputItem/index";
import ListenForOutsideClicks from "../ListenForOutsideClicks";

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
  const [assignLists, setAssignLists] = useState([]);
  const [assignTags, setAssignTags] = useState([]);
  const [refresh, setRefresh] = useState();
  const [isActiveStatus, setIsActiveStatus] = useState(false);
  const [isActivePending, setIsActivePending] = useState(false);
  const [isActiveSubscribe, setIsActiveSubscribe] = useState(false);
  const [isActiveUnsubscribe, setIsActiveUnsubscribe] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState();

  //Detect Outside Click to Hide Dropdown Element
  const statusMenuRef = useRef(null);
  const listMenuRef = useRef(null);
  const tagMenuRef = useRef(null);
  const [listening, setListening] = useState(false);
  useEffect(
    ListenForOutsideClicks(
      listening,
      setListening,
      statusMenuRef,
      setIsActiveStatus
    )
  );
  useEffect(
    ListenForOutsideClicks(
      listening,
      setListening,
      listMenuRef,
      setIsActiveList
    )
  );
  useEffect(
    ListenForOutsideClicks(listening, setListening, tagMenuRef, setIsActiveTag)
  );

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
  }, [refresh]);

  const validate = (event, name, value) => {
    switch (name) {
      case "email":
        if (!value.length) {
          setErrors({
            ...errors,
            email: "Email address is mandatory",
          });
          return false;
        } else if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
          return false;
        } else {
          setErrors({});
          return true;
        }
        break;
      default:
        break;
    }
  };

  // Handle contact create form submission
  const handleSubmit = async (event) => {
    if (event) event.preventDefault();

    contactData.lists = assignLists;
    contactData.tags = assignTags;
    contactData.status = [selectedStatus];

    if (validate(event, "email", contactData.email)) {
      createContact(contactData).then((response) => {
        if (201 === response.code) {
          // Navigate user with success message
          navigate("../contacts", {
            state: { status: "contact-created", message: response?.message },
          });
          useGlobalStore.setState({
            counterRefresh: !counterRefresh,
          });
        } else {
          // Validation messages
          setErrors({
            ...errors,
            email: response?.message,
          });
        }
      });
    }
  };

  // Set values from contact form
  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    validate(event, name, value);

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (!value.length) {
      setErrors({});
    }
  };

  const routeChange = () => {
    let path = `/contacts`;
    navigate(path);
  };

  const handleTag = () => {
    setIsActiveTag(!isActiveTag);
  };

  const handleList = () => {
    setIsActiveList(!isActiveList);
  };

  const handleStatus = () => {
    setIsActiveStatus(!isActiveStatus);
  };

  const handleSelectStatus = (title) => {
    if ("Pending" == title) {
      setSelectedStatus("pending");
      setIsActiveSubscribe(false);
      setIsActiveUnsubscribe(false);
      setIsActivePending(true);
    } else if ("Subscribe" == title) {
      setSelectedStatus("subscribed");
      setIsActiveSubscribe(true);
      setIsActiveUnsubscribe(false);
      setIsActivePending(false);
    } else {
      setSelectedStatus("unsubscribed");
      setIsActiveSubscribe(false);
      setIsActiveUnsubscribe(true);
      setIsActivePending(false);
    }
    setIsActiveStatus(false);
  };

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
              <div className="form-group status-dropdown" ref={statusMenuRef}>
                <label>Status</label>
                <button
                  type="button"
                  className={
                    isActiveStatus
                      ? "drop-down-button show"
                      : "drop-down-button"
                  }
                  onClick={handleStatus}
                >
                  {selectedStatus
                    ? capitalizeFirst(selectedStatus)
                    : "Select Status"}
                </button>
                <ul
                  className={
                    isActiveStatus
                      ? "add-contact-status mintmrm-dropdown show"
                      : "add-contact-status mintmrm-dropdown"
                  }
                >
                  <li
                    className={
                      isActivePending
                        ? "single-column mrm-custom-select-single-column-selected"
                        : "single-column"
                    }
                    onClick={() => handleSelectStatus("Pending")}
                  >
                    Pending
                  </li>
                  <li
                    className={
                      isActiveSubscribe
                        ? "single-column mrm-custom-select-single-column-selected"
                        : "single-column"
                    }
                    onClick={() => handleSelectStatus("Subscribe")}
                  >
                    Subscribe
                  </li>
                  <li
                    className={
                      isActiveUnsubscribe
                        ? "single-column mrm-custom-select-single-column-selected"
                        : "single-column"
                    }
                    onClick={() => handleSelectStatus("Unsubscribe")}
                  >
                    Unsubscribe
                  </li>
                </ul>
              </div>
              <div className="form-group lists-dropdown" ref={listMenuRef}>
                <label>Lists</label>
                <button
                  type="button"
                  className={
                    isActiveList ? "drop-down-button show" : "drop-down-button"
                  }
                  onClick={handleList}
                >
                  Select Lists
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
                  title="CHOOSE LIST"
                  refresh={refresh}
                  setRefresh={setRefresh}
                />
              </div>
              <div className="form-group tags-dropdown" ref={tagMenuRef}>
                <label>Tags</label>
                <button
                  type="button"
                  className={
                    isActiveTag ? "drop-down-button show" : "drop-down-button"
                  }
                  onClick={handleTag}
                >
                  Select Tags
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
                  title="CHOOSE TAG"
                  refresh={refresh}
                  setRefresh={setRefresh}
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
