import React, { useState } from "react";
import { Steps, Stack } from "rsuite";
import "../App.css";
import ImportFromCSV from "../components/ImportFromCSV";
import ImportFromWP from "../components/ImportFromWP";

const ImportContacts = () => {
  const [current, setCurrent] = useState(0);
  const [source, setSource] = useState("");
  return (
    <>
      <div className="mrm-spacing">
        <Steps current={current}>
          <Steps.Item title="Source" />
          <Steps.Item title="Map" />
          <Steps.Item title="Done" />
        </Steps>
      </div>
      <div className="mrm-spacing">
        <Stack
          spacing={10}
          justifyContent="center"
          alignItems="center"
          style={{ margin: 10 }}
        >
          <div
            className={`mrm-card ${source == "csv" ? "mrm-card-active" : ""}`}
            onClick={() => setSource("csv")}
          >
            Import from CSV
          </div>
          <div
            className={`mrm-card ${source == "wp" ? "mrm-card-active" : ""}`}
            onClick={() => setSource("wp")}
          >
            Import from WP
          </div>
        </Stack>
      </div>
      <div className="mrm-spacing">
        {source == "csv" && <ImportFromCSV />}
        {source == "wp" && <ImportFromWP />}
      </div>
    </>
  );
};

export default ImportContacts;
