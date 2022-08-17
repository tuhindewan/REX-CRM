import { useState } from "react";
import { useGlobalStore } from "../hooks/useGlobalStore";
import "../style/Canvas.css";

const TriggerSettingsDrawer = (props) => {
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
        
        <label>Condition to Trigger:</label>
            <select id="triggerCondition">
            <option value="triggerTrue">True</option>
            <option value="triggerFalse">False</option>
        </select>
        
      </div>
    </>
  );
};

export default TriggerSettingsDrawer;
