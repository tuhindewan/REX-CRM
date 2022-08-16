import React from "react";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside>
      <div>
        <label htmlFor="automation">Select one : </label>
        <select name="automation" id="automation">
          <option value="actions">Actions</option>
          <option value="rules">Rules</option>
        </select>
      </div>
      <div className="description">Select your flow...</div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "triggerStep")}
        draggable
      >
        Trigger Step
      </div>
      <div
        className="dndnode input"
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
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "conditionStep")}
        draggable
      >
        Condition
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "goalStep")}
        draggable
      >
        Goal
      </div>
      <div
        className="dndnode output"
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
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "exitStep")}
        draggable
      >
        Exit Step
      </div>
    </aside>
  );
};

export default Sidebar;
