import React, { useState } from "react";
import { Steps, Stack, TagPicker } from "rsuite";
import "../App.css";
import ImportFromCSV from "../components/ImportFromCSV";
import ImportFromWP from "../components/ImportFromWP";
import ImportMap from "../components/ImportMap";

const ImportContacts = () => {
  const [current, setCurrent] = useState(0);
  const [contactAttrs, setContactAttrs] = useState([]);
  const [csvAttrs, setCSVAttrs] = useState([]);
  const [sourceComplete, setSourceComplete] = useState(false);
  const [source, setSource] = useState("");
  const totalSteps = 3;
  const goToNextStep = () => {
    setCurrent((prev) => (prev + 1) % totalSteps);
  };
  const goToPrevStep = () => {
    setCurrent((prev) => (prev - 1 < 0 ? totalSteps - 1 : prev - 1));
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

      {current == 1 && (
        <>
          <ImportMap
            contactAttrs={contactAttrs}
            setContactAttrs={setContactAttrs}
            csvAttrs={csvAttrs}
            setCSVAttrs={setCSVAttrs}
            goToNextStep={goToNextStep}
            goToPrevStep={goToPrevStep}
          />
        </>
      )}
    </>
  );
};

export default ImportContacts;
