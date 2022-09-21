import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Delete from "../Icons/Delete";
import InboxIcon from "../Icons/InboxIcon";
import Plus from "../Icons/Plus";
import SettingIcon from "../Icons/SettingIcon";
import TemplateIcon from "../Icons/TemplateIcon";
import CampaignTemplates from "./CampaignTemplates";
import DeletePopup from "../DeletePopup";

// default email object empty template, this object is reused thats why declared here once
const emptyInputStateTemplate = {
  subject: "",
  body: "",
  preview: "",
  senderName: "",
  senderEmail: "",
  toError: null,
  senderEmailError: null,
};

export default function AddCampaign(props) {
  // state variable for holding each email sequence[s] data in an array
  const [emailData, setEmailData] = useState([
    {
      ...emptyInputStateTemplate,
    },
  ]);

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


  // function for adding new email in the sequence
  const addNextEmail = () => {
    setEmailData((prevEmailData) => {
      setSelectedEmailIndex(prevEmailData.length);
      return [...prevEmailData, { ...emptyInputStateTemplate }];
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
  const handleEmailFieldsChange = (e) => {
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
  };
  const openTemplate = () => {
    setIsTemplate(true);
    setIsClose(!isClose);
  };
  const showTemplate = () => {
    setShowTemplates(true);
  };


  return (
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
                <>
                  <div
                    className={
                      selectedEmailIndex != index
                        ? "email-select-section"
                        : "email-select-section selected"
                    }
                    onClick={() => setSelectedEmailIndex(index)}
                    key={index}
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
                </>
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
                  </div>
                </>
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
                <CampaignTemplates
                  isOpen={isTemplate}
                  isClose={isClose}
                  setIsClose={setIsClose}
                />
              </div>
            </div>
            <div className="content-save-section">
              <button className="campaign-schedule mintmrm-btn outline">
                Schedule
              </button>
              <button type="submit" className="contact-save mintmrm-btn ">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
