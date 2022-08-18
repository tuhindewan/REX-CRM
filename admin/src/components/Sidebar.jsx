import React from "react";
import "../style/Canvas.css";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="canvas-drag-picker-wrapper">
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "triggerStep")}
        draggable
      >
        Trigger Step
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "sendEmailStep")}
        draggable
      >
        Send Email
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "delayStep")}
        draggable
      >
        Delay
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "conditionStep")}
        draggable
      >
        Condition
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "goalStep")}
        draggable
      >
        Goal
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "parallelPathStep")}
        draggable
      >
        Parallel Path
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "listStep")}
        draggable
      >
        List/Unlist
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "exitStep")}
        draggable
      >
        Exit Step
      </div>
    </div>
  );
};

export default Sidebar;
