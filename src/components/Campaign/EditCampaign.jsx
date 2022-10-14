import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  deleteCampaignEmail,
  updateCampaignRequest,
} from "../../services/Campaign";
import CustomSelect from "../CustomSelect";
import DeletePopup from "../DeletePopup";
import Delete from "../Icons/Delete";
import InboxIcon from "../Icons/InboxIcon";
import Plus from "../Icons/Plus";
import SettingIcon from "../Icons/SettingIcon";
import TemplateIcon from "../Icons/TemplateIcon";
import SuccessfulNotification from "../SuccessfulNotification";
import useUnload from "../Unload";
import WarningNotification from "../WarningNotification";
import CampaignTemplates from "./CampaignTemplates";

// default email object empty template, this object is reused thats why declared here once
const defaultEmailData = {
  email_subject: "",
  email_body: "",
  email_json: "",
  delay_count: 0,
  delay_value: "",
  email_preview_text: "",
  sender_name: "",
  sender_email: "",
  toError: null,
  senderEmailError: null,
};

export default function EditCampaign(props) {
  // state variable for holding each email sequence[s] data in an array
  const [emailData, setEmailData] = useState([{ ...defaultEmailData }]);
  const [activeEmailData, setActiveEmailData] = useState(defaultEmailData);
  const [showNotification, setShowNotification] = useState("none");
  const [message, setMessage] = useState("");

  // tracks currently selected email index and highlights in the UI
  const [selectedEmailIndex, setSelectedEmailIndex] = useState(0);
  // campaign title state variable
  const [campaignTitle, setCampaignTitle] = useState("");
  const [showWarning, setShowWarning] = useState("none");

  // recipient lists and recipients tags state variables to whom the email(s) should be sent
  const [recipientLists, setRecipientLists] = useState([]);
  const [recipientTags, setRecipientTags] = useState([]);
  const [showTemplates, setShowTemplates] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const [isTemplate, setIsTemplate] = useState(true);
  const [responseMessage, setResponseMessage] = useState("");
  const [isEmailDelete, setIsEmailDelete] = useState("none");
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [emailID, setEmailID] = useState();
  const [emailIndex, setEmailIndex] = useState();
  const [refresh, setRefresh] = useState(true);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isPublishValid, setIsPublishValid] = useState(false);
  const [campaignStatus, setCampaignStatus] = useState("");

  // get the campaign id from url
  const { id } = useParams();
  const location = useLocation();

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

  // fetch campaign data
  const fetchCampaignData = async () => {
    const response = await fetch(`/wp-json/mrm/v1/campaigns/${id}`);
    return await response.json();
  };

  // the data is fetched again whenver refresh is changed
  function toggleRefresh() {
    setRefresh((prev) => !prev);
  }

  useEffect(() => {
    fetchCampaignData().then((res) => {
      let campaign = res.data,
        emails =
          campaign.emails.length > 0
            ? campaign.emails
            : [{ ...defaultEmailData }];
      setRecipientLists(campaign.meta.recipients?.lists);
      setRecipientTags(campaign.meta.recipients?.tags);
      setEmailData(emails);
      setActiveEmailData(emails[0]);
      setSelectedEmailIndex(0);
      setCampaignTitle(campaign.title);
      setCampaignStatus(campaign.status);
      // toggleRefresh();
    });
    const isPublishValid = validatePublish();
    setIsPublishValid(isPublishValid);
    if ("campaign-created" == location.state?.status) {
      setShowNotification("block");
      setMessage(location.state?.message);
    }
    const timer = setTimeout(() => {
      setShowNotification("none");
    }, 3000);
    return () => clearTimeout(timer);
  }, [refresh]);

  // Prepare campaign object and send post request to backend
  const updateCampaign = async (status) => {
    if (campaignTitle.length < 3) {
      alert("Please enter at least 3 characters for the campaign title.");
      return;
    }

    const campaign = {
      title: campaignTitle,
      recipients: {
        lists: recipientLists?.map((list) => {
          return {
            id: list.id,
            title: list.title,
          };
        }),
        tags: recipientTags?.map((tag) => {
          return {
            id: tag.id,
            title: tag.title,
          };
        }),
      },
      type: emailData.length > 1 ? "sequence" : "regular",
      status: status,
      emails: emailData.map((email) => {
        return {
          email_subject: email.email_subject,
          email_preview_text: email.email_preview_text,
          sender_email: email.sender_email,
          delay_count: email.delay_count,
          delay_value: email.delay_value,
          sender_name: email.sender_name,
          // email_body: email.email_body,
          email_body: "Dummy Email Body",
          email_json: email.email_json,
        };
      }),
      campaign_id: id,
    };
    // Send PUT request to update campaign
    updateCampaignRequest(campaign).then((response) => {
      if (201 === response.code) {
        // Show success message
        setShowNotification("block");
        setMessage(response?.message);
        toggleRefresh();
      } else {
        setShowWarning("block");
        setMessage(response?.message);
      }
    });
    const isValid = validate();
    setIsValid(isValid);
    const timer = setTimeout(() => {
      setShowNotification("none");
    }, 3000);
    return () => clearTimeout(timer);
  };

  const validate = () => {
    if (
      campaignTitle.length > 0 ||
      recipientLists?.length != 0 ||
      recipientTags?.length != 0 ||
      emailData[selectedEmailIndex]["email_subject"]?.length != 0 ||
      emailData[selectedEmailIndex]["email_preview_text"]?.length != 0 ||
      emailData[selectedEmailIndex]["sender_name"]?.length != 0 ||
      emailData[selectedEmailIndex]["sender_email"]?.length != 0 ||
      emailData[selectedEmailIndex].email_body?.length != 0
    ) {
      return true;
    }
  };

  const validatePublish = () => {
    if (
      campaignTitle.length > 0 &&
      recipientLists?.length != 0 &&
      recipientTags?.length != 0 &&
      emailData[selectedEmailIndex]["email_subject"]?.length != 0 &&
      emailData[selectedEmailIndex]["email_preview_text"]?.length != 0 &&
      emailData[selectedEmailIndex]["sender_name"]?.length != 0 &&
      emailData[selectedEmailIndex]["sender_email"]?.length != 0 &&
      emailData[selectedEmailIndex].email_body?.length != 0
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
    emailData[selectedEmailIndex]["email_subject"],
    emailData[selectedEmailIndex]["email_preview_text"],
    emailData[selectedEmailIndex]["sender_name"],
    emailData[selectedEmailIndex]["sender_email"],
    emailData[selectedEmailIndex].email_body,
  ]);

  // function for adding new email in the sequence
  const addNextEmail = () => {
    setEmailData((prevEmailData) => {
      setSelectedEmailIndex(prevEmailData.length);
      setActiveEmailData(defaultEmailData);
      return [...prevEmailData, { ...defaultEmailData }];
    });
  };

  // function for removing an email from the sequence
  const deleteEmail = (index, email_id) => {
    setIsEmailDelete("block");
    setDeleteTitle("Delete Sequence Email");
    setDeleteMessage("Are you sure you want to delete the email?");
    setEmailIndex(index);
    setEmailID(email_id);
  };

  const onDeleteShow = async (status) => {
    setIsEmailDelete(status);
  };

  const onDeleteStatus = async (status) => {
    if (status) {
      setEmailData((prevEmailData) => {
        const copy = [...prevEmailData];
        copy.splice(emailIndex, 1);
        setSelectedEmailIndex(
          emailIndex < copy.length ? emailIndex : Math.max(0, emailIndex - 1)
        );
        return copy;
      });

      deleteCampaignEmail(id, emailID).then((response) => {
        if (200 === response.code) {
          setShowNotification("block");
          setMessage(response.message);
          toggleRefresh();
        } else {
          setErrors({
            ...errors,
            title: response?.message,
          });
        }
      });
    }
    setIsEmailDelete("none");
  };

  // handler function for each text field change in each email sequence
  const handleEmailFieldsChange = (value, key) => {
    setIsValid(true);
    setActiveEmailData((prevState) => ({
      ...prevState,
      [key]: value,
    }));

    setEmailData((prevEmailData) => {
      const copy = [...prevEmailData];
      if (key === "subject" || key === "preview") {
        if (value.length > 200) return copy;
      }
      copy[selectedEmailIndex][key] = value;
      return copy;
    });
  };
  const openTemplate = () => {
    setIsTemplate(true);
    setIsClose(!isClose);
  };
  const showTemplate = () => {
    setShowTemplates(true);
  };

  const setEmailBody = (html) => {
    setEmailData((prevEmailData) => {
      const copy = [...prevEmailData];
      copy[selectedEmailIndex].body = html;
      return copy;
    });
  };

  const setActiveEmailSequence = (index) => {
    setSelectedEmailIndex(index);
    setActiveEmailData(emailData[index]);
  };

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
              {emailData.map((email, index) => {
                return (
                  <div className="email-box" key={`emails-${index}`}>
                    <div
                      className={
                        selectedEmailIndex != index
                          ? "email-select-section"
                          : "email-select-section selected"
                      }
                      onClick={() => setActiveEmailSequence(index)}
                    >
                      <div className="email-icon-section">
                        <InboxIcon />
                      </div>
                      <h5>Email {index + 1}</h5>
                      {index > 0 && (
                        <div
                          className="delete-option"
                          onClick={() => deleteEmail(index, email.id)}
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
                {selectedEmailIndex == 0 && (
                  <>
                    <div className="email-title input-item">
                      <label>Title</label>
                      <input
                        type="text"
                        name="title"
                        value={campaignTitle}
                        onChange={(e) => {
                          setIsValid(true);
                          setCampaignTitle(e.target.value);
                        }}
                        placeholder="Enter Campaign title"
                      />
                    </div>
                    <div className="email-to input-item">
                      <label>To:</label>
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
                      style={{
                        border: "1px solid #e3e4e8",
                        marginRight: "15px",
                      }}
                      type="number"
                      name="delay_count"
                      value={emailData[selectedEmailIndex]["delay_count"]}
                      onChange={(e) =>
                        handleEmailFieldsChange(e.target.value, "delay_count")
                      }
                    />
                    <select
                      style={{ maxWidth: "fit-content" }}
                      onChange={(e) =>
                        handleEmailFieldsChange(e.target.value, "delay_value")
                      }
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
                    value={emailData[selectedEmailIndex]["email_subject"]}
                    onChange={(e) =>
                      handleEmailFieldsChange(e.target.value, "email_subject")
                    }
                    placeholder="Be Specific and concise to spark interest"
                  />
                  <span>
                    {emailData[selectedEmailIndex]?.email_subject?.length}/200
                  </span>
                  <div className="setting-section">
                    <SettingIcon />
                  </div>
                </div>
                <div className="email-preview input-item">
                  <label>Preview Text</label>
                  <input
                    type="text"
                    name="email_preview_text"
                    value={emailData[selectedEmailIndex]["email_preview_text"]}
                    onChange={(e) =>
                      handleEmailFieldsChange(
                        e.target.value,
                        "email_preview_text"
                      )
                    }
                    placeholder="Write a summary of your email to display after the subject line"
                  />
                  <span>
                    {emailData[selectedEmailIndex]?.email_preview_text?.length}
                    /200
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
                    value={emailData[selectedEmailIndex]["sender_name"]}
                    onChange={(e) =>
                      handleEmailFieldsChange(e.target.value, "sender_name")
                    }
                    placeholder="Enter Name"
                  />
                  <input
                    type="text"
                    name="senderEmail"
                    value={emailData[selectedEmailIndex]["sender_email"]}
                    onChange={(e) =>
                      handleEmailFieldsChange(e.target.value, "sender_email")
                    }
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
                {"ongoing" == campaignStatus ? (
                  <button className="campaign-save mintmrm-btn" disabled={true}>
                    On Going
                  </button>
                ) : (
                  <>
                    {/* <button
                      className="campaign-schedule mintmrm-btn outline"
                      disabled={!isPublishValid}
                      onClick={() => updateCampaign("ongoing")}
                    >
                      Publish
                    </button> */}
                    {isPublishValid ? (
                      <button
                        className="campaign-schedule mintmrm-btn outline"
                        // disabled={!isPublishValid}
                        onClick={() => updateCampaign("ongoing")}
                      >
                        Publish
                      </button>
                    ) : (
                      ""
                    )}
                    <button
                      type="submit"
                      className="campaign-save mintmrm-btn"
                      onClick={() => updateCampaign("draft")}
                      disabled={!isValid}
                    >
                      Save draft
                    </button>
                  </>
                )}

                {/* {responseMessage && <p>{responseMessage}</p>} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mintmrm-container" style={{ display: isEmailDelete }}>
        <DeletePopup
          title={deleteTitle}
          message={deleteMessage}
          onDeleteShow={onDeleteShow}
          onDeleteStatus={onDeleteStatus}
        />
      </div>
      <SuccessfulNotification display={showNotification} message={message} />
      <WarningNotification display={showWarning} message={message} />
      {!isClose && (
        <CampaignTemplates
          isOpen={isTemplate}
          isClose={isClose}
          setIsClose={setIsClose}
          isNewCampaign={false}
          selectedEmailIndex={selectedEmailIndex}
          emailData={emailData[selectedEmailIndex]}
          setEmailBody={setEmailBody}
          setIsTemplate={setIsTemplate}
          campaignData={{
            title: campaignTitle,
            recipients: {
              lists: recipientLists?.map((list) => {
                return {
                  id: list.id,
                  title: list.title,
                };
              }),
              tags: recipientTags?.map((tag) => {
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
                email_subject: email.email_subject,
                email_preview_text: email.email_preview_text,
                sender_email: email.sender_email,
                delay_count: email.delay_count,
                delay_value: email.delay_value,
                sender_name: email.sender_name,
                email_body: email.email_body,
                email_json: email.email_json,
              };
            }),
          }}
        />
      )}
    </>
  );
}
