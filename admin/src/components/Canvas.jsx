import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  updateEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from "react-flow-renderer";

import Sidebar from "./Sidebar";
import Condition from "./Condition";
import TriggerStep from "./TriggerStep";
import ExitStep from "./ExitStep";

const initialNodes = [
  {
    action: "trigger",
    id: "1",
    type: "triggerStep",
    data: { label: "Trigger" },
    position: { x: 250, y: 50 },
  },
  {
    action: "exit",
    id: "2",
    type: "exitStep",
    data: { label: "Exit" },
    position: { x: 250, y: 300 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes = {
  conditionNode: Condition,
  triggerStep: TriggerStep,
  exitStep: ExitStep,
};

const Canvas = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const nodeType = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof nodeType === "undefined" || !nodeType) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        action: nodeType.toLowerCase(),
        id: getId(),
        type: "default",
        position,
        data: { label: `${nodeType}` },
        className: "custom-node",
      };

      if (nodeType === "Condition") {
        newNode.type = "conditionNode";
      }

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  const onEdgeUpdate = useCallback(
    (oldEdge, newConnection) =>
      setEdges((els) => updateEdge(oldEdge, newConnection, els)),
    [setEdges]
  );

  const allnodes = () => {
    //console.log(nodes)
    console.log("Triggered...");
    //console.log(edges)

    let startNode = 0;

    for (const idx in edges) {
      if (edges[idx].source === "1") {
        startNode = idx;
        for (const jdx in nodes) {
          if (nodes[jdx].id === edges[startNode].target) {
            console.log(`${nodes[jdx].action}...`);
            break;
          }
        }
      }
    }
    let currentNodeId = edges[startNode].target;
    //console.log(currentNodeId)

    for (const idx in edges) {
      if (edges[idx].source === currentNodeId) {
        currentNodeId = edges[idx].target;
        for (const jdx in nodes) {
          if (nodes[jdx].id === currentNodeId) {
            console.log(`${nodes[jdx].action}...`);
          }
        }
      }
    }
  };

  return (
    <div className="dndflow">
      <Sidebar />
      <button
        type="submit"
        style={{ height: "40px", background: "yellow" }}
        onClick={allnodes}
      >
        Automate
      </button>
      
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onEdgeUpdate={onEdgeUpdate}
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
     
    </div>
  );
};

export default Canvas;
