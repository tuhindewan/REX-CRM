import React, { useRef, useState } from "react";
import EmailEditor from "react-email-editor";
import { Link } from "react-router-dom";
import ComputerIcon from "../Icons/ComputerIcon";
import LeftArrow from "../Icons/LeftArrow";
import MobileIcon from "../Icons/MobileIcon";
import ThreeDotIcon from "../Icons/ThreeDotIcon";

const EmailBuilder = (props) => {
  const { isCloseBuilder, setIsCloseBuilder, setEmailBody, emailData } = props;
  const emailEditorRef = useRef(null);
  const [design, setDesign] = useState({});

  const closeEmailBuilder = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      console.log(data);
      setEmailBody(data);
      setIsCloseBuilder("hide");
    });
  };

  const onReady = () => {
    emailEditorRef.current.editor.loadDesign(emailData?.email_json);
  };

  return (
    <>
      <div
        style={{ display: isCloseBuilder }}
        className={
          props.isOpen && !isCloseBuilder
            ? "mintmrm-template-alert-wrapper"
            : "mintmrm-template-alert-wrapper"
        }
      >
        <div className="mrm-campaign-builder-navbar-wrapper">
          <div className="navbar-left-section">
            <button className="back-button">
              <Link to="" onClick={closeEmailBuilder}>
                <LeftArrow />
              </Link>
            </button>

            <div className="responsive-section">
              <button className="computer-view active">
                <ComputerIcon />
              </button>
              <button className="mobile-view">
                <MobileIcon />
              </button>
            </div>
          </div>
          <div className="navbar-right-section">
            <button className="three-dot-btn">
              <ThreeDotIcon />
            </button>
            <button className="mintmrm-btn outline">Send Test</button>
            <button className="mintmrm-btn">Next</button>
          </div>
        </div>
        <div className="email-builder-section" style={{ height: "100%" }}>
          <EmailEditor
            minHeight={"100%"}
            ref={emailEditorRef}
            onReady={onReady}
          />
        </div>
      </div>
    </>
  );
};

export default EmailBuilder;
