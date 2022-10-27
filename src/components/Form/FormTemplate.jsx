import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CrossIcon from "../Icons/CrossIcon";

const FormTemplate = (props) => {
  const { isClose, setIsClose, setIsTemplate, isOpen } = props;

  const [isCloseBuilder, setIsCloseBuilder] = useState("none");
  const [isTemplateBuilder, setIsTemplateBuilder] = useState(true);
  const [isFormBuilderOpen, setIsFormBuilderOpen] = useState(false);
  const [formBuilderUrl, setFormBuilderUrl] = useState(
    `${window.MRM_Vars.admin_url}admin.php?page=mrm-admin#/form-builder/`
  );

  const closeSection = () => {
    setIsClose(!isClose);
  };

  // Open template builder with full height and width
  const openTemplateBuilder = (event, data) => {
    setIsFormBuilderOpen(true);
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

  const openFormBuilder = () => {
    window.location.replace(formBuilderUrl);
    window.location.reload();
  };

  return (
    <>
      <div
        className={
          isOpen && !isClose
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
                  {/* <li className="my-templates">My templates</li> */}
                </ul>
              </div>
              <div className="email-type-dropdown">
                {/* <button className="type-button">Email Type</button> */}
              </div>
            </div>
            <div className="template-body">
              <div
                className="template-select-section"
                onClick={openTemplateBuilder}
              >
                <a onClick={openFormBuilder}>
                  <button type="submit" className="save-template mintmrm-btn ">
                    Start From Scratch
                  </button>
                </a>
              </div>
              <div className="template-select-section coming-soon">
                <h2>Amazing Templates Are Coming Soon</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTemplate;
