import { useState } from "react";
import { ReactFlowProvider } from "react-flow-renderer";
import { HashRouter, Route, Routes } from "react-router-dom";
import CustomSelect from "./components/CustomSelect";
import Header from "./components/Navbar/";
import { useGlobalStore } from "./hooks/useGlobalStore";
import routes from "./routes/index.js";

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
            <Header />
            <CustomSelect
              selected={selectedTags}
              setSelected={setSelectedTags}
              endpoint="/tags"
              placeholder="Tags"
              name="tag"
              listTitle="Select Tags"
              listTitleOnNotFound="No Data Found"
              searchPlaceHolder="Search..."
              allowMultiple={false}
              showSearchBar={false}
              showListTitle={false}
              showSelectedInside={false}
              allowNewCreate={false}
            />
            <CustomSelect
              selected={selectedStatus}
              setSelected={setSelectedStatus}
              placeholder="Status"
              name="tag"
              options={[
                {
                  id: "pending",
                  title: "Pending",
                },
                {
                  id: "subscribed",
                  title: "Subscribed",
                },
              ]}
              listTitle="Select Tags"
              listTitleOnNotFound="No Data Found"
              searchPlaceHolder="Search..."
              allowMultiple={true}
              showSearchBar={false}
              showListTitle={false}
              showSelectedInside={false}
              allowNewCreate={false}
            />
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
