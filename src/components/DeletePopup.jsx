import CrossIcon from "./Icons/CrossIcon";
import Delete from "./Icons/Delete";
import { useState } from 'react';

export default function DeletePopup() {
    const [deleteClass, setDeleteClass] = useState(false);

    const onCancel = () => {
        setDeleteClass(true);
    }
  return (
    <div class= {deleteClass ? "soronmrm-delete-alert-wrapper inactive" : "soronmrm-delete-alert-wrapper"} >
      <div class="soronmrm-delete-confirmation">
        <div className="delete-confirmation-header">
          <h3>Delete Tag</h3>
          <div className="cross-icon" onClick={onCancel}>
            <CrossIcon />
          </div>
        </div>
        <div className="delete-confirmation-body">
          <Delete />
          <p>Are you sure you want to delete the List?</p>
        </div>

        <ul class="soronmrm-delete-confirm-btn">
          <li>
            <button class="btn-default cancel" onClick={onCancel}>Cancel</button>
          </li>
          <li>
            <button
              type="button"
              class="btn-default delete product-trash"
              
            >
                Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
