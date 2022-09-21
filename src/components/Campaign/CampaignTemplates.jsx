import CrossIcon from "../Icons/CrossIcon";
import Delete from "../Icons/Delete";

export default function CampaignTemplates(props) {
  const { isClose, setIsClose } = props;
  const closeSection = () => {
    setIsClose(!isClose);
  };

  return (
    <div
      class={
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
            <div className="template-select-section">
              <button type="submit" className="save-template mintmrm-btn ">
                Start From Scratch
              </button>
            </div>
            <div className="template-select-section"></div>
            <div className="template-select-section"></div>
            <div className="template-select-section"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
