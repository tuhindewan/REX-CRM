import { useState } from "react";
import CrossIcon from "./Icons/CrossIcon";
import SuccessfulIcon from "./Icons/SuccessfulIcon";

export default function WarningNotification(props) {
  const [cancelBtn, setCancelBtn] = useState(false);
  const onCancel = () => {
    setCancelBtn(true);
  };

  return (
    <div
      style={{ display: props.display }}
      className={
        cancelBtn
          ? "warn-notification"
          : "warn-notification"
      }
    >
      <div className="alert-toast">
        <div className="alert-container">
          <div className="successfull-icon">
            <SuccessfulIcon />
          </div>
          <p>{props.message}</p>
          <div className="cross-icon" onClick={onCancel}>
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
