import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { submitCampaign } from "../../services/Campaign";
import CustomSelect from "../CustomSelect";
import Delete from "../Icons/Delete";
import InboxIcon from "../Icons/InboxIcon";
import Plus from "../Icons/Plus";
import SettingIcon from "../Icons/SettingIcon";
import TemplateIcon from "../Icons/TemplateIcon";
import useUnload from "../Unload";
import CampaignTemplates from "./CampaignTemplates";

// default email object empty template, this object is reused thats why declared here once
const defaultCampaignData = {
  subject: "",
  email_body: "",
  email_json: "",
  delay_count: 0,
  delay_value: "",
  preview: "",
  senderName: "",
  senderEmail: "",
  toError: null,
  senderEmailError: null,
};

export default function AddCampaign(props) {
  const navigate = useNavigate();
  // state variable for holding each email sequence[s] data in an array
  const [emailData, setEmailData] = useState([{ ...defaultCampaignData }]);

  // tracks currently selected email index and highlights in the UI
  const [selectedEmailIndex, setSelectedEmailIndex] = useState(0);
  // campaign title state variable
  const [campaignTitle, setCampaignTitle] = useState("");

  // recipient lists and recipients tags state variables to whom the email(s) should be sent
  const [recipientLists, setRecipientLists] = useState([]);
  const [recipientTags, setRecipientTags] = useState([]);
  const [showTemplates, setShowTemplates] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const [isTemplate, setIsTemplate] = useState(true);
  const [responseMessage, setResponseMessage] = useState("");
  const [delay, setDelay] = useState();
  const [dropDown, setDropDown] = useState(false);

  const [isValid, setIsValid] = useState(false);
  const [isPublishValid, setIsPublishValid] = useState(false);
  const names = [
    {
      value: "Minutes",
      id: "minutes",
    },
    {
      value: "Hours",
      id: "hours",
    },
    {
      value: "Days",
      id: "days",
    },
    {
      value: "Weeks",
      id: "weeks",
    },
  ];

  // Prepare campaign object and send post request to backend
  const saveCampaign = async (status) => {
    const campaign = {
      title: campaignTitle,
      recipients: {
        lists: recipientLists.map((list) => {
          return {
            id: list.id,
            title: list.title,
          };
        }),
        tags: recipientTags.map((tag) => {
          return {
            id: tag.id,
            title: tag.title,
          };
        }),
      },
      type: emailData.length > 1 ? "sequence" : "regular",
      status: status,
      created_by: `${window.MRM_Vars.current_userID}`,
      emails: emailData.map((email) => {
        return {
          email_subject: email.subject,
          email_preview_text: email.preview,
          sender_email: email.senderEmail,
          delay_count: email.delay_count,
          delay_value: email.delay_value,
          sender_name: email.senderName,
          // email_body: email.email_body,
          email_body: "Dummy Email Body",
          email_json: email.email_json,
        };
      }),
    };
    // Send POST request to save data
    submitCampaign(campaign).then((response) => {
      if (201 === response.code) {
        // Navigate to campaigns list with success message
        navigate("/campaign/edit/" + response.data.campaign.id, {
          state: { status: "campaign-created", message: response?.message },
        });
      } else {
        window.alert(response?.message);
      }
    });
  };

  // function for adding new email in the sequence
  const addNextEmail = () => {
    setEmailData((prevEmailData) => {
      setSelectedEmailIndex(prevEmailData.length);
      return [...prevEmailData, { ...defaultCampaignData }];
    });
  };

  // function for removing an email from the sequence
  const deleteEmail = (index) => {
    setEmailData((prevEmailData) => {
      const copy = [...prevEmailData];
      copy.splice(index, 1);
      setSelectedEmailIndex(
        index < copy.length ? index : Math.max(0, index - 1)
      );
      return copy;
    });
  };

  // handler function for each text field change in each email sequence
  const handleEmailFieldsChange = async (e) => {
    setEmailData((prevEmailData) => {
      const name = e.target.name;
      const value = e.target.value;
      const copy = [...prevEmailData];
      if (name == "subject" || name == "preview") {
        if (value.length > 200) return copy;
      }
      copy[selectedEmailIndex][name] = value;
      return copy;
    });
    validatePublish();
  };
  const openTemplate = async () => {
    setIsTemplate(true);
    setIsClose(!isClose);
  };
  const showTemplate = async () => {
    setShowTemplates(true);
  };

  const setEmailBody = async (data) => {
    const { design, html } = data;
    setEmailData((prevEmailData) => {
      const copy = [...prevEmailData];
      copy[selectedEmailIndex].email_body = html;
      copy[selectedEmailIndex].email_json = design;
      return copy;
    });
  };

  const showDropDown = () => {
    setDropDown(!dropDown);
  };

  const validate = () => {
    if (
      campaignTitle.length > 0 ||
      recipientLists.length != 0 ||
      recipientTags.length != 0 ||
      emailData[selectedEmailIndex]["subject"].length != 0 ||
      emailData[selectedEmailIndex]["preview"].length != 0 ||
      emailData[selectedEmailIndex]["senderName"].length != 0 ||
      emailData[selectedEmailIndex]["senderEmail"].length != 0 ||
      emailData[selectedEmailIndex].email_body.length != 0
    ) {
      return true;
    }
  };

  const validatePublish = () => {
    if (
      campaignTitle.length > 0 &&
      (recipientLists.length != 0 || recipientTags.length != 0) &&
      emailData[selectedEmailIndex]["subject"].length != 0 &&
      emailData[selectedEmailIndex]["preview"].length != 0 &&
      emailData[selectedEmailIndex]["senderName"].length != 0 &&
      emailData[selectedEmailIndex]["senderEmail"].length != 0 &&
      emailData[selectedEmailIndex].email_body.length != 0
    ) {
      return true;
    }
  };

  useEffect(() => {
    const isPublishValid = validatePublish();
    setIsPublishValid(isPublishValid);
    const isValid = validate();
    setIsValid(isValid);
  }, [
    campaignTitle,
    recipientLists,
    recipientTags,
    emailData[selectedEmailIndex]["subject"],
    emailData[selectedEmailIndex]["preview"],
    emailData[selectedEmailIndex]["senderName"],
    emailData[selectedEmailIndex]["senderEmail"],
    emailData[selectedEmailIndex].email_body,
    emailData[selectedEmailIndex].email_json,
  ]);

  let handlePublish = async () => {};

  useUnload((e) => {
    e.preventDefault();
    e.returnValue = "";
  });

  return (
      <>
        <div className="mintmrm-add-campaign">
      <div className="add-campaign-breadcrumb">
        <div className="mintmrm-container">
          <ul className="mintmrm-breadcrumb">
            <li>
              <Link to="/campaigns">Campaigns</Link>
            </li>
            <li className="active">Add Campaign</li>
          </ul>
        </div>
      </div>

      <div className="mintmrm-container">
        <div className="add-campaign-wrapper">
          <div className="add-email-section">
            {/**
             * loop through email data state and render the side buttons for each email sequence
             */}
            {emailData.map((email, index) => {
              return (
                <div className="email-box" key={`emails-${index}`}>
                  <div
                    className={
                      selectedEmailIndex != index
                        ? "email-select-section"
                        : "email-select-section selected"
                    }
                    onClick={() => setSelectedEmailIndex(index)}
                  >
                    <div className="email-icon-section">
                      <InboxIcon />
                    </div>
                    <h5>Email {index + 1}</h5>
                    {index > 0 && (
                      <div
                        className="delete-option"
                        onClick={() => deleteEmail(index)}
                      >
                        <Delete />
                      </div>
                    )}
                  </div>
                  <div className="link-line"></div>
                </div>
              );
            })}
            <div className="add-another-email" onClick={addNextEmail}>
              <Plus />
            </div>
          </div>
          <div className="email-content-section">
            <div className="email-container">
              {/**
               * only shows the title and recipients list on first email sequnce form
               */}
              {selectedEmailIndex == 0 && (
                <>
                  <div className="email-title input-item">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      value={campaignTitle}
                      onChange={(e) => setCampaignTitle(e.target.value)}
                      placeholder="Enter Campaign title"
                    />
                  </div>
                  <div className="email-to input-item">
                    <label>To:</label>
                    {/* <button className="all-recipients" onClick={showDropDown}>
                      All Subscriber
                      {dropDown ? <UpArrowIcon /> : <DownArrowIcon />}
                    </button>

                    <button
                      className="all-recipients selected"
                      onClick={showDropDown}
                    >
                      <span className="tags">5 Tags</span>
                      <span className="from">from</span>
                      <span className="lists">4 Lists.</span>
                      <span className="recipients">300 Recipients</span>
                      {dropDown ? <UpArrowIcon /> : <DownArrowIcon />}
                    </button>
                    
                    <CampaignCustomSelect dropDown={dropDown} />
                    <div></div> */}
                    <div>
                      <CustomSelect
                        selected={recipientLists}
                        setSelected={setRecipientLists}
                        endpoint="/lists"
                        placeholder="Lists"
                        name="list"
                        listTitle="CHOOSE LIST"
                        listTitleOnNotFound="No Data Found"
                        searchPlaceHolder="Search..."
                        allowMultiple={true}
                        showSearchBar={true}
                        showListTitle={true}
                        showSelectedInside={false}
                        allowNewCreate={true}
                      />
                      <CustomSelect
                        selected={recipientTags}
                        setSelected={setRecipientTags}
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
                  </div>
                </>
              )}
              {selectedEmailIndex > 0 && (
                <div className="email-from input-item">
                  <label>Delay</label>
                  <input
                    type="number"
                    name="delay_count"
                    value={emailData[selectedEmailIndex]["delay_count"]}
                    onChange={handleEmailFieldsChange}
                  />
                  <select
                    style={{ maxWidth: "fit-content" }}
                    onChange={handleEmailFieldsChange}
                    name="delay_value"
                    value={emailData[selectedEmailIndex]["delay_value"]}
                  >
                    <option disabled={true} value="">
                      --Choose delay--
                    </option>
                    {names.map((item) => (
                      <option key={item.id}>{item.value}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="email-subject input-item">
                <label>Subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={emailData[selectedEmailIndex]["subject"]}
                  onChange={handleEmailFieldsChange}
                  placeholder="Be Specific and concise to spark interest"
                />
                <span>
                  {emailData[selectedEmailIndex]["subject"].length}/200
                </span>
                <div className="setting-section">
                  <SettingIcon />
                </div>
              </div>
              <div className="email-preview input-item">
                <label>Preview Text</label>
                <input
                  type="text"
                  name="preview"
                  value={emailData[selectedEmailIndex]["preview"]}
                  onChange={handleEmailFieldsChange}
                  placeholder="Write a summary of your email to display after the subject line"
                />
                <span>
                  {emailData[selectedEmailIndex]["preview"].length}/200
                </span>
                <div className="setting-section">
                  <SettingIcon />
                </div>
              </div>
              <div className="email-from input-item">
                <label>From</label>
                <input
                  type="text"
                  name="senderName"
                  value={emailData[selectedEmailIndex]["senderName"]}
                  onChange={handleEmailFieldsChange}
                  placeholder="Enter Name"
                />
                <input
                  type="text"
                  name="senderEmail"
                  value={emailData[selectedEmailIndex]["senderEmail"]}
                  onChange={handleEmailFieldsChange}
                  placeholder="Enter Email"
                />
              </div>
              <div className="email-design input-item">
                <label>Design</label>
                <div className="add-template-section" onClick={openTemplate}>
                  <TemplateIcon />
                  <Link to="">Select a Template</Link>
                </div>

              </div>
            </div>
            <div className="content-save-section">
              {isPublishValid ? (
                <button
                  className="campaign-schedule mintmrm-btn outline"
                  // disabled={!isPublishValid}
                  onClick={handlePublish}
                >
                  Publish
                </button>
              ) : (
                ""
              )}
              {/* <ScheduleAlert /> */}
              <button
                type="submit"
                className="campaign-save mintmrm-btn"
                onClick={() => saveCampaign("draft")}
                disabled={!isValid}
              >
                Save draft
              </button>
              {responseMessage != "" && (
                <SuccessfulNotification
                  display={"block"}
                  message="Campaign is saved."
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
        <CampaignTemplates
            isOpen={isTemplate}
            isClose={isClose}
            isNewCampaign={true}
            selectedEmailIndex={selectedEmailIndex}
            emailData={emailData[selectedEmailIndex]}
            setIsClose={setIsClose}
            setEmailBody={setEmailBody}
            setIsTemplate={setIsTemplate}
            campaignData={{
              title: campaignTitle,
              recipients: {
                lists: recipientLists.map((list) => {
                  return {
                    id: list.id,
                    title: list.title,
                  };
                }),
                tags: recipientTags.map((tag) => {
                  return {
                    id: tag.id,
                    title: tag.title,
                  };
                }),
              },
              type: emailData.length > 1 ? "sequence" : "regular",
              status: status,
              created_by: `${window.MRM_Vars.current_userID}`,
              emails: emailData.map((email) => {
                return {
                  email_subject: email.subject,
                  email_preview_text: email.preview,
                  sender_email: email.senderEmail,
                  delay_count: email.delay_count,
                  delay_value: email.delay_value,
                  sender_name: email.senderName,
                  email_body: email.email_body,
                  email_json: email.email_json,
                };
              }),
            }}
        />
      </>
  );
}
