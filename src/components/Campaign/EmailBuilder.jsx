import React, { useRef } from "react";
import EmailEditor from "react-email-editor";
import { Link, useLocation } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import ComputerIcon from "../Icons/ComputerIcon";
import LeftArrow from "../Icons/LeftArrow";
import MobileIcon from "../Icons/MobileIcon";

export default function EmailBuilder() {
  const emailEditorRef = useRef(null);
  const location = useLocation();
  useGlobalStore.setState({
    hideGlobalNav: true,
  });

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };
  return (
    <>
      <div className="mrm-campaign-builder-navbar-wrapper">
        <div className="navbar-left-section">
          <button className="back-button">
            <Link to="/campaigns">
              <LeftArrow />
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
        <div className="navbar-right-section">
          <button onClick={exportHtml}>Export HTML</button>
        </div>
      </div>
      <div>
        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </div>
    </>
  );
}
