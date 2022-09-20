import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Delete from "../Icons/Delete";
import InboxIcon from "../Icons/InboxIcon";
import Plus from "../Icons/Plus";
import SettingIcon from "../Icons/SettingIcon";
import TemplateIcon from "../Icons/TemplateIcon";
import CampaignTemplates from "./CampaignTemplates";
import DeletePopup from "../DeletePopup";

export default function AddCampaign(props) {
  const [showAnotherEmail, setShowAnotherEmail] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const [isTemplate, setIsTemplate] = useState(true);

  const showNextEmail = () => {
    setShowAnotherEmail(true);
  };
  const showTemplate = () => {
    setShowTemplates(true);
  };
  const openTemplate = () => {
    setIsTemplate(true);
    setIsClose(!isClose);
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
            <div className="email-select-section">
              <div className="icon-section">
                <InboxIcon />
              </div>
              <h5>Email 1</h5>
            </div>
            <div className="link-line"></div>
            <div
              className={
                showAnotherEmail
                  ? "email-select-section another-email show"
                  : "email-select-section another-email"
              }
            >
              <div className="icon-section">
                <InboxIcon />
              </div>
              <h5>Email 2</h5>
              <div className="delete-option">
                <Delete />
              </div>
            </div>
            <div
              className={
                showAnotherEmail
                  ? "link-line show-line show"
                  : "link-line show-line"
              }
            ></div>
            <div className="add-another-email" onClick={showNextEmail}>
              <Plus />
            </div>
          </div>
          <div className="email-content-section">
            <div className="email-container">
              <div className="email-title input-item">
                <label>Title</label>
                <input
                  type="text
              "
                  placeholder="Enter Email title"
                />
              </div>
              <div className="email-to input-item">
                <label>To:</label>
                <input
                  type="text
              "
                  placeholder="All Subscriber"
                />
              </div>
              <div className="email-subject input-item">
                <label>Subject:</label>
                <input
                  type="text
              "
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
                  type="text
              "
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
                  type="text
              "
                  placeholder="Enter Name"
                />
                <input
                  type="text
              "
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
