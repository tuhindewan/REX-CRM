import CrossIcon from "./Icons/CrossIcon";
import { useState } from "react";

export default function EmailDrawer(prop) {
    const {isClose, setIsClose} = prop;

    const closeSection = () =>{
        setIsClose(!isClose)
    }
  return (
    <div class={prop.isOpen && !isClose ? "mintmrm-step-settings-drawer show-drawer" : "mintmrm-step-settings-drawer"}>
      <span className="drawer-bg-overlay"></span>

      <div className="drawer-wrapper ConditionFields">
        <div className="drawer-header">
          {/* <!-- step title --> */}
          <h4 className="drawer-title">
            <span className="drawer-type">New Message</span>
          </h4>

          {/* <!-- Add Condition title --> */}

          <span className="mintmrm-drawer-close" onClick={closeSection} >
            <CrossIcon />
          </span>
        </div>
        {/* <!-- /.drawer-header --> */}

        <div className="drawer-body">
          <div className="body-wrapper">
            <div className="email-to">
              <span className="">To:</span>
              <input type="text" />
            </div>
            <div className="email-subject">
              <span className="">Subject:</span>
              <input type="text" />
            </div>
            <div className="email-body">
              <textarea />
            </div>
            <div className="body-footer">
              <button className="contact-cancel mintmrm-btn outline">
                Cancel
              </button>
              <button type="submit" className="contact-save mintmrm-btn ">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
