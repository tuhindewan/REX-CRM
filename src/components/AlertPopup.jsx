import { useState } from "react";
import CrossIcon from "./Icons/CrossIcon";
import Delete from "./Icons/Delete";

export default function AlertPopup(props) {
  const [deleteClass, setDeleteClass] = useState(false);

  const onCancel = () => {
    setDeleteClass(true);
    props.onShowAlert("none");
  };

  return (
    <div
      class={
        deleteClass
          ? "mintmrm-delete-alert-wrapper"
          : "mintmrm-delete-alert-wrapper"
      }
    >
      <div class="mintmrm-delete-confirmation">
        <div className="delete-confirmation-header">
          <h3>Alert</h3>
          <div className="cross-icon" onClick={onCancel}>
            <CrossIcon />
          </div>
        </div>
        <div className="delete-confirmation-body">
          <Delete />
          <p>Please select at least one item to bulk action.</p>
        </div>

        <ul class="mintmrm-delete-confirm-btn">
          <li>
            <button class="btn-default cancel" onClick={onCancel}>
              Ok
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
