import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CrossIcon from "../Icons/CrossIcon";

import EmailBuilder from "./EmailBuilder";

export default function CampaignTemplates(props) {
  const {
    isClose,
    setIsClose,
    setEmailBody,
    emailData,
    selectedEmailIndex,
    isNewCampaign,
    campaignData,
    setIsTemplate,
  } = props;
  const [isCloseBuilder, setIsCloseBuilder] = useState("none");
  const [isTemplateBuilder, setIsTemplateBuilder] = useState(true);
  const [isEmailBuilderOpen, setIsEmailBuilderOpen] = useState(false);
  const [dataTest, setData] = useState({});

  const closeSection = () => {
    setIsClose(!isClose);
  };

  // Open template builder with full height and width
  const openTemplateBuilder = (event, data) => {
    setIsEmailBuilderOpen(true);
    setIsTemplateBuilder(true);
    setIsCloseBuilder(!isCloseBuilder);
  };

  // Templates selection popup close after finishing email building
  const setCloseTemplateSelection = (status) => {
    if ("hide" == status) {
      setIsClose(!isClose);
    }
  };
  const emailEditorRef = useRef(null);

  const closeEmailBuilder = () => {
    setIsCloseBuilder("none");
  };

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  return (
    <>
      {console.log(campaignData)}
      <div
        className={
          props.isOpen && !isClose
            ? "mintmrm-template-alert-wrapper"
            : "mintmrm-template-alert-wrapper inactive"
        }
      >
        <div class="mintmrm-template-confirmation">
          <div className="template-confirmation-header">
            <h3>Choose Template</h3>
            <div className="cross-icon" onClick={closeSection}>
              <CrossIcon />
            </div>
          </div>
          <div className="template-confirmation-body">
            <div className="template-header">
              <div className="template-tab-section">
                <ul className="tab-list">
                  <li className="brand-template active">Branded templates</li>
                  <li className="my-templates">My templates</li>
                </ul>
              </div>
              <div className="email-type-dropdown">
                <button className="type-button">Email Type</button>
              </div>
            </div>
            <div className="template-body">
              <div
                className="template-select-section"
                onClick={openTemplateBuilder}
              >
                {campaignData?.emails[0].email_body.length != 0 ? (
                  <Link to="">
                    <button
                      type="submit"
                      className="save-template mintmrm-btn "
                    >
                      Edit Template
                    </button>
                  </Link>
                ) : (
                  <Link to="">
                    <button
                      type="submit"
                      className="save-template mintmrm-btn "
                    >
                      Start From Scratch
                    </button>
                  </Link>
                )}
              </div>
              <div className="template-select-section"></div>
              <div className="template-select-section"></div>
              <div className="template-select-section"></div>
            </div>
          </div>
        </div>
      </div>

      <EmailBuilder
        isOpen={isTemplateBuilder}
        isCloseBuilder={isCloseBuilder}
        isEmailBuilderOpen={isEmailBuilderOpen}
        isNewCampaign={isNewCampaign}
        emailData={emailData}
        campaignData={campaignData}
        selectedEmailIndex={selectedEmailIndex}
        setEmailBody={setEmailBody}
        setIsEmailBuilderOpen={setIsEmailBuilderOpen}
        setIsTemplate={setIsTemplate}
        setIsCloseBuilder={closeEmailBuilder}
        setCloseTemplateSelection={setCloseTemplateSelection}
      />
    </>
  );
}
