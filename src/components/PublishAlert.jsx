import { useState } from "react";
import CrossIcon from "./Icons/CrossIcon";
import Delete from "./Icons/Delete";

export default function PublishAlert(props) {
  const [deleteClass, setDeleteClass] = useState(false);

  const onCancel = () => {
    setDeleteClass(true);
    props.onNotPublish("none");
  };

  const onPublish = () => {
    props.onPublishStatus(true);
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
          <h3>{props.title}</h3>
          <div className="cross-icon" onClick={onCancel}>
            <CrossIcon />
          </div>
        </div>
        <div className="delete-confirmation-body">
          <Delete />
          <p>{props.message}</p>
        </div>

        <ul class="mintmrm-delete-confirm-btn">
          <li>
            <button class="btn-default cancel" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              type="button"
              class="btn-default delete product-trash"
              onClick={onPublish}
            >
              Publish
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
