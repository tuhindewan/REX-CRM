import { omit } from "lodash";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteSingleContact } from "../../services/Contact";
import { getCustomFields } from "../../services/CustomField";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import EditButton from "../Icons/EditButton";
import PlusIconSmall from "../Icons/PlusIconSmall";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import InputDate from "../InputDate";
import InputItem from "../InputItem/index";
import InputNumber from "../InputNumber";
import InoutPhone from "../InputPhone";
import Selectbox from "../Selectbox";
import SuccessfulNotification from "../SuccessfulNotification";
import SingleActivityFeed from "./SingleActivityFeed";
import FilterItems from "../BaseTable/FilterItems";
import AddItems from "./AddItems";

const toOrdinalSuffix = (num) => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ["st", "nd", "rd", "th"],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};

export default function ContactDetails() {
  const [isActive, setActive] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [tabState, setTabState] = useState(1);
  const urlParams = useParams();
  const [contactData, setContactData] = useState({});
  const [id, setId] = useState(urlParams.id);
  const [refresh, setRefresh] = useState();
  const [selectTag, setSelectTag] = useState(false);
  const [selectList, setSelectList] = useState(false);

  // Prepare contact object
  const [tagListsAdder, setTagListsAdder] = useState({
    lists: [],
    tags: [],
  });

  const [errors, setErrors] = useState({});

  // Error message
  const [errorMessage, setErrorMessage] = useState("");

  const [showNotification, setShowNotification] = useState("none");
  const [message, setMessage] = useState("");

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

  // lists
  const [lists, setLists] = useState([]);

  // tags
  const [tags, setTags] = useState([]);

  const [customFields, setCustomFields] = useState([]);

  const navigate = useNavigate();

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };
  const statusList = ["pending", "subscribed", "unsubscribed"];
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/contacts/${id}`
      );
      const resJson = await res.json();
      if (resJson.code == 200) {
        setContactData(resJson.data);
        // setLastUpdate(contactData.updated_at ? contactData.updated_at: contactData.created_at);
      }
    }

    getCustomFields().then((results) => {
      setCustomFields(results.data);
    });

    getData();
  }, [id, refresh]);

  useEffect(() => {
    getCustomFields().then((results) => {
      setCustomFields(results.data);
    });
  }, []);

  const lastUpdate = contactData.updated_at
    ? contactData.updated_at
    : contactData.created_at;

  const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthIdx = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthFullIdx = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateFormat = new Date(lastUpdate);
  const createDate = new Date(contactData.created_at);

  const day = weekDay[dateFormat.getDay()];
  const month = monthIdx[dateFormat.getMonth()];
  const date = dateFormat.getDate();
  const year = dateFormat.getFullYear();
  const hour = dateFormat.getHours();
  const minute = dateFormat.getMinutes();

  const createMonth = monthFullIdx[createDate.getMonth()];
  const createDay = createDate.getDate();
  const createYear = createDate.getFullYear();

  const toggleTab = (index) => {
    setTabState(index);
  };

  const shoMoreOption = () => {
    setActive(!isActive);
  };

  const showEditMode = () => {
    setEditMode(!editMode);
  };

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
      case "phone_number":
        if (
          !new RegExp(
            /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
          ).test(value)
        ) {
          setErrors({
            ...errors,
            phone_number: "Enter a valid phone number",
          });
        } else {
          let newObj = omit(errors, "phone_number");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleUpdate = async () => {
    if (Object.keys(errors).length !== 0) {
      return window.alert(
        errors["email"] ? errors["email"] : errors["phone_number"]
      );
    }

    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/contacts/${contactData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(contactData),
      }
    );
    toggleRefresh();
    showEditMode();
  };

  //to open input field to add new tag to a contact
  const [openTagSelectBox, setOpenTagSelectBox] = useState(false);
  const addTagInput = () => {
    setOpenTagSelectBox(!openTagSelectBox);
  };

  const handleAddTag = async () => {
    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/contacts/${id}/groups`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(tagListsAdder),
      }
    );
    toggleRefresh();
    setTagListsAdder({
      lists: [],
      tags: [],
    });
    addTagInput();
  };

  //to open input field to add new list to a contact
  const [openListSelectBox, setOpenListSelectBox] = useState(false);
  const addListInput = () => {
    setOpenListSelectBox(!openListSelectBox);
  };
  const handleAddList = async () => {
    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/contacts/${id}/groups`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(tagListsAdder),
      }
    );
    toggleRefresh();
    setTagListsAdder({
      lists: [],
      tags: [],
    });
    addListInput();
  };

  // Set values from contact form
  const handleChange = (event) => {
    const { name, value } = event.target;

    validate(event, name, value);
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleMetaChange = (e) => {
    const { name, value } = e.target;
    validate(e, name, value);
    setContactData((prevState) => ({
      ...prevState,
      meta_fields: {
        ...prevState.meta_fields,
        [name]: value,
      },
    }));
  };

  const onSelect = (e, name) => {
    const updatedOptions = [...e.target.options]
      .filter((option) => option.selected)
      .map((x) => x.value);

    setTagListsAdder((prevState) => ({
      ...prevState,
      [name]: updatedOptions,
    }));
  };

  const onRemove = (e, name) => {
    let unselectedItem = e.params.data.id;
    setTagListsAdder((prevState) => ({
      ...prevState,
      [name]: prevState[name].filter((x) => x !== unselectedItem),
    }));
  };

  const handleStatus = async (status) => {
    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/contacts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ status: status }),
      }
    );
    toggleRefresh();
  };

  // Send Double opt-in email
  const handleDoubleOptin = async () => {
    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/contacts/${id}/send-double-opt-in`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const responseData = await res.json();
    const code = responseData?.code;
    if (code === 200) {
      setShowNotification("block");
      setMessage(responseData.message);
    } else {
      // Validation messages
      setErrors({
        ...errors,
        email: responseData.message,
      });
    }
    toggleRefresh();
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSingleContact(id).then((result) => {
          if (result.status === 200) {
            navigate("/contacts");
          }
        });
      }
    });
  };

  const handleTagListDelete = async (id) => {
    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/contacts/${contactData.id}/groups`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ groups: [id] }),
      }
    );
    toggleRefresh();
  };

  const selectTags = () => {
    setSelectTag(!selectTag);
  };
  const selectLists = () => {
    setSelectList(!selectList);
  };

  return (
    <>
      <div className="mintmrm-contact-details">
        <div className="contact-details-banner">
          <div className="contact-details-breadcrumb">
            <div className="mintmrm-container">
              <ul className="mintmrm-breadcrumb">
                <li>
                  <Link to={`../contacts`}>Contact</Link>
                </li>
                <li className="active">
                  {contactData.first_name} {contactData.last_name}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-details-wrapper">
          <div className="mintmrm-container">
            <div className="contact-details-header">
              <div className="contact-author-info">
                <div className="author-img">
                  <img
                    src={contactData.avatar_url}
                    alt="contact-author-img"
                    style={{ "border-radius": "50%" }}
                  />
                </div>

                <div className="author-short-details">
                  <h2 className="author-name">
                    {contactData.first_name} {contactData.last_name}
                  </h2>

                  <p>
                    Added on {createMonth} {toOrdinalSuffix(createDay)},{" "}
                    {createYear}
                  </p>

                  {contactData.status == "subscribed" ? (
                    <span className="subscribe" style={{ color: "green" }}>
                      Subscribed
                    </span>
                  ) : contactData.status == "unsubscribed" ? (
                    <span className="unsubscribe" style={{ color: "red" }}>
                      Unsubscribed
                    </span>
                  ) : (
                    <span className="pending" style={{ color: "yellow" }}>
                      Pending
                    </span>
                  )}

                  {/* <div className="rating">
                  <span>
                    <StarIcon />
                  </span>
                  <span>
                    <StarIcon />
                  </span>
                  <span>
                    <StarIcon />
                  </span>
                  <span>
                    <StarIcon />
                  </span>
                  <span>
                    <StarIcon />
                  </span>
                </div> */}
                </div>
              </div>

              <div className="contact-author-mailing">
                {/* <button className="create-note">
                <CreateNoteIcon />
              </button>

              <button className="create-mail">
                <EmailIcon />
              </button> */}

                <button className="more-option" onClick={shoMoreOption}>
                  <ThreeDotIcon />

                  <ul
                    className={
                      isActive ? "mintmrm-dropdown show" : "mintmrm-dropdown"
                    }
                  >
                    {contactData.status == "pending" ? (
                      <li onClick={() => handleDoubleOptin()}>
                        Send Double Optin Email
                      </li>
                    ) : (
                      ""
                    )}

                    {statusList.map((status, index) => {
                      return (
                        <>
                          {contactData.status != status && (
                            <li
                              key={index}
                              onClick={() => handleStatus(status)}
                            >
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                            </li>
                          )}
                        </>
                      );
                    })}

                    <li className="delete" onClick={handleDelete}>
                      Delete
                    </li>
                  </ul>
                </button>
              </div>
            </div>

            <div className="contact-details-body">
              <div className="contact-details-left">
                <ul className="profile-info-nav">
                  <li
                    className={tabState === 1 ? "active" : ""}
                    onClick={() => toggleTab(1)}
                  >
                    Profile
                  </li>

                  <li
                    className={tabState === 2 ? "active" : ""}
                    onClick={() => toggleTab(2)}
                  >
                    Activities
                  </li>
                </ul>

                <div
                  className={
                    editMode
                      ? "info-nav-content is-edit-mode"
                      : "info-nav-content"
                  }
                >
                  <div
                    className={
                      tabState === 1
                        ? "profile-nav-content active"
                        : "profile-nav-content"
                    }
                  >
                    <ul className="basic-detail-info">
                      <h4>
                        Basic Information
                        <button className="edit-button" onClick={showEditMode}>
                          <EditButton />
                        </button>
                      </h4>
                      <li>
                        <span className="title">Email</span>
                        <span className="title-value">{contactData.email}</span>
                      </li>
                      <li>
                        <span className="title">First Name</span>
                        <span className="title-value">
                          {contactData.first_name}
                        </span>
                      </li>
                      <li>
                        <span className="title">Last Name</span>
                        <span className="title-value">
                          {contactData.last_name}
                        </span>
                      </li>
                      <li>
                        <span className="title">Phone Number</span>
                        <span className="title-value">
                          {contactData?.meta_fields?.phone_number
                            ? contactData?.meta_fields?.phone_number
                            : "-"}
                        </span>
                      </li>
                      <li>
                        <span className="title">Date of Birth</span>
                        <span className="title-value">
                          {contactData?.meta_fields?.date_of_birth
                            ? contactData?.meta_fields?.date_of_birth
                            : "-"}
                        </span>
                      </li>
                      <li>
                        <span className="title">Address</span>
                        <span className="title-value">
                          {contactData?.meta_fields?.address
                            ? contactData?.meta_fields?.address
                            : "-"}
                        </span>
                      </li>
                    </ul>
                    <ul className="other-detail-info">
                      <h4>Other</h4>
                      <li>
                        <span className="title">Gender</span>
                        <span className="title-value">
                          {contactData?.meta_fields?.gender
                            ? contactData?.meta_fields?.gender
                            : "-"}
                        </span>
                      </li>
                      <li>
                        <span className="title">Timezone</span>
                        <span className="title-value">
                          {contactData?.meta_fields?.timezone
                            ? contactData?.meta_fields?.timezone
                            : "-"}
                        </span>
                      </li>
                      <li>
                        <span className="title">Company</span>
                        <span className="title-value">
                          {contactData?.meta_fields?.company
                            ? contactData?.meta_fields?.company
                            : "-"}
                        </span>
                      </li>
                      <li>
                        <span className="title">Designation</span>
                        <span className="title-value">
                          {contactData?.meta_fields?.designation
                            ? contactData?.meta_fields?.designation
                            : "-"}
                        </span>
                      </li>
                      <li>
                        <span className="title">Last Update</span>
                        <span className="title-value">
                          {day}, {month} {date}, {year}
                          {/* {hour}:{minute} */}
                          {/*contactData.updated_at ? contactData.updated_at: contactData.created_at*/}
                        </span>
                      </li>

                      {customFields.map((field) => {
                        return (
                          <>
                            <li>
                              <span className="title">{field.title}</span>
                              <span className="title-value">
                                {contactData?.meta_fields?.[field.slug]
                                  ? contactData?.meta_fields?.[field.slug]
                                  : "-"}
                              </span>
                            </li>
                          </>
                        );
                      })}
                    </ul>

                    <div className="profile-edit-field">
                      <div className="basic-info-edit">
                        <h4>
                          Basic Information
                          {/* <Link to="">
                          <button className="add-contact-btn mintmrm-btn ">
                            <Plus /> Add contact
                          </button>
                        </Link> */}
                        </h4>
                        <div className="edit-input-field">
                          <InputItem
                            name="email"
                            label="Email"
                            handleChange={handleChange}
                            error={errors?.email}
                            isRequired
                            value={contactData.email}
                          />
                          <InputItem
                            name="first_name"
                            handleChange={handleChange}
                            label="First name"
                            value={contactData.first_name}
                          />
                          <InputItem
                            name="last_name"
                            handleChange={handleChange}
                            label="Last name"
                            value={contactData.last_name}
                          />
                          <InoutPhone
                            name="phone_number"
                            handleChange={handleMetaChange}
                            label="Phone number"
                            error={errors?.phone_number}
                            value={contactData?.meta_fields?.phone_number}
                          />
                          <InputDate
                            name="date_of_birth"
                            label="Date of Birth"
                            handleChange={handleMetaChange}
                            value={contactData?.meta_fields?.date_of_birth}
                          />
                        </div>
                        <div className="adress-info-edit">
                          <h4>Address</h4>
                          <div className="adress-input-field">
                            <InputItem
                              name="address"
                              handleChange={handleMetaChange}
                              value={contactData?.meta_fields?.address}
                            />
                            {/* <InputItem label="State" value={contactData?.meta_fields?.state} />
                          <InputItem label="City" value={contactData?.meta_fields?.city}/>
                          <InputItem label="Country" value={contactData?.meta_fields?.country}/> */}
                            {/*<Selectbox label="Country" index="country" />*/}
                          </div>
                        </div>
                      </div>
                      <div className="other-info-edit">
                        <h4>Other</h4>
                        <div className="edit-input-field">
                          <InputItem
                            name="gender"
                            handleChange={handleMetaChange}
                            label="Gender"
                            value={contactData?.meta_fields?.gender}
                          />
                          <InputItem
                            name="company"
                            handleChange={handleMetaChange}
                            label="Company"
                            value={contactData?.meta_fields?.company}
                          />
                          <InputItem
                            name="designation"
                            handleChange={handleMetaChange}
                            label="Designation"
                            value={contactData?.meta_fields?.designation}
                          />
                          {/*<Selectbox label="Company" index="company" />*/}
                          <InputItem
                            name="timezone"
                            handleChange={handleMetaChange}
                            label="Timezone"
                            value={contactData?.meta_fields?.timezone}
                          />
                          {/*<Selectbox label="Designation" index="designation" />*/}

                          {customFields.map((field) => {
                            return (
                              <>
                                {field.type == "text" && (
                                  <InputItem
                                    name={field.slug}
                                    label={field.title}
                                    handleChange={handleMetaChange}
                                    value={
                                      contactData?.meta_fields?.[field.slug]
                                    }
                                  />
                                )}

                                {field.type == "number" && (
                                  <InputNumber
                                    name={field.slug}
                                    label={field.title}
                                    handleChange={handleMetaChange}
                                    value={
                                      contactData?.meta_fields?.[field.slug]
                                    }
                                  />
                                )}

                                {field.type == "date" && (
                                  <InputDate
                                    name={field.slug}
                                    label={field.title}
                                    handleChange={handleMetaChange}
                                    value={
                                      contactData?.meta_fields?.[field.slug]
                                    }
                                  />
                                )}
                              </>
                            );
                          })}
                        </div>
                      </div>

                      <div className="save-cancel-button">
                        <button
                          className="mintmrm-btn outline cancel-btn"
                          onClick={showEditMode}
                        >
                          Cancel
                        </button>

                        <button
                          className="save-button mintmrm-btn"
                          onClick={handleUpdate}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      tabState === 2
                        ? "profile-nav-activities active"
                        : "profile-nav-activities"
                    }
                  >
                    <div className="activities-header">
                      <h4 className="title">Activity Feed</h4>
                      <Selectbox
                        name="type"
                        options={[
                          {
                            title: "Text",
                            id: "text",
                          },
                          {
                            title: "Date",
                            id: "date",
                          },
                          {
                            title: "Number",
                            id: "number",
                          },
                        ]}
                        tags={false}
                        placeholder="All activity"
                        multiple={false}
                        value={customFields.type}
                        onSelect={onSelect}
                        error={errors?.type}
                        index="profile-activity"
                      />
                    </div>

                    <div className="activities-feed-wrapper">
                      <SingleActivityFeed />
                      <SingleActivityFeed />
                      <SingleActivityFeed />
                    </div>
                  </div>
                </div>
              </div>
              {/* end .contact-details-left */}

              <div className="contact-details-right">
                {/* <div className="contact-stats">
                <div className="single-stat total-revenue">
                  <h2 className="stat">
                    $1,700
                    <ArrowIconXsml />
                  </h2>
                  <span className="stat-title">Total Revenue</span>
                </div>

                <div className="single-stat open-rate">
                  <h2 className="stat">
                    $1,700
                    <ArrowIconXsml />
                  </h2>
                  <span className="stat-title">Open rate</span>
                </div>

                <div className="single-stat click-rate">
                  <h2 className="stat">
                    $1,700
                    <ArrowIconXsml />
                  </h2>
                  <span className="stat-title">Click Rate</span>
                </div>

                <div className="single-stat total-order">
                  <h2 className="stat">
                    $1,700
                    <ArrowIconXsml />
                  </h2>
                  <span className="stat-title">Total Order</span>
                </div>
              </div> */}

                <hr />

                <div className="tags">
                  <h4 className="title">Tags</h4>
                  <div className="tag-wrapper">
                    {contactData?.tags?.map((tag, idx) => {
                      return (
                        <span className="single-list" key={tag.id}>
                          {tag.title}
                          <button
                            className="close-list"
                            title="Delete"
                            onClick={() => {
                              handleTagListDelete(tag.id);
                            }}
                          >
                            x
                          </button>
                        </span>
                      );
                    })}

                    {/* {contactData?.tags?.length == 0 && <span>No Tag Found  </span>} */}
                    <button className="add-list" onClick={addTagInput}>
                      {openTagSelectBox ? "" : <PlusIconSmall />}
                      {openTagSelectBox ? "-" : "Add"}
                    </button>
                  </div>
                  {openTagSelectBox && (
                    // <Selectbox
                    //   label=""
                    //   name="tags"
                    //   options={tags}
                    //   values={tagListsAdder.tags}
                    //   placeholder="Select Tags"
                    //   tags={true}
                    //   multiple={true}
                    //   onSelect={onSelect}
                    //   onRemove={onRemove}
                    // />
                    <>
                      <button className="choose-tag-btn" onClick={selectTags}>
                        Choose Tags
                      </button>
                      <AddItems isActive={selectTag} />
                    </>
                  )}
                  {/* {openTagSelectBox && (
                    <button className="add-list" onClick={handleAddTag}>
                      Add Tag
                    </button>
                  )} */}
                </div>

                <div className="lists">
                  <h4 className="title">Lists</h4>
                  <div className="list-wrapper">
                    {contactData?.lists?.map((list, idx) => {
                      return (
                        <span className="single-list" key={list.id}>
                          {list.title}

                          <button
                            className="close-list"
                            title="Delete"
                            onClick={() => {
                              handleTagListDelete(list.id);
                            }}
                          >
                            x
                          </button>
                        </span>
                      );
                    })}
                    {/* {contactData?.lists?.length == 0 && (
                    <span>No List Found  </span>
                  )} */}
                    <button className="add-list" onClick={addListInput}>
                      {openListSelectBox ? "" : <PlusIconSmall />}
                      {openListSelectBox ? "-" : "Add"}
                    </button>
                  </div>
                  {openListSelectBox && (
                    // <Selectbox
                    //   label=""
                    //   name="lists"
                    //   options={lists}
                    //   values={tagListsAdder.lists}
                    //   placeholder="Select Lists"
                    //   tags={true}
                    //   multiple={true}
                    //   onSelect={onSelect}
                    //   onRemove={onRemove}
                    // />
                    <>
                      <button className="choose-tag-btn" onClick={selectLists}>
                        Choose Tags
                      </button>
                      <AddItems isActive={selectList} />
                    </>
                  )}
                  {/* {openListSelectBox && (
                    <button className="add-list" onClick={handleAddList}>
                      Add List
                    </button>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessfulNotification display={showNotification} message={message} />
    </>
  );
}
