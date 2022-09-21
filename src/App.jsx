import { useState } from "react";
import { ReactFlowProvider } from "react-flow-renderer";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/";
import routes from "./routes/index.js";
import { useGlobalStore } from "./hooks/useGlobalStore";

const App = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  return (
    <div
      className="mintmrm"
      onClick={() => {
        useGlobalStore.setState({
          hideAllCustomSelect: true,
        });
      }}
    >
      <ReactFlowProvider>
        <HashRouter>
          <>
            <Navbar />

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
        {/* <div className="mintmrm-container">
          <DeletePopup/>
        </div>
        <SuccessfulNotification/> */}
      </ReactFlowProvider>
    </div>
  );
};

export default App;
