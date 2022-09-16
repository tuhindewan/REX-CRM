import CrossIcon from "./Icons/CrossIcon";
import { useState } from "react";
import Smile from "./Icons/Smile";
import Attachment from "./Icons/Attachment";

export default function NoteDrawer(prop) {
  const { isCloseNote, setIsCloseNote } = prop;

  const closeSection = () => {
    setIsCloseNote(!isCloseNote);
  };
  return (
    <div
      class={
        prop.isOpenNote && !isCloseNote
          ? "mintmrm-step-settings-drawer show-drawer"
          : "mintmrm-step-settings-drawer"
      }
    >
      <span className="drawer-bg-overlay"></span>

      <div className="drawer-wrapper ConditionFields">
        <div className="drawer-header">
          {/* <!-- step title --> */}
          <h4 className="drawer-title">
            <span className="drawer-type">Add Note</span>
          </h4>

          {/* <!-- Add Condition title --> */}

          <span className="mintmrm-drawer-close" onClick={closeSection}>
            <CrossIcon />
          </span>
        </div>
        {/* <!-- /.drawer-header --> */}

        <div className="drawer-body">
          <div className="body-wrapper">
            <div className="body-title">
              <h5>Write a Note</h5>
              <span>2000 characters remaining</span>
            </div>
            <div className="text-area">
              <textarea />
            </div>
            <div className="note-footer">
              <Smile/>
              <Attachment/>
              <button type="submit" className="add-btn mintmrm-btn ">
                Add Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
