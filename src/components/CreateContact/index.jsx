// External dependencies
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Internal dependencies
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import InputItem from "../InputItem/index";
import Selectbox from "../Selectbox";

import "./style.css";
import { omit } from "lodash";

const CreateContact = (props) => {
  let navigate = useNavigate();

  // Prepare contact object
  const [contactData, setValues] = useState({
    email: "",
    first_name: "",
    last_name: "",
    status: ["pending"],
    lists: [],
    tags: [],
  });

  const [errors, setErrors] = useState({});

  // lists
  const [lists, setLists] = useState([]);

  // tags
  const [tags, setTags] = useState([]);

  // Error message
  const [errorMessage, setErrorMessage] = useState("");

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
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
      return alert(errors["email"]);
    }

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
      // navigate user with success message
      navigate("../contacts");
    } else {
      // you should show the error message here
      window.alert(responseData.message);
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

  return (
    <div className="create-contact">
      <div className="contact-container">
        <h2 className="conatct-heading">Add Contact</h2>

        <form onSubmit={handleSubmit}>
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
              <Selectbox
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
                values={contactData.status}
                tags={false}
                placeholder="Select Status"
                multiple={false}
                onSelect={onSelect}
              />
              <Selectbox
                label="Lists"
                name="lists"
                options={lists}
                values={contactData.lists}
                placeholder="Select List"
                tags={true}
                multiple={true}
                onSelect={onSelect}
                onRemove={onRemove}
              />
              <Selectbox
                label="Tags"
                name="tags"
                options={tags}
                values={contactData.tags}
                placeholder="Select Tags"
                tags={true}
                multiple={true}
                onSelect={onSelect}
                onRemove={onRemove}
              />
            </div>

            <div className="contact-button-field">
              <button
                className="contact-cancel soronmrm-btn outline"
                onClick={routeChange}
              >
                Cancel
              </button>
              <button type="submit" className="contact-save soronmrm-btn ">
                Save
              </button>
            </div>
          </div>
        </form>

        {/*this is just for the markup. You need to develop a good ui to show the*/}
        {/*error status*/}
        <div className={`contact-create-error`}>
          <p>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
