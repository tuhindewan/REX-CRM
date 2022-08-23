import React from "react";
import "react-flow-renderer/dist/style.css";
import { ReactFlowProvider } from "react-flow-renderer";
import { HashRouter, Routes, Route, useSearchParams } from "react-router-dom";
import routes from "./routes/index.js";
import NavLinks from "./components/NavLinks.jsx";
import { stringify, parse } from "qs";

const App = () => {
  
  return (
    <div>
      <h2 className="app-title">MRM App</h2>
      <hr />
      <ReactFlowProvider>
        <HashRouter>
          <>
            <NavLinks />
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
