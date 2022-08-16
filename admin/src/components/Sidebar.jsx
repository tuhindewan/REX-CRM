import React from "react";


const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    
    <aside>
      <div>
        <label htmlFor="automation">Select one :  </label>
        <select name="automation" id="automation">
          <option value="actions">Actions</option>
          <option value="rules">Rules</option>
        </select>
      </div>
      <div className="description">
        Select your flow...
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "Send Email")}
        draggable
      >
        Send Email
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Delay")}
        draggable
      >
        Delay
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "Condition")}
        draggable
      >
        Condition
      </div>
      <div
        className="dndnode inout"
        onDragStart={(event) => onDragStart(event, "Goal")}
        draggable
      >
        Goal
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "Parallel Path")}
        draggable
      >
        Parallel Path
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "List/Unlist")}
        draggable
      >
        List/Unlist
      </div>
    </aside>
  );
};

export default Sidebar;
