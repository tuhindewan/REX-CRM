import React, { useRef } from "react";
import EmailEditor from "react-email-editor";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import ComputerIcon from "../Icons/ComputerIcon";
import LeftArrow from "../Icons/LeftArrow";
import MobileIcon from "../Icons/MobileIcon";

export default function EmailBuilder(props) {
  const { isCloseBuilder, setIsCloseBuilder } = props;
  const emailEditorRef = useRef(null);
  const location = useLocation();
  // const [hideBuilder, setHideBuilder] = useState(props.isClose);
  useGlobalStore.setState({
    hideGlobalNav: true,
  });
  const navigate = useNavigate();
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      // navigate("/campaigns/create", {
      //   state: { email_body: html, status: "set_body" },
      // });
      setIsCloseBuilder(!isCloseBuilder);
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
    console.log("onReady");
  };

  const closeEmailBuilder = () => {
    setIsCloseBuilder(!isCloseBuilder);
    props.setIsClose(false);
  };
  return (
    <>
      <div
        className={
          props.isOpen && !isCloseBuilder
            ? "mintmrm-template-alert-wrapper"
            : "mintmrm-template-alert-wrapper inactive"
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
        <div>
          <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
        </div>
      </div>
    </>
  );
}
