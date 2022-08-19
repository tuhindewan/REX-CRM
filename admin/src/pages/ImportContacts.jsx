import React, { useState } from "react";
import { Steps, Stack } from "rsuite";
import "../App.css";
import ImportFromCSV from "../components/ImportFromCSV";
import ImportFromWP from "../components/ImportFromWP";

const ImportContacts = () => {
  const [current, setCurrent] = useState(0);
  const [contactAttrs, setContactAttrs] = useState([]);
  const [csvAttrs, setCSVAttrs] = useState([]);
  const [sourceComplete, setSourceComplete] = useState(false);
  const [source, setSource] = useState("");
  const goToNextStep = () => {
    setCurrent((prev) => (prev + 1) % 3);
  };
  return (
    <>
      <div className="mrm-spacing">
        <Steps current={current}>
          <Steps.Item title="Source" />
          <Steps.Item title="Map" />
          <Steps.Item title="Done" />
        </Steps>
      </div>
      {current == 0 && (
        <>
          <div className="mrm-spacing">
            <div>How would you like to import your contacts?</div>
            <Stack
              spacing={10}
              justifyContent="center"
              alignItems="center"
              style={{ margin: 10 }}
            >
              <div
                className={`mrm-card ${
                  source == "csv" ? "mrm-card-active" : ""
                }`}
                onClick={() => setSource("csv")}
              >
                Import from CSV
              </div>
              <div
                className={`mrm-card ${
                  source == "wp" ? "mrm-card-active" : ""
                }`}
                onClick={() => setSource("wp")}
              >
                Import from WP
              </div>
            </Stack>
          </div>
          <div className="mrm-spacing">
            {source == "csv" && (
              <ImportFromCSV
                contactAttrs={contactAttrs}
                setContactAttrs={setContactAttrs}
                csvAttrs={csvAttrs}
                setCSVAttrs={setCSVAttrs}
                sourceComplete={sourceComplete}
                setSourceComplete={setSourceComplete}
                goToNextStep={goToNextStep}
              />
            )}
            {source == "wp" && <ImportFromWP />}
          </div>
        </>
      )}

      {current == 1 && <></>}
    </>
  );
};

export default ImportContacts;
