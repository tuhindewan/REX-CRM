import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CrossIcon from "../Icons/CrossIcon";
import EmailBuilder from "./EmailBuilder";
import LeftArrow from "../Icons/LeftArrow";
import RightArrow from "../Icons/RightArrow";

export default function CampaignTemplates(props) {
  const { isClose, setIsClose, setEmailBody, emailData, selectedEmailIndex, isNewCampaign, campaignData } = props;
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


  return (
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
              className="template-select-section from-scratch"
              onClick={openTemplateBuilder}
            >
              <Link to="" className="create-scratch mintmrm-btn">
                Start From Scratch
              </Link>
              <div className="mrm-single-remote-wrapper">
                <div className="mrm-single-remote-template">
                  <div className="template-image-wrapper"></div>
                </div>
                <div className="mrm-template-info">
                  <span className="title">Sunglasses</span>
                </div>
              </div>
            </div>
            <div className="template-select-section">
              <div className="mrm-single-remote-wrapper">
                <div className="mrm-single-remote-template">
                  <div
                    className="template-image-wrapper"
                    style={{
                      backgroundImage: `url("https://templates.getwpfunnels.com/wp-content/uploads/2022/02/Consultancy-screen-shot-op-470x1024.jpeg")`,
                    }}
                  ></div>
                </div>
                <div className="mrm-template-info">
                  <span className="title">Sunglasses</span>
                </div>
              </div>
            </div>
            <div className="template-select-section">
              <div className="mrm-single-remote-wrapper">
                <div className="mrm-single-remote-template">
                  <div className="template-image-wrapper"></div>
                </div>
                <div className="mrm-template-info">
                  <span className="title">Sunglasses</span>
                </div>
              </div>
            </div>
            <div className="template-select-section">
              <div className="mrm-single-remote-wrapper">
                <div className="mrm-single-remote-template">
                  <div className="template-image-wrapper"></div>
                </div>
                <div className="mrm-template-info">
                  <span className="title">Sunglasses</span>
                </div>
              </div>
            </div>
            <div className="template-select-section">
              <div className="mrm-single-remote-wrapper">
                <div className="mrm-single-remote-template">
                  <div className="template-image-wrapper"></div>
                </div>
                <div className="mrm-template-info">
                  <span className="title">Sunglasses</span>
                </div>
              </div>
            </div>
            <div className="template-select-section">
              <div className="mrm-single-remote-wrapper">
                <div className="mrm-single-remote-template">
                  <div className="template-image-wrapper"></div>
                </div>
                <div className="mrm-template-info">
                  <span className="title">Sunglasses</span>
                </div>
              </div>
            </div>
            <div className="template-select-section">
              <div className="mrm-single-remote-wrapper">
                <div className="mrm-single-remote-template">
                  <div className="template-image-wrapper"></div>
                </div>
                <div className="mrm-template-info">
                  <span className="title">Sunglasses</span>
                </div>
              </div>
            </div>
          </div>
          <div className="template-footer">
            <div className="left-arrow">
              <LeftArrow />
            </div>
            <div className="right-arrow active">
              <RightArrow />
            </div>
          </div>
          <EmailBuilder
            isOpen                    ={isTemplateBuilder}
            isCloseBuilder            ={isCloseBuilder}
            isEmailBuilderOpen        ={isEmailBuilderOpen}
            isNewCampaign             ={isNewCampaign}
            emailData                 ={emailData}
            campaignData              ={campaignData}
            selectedEmailIndex        ={selectedEmailIndex}
            setEmailBody              ={setEmailBody}
            setIsEmailBuilderOpen     ={setIsEmailBuilderOpen}
            setIsCloseBuilder         ={closeEmailBuilder}
            setCloseTemplateSelection ={setCloseTemplateSelection}
          />
        </div>
      </div>
    </div>
  );
}
