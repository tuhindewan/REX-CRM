import React, { useEffect, useRef, useState } from "react";
import CrossIcon from "../../components/Icons/CrossIcon";
import SingleTemplate from "../../pages/TemplateGallery/SingleTemplate";
import { getAllTemplates, getSingleTemplate } from "../../services/Form";

const FormTemplate = (props) => {
  const { isClose, setIsClose, setIsTemplate, isOpen } = props;
  const [isCloseBuilder, setIsCloseBuilder] = useState("none");
  const [isTemplateBuilder, setIsTemplateBuilder] = useState(true);
  const [isFormBuilderOpen, setIsFormBuilderOpen] = useState(false);
  const [formTemplates, setFormTemplates] = useState([]);
  const [countFormTemplates, setCountFormTemplates] = useState(0);
  const [formBuilderUrl, setFormBuilderUrl] = useState(
    `${window.MRM_Vars.admin_url}admin.php?page=mrm-admin#/form-builder/`
  );

  const closeSection = () => {
    setIsClose(!isClose);
  };

  const onImportTemplate = async (template_id) => {
    getSingleTemplate(template_id).then((response) => {
      console.log(response);
    });
  }

  // Open template builder with full height and width
  const openTemplateBuilder = (event, data) => {
    setIsFormBuilderOpen(true);
    setIsTemplateBuilder(true);
    setIsCloseBuilder(!isCloseBuilder);
  };

  // Get all form templates ffrom the helper addon
  useEffect(() => {
    getAllTemplates(1, 10).then((response) => {
      setFormTemplates(response.forms);
      setCountFormTemplates(response.count);
    });
  }, []);

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
            ? "mintmrm-template-modal active"
            : "mintmrm-template-modal"
        }
      >
        <div className="template-modal-inner">
          <div className="cross-icon" onClick={closeSection}>
            <CrossIcon />
          </div>

          <div className="template-modal-overflow">
            <div className="template-modal-header">
              <h4 className="modal-title">Choose Form</h4>

              <ul className="template-filter">
                <li className="active">Pop-up</li>
                <li>Slide–in</li>
                <li>Fixed bar</li>
                <li>Below pages</li>
              </ul>

              <div className="template-type">
                <select name="" id="">
                  <option value="">Form Type</option>
                </select>
              </div>
            </div>

            <div className="template-modal-body">
              <div className="mintmrm-template-wrapper">
                <div className="mintmrm-single-template create-from-scratch">
                  <div className="mintmrm-single-remote-wrapper">
                    <div className="mintmrm-single-remote-template">
                      <button
                        type="button"
                        className="mintmrm-btn"
                        onClick={openFormBuilder}
                      >
                        {" "}
                        Start From Scratch{" "}
                      </button>
                      <div className="template-image-wrapper"></div>
                    </div>

                    <div className="template-info">
                      <span className="title">title</span>
                    </div>
                  </div>
                </div>

                {formTemplates?.length > 0 &&
                  formTemplates.map((template) => {
                    return (
                      <SingleTemplate
                        key={template.id}
                        template={template}
                        onImportTemplate={onImportTemplate}
                      />
                    );
                })}
                
              </div>
            </div>

            <div className="template-modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTemplate;
