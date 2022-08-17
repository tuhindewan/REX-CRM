import { useState } from "react";
import { useGlobalStore } from "../hooks/useGlobalStore";
import "../style/Canvas.css";

const ConditionSettingsDrawer = (props) => {
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
        
        <label>Condition :</label>
            <select id="ifElseCondition">
            <option value="if">True</option>
            <option value="else">False</option>
        </select>
        
      </div>
    </>
  );
};

export default ConditionSettingsDrawer;
