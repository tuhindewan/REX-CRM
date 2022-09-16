import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DefaultEditor } from "react-simple-wysiwyg";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import EditButton from "../Icons/EditButton";
import TooltipQuestionIcon from "../Icons/TooltipQuestionIcon";
import InputItem from "../InputItem";
import Selectbox from "../Selectbox";

export default function AddCampaign(props) {
  const { id } = useParams();
  let navigate = useNavigate();
  const [enableForm, setEnableForm] = useState(false);
  const [enableTo, setEnableTo] = useState(false);
  const [enableSubject, setEnableSubject] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const [campaignId, setCampaignId] = useState();
  const [title, setTitle] = useState("Untitled");
  const [emailSubject, setEmailSubject] = useState({
    email_subject: "",
    email_preview_text: "",
  });

  const [stepStatus, setStepStatus] = useState({
    'step1' : 'close',
    'step2' : 'close',
    'step3' : 'close',
    'step4' : 'close',
  });

  const [emailBody, setEmailBody] = useState("");
  // lists
  const [lists, setLists] = useState([]);
  // tags
  const [tags, setTags] = useState([]);

  const [triggerButtonText, setTriggerButtonText] = useState('Send');
  const [status, setStatus] = useState("draft");

  // Prepare campaign object
  const [fromData, setFromData] = useState({
    sender_email: "",
    sender_name: "",
  });

  const [recipientsData, setRecipientsData] = useState({
    lists: [],
    tags: [],
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Fetch lists & tags
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/campaigns/${id}`
      );
      const resJson = await res.json();
      if (resJson.code == 200) {
        setTitle(resJson.data?.title);
        setFromData({
          sender_email: resJson.data?.sender_email,
          sender_name: resJson.data?.sender_name,
        });
        setEmailSubject({
          email_subject: resJson.data?.email_subject,
          email_preview_text: resJson.data?.email_preview_text,
        });
        setEmailBody(resJson.data?.email_body);
        setRecipientsData({
          lists: resJson.data?.settings.contact.lists,
          tags: resJson.data?.settings.contact.tags,
        });
      }
    }

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

    if (id) {
      getData();
      setViewData(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubjectChange = (e) => {
    const { name, value } = e.target;
    setEmailSubject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSelect = (e, name) => {
    setRecipientsData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate input on frontend before submitting the form
    // do not use axios

    let body = {
      ...fromData,
      title: title,
      status: status,
    };

    const res = await axios.post(`/wp-json/mrm/v1/campaigns`, body, {
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const handleTitleSubmit = async (e) => {
    e.preventDefault();
    // validate input on frontend before submitting the form
    // do not use axios

    let body = {
      title: title,
      status: status,
    };

    const res = await axios.post(`/wp-json/mrm/v1/campaigns`, body, {
      headers: {
        "Content-type": "application/json",
      },
    });

    const responseData = res.data,
      code = responseData?.code;

    if (code === 201) {
      // navigate user with success message
      setCampaignId(responseData.data.campaign_id);
      navigate(`/campaigns/update/${responseData.data.campaign_id}`);
      setViewData(true);
      setEnableForm(!enableForm);
    } else {
      // you should show the error message here
      setErrorMessage(responseData?.message);
    }
  };

  const sendCampaignEmail = async (e) => {
    e.preventDefault();
    // validate input on frontend before submitting the form
    // do not use axios

    setTriggerButtonText('In progress');

    let body = {};

    const res = await axios.post(
      `/wp-json/mrm/v1/campaign/${id}/schedule`,
      body,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (res.data.success) {
      setTriggerButtonText(res.data.message);
    }
  };

  const handleUpdate = async () => {
    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/campaigns/update/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...fromData,
          title,
          settings: {
            contact: [
              {
                lists: recipientsData.lists,
                tags: recipientsData.tags,
              },
            ],
          },
          ...emailSubject,
          email_body: emailBody,
          status: status,
        }),
      }
    );

    const responseData = res.data,
      code = responseData?.code;
    setViewData(true);
    setEnableForm(!enableForm);

    if (code === 201) {
      // navigate user with success message
      setViewData(true);
      setEnableForm(!enableForm);
    } else {
      // you should show the error message here
      setErrorMessage(responseData?.message);
    }
  };
  const [enableDesign, setEnableDesign] = useState(false);
  const [html, setHtml] = useState("");
  const [viewdata, setViewData] = useState(false);
  const [viewSubject, setViewSubject] = useState(false);

  const addForm = () => {
    setEnableForm(!enableForm);
  };
  const addTo = () => {
    setEnableTo(!enableTo);
  };
  const addSubject = () => {
    setEnableSubject(!enableSubject);
  };
  const addDesign = () => {
    setEnableDesign(!enableDesign);
  };
  const addTitle = () => {
    setEditButton(!editButton);
  };
  const handleText = (e) => {
    setEmailBody(e.target.value);
  };

  const onSave = () => {
    setViewData(true);
    setEnableForm(!enableForm);
  };

  return (
    <div className="mintmrm-add-campaign">
      <div className="add-campaign-breadcrumb">
        <div className="mintmrm-container">
          <ul className="mintmrm-breadcrumb">
            <li>
              {/* <a href="/contacts/allcampaigns">Campaigns</a> */}
              <Link to="/campaigns">Campaigns</Link>
            </li>
            <li className="active">Add Campaign</li>
          </ul>
        </div>
      </div>

      <div className="mintmrm-container">
        <div className="add-campaign-wrapper">
          <div className="add-campaign-header">
            <div className="campaign-title">
              <input
                className={
                  editButton
                    ? "campaign-name-input active-edit"
                    : "campaign-name-input"
                }
                type="text"
                onChange={handleTitleChange}
                value={title}
              />
              <h4
                className={
                  editButton ? "campaign-name active-edit" : "campaign-name"
                }
              >
                {title}
              </h4>

              <span
                onClick={addTitle}
                className="edit-name"
                title="Edit Campaign Name"
              >
                {!editButton ? (
                  <EditButton />
                ) : (
                  <span onClick={handleTitleSubmit}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-save"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />{" "}
                    </svg>
                  </span>
                )}
              </span>
            </div>

            <div className="campaign-action-btn">
              {/*<button className="mintmrm-btn outline">Save as draft</button>*/}
              {/*<button className="mintmrm-btn">Preview & test</button>*/}
            </div>
          </div>

          <div className="add-campaign-body">
            <div className="campaign-from-wrapper">

              <div className="campaign-form-box">
                <div className="form-box-header">
                  <div className="box-title">
                    <h6 className="title">From</h6>
                    <p
                      className={
                        viewdata && fromData?.sender_email
                          ? "box-meaning show-text"
                          : "box-meaning"
                      }
                    >
                      Who is sending this email campaign?
                    </p>
                    <p
                      className={
                        viewdata && fromData?.sender_email
                          ? "sender-info show-value"
                          : "sender-info"
                      }
                    >
                      {fromData.sender_name} <span className="dot"></span>{" "}
                      {fromData.sender_email}
                    </p>
                  </div>

                  <div className="box-action">
                    {viewdata && fromData?.sender_email ? (
                      <button
                        onClick={addForm}
                        className="edit-btn mintmrm-btn outline"
                      >
                        <EditButton />
                      </button>
                    ) : (
                      <button
                        onClick={addForm}
                        className="mintmrm-btn outline"
                      >
                        Add From
                      </button>
                    )}
                  </div>
                </div>

                <div
                  className={
                    enableForm ? "form-box-body active-form" : "form-box-body"
                  }
                >
                  <div className="mintmrm-row">
                    <div className="mintmrm-col-2">
                      <InputItem
                        label="Email"
                        name="sender_email"
                        value={fromData.sender_email}
                        handleChange={handleChange}
                      />
                    </div>

                    <div className="mintmrm-col-2">
                      <div className="form-group">
                        <label htmlFor="">
                          Name
                          <span className="mintmrm-tooltip">
                            <TooltipQuestionIcon />
                            <p>
                              Use something subscribers will instantly
                              recognize, like your company name.
                            </p>
                          </span>
                        </label>
                        <InputItem
                          name="sender_name"
                          value={fromData.sender_name}
                          handleChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    enableForm
                      ? "form-box-footer active-form"
                      : "form-box-footer"
                  }
                >
                  <button
                    onClick={id ? handleUpdate : handleSubmit}
                    className="mintmrm-btn"
                  >
                    Save
                  </button>
                  {/* <button onClick={onSave} className="mintmrm-btn">Save</button> */}
                </div>
              </div>

              <div className="campaign-form-box">
                <div className="form-box-header">
                  <div className="box-title">
                    <h6 className="title">To</h6>
                    <p className="box-meaning">Choose your contact list(s)</p>
                    <p className="sender-info">6 recipients</p>
                  </div>

                  <div className="box-action">
                    <button onClick={addTo} className="mintmrm-btn outline">
                      Add Recipients
                    </button>
                  </div>
                </div>

                <div
                  className={
                    enableTo ? "form-box-body active-form" : "form-box-body"
                  }
                >
                  <div className="mintmrm-row">
                    <div className="mintmrm-col-2">
                      <div className="form-group">
                        <Selectbox
                          label="Lists"
                          name="lists"
                          options={lists}
                          value={recipientsData.lists}
                          placeholder="Select List"
                          tags={true}
                          multiple={false}
                          onSelect={onSelect}
                        />
                      </div>
                    </div>

                    <div className="mintmrm-col-2">
                      <div className="form-group">
                        <Selectbox
                          label="Tags"
                          name="tags"
                          options={tags}
                          value={recipientsData.tags}
                          placeholder="Select Tags"
                          tags={true}
                          multiple={false}
                          onSelect={onSelect}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    enableTo ? "form-box-footer active-form" : "form-box-footer"
                  }
                >
                  <button onClick={handleUpdate} className="mintmrm-btn">
                    Save
                  </button>
                </div>
              </div>

              <div className="campaign-form-box">
                <div className="form-box-header">
                  <div className="box-title">
                    <h6 className="title">Subject</h6>

                    <p
                      className={
                        viewdata ? "box-meaning show-text" : "box-meaning"
                      }
                    >
                      Add a subject line for this campaign.
                    </p>

                    <p
                      className={
                        viewdata && emailSubject?.email_subject
                          ? "sender-info show-value"
                          : "sender-info"
                      }
                    >
                      Subject Line <span className="dot"></span>
                      {emailSubject?.email_subject}
                    </p>

                    <p
                      className={
                        viewdata && emailSubject?.email_preview_text
                          ? "sender-info show-value"
                          : "sender-info"
                      }
                    >
                      Preview Text <span className="dot"></span>
                      {emailSubject?.email_preview_text}
                    </p>
                  </div>

                  <div className="box-action">
                    {viewdata && emailSubject?.email_preview_text ? (
                      <button
                        onClick={addSubject}
                        className="edit-btn mintmrm-btn outline"
                      >
                        <EditButton />
                      </button>
                    ) : (
                      <button
                        onClick={addSubject}
                        className="mintmrm-btn outline"
                      >
                        Add Subject
                      </button>
                    )}
                  </div>
                </div>

                <div
                  className={
                    enableSubject
                      ? "form-box-body active-form"
                      : "form-box-body"
                  }
                >
                  <div className="mintmrm-row">
                    <div className="mintmrm-col-2">
                      <div className="form-group">
                        <label htmlFor="">Subject line</label>
                        <input
                          type="text"
                          name="email_subject"
                          value={emailSubject?.email_subject}
                          onChange={handleSubjectChange}
                        />
                        <span className="hints">
                          See how your <a href="">recent subject lines</a>{" "}
                          performed. View our <a href="">subject line guide</a>{" "}
                        </span>
                      </div>
                    </div>

                    <div className="mintmrm-col-2">
                      <div className="form-group">
                        <label htmlFor="">Preview text </label>
                        <input
                          type="text"
                          name="email_preview_text"
                          value={emailSubject?.email_preview_text}
                          onChange={handleSubjectChange}
                        />
                        <span className="hints">
                          <a href="">Preview text</a> appears in the inbox after
                          the subject line.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    enableSubject
                      ? "form-box-footer active-form"
                      : "form-box-footer"
                  }
                >
                  <button onClick={handleUpdate} className="mintmrm-btn">
                    Save
                  </button>
                </div>
              </div>

              <div className="campaign-form-box">
                <div className="form-box-header">
                  <div className="box-title">
                    <h6 className="title">Design</h6>
                    <p className="box-meaning">Create your email content.</p>
                  </div>

                  <div className="box-action">
                    <button
                      onClick={addDesign}
                      className="mintmrm-btn outline"
                    >
                      Design Email
                    </button>
                  </div>
                </div>

                <div
                  className={
                    enableDesign ? "form-box-body active-form" : "form-box-body"
                  }
                >
                  <div className="mintmrm-row">
                    <div className="box-text-col">
                      <DefaultEditor value={emailBody} onChange={handleText} />
                    </div>
                  </div>
                </div>

                <div
                  className={
                    enableDesign
                      ? "form-box-footer active-form"
                      : "form-box-footer"
                  }
                >
                  <button onClick={handleUpdate} className="mintmrm-btn">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="add-campaign-footer">
            {/*<button className="mintmrm-btn outline">Schedule</button>*/}
            <button
                onClick={sendCampaignEmail}
                className="mintmrm-btn"
            >
              {triggerButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
