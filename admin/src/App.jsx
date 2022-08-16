import React from "react";
import Dashboard from "./components/Dashboard.jsx";
// import 'react-flow-renderer/dist/style.css';
import { ReactFlowProvider } from "react-flow-renderer";

const App = () => {
  return (
    <div>
      <h2 className="app-title">CRM Canvas</h2>
      <hr />
      <ReactFlowProvider>
        <Dashboard />
      </ReactFlowProvider>
    </div>
  );
};

export default App;
