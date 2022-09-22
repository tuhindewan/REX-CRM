import React, { useEffect, useRef, useState, useCallback } from "react";
import EmailEditor from "react-email-editor";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import ComputerIcon from "../Icons/ComputerIcon";
import LeftArrow from "../Icons/LeftArrow";
import MobileIcon from "../Icons/MobileIcon";


function useHookWithRefCallback() {
  const ref = useRef(null)
  const setRef = useCallback(node => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
    }

    // Save a reference to the node
    ref.current = node
    console.log(ref)
  }, [])

  return [setRef]
}


const EmailBuilder = (props) => {
  const { isCloseBuilder, setIsCloseBuilder, setEmailBody, emailData } = props;
  const emailEditorRef = useRef(null);
  const [design, setDesign] = useState({});
  // console.log(emailEditorRef.current);
  // emailEditorRef.current.editor.loadDesign(props.dataTest);
  useGlobalStore.setState({
    hideGlobalNav: true,
  });

  const [ref] = useHookWithRefCallback()

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml(
      (data) => {
        const { design, html } = data;
        setIsCloseBuilder("none");
        props.setEmailBody(html);
        props.setCloseTemplateSelection("hide");
      },
      {
        cleanup: true,
      }
    );
    emailEditorRef.current.editor.loadBlank({
      backgroundColor: "#e7e7e7",
    });
  };

  const closeEmailBuilder = () => {
    setIsCloseBuilder("hide");

    // set the body json and html for an email
    emailEditorRef.current.editor.exportHtml((data) => {
      setEmailBody(data);
    });
  };

  const onLoad = () => {
    // console.log(emailEditorRef, ref)
    // emailEditorRef.current.editor.loadDesign(emailData.email_json);
  }



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
        </div>
        <div style={{ height: "100%" }}>
          <EmailEditor
            minHeight={"100%"}
            ref={ref}
            onLoad={onLoad}
          />
        </div>
      </div>
    </>
  );
};
export default EmailBuilder;
