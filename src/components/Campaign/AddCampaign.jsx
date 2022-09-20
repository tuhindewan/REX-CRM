import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Delete from "../Icons/Delete";
import InboxIcon from "../Icons/InboxIcon";
import Plus from "../Icons/Plus";
import SettingIcon from "../Icons/SettingIcon";
import TemplateIcon from "../Icons/TemplateIcon";

const emptyInputStateTemplate = {
  title: "",
  to: "",
  subject: "",
  preview: "",
  fromName: "",
  fromEmail: "",
};

export default function AddCampaign(props) {
  const [emailData, setEmailData] = useState([
    {
      ...emptyInputStateTemplate,
    },
  ]);
  const [selectedEmailIndex, setSelectedEmailIndex] = useState(0);

  const addNextEmail = () => {
    setEmailData((prevEmailData) => {
      setSelectedEmailIndex(prevEmailData.length);
      return [...prevEmailData, { ...emptyInputStateTemplate }];
    });
  };

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

  const handleEmailFieldsChange = (e) => {
    setEmailData((prevEmailData) => {
      const copy = [...prevEmailData];
      copy[selectedEmailIndex][e.target.name] = e.target.value;
      return copy;
    });
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
          <div className="add-email-section">
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
              <div className="email-title input-item">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={emailData[selectedEmailIndex]["title"]}
                  onChange={handleEmailFieldsChange}
                  placeholder="Enter Email title"
                />
              </div>
              <div className="email-to input-item">
                <label>To:</label>
                <input
                  type="text"
                  name="to"
                  value={emailData[selectedEmailIndex]["to"]}
                  onChange={handleEmailFieldsChange}
                  placeholder="All Subscriber"
                />
              </div>
              <div className="email-subject input-item">
                <label>Subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={emailData[selectedEmailIndex]["subject"]}
                  onChange={handleEmailFieldsChange}
                  placeholder="Be Specific and concise to spark interest"
                />
                <span>0/200</span>
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
                <span>0/200</span>
                <div className="setting-section">
                  <SettingIcon />
                </div>
              </div>
              <div className="email-from input-item">
                <label>From</label>
                <input
                  type="text"
                  name="fromName"
                  value={emailData[selectedEmailIndex]["fromName"]}
                  onChange={handleEmailFieldsChange}
                  placeholder="Enter Name"
                />
                <input
                  type="text"
                  name="fromEmail"
                  value={emailData[selectedEmailIndex]["fromEmail"]}
                  onChange={handleEmailFieldsChange}
                  placeholder="Enter Email"
                />
              </div>
              <div className="email-design input-item">
                <label>Design</label>
                <div className="add-template-section">
                  <TemplateIcon />
                  <a href="">Select a Template</a>
                </div>
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
