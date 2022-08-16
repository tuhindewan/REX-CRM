import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  updateEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
} from "react-flow-renderer";
import { useGlobalStore } from "../hooks/useGlobalStore";

import Sidebar from "./Sidebar";
import Condition from "./Condition";
import TriggerStep from "./TriggerStep";
import ExitStep from "./ExitStep";

const initialNodes = [];

const getId = () => {
  const lastStepNodeID = useGlobalStore.getState().lastStepNodeID;
  const newID = lastStepNodeID + 1;
  console.log(lastStepNodeID);
  useGlobalStore.setState({ lastStepNodeID: newID });
  return `dndnode_${newID}`;
};

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
  const [openSettingsDrawer, setOpenSettingsDrawer] = useState(false);
  const [selectedNodeID, setSelectedNodeID] = useState(null);
  const [selectedNodeType, setSelectedNodeType] = useState(null);

  const deleteNode = useCallback((nodeID) => {
    console.log(`${nodeID}`);
    setNodes((prevNodes) => {
      console.log(prevNodes);
      return prevNodes.filter((node) => node.id != nodeID);
    });
    deleteEdges(nodeID);
  });

  const deleteEdges = useCallback(
    (nodeID) => {
      console.log(`${nodeID}`);
      setEdges((prevEdges) => {
        console.log(prevEdges);
        return prevEdges.filter(
          (edge) => edge.source != nodeID && edge.target != nodeID
        );
      });
    },
    [setEdges]
  );

  const resetNode = (nodeID) => {
    console.log(`${nodeID}`);
    deleteEdges(nodeID);
  };

  const openSettings = useCallback((nodeID, nodeType) => {
    setOpenSettingsDrawer(true);
    setSelectedNodeID(nodeID);
    setSelectedNodeType(nodeType);
  });

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
        id: getId(),
        type: nodeType,
        position,
        data: {
          deleteNode,
          deleteEdges,
          resetNode,
          openSettings,
        },
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
          <Background gap={10} size={0.5} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Canvas;
