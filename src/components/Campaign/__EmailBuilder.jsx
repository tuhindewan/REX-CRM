import React, { useEffect, useRef, useState, useCallback } from "react";
import EmailEditor from "react-email-editor";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import ComputerIcon from "../Icons/ComputerIcon";
import LeftArrow from "../Icons/LeftArrow";
import MobileIcon from "../Icons/MobileIcon";

const __EmailBuilder = (props) => {
  const { isCloseBuilder, setIsCloseBuilder, setEmailBody, emailData, isOpen, setIsEmailBuilderOpen } = props;
  const emailEditorRef = useRef(null);
  useGlobalStore.setState({
    hideGlobalNav: true,
  });

  const closeEmailBuilder = () => {
    // set the body json and html for an email
    emailEditorRef.current.editor.exportHtml((data) => {
      setEmailBody(data);
    });
    setIsCloseBuilder("hide");
    // setIsEmailBuilderOpen(false)
  };

  const onReady = () => {
    emailEditorRef.current.editor.loadDesign(emailData.email_json);
  }


  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      setEmailBody(data);
    });
  }

  return (
    <>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      <EmailEditor
          minHeight   ={"100%"}
          ref         ={emailEditorRef}
          // templateJSON={emailData?.email_json}
      />
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
              {/*<Link to="" onClick={closeEmailBuilder}>*/}
              {/*  <LeftArrow />*/}
              {/*</Link>*/}

              <Link to="" onClick={exportHtml}>
                Export
              </Link>
            </button>

            <div className="responsive-section">

              <button className="computer-view">
                <ComputerIcon />
              </button>
              <button className="mobile-view">
                <MobileIcon />
              </button>
            </div>
          </div>
        </div>
        <div style={{ height: "100%" }}>
          <EmailEditor
              minHeight   ={"100%"}
              ref         ={emailEditorRef}
              templateJSON={emailData?.email_json}
          />
        </div>
      </div>
    </>
  );
};
export default __EmailBuilder;
