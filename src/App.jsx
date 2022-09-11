import React from "react";
import { ReactFlowProvider } from "react-flow-renderer";
import { HashRouter, Route, Routes } from "react-router-dom";
import routes from "./routes/index.js";
// import NavLinks from "./components/NavLinks.jsx";
import Header from "./components/Navbar/";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <div className="soronmrm">
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
