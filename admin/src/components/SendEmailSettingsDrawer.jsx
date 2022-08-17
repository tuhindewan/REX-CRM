import { useState } from "react";
import { useGlobalStore } from "../hooks/useGlobalStore";
import "../style/Canvas.css";

const SendEmailSettingsDrawer = (props) => {
  const {
    openSettingsDrawer,
    setOpenSettingsDrawer,
    selectedNodeID,
    selectedNodeType,
  } = props;

  return (
    <>
      <div
        className={`canvas-settings-wrapper ${
          openSettingsDrawer
            ? "canvas-settings-wrapper-open"
            : "canvas-settings-wrapper-close"
        }`}
      >
        <button onClick={() => setOpenSettingsDrawer(false)}>Close</button>
        <div className="canvas-step-title">{selectedNodeID}</div>
        <div className="canvas-step-title">{selectedNodeType}</div>
        
        <label>Select a List/Tag to send email:</label>
            <select id="emailCondition">
            <option value="emailToLists">Lists</option>
            <option value="emailToTags">Tags</option>
        </select>
        <h3>or,</h3>
        <input type="text" placeholder="Type a single email"/>
        
      </div>
    </>
  );
};

export default SendEmailSettingsDrawer;
