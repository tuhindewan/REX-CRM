import React, { useRef } from "react";
import EmailEditor from "react-email-editor";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import ComputerIcon from "../Icons/ComputerIcon";
import LeftArrow from "../Icons/LeftArrow";
import MobileIcon from "../Icons/MobileIcon";

export default function EmailBuilder(props) {
  const { isCloseBuilder, setIsCloseBuilder } = props;
  const emailEditorRef = useRef(null);
  useGlobalStore.setState({
    hideGlobalNav: true,
  });
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      setIsCloseBuilder("none");
      props.setEmailBody(html);
      props.setCloseTemplateSelection("hide");
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
  };

  const closeEmailBuilder = () => {
    setIsCloseBuilder("none");
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
        <div style={{ height: "100%" }}>
          <EmailEditor
            minHeight={"100%"}
            ref={emailEditorRef}
            onLoad={onLoad}
            onReady={onReady}
          />
        </div>
      </div>
    </>
  );
}
