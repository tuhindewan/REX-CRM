import { useState } from "react";
import { useGlobalStore } from "../hooks/useGlobalStore";
import "../style/Canvas.css";

const TriggerSettingsDrawer = (props) => {
  
  return (
    <>
        <label>Condition to Trigger:</label>
            <select id="triggerCondition">
            <option value="triggerTrue">True</option>
            <option value="triggerFalse">False</option>
        </select>
    </>
  );
};

export default TriggerSettingsDrawer;
