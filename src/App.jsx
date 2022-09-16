import React from "react";
import { ReactFlowProvider } from "react-flow-renderer";
import { HashRouter, Route, Routes } from "react-router-dom";
import CustomSelect from "./components/CustomSelect";
import Header from "./components/Navbar/";
import { useGlobalStore } from "./hooks/useGlobalStore";
import routes from "./routes/index.js";

const App = () => {
  return (
    <div
      className="mintmrm"
      onClick={() => {
        console.log("click");
        useGlobalStore.setState({
          hideAllCustomSelect: true,
        });
      }}
    >
      <ReactFlowProvider>
        <HashRouter>
          <>
            <Header />
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </>
        </HashRouter>
      </ReactFlowProvider>
    </div>
  );
};

export default App;
