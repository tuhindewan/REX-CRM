import React, { useState } from "react";
import "../App.css";
import { Uploader, Button } from "rsuite";

const ImportFromCSV = (props) => {
  const [loading, setLoading] = useState(false);
  const {
    contactAttrs,
    setContactAttrs,
    csvAttrs,
    setCSVAttrs,
    sourceComplete,
    setSourceComplete,
    goToNextStep,
  } = props;
  return (
    <div className="mrm-spacing">
      <Uploader
        style={{
          width: "100%",
          height: "200px",
        }}
        action="/wp-json/mrm/v1/contacts/import/attrs"
        shouldQueueUpdate={(fileList) => {
          setLoading(true);
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(
                "The file is checked and allowed to be added to the queue"
              );
              resolve(true);
            }, 100);
          });
        }}
        shouldUpload={(file) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log("File check passed, run upload");
              resolve(true);
              setLoading(false);
            }, 100);
          });
        }}
        onError={(error, file) => {
          console.log(error);
        }}
        onSuccess={(response, file) => {
          if (response.code == 200) {
            setCSVAttrs(response.data.csv);
            setContactAttrs(response.data.contact);
            goToNextStep();
          }
        }}
        draggable
      >
        <Button loading={loading}>Drag or Click here to Upload CSV</Button>
      </Uploader>
    </div>
  );
};

export default ImportFromCSV;
