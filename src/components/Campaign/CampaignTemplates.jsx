import { useState } from "react";
import { Link } from "react-router-dom";
import CrossIcon from "../Icons/CrossIcon";
import sample from "../sample.json";
import EmailBuilder from "./EmailBuilder";

export default function CampaignTemplates(props) {
  const { isClose, setIsClose, setEmailBody } = props;
  const [isCloseBuilder, setIsCloseBuilder] = useState("none");
  const [isTemplateBuilder, setIsTemplateBuilder] = useState(true);
  const [dataTest, setData] = useState({});
  const closeSection = () => {
    setIsClose(!isClose);
  };

  // Open template builder with full height and width
  const openTemplateBuilder = (event, data) => {
    setIsTemplateBuilder(true);
    setIsCloseBuilder("block");
    setData(data);
  };

  // Templates selection popup close after finishing email building
  const setCloseTemplateSelection = (status) => {
    if ("hide" == status) {
      setIsClose(!isClose);
    }
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
              className="template-select-section"
              onClick={(event) => openTemplateBuilder(event, sample)}
            >
              <Link to="">
                <button type="submit" className="save-template mintmrm-btn ">
                  Start From Scratch
                </button>
              </Link>
            </div>
            <div className="template-select-section"></div>
            <div className="template-select-section"></div>
            <div className="template-select-section"></div>
          </div>
          <EmailBuilder
            isOpen={isTemplateBuilder}
            isCloseBuilder={isCloseBuilder}
            setEmailBody={setEmailBody}
            setIsCloseBuilder={setIsCloseBuilder}
            setCloseTemplateSelection={setCloseTemplateSelection}
            dataTest={dataTest}
          />
        </div>
      </div>
    </div>
  );
}
