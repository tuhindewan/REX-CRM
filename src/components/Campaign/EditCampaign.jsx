import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { updateCampaignRequest } from "../../services/Campaign";
import CustomSelect from "../CustomSelect";
import Delete from "../Icons/Delete";
import InboxIcon from "../Icons/InboxIcon";
import Plus from "../Icons/Plus";
import SettingIcon from "../Icons/SettingIcon";
import TemplateIcon from "../Icons/TemplateIcon";
import SuccessfulNotification from "../SuccessfulNotification";
import CampaignTemplates from "./CampaignTemplates";

// default email object empty template, this object is reused thats why declared here once
const defaultEmailData = {
  email_subject: "",
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

  // recipient lists and recipients tags state variables to whom the email(s) should be sent
  const [recipientLists, setRecipientLists] = useState([]);
  const [recipientTags, setRecipientTags] = useState([]);
  const [showTemplates, setShowTemplates] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const [isTemplate, setIsTemplate] = useState(true);
  const [responseMessage, setResponseMessage] = useState("");

  // get the campaign id from url
  const { id } = useParams();

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
      console.log(emails);
      setActiveEmailData(emails[0]);
      setSelectedEmailIndex(0);
      setCampaignTitle(campaign.title);
    });
  }, []);

  // Prepare campaign object and send post request to backend
  const updateCampaign = async () => {
    if (campaignTitle.length < 3) {
      alert("Please enter at least 3 characters for the campaign title.");
      return;
    }

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
      status: "ongoing",
      emails: emailData.map((email) => {
        if (email.delay_value == "Minutes") {
          email.delay = email.delay_count * 60;
        } else if (email.delay_value == "Hours") {
          email.delay = email.delay_count * 60 * 60;
        } else if (email.delay_value == "Days") {
          email.delay = email.delay_count * 60 * 60 * 24;
        } else if (email.delay_value == "Weeks") {
          email.delay = email.delay_count * 60 * 60 * 24 * 7;
        } else {
          email.delay = 0;
        }
        return {
          email_subject: email.subject,
          email_preview_text: email.preview,
          sender_email: email.senderEmail,
          delay: email.delay,
          delay_type: email.delay_value,
          sender_name: email.senderName,
          email_body: email.email_body,
          email_json: email.email_json,
        };
      }),
      campaign_id: id,
    };

    console.log(campaign);
    // Send PUT request to update campaign
    updateCampaignRequest(campaign).then((response) => {
      if (201 === response.code) {
        // Show success message
        setShowNotification("block");
        setMessage(response?.message);
      } else {
        window.alert(response?.message);
      }
    });
  };

  // function for adding new email in the sequence
  const addNextEmail = () => {
    setEmailData((prevEmailData) => {
      setSelectedEmailIndex(prevEmailData.length);
      setActiveEmailData(defaultEmailData);
      return [...prevEmailData, { ...defaultEmailData }];
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
  const handleEmailFieldsChange = (value, key) => {
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
                  <div key={`emails-${index}`}>
                    <div
                      className={
                        selectedEmailIndex != index
                          ? "email-select-section"
                          : "email-select-section selected"
                      }
                      onClick={() => setActiveEmailSequence(index)}
                    >
                      <div className="icon-section">
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
                      onChange={handleEmailFieldsChange}
                    />
                    <select
                      style={{ maxWidth: "fit-content" }}
                      onChange={handleEmailFieldsChange}
                      name="delay_value"
                      value={emailData[selectedEmailIndex]["delay_value"]}
                    >
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
                    value={activeEmailData.email_subject}
                    onChange={(e) =>
                      handleEmailFieldsChange(e.target.value, "email_subject")
                    }
                    placeholder="Be Specific and concise to spark interest"
                  />
                  <span>
                    {emailData[selectedEmailIndex]?.email_subject.length}/200
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
                    value={activeEmailData.email_preview_text}
                    onChange={(e) =>
                      handleEmailFieldsChange(
                        e.target.value,
                        "email_preview_text"
                      )
                    }
                    placeholder="Write a summary of your email to display after the subject line"
                  />
                  <span>
                    {emailData[selectedEmailIndex]?.email_subject.length}/200
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
                    value={activeEmailData.sender_name}
                    onChange={(e) =>
                      handleEmailFieldsChange(e.target.value, "sender_name")
                    }
                    placeholder="Enter Name"
                  />
                  <input
                    type="text"
                    name="senderEmail"
                    value={activeEmailData.sender_email}
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

                  {!isClose && (
                    <CampaignTemplates
                      isOpen={isTemplate}
                      isClose={isClose}
                      setIsClose={setIsClose}
                      setEmailBody={setEmailBody}
                      emailData={emailData[selectedEmailIndex]}
                    />
                  )}
                </div>
              </div>
              <div className="content-save-section">
                <button className="campaign-schedule mintmrm-btn outline">
                  Schedule
                </button>
                <button
                  type="submit"
                  className="campaign-save mintmrm-btn"
                  onClick={updateCampaign}
                >
                  Save
                </button>
                {/* {responseMessage && <p>{responseMessage}</p>} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessfulNotification display={showNotification} message={message} />
    </>
  );
}
