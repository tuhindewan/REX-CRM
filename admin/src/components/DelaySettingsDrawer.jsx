import { useState } from "react";
import { useGlobalStore } from "../hooks/useGlobalStore";
import "../style/Canvas.css";

const DelaySettingsDrawer = (props) => {
  const {
    openSettingsDrawer,
    setOpenSettingsDrawer,
    selectedNodeID,
    selectedNodeType,
  } = props;

  const today =  new Date().toISOString().split('T')[0];
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

        <input type="date" id="delayDate"
            min={today}></input>
        
        <input type="time" id="delayTime"
            min="09:00" max="18:00"></input>
        
      </div>
    </>
  );
};

export default DelaySettingsDrawer;
