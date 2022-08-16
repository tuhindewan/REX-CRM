/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/src/App.jsx":
/*!***************************!*\
  !*** ./admin/src/App.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Dashboard_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Dashboard.jsx */ "./admin/src/components/Dashboard.jsx");
/* harmony import */ var react_flow_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flow-renderer */ "./node_modules/react-flow-renderer/dist/esm/index.js");


 // import 'react-flow-renderer/dist/style.css';



const App = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "app-title"
  }, "CRM Canvas"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_3__.ReactFlowProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Dashboard_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./admin/src/components/Canvas.jsx":
/*!*****************************************!*\
  !*** ./admin/src/components/Canvas.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_flow_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-flow-renderer */ "./node_modules/react-flow-renderer/dist/esm/index.js");
/* harmony import */ var react_flow_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-flow-renderer */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var react_flow_renderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-flow-renderer */ "./node_modules/react-flow-renderer/dist/esm/index4.js");
/* harmony import */ var react_flow_renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-flow-renderer */ "./node_modules/react-flow-renderer/dist/esm/index3.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./admin/src/components/Sidebar.jsx");
/* harmony import */ var _Condition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Condition */ "./admin/src/components/Condition.jsx");
/* harmony import */ var _TriggerStep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TriggerStep */ "./admin/src/components/TriggerStep.jsx");
/* harmony import */ var _ExitStep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExitStep */ "./admin/src/components/ExitStep.jsx");







const initialNodes = [{
  action: "trigger",
  id: "1",
  type: "triggerStep",
  data: {
    label: "Trigger"
  },
  position: {
    x: 250,
    y: 50
  }
}, {
  action: "exit",
  id: "2",
  type: "exitStep",
  data: {
    label: "Exit"
  },
  position: {
    x: 250,
    y: 300
  }
}];
let id = 0;

const getId = () => `dndnode_${id++}`;

const nodeTypes = {
  conditionNode: _Condition__WEBPACK_IMPORTED_MODULE_3__["default"],
  triggerStep: _TriggerStep__WEBPACK_IMPORTED_MODULE_4__["default"],
  exitStep: _ExitStep__WEBPACK_IMPORTED_MODULE_5__["default"]
};

const Canvas = () => {
  const reactFlowWrapper = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [nodes, setNodes, onNodesChange] = (0,react_flow_renderer__WEBPACK_IMPORTED_MODULE_6__.useNodesState)(initialNodes);
  const [edges, setEdges, onEdgesChange] = (0,react_flow_renderer__WEBPACK_IMPORTED_MODULE_6__.useEdgesState)([]);
  const [reactFlowInstance, setReactFlowInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(params => setEdges(eds => (0,react_flow_renderer__WEBPACK_IMPORTED_MODULE_7__.c)(params, eds)), [setEdges]);
  const onDragOver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);
  const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const nodeType = event.dataTransfer.getData("application/reactflow"); // check if the dropped element is valid

    if (typeof nodeType === "undefined" || !nodeType) {
      return;
    }

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top
    });
    const newNode = {
      action: nodeType.toLowerCase(),
      id: getId(),
      type: "default",
      position,
      data: {
        label: `${nodeType}`
      },
      className: "custom-node"
    };

    if (nodeType === "Condition") {
      newNode.type = "conditionNode";
    }

    setNodes(nds => nds.concat(newNode));
  }, [reactFlowInstance, setNodes]);
  const onEdgeUpdate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((oldEdge, newConnection) => setEdges(els => (0,react_flow_renderer__WEBPACK_IMPORTED_MODULE_7__.F)(oldEdge, newConnection, els)), [setEdges]);

  const allnodes = () => {
    //console.log(nodes)
    console.log("Triggered..."); //console.log(edges)

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

    let currentNodeId = edges[startNode].target; //console.log(currentNodeId)

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

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dndflow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    style: {
      height: "40px",
      background: "yellow"
    },
    onClick: allnodes
  }, "Automate"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "reactflow-wrapper",
    ref: reactFlowWrapper
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    nodes: nodes,
    edges: edges,
    nodeTypes: nodeTypes,
    onNodesChange: onNodesChange,
    onEdgesChange: onEdgesChange,
    onConnect: onConnect,
    onInit: setReactFlowInstance,
    onDrop: onDrop,
    onDragOver: onDragOver,
    onEdgeUpdate: onEdgeUpdate
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);

/***/ }),

/***/ "./admin/src/components/Condition.jsx":
/*!********************************************!*\
  !*** ./admin/src/components/Condition.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_flow_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-flow-renderer */ "./node_modules/react-flow-renderer/dist/esm/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_ref => {
  let {
    data,
    isConnectable
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_2__.Handle, {
    type: "target",
    position: "top",
    style: {
      background: '#555'
    },
    onConnect: params => console.log('handle onConnect', params),
    isConnectable: isConnectable
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "if/else"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_2__.Handle, {
    type: "source",
    position: "bottom",
    id: "if",
    style: {
      left: 10,
      background: '#555'
    },
    isConnectable: isConnectable
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_2__.Handle, {
    type: "source",
    position: "bottom",
    id: "else",
    style: {
      right: 10,
      left: 'auto',
      background: '#555'
    },
    isConnectable: isConnectable
  }));
}));

/***/ }),

/***/ "./admin/src/components/Dashboard.jsx":
/*!********************************************!*\
  !*** ./admin/src/components/Dashboard.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Canvas_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Canvas.jsx */ "./admin/src/components/Canvas.jsx");




const Dashboard = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dashboard-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Canvas_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./admin/src/components/ExitStep.jsx":
/*!*******************************************!*\
  !*** ./admin/src/components/ExitStep.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExitStep)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_flow_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flow-renderer */ "./node_modules/react-flow-renderer/dist/esm/index.js");
/* harmony import */ var react_flow_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-flow-renderer */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var _hooks_useGlobalStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGlobalStore */ "./admin/src/hooks/useGlobalStore.js");





const handleStyle = {
  left: 10
};
function ExitStep(_ref) {
  let {
    data
  } = _ref;
  const trigger = (0,_hooks_useGlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalStore)(state => state.trigger);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "step-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Exit Step"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, trigger), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_3__.Handle, {
    type: "source",
    position: react_flow_renderer__WEBPACK_IMPORTED_MODULE_4__.P.Top
  }));
}

/***/ }),

/***/ "./admin/src/components/Sidebar.jsx":
/*!******************************************!*\
  !*** ./admin/src/components/Sidebar.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "automation"
  }, "Select one :  "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: "automation",
    id: "automation"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "actions"
  }, "Actions"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "rules"
  }, "Rules"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "description"
  }, "Select your flow..."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dndnode input",
    onDragStart: event => onDragStart(event, "Send Email"),
    draggable: true
  }, "Send Email"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dndnode",
    onDragStart: event => onDragStart(event, "Delay"),
    draggable: true
  }, "Delay"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dndnode input",
    onDragStart: event => onDragStart(event, "Condition"),
    draggable: true
  }, "Condition"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dndnode inout",
    onDragStart: event => onDragStart(event, "Goal"),
    draggable: true
  }, "Goal"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dndnode output",
    onDragStart: event => onDragStart(event, "Parallel Path"),
    draggable: true
  }, "Parallel Path"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dndnode",
    onDragStart: event => onDragStart(event, "List/Unlist"),
    draggable: true
  }, "List/Unlist"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./admin/src/components/TriggerStep.jsx":
/*!**********************************************!*\
  !*** ./admin/src/components/TriggerStep.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TriggerStep)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_flow_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flow-renderer */ "./node_modules/react-flow-renderer/dist/esm/index.js");
/* harmony import */ var react_flow_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-flow-renderer */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var _hooks_useGlobalStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGlobalStore */ "./admin/src/hooks/useGlobalStore.js");





const handleStyle = {
  left: 10
};
function TriggerStep(_ref) {
  let {
    data
  } = _ref;
  const trigger = (0,_hooks_useGlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalStore)(state => state.trigger);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "step-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Trigger Step"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    onChange: event => {
      _hooks_useGlobalStore__WEBPACK_IMPORTED_MODULE_2__.useGlobalStore.setState({
        trigger: event.target.value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, trigger), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_flow_renderer__WEBPACK_IMPORTED_MODULE_3__.Handle, {
    type: "source",
    position: react_flow_renderer__WEBPACK_IMPORTED_MODULE_4__.P.Bottom
  }));
}

/***/ }),

/***/ "./admin/src/hooks/useGlobalStore.js":
/*!*******************************************!*\
  !*** ./admin/src/hooks/useGlobalStore.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGlobalStore": () => (/* binding */ useGlobalStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.js");

const useGlobalStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])(set => ({
  trigger: "",
  condition: [{
    key: "country",
    comparison: "includes",
    value: "dhaka"
  }, [{
    key: "country",
    comparison: "includes",
    value: "dhaka"
  }], {}],
  delay: "",
  goal: "",
  sendEmail: ""
}));

/***/ }),

/***/ "./admin/src/style/main.scss":
/*!***********************************!*\
  !*** ./admin/src/style/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ isNode),
/* harmony export */   "B": () => (/* binding */ isEdge),
/* harmony export */   "C": () => (/* binding */ ConnectionMode),
/* harmony export */   "D": () => (/* binding */ getOutgoers),
/* harmony export */   "E": () => (/* binding */ getIncomers),
/* harmony export */   "F": () => (/* binding */ updateEdge),
/* harmony export */   "G": () => (/* binding */ getTransformForBounds),
/* harmony export */   "H": () => (/* binding */ BackgroundVariant),
/* harmony export */   "I": () => (/* binding */ getBoundsofRects),
/* harmony export */   "J": () => (/* binding */ _arrayLikeToArray),
/* harmony export */   "K": () => (/* binding */ _unsupportedIterableToArray),
/* harmony export */   "L": () => (/* binding */ getD3Transition),
/* harmony export */   "M": () => (/* binding */ MarkerType),
/* harmony export */   "N": () => (/* binding */ fitView),
/* harmony export */   "P": () => (/* binding */ Position),
/* harmony export */   "_": () => (/* binding */ _slicedToArray),
/* harmony export */   "a": () => (/* binding */ _defineProperty),
/* harmony export */   "b": () => (/* binding */ useStore),
/* harmony export */   "c": () => (/* binding */ addEdge),
/* harmony export */   "d": () => (/* binding */ getMarkerId),
/* harmony export */   "e": () => (/* binding */ getConnectedEdges),
/* harmony export */   "f": () => (/* binding */ getDimensions),
/* harmony export */   "g": () => (/* binding */ getHostForElement),
/* harmony export */   "h": () => (/* binding */ PanOnScrollMode),
/* harmony export */   "i": () => (/* binding */ internalsSymbol),
/* harmony export */   "j": () => (/* binding */ clamp),
/* harmony export */   "k": () => (/* binding */ getNodesInside),
/* harmony export */   "l": () => (/* binding */ getSelectionChanges),
/* harmony export */   "m": () => (/* binding */ clampPosition),
/* harmony export */   "n": () => (/* binding */ handleNodeClick),
/* harmony export */   "o": () => (/* binding */ getRectOfNodes),
/* harmony export */   "p": () => (/* binding */ pointToRendererPoint),
/* harmony export */   "q": () => (/* binding */ ConnectionLineType),
/* harmony export */   "r": () => (/* binding */ rectToBox),
/* harmony export */   "s": () => (/* binding */ isNumeric),
/* harmony export */   "t": () => (/* binding */ getMouseHandler),
/* harmony export */   "u": () => (/* binding */ useStoreApi),
/* harmony export */   "v": () => (/* binding */ Provider),
/* harmony export */   "w": () => (/* binding */ createStore),
/* harmony export */   "x": () => (/* binding */ infiniteExtent),
/* harmony export */   "y": () => (/* binding */ applyNodeChanges),
/* harmony export */   "z": () => (/* binding */ applyEdgeChanges)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand */ "./node_modules/react-flow-renderer/node_modules/zustand/esm/index.js");
/* harmony import */ var zustand_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand/context */ "./node_modules/react-flow-renderer/node_modules/zustand/esm/context.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");




function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var ConnectionMode;

(function (ConnectionMode) {
  ConnectionMode["Strict"] = "strict";
  ConnectionMode["Loose"] = "loose";
})(ConnectionMode || (ConnectionMode = {}));

var BackgroundVariant;

(function (BackgroundVariant) {
  BackgroundVariant["Lines"] = "lines";
  BackgroundVariant["Dots"] = "dots";
})(BackgroundVariant || (BackgroundVariant = {}));

var PanOnScrollMode;

(function (PanOnScrollMode) {
  PanOnScrollMode["Free"] = "free";
  PanOnScrollMode["Vertical"] = "vertical";
  PanOnScrollMode["Horizontal"] = "horizontal";
})(PanOnScrollMode || (PanOnScrollMode = {}));

var ConnectionLineType;

(function (ConnectionLineType) {
  ConnectionLineType["Bezier"] = "default";
  ConnectionLineType["Straight"] = "straight";
  ConnectionLineType["Step"] = "step";
  ConnectionLineType["SmoothStep"] = "smoothstep";
  ConnectionLineType["SimpleBezier"] = "simplebezier";
})(ConnectionLineType || (ConnectionLineType = {}));

var MarkerType;

(function (MarkerType) {
  MarkerType["Arrow"] = "arrow";
  MarkerType["ArrowClosed"] = "arrowclosed";
})(MarkerType || (MarkerType = {}));

var Position;

(function (Position) {
  Position["Left"] = "left";
  Position["Top"] = "top";
  Position["Right"] = "right";
  Position["Bottom"] = "bottom";
})(Position || (Position = {}));

var getDimensions = function getDimensions(node) {
  return {
    width: node.offsetWidth,
    height: node.offsetHeight
  };
};
var clamp = function clamp(val) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.min(Math.max(val, min), max);
};
var clampPosition = function clampPosition(position, extent) {
  return {
    x: clamp(position.x, extent[0][0], extent[1][0]),
    y: clamp(position.y, extent[0][1], extent[1][1])
  };
};
var getHostForElement = function getHostForElement(element) {
  var _element$getRootNode, _window;

  return ((_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element)) || ((_window = window) === null || _window === void 0 ? void 0 : _window.document);
};
var getBoundsOfBoxes = function getBoundsOfBoxes(box1, box2) {
  return {
    x: Math.min(box1.x, box2.x),
    y: Math.min(box1.y, box2.y),
    x2: Math.max(box1.x2, box2.x2),
    y2: Math.max(box1.y2, box2.y2)
  };
};
var rectToBox = function rectToBox(_ref) {
  var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height;
  return {
    x: x,
    y: y,
    x2: x + width,
    y2: y + height
  };
};
var boxToRect = function boxToRect(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      x2 = _ref2.x2,
      y2 = _ref2.y2;
  return {
    x: x,
    y: y,
    width: x2 - x,
    height: y2 - y
  };
};
var getBoundsofRects = function getBoundsofRects(rect1, rect2) {
  return boxToRect(getBoundsOfBoxes(rectToBox(rect1), rectToBox(rect2)));
};
var isNumeric = function isNumeric(n) {
  return !isNaN(n) && isFinite(n);
};
var internalsSymbol = Symbol('internals');

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function handleParentExpand(res, updateItem) {
  var parent = res.find(function (e) {
    return e.id === updateItem.parentNode;
  });

  if (parent) {
    var extendWidth = updateItem.position.x + updateItem.width - parent.width;
    var extendHeight = updateItem.position.y + updateItem.height - parent.height;

    if (extendWidth > 0 || extendHeight > 0 || updateItem.position.x < 0 || updateItem.position.y < 0) {
      var _parent$style$width, _parent$style$height;

      parent.style = _objectSpread$4({}, parent.style) || {};
      parent.style.width = (_parent$style$width = parent.style.width) !== null && _parent$style$width !== void 0 ? _parent$style$width : parent.width;
      parent.style.height = (_parent$style$height = parent.style.height) !== null && _parent$style$height !== void 0 ? _parent$style$height : parent.height;

      if (extendWidth > 0) {
        parent.style.width += extendWidth;
      }

      if (extendHeight > 0) {
        parent.style.height += extendHeight;
      }

      if (updateItem.position.x < 0) {
        var xDiff = Math.abs(updateItem.position.x);
        parent.position.x = parent.position.x - xDiff;
        parent.style.width += xDiff;
        updateItem.position.x = 0;
      }

      if (updateItem.position.y < 0) {
        var yDiff = Math.abs(updateItem.position.y);
        parent.position.y = parent.position.y - yDiff;
        parent.style.height += yDiff;
        updateItem.position.y = 0;
      }

      parent.width = parent.style.width;
      parent.height = parent.style.height;
    }
  }
}

function applyChanges(changes, elements) {
  // we need this hack to handle the setNodes and setEdges function of the useReactFlow hook for controlled flows
  if (changes.some(function (c) {
    return c.type === 'reset';
  })) {
    return changes.filter(function (c) {
      return c.type === 'reset';
    }).map(function (c) {
      return c.item;
    });
  }

  var initElements = changes.filter(function (c) {
    return c.type === 'add';
  }).map(function (c) {
    return c.item;
  });
  return elements.reduce(function (res, item) {
    var currentChange = changes.find(function (c) {
      return c.id === item.id;
    });

    if (currentChange) {
      switch (currentChange.type) {
        case 'select':
          {
            res.push(_objectSpread$4(_objectSpread$4({}, item), {}, {
              selected: currentChange.selected
            }));
            return res;
          }

        case 'position':
          {
            var updateItem = _objectSpread$4({}, item);

            if (typeof currentChange.position !== 'undefined') {
              updateItem.position = currentChange.position;
            }

            if (typeof currentChange.positionAbsolute !== 'undefined') {
              updateItem.positionAbsolute = currentChange.positionAbsolute;
            }

            if (typeof currentChange.dragging !== 'undefined') {
              updateItem.dragging = currentChange.dragging;
            }

            if (updateItem.expandParent) {
              handleParentExpand(res, updateItem);
            }

            res.push(updateItem);
            return res;
          }

        case 'dimensions':
          {
            var _updateItem = _objectSpread$4({}, item);

            if (typeof currentChange.dimensions !== 'undefined') {
              _updateItem.width = currentChange.dimensions.width;
              _updateItem.height = currentChange.dimensions.height;
            }

            if (_updateItem.expandParent) {
              handleParentExpand(res, _updateItem);
            }

            res.push(_updateItem);
            return res;
          }

        case 'remove':
          {
            return res;
          }
      }
    }

    res.push(item);
    return res;
  }, initElements);
}

function applyNodeChanges(changes, nodes) {
  return applyChanges(changes, nodes);
}
function applyEdgeChanges(changes, edges) {
  return applyChanges(changes, edges);
}
var createSelectionChange = function createSelectionChange(id, selected) {
  return {
    id: id,
    type: 'select',
    selected: selected
  };
};
function getSelectionChanges(items, selectedIds) {
  return items.reduce(function (res, item) {
    var willBeSelected = selectedIds.includes(item.id);

    if (!item.selected && willBeSelected) {
      item.selected = true;
      res.push(createSelectionChange(item.id, true));
    } else if (item.selected && !willBeSelected) {
      item.selected = false;
      res.push(createSelectionChange(item.id, false));
    }

    return res;
  }, []);
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getHandleBounds = function getHandleBounds(selector, nodeElement, zoom) {
  var handles = nodeElement.querySelectorAll(selector);

  if (!handles || !handles.length) {
    return null;
  }

  var handlesArray = Array.from(handles);
  var nodeBounds = nodeElement.getBoundingClientRect();
  return handlesArray.map(function (handle) {
    var handleBounds = handle.getBoundingClientRect();
    return _objectSpread$3({
      id: handle.getAttribute('data-handleid'),
      position: handle.getAttribute('data-handlepos'),
      x: (handleBounds.left - nodeBounds.left) / zoom,
      y: (handleBounds.top - nodeBounds.top) / zoom
    }, getDimensions(handle));
  });
};
function getMouseHandler(id, getState, handler) {
  return handler === undefined ? handler : function (event) {
    var node = getState().nodeInternals.get(id);
    handler(event, _objectSpread$3({}, node));
  };
} // this handler is called by
// 1. the click handler when node is not draggable or selectNodesOnDrag = false
// or
// 2. the on drag start handler when node is draggable and selectNodesOnDrag = true

function handleNodeClick(_ref) {
  var id = _ref.id,
      store = _ref.store;

  var _store$getState = store.getState(),
      addSelectedNodes = _store$getState.addSelectedNodes,
      unselectNodesAndEdges = _store$getState.unselectNodesAndEdges,
      multiSelectionActive = _store$getState.multiSelectionActive,
      nodeInternals = _store$getState.nodeInternals;

  var node = nodeInternals.get(id);
  store.setState({
    nodesSelectionActive: false
  });

  if (!node.selected) {
    addSelectedNodes([id]);
  } else if (node.selected && multiSelectionActive) {
    unselectNodesAndEdges({
      nodes: [node]
    });
  }
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var isEdge = function isEdge(element) {
  return 'id' in element && 'source' in element && 'target' in element;
};
var isNode = function isNode(element) {
  return 'id' in element && !('source' in element) && !('target' in element);
};
var getOutgoers = function getOutgoers(node, nodes, edges) {
  if (!isNode(node)) {
    return [];
  }

  var outgoerIds = edges.filter(function (e) {
    return e.source === node.id;
  }).map(function (e) {
    return e.target;
  });
  return nodes.filter(function (n) {
    return outgoerIds.includes(n.id);
  });
};
var getIncomers = function getIncomers(node, nodes, edges) {
  if (!isNode(node)) {
    return [];
  }

  var incomersIds = edges.filter(function (e) {
    return e.target === node.id;
  }).map(function (e) {
    return e.source;
  });
  return nodes.filter(function (n) {
    return incomersIds.includes(n.id);
  });
};

var getEdgeId = function getEdgeId(_ref) {
  var source = _ref.source,
      sourceHandle = _ref.sourceHandle,
      target = _ref.target,
      targetHandle = _ref.targetHandle;
  return "reactflow__edge-".concat(source).concat(sourceHandle || '', "-").concat(target).concat(targetHandle || '');
};

var getMarkerId = function getMarkerId(marker, rfId) {
  if (typeof marker === 'undefined') {
    return '';
  }

  if (typeof marker === 'string') {
    return marker;
  }

  var idPrefix = rfId ? "".concat(rfId, "__") : '';
  return "".concat(idPrefix).concat(Object.keys(marker).sort().map(function (key) {
    return "".concat(key, "=").concat(marker[key]);
  }).join('&'));
};

var connectionExists = function connectionExists(edge, edges) {
  return edges.some(function (el) {
    return el.source === edge.source && el.target === edge.target && (el.sourceHandle === edge.sourceHandle || !el.sourceHandle && !edge.sourceHandle) && (el.targetHandle === edge.targetHandle || !el.targetHandle && !edge.targetHandle);
  });
};

var addEdge = function addEdge(edgeParams, edges) {
  if (!edgeParams.source || !edgeParams.target) {
    // @ts-ignore
    if (true) {
      console.warn("[React Flow]: Can't create edge. An edge needs a source and a target. Help: https://reactflow.dev/error#600");
    }

    return edges;
  }

  var edge;

  if (isEdge(edgeParams)) {
    edge = _objectSpread$2({}, edgeParams);
  } else {
    edge = _objectSpread$2(_objectSpread$2({}, edgeParams), {}, {
      id: getEdgeId(edgeParams)
    });
  }

  if (connectionExists(edge, edges)) {
    return edges;
  }

  return edges.concat(edge);
};
var updateEdge = function updateEdge(oldEdge, newConnection, edges) {
  if (!newConnection.source || !newConnection.target) {
    // @ts-ignore
    if (true) {
      console.warn("[React Flow]: Can't create a new edge. An edge needs a source and a target. Help: https://reactflow.dev/error#600");
    }

    return edges;
  }

  var foundEdge = edges.find(function (e) {
    return e.id === oldEdge.id;
  });

  if (!foundEdge) {
    // @ts-ignore
    if (true) {
      console.warn("[React Flow]: The old edge with id=".concat(oldEdge.id, " does not exist. Help: https://reactflow.dev/error#700"));
    }

    return edges;
  } // Remove old edge and create the new edge with parameters of old edge.


  var edge = _objectSpread$2(_objectSpread$2({}, oldEdge), {}, {
    id: getEdgeId(newConnection),
    source: newConnection.source,
    target: newConnection.target,
    sourceHandle: newConnection.sourceHandle,
    targetHandle: newConnection.targetHandle
  });

  return edges.filter(function (e) {
    return e.id !== oldEdge.id;
  }).concat(edge);
};
var pointToRendererPoint = function pointToRendererPoint(_ref2, _ref3, snapToGrid, _ref4) {
  var x = _ref2.x,
      y = _ref2.y;

  var _ref5 = _slicedToArray(_ref3, 3),
      tx = _ref5[0],
      ty = _ref5[1],
      tScale = _ref5[2];

  var _ref6 = _slicedToArray(_ref4, 2),
      snapX = _ref6[0],
      snapY = _ref6[1];

  var position = {
    x: (x - tx) / tScale,
    y: (y - ty) / tScale
  };

  if (snapToGrid) {
    return {
      x: snapX * Math.round(position.x / snapX),
      y: snapY * Math.round(position.y / snapY)
    };
  }

  return position;
};
var getRectOfNodes = function getRectOfNodes(nodes) {
  if (nodes.length === 0) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }

  var box = nodes.reduce(function (currBox, _ref7) {
    var positionAbsolute = _ref7.positionAbsolute,
        position = _ref7.position,
        width = _ref7.width,
        height = _ref7.height;
    return getBoundsOfBoxes(currBox, rectToBox({
      x: positionAbsolute ? positionAbsolute.x : position.x,
      y: positionAbsolute ? positionAbsolute.y : position.y,
      width: width || 0,
      height: height || 0
    }));
  }, {
    x: Infinity,
    y: Infinity,
    x2: -Infinity,
    y2: -Infinity
  });
  return boxToRect(box);
};
var getNodesInside = function getNodesInside(nodeInternals, rect) {
  var _ref8 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0, 1],
      _ref9 = _slicedToArray(_ref8, 3),
      tx = _ref9[0],
      ty = _ref9[1],
      tScale = _ref9[2];

  var partially = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var excludeNonSelectableNodes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var rBox = rectToBox({
    x: (rect.x - tx) / tScale,
    y: (rect.y - ty) / tScale,
    width: rect.width / tScale,
    height: rect.height / tScale
  });
  var visibleNodes = [];
  nodeInternals.forEach(function (node) {
    var positionAbsolute = node.positionAbsolute,
        width = node.width,
        height = node.height,
        _node$selectable = node.selectable,
        selectable = _node$selectable === void 0 ? true : _node$selectable;

    if (excludeNonSelectableNodes && !selectable) {
      return false;
    }

    var nBox = rectToBox(_objectSpread$2(_objectSpread$2({}, positionAbsolute), {}, {
      width: width || 0,
      height: height || 0
    }));
    var xOverlap = Math.max(0, Math.min(rBox.x2, nBox.x2) - Math.max(rBox.x, nBox.x));
    var yOverlap = Math.max(0, Math.min(rBox.y2, nBox.y2) - Math.max(rBox.y, nBox.y));
    var overlappingArea = Math.ceil(xOverlap * yOverlap);
    var notInitialized = typeof width === 'undefined' || typeof height === 'undefined' || width === null || height === null;
    var partiallyVisible = partially && overlappingArea > 0;
    var area = (width || 0) * (height || 0);
    var isVisible = notInitialized || partiallyVisible || overlappingArea >= area;

    if (isVisible) {
      visibleNodes.push(node);
    }
  });
  return visibleNodes;
};
var getConnectedEdges = function getConnectedEdges(nodes, edges) {
  var nodeIds = nodes.map(function (node) {
    return node.id;
  });
  return edges.filter(function (edge) {
    return nodeIds.includes(edge.source) || nodeIds.includes(edge.target);
  });
};
var getTransformForBounds = function getTransformForBounds(bounds, width, height, minZoom, maxZoom) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.1;
  var xZoom = width / (bounds.width * (1 + padding));
  var yZoom = height / (bounds.height * (1 + padding));
  var zoom = Math.min(xZoom, yZoom);
  var clampedZoom = clamp(zoom, minZoom, maxZoom);
  var boundsCenterX = bounds.x + bounds.width / 2;
  var boundsCenterY = bounds.y + bounds.height / 2;
  var x = width / 2 - boundsCenterX * clampedZoom;
  var y = height / 2 - boundsCenterY * clampedZoom;
  return [x, y, clampedZoom];
};
var getD3Transition = function getD3Transition(selection) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return selection.transition().duration(duration);
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function calculateXYZPosition(node, nodeInternals, parentNodes, result) {
  var _result$x, _parentNode$position$, _parentNode$position, _result$y, _parentNode$position$2, _parentNode$position2, _parentNode$internals, _parentNode$internals2, _result$z, _parentNode$internals3, _parentNode$internals4, _result$z2;

  if (!node.parentNode) {
    return result;
  }

  var parentNode = nodeInternals.get(node.parentNode);
  return calculateXYZPosition(parentNode, nodeInternals, parentNodes, {
    x: ((_result$x = result.x) !== null && _result$x !== void 0 ? _result$x : 0) + ((_parentNode$position$ = (_parentNode$position = parentNode.position) === null || _parentNode$position === void 0 ? void 0 : _parentNode$position.x) !== null && _parentNode$position$ !== void 0 ? _parentNode$position$ : 0),
    y: ((_result$y = result.y) !== null && _result$y !== void 0 ? _result$y : 0) + ((_parentNode$position$2 = (_parentNode$position2 = parentNode.position) === null || _parentNode$position2 === void 0 ? void 0 : _parentNode$position2.y) !== null && _parentNode$position$2 !== void 0 ? _parentNode$position$2 : 0),
    z: ((_parentNode$internals = (_parentNode$internals2 = parentNode[internalsSymbol]) === null || _parentNode$internals2 === void 0 ? void 0 : _parentNode$internals2.z) !== null && _parentNode$internals !== void 0 ? _parentNode$internals : 0) > ((_result$z = result.z) !== null && _result$z !== void 0 ? _result$z : 0) ? (_parentNode$internals3 = (_parentNode$internals4 = parentNode[internalsSymbol]) === null || _parentNode$internals4 === void 0 ? void 0 : _parentNode$internals4.z) !== null && _parentNode$internals3 !== void 0 ? _parentNode$internals3 : 0 : (_result$z2 = result.z) !== null && _result$z2 !== void 0 ? _result$z2 : 0
  });
}

function createNodeInternals(nodes, nodeInternals) {
  var nextNodeInternals = new Map();
  var parentNodes = {};
  nodes.forEach(function (node) {
    var _currInternals$intern;

    var z = isNumeric(node.zIndex) ? node.zIndex : node.selected ? 1000 : 0;
    var currInternals = nodeInternals.get(node.id);

    var internals = _objectSpread$1(_objectSpread$1({
      width: currInternals === null || currInternals === void 0 ? void 0 : currInternals.width,
      height: currInternals === null || currInternals === void 0 ? void 0 : currInternals.height
    }, node), {}, {
      positionAbsolute: {
        x: node.position.x,
        y: node.position.y
      }
    });

    if (node.parentNode) {
      internals.parentNode = node.parentNode;
      parentNodes[node.parentNode] = true;
    }

    Object.defineProperty(internals, internalsSymbol, {
      enumerable: false,
      value: {
        handleBounds: currInternals === null || currInternals === void 0 ? void 0 : (_currInternals$intern = currInternals[internalsSymbol]) === null || _currInternals$intern === void 0 ? void 0 : _currInternals$intern.handleBounds,
        z: z
      }
    });
    nextNodeInternals.set(node.id, internals);
  });
  nextNodeInternals.forEach(function (node) {
    if (node.parentNode && !nextNodeInternals.has(node.parentNode)) {
      throw new Error("Parent node ".concat(node.parentNode, " not found"));
    }

    if (node.parentNode || parentNodes[node.id]) {
      var _node$internalsSymbol, _node$internalsSymbol2;

      var _calculateXYZPosition = calculateXYZPosition(node, nextNodeInternals, parentNodes, _objectSpread$1(_objectSpread$1({}, node.position), {}, {
        z: (_node$internalsSymbol = (_node$internalsSymbol2 = node[internalsSymbol]) === null || _node$internalsSymbol2 === void 0 ? void 0 : _node$internalsSymbol2.z) !== null && _node$internalsSymbol !== void 0 ? _node$internalsSymbol : 0
      })),
          x = _calculateXYZPosition.x,
          y = _calculateXYZPosition.y,
          z = _calculateXYZPosition.z;

      node.positionAbsolute = {
        x: x,
        y: y
      };
      node[internalsSymbol].z = z;

      if (parentNodes[node.id]) {
        node[internalsSymbol].isParent = true;
      }
    }
  });
  return nextNodeInternals;
}
function fitView(get) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _get = get(),
      nodeInternals = _get.nodeInternals,
      width = _get.width,
      height = _get.height,
      minZoom = _get.minZoom,
      maxZoom = _get.maxZoom,
      d3Zoom = _get.d3Zoom,
      d3Selection = _get.d3Selection,
      fitViewOnInitDone = _get.fitViewOnInitDone,
      fitViewOnInit = _get.fitViewOnInit;

  if (options.initial && !fitViewOnInitDone && fitViewOnInit || !options.initial) {
    if (d3Zoom && d3Selection) {
      var nodes = Array.from(nodeInternals.values()).filter(function (n) {
        return options.includeHiddenNodes ? n.width && n.height : !n.hidden;
      });
      var nodesInitialized = nodes.every(function (n) {
        return n.width && n.height;
      });

      if (nodes.length > 0 && nodesInitialized) {
        var _options$minZoom, _options$maxZoom, _options$padding;

        var bounds = getRectOfNodes(nodes);

        var _getTransformForBound = getTransformForBounds(bounds, width, height, (_options$minZoom = options.minZoom) !== null && _options$minZoom !== void 0 ? _options$minZoom : minZoom, (_options$maxZoom = options.maxZoom) !== null && _options$maxZoom !== void 0 ? _options$maxZoom : maxZoom, (_options$padding = options.padding) !== null && _options$padding !== void 0 ? _options$padding : 0.1),
            _getTransformForBound2 = _slicedToArray(_getTransformForBound, 3),
            x = _getTransformForBound2[0],
            y = _getTransformForBound2[1],
            zoom = _getTransformForBound2[2];

        var nextTransform = d3_zoom__WEBPACK_IMPORTED_MODULE_0__.zoomIdentity.translate(x, y).scale(zoom);

        if (typeof options.duration === 'number' && options.duration > 0) {
          d3Zoom.transform(getD3Transition(d3Selection, options.duration), nextTransform);
        } else {
          d3Zoom.transform(d3Selection, nextTransform);
        }

        return true;
      }
    }
  }

  return false;
}
function handleControlledNodeSelectionChange(nodeChanges, nodeInternals) {
  nodeChanges.forEach(function (change) {
    var node = nodeInternals.get(change.id);

    if (node) {
      var _objectSpread2;

      nodeInternals.set(node.id, _objectSpread$1(_objectSpread$1({}, node), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, internalsSymbol, node[internalsSymbol]), _defineProperty(_objectSpread2, "selected", change.selected), _objectSpread2)));
    }
  });
  return new Map(nodeInternals);
}
function handleControlledEdgeSelectionChange(edgeChanges, edges) {
  return edges.map(function (e) {
    var change = edgeChanges.find(function (change) {
      return change.id === e.id;
    });

    if (change) {
      e.selected = change.selected;
    }

    return e;
  });
}
function updateNodesAndEdgesSelections(_ref) {
  var changedNodes = _ref.changedNodes,
      changedEdges = _ref.changedEdges,
      get = _ref.get,
      set = _ref.set;

  var _get2 = get(),
      nodeInternals = _get2.nodeInternals,
      edges = _get2.edges,
      onNodesChange = _get2.onNodesChange,
      onEdgesChange = _get2.onEdgesChange,
      hasDefaultNodes = _get2.hasDefaultNodes,
      hasDefaultEdges = _get2.hasDefaultEdges;

  if (changedNodes !== null && changedNodes !== void 0 && changedNodes.length) {
    if (hasDefaultNodes) {
      set({
        nodeInternals: handleControlledNodeSelectionChange(changedNodes, nodeInternals)
      });
    }

    onNodesChange === null || onNodesChange === void 0 ? void 0 : onNodesChange(changedNodes);
  }

  if (changedEdges !== null && changedEdges !== void 0 && changedEdges.length) {
    if (hasDefaultEdges) {
      set({
        edges: handleControlledEdgeSelectionChange(changedEdges, edges)
      });
    }

    onEdgesChange === null || onEdgesChange === void 0 ? void 0 : onEdgesChange(changedEdges);
  }
}

var infiniteExtent = [[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]];
var initialState = {
  width: 0,
  height: 0,
  transform: [0, 0, 1],
  nodeInternals: new Map(),
  edges: [],
  onNodesChange: null,
  onEdgesChange: null,
  hasDefaultNodes: false,
  hasDefaultEdges: false,
  d3Zoom: null,
  d3Selection: null,
  d3ZoomHandler: undefined,
  minZoom: 0.5,
  maxZoom: 2,
  translateExtent: infiniteExtent,
  nodeExtent: infiniteExtent,
  nodesSelectionActive: false,
  userSelectionActive: false,
  connectionNodeId: null,
  connectionHandleId: null,
  connectionHandleType: 'source',
  connectionPosition: {
    x: 0,
    y: 0
  },
  connectionMode: ConnectionMode.Strict,
  domNode: null,
  snapGrid: [15, 15],
  snapToGrid: false,
  nodesDraggable: true,
  nodesConnectable: true,
  elementsSelectable: true,
  fitViewOnInit: false,
  fitViewOnInitDone: false,
  fitViewOnInitOptions: undefined,
  multiSelectionActive: false,
  reactFlowVersion: "10.3.14" ,
  connectionStartHandle: null,
  connectOnClick: true
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _createContext = (0,zustand_context__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    Provider = _createContext.Provider,
    useStore = _createContext.useStore,
    useStoreApi = _createContext.useStoreApi;

var createStore = function createStore() {
  return (0,zustand__WEBPACK_IMPORTED_MODULE_2__["default"])(function (set, get) {
    return _objectSpread(_objectSpread({}, initialState), {}, {
      setNodes: function setNodes(nodes) {
        set({
          nodeInternals: createNodeInternals(nodes, get().nodeInternals)
        });
      },
      setEdges: function setEdges(edges) {
        var _get = get(),
            _get$defaultEdgeOptio = _get.defaultEdgeOptions,
            defaultEdgeOptions = _get$defaultEdgeOptio === void 0 ? {} : _get$defaultEdgeOptio;

        set({
          edges: edges.map(function (e) {
            return _objectSpread(_objectSpread({}, defaultEdgeOptions), e);
          })
        });
      },
      setDefaultNodesAndEdges: function setDefaultNodesAndEdges(nodes, edges) {
        var hasDefaultNodes = typeof nodes !== 'undefined';
        var hasDefaultEdges = typeof edges !== 'undefined';
        var nodeInternals = hasDefaultNodes ? createNodeInternals(nodes, new Map()) : new Map();
        var nextEdges = hasDefaultEdges ? edges : [];
        set({
          nodeInternals: nodeInternals,
          edges: nextEdges,
          hasDefaultNodes: hasDefaultNodes,
          hasDefaultEdges: hasDefaultEdges
        });
      },
      updateNodeDimensions: function updateNodeDimensions(updates) {
        var _get2 = get(),
            onNodesChange = _get2.onNodesChange,
            nodeInternals = _get2.nodeInternals,
            fitViewOnInit = _get2.fitViewOnInit,
            fitViewOnInitDone = _get2.fitViewOnInitDone,
            fitViewOnInitOptions = _get2.fitViewOnInitOptions,
            domNode = _get2.domNode;

        var viewportNode = domNode === null || domNode === void 0 ? void 0 : domNode.querySelector('.react-flow__viewport');

        if (!viewportNode) {
          return;
        }

        var style = window.getComputedStyle(viewportNode);

        var _window$DOMMatrixRead = new window.DOMMatrixReadOnly(style.transform),
            zoom = _window$DOMMatrixRead.m22;

        var changes = updates.reduce(function (res, update) {
          var node = nodeInternals.get(update.id);

          if (node) {
            var dimensions = getDimensions(update.nodeElement);
            var doUpdate = !!(dimensions.width && dimensions.height && (node.width !== dimensions.width || node.height !== dimensions.height || update.forceUpdate));

            if (doUpdate) {
              nodeInternals.set(node.id, _objectSpread(_objectSpread({}, node), {}, _defineProperty({}, internalsSymbol, _objectSpread(_objectSpread({}, node[internalsSymbol]), {}, {
                handleBounds: {
                  source: getHandleBounds('.source', update.nodeElement, zoom),
                  target: getHandleBounds('.target', update.nodeElement, zoom)
                }
              })), dimensions));
              res.push({
                id: node.id,
                type: 'dimensions',
                dimensions: dimensions
              });
            }
          }

          return res;
        }, []);
        var nextFitViewOnInitDone = fitViewOnInitDone || fitViewOnInit && !fitViewOnInitDone && fitView(get, _objectSpread({
          initial: true
        }, fitViewOnInitOptions));
        set({
          nodeInternals: new Map(nodeInternals),
          fitViewOnInitDone: nextFitViewOnInitDone
        });

        if ((changes === null || changes === void 0 ? void 0 : changes.length) > 0) {
          onNodesChange === null || onNodesChange === void 0 ? void 0 : onNodesChange(changes);
        }
      },
      updateNodePositions: function updateNodePositions(nodeDragItems) {
        var positionChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var dragging = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var _get3 = get(),
            onNodesChange = _get3.onNodesChange,
            nodeInternals = _get3.nodeInternals,
            hasDefaultNodes = _get3.hasDefaultNodes;

        if (hasDefaultNodes || onNodesChange) {
          var changes = nodeDragItems.map(function (node) {
            var change = {
              id: node.id,
              type: 'position',
              dragging: dragging
            };

            if (positionChanged) {
              change.positionAbsolute = node.positionAbsolute;
              change.position = node.position;
            }

            return change;
          });

          if (changes !== null && changes !== void 0 && changes.length) {
            if (hasDefaultNodes) {
              var nodes = applyNodeChanges(changes, Array.from(nodeInternals.values()));
              var nextNodeInternals = createNodeInternals(nodes, nodeInternals);
              set({
                nodeInternals: nextNodeInternals
              });
            }

            onNodesChange === null || onNodesChange === void 0 ? void 0 : onNodesChange(changes);
          }
        }
      },
      addSelectedNodes: function addSelectedNodes(selectedNodeIds) {
        var _get4 = get(),
            multiSelectionActive = _get4.multiSelectionActive,
            nodeInternals = _get4.nodeInternals,
            edges = _get4.edges;

        var changedNodes;
        var changedEdges = null;

        if (multiSelectionActive) {
          changedNodes = selectedNodeIds.map(function (nodeId) {
            return createSelectionChange(nodeId, true);
          });
        } else {
          changedNodes = getSelectionChanges(Array.from(nodeInternals.values()), selectedNodeIds);
          changedEdges = getSelectionChanges(edges, []);
        }

        updateNodesAndEdgesSelections({
          changedNodes: changedNodes,
          changedEdges: changedEdges,
          get: get,
          set: set
        });
      },
      addSelectedEdges: function addSelectedEdges(selectedEdgeIds) {
        var _get5 = get(),
            multiSelectionActive = _get5.multiSelectionActive,
            edges = _get5.edges,
            nodeInternals = _get5.nodeInternals;

        var changedEdges;
        var changedNodes = null;

        if (multiSelectionActive) {
          changedEdges = selectedEdgeIds.map(function (edgeId) {
            return createSelectionChange(edgeId, true);
          });
        } else {
          changedEdges = getSelectionChanges(edges, selectedEdgeIds);
          changedNodes = getSelectionChanges(Array.from(nodeInternals.values()), []);
        }

        updateNodesAndEdgesSelections({
          changedNodes: changedNodes,
          changedEdges: changedEdges,
          get: get,
          set: set
        });
      },
      unselectNodesAndEdges: function unselectNodesAndEdges() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            nodes = _ref.nodes,
            edges = _ref.edges;

        var _get6 = get(),
            nodeInternals = _get6.nodeInternals,
            storeEdges = _get6.edges;

        var nodesToUnselect = nodes ? nodes : Array.from(nodeInternals.values());
        var edgesToUnselect = edges ? edges : storeEdges;
        var changedNodes = nodesToUnselect.map(function (n) {
          n.selected = false;
          return createSelectionChange(n.id, false);
        });
        var changedEdges = edgesToUnselect.map(function (edge) {
          return createSelectionChange(edge.id, false);
        });
        updateNodesAndEdgesSelections({
          changedNodes: changedNodes,
          changedEdges: changedEdges,
          get: get,
          set: set
        });
      },
      setMinZoom: function setMinZoom(minZoom) {
        var _get7 = get(),
            d3Zoom = _get7.d3Zoom,
            maxZoom = _get7.maxZoom;

        d3Zoom === null || d3Zoom === void 0 ? void 0 : d3Zoom.scaleExtent([minZoom, maxZoom]);
        set({
          minZoom: minZoom
        });
      },
      setMaxZoom: function setMaxZoom(maxZoom) {
        var _get8 = get(),
            d3Zoom = _get8.d3Zoom,
            minZoom = _get8.minZoom;

        d3Zoom === null || d3Zoom === void 0 ? void 0 : d3Zoom.scaleExtent([minZoom, maxZoom]);
        set({
          maxZoom: maxZoom
        });
      },
      setTranslateExtent: function setTranslateExtent(translateExtent) {
        var _get9 = get(),
            d3Zoom = _get9.d3Zoom;

        d3Zoom === null || d3Zoom === void 0 ? void 0 : d3Zoom.translateExtent(translateExtent);
        set({
          translateExtent: translateExtent
        });
      },
      resetSelectedElements: function resetSelectedElements() {
        var _get10 = get(),
            nodeInternals = _get10.nodeInternals,
            edges = _get10.edges;

        var nodes = Array.from(nodeInternals.values());
        var nodesToUnselect = nodes.filter(function (e) {
          return e.selected;
        }).map(function (n) {
          return createSelectionChange(n.id, false);
        });
        var edgesToUnselect = edges.filter(function (e) {
          return e.selected;
        }).map(function (e) {
          return createSelectionChange(e.id, false);
        });
        updateNodesAndEdgesSelections({
          changedNodes: nodesToUnselect,
          changedEdges: edgesToUnselect,
          get: get,
          set: set
        });
      },
      setNodeExtent: function setNodeExtent(nodeExtent) {
        var _get11 = get(),
            nodeInternals = _get11.nodeInternals;

        nodeInternals.forEach(function (node) {
          node.positionAbsolute = clampPosition(node.position, nodeExtent);
        });
        set({
          nodeExtent: nodeExtent,
          nodeInternals: new Map(nodeInternals)
        });
      },
      reset: function reset() {
        return set(_objectSpread({}, initialState));
      }
    });
  });
};


//# sourceMappingURL=index-fd09a579.js.map


/***/ }),

/***/ "./node_modules/react-flow-renderer/dist/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-flow-renderer/dist/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Background": () => (/* reexport safe */ _index4_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "BackgroundVariant": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   "BezierEdge": () => (/* binding */ BezierEdge),
/* harmony export */   "ConnectionLineType": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "ConnectionMode": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "ControlButton": () => (/* reexport safe */ _index3_js__WEBPACK_IMPORTED_MODULE_6__.ControlButton),
/* harmony export */   "Controls": () => (/* reexport safe */ _index3_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "EdgeText": () => (/* binding */ EdgeText$1),
/* harmony export */   "Handle": () => (/* binding */ Handle$1),
/* harmony export */   "MarkerType": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "MiniMap": () => (/* reexport safe */ _index2_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "PanOnScrollMode": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "Position": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "ReactFlowProvider": () => (/* binding */ ReactFlowProvider),
/* harmony export */   "SimpleBezierEdge": () => (/* binding */ SimpleBezierEdge),
/* harmony export */   "SmoothStepEdge": () => (/* binding */ SmoothStepEdge),
/* harmony export */   "StepEdge": () => (/* binding */ StepEdge),
/* harmony export */   "StraightEdge": () => (/* binding */ StraightEdge),
/* harmony export */   "addEdge": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   "applyEdgeChanges": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   "applyNodeChanges": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   "default": () => (/* binding */ ReactFlow),
/* harmony export */   "getBezierEdgeCenter": () => (/* binding */ getBezierCenter),
/* harmony export */   "getBezierPath": () => (/* binding */ getBezierPath),
/* harmony export */   "getConnectedEdges": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   "getEdgeCenter": () => (/* binding */ getCenter),
/* harmony export */   "getIncomers": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "getMarkerEnd": () => (/* binding */ getMarkerEnd),
/* harmony export */   "getOutgoers": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "getRectOfNodes": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   "getSimpleBezierEdgeCenter": () => (/* binding */ getSimpleBezierCenter),
/* harmony export */   "getSimpleBezierPath": () => (/* binding */ getSimpleBezierPath),
/* harmony export */   "getSmoothStepPath": () => (/* binding */ getSmoothStepPath),
/* harmony export */   "getTransformForBounds": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "internalsSymbol": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   "isEdge": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "isNode": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "updateEdge": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   "useEdges": () => (/* reexport safe */ _useEdges_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "useEdgesState": () => (/* binding */ useEdgesState),
/* harmony export */   "useKeyPress": () => (/* binding */ useKeyPress),
/* harmony export */   "useNodes": () => (/* reexport safe */ _useNodes_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "useNodesState": () => (/* binding */ useNodesState),
/* harmony export */   "useReactFlow": () => (/* reexport safe */ _useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_1__.u),
/* harmony export */   "useStore": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   "useStoreApi": () => (/* reexport safe */ _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "useUpdateNodeInternals": () => (/* reexport safe */ _useUpdateNodeInternals_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "useViewport": () => (/* reexport safe */ _useViewport_js__WEBPACK_IMPORTED_MODULE_11__["default"])
/* harmony export */ });
/* harmony import */ var _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-fd09a579.js */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var _useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReactFlow-c36bdf8e.js */ "./node_modules/react-flow-renderer/dist/esm/useReactFlow-c36bdf8e.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classcat */ "./node_modules/classcat/index.js");
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! zustand/shallow */ "./node_modules/react-flow-renderer/node_modules/zustand/esm/shallow.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/pointer.js");
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! d3-drag */ "./node_modules/d3-drag/src/drag.js");
/* harmony import */ var _index2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index2.js */ "./node_modules/react-flow-renderer/dist/esm/index2.js");
/* harmony import */ var _index3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index3.js */ "./node_modules/react-flow-renderer/dist/esm/index3.js");
/* harmony import */ var _index4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index4.js */ "./node_modules/react-flow-renderer/dist/esm/index4.js");
/* harmony import */ var _useUpdateNodeInternals_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useUpdateNodeInternals.js */ "./node_modules/react-flow-renderer/dist/esm/useUpdateNodeInternals.js");
/* harmony import */ var _useNodes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useNodes.js */ "./node_modules/react-flow-renderer/dist/esm/useNodes.js");
/* harmony import */ var _useEdges_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useEdges.js */ "./node_modules/react-flow-renderer/dist/esm/useEdges.js");
/* harmony import */ var _useViewport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useViewport.js */ "./node_modules/react-flow-renderer/dist/esm/useViewport.js");




















var accounts = ['paid-pro', 'paid-sponsor', 'paid-enterprise', 'paid-custom'];

function Attribution(_ref) {
  var proOptions = _ref.proOptions,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom-right' : _ref$position;

  if (proOptions !== null && proOptions !== void 0 && proOptions.account && accounts.includes(proOptions === null || proOptions === void 0 ? void 0 : proOptions.account) && proOptions !== null && proOptions !== void 0 && proOptions.hideAttribution) {
    return null;
  }

  var positionClasses = "".concat(position).split('-');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: (0,classcat__WEBPACK_IMPORTED_MODULE_3__["default"])(['react-flow__attribution'].concat((0,_useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_1__._)(positionClasses))),
    "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev/pricing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: "https://reactflow.dev",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "React Flow"));
}

var _excluded$2 = ["x", "y", "label", "labelStyle", "labelShowBg", "labelBgStyle", "labelBgPadding", "labelBgBorderRadius", "children", "className"];

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$c(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var EdgeText = function EdgeText(_ref) {
  var x = _ref.x,
      y = _ref.y,
      label = _ref.label,
      _ref$labelStyle = _ref.labelStyle,
      labelStyle = _ref$labelStyle === void 0 ? {} : _ref$labelStyle,
      _ref$labelShowBg = _ref.labelShowBg,
      labelShowBg = _ref$labelShowBg === void 0 ? true : _ref$labelShowBg,
      _ref$labelBgStyle = _ref.labelBgStyle,
      labelBgStyle = _ref$labelBgStyle === void 0 ? {} : _ref$labelBgStyle,
      _ref$labelBgPadding = _ref.labelBgPadding,
      labelBgPadding = _ref$labelBgPadding === void 0 ? [2, 4] : _ref$labelBgPadding,
      _ref$labelBgBorderRad = _ref.labelBgBorderRadius,
      labelBgBorderRadius = _ref$labelBgBorderRad === void 0 ? 2 : _ref$labelBgBorderRad,
      children = _ref.children,
      className = _ref.className,
      rest = (0,_useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_1__.a)(_ref, _excluded$2);

  var edgeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }),
      _useState2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_useState, 2),
      edgeTextBbox = _useState2[0],
      setEdgeTextBbox = _useState2[1];

  var edgeTextClasses = (0,classcat__WEBPACK_IMPORTED_MODULE_3__["default"])(['react-flow__edge-textwrapper', className]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (edgeRef.current) {
      var textBbox = edgeRef.current.getBBox();
      setEdgeTextBbox({
        x: textBbox.x,
        y: textBbox.y,
        width: textBbox.width,
        height: textBbox.height
      });
    }
  }, [label]);

  if (typeof label === 'undefined' || !label) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("g", _objectSpread$c({
    transform: "translate(".concat(x - edgeTextBbox.width / 2, " ").concat(y - edgeTextBbox.height / 2, ")"),
    className: edgeTextClasses
  }, rest), labelShowBg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("rect", {
    width: edgeTextBbox.width + 2 * labelBgPadding[0],
    x: -labelBgPadding[0],
    y: -labelBgPadding[1],
    height: edgeTextBbox.height + 2 * labelBgPadding[1],
    className: "react-flow__edge-textbg",
    style: labelBgStyle,
    rx: labelBgBorderRadius,
    ry: labelBgBorderRadius
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("text", {
    className: "react-flow__edge-text",
    y: edgeTextBbox.height / 2,
    dy: "0.3em",
    ref: edgeRef,
    style: labelStyle
  }, label), children);
};

var EdgeText$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(EdgeText);

var BaseEdge = (function (_ref) {
  var path = _ref.path,
      centerX = _ref.centerX,
      centerY = _ref.centerY,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      labelShowBg = _ref.labelShowBg,
      labelBgStyle = _ref.labelBgStyle,
      labelBgPadding = _ref.labelBgPadding,
      labelBgBorderRadius = _ref.labelBgBorderRadius,
      style = _ref.style,
      markerEnd = _ref.markerEnd,
      markerStart = _ref.markerStart;
  var text = label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EdgeText$1, {
    x: centerX,
    y: centerY,
    label: label,
    labelStyle: labelStyle,
    labelShowBg: labelShowBg,
    labelBgStyle: labelBgStyle,
    labelBgPadding: labelBgPadding,
    labelBgBorderRadius: labelBgBorderRadius
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", {
    style: style,
    d: path,
    className: "react-flow__edge-path",
    markerEnd: markerEnd,
    markerStart: markerStart
  }), text);
});

function getControl(_ref) {
  var pos = _ref.pos,
      x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2;
  var ctX, ctY;

  switch (pos) {
    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left:
    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Right:
      {
        ctX = 0.5 * (x1 + x2);
        ctY = y1;
      }
      break;

    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top:
    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom:
      {
        ctX = x1;
        ctY = 0.5 * (y1 + y2);
      }
      break;
  }

  return [ctX, ctY];
}

function getSimpleBezierPath(_ref2) {
  var sourceX = _ref2.sourceX,
      sourceY = _ref2.sourceY,
      _ref2$sourcePosition = _ref2.sourcePosition,
      sourcePosition = _ref2$sourcePosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom : _ref2$sourcePosition,
      targetX = _ref2.targetX,
      targetY = _ref2.targetY,
      _ref2$targetPosition = _ref2.targetPosition,
      targetPosition = _ref2$targetPosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref2$targetPosition;

  var _getControl = getControl({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY
  }),
      _getControl2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getControl, 2),
      sourceControlX = _getControl2[0],
      sourceControlY = _getControl2[1];

  var _getControl3 = getControl({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY
  }),
      _getControl4 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getControl3, 2),
      targetControlX = _getControl4[0],
      targetControlY = _getControl4[1];

  return "M".concat(sourceX, ",").concat(sourceY, " C").concat(sourceControlX, ",").concat(sourceControlY, " ").concat(targetControlX, ",").concat(targetControlY, " ").concat(targetX, ",").concat(targetY);
} // @TODO: this function will recalculate the control points
// one option is to let getXXXPath() return center points
// but will introduce breaking changes
// the getCenter() of other types of edges might need to change, too

function getSimpleBezierCenter(_ref3) {
  var sourceX = _ref3.sourceX,
      sourceY = _ref3.sourceY,
      _ref3$sourcePosition = _ref3.sourcePosition,
      sourcePosition = _ref3$sourcePosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom : _ref3$sourcePosition,
      targetX = _ref3.targetX,
      targetY = _ref3.targetY,
      _ref3$targetPosition = _ref3.targetPosition,
      targetPosition = _ref3$targetPosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref3$targetPosition;

  var _getControl5 = getControl({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY
  }),
      _getControl6 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getControl5, 2),
      sourceControlX = _getControl6[0],
      sourceControlY = _getControl6[1];

  var _getControl7 = getControl({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY
  }),
      _getControl8 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getControl7, 2),
      targetControlX = _getControl8[0],
      targetControlY = _getControl8[1]; // cubic bezier t=0.5 mid point, not the actual mid point, but easy to calculate
  // https://stackoverflow.com/questions/67516101/how-to-find-distance-mid-point-of-bezier-curve


  var centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
  var centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
  var xOffset = Math.abs(centerX - sourceX);
  var yOffset = Math.abs(centerY - sourceY);
  return [centerX, centerY, xOffset, yOffset];
}
var SimpleBezierEdge = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function (_ref4) {
  var sourceX = _ref4.sourceX,
      sourceY = _ref4.sourceY,
      targetX = _ref4.targetX,
      targetY = _ref4.targetY,
      _ref4$sourcePosition = _ref4.sourcePosition,
      sourcePosition = _ref4$sourcePosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom : _ref4$sourcePosition,
      _ref4$targetPosition = _ref4.targetPosition,
      targetPosition = _ref4$targetPosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref4$targetPosition,
      label = _ref4.label,
      labelStyle = _ref4.labelStyle,
      labelShowBg = _ref4.labelShowBg,
      labelBgStyle = _ref4.labelBgStyle,
      labelBgPadding = _ref4.labelBgPadding,
      labelBgBorderRadius = _ref4.labelBgBorderRadius,
      style = _ref4.style,
      markerEnd = _ref4.markerEnd,
      markerStart = _ref4.markerStart;
  var params = {
    sourceX: sourceX,
    sourceY: sourceY,
    sourcePosition: sourcePosition,
    targetX: targetX,
    targetY: targetY,
    targetPosition: targetPosition
  };
  var path = getSimpleBezierPath(params);

  var _getSimpleBezierCente = getSimpleBezierCenter(params),
      _getSimpleBezierCente2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getSimpleBezierCente, 2),
      centerX = _getSimpleBezierCente2[0],
      centerY = _getSimpleBezierCente2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(BaseEdge, {
    path: path,
    centerX: centerX,
    centerY: centerY,
    label: label,
    labelStyle: labelStyle,
    labelShowBg: labelShowBg,
    labelBgStyle: labelBgStyle,
    labelBgPadding: labelBgPadding,
    labelBgBorderRadius: labelBgBorderRadius,
    style: style,
    markerEnd: markerEnd,
    markerStart: markerStart
  });
});

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$b(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getMarkerEnd = function getMarkerEnd(markerType, markerEndId) {
  if (typeof markerEndId !== 'undefined' && markerEndId) {
    return "url(#".concat(markerEndId, ")");
  }

  return typeof markerType !== 'undefined' ? "url(#react-flow__".concat(markerType, ")") : 'none';
};
var LeftOrRight = [_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Right];
var getCenter = function getCenter(_ref) {
  var sourceX = _ref.sourceX,
      sourceY = _ref.sourceY,
      targetX = _ref.targetX,
      targetY = _ref.targetY,
      _ref$sourcePosition = _ref.sourcePosition,
      sourcePosition = _ref$sourcePosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom : _ref$sourcePosition,
      _ref$targetPosition = _ref.targetPosition,
      targetPosition = _ref$targetPosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref$targetPosition;
  var sourceIsLeftOrRight = LeftOrRight.includes(sourcePosition);
  var targetIsLeftOrRight = LeftOrRight.includes(targetPosition); // we expect flows to be horizontal or vertical (all handles left or right respectively top or bottom)
  // a mixed edge is when one the source is on the left and the target is on the top for example.

  var mixedEdge = sourceIsLeftOrRight && !targetIsLeftOrRight || targetIsLeftOrRight && !sourceIsLeftOrRight;

  if (mixedEdge) {
    var _xOffset = sourceIsLeftOrRight ? Math.abs(targetX - sourceX) : 0;

    var _centerX = sourceX > targetX ? sourceX - _xOffset : sourceX + _xOffset;

    var _yOffset = sourceIsLeftOrRight ? 0 : Math.abs(targetY - sourceY);

    var _centerY = sourceY < targetY ? sourceY + _yOffset : sourceY - _yOffset;

    return [_centerX, _centerY, _xOffset, _yOffset];
  }

  var xOffset = Math.abs(targetX - sourceX) / 2;
  var centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  var yOffset = Math.abs(targetY - sourceY) / 2;
  var centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  return [centerX, centerY, xOffset, yOffset];
};
function getMouseHandler(id, getState, handler) {
  return handler === undefined ? handler : function (event) {
    var edge = getState().edges.find(function (e) {
      return e.id === id;
    });
    handler(event, _objectSpread$b({}, edge));
  };
}

// The name indicates the direction of the path. "bottomLeftCorner" goes
// from bottom to the left and "leftBottomCorner" goes from left to the bottom.
// We have to consider the direction of the paths because of the animated lines.

var bottomLeftCorner = function bottomLeftCorner(x, y, size) {
  return "L ".concat(x, ",").concat(y - size, "Q ").concat(x, ",").concat(y, " ").concat(x + size, ",").concat(y);
};

var leftBottomCorner = function leftBottomCorner(x, y, size) {
  return "L ".concat(x + size, ",").concat(y, "Q ").concat(x, ",").concat(y, " ").concat(x, ",").concat(y - size);
};

var bottomRightCorner = function bottomRightCorner(x, y, size) {
  return "L ".concat(x, ",").concat(y - size, "Q ").concat(x, ",").concat(y, " ").concat(x - size, ",").concat(y);
};

var rightBottomCorner = function rightBottomCorner(x, y, size) {
  return "L ".concat(x - size, ",").concat(y, "Q ").concat(x, ",").concat(y, " ").concat(x, ",").concat(y - size);
};

var leftTopCorner = function leftTopCorner(x, y, size) {
  return "L ".concat(x + size, ",").concat(y, "Q ").concat(x, ",").concat(y, " ").concat(x, ",").concat(y + size);
};

var topLeftCorner = function topLeftCorner(x, y, size) {
  return "L ".concat(x, ",").concat(y + size, "Q ").concat(x, ",").concat(y, " ").concat(x + size, ",").concat(y);
};

var topRightCorner = function topRightCorner(x, y, size) {
  return "L ".concat(x, ",").concat(y + size, "Q ").concat(x, ",").concat(y, " ").concat(x - size, ",").concat(y);
};

var rightTopCorner = function rightTopCorner(x, y, size) {
  return "L ".concat(x - size, ",").concat(y, "Q ").concat(x, ",").concat(y, " ").concat(x, ",").concat(y + size);
};

function getSmoothStepPath(_ref) {
  var sourceX = _ref.sourceX,
      sourceY = _ref.sourceY,
      _ref$sourcePosition = _ref.sourcePosition,
      sourcePosition = _ref$sourcePosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom : _ref$sourcePosition,
      targetX = _ref.targetX,
      targetY = _ref.targetY,
      _ref$targetPosition = _ref.targetPosition,
      targetPosition = _ref$targetPosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref$targetPosition,
      _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? 5 : _ref$borderRadius,
      centerX = _ref.centerX,
      centerY = _ref.centerY;

  var _getCenter = getCenter({
    sourceX: sourceX,
    sourceY: sourceY,
    targetX: targetX,
    targetY: targetY
  }),
      _getCenter2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getCenter, 4),
      _centerX = _getCenter2[0],
      _centerY = _getCenter2[1],
      offsetX = _getCenter2[2],
      offsetY = _getCenter2[3];

  var cornerWidth = Math.min(borderRadius, Math.abs(targetX - sourceX));
  var cornerHeight = Math.min(borderRadius, Math.abs(targetY - sourceY));
  var cornerSize = Math.min(cornerWidth, cornerHeight, offsetX, offsetY);
  var leftAndRight = [_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Right];
  var cX = typeof centerX !== 'undefined' ? centerX : _centerX;
  var cY = typeof centerY !== 'undefined' ? centerY : _centerY;
  var firstCornerPath = null;
  var secondCornerPath = null;

  if (sourceX <= targetX) {
    firstCornerPath = sourceY <= targetY ? bottomLeftCorner(sourceX, cY, cornerSize) : topLeftCorner(sourceX, cY, cornerSize);
    secondCornerPath = sourceY <= targetY ? rightTopCorner(targetX, cY, cornerSize) : rightBottomCorner(targetX, cY, cornerSize);
  } else {
    firstCornerPath = sourceY < targetY ? bottomRightCorner(sourceX, cY, cornerSize) : topRightCorner(sourceX, cY, cornerSize);
    secondCornerPath = sourceY < targetY ? leftTopCorner(targetX, cY, cornerSize) : leftBottomCorner(targetX, cY, cornerSize);
  }

  if (leftAndRight.includes(sourcePosition) && leftAndRight.includes(targetPosition)) {
    if (sourceX <= targetX) {
      firstCornerPath = sourceY <= targetY ? rightTopCorner(cX, sourceY, cornerSize) : rightBottomCorner(cX, sourceY, cornerSize);
      secondCornerPath = sourceY <= targetY ? bottomLeftCorner(cX, targetY, cornerSize) : topLeftCorner(cX, targetY, cornerSize);
    } else if (sourcePosition === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Right && targetPosition === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left || sourcePosition === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left && targetPosition === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Right || sourcePosition === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left && targetPosition === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left) {
      // and sourceX > targetX
      firstCornerPath = sourceY <= targetY ? leftTopCorner(cX, sourceY, cornerSize) : leftBottomCorner(cX, sourceY, cornerSize);
      secondCornerPath = sourceY <= targetY ? bottomRightCorner(cX, targetY, cornerSize) : topRightCorner(cX, targetY, cornerSize);
    }
  } else if (leftAndRight.includes(sourcePosition) && !leftAndRight.includes(targetPosition)) {
    if (sourceX <= targetX) {
      firstCornerPath = sourceY <= targetY ? rightTopCorner(targetX, sourceY, cornerSize) : rightBottomCorner(targetX, sourceY, cornerSize);
    } else {
      firstCornerPath = sourceY <= targetY ? leftTopCorner(targetX, sourceY, cornerSize) : leftBottomCorner(targetX, sourceY, cornerSize);
    }

    secondCornerPath = '';
  } else if (!leftAndRight.includes(sourcePosition) && leftAndRight.includes(targetPosition)) {
    if (sourceX <= targetX) {
      firstCornerPath = sourceY <= targetY ? bottomLeftCorner(sourceX, targetY, cornerSize) : topLeftCorner(sourceX, targetY, cornerSize);
    } else {
      firstCornerPath = sourceY <= targetY ? bottomRightCorner(sourceX, targetY, cornerSize) : topRightCorner(sourceX, targetY, cornerSize);
    }

    secondCornerPath = '';
  }

  return "M ".concat(sourceX, ",").concat(sourceY).concat(firstCornerPath).concat(secondCornerPath, "L ").concat(targetX, ",").concat(targetY);
}
var SmoothStepEdge = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function (_ref2) {
  var sourceX = _ref2.sourceX,
      sourceY = _ref2.sourceY,
      targetX = _ref2.targetX,
      targetY = _ref2.targetY,
      label = _ref2.label,
      labelStyle = _ref2.labelStyle,
      labelShowBg = _ref2.labelShowBg,
      labelBgStyle = _ref2.labelBgStyle,
      labelBgPadding = _ref2.labelBgPadding,
      labelBgBorderRadius = _ref2.labelBgBorderRadius,
      style = _ref2.style,
      _ref2$sourcePosition = _ref2.sourcePosition,
      sourcePosition = _ref2$sourcePosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom : _ref2$sourcePosition,
      _ref2$targetPosition = _ref2.targetPosition,
      targetPosition = _ref2$targetPosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref2$targetPosition,
      markerEnd = _ref2.markerEnd,
      markerStart = _ref2.markerStart,
      _ref2$borderRadius = _ref2.borderRadius,
      borderRadius = _ref2$borderRadius === void 0 ? 5 : _ref2$borderRadius;

  var _getCenter3 = getCenter({
    sourceX: sourceX,
    sourceY: sourceY,
    targetX: targetX,
    targetY: targetY,
    sourcePosition: sourcePosition,
    targetPosition: targetPosition
  }),
      _getCenter4 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getCenter3, 2),
      centerX = _getCenter4[0],
      centerY = _getCenter4[1];

  var path = getSmoothStepPath({
    sourceX: sourceX,
    sourceY: sourceY,
    sourcePosition: sourcePosition,
    targetX: targetX,
    targetY: targetY,
    targetPosition: targetPosition,
    borderRadius: borderRadius
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(BaseEdge, {
    path: path,
    centerX: centerX,
    centerY: centerY,
    label: label,
    labelStyle: labelStyle,
    labelShowBg: labelShowBg,
    labelBgStyle: labelBgStyle,
    labelBgPadding: labelBgPadding,
    labelBgBorderRadius: labelBgBorderRadius,
    style: style,
    markerEnd: markerEnd,
    markerStart: markerStart
  });
});

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$a(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var StepEdge = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SmoothStepEdge, _objectSpread$a(_objectSpread$a({}, props), {}, {
    borderRadius: 0
  }));
});

var StraightEdge = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function (_ref) {
  var sourceX = _ref.sourceX,
      sourceY = _ref.sourceY,
      targetX = _ref.targetX,
      targetY = _ref.targetY,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      labelShowBg = _ref.labelShowBg,
      labelBgStyle = _ref.labelBgStyle,
      labelBgPadding = _ref.labelBgPadding,
      labelBgBorderRadius = _ref.labelBgBorderRadius,
      style = _ref.style,
      markerEnd = _ref.markerEnd,
      markerStart = _ref.markerStart;
  var yOffset = Math.abs(targetY - sourceY) / 2;
  var centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  var xOffset = Math.abs(targetX - sourceX) / 2;
  var centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  var path = "M ".concat(sourceX, ",").concat(sourceY, "L ").concat(targetX, ",").concat(targetY);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(BaseEdge, {
    path: path,
    centerX: centerX,
    centerY: centerY,
    label: label,
    labelStyle: labelStyle,
    labelShowBg: labelShowBg,
    labelBgStyle: labelBgStyle,
    labelBgPadding: labelBgPadding,
    labelBgBorderRadius: labelBgBorderRadius,
    style: style,
    markerEnd: markerEnd,
    markerStart: markerStart
  });
});

function calculateControlOffset(distance, curvature) {
  if (distance >= 0) {
    return 0.5 * distance;
  } else {
    return curvature * 25 * Math.sqrt(-distance);
  }
}

function getControlWithCurvature(_ref) {
  var pos = _ref.pos,
      x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2,
      c = _ref.c;
  var ctX, ctY;

  switch (pos) {
    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left:
      {
        ctX = x1 - calculateControlOffset(x1 - x2, c);
        ctY = y1;
      }
      break;

    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Right:
      {
        ctX = x1 + calculateControlOffset(x2 - x1, c);
        ctY = y1;
      }
      break;

    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top:
      {
        ctX = x1;
        ctY = y1 - calculateControlOffset(y1 - y2, c);
      }
      break;

    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom:
      {
        ctX = x1;
        ctY = y1 + calculateControlOffset(y2 - y1, c);
      }
      break;
  }

  return [ctX, ctY];
}

function getBezierPath(_ref2) {
  var sourceX = _ref2.sourceX,
      sourceY = _ref2.sourceY,
      _ref2$sourcePosition = _ref2.sourcePosition,
      sourcePosition = _ref2$sourcePosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom : _ref2$sourcePosition,
      targetX = _ref2.targetX,
      targetY = _ref2.targetY,
      _ref2$targetPosition = _ref2.targetPosition,
      targetPosition = _ref2$targetPosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref2$targetPosition,
      _ref2$curvature = _ref2.curvature,
      curvature = _ref2$curvature === void 0 ? 0.25 : _ref2$curvature;

  var _getControlWithCurvat = getControlWithCurvature({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY,
    c: curvature
  }),
      _getControlWithCurvat2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getControlWithCurvat, 2),
      sourceControlX = _getControlWithCurvat2[0],
      sourceControlY = _getControlWithCurvat2[1];

  var _getControlWithCurvat3 = getControlWithCurvature({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY,
    c: curvature
  }),
      _getControlWithCurvat4 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getControlWithCurvat3, 2),
      targetControlX = _getControlWithCurvat4[0],
      targetControlY = _getControlWithCurvat4[1];

  return "M".concat(sourceX, ",").concat(sourceY, " C").concat(sourceControlX, ",").concat(sourceControlY, " ").concat(targetControlX, ",").concat(targetControlY, " ").concat(targetX, ",").concat(targetY);
} // @TODO: this function will recalculate the control points
// one option is to let getXXXPath() return center points
// but will introduce breaking changes
// the getCenter() of other types of edges might need to change, too

function getBezierCenter(_ref3) {
  var sourceX = _ref3.sourceX,
      sourceY = _ref3.sourceY,
      _ref3$sourcePosition = _ref3.sourcePosition,
      sourcePosition = _ref3$sourcePosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom : _ref3$sourcePosition,
      targetX = _ref3.targetX,
      targetY = _ref3.targetY,
      _ref3$targetPosition = _ref3.targetPosition,
      targetPosition = _ref3$targetPosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref3$targetPosition,
      _ref3$curvature = _ref3.curvature,
      curvature = _ref3$curvature === void 0 ? 0.25 : _ref3$curvature;

  var _getControlWithCurvat5 = getControlWithCurvature({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY,
    c: curvature
  }),
      _getControlWithCurvat6 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getControlWithCurvat5, 2),
      sourceControlX = _getControlWithCurvat6[0],
      sourceControlY = _getControlWithCurvat6[1];

  var _getControlWithCurvat7 = getControlWithCurvature({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY,
    c: curvature
  }),
      _getControlWithCurvat8 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getControlWithCurvat7, 2),
      targetControlX = _getControlWithCurvat8[0],
      targetControlY = _getControlWithCurvat8[1]; // cubic bezier t=0.5 mid point, not the actual mid point, but easy to calculate
  // https://stackoverflow.com/questions/67516101/how-to-find-distance-mid-point-of-bezier-curve


  var centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
  var centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
  var xOffset = Math.abs(centerX - sourceX);
  var yOffset = Math.abs(centerY - sourceY);
  return [centerX, centerY, xOffset, yOffset];
}
var BezierEdge = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function (_ref4) {
  var sourceX = _ref4.sourceX,
      sourceY = _ref4.sourceY,
      targetX = _ref4.targetX,
      targetY = _ref4.targetY,
      _ref4$sourcePosition = _ref4.sourcePosition,
      sourcePosition = _ref4$sourcePosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom : _ref4$sourcePosition,
      _ref4$targetPosition = _ref4.targetPosition,
      targetPosition = _ref4$targetPosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref4$targetPosition,
      label = _ref4.label,
      labelStyle = _ref4.labelStyle,
      labelShowBg = _ref4.labelShowBg,
      labelBgStyle = _ref4.labelBgStyle,
      labelBgPadding = _ref4.labelBgPadding,
      labelBgBorderRadius = _ref4.labelBgBorderRadius,
      style = _ref4.style,
      markerEnd = _ref4.markerEnd,
      markerStart = _ref4.markerStart,
      curvature = _ref4.curvature;
  var params = {
    sourceX: sourceX,
    sourceY: sourceY,
    sourcePosition: sourcePosition,
    targetX: targetX,
    targetY: targetY,
    targetPosition: targetPosition,
    curvature: curvature
  };
  var path = getBezierPath(params);

  var _getBezierCenter = getBezierCenter(params),
      _getBezierCenter2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getBezierCenter, 2),
      centerX = _getBezierCenter2[0],
      centerY = _getBezierCenter2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(BaseEdge, {
    path: path,
    centerX: centerX,
    centerY: centerY,
    label: label,
    labelStyle: labelStyle,
    labelShowBg: labelShowBg,
    labelBgStyle: labelBgStyle,
    labelBgPadding: labelBgPadding,
    labelBgBorderRadius: labelBgBorderRadius,
    style: style,
    markerEnd: markerEnd,
    markerStart: markerStart
  });
});

var NodeIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
var Provider = NodeIdContext.Provider;
NodeIdContext.Consumer;

function checkElementBelowIsValid(event, connectionMode, isTarget, nodeId, handleId, isValidConnection, doc) {
  var elementBelow = doc.elementFromPoint(event.clientX, event.clientY);
  var elementBelowIsTarget = (elementBelow === null || elementBelow === void 0 ? void 0 : elementBelow.classList.contains('target')) || false;
  var elementBelowIsSource = (elementBelow === null || elementBelow === void 0 ? void 0 : elementBelow.classList.contains('source')) || false;
  var result = {
    elementBelow: elementBelow,
    isValid: false,
    connection: {
      source: null,
      target: null,
      sourceHandle: null,
      targetHandle: null
    },
    isHoveringHandle: false
  };

  if (elementBelow && (elementBelowIsTarget || elementBelowIsSource)) {
    result.isHoveringHandle = true;
    var elementBelowNodeId = elementBelow.getAttribute('data-nodeid');
    var elementBelowHandleId = elementBelow.getAttribute('data-handleid');
    var connection = isTarget ? {
      source: elementBelowNodeId,
      sourceHandle: elementBelowHandleId,
      target: nodeId,
      targetHandle: handleId
    } : {
      source: nodeId,
      sourceHandle: handleId,
      target: elementBelowNodeId,
      targetHandle: elementBelowHandleId
    };
    result.connection = connection; // in strict mode we don't allow target to target or source to source connections

    var isValid = connectionMode === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.C.Strict ? isTarget && elementBelowIsSource || !isTarget && elementBelowIsTarget : true;

    if (isValid) {
      result.isValid = isValidConnection(connection);
    }
  }

  return result;
}

function resetRecentHandle(hoveredHandle) {
  hoveredHandle === null || hoveredHandle === void 0 ? void 0 : hoveredHandle.classList.remove('react-flow__handle-valid');
  hoveredHandle === null || hoveredHandle === void 0 ? void 0 : hoveredHandle.classList.remove('react-flow__handle-connecting');
}

function handleMouseDown(_ref) {
  var event = _ref.event,
      handleId = _ref.handleId,
      nodeId = _ref.nodeId,
      onConnect = _ref.onConnect,
      isTarget = _ref.isTarget,
      getState = _ref.getState,
      setState = _ref.setState,
      isValidConnection = _ref.isValidConnection,
      elementEdgeUpdaterType = _ref.elementEdgeUpdaterType,
      onEdgeUpdateEnd = _ref.onEdgeUpdateEnd;
  var reactFlowNode = event.target.closest('.react-flow'); // when react-flow is used inside a shadow root we can't use document

  var doc = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.g)(event.target);

  if (!doc) {
    return;
  }

  var elementBelow = doc.elementFromPoint(event.clientX, event.clientY);
  var elementBelowIsTarget = elementBelow === null || elementBelow === void 0 ? void 0 : elementBelow.classList.contains('target');
  var elementBelowIsSource = elementBelow === null || elementBelow === void 0 ? void 0 : elementBelow.classList.contains('source');

  if (!reactFlowNode || !elementBelowIsTarget && !elementBelowIsSource && !elementEdgeUpdaterType) {
    return;
  }

  var _getState = getState(),
      onConnectStart = _getState.onConnectStart,
      connectionMode = _getState.connectionMode;

  var handleType = elementEdgeUpdaterType ? elementEdgeUpdaterType : elementBelowIsTarget ? 'target' : 'source';
  var containerBounds = reactFlowNode.getBoundingClientRect();
  var recentHoveredHandle;
  setState({
    connectionPosition: {
      x: event.clientX - containerBounds.left,
      y: event.clientY - containerBounds.top
    },
    connectionNodeId: nodeId,
    connectionHandleId: handleId,
    connectionHandleType: handleType
  });
  onConnectStart === null || onConnectStart === void 0 ? void 0 : onConnectStart(event, {
    nodeId: nodeId,
    handleId: handleId,
    handleType: handleType
  });

  function onMouseMove(event) {
    setState({
      connectionPosition: {
        x: event.clientX - containerBounds.left,
        y: event.clientY - containerBounds.top
      }
    });

    var _checkElementBelowIsV = checkElementBelowIsValid(event, connectionMode, isTarget, nodeId, handleId, isValidConnection, doc),
        connection = _checkElementBelowIsV.connection,
        elementBelow = _checkElementBelowIsV.elementBelow,
        isValid = _checkElementBelowIsV.isValid,
        isHoveringHandle = _checkElementBelowIsV.isHoveringHandle;

    if (!isHoveringHandle) {
      return resetRecentHandle(recentHoveredHandle);
    }

    if (connection.source !== connection.target && elementBelow) {
      resetRecentHandle(recentHoveredHandle);
      recentHoveredHandle = elementBelow;
      elementBelow.classList.add('react-flow__handle-connecting');
      elementBelow.classList.toggle('react-flow__handle-valid', isValid);
    }
  }

  function onMouseUp(event) {
    var _getState2 = getState(),
        onConnectStop = _getState2.onConnectStop,
        onConnectEnd = _getState2.onConnectEnd;

    var _checkElementBelowIsV2 = checkElementBelowIsValid(event, connectionMode, isTarget, nodeId, handleId, isValidConnection, doc),
        connection = _checkElementBelowIsV2.connection,
        isValid = _checkElementBelowIsV2.isValid;

    onConnectStop === null || onConnectStop === void 0 ? void 0 : onConnectStop(event);

    if (isValid) {
      onConnect === null || onConnect === void 0 ? void 0 : onConnect(connection);
    }

    onConnectEnd === null || onConnectEnd === void 0 ? void 0 : onConnectEnd(event);

    if (elementEdgeUpdaterType && onEdgeUpdateEnd) {
      onEdgeUpdateEnd(event);
    }

    resetRecentHandle(recentHoveredHandle);
    setState({
      connectionNodeId: null,
      connectionHandleId: null,
      connectionHandleType: null
    });
    doc.removeEventListener('mousemove', onMouseMove);
    doc.removeEventListener('mouseup', onMouseUp);
  }

  doc.addEventListener('mousemove', onMouseMove);
  doc.addEventListener('mouseup', onMouseUp);
}

var _excluded$1 = ["type", "position", "isValidConnection", "isConnectable", "id", "onConnect", "children", "className", "onMouseDown"];

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$9(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var alwaysValid = function alwaysValid() {
  return true;
};

var selector$a = function selector(s) {
  return {
    connectionStartHandle: s.connectionStartHandle,
    connectOnClick: s.connectOnClick
  };
};

var Handle = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function (_ref, ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'source' : _ref$type,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref$position,
      _ref$isValidConnectio = _ref.isValidConnection,
      isValidConnection = _ref$isValidConnectio === void 0 ? alwaysValid : _ref$isValidConnectio,
      _ref$isConnectable = _ref.isConnectable,
      isConnectable = _ref$isConnectable === void 0 ? true : _ref$isConnectable,
      id = _ref.id,
      onConnect = _ref.onConnect,
      children = _ref.children,
      className = _ref.className,
      onMouseDown = _ref.onMouseDown,
      rest = (0,_useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_1__.a)(_ref, _excluded$1);

  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  var nodeId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(NodeIdContext);

  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(selector$a, zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"]),
      connectionStartHandle = _useStore.connectionStartHandle,
      connectOnClick = _useStore.connectOnClick;

  var handleId = id || null;
  var isTarget = type === 'target';

  var onConnectExtended = function onConnectExtended(params) {
    var _store$getState = store.getState(),
        defaultEdgeOptions = _store$getState.defaultEdgeOptions,
        onConnectAction = _store$getState.onConnect,
        hasDefaultEdges = _store$getState.hasDefaultEdges;

    var edgeParams = _objectSpread$9(_objectSpread$9({}, defaultEdgeOptions), params);

    if (hasDefaultEdges) {
      var _store$getState2 = store.getState(),
          edges = _store$getState2.edges;

      store.setState({
        edges: (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.c)(edgeParams, edges)
      });
    }

    onConnectAction === null || onConnectAction === void 0 ? void 0 : onConnectAction(edgeParams);
    onConnect === null || onConnect === void 0 ? void 0 : onConnect(edgeParams);
  };

  var onMouseDownHandler = function onMouseDownHandler(event) {
    if (event.button === 0) {
      handleMouseDown({
        event: event,
        handleId: handleId,
        nodeId: nodeId,
        onConnect: onConnectExtended,
        isTarget: isTarget,
        getState: store.getState,
        setState: store.setState,
        isValidConnection: isValidConnection
      });
    }

    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(event);
  };

  var onClick = function onClick(event) {
    var _store$getState3 = store.getState(),
        onClickConnectStart = _store$getState3.onClickConnectStart,
        onClickConnectStop = _store$getState3.onClickConnectStop,
        onClickConnectEnd = _store$getState3.onClickConnectEnd,
        connectionMode = _store$getState3.connectionMode;

    if (!connectionStartHandle) {
      onClickConnectStart === null || onClickConnectStart === void 0 ? void 0 : onClickConnectStart(event, {
        nodeId: nodeId,
        handleId: handleId,
        handleType: type
      });
      store.setState({
        connectionStartHandle: {
          nodeId: nodeId,
          type: type,
          handleId: handleId
        }
      });
      return;
    }

    var doc = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.g)(event.target);

    var _checkElementBelowIsV = checkElementBelowIsValid(event, connectionMode, connectionStartHandle.type === 'target', connectionStartHandle.nodeId, connectionStartHandle.handleId || null, isValidConnection, doc),
        connection = _checkElementBelowIsV.connection,
        isValid = _checkElementBelowIsV.isValid;

    onClickConnectStop === null || onClickConnectStop === void 0 ? void 0 : onClickConnectStop(event);

    if (isValid) {
      onConnectExtended(connection);
    }

    onClickConnectEnd === null || onClickConnectEnd === void 0 ? void 0 : onClickConnectEnd(event);
    store.setState({
      connectionStartHandle: null
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", _objectSpread$9({
    "data-handleid": handleId,
    "data-nodeid": nodeId,
    "data-handlepos": position,
    className: (0,classcat__WEBPACK_IMPORTED_MODULE_3__["default"])(['react-flow__handle', "react-flow__handle-".concat(position), 'nodrag', className, {
      source: !isTarget,
      target: isTarget,
      connectable: isConnectable,
      connecting: (connectionStartHandle === null || connectionStartHandle === void 0 ? void 0 : connectionStartHandle.nodeId) === nodeId && (connectionStartHandle === null || connectionStartHandle === void 0 ? void 0 : connectionStartHandle.handleId) === handleId && (connectionStartHandle === null || connectionStartHandle === void 0 ? void 0 : connectionStartHandle.type) === type
    }]),
    onMouseDown: onMouseDownHandler,
    onClick: connectOnClick ? onClick : undefined,
    ref: ref
  }, rest), children);
});
Handle.displayName = 'Handle';
var Handle$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(Handle);

var DefaultNode = function DefaultNode(_ref) {
  var data = _ref.data,
      isConnectable = _ref.isConnectable,
      _ref$targetPosition = _ref.targetPosition,
      targetPosition = _ref$targetPosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref$targetPosition,
      _ref$sourcePosition = _ref.sourcePosition,
      sourcePosition = _ref$sourcePosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom : _ref$sourcePosition;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Handle$1, {
    type: "target",
    position: targetPosition,
    isConnectable: isConnectable
  }), data === null || data === void 0 ? void 0 : data.label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Handle$1, {
    type: "source",
    position: sourcePosition,
    isConnectable: isConnectable
  }));
};

DefaultNode.displayName = 'DefaultNode';
var DefaultNode$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(DefaultNode);

var InputNode = function InputNode(_ref) {
  var data = _ref.data,
      isConnectable = _ref.isConnectable,
      _ref$sourcePosition = _ref.sourcePosition,
      sourcePosition = _ref$sourcePosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom : _ref$sourcePosition;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, data === null || data === void 0 ? void 0 : data.label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Handle$1, {
    type: "source",
    position: sourcePosition,
    isConnectable: isConnectable
  }));
};

InputNode.displayName = 'InputNode';
var InputNode$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(InputNode);

var OutputNode = function OutputNode(_ref) {
  var data = _ref.data,
      isConnectable = _ref.isConnectable,
      _ref$targetPosition = _ref.targetPosition,
      targetPosition = _ref$targetPosition === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top : _ref$targetPosition;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Handle$1, {
    type: "target",
    position: targetPosition,
    isConnectable: isConnectable
  }), data === null || data === void 0 ? void 0 : data.label);
};

OutputNode.displayName = 'OutputNode';
var OutputNode$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(OutputNode);

var selector$9 = function selector(s) {
  return {
    selectedNodes: Array.from(s.nodeInternals.values()).filter(function (n) {
      return n.selected;
    }),
    selectedEdges: s.edges.filter(function (e) {
      return e.selected;
    })
  };
};

var areEqual = function areEqual(objA, objB) {
  var selectedNodeIdsA = objA.selectedNodes.map(function (n) {
    return n.id;
  });
  var selectedNodeIdsB = objB.selectedNodes.map(function (n) {
    return n.id;
  });
  var selectedEdgeIdsA = objA.selectedEdges.map(function (e) {
    return e.id;
  });
  var selectedEdgeIdsB = objB.selectedEdges.map(function (e) {
    return e.id;
  });
  return (0,zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"])(selectedNodeIdsA, selectedNodeIdsB) && (0,zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"])(selectedEdgeIdsA, selectedEdgeIdsB);
}; // This is just a helper component for calling the onSelectionChange listener.
// @TODO: Now that we have the onNodesChange and on EdgesChange listeners, do we still need this component?


function SelectionListener(_ref) {
  var onSelectionChange = _ref.onSelectionChange;

  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(selector$9, areEqual),
      selectedNodes = _useStore.selectedNodes,
      selectedEdges = _useStore.selectedEdges;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    onSelectionChange({
      nodes: selectedNodes,
      edges: selectedEdges
    });
  }, [selectedNodes, selectedEdges]);
  return null;
}

var SelectionListener$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(SelectionListener);

var selector$8 = function selector(s) {
  return {
    setNodes: s.setNodes,
    setEdges: s.setEdges,
    setDefaultNodesAndEdges: s.setDefaultNodesAndEdges,
    setMinZoom: s.setMinZoom,
    setMaxZoom: s.setMaxZoom,
    setTranslateExtent: s.setTranslateExtent,
    setNodeExtent: s.setNodeExtent,
    reset: s.reset
  };
};

function useStoreUpdater(value, setStoreState) {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (typeof value !== 'undefined') {
      setStoreState(value);
    }
  }, [value]);
}

function useDirectStoreUpdater(key, value, setState) {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (typeof value !== 'undefined') {
      // @ts-ignore
      setState((0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)({}, key, value));
    }
  }, [value]);
}

var StoreUpdater = function StoreUpdater(_ref) {
  var nodes = _ref.nodes,
      edges = _ref.edges,
      defaultNodes = _ref.defaultNodes,
      defaultEdges = _ref.defaultEdges,
      onConnect = _ref.onConnect,
      onConnectStart = _ref.onConnectStart,
      onConnectStop = _ref.onConnectStop,
      onConnectEnd = _ref.onConnectEnd,
      onClickConnectStart = _ref.onClickConnectStart,
      onClickConnectStop = _ref.onClickConnectStop,
      onClickConnectEnd = _ref.onClickConnectEnd,
      nodesDraggable = _ref.nodesDraggable,
      nodesConnectable = _ref.nodesConnectable,
      minZoom = _ref.minZoom,
      maxZoom = _ref.maxZoom,
      nodeExtent = _ref.nodeExtent,
      onNodesChange = _ref.onNodesChange,
      onEdgesChange = _ref.onEdgesChange,
      elementsSelectable = _ref.elementsSelectable,
      connectionMode = _ref.connectionMode,
      snapGrid = _ref.snapGrid,
      snapToGrid = _ref.snapToGrid,
      translateExtent = _ref.translateExtent,
      connectOnClick = _ref.connectOnClick,
      defaultEdgeOptions = _ref.defaultEdgeOptions,
      fitView = _ref.fitView,
      fitViewOptions = _ref.fitViewOptions,
      onNodesDelete = _ref.onNodesDelete,
      onEdgesDelete = _ref.onEdgesDelete,
      onNodeDrag = _ref.onNodeDrag,
      onNodeDragStart = _ref.onNodeDragStart,
      onNodeDragStop = _ref.onNodeDragStop,
      onSelectionDrag = _ref.onSelectionDrag,
      onSelectionDragStart = _ref.onSelectionDragStart,
      onSelectionDragStop = _ref.onSelectionDragStop;

  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(selector$8, zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"]),
      setNodes = _useStore.setNodes,
      setEdges = _useStore.setEdges,
      setDefaultNodesAndEdges = _useStore.setDefaultNodesAndEdges,
      setMinZoom = _useStore.setMinZoom,
      setMaxZoom = _useStore.setMaxZoom,
      setTranslateExtent = _useStore.setTranslateExtent,
      setNodeExtent = _useStore.setNodeExtent,
      reset = _useStore.reset;

  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setDefaultNodesAndEdges(defaultNodes, defaultEdges);
    return function () {
      reset();
    };
  }, []);
  useDirectStoreUpdater('defaultEdgeOptions', defaultEdgeOptions, store.setState);
  useDirectStoreUpdater('connectionMode', connectionMode, store.setState);
  useDirectStoreUpdater('onConnect', onConnect, store.setState);
  useDirectStoreUpdater('onConnectStart', onConnectStart, store.setState);
  useDirectStoreUpdater('onConnectStop', onConnectStop, store.setState);
  useDirectStoreUpdater('onConnectEnd', onConnectEnd, store.setState);
  useDirectStoreUpdater('onClickConnectStart', onClickConnectStart, store.setState);
  useDirectStoreUpdater('onClickConnectStop', onClickConnectStop, store.setState);
  useDirectStoreUpdater('onClickConnectEnd', onClickConnectEnd, store.setState);
  useDirectStoreUpdater('nodesDraggable', nodesDraggable, store.setState);
  useDirectStoreUpdater('nodesConnectable', nodesConnectable, store.setState);
  useDirectStoreUpdater('elementsSelectable', elementsSelectable, store.setState);
  useDirectStoreUpdater('snapToGrid', snapToGrid, store.setState);
  useDirectStoreUpdater('snapGrid', snapGrid, store.setState);
  useDirectStoreUpdater('onNodesChange', onNodesChange, store.setState);
  useDirectStoreUpdater('onEdgesChange', onEdgesChange, store.setState);
  useDirectStoreUpdater('connectOnClick', connectOnClick, store.setState);
  useDirectStoreUpdater('fitViewOnInit', fitView, store.setState);
  useDirectStoreUpdater('fitViewOnInitOptions', fitViewOptions, store.setState);
  useDirectStoreUpdater('onNodesDelete', onNodesDelete, store.setState);
  useDirectStoreUpdater('onEdgesDelete', onEdgesDelete, store.setState);
  useDirectStoreUpdater('onNodeDrag', onNodeDrag, store.setState);
  useDirectStoreUpdater('onNodeDragStart', onNodeDragStart, store.setState);
  useDirectStoreUpdater('onNodeDragStop', onNodeDragStop, store.setState);
  useDirectStoreUpdater('onSelectionDrag', onSelectionDrag, store.setState);
  useDirectStoreUpdater('onSelectionDragStart', onSelectionDragStart, store.setState);
  useDirectStoreUpdater('onSelectionDragStop', onSelectionDragStop, store.setState);
  useStoreUpdater(nodes, setNodes);
  useStoreUpdater(edges, setEdges);
  useStoreUpdater(defaultNodes, setNodes);
  useStoreUpdater(defaultEdges, setEdges);
  useStoreUpdater(minZoom, setMinZoom);
  useStoreUpdater(maxZoom, setMaxZoom);
  useStoreUpdater(translateExtent, setTranslateExtent);
  useStoreUpdater(nodeExtent, setNodeExtent);
  return null;
};

var css_248z$1 = ".react-flow{height:100%;overflow:hidden;position:relative;width:100%}.react-flow__container{height:100%;left:0;position:absolute;top:0;width:100%}.react-flow__pane{z-index:1}.react-flow__viewport{pointer-events:none;transform-origin:0 0;z-index:2}.react-flow__renderer{z-index:4}.react-flow__selectionpane{z-index:5}.react-flow .react-flow__edges{overflow:visible;pointer-events:none}.react-flow .react-flow__connectionline{z-index:1001}.react-flow__edge{pointer-events:visibleStroke}.react-flow__edge.inactive{pointer-events:none}@-webkit-keyframes dashdraw{0%{stroke-dashoffset:10}}@keyframes dashdraw{0%{stroke-dashoffset:10}}.react-flow__edge-path{fill:none}.react-flow__edge-textwrapper{pointer-events:all}.react-flow__edge-text{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-flow__connection{pointer-events:none}.react-flow__connection .animated{stroke-dasharray:5;-webkit-animation:dashdraw .5s linear infinite;animation:dashdraw .5s linear infinite}.react-flow__connection-path{fill:none}.react-flow__nodes{pointer-events:none;transform-origin:0 0}.react-flow__node{box-sizing:border-box;pointer-events:all;position:absolute;transform-origin:0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-flow__nodesselection{pointer-events:none;transform-origin:left top;z-index:3}.react-flow__nodesselection-rect{cursor:-webkit-grab;cursor:grab;pointer-events:all;position:absolute}.react-flow__handle{pointer-events:none;position:absolute}.react-flow__handle.connectable{pointer-events:all}.react-flow__handle-bottom{bottom:-4px;left:50%;top:auto;transform:translate(-50%)}.react-flow__handle-top{left:50%;top:-4px;transform:translate(-50%)}.react-flow__handle-left{left:-4px;top:50%;transform:translateY(-50%)}.react-flow__handle-right{right:-4px;top:50%;transform:translateY(-50%)}.react-flow__edgeupdater{cursor:move;pointer-events:all}.react-flow__controls{bottom:20px;left:15px;position:absolute;z-index:5}.react-flow__controls-button{border:none;height:24px;width:24px}.react-flow__controls-button svg{width:100%}.react-flow__minimap{bottom:20px;position:absolute;right:15px;z-index:5}.react-flow__attribution{background:hsla(0,0%,100%,.5);color:#999;font-size:10px;padding:2px 3px;position:absolute;z-index:1000}.react-flow__attribution a{color:#555;text-decoration:none}.react-flow__attribution.top{top:0}.react-flow__attribution.bottom{bottom:0}.react-flow__attribution.left{left:0}.react-flow__attribution.right{right:0}.react-flow__attribution.center{left:50%;transform:translateX(-50%)}";
var css = css_248z$1;

var css_248z = ".react-flow__edge.selected .react-flow__edge-path{stroke:#555}.react-flow__edge.animated path{stroke-dasharray:5;-webkit-animation:dashdraw .5s linear infinite;animation:dashdraw .5s linear infinite}.react-flow__edge.updating .react-flow__edge-path{stroke:#777}.react-flow__edge-path{stroke:#b1b1b7;stroke-width:1}.react-flow__edge-text{font-size:10px}.react-flow__edge-textbg{fill:#fff}.react-flow__connection-path{stroke:#b1b1b7;stroke-width:1}.react-flow__node{cursor:-webkit-grab;cursor:grab}.react-flow__node-default,.react-flow__node-group,.react-flow__node-input,.react-flow__node-output{background:#fff;border:1px solid #1a192b;border-radius:3px;color:#222;font-size:12px;padding:10px;text-align:center;width:150px}.react-flow__node-default.selected,.react-flow__node-group.selected,.react-flow__node-input.selected,.react-flow__node-output.selected{box-shadow:0 0 0 .5px #1a192b}.react-flow__node-default .react-flow__handle,.react-flow__node-group .react-flow__handle,.react-flow__node-input .react-flow__handle,.react-flow__node-output .react-flow__handle{background:#1a192b}.react-flow__node-default.selectable:hover,.react-flow__node-group.selectable:hover,.react-flow__node-input.selectable:hover,.react-flow__node-output.selectable:hover{box-shadow:0 1px 4px 1px rgba(0,0,0,.08)}.react-flow__node-default.selectable.selected,.react-flow__node-group.selectable.selected,.react-flow__node-input.selectable.selected,.react-flow__node-output.selectable.selected{box-shadow:0 0 0 .5px #1a192b}.react-flow__node-group{background:hsla(0,0%,94%,.25);border-color:#1a192b}.react-flow__nodesselection-rect,.react-flow__selection{background:rgba(0,89,220,.08);border:1px dotted rgba(0,89,220,.8)}.react-flow__handle{background:#555;border:1px solid #fff;border-radius:100%;height:6px;width:6px}.react-flow__handle.connectable{cursor:crosshair}.react-flow__minimap{background-color:#fff}.react-flow__controls{box-shadow:0 0 2px 1px rgba(0,0,0,.08)}.react-flow__controls-button{align-items:center;background:#fefefe;border-bottom:1px solid #eee;box-sizing:content-box;cursor:pointer;display:flex;height:16px;justify-content:center;padding:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:16px}.react-flow__controls-button svg{max-height:12px;max-width:12px}.react-flow__controls-button:hover{background:#f4f4f4}";
var theme = css_248z;

var shiftX = function shiftX(x, shift, position) {
  if (position === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left) return x - shift;
  if (position === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Right) return x + shift;
  return x;
};

var shiftY = function shiftY(y, shift, position) {
  if (position === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top) return y - shift;
  if (position === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom) return y + shift;
  return y;
};

var EdgeAnchor = function EdgeAnchor(_ref) {
  var className = _ref.className,
      position = _ref.position,
      centerX = _ref.centerX,
      centerY = _ref.centerY,
      _ref$radius = _ref.radius,
      radius = _ref$radius === void 0 ? 10 : _ref$radius;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("circle", {
    className: (0,classcat__WEBPACK_IMPORTED_MODULE_3__["default"])(['react-flow__edgeupdater', className]),
    cx: shiftX(centerX, radius, position),
    cy: shiftY(centerY, radius, position),
    r: radius,
    stroke: "transparent",
    fill: "transparent"
  });
};

var wrapEdge = (function (EdgeComponent) {
  var EdgeWrapper = function EdgeWrapper(_ref) {
    var id = _ref.id,
        className = _ref.className,
        type = _ref.type,
        data = _ref.data,
        onClick = _ref.onClick,
        onEdgeDoubleClick = _ref.onEdgeDoubleClick,
        selected = _ref.selected,
        animated = _ref.animated,
        label = _ref.label,
        labelStyle = _ref.labelStyle,
        labelShowBg = _ref.labelShowBg,
        labelBgStyle = _ref.labelBgStyle,
        labelBgPadding = _ref.labelBgPadding,
        labelBgBorderRadius = _ref.labelBgBorderRadius,
        style = _ref.style,
        source = _ref.source,
        target = _ref.target,
        sourceX = _ref.sourceX,
        sourceY = _ref.sourceY,
        targetX = _ref.targetX,
        targetY = _ref.targetY,
        sourcePosition = _ref.sourcePosition,
        targetPosition = _ref.targetPosition,
        elementsSelectable = _ref.elementsSelectable,
        hidden = _ref.hidden,
        sourceHandleId = _ref.sourceHandleId,
        targetHandleId = _ref.targetHandleId,
        onContextMenu = _ref.onContextMenu,
        onMouseEnter = _ref.onMouseEnter,
        onMouseMove = _ref.onMouseMove,
        onMouseLeave = _ref.onMouseLeave,
        edgeUpdaterRadius = _ref.edgeUpdaterRadius,
        onEdgeUpdate = _ref.onEdgeUpdate,
        onEdgeUpdateStart = _ref.onEdgeUpdateStart,
        onEdgeUpdateEnd = _ref.onEdgeUpdateEnd,
        markerEnd = _ref.markerEnd,
        markerStart = _ref.markerStart,
        rfId = _ref.rfId;

    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
        _useState2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_useState, 2),
        updating = _useState2[0],
        setUpdating = _useState2[1];

    var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();

    var onEdgeClick = function onEdgeClick(event) {
      var _store$getState = store.getState(),
          edges = _store$getState.edges,
          addSelectedEdges = _store$getState.addSelectedEdges;

      var edge = edges.find(function (e) {
        return e.id === id;
      });

      if (elementsSelectable) {
        store.setState({
          nodesSelectionActive: false
        });
        addSelectedEdges([id]);
      }

      onClick === null || onClick === void 0 ? void 0 : onClick(event, edge);
    };

    var onEdgeDoubleClickHandler = getMouseHandler(id, store.getState, onEdgeDoubleClick);
    var onEdgeContextMenu = getMouseHandler(id, store.getState, onContextMenu);
    var onEdgeMouseEnter = getMouseHandler(id, store.getState, onMouseEnter);
    var onEdgeMouseMove = getMouseHandler(id, store.getState, onMouseMove);
    var onEdgeMouseLeave = getMouseHandler(id, store.getState, onMouseLeave);

    var handleEdgeUpdater = function handleEdgeUpdater(event, isSourceHandle) {
      var nodeId = isSourceHandle ? target : source;
      var handleId = (isSourceHandle ? targetHandleId : sourceHandleId) || null;
      var handleType = isSourceHandle ? 'target' : 'source';

      var isValidConnection = function isValidConnection() {
        return true;
      };

      var isTarget = isSourceHandle;
      var edge = store.getState().edges.find(function (e) {
        return e.id === id;
      });
      onEdgeUpdateStart === null || onEdgeUpdateStart === void 0 ? void 0 : onEdgeUpdateStart(event, edge, handleType);

      var _onEdgeUpdateEnd = onEdgeUpdateEnd ? function (evt) {
        return onEdgeUpdateEnd(evt, edge, handleType);
      } : undefined;

      var onConnectEdge = function onConnectEdge(connection) {
        return onEdgeUpdate === null || onEdgeUpdate === void 0 ? void 0 : onEdgeUpdate(edge, connection);
      };

      handleMouseDown({
        event: event,
        handleId: handleId,
        nodeId: nodeId,
        onConnect: onConnectEdge,
        isTarget: isTarget,
        getState: store.getState,
        setState: store.setState,
        isValidConnection: isValidConnection,
        elementEdgeUpdaterType: handleType,
        onEdgeUpdateEnd: _onEdgeUpdateEnd
      });
    };

    var onEdgeUpdaterSourceMouseDown = function onEdgeUpdaterSourceMouseDown(event) {
      return handleEdgeUpdater(event, true);
    };

    var onEdgeUpdaterTargetMouseDown = function onEdgeUpdaterTargetMouseDown(event) {
      return handleEdgeUpdater(event, false);
    };

    var onEdgeUpdaterMouseEnter = function onEdgeUpdaterMouseEnter() {
      return setUpdating(true);
    };

    var onEdgeUpdaterMouseOut = function onEdgeUpdaterMouseOut() {
      return setUpdating(false);
    };

    var markerStartUrl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
      return "url(#".concat((0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.d)(markerStart, rfId), ")");
    }, [markerStart, rfId]);
    var markerEndUrl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
      return "url(#".concat((0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.d)(markerEnd, rfId), ")");
    }, [markerEnd, rfId]);

    if (hidden) {
      return null;
    }

    var inactive = !elementsSelectable && !onClick;
    var handleEdgeUpdate = typeof onEdgeUpdate !== 'undefined';
    var edgeClasses = (0,classcat__WEBPACK_IMPORTED_MODULE_3__["default"])(['react-flow__edge', "react-flow__edge-".concat(type), className, {
      selected: selected,
      animated: animated,
      inactive: inactive,
      updating: updating
    }]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("g", {
      className: edgeClasses,
      onClick: onEdgeClick,
      onDoubleClick: onEdgeDoubleClickHandler,
      onContextMenu: onEdgeContextMenu,
      onMouseEnter: onEdgeMouseEnter,
      onMouseMove: onEdgeMouseMove,
      onMouseLeave: onEdgeMouseLeave
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EdgeComponent, {
      id: id,
      source: source,
      target: target,
      selected: selected,
      animated: animated,
      label: label,
      labelStyle: labelStyle,
      labelShowBg: labelShowBg,
      labelBgStyle: labelBgStyle,
      labelBgPadding: labelBgPadding,
      labelBgBorderRadius: labelBgBorderRadius,
      data: data,
      style: style,
      sourceX: sourceX,
      sourceY: sourceY,
      targetX: targetX,
      targetY: targetY,
      sourcePosition: sourcePosition,
      targetPosition: targetPosition,
      sourceHandleId: sourceHandleId,
      targetHandleId: targetHandleId,
      markerStart: markerStartUrl,
      markerEnd: markerEndUrl
    }), handleEdgeUpdate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("g", {
      onMouseDown: onEdgeUpdaterSourceMouseDown,
      onMouseEnter: onEdgeUpdaterMouseEnter,
      onMouseOut: onEdgeUpdaterMouseOut
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EdgeAnchor, {
      position: sourcePosition,
      centerX: sourceX,
      centerY: sourceY,
      radius: edgeUpdaterRadius
    })), handleEdgeUpdate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("g", {
      onMouseDown: onEdgeUpdaterTargetMouseDown,
      onMouseEnter: onEdgeUpdaterMouseEnter,
      onMouseOut: onEdgeUpdaterMouseOut
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EdgeAnchor, {
      position: targetPosition,
      centerX: targetX,
      centerY: targetY,
      radius: edgeUpdaterRadius
    })));
  };

  EdgeWrapper.displayName = 'EdgeWrapper';
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(EdgeWrapper);
});

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createEdgeTypes(edgeTypes) {
  var standardTypes = {
    "default": wrapEdge(edgeTypes["default"] || BezierEdge),
    straight: wrapEdge(edgeTypes.bezier || StraightEdge),
    step: wrapEdge(edgeTypes.step || StepEdge),
    smoothstep: wrapEdge(edgeTypes.step || SmoothStepEdge),
    simplebezier: wrapEdge(edgeTypes.simplebezier || SimpleBezierEdge)
  };
  var wrappedTypes = {};
  var specialTypes = Object.keys(edgeTypes).filter(function (k) {
    return !['default', 'bezier'].includes(k);
  }).reduce(function (res, key) {
    res[key] = wrapEdge(edgeTypes[key] || BezierEdge);
    return res;
  }, wrappedTypes);
  return _objectSpread$8(_objectSpread$8({}, standardTypes), specialTypes);
}
function getHandlePosition(position, nodeRect) {
  var handle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var x = ((handle === null || handle === void 0 ? void 0 : handle.x) || 0) + nodeRect.x;
  var y = ((handle === null || handle === void 0 ? void 0 : handle.y) || 0) + nodeRect.y;
  var width = (handle === null || handle === void 0 ? void 0 : handle.width) || nodeRect.width;
  var height = (handle === null || handle === void 0 ? void 0 : handle.height) || nodeRect.height;

  switch (position) {
    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top:
      return {
        x: x + width / 2,
        y: y
      };

    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Right:
      return {
        x: x + width,
        y: y + height / 2
      };

    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom:
      return {
        x: x + width / 2,
        y: y + height
      };

    case _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left:
      return {
        x: x,
        y: y + height / 2
      };
  }
}
function getHandle(bounds, handleId) {
  if (!bounds) {
    return null;
  } // there is no handleId when there are no multiple handles/ handles with ids
  // so we just pick the first one


  var handle = null;

  if (bounds.length === 1 || !handleId) {
    handle = bounds[0];
  } else if (handleId) {
    handle = bounds.find(function (d) {
      return d.id === handleId;
    });
  }

  return typeof handle === 'undefined' ? null : handle;
}
var getEdgePositions = function getEdgePositions(sourceNodeRect, sourceHandle, sourcePosition, targetNodeRect, targetHandle, targetPosition) {
  var sourceHandlePos = getHandlePosition(sourcePosition, sourceNodeRect, sourceHandle);
  var targetHandlePos = getHandlePosition(targetPosition, targetNodeRect, targetHandle);
  return {
    sourceX: sourceHandlePos.x,
    sourceY: sourceHandlePos.y,
    targetX: targetHandlePos.x,
    targetY: targetHandlePos.y
  };
};
function isEdgeVisible(_ref) {
  var sourcePos = _ref.sourcePos,
      targetPos = _ref.targetPos,
      sourceWidth = _ref.sourceWidth,
      sourceHeight = _ref.sourceHeight,
      targetWidth = _ref.targetWidth,
      targetHeight = _ref.targetHeight,
      width = _ref.width,
      height = _ref.height,
      transform = _ref.transform;
  var edgeBox = {
    x: Math.min(sourcePos.x, targetPos.x),
    y: Math.min(sourcePos.y, targetPos.y),
    x2: Math.max(sourcePos.x + sourceWidth, targetPos.x + targetWidth),
    y2: Math.max(sourcePos.y + sourceHeight, targetPos.y + targetHeight)
  };

  if (edgeBox.x === edgeBox.x2) {
    edgeBox.x2 += 1;
  }

  if (edgeBox.y === edgeBox.y2) {
    edgeBox.y2 += 1;
  }

  var viewBox = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.r)({
    x: (0 - transform[0]) / transform[2],
    y: (0 - transform[1]) / transform[2],
    width: width / transform[2],
    height: height / transform[2]
  });
  var xOverlap = Math.max(0, Math.min(viewBox.x2, edgeBox.x2) - Math.max(viewBox.x, edgeBox.x));
  var yOverlap = Math.max(0, Math.min(viewBox.y2, edgeBox.y2) - Math.max(viewBox.y, edgeBox.y));
  var overlappingArea = Math.ceil(xOverlap * yOverlap);
  return overlappingArea > 0;
}
function getNodeData(nodeInternals, nodeId) {
  var _node$internalsSymbol, _node$positionAbsolut, _node$positionAbsolut2, _node$positionAbsolut3, _node$positionAbsolut4;

  var node = nodeInternals.get(nodeId);
  var handleBounds = (node === null || node === void 0 ? void 0 : (_node$internalsSymbol = node[_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.i]) === null || _node$internalsSymbol === void 0 ? void 0 : _node$internalsSymbol.handleBounds) || null;
  var isInvalid = !node || !handleBounds || !node.width || !node.height || typeof ((_node$positionAbsolut = node.positionAbsolute) === null || _node$positionAbsolut === void 0 ? void 0 : _node$positionAbsolut.x) === 'undefined' || typeof ((_node$positionAbsolut2 = node.positionAbsolute) === null || _node$positionAbsolut2 === void 0 ? void 0 : _node$positionAbsolut2.y) === 'undefined';
  return [{
    x: (node === null || node === void 0 ? void 0 : (_node$positionAbsolut3 = node.positionAbsolute) === null || _node$positionAbsolut3 === void 0 ? void 0 : _node$positionAbsolut3.x) || 0,
    y: (node === null || node === void 0 ? void 0 : (_node$positionAbsolut4 = node.positionAbsolute) === null || _node$positionAbsolut4 === void 0 ? void 0 : _node$positionAbsolut4.y) || 0,
    width: (node === null || node === void 0 ? void 0 : node.width) || 0,
    height: (node === null || node === void 0 ? void 0 : node.height) || 0
  }, handleBounds, !isInvalid];
}

var doc = typeof document !== 'undefined' ? document : null; // the keycode can be a string 'a' or an array of strings ['a', 'a+d']
// a string means a single key 'a' or a combination when '+' is used 'a+d'
// an array means different possibilites. Explainer: ['a', 'd+s'] here the
// user can use the single key 'a' or the combination 'd' + 's'

var useKeyPress = (function () {
  var keyCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    target: doc
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_useState, 2),
      keyPressed = _useState2[0],
      setKeyPressed = _useState2[1]; // we need to remember the pressed keys in order to support combinations


  var pressedKeys = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(new Set([])); // keyCodes = array with single keys [['a']] or key combinations [['a', 's']]
  // keysToWatch = array with all keys flattened ['a', 'd', 'ShiftLeft']
  // used to check if we store event.code or event.key. When the code is in the list of keysToWatch
  // we use the code otherwise the key. Explainer: When you press the left "command" key, the code is "MetaLeft"
  // and the key is "Meta". We want users to be able to pass keys and codes so we assume that the key is meant when
  // we can't find it in the list of keysToWatch.

  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (keyCode !== null) {
      var keyCodeArr = Array.isArray(keyCode) ? keyCode : [keyCode];
      var keys = keyCodeArr.filter(function (kc) {
        return typeof kc === 'string';
      }).map(function (kc) {
        return kc.split('+');
      });
      var keysFlat = keys.reduce(function (res, item) {
        return res.concat.apply(res, (0,_useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_1__._)(item));
      }, []);
      return [keys, keysFlat];
    }

    return [[], []];
  }, [keyCode]),
      _useMemo2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_useMemo, 2),
      keyCodes = _useMemo2[0],
      keysToWatch = _useMemo2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (keyCode !== null) {
      var _options$target, _options$target2;

      var downHandler = function downHandler(event) {
        if (isInputDOMNode(event)) {
          return false;
        }

        var keyOrCode = useKeyOrCode(event.code, keysToWatch);
        pressedKeys.current.add(event[keyOrCode]);

        if (isMatchingKey(keyCodes, pressedKeys.current, false)) {
          event.preventDefault();
          setKeyPressed(true);
        }
      };

      var upHandler = function upHandler(event) {
        if (isInputDOMNode(event)) {
          return false;
        }

        var keyOrCode = useKeyOrCode(event.code, keysToWatch);

        if (isMatchingKey(keyCodes, pressedKeys.current, true)) {
          setKeyPressed(false);
          pressedKeys.current.clear();
        } else {
          pressedKeys.current["delete"](event[keyOrCode]);
        }
      };

      var resetHandler = function resetHandler() {
        pressedKeys.current.clear();
        setKeyPressed(false);
      };

      options === null || options === void 0 ? void 0 : (_options$target = options.target) === null || _options$target === void 0 ? void 0 : _options$target.addEventListener('keydown', downHandler);
      options === null || options === void 0 ? void 0 : (_options$target2 = options.target) === null || _options$target2 === void 0 ? void 0 : _options$target2.addEventListener('keyup', upHandler);
      window.addEventListener('blur', resetHandler);
      return function () {
        var _options$target3, _options$target4;

        options === null || options === void 0 ? void 0 : (_options$target3 = options.target) === null || _options$target3 === void 0 ? void 0 : _options$target3.removeEventListener('keydown', downHandler);
        options === null || options === void 0 ? void 0 : (_options$target4 = options.target) === null || _options$target4 === void 0 ? void 0 : _options$target4.removeEventListener('keyup', upHandler);
        window.removeEventListener('blur', resetHandler);
      };
    }
  }, [keyCode, setKeyPressed]);
  return keyPressed;
}); // utils

function isMatchingKey(keyCodes, pressedKeys, isUp) {
  return keyCodes // we only want to compare same sizes of keyCode definitions
  // and pressed keys. When the user specified 'Meta' as a key somewhere
  // this would also be truthy without this filter when user presses 'Meta' + 'r'
  .filter(function (keys) {
    return isUp || keys.length === pressedKeys.size;
  }) // since we want to support multiple possibilities only one of the
  // combinations need to be part of the pressed keys
  .some(function (keys) {
    return keys.every(function (k) {
      return pressedKeys.has(k);
    });
  });
}

function useKeyOrCode(eventCode, keysToWatch) {
  return keysToWatch.includes(eventCode) ? 'code' : 'key';
}

function isInputDOMNode(event) {
  var target = event.target;
  return ['INPUT', 'SELECT', 'TEXTAREA'].includes(target === null || target === void 0 ? void 0 : target.nodeName) || (target === null || target === void 0 ? void 0 : target.hasAttribute('contenteditable'));
}

var selector$7 = function selector(s) {
  return {
    onNodesChange: s.onNodesChange,
    onEdgesChange: s.onEdgesChange
  };
};

var useGlobalKeyHandler = (function (_ref) {
  var deleteKeyCode = _ref.deleteKeyCode,
      multiSelectionKeyCode = _ref.multiSelectionKeyCode;
  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();

  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(selector$7, zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"]),
      onNodesChange = _useStore.onNodesChange,
      onEdgesChange = _useStore.onEdgesChange;

  var deleteKeyPressed = useKeyPress(deleteKeyCode);
  var multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _store$getState = store.getState(),
        nodeInternals = _store$getState.nodeInternals,
        edges = _store$getState.edges,
        hasDefaultNodes = _store$getState.hasDefaultNodes,
        hasDefaultEdges = _store$getState.hasDefaultEdges,
        onNodesDelete = _store$getState.onNodesDelete,
        onEdgesDelete = _store$getState.onEdgesDelete;

    var nodes = Array.from(nodeInternals.values());
    var nodesToRemove = nodes.reduce(function (res, node) {
      if (!node.selected && node.parentNode && res.find(function (n) {
        return n.id === node.parentNode;
      })) {
        res.push(node);
      } else if (node.selected) {
        res.push(node);
      }

      return res;
    }, []);
    var selectedEdges = edges.filter(function (e) {
      return e.selected;
    });

    if (deleteKeyPressed && (nodesToRemove || selectedEdges)) {
      var connectedEdges = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.e)(nodesToRemove, edges);
      var edgesToRemove = [].concat((0,_useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_1__._)(selectedEdges), (0,_useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_1__._)(connectedEdges));
      var edgeIdsToRemove = edgesToRemove.reduce(function (res, edge) {
        if (!res.includes(edge.id)) {
          res.push(edge.id);
        }

        return res;
      }, []);

      if (hasDefaultEdges || hasDefaultNodes) {
        if (hasDefaultEdges) {
          store.setState({
            edges: edges.filter(function (e) {
              return !edgeIdsToRemove.includes(e.id);
            })
          });
        }

        if (hasDefaultNodes) {
          nodesToRemove.forEach(function (node) {
            nodeInternals["delete"](node.id);
          });
          store.setState({
            nodeInternals: new Map(nodeInternals)
          });
        }
      }

      if (edgeIdsToRemove.length > 0) {
        onEdgesDelete === null || onEdgesDelete === void 0 ? void 0 : onEdgesDelete(edgesToRemove);

        if (onEdgesChange) {
          var edgeChanges = edgeIdsToRemove.map(function (id) {
            return {
              id: id,
              type: 'remove'
            };
          });
          onEdgesChange(edgeChanges);
        }
      }

      if (nodesToRemove.length > 0) {
        onNodesDelete === null || onNodesDelete === void 0 ? void 0 : onNodesDelete(nodesToRemove);

        if (onNodesChange) {
          var nodeChanges = nodesToRemove.map(function (n) {
            return {
              id: n.id,
              type: 'remove'
            };
          });
          onNodesChange(nodeChanges);
        }
      }

      store.setState({
        nodesSelectionActive: false
      });
    }
  }, [deleteKeyPressed, onNodesChange, onEdgesChange]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    store.setState({
      multiSelectionActive: multiSelectionKeyPressed
    });
  }, [multiSelectionKeyPressed]);
});

function useResizeHandler(rendererNode) {
  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var resizeObserver;

    var updateDimensions = function updateDimensions() {
      if (!rendererNode.current) {
        return;
      }

      var size = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.f)(rendererNode.current); // @ts-ignore

      if (true) {
        if (size.height === 0 || size.width === 0) {
          console.warn('[React Flow]: The React Flow parent container needs a width and a height to render the graph. Help: https://reactflow.dev/error#400');
        }
      }

      store.setState({
        width: size.width || 500,
        height: size.height || 500
      });
    };

    updateDimensions();
    window.onresize = updateDimensions;

    if (rendererNode.current) {
      resizeObserver = new ResizeObserver(function () {
        return updateDimensions();
      });
      resizeObserver.observe(rendererNode.current);
    }

    return function () {
      window.onresize = null;

      if (resizeObserver && rendererNode.current) {
        resizeObserver.unobserve(rendererNode.current);
      }
    };
  }, []);
}

var viewChanged = function viewChanged(prevViewport, eventViewport) {
  return prevViewport.x !== eventViewport.x || prevViewport.y !== eventViewport.y || prevViewport.zoom !== eventViewport.k;
};

var eventToFlowTransform = function eventToFlowTransform(eventViewport) {
  return {
    x: eventViewport.x,
    y: eventViewport.y,
    zoom: eventViewport.k
  };
};

var isWrappedWithClass = function isWrappedWithClass(event, className) {
  return event.target.closest(".".concat(className));
};

var selector$6 = function selector(s) {
  return {
    d3Zoom: s.d3Zoom,
    d3Selection: s.d3Selection,
    d3ZoomHandler: s.d3ZoomHandler
  };
};

var ZoomPane = function ZoomPane(_ref) {
  var onMove = _ref.onMove,
      onMoveStart = _ref.onMoveStart,
      onMoveEnd = _ref.onMoveEnd,
      _ref$zoomOnScroll = _ref.zoomOnScroll,
      zoomOnScroll = _ref$zoomOnScroll === void 0 ? true : _ref$zoomOnScroll,
      _ref$zoomOnPinch = _ref.zoomOnPinch,
      zoomOnPinch = _ref$zoomOnPinch === void 0 ? true : _ref$zoomOnPinch,
      _ref$panOnScroll = _ref.panOnScroll,
      panOnScroll = _ref$panOnScroll === void 0 ? false : _ref$panOnScroll,
      _ref$panOnScrollSpeed = _ref.panOnScrollSpeed,
      panOnScrollSpeed = _ref$panOnScrollSpeed === void 0 ? 0.5 : _ref$panOnScrollSpeed,
      _ref$panOnScrollMode = _ref.panOnScrollMode,
      panOnScrollMode = _ref$panOnScrollMode === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.h.Free : _ref$panOnScrollMode,
      _ref$zoomOnDoubleClic = _ref.zoomOnDoubleClick,
      zoomOnDoubleClick = _ref$zoomOnDoubleClic === void 0 ? true : _ref$zoomOnDoubleClic,
      selectionKeyPressed = _ref.selectionKeyPressed,
      elementsSelectable = _ref.elementsSelectable,
      _ref$panOnDrag = _ref.panOnDrag,
      panOnDrag = _ref$panOnDrag === void 0 ? true : _ref$panOnDrag,
      translateExtent = _ref.translateExtent,
      minZoom = _ref.minZoom,
      maxZoom = _ref.maxZoom,
      _ref$defaultZoom = _ref.defaultZoom,
      defaultZoom = _ref$defaultZoom === void 0 ? 1 : _ref$defaultZoom,
      _ref$defaultPosition = _ref.defaultPosition,
      defaultPosition = _ref$defaultPosition === void 0 ? [0, 0] : _ref$defaultPosition,
      zoomActivationKeyCode = _ref.zoomActivationKeyCode,
      _ref$preventScrolling = _ref.preventScrolling,
      preventScrolling = _ref$preventScrolling === void 0 ? true : _ref$preventScrolling,
      children = _ref.children,
      noWheelClassName = _ref.noWheelClassName,
      noPanClassName = _ref.noPanClassName;
  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  var isZoomingOrPanning = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  var zoomPane = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var prevTransform = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
    x: 0,
    y: 0,
    zoom: 0
  });

  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(selector$6, zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"]),
      d3Zoom = _useStore.d3Zoom,
      d3Selection = _useStore.d3Selection,
      d3ZoomHandler = _useStore.d3ZoomHandler;

  var zoomActivationKeyPressed = useKeyPress(zoomActivationKeyCode);
  useResizeHandler(zoomPane);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (zoomPane.current) {
      var _selection$node;

      var d3ZoomInstance = (0,d3_zoom__WEBPACK_IMPORTED_MODULE_4__.zoom)().scaleExtent([minZoom, maxZoom]).translateExtent(translateExtent);
      var selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_13__["default"])(zoomPane.current).call(d3ZoomInstance);
      var clampedX = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.j)(defaultPosition[0], translateExtent[0][0], translateExtent[1][0]);
      var clampedY = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.j)(defaultPosition[1], translateExtent[0][1], translateExtent[1][1]);
      var clampedZoom = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.j)(defaultZoom, minZoom, maxZoom);
      var updatedTransform = d3_zoom__WEBPACK_IMPORTED_MODULE_4__.zoomIdentity.translate(clampedX, clampedY).scale(clampedZoom);
      d3ZoomInstance.transform(selection, updatedTransform);
      store.setState({
        d3Zoom: d3ZoomInstance,
        d3Selection: selection,
        d3ZoomHandler: selection.on('wheel.zoom'),
        // we need to pass transform because zoom handler is not registered when we set the initial transform
        transform: [clampedX, clampedY, clampedZoom],
        domNode: (_selection$node = selection.node()) === null || _selection$node === void 0 ? void 0 : _selection$node.closest('.react-flow')
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (d3Selection && d3Zoom) {
      if (panOnScroll && !zoomActivationKeyPressed) {
        d3Selection.on('wheel', function (event) {
          if (isWrappedWithClass(event, noWheelClassName)) {
            return false;
          }

          event.preventDefault();
          event.stopImmediatePropagation();
          var currentZoom = d3Selection.property('__zoom').k || 1;

          if (event.ctrlKey && zoomOnPinch) {
            var point = (0,d3_selection__WEBPACK_IMPORTED_MODULE_14__["default"])(event); // taken from https://github.com/d3/d3-zoom/blob/master/src/zoom.js

            var pinchDelta = -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * 10;

            var _zoom = currentZoom * Math.pow(2, pinchDelta);

            d3Zoom.scaleTo(d3Selection, _zoom, point);
            return;
          } // increase scroll speed in firefox
          // firefox: deltaMode === 1; chrome: deltaMode === 0


          var deltaNormalize = event.deltaMode === 1 ? 20 : 1;
          var deltaX = panOnScrollMode === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.h.Vertical ? 0 : event.deltaX * deltaNormalize;
          var deltaY = panOnScrollMode === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.h.Horizontal ? 0 : event.deltaY * deltaNormalize;
          d3Zoom.translateBy(d3Selection, -(deltaX / currentZoom) * panOnScrollSpeed, -(deltaY / currentZoom) * panOnScrollSpeed);
        }).on('wheel.zoom', null);
      } else if (typeof d3ZoomHandler !== 'undefined') {
        d3Selection.on('wheel', function (event) {
          if (!preventScrolling || isWrappedWithClass(event, noWheelClassName)) {
            return null;
          }

          event.preventDefault();
        }).on('wheel.zoom', d3ZoomHandler);
      }
    }
  }, [panOnScroll, panOnScrollMode, d3Selection, d3Zoom, d3ZoomHandler, zoomActivationKeyPressed, zoomOnPinch, preventScrolling, noWheelClassName]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (d3Zoom) {
      if (selectionKeyPressed && !isZoomingOrPanning.current) {
        d3Zoom.on('zoom', null);
      } else if (!selectionKeyPressed) {
        d3Zoom.on('zoom', function (event) {
          store.setState({
            transform: [event.transform.x, event.transform.y, event.transform.k]
          });

          if (onMove) {
            var flowTransform = eventToFlowTransform(event.transform);
            onMove(event.sourceEvent, flowTransform);
          }
        });
      }
    }
  }, [selectionKeyPressed, d3Zoom, onMove]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (d3Zoom) {
      d3Zoom.on('start', function (event) {
        isZoomingOrPanning.current = true;

        if (onMoveStart) {
          var flowTransform = eventToFlowTransform(event.transform);
          prevTransform.current = flowTransform;
          onMoveStart(event.sourceEvent, flowTransform);
        }
      });
    }
  }, [d3Zoom, onMoveStart]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (d3Zoom) {
      d3Zoom.on('end', function (event) {
        isZoomingOrPanning.current = false;

        if (onMoveEnd && viewChanged(prevTransform.current, event.transform)) {
          var flowTransform = eventToFlowTransform(event.transform);
          prevTransform.current = flowTransform;
          onMoveEnd(event.sourceEvent, flowTransform);
        }
      });
    }
  }, [d3Zoom, onMoveEnd]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (d3Zoom) {
      d3Zoom.filter(function (event) {
        var zoomScroll = zoomActivationKeyPressed || zoomOnScroll;
        var pinchZoom = zoomOnPinch && event.ctrlKey; // if all interactions are disabled, we prevent all zoom events

        if (!panOnDrag && !zoomScroll && !panOnScroll && !zoomOnDoubleClick && !zoomOnPinch) {
          return false;
        } // during a selection we prevent all other interactions


        if (selectionKeyPressed) {
          return false;
        } // if zoom on double click is disabled, we prevent the double click event


        if (!zoomOnDoubleClick && event.type === 'dblclick') {
          return false;
        } // if the target element is inside an element with the nowheel class, we prevent zooming


        if (isWrappedWithClass(event, noWheelClassName) && event.type === 'wheel') {
          return false;
        } // if the target element is inside an element with the nopan class, we prevent panning


        if (isWrappedWithClass(event, noPanClassName) && event.type !== 'wheel') {
          return false;
        }

        if (!zoomOnPinch && event.ctrlKey && event.type === 'wheel') {
          return false;
        } // when there is no scroll handling enabled, we prevent all wheel events


        if (!zoomScroll && !panOnScroll && !pinchZoom && event.type === 'wheel') {
          return false;
        } // if the pane is not movable, we prevent dragging it with mousestart or touchstart


        if (!panOnDrag && (event.type === 'mousedown' || event.type === 'touchstart')) {
          return false;
        } // default filter for d3-zoom


        return (!event.ctrlKey || event.type === 'wheel') && !event.button;
      });
    }
  }, [d3Zoom, zoomOnScroll, zoomOnPinch, panOnScroll, zoomOnDoubleClick, panOnDrag, selectionKeyPressed, elementsSelectable, zoomActivationKeyPressed]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "react-flow__renderer react-flow__container",
    ref: zoomPane
  }, children);
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getMousePosition(event, containerBounds) {
  return {
    x: event.clientX - containerBounds.left,
    y: event.clientY - containerBounds.top
  };
}

var selector$5 = function selector(s) {
  return {
    userSelectionActive: s.userSelectionActive,
    elementsSelectable: s.elementsSelectable
  };
};

var initialRect = {
  startX: 0,
  startY: 0,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  draw: false
};
var UserSelection = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(function (_ref) {
  var selectionKeyPressed = _ref.selectionKeyPressed;
  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  var prevSelectedNodesCount = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
  var prevSelectedEdgesCount = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
  var containerBounds = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialRect),
      _useState2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_useState, 2),
      userSelectionRect = _useState2[0],
      setUserSelectionRect = _useState2[1];

  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(selector$5, zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"]),
      userSelectionActive = _useStore.userSelectionActive,
      elementsSelectable = _useStore.elementsSelectable;

  var renderUserSelectionPane = userSelectionActive || selectionKeyPressed;

  if (!elementsSelectable || !renderUserSelectionPane) {
    return null;
  }

  var resetUserSelection = function resetUserSelection() {
    setUserSelectionRect(initialRect);
    store.setState({
      userSelectionActive: false
    });
    prevSelectedNodesCount.current = 0;
    prevSelectedEdgesCount.current = 0;
  };

  var onMouseDown = function onMouseDown(event) {
    var reactFlowNode = event.target.closest('.react-flow');
    containerBounds.current = reactFlowNode.getBoundingClientRect();
    var mousePos = getMousePosition(event, containerBounds.current);
    setUserSelectionRect({
      width: 0,
      height: 0,
      startX: mousePos.x,
      startY: mousePos.y,
      x: mousePos.x,
      y: mousePos.y,
      draw: true
    });
    store.setState({
      userSelectionActive: true,
      nodesSelectionActive: false
    });
  };

  var onMouseMove = function onMouseMove(event) {
    var _userSelectionRect$st, _userSelectionRect$st2;

    if (!selectionKeyPressed || !userSelectionRect.draw || !containerBounds.current) {
      return;
    }

    var mousePos = getMousePosition(event, containerBounds.current);
    var startX = (_userSelectionRect$st = userSelectionRect.startX) !== null && _userSelectionRect$st !== void 0 ? _userSelectionRect$st : 0;
    var startY = (_userSelectionRect$st2 = userSelectionRect.startY) !== null && _userSelectionRect$st2 !== void 0 ? _userSelectionRect$st2 : 0;

    var nextUserSelectRect = _objectSpread$7(_objectSpread$7({}, userSelectionRect), {}, {
      x: mousePos.x < startX ? mousePos.x : startX,
      y: mousePos.y < startY ? mousePos.y : startY,
      width: Math.abs(mousePos.x - startX),
      height: Math.abs(mousePos.y - startY)
    });

    var _store$getState = store.getState(),
        nodeInternals = _store$getState.nodeInternals,
        edges = _store$getState.edges,
        transform = _store$getState.transform,
        onNodesChange = _store$getState.onNodesChange,
        onEdgesChange = _store$getState.onEdgesChange;

    var nodes = Array.from(nodeInternals.values());
    var selectedNodes = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.k)(nodeInternals, nextUserSelectRect, transform, false, true);
    var selectedEdgeIds = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.e)(selectedNodes, edges).map(function (e) {
      return e.id;
    });
    var selectedNodeIds = selectedNodes.map(function (n) {
      return n.id;
    });

    if (prevSelectedNodesCount.current !== selectedNodeIds.length) {
      prevSelectedNodesCount.current = selectedNodeIds.length;
      var changes = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.l)(nodes, selectedNodeIds);

      if (changes.length) {
        onNodesChange === null || onNodesChange === void 0 ? void 0 : onNodesChange(changes);
      }
    }

    if (prevSelectedEdgesCount.current !== selectedEdgeIds.length) {
      prevSelectedEdgesCount.current = selectedEdgeIds.length;

      var _changes = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.l)(edges, selectedEdgeIds);

      if (_changes.length) {
        onEdgesChange === null || onEdgesChange === void 0 ? void 0 : onEdgesChange(_changes);
      }
    }

    setUserSelectionRect(nextUserSelectRect);
  };

  var onMouseUp = function onMouseUp() {
    store.setState({
      nodesSelectionActive: prevSelectedNodesCount.current > 0
    });
    resetUserSelection();
  };

  var onMouseLeave = function onMouseLeave() {
    store.setState({
      nodesSelectionActive: false
    });
    resetUserSelection();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "react-flow__selectionpane react-flow__container",
    onMouseDown: onMouseDown,
    onMouseMove: onMouseMove,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseLeave
  }, userSelectionRect.draw && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "react-flow__selection react-flow__container",
    style: {
      width: userSelectionRect.width,
      height: userSelectionRect.height,
      transform: "translate(".concat(userSelectionRect.x, "px, ").concat(userSelectionRect.y, "px)")
    }
  }));
});

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function isParentSelected(node, nodeInternals) {
  if (!node.parentNode) {
    return false;
  }

  var parentNode = nodeInternals.get(node.parentNode);

  if (!parentNode) {
    return false;
  }

  if (parentNode.selected) {
    return true;
  }

  return isParentSelected(parentNode, nodeInternals);
}
function hasSelector(target, selector, nodeRef) {
  var current = target;

  do {
    var _current;

    if ((_current = current) !== null && _current !== void 0 && _current.matches(selector)) return true;
    if (current === nodeRef.current) return false;
    current = current.parentElement;
  } while (current);

  return false;
} // looks for all selected nodes and created a NodeDragItem for each of them

function getDragItems(nodeInternals, mousePos, nodeId) {
  return Array.from(nodeInternals.values()).filter(function (n) {
    return (n.selected || n.id === nodeId) && (!n.parentNode || !isParentSelected(n, nodeInternals));
  }).map(function (n) {
    var _n$positionAbsolute$x, _n$positionAbsolute, _n$positionAbsolute$y, _n$positionAbsolute2;

    return {
      id: n.id,
      position: n.position || {
        x: 0,
        y: 0
      },
      positionAbsolute: n.positionAbsolute || {
        x: 0,
        y: 0
      },
      distance: {
        x: mousePos.x - ((_n$positionAbsolute$x = (_n$positionAbsolute = n.positionAbsolute) === null || _n$positionAbsolute === void 0 ? void 0 : _n$positionAbsolute.x) !== null && _n$positionAbsolute$x !== void 0 ? _n$positionAbsolute$x : 0),
        y: mousePos.y - ((_n$positionAbsolute$y = (_n$positionAbsolute2 = n.positionAbsolute) === null || _n$positionAbsolute2 === void 0 ? void 0 : _n$positionAbsolute2.y) !== null && _n$positionAbsolute$y !== void 0 ? _n$positionAbsolute$y : 0)
      },
      delta: {
        x: 0,
        y: 0
      },
      extent: n.extent,
      parentNode: n.parentNode,
      width: n.width,
      height: n.height
    };
  });
}
function updatePosition(dragItem, mousePos, nodeInternals, nodeExtent) {
  var currentExtent = dragItem.extent || nodeExtent;
  var nextPosition = {
    x: mousePos.x - dragItem.distance.x,
    y: mousePos.y - dragItem.distance.y
  };

  if (dragItem.extent === 'parent') {
    if (dragItem.parentNode && dragItem.width && dragItem.height) {
      var parent = nodeInternals.get(dragItem.parentNode);
      currentExtent = parent !== null && parent !== void 0 && parent.positionAbsolute && parent !== null && parent !== void 0 && parent.width && parent !== null && parent !== void 0 && parent.height ? [[parent.positionAbsolute.x, parent.positionAbsolute.y], [parent.positionAbsolute.x + parent.width - dragItem.width, parent.positionAbsolute.y + parent.height - dragItem.height]] : currentExtent;
    } else {
      // @ts-ignore
      if (true) {
        console.warn('[React Flow]: Only child nodes can use a parent extent. Help: https://reactflow.dev/error#500');
      }

      currentExtent = nodeExtent;
    }
  } else if (dragItem.extent && dragItem.parentNode) {
    var _parent$positionAbsol, _parent$positionAbsol2, _parent$positionAbsol3, _parent$positionAbsol4;

    var _parent = nodeInternals.get(dragItem.parentNode);

    var parentX = (_parent$positionAbsol = _parent === null || _parent === void 0 ? void 0 : (_parent$positionAbsol2 = _parent.positionAbsolute) === null || _parent$positionAbsol2 === void 0 ? void 0 : _parent$positionAbsol2.x) !== null && _parent$positionAbsol !== void 0 ? _parent$positionAbsol : 0;
    var parentY = (_parent$positionAbsol3 = _parent === null || _parent === void 0 ? void 0 : (_parent$positionAbsol4 = _parent.positionAbsolute) === null || _parent$positionAbsol4 === void 0 ? void 0 : _parent$positionAbsol4.y) !== null && _parent$positionAbsol3 !== void 0 ? _parent$positionAbsol3 : 0;
    currentExtent = [[dragItem.extent[0][0] + parentX, dragItem.extent[0][1] + parentY], [dragItem.extent[1][0] + parentX, dragItem.extent[1][1] + parentY]];
  }

  var parentPosition = {
    x: 0,
    y: 0
  };

  if (dragItem.parentNode) {
    var _parentNode$positionA, _parentNode$positionA2, _parentNode$positionA3, _parentNode$positionA4;

    var parentNode = nodeInternals.get(dragItem.parentNode);
    parentPosition = {
      x: (_parentNode$positionA = parentNode === null || parentNode === void 0 ? void 0 : (_parentNode$positionA2 = parentNode.positionAbsolute) === null || _parentNode$positionA2 === void 0 ? void 0 : _parentNode$positionA2.x) !== null && _parentNode$positionA !== void 0 ? _parentNode$positionA : 0,
      y: (_parentNode$positionA3 = parentNode === null || parentNode === void 0 ? void 0 : (_parentNode$positionA4 = parentNode.positionAbsolute) === null || _parentNode$positionA4 === void 0 ? void 0 : _parentNode$positionA4.y) !== null && _parentNode$positionA3 !== void 0 ? _parentNode$positionA3 : 0
    };
  }

  dragItem.positionAbsolute = currentExtent ? (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.m)(nextPosition, currentExtent) : nextPosition;
  dragItem.position = {
    x: dragItem.positionAbsolute.x - parentPosition.x,
    y: dragItem.positionAbsolute.y - parentPosition.y
  };
  return dragItem;
} // returns two params:
// 1. the dragged node (or the first of the list, if we are dragging a node selection)
// 2. array of selected nodes (for multi selections)

function getEventHandlerParams(_ref) {
  var nodeId = _ref.nodeId,
      dragItems = _ref.dragItems,
      nodeInternals = _ref.nodeInternals;
  var extentedDragItems = dragItems.map(function (n) {
    var node = nodeInternals.get(n.id);
    return _objectSpread$6(_objectSpread$6({}, node), {}, {
      position: n.position,
      positionAbsolute: n.positionAbsolute
    });
  });
  return [nodeId ? extentedDragItems.find(function (n) {
    return n.id === nodeId;
  }) : extentedDragItems[0], extentedDragItems];
}

function wrapSelectionDragFunc(selectionFunc) {
  return function (event, _, nodes) {
    return selectionFunc === null || selectionFunc === void 0 ? void 0 : selectionFunc(event, nodes);
  };
}

function useDrag(_ref) {
  var nodeRef = _ref.nodeRef,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      noDragClassName = _ref.noDragClassName,
      handleSelector = _ref.handleSelector,
      nodeId = _ref.nodeId,
      isSelectable = _ref.isSelectable,
      selectNodesOnDrag = _ref.selectNodesOnDrag;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_useState, 2),
      dragging = _useState2[0],
      setDragging = _useState2[1];

  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  var dragItems = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var lastPos = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
    x: null,
    y: null
  }); // returns the pointer position projected to the RF coordinate system

  var getPointerPosition = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (_ref2) {
    var sourceEvent = _ref2.sourceEvent;

    var _store$getState = store.getState(),
        transform = _store$getState.transform,
        snapGrid = _store$getState.snapGrid,
        snapToGrid = _store$getState.snapToGrid;

    var x = sourceEvent.touches ? sourceEvent.touches[0].clientX : sourceEvent.clientX;
    var y = sourceEvent.touches ? sourceEvent.touches[0].clientY : sourceEvent.clientY;
    var pointerPos = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.p)({
      x: x,
      y: y
    }, transform, snapToGrid, snapGrid);
    return pointerPos;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (nodeRef !== null && nodeRef !== void 0 && nodeRef.current) {
      var selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_13__["default"])(nodeRef.current);

      if (disabled) {
        selection.on('.drag', null);
      } else {
        var dragHandler = (0,d3_drag__WEBPACK_IMPORTED_MODULE_15__["default"])().on('start', function (event) {
          var _store$getState2 = store.getState(),
              nodeInternals = _store$getState2.nodeInternals,
              multiSelectionActive = _store$getState2.multiSelectionActive,
              unselectNodesAndEdges = _store$getState2.unselectNodesAndEdges,
              onNodeDragStart = _store$getState2.onNodeDragStart,
              onSelectionDragStart = _store$getState2.onSelectionDragStart;

          var onStart = nodeId ? onNodeDragStart : wrapSelectionDragFunc(onSelectionDragStart);

          if (!selectNodesOnDrag && !multiSelectionActive && nodeId) {
            var _nodeInternals$get;

            if (!((_nodeInternals$get = nodeInternals.get(nodeId)) !== null && _nodeInternals$get !== void 0 && _nodeInternals$get.selected)) {
              // we need to reset selected nodes when selectNodesOnDrag=false
              unselectNodesAndEdges();
            }
          }

          if (nodeId && isSelectable && selectNodesOnDrag) {
            (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.n)({
              id: nodeId,
              store: store
            });
          }

          var pointerPos = getPointerPosition(event);
          lastPos.current = pointerPos;
          dragItems.current = getDragItems(nodeInternals, pointerPos, nodeId);

          if (onStart && dragItems.current) {
            var _getEventHandlerParam = getEventHandlerParams({
              nodeId: nodeId,
              dragItems: dragItems.current,
              nodeInternals: nodeInternals
            }),
                _getEventHandlerParam2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getEventHandlerParam, 2),
                currentNode = _getEventHandlerParam2[0],
                nodes = _getEventHandlerParam2[1];

            onStart(event.sourceEvent, currentNode, nodes);
          }
        }).on('drag', function (event) {
          var _store$getState3 = store.getState(),
              updateNodePositions = _store$getState3.updateNodePositions,
              nodeInternals = _store$getState3.nodeInternals,
              nodeExtent = _store$getState3.nodeExtent,
              onNodeDrag = _store$getState3.onNodeDrag,
              onSelectionDrag = _store$getState3.onSelectionDrag;

          var pointerPos = getPointerPosition(event); // skip events without movement

          if ((lastPos.current.x !== pointerPos.x || lastPos.current.y !== pointerPos.y) && dragItems.current) {
            lastPos.current = pointerPos;
            dragItems.current = dragItems.current.map(function (n) {
              return updatePosition(n, pointerPos, nodeInternals, nodeExtent);
            });
            var onDrag = nodeId ? onNodeDrag : wrapSelectionDragFunc(onSelectionDrag);
            updateNodePositions(dragItems.current, true, true);
            setDragging(true);

            if (onDrag) {
              var _getEventHandlerParam3 = getEventHandlerParams({
                nodeId: nodeId,
                dragItems: dragItems.current,
                nodeInternals: nodeInternals
              }),
                  _getEventHandlerParam4 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getEventHandlerParam3, 2),
                  currentNode = _getEventHandlerParam4[0],
                  nodes = _getEventHandlerParam4[1];

              onDrag(event.sourceEvent, currentNode, nodes);
            }
          }

          event.on('end', function (event) {
            setDragging(false);

            if (dragItems.current) {
              var _store$getState4 = store.getState(),
                  _updateNodePositions = _store$getState4.updateNodePositions,
                  _nodeInternals = _store$getState4.nodeInternals,
                  onNodeDragStop = _store$getState4.onNodeDragStop,
                  onSelectionDragStop = _store$getState4.onSelectionDragStop;

              var onStop = nodeId ? onNodeDragStop : wrapSelectionDragFunc(onSelectionDragStop);

              _updateNodePositions(dragItems.current, false, false);

              if (onStop) {
                var _getEventHandlerParam5 = getEventHandlerParams({
                  nodeId: nodeId,
                  dragItems: dragItems.current,
                  nodeInternals: _nodeInternals
                }),
                    _getEventHandlerParam6 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getEventHandlerParam5, 2),
                    _currentNode = _getEventHandlerParam6[0],
                    _nodes = _getEventHandlerParam6[1];

                onStop(event.sourceEvent, _currentNode, _nodes);
              }
            }
          });
        }).filter(function (event) {
          var target = event.target;
          var isDraggable = !event.button && (!noDragClassName || !hasSelector(target, ".".concat(noDragClassName), nodeRef)) && (!handleSelector || hasSelector(target, handleSelector, nodeRef));
          return isDraggable;
        });
        selection.call(dragHandler);
        return function () {
          selection.on('.drag', null);
        };
      }
    }
  }, [nodeRef, disabled, noDragClassName, handleSelector, isSelectable, store, nodeId, selectNodesOnDrag, getPointerPosition]);
  return dragging;
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var selector$4 = function selector(s) {
  return _objectSpread$5({
    transformString: "translate(".concat(s.transform[0], "px,").concat(s.transform[1], "px) scale(").concat(s.transform[2], ")"),
    userSelectionActive: s.userSelectionActive
  }, (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.o)(Array.from(s.nodeInternals.values()).filter(function (n) {
    return n.selected;
  })));
};

var bboxSelector = function bboxSelector(s) {
  var selectedNodes = Array.from(s.nodeInternals.values()).filter(function (n) {
    return n.selected;
  });
  return (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.o)(selectedNodes);
};

function NodesSelection(_ref) {
  var onSelectionContextMenu = _ref.onSelectionContextMenu,
      noPanClassName = _ref.noPanClassName;
  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();

  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(selector$4, zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"]),
      transformString = _useStore.transformString,
      userSelectionActive = _useStore.userSelectionActive;

  var _useStore2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(bboxSelector, zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"]),
      width = _useStore2.width,
      height = _useStore2.height,
      left = _useStore2.x,
      top = _useStore2.y;

  var nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  useDrag({
    nodeRef: nodeRef
  });

  if (userSelectionActive || !width || !height) {
    return null;
  }

  var onContextMenu = onSelectionContextMenu ? function (event) {
    var selectedNodes = Array.from(store.getState().nodeInternals.values()).filter(function (n) {
      return n.selected;
    });
    onSelectionContextMenu(event, selectedNodes);
  } : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: (0,classcat__WEBPACK_IMPORTED_MODULE_3__["default"])(['react-flow__nodesselection', 'react-flow__container', noPanClassName]),
    style: {
      transform: transformString
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    ref: nodeRef,
    className: "react-flow__nodesselection-rect",
    onContextMenu: onContextMenu,
    style: {
      width: width,
      height: height,
      top: top,
      left: left
    }
  }));
}

var NodesSelection$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(NodesSelection);

var selector$3 = function selector(s) {
  return s.nodesSelectionActive;
};

var FlowRenderer = function FlowRenderer(_ref) {
  var children = _ref.children,
      onPaneClick = _ref.onPaneClick,
      onPaneContextMenu = _ref.onPaneContextMenu,
      onPaneScroll = _ref.onPaneScroll,
      deleteKeyCode = _ref.deleteKeyCode,
      onMove = _ref.onMove,
      onMoveStart = _ref.onMoveStart,
      onMoveEnd = _ref.onMoveEnd,
      selectionKeyCode = _ref.selectionKeyCode,
      multiSelectionKeyCode = _ref.multiSelectionKeyCode,
      zoomActivationKeyCode = _ref.zoomActivationKeyCode,
      elementsSelectable = _ref.elementsSelectable,
      zoomOnScroll = _ref.zoomOnScroll,
      zoomOnPinch = _ref.zoomOnPinch,
      panOnScroll = _ref.panOnScroll,
      panOnScrollSpeed = _ref.panOnScrollSpeed,
      panOnScrollMode = _ref.panOnScrollMode,
      zoomOnDoubleClick = _ref.zoomOnDoubleClick,
      panOnDrag = _ref.panOnDrag,
      translateExtent = _ref.translateExtent,
      minZoom = _ref.minZoom,
      maxZoom = _ref.maxZoom,
      defaultZoom = _ref.defaultZoom,
      defaultPosition = _ref.defaultPosition,
      preventScrolling = _ref.preventScrolling,
      onSelectionContextMenu = _ref.onSelectionContextMenu,
      noWheelClassName = _ref.noWheelClassName,
      noPanClassName = _ref.noPanClassName;
  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  var nodesSelectionActive = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(selector$3);
  var selectionKeyPressed = useKeyPress(selectionKeyCode);
  useGlobalKeyHandler({
    deleteKeyCode: deleteKeyCode,
    multiSelectionKeyCode: multiSelectionKeyCode
  });

  var onClick = function onClick(event) {
    onPaneClick === null || onPaneClick === void 0 ? void 0 : onPaneClick(event);
    store.getState().resetSelectedElements();
    store.setState({
      nodesSelectionActive: false
    });
  };

  var onContextMenu = onPaneContextMenu ? function (event) {
    return onPaneContextMenu(event);
  } : undefined;
  var onWheel = onPaneScroll ? function (event) {
    return onPaneScroll(event);
  } : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ZoomPane, {
    onMove: onMove,
    onMoveStart: onMoveStart,
    onMoveEnd: onMoveEnd,
    selectionKeyPressed: selectionKeyPressed,
    elementsSelectable: elementsSelectable,
    zoomOnScroll: zoomOnScroll,
    zoomOnPinch: zoomOnPinch,
    panOnScroll: panOnScroll,
    panOnScrollSpeed: panOnScrollSpeed,
    panOnScrollMode: panOnScrollMode,
    zoomOnDoubleClick: zoomOnDoubleClick,
    panOnDrag: panOnDrag,
    translateExtent: translateExtent,
    minZoom: minZoom,
    maxZoom: maxZoom,
    defaultZoom: defaultZoom,
    defaultPosition: defaultPosition,
    zoomActivationKeyCode: zoomActivationKeyCode,
    preventScrolling: preventScrolling,
    noWheelClassName: noWheelClassName,
    noPanClassName: noPanClassName
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(UserSelection, {
    selectionKeyPressed: selectionKeyPressed
  }), nodesSelectionActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NodesSelection$1, {
    onSelectionContextMenu: onSelectionContextMenu,
    noPanClassName: noPanClassName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "react-flow__pane react-flow__container",
    onClick: onClick,
    onContextMenu: onContextMenu,
    onWheel: onWheel
  }));
};

FlowRenderer.displayName = 'FlowRenderer';
var FlowRenderer$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(FlowRenderer);

function useVisibleNodes(onlyRenderVisible) {
  var nodes = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)((0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (s) {
    return onlyRenderVisible ? (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.k)(s.nodeInternals, {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }, s.transform, true) : Array.from(s.nodeInternals.values());
  }, [onlyRenderVisible]));
  return nodes;
}

var selector$2 = function selector(s) {
  return {
    nodesDraggable: s.nodesDraggable,
    nodesConnectable: s.nodesConnectable,
    elementsSelectable: s.elementsSelectable,
    updateNodeDimensions: s.updateNodeDimensions
  };
};

var NodeRenderer = function NodeRenderer(props) {
  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(selector$2, zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"]),
      nodesDraggable = _useStore.nodesDraggable,
      nodesConnectable = _useStore.nodesConnectable,
      elementsSelectable = _useStore.elementsSelectable,
      updateNodeDimensions = _useStore.updateNodeDimensions;

  var nodes = useVisibleNodes(props.onlyRenderVisibleElements);
  var resizeObserverRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var resizeObserver = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (typeof ResizeObserver === 'undefined') {
      return null;
    }

    var observer = new ResizeObserver(function (entries) {
      var updates = entries.map(function (entry) {
        return {
          id: entry.target.getAttribute('data-id'),
          nodeElement: entry.target,
          forceUpdate: true
        };
      });
      updateNodeDimensions(updates);
    });
    resizeObserverRef.current = observer;
    return observer;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return function () {
      var _resizeObserverRef$cu;

      resizeObserverRef === null || resizeObserverRef === void 0 ? void 0 : (_resizeObserverRef$cu = resizeObserverRef.current) === null || _resizeObserverRef$cu === void 0 ? void 0 : _resizeObserverRef$cu.disconnect();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "react-flow__nodes react-flow__container"
  }, nodes.map(function (node) {
    var _node$positionAbsolut, _node$positionAbsolut2, _node$positionAbsolut3, _node$positionAbsolut4, _node$internalsSymbol, _node$internalsSymbol2, _node$internalsSymbol3;

    var nodeType = node.type || 'default';

    if (!props.nodeTypes[nodeType]) {
      // @ts-ignore
      if (true) {
        console.warn("[React Flow]: Node type \"".concat(nodeType, "\" not found. Using fallback type \"default\". Help: https://reactflow.dev/error#300"));
      }

      nodeType = 'default';
    }

    var NodeComponent = props.nodeTypes[nodeType] || props.nodeTypes["default"];
    var isDraggable = !!(node.draggable || nodesDraggable && typeof node.draggable === 'undefined');
    var isSelectable = !!(node.selectable || elementsSelectable && typeof node.selectable === 'undefined');
    var isConnectable = !!(node.connectable || nodesConnectable && typeof node.connectable === 'undefined');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NodeComponent, {
      key: node.id,
      id: node.id,
      className: node.className,
      style: node.style,
      type: nodeType,
      data: node.data,
      sourcePosition: node.sourcePosition || _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom,
      targetPosition: node.targetPosition || _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top,
      hidden: node.hidden,
      xPos: (_node$positionAbsolut = (_node$positionAbsolut2 = node.positionAbsolute) === null || _node$positionAbsolut2 === void 0 ? void 0 : _node$positionAbsolut2.x) !== null && _node$positionAbsolut !== void 0 ? _node$positionAbsolut : 0,
      yPos: (_node$positionAbsolut3 = (_node$positionAbsolut4 = node.positionAbsolute) === null || _node$positionAbsolut4 === void 0 ? void 0 : _node$positionAbsolut4.y) !== null && _node$positionAbsolut3 !== void 0 ? _node$positionAbsolut3 : 0,
      selectNodesOnDrag: props.selectNodesOnDrag,
      onClick: props.onNodeClick,
      onMouseEnter: props.onNodeMouseEnter,
      onMouseMove: props.onNodeMouseMove,
      onMouseLeave: props.onNodeMouseLeave,
      onContextMenu: props.onNodeContextMenu,
      onDoubleClick: props.onNodeDoubleClick,
      selected: !!node.selected,
      isDraggable: isDraggable,
      isSelectable: isSelectable,
      isConnectable: isConnectable,
      resizeObserver: resizeObserver,
      dragHandle: node.dragHandle,
      zIndex: (_node$internalsSymbol = (_node$internalsSymbol2 = node[_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.i]) === null || _node$internalsSymbol2 === void 0 ? void 0 : _node$internalsSymbol2.z) !== null && _node$internalsSymbol !== void 0 ? _node$internalsSymbol : 0,
      isParent: !!((_node$internalsSymbol3 = node[_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.i]) !== null && _node$internalsSymbol3 !== void 0 && _node$internalsSymbol3.isParent),
      noDragClassName: props.noDragClassName,
      noPanClassName: props.noPanClassName,
      initialized: !!node.width && !!node.height
    });
  }));
};

NodeRenderer.displayName = 'NodeRenderer';
var NodeRenderer$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(NodeRenderer);

var _oppositePosition;

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var oppositePosition = (_oppositePosition = {}, (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(_oppositePosition, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Right), (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(_oppositePosition, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Right, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Left), (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(_oppositePosition, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom), (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(_oppositePosition, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top), _oppositePosition);
var ConnectionLine = (function (_ref) {
  var _fromNode$internalsSy, _fromNode$width, _fromNode$height, _fromNode$positionAbs, _fromNode$positionAbs2;

  var connectionNodeId = _ref.connectionNodeId,
      connectionHandleType = _ref.connectionHandleType,
      connectionLineStyle = _ref.connectionLineStyle,
      _ref$connectionLineTy = _ref.connectionLineType,
      connectionLineType = _ref$connectionLineTy === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.q.Bezier : _ref$connectionLineTy,
      isConnectable = _ref.isConnectable,
      CustomConnectionLineComponent = _ref.CustomConnectionLineComponent;

  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)((0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (s) {
    return {
      fromNode: s.nodeInternals.get(connectionNodeId),
      handleId: s.connectionHandleId,
      toX: (s.connectionPosition.x - s.transform[0]) / s.transform[2],
      toY: (s.connectionPosition.y - s.transform[1]) / s.transform[2]
    };
  }, [connectionNodeId]), zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"]),
      fromNode = _useStore.fromNode,
      handleId = _useStore.handleId,
      toX = _useStore.toX,
      toY = _useStore.toY;

  var fromHandleBounds = fromNode === null || fromNode === void 0 ? void 0 : (_fromNode$internalsSy = fromNode[_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.i]) === null || _fromNode$internalsSy === void 0 ? void 0 : _fromNode$internalsSy.handleBounds;

  if (!fromNode || !isConnectable || !(fromHandleBounds !== null && fromHandleBounds !== void 0 && fromHandleBounds[connectionHandleType])) {
    return null;
  }

  var handleBound = fromHandleBounds[connectionHandleType];
  var fromHandle = handleId ? handleBound.find(function (d) {
    return d.id === handleId;
  }) : handleBound[0];
  var fromHandleX = fromHandle ? fromHandle.x + fromHandle.width / 2 : ((_fromNode$width = fromNode === null || fromNode === void 0 ? void 0 : fromNode.width) !== null && _fromNode$width !== void 0 ? _fromNode$width : 0) / 2;
  var fromHandleY = fromHandle ? fromHandle.y + fromHandle.height / 2 : (_fromNode$height = fromNode === null || fromNode === void 0 ? void 0 : fromNode.height) !== null && _fromNode$height !== void 0 ? _fromNode$height : 0;
  var fromX = ((fromNode === null || fromNode === void 0 ? void 0 : (_fromNode$positionAbs = fromNode.positionAbsolute) === null || _fromNode$positionAbs === void 0 ? void 0 : _fromNode$positionAbs.x) || 0) + fromHandleX;
  var fromY = ((fromNode === null || fromNode === void 0 ? void 0 : (_fromNode$positionAbs2 = fromNode.positionAbsolute) === null || _fromNode$positionAbs2 === void 0 ? void 0 : _fromNode$positionAbs2.y) || 0) + fromHandleY;
  var fromPosition = fromHandle === null || fromHandle === void 0 ? void 0 : fromHandle.position;

  if (!fromPosition) {
    return null;
  }

  var toPosition = oppositePosition[fromPosition];
  var sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition;

  switch (connectionHandleType) {
    case 'source':
      {
        sourceX = fromX;
        sourceY = fromY;
        sourcePosition = fromPosition;
        targetX = toX;
        targetY = toY;
        targetPosition = toPosition;
      }
      break;

    case 'target':
      {
        sourceX = toX;
        sourceY = toY;
        sourcePosition = toPosition;
        targetX = fromX;
        targetY = fromY;
        targetPosition = fromPosition;
      }
      break;
  }

  if (CustomConnectionLineComponent) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("g", {
      className: "react-flow__connection"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CustomConnectionLineComponent, {
      connectionLineType: connectionLineType,
      connectionLineStyle: connectionLineStyle,
      fromNode: fromNode,
      fromHandle: fromHandle,
      fromX: fromX,
      fromY: fromY,
      toX: toX,
      toY: toY,
      fromPosition: fromPosition,
      toPosition: toPosition,
      // remove in v11
      sourcePosition: sourcePosition,
      targetPosition: targetPosition,
      sourceNode: fromNode,
      sourceHandle: fromHandle,
      targetX: targetX,
      targetY: targetY,
      sourceX: sourceX,
      sourceY: sourceY
    }));
  }

  var dAttr = '';
  var pathParams = {
    sourceX: sourceX,
    sourceY: sourceY,
    sourcePosition: sourcePosition,
    targetX: targetX,
    targetY: targetY,
    targetPosition: targetPosition
  };

  if (connectionLineType === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.q.Bezier) {
    // we assume the destination position is opposite to the source position
    dAttr = getBezierPath(pathParams);
  } else if (connectionLineType === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.q.Step) {
    dAttr = getSmoothStepPath(_objectSpread$4(_objectSpread$4({}, pathParams), {}, {
      borderRadius: 0
    }));
  } else if (connectionLineType === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.q.SmoothStep) {
    dAttr = getSmoothStepPath(pathParams);
  } else if (connectionLineType === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.q.SimpleBezier) {
    dAttr = getSimpleBezierPath(pathParams);
  } else {
    dAttr = "M".concat(sourceX, ",").concat(sourceY, " ").concat(targetX, ",").concat(targetY);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("g", {
    className: "react-flow__connection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("path", {
    d: dAttr,
    className: "react-flow__connection-path",
    style: connectionLineStyle
  }));
});

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var _MarkerSymbols;

var ArrowSymbol = function ArrowSymbol(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'none' : _ref$color,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("polyline", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    fill: "none",
    points: "-5,-4 0,0 -5,4"
  });
};

var ArrowClosedSymbol = function ArrowClosedSymbol(_ref2) {
  var _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'none' : _ref2$color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 1 : _ref2$strokeWidth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("polyline", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    fill: color,
    points: "-5,-4 0,0 -5,4 -5,-4"
  });
};

var MarkerSymbols = (_MarkerSymbols = {}, (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(_MarkerSymbols, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.M.Arrow, ArrowSymbol), (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(_MarkerSymbols, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.M.ArrowClosed, ArrowClosedSymbol), _MarkerSymbols);
function useMarkerSymbol(type) {
  var symbol = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    var symbolExists = MarkerSymbols.hasOwnProperty(type);

    if (!symbolExists) {
      // @ts-ignore
      if (true) {
        console.warn("[React Flow]: Marker type \"".concat(type, "\" doesn't exist. Help: https://reactflow.dev/error#900"));
      }

      return function () {
        return null;
      };
    }

    return MarkerSymbols[type];
  }, [type]);
  return symbol;
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Marker = function Marker(_ref) {
  var id = _ref.id,
      type = _ref.type,
      color = _ref.color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 12.5 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 12.5 : _ref$height,
      _ref$markerUnits = _ref.markerUnits,
      markerUnits = _ref$markerUnits === void 0 ? 'strokeWidth' : _ref$markerUnits,
      strokeWidth = _ref.strokeWidth,
      _ref$orient = _ref.orient,
      orient = _ref$orient === void 0 ? 'auto' : _ref$orient;

  var _Symbol = useMarkerSymbol(type);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("marker", {
    className: "react-flow__arrowhead",
    id: id,
    markerWidth: "".concat(width),
    markerHeight: "".concat(height),
    viewBox: "-10 -10 20 20",
    markerUnits: markerUnits,
    orient: orient,
    refX: "0",
    refY: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Symbol, {
    color: color,
    strokeWidth: strokeWidth
  }));
};

var markerSelector = function markerSelector(_ref2) {
  var defaultColor = _ref2.defaultColor,
      rfId = _ref2.rfId;
  return function (s) {
    var ids = [];
    return s.edges.reduce(function (markers, edge) {
      [edge.markerStart, edge.markerEnd].forEach(function (marker) {
        if (marker && _typeof(marker) === 'object') {
          var markerId = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.d)(marker, rfId);

          if (!ids.includes(markerId)) {
            markers.push(_objectSpread$3({
              id: markerId,
              color: marker.color || defaultColor
            }, marker));
            ids.push(markerId);
          }
        }
      });
      return markers;
    }, []).sort(function (a, b) {
      return a.id.localeCompare(b.id);
    });
  };
}; // when you have multiple flows on a page and you hide the first one, the other ones have no markers anymore
// when they do have markers with the same ids. To prevent this the user can pass a unique id to the react flow wrapper
// that we can then use for creating our unique marker ids


var MarkerDefinitions = function MarkerDefinitions(_ref3) {
  var defaultColor = _ref3.defaultColor,
      rfId = _ref3.rfId;
  var markers = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)((0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(markerSelector({
    defaultColor: defaultColor,
    rfId: rfId
  }), [defaultColor, rfId]), // the id includes all marker options, so we just need to look at that part of the marker
  function (a, b) {
    return !(a.length !== b.length || a.some(function (m, i) {
      return m.id !== b[i].id;
    }));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("defs", null, markers.map(function (marker) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Marker, {
      id: marker.id,
      key: marker.id,
      type: marker.type,
      color: marker.color,
      width: marker.width,
      height: marker.height,
      markerUnits: marker.markerUnits,
      strokeWidth: marker.strokeWidth,
      orient: marker.orient
    });
  }));
};

MarkerDefinitions.displayName = 'MarkerDefinitions';
var MarkerDefinitions$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(MarkerDefinitions);

var defaultEdgeTree = [{
  level: 0,
  isMaxLevel: true,
  edges: []
}];

function groupEdgesByZLevel(edges, nodeInternals) {
  var elevateEdgesOnSelect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var maxLevel = -1;
  var levelLookup = edges.reduce(function (tree, edge) {
    var hasZIndex = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.s)(edge.zIndex);
    var z = hasZIndex ? edge.zIndex : 0;

    if (elevateEdgesOnSelect) {
      var _nodeInternals$get, _nodeInternals$get$in, _nodeInternals$get2, _nodeInternals$get2$i;

      z = hasZIndex ? edge.zIndex : Math.max(((_nodeInternals$get = nodeInternals.get(edge.source)) === null || _nodeInternals$get === void 0 ? void 0 : (_nodeInternals$get$in = _nodeInternals$get[_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.i]) === null || _nodeInternals$get$in === void 0 ? void 0 : _nodeInternals$get$in.z) || 0, ((_nodeInternals$get2 = nodeInternals.get(edge.target)) === null || _nodeInternals$get2 === void 0 ? void 0 : (_nodeInternals$get2$i = _nodeInternals$get2[_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.i]) === null || _nodeInternals$get2$i === void 0 ? void 0 : _nodeInternals$get2$i.z) || 0);
    }

    if (tree[z]) {
      tree[z].push(edge);
    } else {
      tree[z] = [edge];
    }

    maxLevel = z > maxLevel ? z : maxLevel;
    return tree;
  }, {});
  var edgeTree = Object.entries(levelLookup).map(function (_ref) {
    var _ref2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_ref, 2),
        key = _ref2[0],
        edges = _ref2[1];

    var level = +key;
    return {
      edges: edges,
      level: level,
      isMaxLevel: level === maxLevel
    };
  });

  if (edgeTree.length === 0) {
    return defaultEdgeTree;
  }

  return edgeTree;
}

function useVisibleEdges(onlyRenderVisible, nodeInternals, elevateEdgesOnSelect) {
  var edges = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)((0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (s) {
    if (!onlyRenderVisible) {
      return s.edges;
    }

    return s.edges.filter(function (e) {
      var sourceNode = nodeInternals.get(e.source);
      var targetNode = nodeInternals.get(e.target);
      return (sourceNode === null || sourceNode === void 0 ? void 0 : sourceNode.width) && (sourceNode === null || sourceNode === void 0 ? void 0 : sourceNode.height) && (targetNode === null || targetNode === void 0 ? void 0 : targetNode.width) && (targetNode === null || targetNode === void 0 ? void 0 : targetNode.height) && isEdgeVisible({
        sourcePos: sourceNode.positionAbsolute || {
          x: 0,
          y: 0
        },
        targetPos: targetNode.positionAbsolute || {
          x: 0,
          y: 0
        },
        sourceWidth: sourceNode.width,
        sourceHeight: sourceNode.height,
        targetWidth: targetNode.width,
        targetHeight: targetNode.height,
        width: s.width,
        height: s.height,
        transform: s.transform
      });
    });
  }, [onlyRenderVisible, nodeInternals]));
  return groupEdgesByZLevel(edges, nodeInternals, elevateEdgesOnSelect);
}

var selector$1 = function selector(s) {
  return {
    connectionNodeId: s.connectionNodeId,
    connectionHandleType: s.connectionHandleType,
    nodesConnectable: s.nodesConnectable,
    elementsSelectable: s.elementsSelectable,
    width: s.width,
    height: s.height,
    connectionMode: s.connectionMode,
    nodeInternals: s.nodeInternals
  };
};

var EdgeRenderer = function EdgeRenderer(props) {
  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(selector$1, zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"]),
      connectionNodeId = _useStore.connectionNodeId,
      connectionHandleType = _useStore.connectionHandleType,
      nodesConnectable = _useStore.nodesConnectable,
      elementsSelectable = _useStore.elementsSelectable,
      width = _useStore.width,
      height = _useStore.height,
      connectionMode = _useStore.connectionMode,
      nodeInternals = _useStore.nodeInternals;

  var edgeTree = useVisibleEdges(props.onlyRenderVisibleElements, nodeInternals, props.elevateEdgesOnSelect);

  if (!width) {
    return null;
  }

  var connectionLineType = props.connectionLineType,
      defaultMarkerColor = props.defaultMarkerColor,
      connectionLineStyle = props.connectionLineStyle,
      connectionLineComponent = props.connectionLineComponent,
      connectionLineContainerStyle = props.connectionLineContainerStyle;
  var renderConnectionLine = connectionNodeId && connectionHandleType;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, edgeTree.map(function (_ref) {
    var level = _ref.level,
        edges = _ref.edges,
        isMaxLevel = _ref.isMaxLevel;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", {
      key: level,
      style: {
        zIndex: level
      },
      width: width,
      height: height,
      className: "react-flow__edges react-flow__container"
    }, isMaxLevel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(MarkerDefinitions$1, {
      defaultColor: defaultMarkerColor,
      rfId: props.rfId
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("g", null, edges.map(function (edge) {
      var _getNodeData = getNodeData(nodeInternals, edge.source),
          _getNodeData2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getNodeData, 3),
          sourceNodeRect = _getNodeData2[0],
          sourceHandleBounds = _getNodeData2[1],
          sourceIsValid = _getNodeData2[2];

      var _getNodeData3 = getNodeData(nodeInternals, edge.target),
          _getNodeData4 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_getNodeData3, 3),
          targetNodeRect = _getNodeData4[0],
          targetHandleBounds = _getNodeData4[1],
          targetIsValid = _getNodeData4[2];

      if (!sourceIsValid || !targetIsValid) {
        return null;
      }

      var edgeType = edge.type || 'default';
      var EdgeComponent = props.edgeTypes[edgeType] || props.edgeTypes["default"]; // when connection type is loose we can define all handles as sources

      var targetNodeHandles = connectionMode === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.C.Strict ? targetHandleBounds.target : targetHandleBounds.target || targetHandleBounds.source;
      var sourceHandle = getHandle(sourceHandleBounds.source, edge.sourceHandle || null);
      var targetHandle = getHandle(targetNodeHandles, edge.targetHandle || null);
      var sourcePosition = (sourceHandle === null || sourceHandle === void 0 ? void 0 : sourceHandle.position) || _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Bottom;
      var targetPosition = (targetHandle === null || targetHandle === void 0 ? void 0 : targetHandle.position) || _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.P.Top;

      if (!sourceHandle) {
        // @ts-ignore
        if (true) {
          console.warn("[React Flow]: Couldn't create edge for source handle id: ".concat(edge.sourceHandle, "; edge id: ").concat(edge.id, ". Help: https://reactflow.dev/error#800"));
        }

        return null;
      }

      if (!targetHandle) {
        // @ts-ignore
        if (true) {
          console.warn("[React Flow]: Couldn't create edge for target handle id: ".concat(edge.targetHandle, "; edge id: ").concat(edge.id, ". Help: https://reactflow.dev/error#800"));
        }

        return null;
      }

      var _getEdgePositions = getEdgePositions(sourceNodeRect, sourceHandle, sourcePosition, targetNodeRect, targetHandle, targetPosition),
          sourceX = _getEdgePositions.sourceX,
          sourceY = _getEdgePositions.sourceY,
          targetX = _getEdgePositions.targetX,
          targetY = _getEdgePositions.targetY;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EdgeComponent, {
        key: edge.id,
        id: edge.id,
        className: (0,classcat__WEBPACK_IMPORTED_MODULE_3__["default"])([edge.className, props.noPanClassName]),
        type: edgeType,
        data: edge.data,
        selected: !!edge.selected,
        animated: !!edge.animated,
        hidden: !!edge.hidden,
        label: edge.label,
        labelStyle: edge.labelStyle,
        labelShowBg: edge.labelShowBg,
        labelBgStyle: edge.labelBgStyle,
        labelBgPadding: edge.labelBgPadding,
        labelBgBorderRadius: edge.labelBgBorderRadius,
        style: edge.style,
        source: edge.source,
        target: edge.target,
        sourceHandleId: edge.sourceHandle,
        targetHandleId: edge.targetHandle,
        markerEnd: edge.markerEnd,
        markerStart: edge.markerStart,
        sourceX: sourceX,
        sourceY: sourceY,
        targetX: targetX,
        targetY: targetY,
        sourcePosition: sourcePosition,
        targetPosition: targetPosition,
        elementsSelectable: elementsSelectable,
        onEdgeUpdate: props.onEdgeUpdate,
        onContextMenu: props.onEdgeContextMenu,
        onMouseEnter: props.onEdgeMouseEnter,
        onMouseMove: props.onEdgeMouseMove,
        onMouseLeave: props.onEdgeMouseLeave,
        onClick: props.onEdgeClick,
        edgeUpdaterRadius: props.edgeUpdaterRadius,
        onEdgeDoubleClick: props.onEdgeDoubleClick,
        onEdgeUpdateStart: props.onEdgeUpdateStart,
        onEdgeUpdateEnd: props.onEdgeUpdateEnd,
        rfId: props.rfId
      });
    })));
  }), renderConnectionLine && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("svg", {
    style: connectionLineContainerStyle,
    width: width,
    height: height,
    className: "react-flow__edges react-flow__connectionline react-flow__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ConnectionLine, {
    connectionNodeId: connectionNodeId,
    connectionHandleType: connectionHandleType,
    connectionLineStyle: connectionLineStyle,
    connectionLineType: connectionLineType,
    isConnectable: nodesConnectable,
    CustomConnectionLineComponent: connectionLineComponent
  })));
};

EdgeRenderer.displayName = 'EdgeRenderer';
var EdgeRenderer$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(EdgeRenderer);

var selector = function selector(s) {
  return "translate(".concat(s.transform[0], "px,").concat(s.transform[1], "px) scale(").concat(s.transform[2], ")");
};

function Viewport(_ref) {
  var children = _ref.children;
  var transform = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.b)(selector);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "react-flow__viewport react-flow__container",
    style: {
      transform: transform
    }
  }, children);
}

function useOnInitHandler(onInit) {
  var ReactFlowInstance = (0,_useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  var isInitialized = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!isInitialized.current && ReactFlowInstance.viewportInitialized && onInit) {
      setTimeout(function () {
        return onInit(ReactFlowInstance);
      }, 1);
      isInitialized.current = true;
    }
  }, [onInit, ReactFlowInstance.viewportInitialized]);
}

var GraphView = function GraphView(_ref) {
  var nodeTypes = _ref.nodeTypes,
      edgeTypes = _ref.edgeTypes,
      onMove = _ref.onMove,
      onMoveStart = _ref.onMoveStart,
      onMoveEnd = _ref.onMoveEnd,
      onInit = _ref.onInit,
      onNodeClick = _ref.onNodeClick,
      onEdgeClick = _ref.onEdgeClick,
      onNodeDoubleClick = _ref.onNodeDoubleClick,
      onEdgeDoubleClick = _ref.onEdgeDoubleClick,
      onNodeMouseEnter = _ref.onNodeMouseEnter,
      onNodeMouseMove = _ref.onNodeMouseMove,
      onNodeMouseLeave = _ref.onNodeMouseLeave,
      onNodeContextMenu = _ref.onNodeContextMenu,
      onSelectionContextMenu = _ref.onSelectionContextMenu,
      connectionLineType = _ref.connectionLineType,
      connectionLineStyle = _ref.connectionLineStyle,
      connectionLineComponent = _ref.connectionLineComponent,
      connectionLineContainerStyle = _ref.connectionLineContainerStyle,
      selectionKeyCode = _ref.selectionKeyCode,
      multiSelectionKeyCode = _ref.multiSelectionKeyCode,
      zoomActivationKeyCode = _ref.zoomActivationKeyCode,
      deleteKeyCode = _ref.deleteKeyCode,
      onlyRenderVisibleElements = _ref.onlyRenderVisibleElements,
      elementsSelectable = _ref.elementsSelectable,
      selectNodesOnDrag = _ref.selectNodesOnDrag,
      translateExtent = _ref.translateExtent,
      minZoom = _ref.minZoom,
      maxZoom = _ref.maxZoom,
      defaultZoom = _ref.defaultZoom,
      defaultPosition = _ref.defaultPosition,
      preventScrolling = _ref.preventScrolling,
      defaultMarkerColor = _ref.defaultMarkerColor,
      zoomOnScroll = _ref.zoomOnScroll,
      zoomOnPinch = _ref.zoomOnPinch,
      panOnScroll = _ref.panOnScroll,
      panOnScrollSpeed = _ref.panOnScrollSpeed,
      panOnScrollMode = _ref.panOnScrollMode,
      zoomOnDoubleClick = _ref.zoomOnDoubleClick,
      panOnDrag = _ref.panOnDrag,
      onPaneClick = _ref.onPaneClick,
      onPaneScroll = _ref.onPaneScroll,
      onPaneContextMenu = _ref.onPaneContextMenu,
      onEdgeUpdate = _ref.onEdgeUpdate,
      onEdgeContextMenu = _ref.onEdgeContextMenu,
      onEdgeMouseEnter = _ref.onEdgeMouseEnter,
      onEdgeMouseMove = _ref.onEdgeMouseMove,
      onEdgeMouseLeave = _ref.onEdgeMouseLeave,
      edgeUpdaterRadius = _ref.edgeUpdaterRadius,
      onEdgeUpdateStart = _ref.onEdgeUpdateStart,
      onEdgeUpdateEnd = _ref.onEdgeUpdateEnd,
      noDragClassName = _ref.noDragClassName,
      noWheelClassName = _ref.noWheelClassName,
      noPanClassName = _ref.noPanClassName,
      elevateEdgesOnSelect = _ref.elevateEdgesOnSelect,
      id = _ref.id;
  useOnInitHandler(onInit);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(FlowRenderer$1, {
    onPaneClick: onPaneClick,
    onPaneContextMenu: onPaneContextMenu,
    onPaneScroll: onPaneScroll,
    deleteKeyCode: deleteKeyCode,
    selectionKeyCode: selectionKeyCode,
    multiSelectionKeyCode: multiSelectionKeyCode,
    zoomActivationKeyCode: zoomActivationKeyCode,
    elementsSelectable: elementsSelectable,
    onMove: onMove,
    onMoveStart: onMoveStart,
    onMoveEnd: onMoveEnd,
    zoomOnScroll: zoomOnScroll,
    zoomOnPinch: zoomOnPinch,
    zoomOnDoubleClick: zoomOnDoubleClick,
    panOnScroll: panOnScroll,
    panOnScrollSpeed: panOnScrollSpeed,
    panOnScrollMode: panOnScrollMode,
    panOnDrag: panOnDrag,
    translateExtent: translateExtent,
    minZoom: minZoom,
    maxZoom: maxZoom,
    defaultZoom: defaultZoom,
    defaultPosition: defaultPosition,
    onSelectionContextMenu: onSelectionContextMenu,
    preventScrolling: preventScrolling,
    noDragClassName: noDragClassName,
    noWheelClassName: noWheelClassName,
    noPanClassName: noPanClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Viewport, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(EdgeRenderer$1, {
    edgeTypes: edgeTypes,
    onEdgeClick: onEdgeClick,
    onEdgeDoubleClick: onEdgeDoubleClick,
    connectionLineType: connectionLineType,
    connectionLineStyle: connectionLineStyle,
    connectionLineComponent: connectionLineComponent,
    connectionLineContainerStyle: connectionLineContainerStyle,
    onEdgeUpdate: onEdgeUpdate,
    onlyRenderVisibleElements: onlyRenderVisibleElements,
    onEdgeContextMenu: onEdgeContextMenu,
    onEdgeMouseEnter: onEdgeMouseEnter,
    onEdgeMouseMove: onEdgeMouseMove,
    onEdgeMouseLeave: onEdgeMouseLeave,
    onEdgeUpdateStart: onEdgeUpdateStart,
    onEdgeUpdateEnd: onEdgeUpdateEnd,
    edgeUpdaterRadius: edgeUpdaterRadius,
    defaultMarkerColor: defaultMarkerColor,
    noPanClassName: noPanClassName,
    elevateEdgesOnSelect: !!elevateEdgesOnSelect,
    rfId: id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NodeRenderer$1, {
    nodeTypes: nodeTypes,
    onNodeClick: onNodeClick,
    onNodeDoubleClick: onNodeDoubleClick,
    onNodeMouseEnter: onNodeMouseEnter,
    onNodeMouseMove: onNodeMouseMove,
    onNodeMouseLeave: onNodeMouseLeave,
    onNodeContextMenu: onNodeContextMenu,
    selectNodesOnDrag: selectNodesOnDrag,
    onlyRenderVisibleElements: onlyRenderVisibleElements,
    noPanClassName: noPanClassName,
    noDragClassName: noDragClassName
  })));
};

GraphView.displayName = 'GraphView';
var GraphView$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(GraphView);

var GroupNode = function GroupNode() {
  return null;
};

GroupNode.displayName = 'GroupNode';

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var wrapNode = (function (NodeComponent) {
  var NodeWrapper = function NodeWrapper(_ref) {
    var id = _ref.id,
        type = _ref.type,
        data = _ref.data,
        xPos = _ref.xPos,
        yPos = _ref.yPos,
        selected = _ref.selected,
        onClick = _ref.onClick,
        onMouseEnter = _ref.onMouseEnter,
        onMouseMove = _ref.onMouseMove,
        onMouseLeave = _ref.onMouseLeave,
        onContextMenu = _ref.onContextMenu,
        onDoubleClick = _ref.onDoubleClick,
        style = _ref.style,
        className = _ref.className,
        isDraggable = _ref.isDraggable,
        isSelectable = _ref.isSelectable,
        isConnectable = _ref.isConnectable,
        selectNodesOnDrag = _ref.selectNodesOnDrag,
        sourcePosition = _ref.sourcePosition,
        targetPosition = _ref.targetPosition,
        hidden = _ref.hidden,
        resizeObserver = _ref.resizeObserver,
        dragHandle = _ref.dragHandle,
        zIndex = _ref.zIndex,
        isParent = _ref.isParent,
        noPanClassName = _ref.noPanClassName,
        noDragClassName = _ref.noDragClassName,
        initialized = _ref.initialized;
    var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();
    var nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    var prevSourcePosition = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(sourcePosition);
    var prevTargetPosition = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(targetPosition);
    var prevType = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(type);
    var hasPointerEvents = isSelectable || isDraggable || onClick || onMouseEnter || onMouseMove || onMouseLeave;
    var onMouseEnterHandler = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.t)(id, store.getState, onMouseEnter);
    var onMouseMoveHandler = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.t)(id, store.getState, onMouseMove);
    var onMouseLeaveHandler = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.t)(id, store.getState, onMouseLeave);
    var onContextMenuHandler = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.t)(id, store.getState, onContextMenu);
    var onDoubleClickHandler = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.t)(id, store.getState, onDoubleClick);

    var onSelectNodeHandler = function onSelectNodeHandler(event) {
      if (isSelectable && (!selectNodesOnDrag || !isDraggable)) {
        // this handler gets called within the drag start event when selectNodesOnDrag=true
        (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.n)({
          id: id,
          store: store
        });
      }

      if (onClick) {
        var node = store.getState().nodeInternals.get(id);
        onClick(event, _objectSpread$2({}, node));
      }
    };

    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
      if (nodeRef.current && !hidden) {
        var currNode = nodeRef.current;
        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.observe(currNode);
        return function () {
          return resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.unobserve(currNode);
        };
      }
    }, [hidden]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
      // when the user programmatically changes the source or handle position, we re-initialize the node
      var typeChanged = prevType.current !== type;
      var sourcePosChanged = prevSourcePosition.current !== sourcePosition;
      var targetPosChanged = prevTargetPosition.current !== targetPosition;

      if (nodeRef.current && (typeChanged || sourcePosChanged || targetPosChanged)) {
        if (typeChanged) {
          prevType.current = type;
        }

        if (sourcePosChanged) {
          prevSourcePosition.current = sourcePosition;
        }

        if (targetPosChanged) {
          prevTargetPosition.current = targetPosition;
        }

        store.getState().updateNodeDimensions([{
          id: id,
          nodeElement: nodeRef.current,
          forceUpdate: true
        }]);
      }
    }, [id, type, sourcePosition, targetPosition]);
    var dragging = useDrag({
      nodeRef: nodeRef,
      disabled: hidden || !isDraggable,
      noDragClassName: noDragClassName,
      handleSelector: dragHandle,
      nodeId: id,
      isSelectable: isSelectable,
      selectNodesOnDrag: selectNodesOnDrag
    });

    if (hidden) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: (0,classcat__WEBPACK_IMPORTED_MODULE_3__["default"])(['react-flow__node', "react-flow__node-".concat(type), noPanClassName, className, {
        selected: selected,
        selectable: isSelectable,
        parent: isParent
      }]),
      ref: nodeRef,
      style: _objectSpread$2({
        zIndex: zIndex,
        transform: "translate(".concat(xPos, "px,").concat(yPos, "px)"),
        pointerEvents: hasPointerEvents ? 'all' : 'none',
        visibility: initialized ? 'visible' : 'hidden'
      }, style),
      onMouseEnter: onMouseEnterHandler,
      onMouseMove: onMouseMoveHandler,
      onMouseLeave: onMouseLeaveHandler,
      onContextMenu: onContextMenuHandler,
      onClick: onSelectNodeHandler,
      onDoubleClick: onDoubleClickHandler,
      "data-id": id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Provider, {
      value: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(NodeComponent, {
      id: id,
      data: data,
      type: type,
      xPos: xPos,
      yPos: yPos,
      selected: selected,
      isConnectable: isConnectable,
      sourcePosition: sourcePosition,
      targetPosition: targetPosition,
      dragging: dragging,
      dragHandle: dragHandle,
      zIndex: zIndex
    })));
  };

  NodeWrapper.displayName = 'NodeWrapper';
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(NodeWrapper);
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createNodeTypes(nodeTypes) {
  var standardTypes = {
    input: wrapNode(nodeTypes.input || InputNode$1),
    "default": wrapNode(nodeTypes["default"] || DefaultNode$1),
    output: wrapNode(nodeTypes.output || OutputNode$1),
    group: wrapNode(nodeTypes.group || GroupNode)
  };
  var wrappedTypes = {};
  var specialTypes = Object.keys(nodeTypes).filter(function (k) {
    return !['input', 'default', 'output', 'group'].includes(k);
  }).reduce(function (res, key) {
    res[key] = wrapNode(nodeTypes[key] || DefaultNode$1);
    return res;
  }, wrappedTypes);
  return _objectSpread$1(_objectSpread$1({}, standardTypes), specialTypes);
}

function useNodeOrEdgeTypes(nodeOrEdgeTypes, createTypes) {
  var typesKeysRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var typesParsed = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    // @ts-ignore
    if (true) {
      var typeKeys = Object.keys(nodeOrEdgeTypes);

      if ((0,zustand_shallow__WEBPACK_IMPORTED_MODULE_12__["default"])(typesKeysRef.current, typeKeys)) {
        console.warn("[React Flow]: It looks like you have created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them. Help: https://reactflow.dev/error#200");
      }

      typesKeysRef.current = typeKeys;
    }

    return createTypes(nodeOrEdgeTypes);
  }, [nodeOrEdgeTypes]);
  return typesParsed;
}
function injectStyle(css) {
  if (!css || typeof document === 'undefined') return;
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  head.appendChild(style);
  style.appendChild(document.createTextNode(css));
}

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children;
  var isWrapped = true;

  try {
    (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  } catch (e) {
    isWrapped = false;
  }

  if (isWrapped) {
    // we need to wrap it with a fragment because it's not allowed for children to be a ReactNode
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.v, {
    createStore: _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.w
  }, children);
};

Wrapper.displayName = 'ReactFlowWrapper';

var _excluded = ["nodes", "edges", "defaultNodes", "defaultEdges", "className", "nodeTypes", "edgeTypes", "onNodeClick", "onEdgeClick", "onInit", "onMove", "onMoveStart", "onMoveEnd", "onConnect", "onConnectStart", "onConnectStop", "onConnectEnd", "onClickConnectStart", "onClickConnectStop", "onClickConnectEnd", "onNodeMouseEnter", "onNodeMouseMove", "onNodeMouseLeave", "onNodeContextMenu", "onNodeDoubleClick", "onNodeDragStart", "onNodeDrag", "onNodeDragStop", "onNodesDelete", "onEdgesDelete", "onSelectionChange", "onSelectionDragStart", "onSelectionDrag", "onSelectionDragStop", "onSelectionContextMenu", "connectionMode", "connectionLineType", "connectionLineStyle", "connectionLineComponent", "connectionLineContainerStyle", "deleteKeyCode", "selectionKeyCode", "multiSelectionKeyCode", "zoomActivationKeyCode", "snapToGrid", "snapGrid", "onlyRenderVisibleElements", "selectNodesOnDrag", "nodesDraggable", "nodesConnectable", "elementsSelectable", "minZoom", "maxZoom", "defaultZoom", "defaultPosition", "translateExtent", "preventScrolling", "nodeExtent", "defaultMarkerColor", "zoomOnScroll", "zoomOnPinch", "panOnScroll", "panOnScrollSpeed", "panOnScrollMode", "zoomOnDoubleClick", "panOnDrag", "onPaneClick", "onPaneScroll", "onPaneContextMenu", "children", "onEdgeUpdate", "onEdgeContextMenu", "onEdgeDoubleClick", "onEdgeMouseEnter", "onEdgeMouseMove", "onEdgeMouseLeave", "onEdgeUpdateStart", "onEdgeUpdateEnd", "edgeUpdaterRadius", "onNodesChange", "onEdgesChange", "noDragClassName", "noWheelClassName", "noPanClassName", "fitView", "fitViewOptions", "connectOnClick", "attributionPosition", "proOptions", "defaultEdgeOptions", "elevateEdgesOnSelect"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

{
  injectStyle(css);
  injectStyle(theme);
}

var defaultNodeTypes = {
  input: InputNode$1,
  "default": DefaultNode$1,
  output: OutputNode$1
};
var defaultEdgeTypes = {
  "default": BezierEdge,
  straight: StraightEdge,
  step: StepEdge,
  smoothstep: SmoothStepEdge,
  simplebezier: SimpleBezierEdge
};
var initSnapGrid = [15, 15];
var initDefaultPosition = [0, 0];
var ReactFlow = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function (_ref, ref) {
  var nodes = _ref.nodes,
      edges = _ref.edges,
      defaultNodes = _ref.defaultNodes,
      defaultEdges = _ref.defaultEdges,
      className = _ref.className,
      _ref$nodeTypes = _ref.nodeTypes,
      nodeTypes = _ref$nodeTypes === void 0 ? defaultNodeTypes : _ref$nodeTypes,
      _ref$edgeTypes = _ref.edgeTypes,
      edgeTypes = _ref$edgeTypes === void 0 ? defaultEdgeTypes : _ref$edgeTypes,
      onNodeClick = _ref.onNodeClick,
      onEdgeClick = _ref.onEdgeClick,
      onInit = _ref.onInit,
      onMove = _ref.onMove,
      onMoveStart = _ref.onMoveStart,
      onMoveEnd = _ref.onMoveEnd,
      onConnect = _ref.onConnect,
      onConnectStart = _ref.onConnectStart,
      onConnectStop = _ref.onConnectStop,
      onConnectEnd = _ref.onConnectEnd,
      onClickConnectStart = _ref.onClickConnectStart,
      onClickConnectStop = _ref.onClickConnectStop,
      onClickConnectEnd = _ref.onClickConnectEnd,
      onNodeMouseEnter = _ref.onNodeMouseEnter,
      onNodeMouseMove = _ref.onNodeMouseMove,
      onNodeMouseLeave = _ref.onNodeMouseLeave,
      onNodeContextMenu = _ref.onNodeContextMenu,
      onNodeDoubleClick = _ref.onNodeDoubleClick,
      onNodeDragStart = _ref.onNodeDragStart,
      onNodeDrag = _ref.onNodeDrag,
      onNodeDragStop = _ref.onNodeDragStop,
      onNodesDelete = _ref.onNodesDelete,
      onEdgesDelete = _ref.onEdgesDelete,
      onSelectionChange = _ref.onSelectionChange,
      onSelectionDragStart = _ref.onSelectionDragStart,
      onSelectionDrag = _ref.onSelectionDrag,
      onSelectionDragStop = _ref.onSelectionDragStop,
      onSelectionContextMenu = _ref.onSelectionContextMenu,
      _ref$connectionMode = _ref.connectionMode,
      connectionMode = _ref$connectionMode === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.C.Strict : _ref$connectionMode,
      _ref$connectionLineTy = _ref.connectionLineType,
      connectionLineType = _ref$connectionLineTy === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.q.Bezier : _ref$connectionLineTy,
      connectionLineStyle = _ref.connectionLineStyle,
      connectionLineComponent = _ref.connectionLineComponent,
      connectionLineContainerStyle = _ref.connectionLineContainerStyle,
      _ref$deleteKeyCode = _ref.deleteKeyCode,
      deleteKeyCode = _ref$deleteKeyCode === void 0 ? 'Backspace' : _ref$deleteKeyCode,
      _ref$selectionKeyCode = _ref.selectionKeyCode,
      selectionKeyCode = _ref$selectionKeyCode === void 0 ? 'Shift' : _ref$selectionKeyCode,
      _ref$multiSelectionKe = _ref.multiSelectionKeyCode,
      multiSelectionKeyCode = _ref$multiSelectionKe === void 0 ? 'Meta' : _ref$multiSelectionKe,
      _ref$zoomActivationKe = _ref.zoomActivationKeyCode,
      zoomActivationKeyCode = _ref$zoomActivationKe === void 0 ? 'Meta' : _ref$zoomActivationKe,
      _ref$snapToGrid = _ref.snapToGrid,
      snapToGrid = _ref$snapToGrid === void 0 ? false : _ref$snapToGrid,
      _ref$snapGrid = _ref.snapGrid,
      snapGrid = _ref$snapGrid === void 0 ? initSnapGrid : _ref$snapGrid,
      _ref$onlyRenderVisibl = _ref.onlyRenderVisibleElements,
      onlyRenderVisibleElements = _ref$onlyRenderVisibl === void 0 ? false : _ref$onlyRenderVisibl,
      _ref$selectNodesOnDra = _ref.selectNodesOnDrag,
      selectNodesOnDrag = _ref$selectNodesOnDra === void 0 ? true : _ref$selectNodesOnDra,
      nodesDraggable = _ref.nodesDraggable,
      nodesConnectable = _ref.nodesConnectable,
      elementsSelectable = _ref.elementsSelectable,
      _ref$minZoom = _ref.minZoom,
      minZoom = _ref$minZoom === void 0 ? 0.5 : _ref$minZoom,
      _ref$maxZoom = _ref.maxZoom,
      maxZoom = _ref$maxZoom === void 0 ? 2 : _ref$maxZoom,
      _ref$defaultZoom = _ref.defaultZoom,
      defaultZoom = _ref$defaultZoom === void 0 ? 1 : _ref$defaultZoom,
      _ref$defaultPosition = _ref.defaultPosition,
      defaultPosition = _ref$defaultPosition === void 0 ? initDefaultPosition : _ref$defaultPosition,
      _ref$translateExtent = _ref.translateExtent,
      translateExtent = _ref$translateExtent === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.x : _ref$translateExtent,
      _ref$preventScrolling = _ref.preventScrolling,
      preventScrolling = _ref$preventScrolling === void 0 ? true : _ref$preventScrolling,
      nodeExtent = _ref.nodeExtent,
      _ref$defaultMarkerCol = _ref.defaultMarkerColor,
      defaultMarkerColor = _ref$defaultMarkerCol === void 0 ? '#b1b1b7' : _ref$defaultMarkerCol,
      _ref$zoomOnScroll = _ref.zoomOnScroll,
      zoomOnScroll = _ref$zoomOnScroll === void 0 ? true : _ref$zoomOnScroll,
      _ref$zoomOnPinch = _ref.zoomOnPinch,
      zoomOnPinch = _ref$zoomOnPinch === void 0 ? true : _ref$zoomOnPinch,
      _ref$panOnScroll = _ref.panOnScroll,
      panOnScroll = _ref$panOnScroll === void 0 ? false : _ref$panOnScroll,
      _ref$panOnScrollSpeed = _ref.panOnScrollSpeed,
      panOnScrollSpeed = _ref$panOnScrollSpeed === void 0 ? 0.5 : _ref$panOnScrollSpeed,
      _ref$panOnScrollMode = _ref.panOnScrollMode,
      panOnScrollMode = _ref$panOnScrollMode === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.h.Free : _ref$panOnScrollMode,
      _ref$zoomOnDoubleClic = _ref.zoomOnDoubleClick,
      zoomOnDoubleClick = _ref$zoomOnDoubleClic === void 0 ? true : _ref$zoomOnDoubleClic,
      _ref$panOnDrag = _ref.panOnDrag,
      panOnDrag = _ref$panOnDrag === void 0 ? true : _ref$panOnDrag,
      onPaneClick = _ref.onPaneClick,
      onPaneScroll = _ref.onPaneScroll,
      onPaneContextMenu = _ref.onPaneContextMenu,
      children = _ref.children,
      onEdgeUpdate = _ref.onEdgeUpdate,
      onEdgeContextMenu = _ref.onEdgeContextMenu,
      onEdgeDoubleClick = _ref.onEdgeDoubleClick,
      onEdgeMouseEnter = _ref.onEdgeMouseEnter,
      onEdgeMouseMove = _ref.onEdgeMouseMove,
      onEdgeMouseLeave = _ref.onEdgeMouseLeave,
      onEdgeUpdateStart = _ref.onEdgeUpdateStart,
      onEdgeUpdateEnd = _ref.onEdgeUpdateEnd,
      _ref$edgeUpdaterRadiu = _ref.edgeUpdaterRadius,
      edgeUpdaterRadius = _ref$edgeUpdaterRadiu === void 0 ? 10 : _ref$edgeUpdaterRadiu,
      onNodesChange = _ref.onNodesChange,
      onEdgesChange = _ref.onEdgesChange,
      _ref$noDragClassName = _ref.noDragClassName,
      noDragClassName = _ref$noDragClassName === void 0 ? 'nodrag' : _ref$noDragClassName,
      _ref$noWheelClassName = _ref.noWheelClassName,
      noWheelClassName = _ref$noWheelClassName === void 0 ? 'nowheel' : _ref$noWheelClassName,
      _ref$noPanClassName = _ref.noPanClassName,
      noPanClassName = _ref$noPanClassName === void 0 ? 'nopan' : _ref$noPanClassName,
      _ref$fitView = _ref.fitView,
      fitView = _ref$fitView === void 0 ? false : _ref$fitView,
      fitViewOptions = _ref.fitViewOptions,
      _ref$connectOnClick = _ref.connectOnClick,
      connectOnClick = _ref$connectOnClick === void 0 ? true : _ref$connectOnClick,
      attributionPosition = _ref.attributionPosition,
      proOptions = _ref.proOptions,
      defaultEdgeOptions = _ref.defaultEdgeOptions,
      _ref$elevateEdgesOnSe = _ref.elevateEdgesOnSelect,
      elevateEdgesOnSelect = _ref$elevateEdgesOnSe === void 0 ? false : _ref$elevateEdgesOnSe,
      rest = (0,_useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_1__.a)(_ref, _excluded);

  var nodeTypesWrapped = useNodeOrEdgeTypes(nodeTypes, createNodeTypes);
  var edgeTypesWrapped = useNodeOrEdgeTypes(edgeTypes, createEdgeTypes);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", _objectSpread(_objectSpread({}, rest), {}, {
    ref: ref,
    className: (0,classcat__WEBPACK_IMPORTED_MODULE_3__["default"])(['react-flow', className])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(GraphView$1, {
    onInit: onInit,
    onMove: onMove,
    onMoveStart: onMoveStart,
    onMoveEnd: onMoveEnd,
    onNodeClick: onNodeClick,
    onEdgeClick: onEdgeClick,
    onNodeMouseEnter: onNodeMouseEnter,
    onNodeMouseMove: onNodeMouseMove,
    onNodeMouseLeave: onNodeMouseLeave,
    onNodeContextMenu: onNodeContextMenu,
    onNodeDoubleClick: onNodeDoubleClick,
    nodeTypes: nodeTypesWrapped,
    edgeTypes: edgeTypesWrapped,
    connectionLineType: connectionLineType,
    connectionLineStyle: connectionLineStyle,
    connectionLineComponent: connectionLineComponent,
    connectionLineContainerStyle: connectionLineContainerStyle,
    selectionKeyCode: selectionKeyCode,
    deleteKeyCode: deleteKeyCode,
    multiSelectionKeyCode: multiSelectionKeyCode,
    zoomActivationKeyCode: zoomActivationKeyCode,
    onlyRenderVisibleElements: onlyRenderVisibleElements,
    selectNodesOnDrag: selectNodesOnDrag,
    translateExtent: translateExtent,
    minZoom: minZoom,
    maxZoom: maxZoom,
    defaultZoom: defaultZoom,
    defaultPosition: defaultPosition,
    preventScrolling: preventScrolling,
    zoomOnScroll: zoomOnScroll,
    zoomOnPinch: zoomOnPinch,
    zoomOnDoubleClick: zoomOnDoubleClick,
    panOnScroll: panOnScroll,
    panOnScrollSpeed: panOnScrollSpeed,
    panOnScrollMode: panOnScrollMode,
    panOnDrag: panOnDrag,
    onPaneClick: onPaneClick,
    onPaneScroll: onPaneScroll,
    onPaneContextMenu: onPaneContextMenu,
    onSelectionContextMenu: onSelectionContextMenu,
    onEdgeUpdate: onEdgeUpdate,
    onEdgeContextMenu: onEdgeContextMenu,
    onEdgeDoubleClick: onEdgeDoubleClick,
    onEdgeMouseEnter: onEdgeMouseEnter,
    onEdgeMouseMove: onEdgeMouseMove,
    onEdgeMouseLeave: onEdgeMouseLeave,
    onEdgeUpdateStart: onEdgeUpdateStart,
    onEdgeUpdateEnd: onEdgeUpdateEnd,
    edgeUpdaterRadius: edgeUpdaterRadius,
    defaultMarkerColor: defaultMarkerColor,
    noDragClassName: noDragClassName,
    noWheelClassName: noWheelClassName,
    noPanClassName: noPanClassName,
    elevateEdgesOnSelect: elevateEdgesOnSelect,
    id: rest === null || rest === void 0 ? void 0 : rest.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StoreUpdater, {
    nodes: nodes,
    edges: edges,
    defaultNodes: defaultNodes,
    defaultEdges: defaultEdges,
    onConnect: onConnect,
    onConnectStart: onConnectStart,
    onConnectStop: onConnectStop,
    onConnectEnd: onConnectEnd,
    onClickConnectStart: onClickConnectStart,
    onClickConnectStop: onClickConnectStop,
    onClickConnectEnd: onClickConnectEnd,
    nodesDraggable: nodesDraggable,
    nodesConnectable: nodesConnectable,
    elementsSelectable: elementsSelectable,
    minZoom: minZoom,
    maxZoom: maxZoom,
    nodeExtent: nodeExtent,
    onNodesChange: onNodesChange,
    onEdgesChange: onEdgesChange,
    snapToGrid: snapToGrid,
    snapGrid: snapGrid,
    connectionMode: connectionMode,
    translateExtent: translateExtent,
    connectOnClick: connectOnClick,
    defaultEdgeOptions: defaultEdgeOptions,
    fitView: fitView,
    fitViewOptions: fitViewOptions,
    onNodesDelete: onNodesDelete,
    onEdgesDelete: onEdgesDelete,
    onNodeDragStart: onNodeDragStart,
    onNodeDrag: onNodeDrag,
    onNodeDragStop: onNodeDragStop,
    onSelectionDrag: onSelectionDrag,
    onSelectionDragStart: onSelectionDragStart,
    onSelectionDragStop: onSelectionDragStop
  }), onSelectionChange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(SelectionListener$1, {
    onSelectionChange: onSelectionChange
  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Attribution, {
    proOptions: proOptions,
    position: attributionPosition
  })));
});
ReactFlow.displayName = 'ReactFlow';

var ReactFlowProvider = function ReactFlowProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.v, {
    createStore: _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.w
  }, children);
};

ReactFlowProvider.displayName = 'ReactFlowProvider';

function createUseItemsState(applyChanges) {
  return function (initialItems) {
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialItems),
        _useState2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__._)(_useState, 2),
        items = _useState2[0],
        setItems = _useState2[1];

    var onItemsChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (changes) {
      return setItems(function (items) {
        return applyChanges(changes, items);
      });
    }, []);
    return [items, setItems, onItemsChange];
  };
}

var useNodesState = createUseItemsState(_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.y);
var useEdgesState = createUseItemsState(_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_0__.z);


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/react-flow-renderer/dist/esm/index2.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-flow-renderer/dist/esm/index2.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classcat */ "./node_modules/classcat/index.js");
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zustand/shallow */ "./node_modules/react-flow-renderer/node_modules/zustand/esm/shallow.js");
/* harmony import */ var _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-fd09a579.js */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");








var MiniMapNode = function MiniMapNode(_ref) {
  var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style,
      color = _ref.color,
      strokeColor = _ref.strokeColor,
      strokeWidth = _ref.strokeWidth,
      className = _ref.className,
      borderRadius = _ref.borderRadius,
      shapeRendering = _ref.shapeRendering;

  var _ref2 = style || {},
      background = _ref2.background,
      backgroundColor = _ref2.backgroundColor;

  var fill = color || background || backgroundColor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    className: (0,classcat__WEBPACK_IMPORTED_MODULE_1__["default"])(['react-flow__minimap-node', className]),
    x: x,
    y: y,
    rx: borderRadius,
    ry: borderRadius,
    width: width,
    height: height,
    fill: fill,
    stroke: strokeColor,
    strokeWidth: strokeWidth,
    shapeRendering: shapeRendering
  });
};

MiniMapNode.displayName = 'MiniMapNode';
var MiniMapNode$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(MiniMapNode);

var defaultWidth = 200;
var defaultHeight = 150;

var selector = function selector(s) {
  return {
    viewBBox: {
      x: -s.transform[0] / s.transform[2],
      y: -s.transform[1] / s.transform[2],
      width: s.width / s.transform[2],
      height: s.height / s.transform[2]
    },
    nodes: Array.from(s.nodeInternals.values())
  };
};

var getAttrFunction = function getAttrFunction(func) {
  return func instanceof Function ? func : function () {
    return func;
  };
};

var MiniMap = function MiniMap(_ref) {
  var _style$width, _style$height;

  var style = _ref.style,
      className = _ref.className,
      _ref$nodeStrokeColor = _ref.nodeStrokeColor,
      nodeStrokeColor = _ref$nodeStrokeColor === void 0 ? '#555' : _ref$nodeStrokeColor,
      _ref$nodeColor = _ref.nodeColor,
      nodeColor = _ref$nodeColor === void 0 ? '#fff' : _ref$nodeColor,
      _ref$nodeClassName = _ref.nodeClassName,
      nodeClassName = _ref$nodeClassName === void 0 ? '' : _ref$nodeClassName,
      _ref$nodeBorderRadius = _ref.nodeBorderRadius,
      nodeBorderRadius = _ref$nodeBorderRadius === void 0 ? 5 : _ref$nodeBorderRadius,
      _ref$nodeStrokeWidth = _ref.nodeStrokeWidth,
      nodeStrokeWidth = _ref$nodeStrokeWidth === void 0 ? 2 : _ref$nodeStrokeWidth,
      _ref$maskColor = _ref.maskColor,
      maskColor = _ref$maskColor === void 0 ? 'rgb(240, 242, 243, 0.7)' : _ref$maskColor;

  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.b)(selector, zustand_shallow__WEBPACK_IMPORTED_MODULE_4__["default"]),
      viewBBox = _useStore.viewBBox,
      nodes = _useStore.nodes;

  var elementWidth = (_style$width = style === null || style === void 0 ? void 0 : style.width) !== null && _style$width !== void 0 ? _style$width : defaultWidth;
  var elementHeight = (_style$height = style === null || style === void 0 ? void 0 : style.height) !== null && _style$height !== void 0 ? _style$height : defaultHeight;
  var nodeColorFunc = getAttrFunction(nodeColor);
  var nodeStrokeColorFunc = getAttrFunction(nodeStrokeColor);
  var nodeClassNameFunc = getAttrFunction(nodeClassName);
  var boundingRect = nodes.length > 0 ? (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.I)((0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.o)(nodes), viewBBox) : viewBBox;
  var scaledWidth = boundingRect.width / elementWidth;
  var scaledHeight = boundingRect.height / elementHeight;
  var viewScale = Math.max(scaledWidth, scaledHeight);
  var viewWidth = viewScale * elementWidth;
  var viewHeight = viewScale * elementHeight;
  var offset = 5 * viewScale;
  var x = boundingRect.x - (viewWidth - boundingRect.width) / 2 - offset;
  var y = boundingRect.y - (viewHeight - boundingRect.height) / 2 - offset;
  var width = viewWidth + offset * 2;
  var height = viewHeight + offset * 2;
  var shapeRendering = typeof window === 'undefined' || !!window.chrome ? 'crispEdges' : 'geometricPrecision';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: elementWidth,
    height: elementHeight,
    viewBox: "".concat(x, " ").concat(y, " ").concat(width, " ").concat(height),
    style: style,
    className: (0,classcat__WEBPACK_IMPORTED_MODULE_1__["default"])(['react-flow__minimap', className])
  }, nodes.filter(function (node) {
    return !node.hidden && node.width && node.height;
  }).map(function (node) {
    var _node$positionAbsolut, _node$positionAbsolut2, _node$positionAbsolut3, _node$positionAbsolut4;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MiniMapNode$1, {
      key: node.id,
      x: (_node$positionAbsolut = (_node$positionAbsolut2 = node.positionAbsolute) === null || _node$positionAbsolut2 === void 0 ? void 0 : _node$positionAbsolut2.x) !== null && _node$positionAbsolut !== void 0 ? _node$positionAbsolut : 0,
      y: (_node$positionAbsolut3 = (_node$positionAbsolut4 = node.positionAbsolute) === null || _node$positionAbsolut4 === void 0 ? void 0 : _node$positionAbsolut4.y) !== null && _node$positionAbsolut3 !== void 0 ? _node$positionAbsolut3 : 0,
      width: node.width,
      height: node.height,
      style: node.style,
      className: nodeClassNameFunc(node),
      color: nodeColorFunc(node),
      borderRadius: nodeBorderRadius,
      strokeColor: nodeStrokeColorFunc(node),
      strokeWidth: nodeStrokeWidth,
      shapeRendering: shapeRendering
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "react-flow__minimap-mask",
    d: "M".concat(x - offset, ",").concat(y - offset, "h").concat(width + offset * 2, "v").concat(height + offset * 2, "h").concat(-width - offset * 2, "z\n        M").concat(viewBBox.x, ",").concat(viewBBox.y, "h").concat(viewBBox.width, "v").concat(viewBBox.height, "h").concat(-viewBBox.width, "z"),
    fill: maskColor,
    fillRule: "evenodd"
  }));
};

MiniMap.displayName = 'MiniMap';
var index = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(MiniMap);


//# sourceMappingURL=index2.js.map


/***/ }),

/***/ "./node_modules/react-flow-renderer/dist/esm/index3.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-flow-renderer/dist/esm/index3.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlButton": () => (/* binding */ ControlButton),
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-fd09a579.js */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var _useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useReactFlow-c36bdf8e.js */ "./node_modules/react-flow-renderer/dist/esm/useReactFlow-c36bdf8e.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classcat */ "./node_modules/classcat/index.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");









function PlusIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"
  }));
}

function MinusIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 0h32v4.2H0z"
  }));
}

function FitViewIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"
  }));
}

function LockIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"
  }));
}

function UnlockIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 32"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"
  }));
}

var _excluded = ["children", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ControlButton = function ControlButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = (0,_useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_4__.a)(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _objectSpread({
    type: "button",
    className: (0,classcat__WEBPACK_IMPORTED_MODULE_1__["default"])(['react-flow__controls-button', className])
  }, rest), children);
};

var isInteractiveSelector = function isInteractiveSelector(s) {
  return s.nodesDraggable && s.nodesConnectable && s.elementsSelectable;
};

var Controls = function Controls(_ref2) {
  var style = _ref2.style,
      _ref2$showZoom = _ref2.showZoom,
      showZoom = _ref2$showZoom === void 0 ? true : _ref2$showZoom,
      _ref2$showFitView = _ref2.showFitView,
      showFitView = _ref2$showFitView === void 0 ? true : _ref2$showFitView,
      _ref2$showInteractive = _ref2.showInteractive,
      showInteractive = _ref2$showInteractive === void 0 ? true : _ref2$showInteractive,
      fitViewOptions = _ref2.fitViewOptions,
      onZoomIn = _ref2.onZoomIn,
      onZoomOut = _ref2.onZoomOut,
      onFitView = _ref2.onFitView,
      onInteractiveChange = _ref2.onInteractiveChange,
      className = _ref2.className,
      children = _ref2.children;
  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.u)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__._)(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  var isInteractive = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.b)(isInteractiveSelector);

  var _useReactFlow = (0,_useReactFlow_c36bdf8e_js__WEBPACK_IMPORTED_MODULE_4__.u)(),
      zoomIn = _useReactFlow.zoomIn,
      zoomOut = _useReactFlow.zoomOut,
      fitView = _useReactFlow.fitView;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsVisible(true);
  }, []);

  if (!isVisible) {
    return null;
  }

  var onZoomInHandler = function onZoomInHandler() {
    zoomIn === null || zoomIn === void 0 ? void 0 : zoomIn();
    onZoomIn === null || onZoomIn === void 0 ? void 0 : onZoomIn();
  };

  var onZoomOutHandler = function onZoomOutHandler() {
    zoomOut === null || zoomOut === void 0 ? void 0 : zoomOut();
    onZoomOut === null || onZoomOut === void 0 ? void 0 : onZoomOut();
  };

  var onFitViewHandler = function onFitViewHandler() {
    fitView === null || fitView === void 0 ? void 0 : fitView(fitViewOptions);
    onFitView === null || onFitView === void 0 ? void 0 : onFitView();
  };

  var onToggleInteractivity = function onToggleInteractivity() {
    store.setState({
      nodesDraggable: !isInteractive,
      nodesConnectable: !isInteractive,
      elementsSelectable: !isInteractive
    });
    onInteractiveChange === null || onInteractiveChange === void 0 ? void 0 : onInteractiveChange(!isInteractive);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,classcat__WEBPACK_IMPORTED_MODULE_1__["default"])(['react-flow__controls', className]),
    style: style
  }, showZoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ControlButton, {
    onClick: onZoomInHandler,
    className: "react-flow__controls-zoomin",
    title: "zoom in",
    "aria-label": "zoom in"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PlusIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ControlButton, {
    onClick: onZoomOutHandler,
    className: "react-flow__controls-zoomout",
    title: "zoom out",
    "aria-label": "zoom out"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MinusIcon, null))), showFitView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ControlButton, {
    className: "react-flow__controls-fitview",
    onClick: onFitViewHandler,
    title: "fit view",
    "aria-label": "fit view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FitViewIcon, null)), showInteractive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ControlButton, {
    className: "react-flow__controls-interactive",
    onClick: onToggleInteractivity,
    title: "toggle interactivity",
    "aria-label": "toggle interactivity"
  }, isInteractive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UnlockIcon, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LockIcon, null)), children);
};

Controls.displayName = 'Controls';
var index = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Controls);


//# sourceMappingURL=index3.js.map


/***/ }),

/***/ "./node_modules/react-flow-renderer/dist/esm/index4.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-flow-renderer/dist/esm/index4.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-fd09a579.js */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classcat */ "./node_modules/classcat/index.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");







var createGridLinesPath = function createGridLinesPath(size, strokeWidth, stroke) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    stroke: stroke,
    strokeWidth: strokeWidth,
    d: "M".concat(size / 2, " 0 V").concat(size, " M0 ").concat(size / 2, " H").concat(size)
  });
};
var createGridDotsPath = function createGridDotsPath(size, fill) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: size,
    cy: size,
    r: size,
    fill: fill
  });
};

var _defaultColors;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var defaultColors = (_defaultColors = {}, (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.a)(_defaultColors, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.H.Dots, '#81818a'), (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.a)(_defaultColors, _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.H.Lines, '#eee'), _defaultColors);

var transformSelector = function transformSelector(s) {
  return s.transform;
};

var Background = function Background(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.H.Dots : _ref$variant,
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? 15 : _ref$gap,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 0.4 : _ref$size,
      color = _ref.color,
      style = _ref.style,
      className = _ref.className;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__._)(_useState, 2),
      patternId = _useState2[0],
      setPatternId = _useState2[1];

  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.b)(transformSelector),
      _useStore2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__._)(_useStore, 3),
      tX = _useStore2[0],
      tY = _useStore2[1],
      tScale = _useStore2[2];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // when there are multiple flows on a page we need to make sure that every background gets its own pattern.
    var bgs = document.querySelectorAll('.react-flow__background');
    var index = Array.from(bgs).findIndex(function (bg) {
      return bg === ref.current;
    });
    setPatternId("pattern-".concat(index));
  }, []);
  var scaledGap = gap * tScale || 1;
  var xOffset = tX % scaledGap;
  var yOffset = tY % scaledGap;
  var isLines = variant === _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_3__.H.Lines;
  var bgColor = color ? color : defaultColors[variant];
  var path = isLines ? createGridLinesPath(scaledGap, size, bgColor) : createGridDotsPath(size * tScale, bgColor);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: (0,classcat__WEBPACK_IMPORTED_MODULE_1__["default"])(['react-flow__background', 'react-flow__container', className]),
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: '100%',
      height: '100%'
    }),
    ref: ref
  }, patternId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pattern", {
    id: patternId,
    x: xOffset,
    y: yOffset,
    width: scaledGap,
    height: scaledGap,
    patternUnits: "userSpaceOnUse"
  }, path), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "url(#".concat(patternId, ")")
  })));
};

Background.displayName = 'Background';
var index = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Background);


//# sourceMappingURL=index4.js.map


/***/ }),

/***/ "./node_modules/react-flow-renderer/dist/esm/useEdges.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-flow-renderer/dist/esm/useEdges.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEdges)
/* harmony export */ });
/* harmony import */ var _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-fd09a579.js */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");





var edgesSelector = function edgesSelector(state) {
  return state.edges;
};

function useEdges() {
  var edges = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_1__.b)(edgesSelector);
  return edges;
}


//# sourceMappingURL=useEdges.js.map


/***/ }),

/***/ "./node_modules/react-flow-renderer/dist/esm/useNodes.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-flow-renderer/dist/esm/useNodes.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNodes)
/* harmony export */ });
/* harmony import */ var _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-fd09a579.js */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");





var nodesSelector = function nodesSelector(state) {
  return Array.from(state.nodeInternals.values());
};

function useNodes() {
  var nodes = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_1__.b)(nodesSelector);
  return nodes;
}


//# sourceMappingURL=useNodes.js.map


/***/ }),

/***/ "./node_modules/react-flow-renderer/dist/esm/useReactFlow-c36bdf8e.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-flow-renderer/dist/esm/useReactFlow-c36bdf8e.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ _toConsumableArray),
/* harmony export */   "a": () => (/* binding */ _objectWithoutProperties),
/* harmony export */   "u": () => (/* binding */ useReactFlow)
/* harmony export */ });
/* harmony import */ var _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-fd09a579.js */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zustand/shallow */ "./node_modules/react-flow-renderer/node_modules/zustand/esm/shallow.js");





function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.J)(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.K)(arr) || _nonIterableSpread();
}

var initialViewportHelper = {
  zoomIn: function zoomIn() {},
  zoomOut: function zoomOut() {},
  zoomTo: function zoomTo(_) {},
  getZoom: function getZoom() {
    return 1;
  },
  setViewport: function setViewport(_) {},
  getViewport: function getViewport() {
    return {
      x: 0,
      y: 0,
      zoom: 1
    };
  },
  fitView: function fitView() {
  },
  setCenter: function setCenter(_, __) {},
  fitBounds: function fitBounds(_) {},
  project: function project(position) {
    return position;
  },
  initialized: false
};

var selector = function selector(s) {
  return {
    d3Zoom: s.d3Zoom,
    d3Selection: s.d3Selection
  };
};

var useViewportHelper = function useViewportHelper() {
  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.u)();

  var _useStore = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.b)(selector, zustand_shallow__WEBPACK_IMPORTED_MODULE_3__["default"]),
      d3Zoom = _useStore.d3Zoom,
      d3Selection = _useStore.d3Selection;

  var viewportHelperFunctions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (d3Selection && d3Zoom) {
      return {
        zoomIn: function zoomIn(options) {
          return d3Zoom.scaleBy((0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.L)(d3Selection, options === null || options === void 0 ? void 0 : options.duration), 1.2);
        },
        zoomOut: function zoomOut(options) {
          return d3Zoom.scaleBy((0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.L)(d3Selection, options === null || options === void 0 ? void 0 : options.duration), 1 / 1.2);
        },
        zoomTo: function zoomTo(zoomLevel, options) {
          return d3Zoom.scaleTo((0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.L)(d3Selection, options === null || options === void 0 ? void 0 : options.duration), zoomLevel);
        },
        getZoom: function getZoom() {
          return store.getState().transform[2];
        },
        setViewport: function setViewport(transform, options) {
          var _transform$x, _transform$y, _transform$zoom;

          var _store$getState$trans = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__._)(store.getState().transform, 3),
              x = _store$getState$trans[0],
              y = _store$getState$trans[1],
              zoom = _store$getState$trans[2];

          var nextTransform = d3_zoom__WEBPACK_IMPORTED_MODULE_1__.zoomIdentity.translate((_transform$x = transform.x) !== null && _transform$x !== void 0 ? _transform$x : x, (_transform$y = transform.y) !== null && _transform$y !== void 0 ? _transform$y : y).scale((_transform$zoom = transform.zoom) !== null && _transform$zoom !== void 0 ? _transform$zoom : zoom);
          d3Zoom.transform((0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.L)(d3Selection, options === null || options === void 0 ? void 0 : options.duration), nextTransform);
        },
        getViewport: function getViewport() {
          var _store$getState$trans2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__._)(store.getState().transform, 3),
              x = _store$getState$trans2[0],
              y = _store$getState$trans2[1],
              zoom = _store$getState$trans2[2];

          return {
            x: x,
            y: y,
            zoom: zoom
          };
        },
        fitView: function fitView$1(options) {
          return (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.N)(store.getState, options);
        },
        setCenter: function setCenter(x, y, options) {
          var _store$getState = store.getState(),
              width = _store$getState.width,
              height = _store$getState.height,
              maxZoom = _store$getState.maxZoom;

          var nextZoom = typeof (options === null || options === void 0 ? void 0 : options.zoom) !== 'undefined' ? options.zoom : maxZoom;
          var centerX = width / 2 - x * nextZoom;
          var centerY = height / 2 - y * nextZoom;
          var transform = d3_zoom__WEBPACK_IMPORTED_MODULE_1__.zoomIdentity.translate(centerX, centerY).scale(nextZoom);
          d3Zoom.transform((0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.L)(d3Selection, options === null || options === void 0 ? void 0 : options.duration), transform);
        },
        fitBounds: function fitBounds(bounds, options) {
          var _options$padding;

          var _store$getState2 = store.getState(),
              width = _store$getState2.width,
              height = _store$getState2.height,
              minZoom = _store$getState2.minZoom,
              maxZoom = _store$getState2.maxZoom;

          var _getTransformForBound = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.G)(bounds, width, height, minZoom, maxZoom, (_options$padding = options === null || options === void 0 ? void 0 : options.padding) !== null && _options$padding !== void 0 ? _options$padding : 0.1),
              _getTransformForBound2 = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__._)(_getTransformForBound, 3),
              x = _getTransformForBound2[0],
              y = _getTransformForBound2[1],
              zoom = _getTransformForBound2[2];

          var transform = d3_zoom__WEBPACK_IMPORTED_MODULE_1__.zoomIdentity.translate(x, y).scale(zoom);
          d3Zoom.transform((0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.L)(d3Selection, options === null || options === void 0 ? void 0 : options.duration), transform);
        },
        project: function project(position) {
          var _store$getState3 = store.getState(),
              transform = _store$getState3.transform,
              snapToGrid = _store$getState3.snapToGrid,
              snapGrid = _store$getState3.snapGrid;

          return (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.p)(position, transform, snapToGrid, snapGrid);
        },
        initialized: true
      };
    }

    return initialViewportHelper;
  }, [d3Zoom, d3Selection]);
  return viewportHelperFunctions;
};

var _excluded = ["initialized"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.a)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useReactFlow() {
  var _useViewportHelper = useViewportHelper(),
      viewportInitialized = _useViewportHelper.initialized,
      viewportHelperFunctions = _objectWithoutProperties(_useViewportHelper, _excluded);

  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  var getNodes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _store$getState = store.getState(),
        nodeInternals = _store$getState.nodeInternals;

    var nodes = Array.from(nodeInternals.values());
    return nodes.map(function (n) {
      return _objectSpread({}, n);
    });
  }, []);
  var getNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    var _store$getState2 = store.getState(),
        nodeInternals = _store$getState2.nodeInternals;

    return nodeInternals.get(id);
  }, []);
  var getEdges = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _store$getState3 = store.getState(),
        _store$getState3$edge = _store$getState3.edges,
        edges = _store$getState3$edge === void 0 ? [] : _store$getState3$edge;

    return edges.map(function (e) {
      return _objectSpread({}, e);
    });
  }, []);
  var getEdge = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    var _store$getState4 = store.getState(),
        _store$getState4$edge = _store$getState4.edges,
        edges = _store$getState4$edge === void 0 ? [] : _store$getState4$edge;

    return edges.find(function (e) {
      return e.id === id;
    });
  }, []);
  var setNodes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (payload) {
    var _store$getState5 = store.getState(),
        nodeInternals = _store$getState5.nodeInternals,
        setNodes = _store$getState5.setNodes,
        hasDefaultNodes = _store$getState5.hasDefaultNodes,
        onNodesChange = _store$getState5.onNodesChange;

    var nodes = Array.from(nodeInternals.values());
    var nextNodes = typeof payload === 'function' ? payload(nodes) : payload;

    if (hasDefaultNodes) {
      setNodes(nextNodes);
    } else if (onNodesChange) {
      var changes = nextNodes.length === 0 ? nodes.map(function (node) {
        return {
          type: 'remove',
          id: node.id
        };
      }) : nextNodes.map(function (node) {
        return {
          item: node,
          type: 'reset'
        };
      });
      onNodesChange(changes);
    }
  }, []);
  var setEdges = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (payload) {
    var _store$getState6 = store.getState(),
        _store$getState6$edge = _store$getState6.edges,
        edges = _store$getState6$edge === void 0 ? [] : _store$getState6$edge,
        setEdges = _store$getState6.setEdges,
        hasDefaultEdges = _store$getState6.hasDefaultEdges,
        onEdgesChange = _store$getState6.onEdgesChange;

    var nextEdges = typeof payload === 'function' ? payload(edges) : payload;

    if (hasDefaultEdges) {
      setEdges(nextEdges);
    } else if (onEdgesChange) {
      var changes = nextEdges.length === 0 ? edges.map(function (edge) {
        return {
          type: 'remove',
          id: edge.id
        };
      }) : nextEdges.map(function (edge) {
        return {
          item: edge,
          type: 'reset'
        };
      });
      onEdgesChange(changes);
    }
  }, []);
  var addNodes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (payload) {
    var nodes = Array.isArray(payload) ? payload : [payload];

    var _store$getState7 = store.getState(),
        nodeInternals = _store$getState7.nodeInternals,
        setNodes = _store$getState7.setNodes,
        hasDefaultNodes = _store$getState7.hasDefaultNodes,
        onNodesChange = _store$getState7.onNodesChange;

    if (hasDefaultNodes) {
      var currentNodes = Array.from(nodeInternals.values());
      var nextNodes = [].concat(currentNodes, _toConsumableArray(nodes));
      setNodes(nextNodes);
    } else if (onNodesChange) {
      var changes = nodes.map(function (node) {
        return {
          item: node,
          type: 'add'
        };
      });
      onNodesChange(changes);
    }
  }, []);
  var addEdges = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (payload) {
    var nextEdges = Array.isArray(payload) ? payload : [payload];

    var _store$getState8 = store.getState(),
        _store$getState8$edge = _store$getState8.edges,
        edges = _store$getState8$edge === void 0 ? [] : _store$getState8$edge,
        setEdges = _store$getState8.setEdges,
        hasDefaultEdges = _store$getState8.hasDefaultEdges,
        onEdgesChange = _store$getState8.onEdgesChange;

    if (hasDefaultEdges) {
      setEdges([].concat(_toConsumableArray(edges), _toConsumableArray(nextEdges)));
    } else if (onEdgesChange) {
      var changes = nextEdges.map(function (edge) {
        return {
          item: edge,
          type: 'add'
        };
      });
      onEdgesChange(changes);
    }
  }, []);
  var toObject = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _store$getState9 = store.getState(),
        nodeInternals = _store$getState9.nodeInternals,
        _store$getState9$edge = _store$getState9.edges,
        edges = _store$getState9$edge === void 0 ? [] : _store$getState9$edge,
        transform = _store$getState9.transform;

    var nodes = Array.from(nodeInternals.values());

    var _transform = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__._)(transform, 3),
        x = _transform[0],
        y = _transform[1],
        zoom = _transform[2];

    return {
      nodes: nodes.map(function (n) {
        return _objectSpread({}, n);
      }),
      edges: edges.map(function (e) {
        return _objectSpread({}, e);
      }),
      viewport: {
        x: x,
        y: y,
        zoom: zoom
      }
    };
  }, []);
  return _objectSpread(_objectSpread({}, viewportHelperFunctions), {}, {
    viewportInitialized: viewportInitialized,
    getNodes: getNodes,
    getNode: getNode,
    getEdges: getEdges,
    getEdge: getEdge,
    setNodes: setNodes,
    setEdges: setEdges,
    addNodes: addNodes,
    addEdges: addEdges,
    toObject: toObject
  });
}


//# sourceMappingURL=useReactFlow-c36bdf8e.js.map


/***/ }),

/***/ "./node_modules/react-flow-renderer/dist/esm/useUpdateNodeInternals.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-flow-renderer/dist/esm/useUpdateNodeInternals.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useUpdateNodeInternals)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-fd09a579.js */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");






var selector = function selector(state) {
  return state.updateNodeDimensions;
};

function useUpdateNodeInternals() {
  var store = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  var updateNodeDimensions = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_2__.b)(selector);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    var _store$getState = store.getState(),
        domNode = _store$getState.domNode;

    if (!domNode) {
      return;
    }

    var nodeElement = domNode.querySelector(".react-flow__node[data-id=\"".concat(id, "\"]"));

    if (nodeElement) {
      updateNodeDimensions([{
        id: id,
        nodeElement: nodeElement,
        forceUpdate: true
      }]);
    }
  }, []);
}


//# sourceMappingURL=useUpdateNodeInternals.js.map


/***/ }),

/***/ "./node_modules/react-flow-renderer/dist/esm/useViewport.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-flow-renderer/dist/esm/useViewport.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useViewport)
/* harmony export */ });
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand/shallow */ "./node_modules/react-flow-renderer/node_modules/zustand/esm/shallow.js");
/* harmony import */ var _index_fd09a579_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-fd09a579.js */ "./node_modules/react-flow-renderer/dist/esm/index-fd09a579.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");






var viewportSelector = function viewportSelector(state) {
  return {
    x: state.transform[0],
    y: state.transform[1],
    zoom: state.transform[2]
  };
};

function useViewport() {
  var viewport = (0,_index_fd09a579_js__WEBPACK_IMPORTED_MODULE_1__.b)(viewportSelector, zustand_shallow__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return viewport;
}


//# sourceMappingURL=useViewport.js.map


/***/ }),

/***/ "./node_modules/react-flow-renderer/node_modules/zustand/esm/context.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-flow-renderer/node_modules/zustand/esm/context.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function createContext() {
  const ZustandContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
  const Provider = ({
    initialStore,
    createStore,
    children
  }) => {
    const storeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    if (!storeRef.current) {
      if (initialStore) {
        console.warn("Provider initialStore is deprecated and will be removed in the next version.");
        if (!createStore) {
          createStore = () => initialStore;
        }
      }
      storeRef.current = createStore();
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ZustandContext.Provider, { value: storeRef.current }, children);
  };
  const useStore = (selector, equalityFn = Object.is) => {
    const useProviderStore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ZustandContext);
    if (!useProviderStore) {
      throw new Error("Seems like you have not used zustand provider as an ancestor.");
    }
    return useProviderStore(selector, equalityFn);
  };
  const useStoreApi = () => {
    const useProviderStore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ZustandContext);
    if (!useProviderStore) {
      throw new Error("Seems like you have not used zustand provider as an ancestor.");
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
      getState: useProviderStore.getState,
      setState: useProviderStore.setState,
      subscribe: useProviderStore.subscribe,
      destroy: useProviderStore.destroy
    }), [useProviderStore]);
  };
  return {
    Provider,
    useStore,
    useStoreApi
  };
}




/***/ }),

/***/ "./node_modules/react-flow-renderer/node_modules/zustand/esm/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-flow-renderer/node_modules/zustand/esm/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function createStore(createState) {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is) => {
    console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
    let currentSlice = selector(state);
    function listenerToAdd() {
      const nextSlice = selector(state);
      if (!equalityFn(currentSlice, nextSlice)) {
        const previousSlice = currentSlice;
        listener(currentSlice = nextSlice, previousSlice);
      }
    }
    listeners.add(listenerToAdd);
    return () => listeners.delete(listenerToAdd);
  };
  const subscribe = (listener, selector, equalityFn) => {
    if (selector || equalityFn) {
      return subscribeWithSelector(listener, selector, equalityFn);
    }
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
}

const isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
const useIsomorphicLayoutEffect = isSSR ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
function create(createState) {
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useStore = (selector = api.getState, equalityFn = Object.is) => {
    const [, forceUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((c) => c + 1, 0);
    const state = api.getState();
    const stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);
    const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(selector);
    const equalityFnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(equalityFn);
    const erroredRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const currentSliceRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    if (currentSliceRef.current === void 0) {
      currentSliceRef.current = selector(state);
    }
    let newStateSlice;
    let hasNewStateSlice = false;
    if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
      newStateSlice = selector(state);
      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
    }
    useIsomorphicLayoutEffect(() => {
      if (hasNewStateSlice) {
        currentSliceRef.current = newStateSlice;
      }
      stateRef.current = state;
      selectorRef.current = selector;
      equalityFnRef.current = equalityFn;
      erroredRef.current = false;
    });
    const stateBeforeSubscriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);
    useIsomorphicLayoutEffect(() => {
      const listener = () => {
        try {
          const nextState = api.getState();
          const nextStateSlice = selectorRef.current(nextState);
          if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
            stateRef.current = nextState;
            currentSliceRef.current = nextStateSlice;
            forceUpdate();
          }
        } catch (error) {
          erroredRef.current = true;
          forceUpdate();
        }
      };
      const unsubscribe = api.subscribe(listener);
      if (api.getState() !== stateBeforeSubscriptionRef.current) {
        listener();
      }
      return unsubscribe;
    }, []);
    const sliceToReturn = hasNewStateSlice ? newStateSlice : currentSliceRef.current;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(sliceToReturn);
    return sliceToReturn;
  };
  Object.assign(useStore, api);
  useStore[Symbol.iterator] = function() {
    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
    const items = [useStore, api];
    return {
      next() {
        const done = items.length <= 0;
        return { value: items.shift(), done };
      }
    };
  };
  return useStore;
}




/***/ }),

/***/ "./node_modules/react-flow-renderer/node_modules/zustand/esm/shallow.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-flow-renderer/node_modules/zustand/esm/shallow.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallow)
/* harmony export */ });
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}




/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

// dispatch for CommonJS interop named imports.

var useState = React.useState,
    useEffect = React.useEffect,
    useLayoutEffect = React.useLayoutEffect,
    useDebugValue = React.useDebugValue;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  {
    if (!didWarnOld18Alpha) {
      if (React.startTransition !== undefined) {
        didWarnOld18Alpha = true;

        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  var value = getSnapshot();

  {
    if (!didWarnUncachedGetSnapshot) {
      var cachedValue = getSnapshot();

      if (!objectIs(value, cachedValue)) {
        error('The result of getSnapshot should be cached to avoid an infinite loop');

        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  var _useState = useState({
    inst: {
      value: value,
      getSnapshot: getSnapshot
    }
  }),
      inst = _useState[0].inst,
      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.


  useLayoutEffect(function () {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(function () {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }

    var handleStoreChange = function () {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  var prevValue = inst.value;

  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

var isServerEnvironment = !canUseDOM;

var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

exports.useSyncExternalStore = useSyncExternalStore$2;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");
var shim = __webpack_require__(/*! use-sync-external-store/shim */ "./node_modules/use-sync-external-store/shim/index.js");

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var useSyncExternalStore = shim.useSyncExternalStore;

// for CommonJS interop.

var useRef = React.useRef,
    useEffect = React.useEffect,
    useMemo = React.useMemo,
    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  // Use this to track the rendered snapshot.
  var instRef = useRef(null);
  var inst;

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(function () {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;

    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      } // We may be able to reuse the previous invocation's result.


      // We may be able to reuse the previous invocation's result.
      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;

      if (objectIs(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      } // The snapshot has changed, so we need to compute a new selection.


      // The snapshot has changed, so we need to compute a new selection.
      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }; // Assigning this to a constant so that Flow knows it can't change.


    // Assigning this to a constant so that Flow knows it can't change.
    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
      return memoizedSelector(maybeGetServerSnapshot());
    };
    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
      getSelection = _useMemo[0],
      getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  useEffect(function () {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
}

exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js");
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/with-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/with-selector.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim/with-selector.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js");
}


/***/ }),

/***/ "./node_modules/zustand/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/zustand/esm/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* reexport safe */ zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (/* binding */ create$1),
/* harmony export */   "useStore": () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/vanilla */ "./node_modules/zustand/esm/vanilla.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector.js */ "./node_modules/use-sync-external-store/shim/with-selector.js");






const { useSyncExternalStoreWithSelector } = use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__;
function useStore(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = typeof createState === "function" ? (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__["default"])(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
var create$1 = create;




/***/ }),

/***/ "./node_modules/zustand/esm/vanilla.js":
/*!*********************************************!*\
  !*** ./node_modules/zustand/esm/vanilla.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createStore)
/* harmony export */ });
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState(
    setState,
    getState,
    api
  );
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;




/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/classcat/index.js":
/*!****************************************!*\
  !*** ./node_modules/classcat/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cc)
/* harmony export */ });
function cc(names) {
  if (typeof names === "string" || typeof names === "number") return "" + names

  let out = ""

  if (Array.isArray(names)) {
    for (let i = 0, tmp; i < names.length; i++) {
      if ((tmp = cc(names[i])) !== "") {
        out += (out && " ") + tmp
      }
    }
  } else {
    for (let k in names) {
      if (names[k]) out += (out && " ") + k
    }
  }

  return out
}


/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "Rgb": () => (/* binding */ Rgb),
/* harmony export */   "brighter": () => (/* binding */ brighter),
/* harmony export */   "darker": () => (/* binding */ darker),
/* harmony export */   "default": () => (/* binding */ color),
/* harmony export */   "hsl": () => (/* binding */ hsl),
/* harmony export */   "hslConvert": () => (/* binding */ hslConvert),
/* harmony export */   "rgb": () => (/* binding */ rgb),
/* harmony export */   "rgbConvert": () => (/* binding */ rgbConvert)
/* harmony export */ });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "extend": () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);


/***/ }),

/***/ "./node_modules/d3-drag/src/constant.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-drag/src/constant.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-drag/src/drag.js":
/*!******************************************!*\
  !*** ./node_modules/d3-drag/src/drag.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/pointer.js");
/* harmony import */ var _nodrag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nodrag.js */ "./node_modules/d3-drag/src/nodrag.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/d3-drag/src/noevent.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-drag/src/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event.js */ "./node_modules/d3-drag/src/event.js");







// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(event, d) {
  return d == null ? {x: event.x, y: event.y} : d;
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["default"])("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved, _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassive)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned(event, d) {
    if (touchending || !filter.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    (0,d3_selection__WEBPACK_IMPORTED_MODULE_2__["default"])(event.view)
      .on("mousemove.drag", mousemoved, _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture)
      .on("mouseup.drag", mouseupped, _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
    (0,_nodrag_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event.view);
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__.nopropagation)(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }

  function mousemoved(event) {
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }

  function mouseupped(event) {
    (0,d3_selection__WEBPACK_IMPORTED_MODULE_2__["default"])(event.view).on("mousemove.drag mouseup.drag", null);
    (0,_nodrag_js__WEBPACK_IMPORTED_MODULE_3__.yesdrag)(event.view, mousemoving);
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
    gestures.mouse("end", event);
  }

  function touchstarted(event, d) {
    if (!filter.call(this, event, d)) return;
    var touches = event.changedTouches,
        c = container.call(this, event, d),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__.nopropagation)(event);
        gesture("start", event, touches[i]);
      }
    }
  }

  function touchmoved(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
        gesture("drag", event, touches[i]);
      }
    }
  }

  function touchended(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        (0,_noevent_js__WEBPACK_IMPORTED_MODULE_1__.nopropagation)(event);
        gesture("end", event, touches[i]);
      }
    }
  }

  function beforestart(that, container, event, d, identifier, touch) {
    var dispatch = listeners.copy(),
        p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__["default"])(touch || event, container), dx, dy,
        s;

    if ((s = subject.call(that, new _event_js__WEBPACK_IMPORTED_MODULE_5__["default"]("beforestart", {
        sourceEvent: event,
        target: drag,
        identifier,
        active,
        x: p[0],
        y: p[1],
        dx: 0,
        dy: 0,
        dispatch
      }), d)) == null) return;

    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;

    return function gesture(type, event, touch) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[identifier] = gesture, n = active++; break;
        case "end": delete gestures[identifier], --active; // falls through
        case "drag": p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_4__["default"])(touch || event, container), n = active; break;
      }
      dispatch.call(
        type,
        that,
        new _event_js__WEBPACK_IMPORTED_MODULE_5__["default"](type, {
          sourceEvent: event,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch
        }),
        d
      );
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__["default"])(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_6__["default"])(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
}


/***/ }),

/***/ "./node_modules/d3-drag/src/event.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-drag/src/event.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragEvent)
/* harmony export */ });
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x, y, dx, dy,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    subject: {value: subject, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    identifier: {value: identifier, enumerable: true, configurable: true},
    active: {value: active, enumerable: true, configurable: true},
    x: {value: x, enumerable: true, configurable: true},
    y: {value: y, enumerable: true, configurable: true},
    dx: {value: dx, enumerable: true, configurable: true},
    dy: {value: dy, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};


/***/ }),

/***/ "./node_modules/d3-drag/src/nodrag.js":
/*!********************************************!*\
  !*** ./node_modules/d3-drag/src/nodrag.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "yesdrag": () => (/* binding */ yesdrag)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/d3-drag/src/noevent.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(view) {
  var root = view.document.documentElement,
      selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(view).on("dragstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], _noevent_js__WEBPACK_IMPORTED_MODULE_1__.nonpassivecapture);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),

/***/ "./node_modules/d3-drag/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-drag/src/noevent.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nonpassive": () => (/* binding */ nonpassive),
/* harmony export */   "nonpassivecapture": () => (/* binding */ nonpassivecapture),
/* harmony export */   "nopropagation": () => (/* binding */ nopropagation)
/* harmony export */ });
// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
const nonpassive = {passive: false};
const nonpassivecapture = {capture: true, passive: false};

function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cubicIn": () => (/* binding */ cubicIn),
/* harmony export */   "cubicInOut": () => (/* binding */ cubicInOut),
/* harmony export */   "cubicOut": () => (/* binding */ cubicOut)
/* harmony export */ });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basis": () => (/* binding */ basis),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__.basis)((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nogamma),
/* harmony export */   "gamma": () => (/* binding */ gamma),
/* harmony export */   "hue": () => (/* binding */ hue)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rgbBasis": () => (/* binding */ rgbBasis),
/* harmony export */   "rgbBasisClosed": () => (/* binding */ rgbBasisClosed)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {
  var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__.gamma)(y);

  function rgb(start, end) {
    var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__.rgb)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interpolateTransformCss": () => (/* binding */ interpolateTransformCss),
/* harmony export */   "interpolateTransformSvg": () => (/* binding */ interpolateTransformSvg)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__.parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__.parseSvg, ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseCss": () => (/* binding */ parseCss),
/* harmony export */   "parseSvg": () => (/* binding */ parseSvg)
/* harmony export */ });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose.js */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity : (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__.identity;
  value = value.matrix;
  return (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function zoomRho(rho, rho2, rho4) {

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      }
    }

    // General case.
    else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      }
    }

    i.duration = S * 1000 * rho / Math.SQRT2;

    return i;
  }

  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4));


/***/ }),

/***/ "./node_modules/d3-selection/src/array.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/array.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ array)
/* harmony export */ });
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespace.js */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__.xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "childMatcher": () => (/* binding */ childMatcher),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/d3-selection/src/namespaces.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}


/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "xhtml": () => (/* binding */ xhtml)
/* harmony export */ });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/d3-selection/src/pointer.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/pointer.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent.js */ "./node_modules/d3-selection/src/sourceEvent.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event, node) {
  event = (0,_sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}


/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.Selection([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__.root);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace.js */ "./node_modules/d3-selection/src/namespace.js");


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-selection/src/constant.js");




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__.EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");


function dispatchEvent(node, type, params) {
  var window = (0,_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return !this.node();
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterNode": () => (/* binding */ EnterNode),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__["default"]), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__["default"]), this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Selection": () => (/* binding */ Selection),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "root": () => (/* binding */ root)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectChild.js */ "./node_modules/d3-selection/src/selection/selectChild.js");
/* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectChildren.js */ "./node_modules/d3-selection/src/selection/selectChildren.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.js */ "./node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter.js */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exit.js */ "./node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./join.js */ "./node_modules/d3-selection/src/selection/join.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order.js */ "./node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort.js */ "./node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./call.js */ "./node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nodes.js */ "./node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node.js */ "./node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./size.js */ "./node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./empty.js */ "./node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./each.js */ "./node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./style.js */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./property.js */ "./node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./classed.js */ "./node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./html.js */ "./node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./raise.js */ "./node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lower.js */ "./node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./append.js */ "./node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./insert.js */ "./node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./clone.js */ "./node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./datum.js */ "./node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./on.js */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/d3-selection/src/selection/dispatch.js");
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./iterator.js */ "./node_modules/d3-selection/src/selection/iterator.js");



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  data: _data_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  join: _join_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  selection: selection_selection,
  order: _order_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  call: _call_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  node: _node_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  size: _size_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  each: _each_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  property: _property_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__["default"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_22__["default"],
  html: _html_js__WEBPACK_IMPORTED_MODULE_23__["default"],
  raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__["default"],
  lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__["default"],
  append: _append_js__WEBPACK_IMPORTED_MODULE_26__["default"],
  insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__["default"],
  clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__["default"],
  datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__["default"],
  on: _on_js__WEBPACK_IMPORTED_MODULE_31__["default"],
  dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__["default"],
  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__["default"]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selection);


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");



function constantNull() {
  return null;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, before) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0,_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(lower);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(merges, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return Array.from(this);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(raise);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(remove);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selector.js */ "./node_modules/d3-selection/src/selector.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select !== "function") select = (0,_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Selection(subgroups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-selection/src/array.js");
/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll.js */ "./node_modules/d3-selection/src/selectorAll.js");




function arrayAll(select) {
  return function() {
    return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(select.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = (0,_selectorAll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Selection(subgroups, parents);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChild.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChild.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectChildren.js":
/*!*******************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectChildren.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/d3-selection/src/matcher.js");


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__.childMatcher)(match)));
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Selection(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(update) {
  return new Array(update.length);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "styleValue": () => (/* binding */ styleValue)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/d3-selection/src/window.js");


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || (0,_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function none() {}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function empty() {
  return [];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}


/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__.Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": () => (/* binding */ Timer),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "timer": () => (/* binding */ timer),
/* harmony export */   "timerFlush": () => (/* binding */ timerFlush)
/* harmony export */ });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/active.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-transition/src/active.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



var root = [null];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.SCHEDULED && schedule.name === name) {
        return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition([[node]], root, name, +i);
      }
    }
  }

  return null;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-transition/src/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "active": () => (/* reexport safe */ _active_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "interrupt": () => (/* reexport safe */ _interrupt_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "transition": () => (/* reexport safe */ _transition_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-transition/src/selection/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _active_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active.js */ "./node_modules/d3-transition/src/active.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");






/***/ }),

/***/ "./node_modules/d3-transition/src/interrupt.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.STARTING && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.ENDING;
    schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__.ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/selection/interrupt.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/selection/transition.js");




d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__["default"];
d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  return this.each(function() {
    (0,_interrupt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, name);
  });
}


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/transition.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/cubic.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_0__.cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var id,
      timing;

  if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition) {
    id = name._id, name = name._name;
  } else {
    id = (0,_transition_index_js__WEBPACK_IMPORTED_MODULE_1__.newId)(), (timing = defaultTiming).time = (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__.now)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0,_transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__.Transition(groups, this._parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attr.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__.interpolateTransformSvg : _interpolate_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_3__.tweenValue)(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/namespace.js");


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function delayFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.init)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.init)(this, id).delay = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).delay;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/duration.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function durationFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).duration = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).duration;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/ease.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).ease = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).ease;
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/easeVarying.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/easeVarying.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id).ease = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/end.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/end.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/matcher.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__.Transition(subgroups, this._parents, this._name, this._id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "default": () => (/* binding */ transition),
/* harmony export */   "newId": () => (/* binding */ newId)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-transition/src/transition/attr.js");
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attrTween.js */ "./node_modules/d3-transition/src/transition/attrTween.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./delay.js */ "./node_modules/d3-transition/src/transition/delay.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-transition/src/transition/duration.js");
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ease.js */ "./node_modules/d3-transition/src/transition/ease.js");
/* harmony import */ var _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./easeVarying.js */ "./node_modules/d3-transition/src/transition/easeVarying.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-transition/src/transition/filter.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-transition/src/transition/merge.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./on.js */ "./node_modules/d3-transition/src/transition/on.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-transition/src/transition/remove.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-transition/src/transition/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-transition/src/transition/selectAll.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection.js */ "./node_modules/d3-transition/src/transition/selection.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.js */ "./node_modules/d3-transition/src/transition/style.js");
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styleTween.js */ "./node_modules/d3-transition/src/transition/styleTween.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-transition/src/transition/text.js");
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./textTween.js */ "./node_modules/d3-transition/src/transition/textTween.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/transition/transition.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./end.js */ "./node_modules/d3-transition/src/transition/end.js");






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  selection: _selection_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  transition: _transition_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  tween: _tween_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  delay: _delay_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  duration: _duration_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  ease: _ease_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  easeVarying: _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  end: _end_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/string.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["default"]
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_1__["default"] ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"]
      : (c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__["default"])(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"])(a, b);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Transition(merges, this._parents, this._name, this._id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/on.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__.init : _schedule_js__WEBPACK_IMPORTED_MODULE_0__.set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/remove.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.on("end.remove", removeFunction(this._id));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATED": () => (/* binding */ CREATED),
/* harmony export */   "ENDED": () => (/* binding */ ENDED),
/* harmony export */   "ENDING": () => (/* binding */ ENDING),
/* harmony export */   "RUNNING": () => (/* binding */ RUNNING),
/* harmony export */   "SCHEDULED": () => (/* binding */ SCHEDULED),
/* harmony export */   "STARTED": () => (/* binding */ STARTED),
/* harmony export */   "STARTING": () => (/* binding */ STARTING),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "set": () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timeout.js");



var emptyOn = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["default"])("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0,d3_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selector.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(subgroup[i], name, id, i, subgroup, (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id));
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Transition(subgroups, this._parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selectorAll.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__.Transition(subgroups, parents, name, id);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/index.js");


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.constructor;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new Selection(this._groups, this._parents);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/style.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name),
        string1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__.styleValue)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.set)(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__.interpolateTransformCss : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_4__.tweenValue)(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction((0,_tween_js__WEBPACK_IMPORTED_MODULE_0__.tweenValue)(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/textTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/textTween.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/transition.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var name = this._name,
      id0 = this._id,
      id1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.newId)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__.get)(node, id0);
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__.Transition(groups, this._parents, name, id1);
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/tween.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tweenValue": () => (/* binding */ tweenValue)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.set)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__.get)(node, id).value[name];
  };
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/constant.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-zoom/src/constant.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ "./node_modules/d3-zoom/src/event.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/event.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomEvent)
/* harmony export */ });
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    transform: {value: transform, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoomTransform": () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__.Transform),
/* harmony export */   "zoom": () => (/* reexport safe */ _zoom_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "zoomIdentity": () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__.identity),
/* harmony export */   "zoomTransform": () => (/* reexport safe */ _transform_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom.js */ "./node_modules/d3-zoom/src/zoom.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform.js */ "./node_modules/d3-zoom/src/transform.js");




/***/ }),

/***/ "./node_modules/d3-zoom/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-zoom/src/noevent.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nopropagation": () => (/* binding */ nopropagation)
/* harmony export */ });
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/transform.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-zoom/src/transform.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transform": () => (/* binding */ Transform),
/* harmony export */   "default": () => (/* binding */ transform),
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity;
  return node.__zoom;
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/zoom.js":
/*!******************************************!*\
  !*** ./node_modules/d3-zoom/src/zoom.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-drag */ "./node_modules/d3-drag/src/nodrag.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/pointer.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-zoom/src/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.js */ "./node_modules/d3-zoom/src/event.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform.js */ "./node_modules/d3-zoom/src/transform.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/d3-zoom/src/noevent.js");










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || _transform_js__WEBPACK_IMPORTED_MODULE_3__.identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_5__["default"],
      listeners = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_6__["default"])("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(_transform_js__WEBPACK_IMPORTED_MODULE_3__.identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new _transform_js__WEBPACK_IMPORTED_MODULE_3__.Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this.that).datum();
      listeners.call(
        type,
        this.that,
        new _event_js__WEBPACK_IMPORTED_MODULE_2__["default"](type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
      g.start();
    }

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    (0,d3_drag__WEBPACK_IMPORTED_MODULE_9__["default"])(event.view);
    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
    g.mouse = [p, this.__zoom.invert(p)];
    (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
    g.start();

    function mousemoved(event) {
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      (0,d3_drag__WEBPACK_IMPORTED_MODULE_9__.yesdrag)(event.view, g.moved);
      (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
    if (duration > 0) (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this).transition().duration(duration).call(schedule, t1, p0, event);
    else (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      (0,d3_transition__WEBPACK_IMPORTED_MODULE_0__.interrupt)(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    (0,_noevent_js__WEBPACK_IMPORTED_MODULE_4__.nopropagation)(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__["default"])(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = (0,d3_selection__WEBPACK_IMPORTED_MODULE_7__["default"])(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./admin/src/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.jsx */ "./admin/src/App.jsx");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/main.scss */ "./admin/src/style/main.scss");



/**
 * Import the stylesheet for the plugin.
 */

 // Render the App component into the DOM

(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById("crm-app"));
})();

/******/ })()
;
//# sourceMappingURL=main.js.map