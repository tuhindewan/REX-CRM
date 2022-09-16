import React from "react";
import { ReactFlowProvider } from "react-flow-renderer";
import { HashRouter, Route, Routes } from "react-router-dom";
import CustomSelect from "./components/CustomSelect";
import Header from "./components/Navbar/";
import routes from "./routes/index.js";

import { useState } from "react";
import LoadingIndicator from "./components/LoadingIndicator";

const App = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  return (
    <div className="mintmrm">
      <ReactFlowProvider>
        <HashRouter>
          <>
            <Header />
            <CustomSelect
              active={active}
              setActive={setActive}
              selected={selected}
              setSelected={setSelected}
            />
            <LoadingIndicator />

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
