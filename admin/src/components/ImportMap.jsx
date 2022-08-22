import React, { useState, useEffect } from "react";
import { SelectPicker, Stack, Button, TagPicker } from "rsuite";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";

import axios from "axios";
const ImportMap = (props) => {
  const { csvAttrs, contactAttrs, goToNextStep, goToPrevStep } = props;
  const csvSelectData = csvAttrs.map((item) => ({ label: item, value: item }));
  const contactSelectData = contactAttrs.map((item) => ({
    label: item,
    value: item,
  }));
  const [mappings, setMappings] = useState(() => {
    return contactAttrs.map((item) => ({ source: "", target: item }));
  });

  

  const addField = () => {
    setMappings((prevMappings) => {
      return [
        ...prevMappings,
        {
          source: "",
          target: "",
        },
      ];
    });
  };
  const removeField = (index) => {
    setMappings((prevMappings) => {
      prevMappings = [...prevMappings];
      prevMappings.splice(index, 1);
      return prevMappings;
    });
  };

  const handleAttrChange = (type, value, index) => {
    setMappings((prevMappings) => {
      prevMappings = [...prevMappings];
      prevMappings[index][type] = value;
      return prevMappings;
    });
  };

  return (
    <div>
      {mappings.map(({ source, target }, index) => {
        return (
          <Stack
            spacing={10}
            justifyContent="center"
            alignItems="center"
            style={{ margin: 10 }}
            key={index}
          >
            <SelectPicker
              style={{ width: 270, display: "block" }}
              label="CSV"
              data={csvSelectData}
              value={mappings[index]["source"]}
              onChange={(value) => handleAttrChange("source", value, index)}
            />
            <SelectPicker
              style={{ width: 270, display: "block" }}
              label="Contact"
              data={contactSelectData}
              value={mappings[index]["target"]}
              onChange={(value) => handleAttrChange("target", value, index)}
            />
            <Button appearance="primary" onClick={addField}>
              Add
            </Button>
            <Button color="red" onClick={() => removeField(index)}>
              Remove
            </Button>
          </Stack>
        );
      })}

      <Stack
        spacing={10}
        justifyContent="space-evenly"
        alignItems="center"
        style={{ marginTop: 100 }}
      >
        
      </Stack>
      <Stack
        spacing={10}
        justifyContent="flex-end"
        alignItems="center"
        style={{ marginTop: 100 }}
      >
        <Button appearance="primary" onClick={goToPrevStep}>
          Previous
        </Button>
        <Button appearance="primary" onClick={goToNextStep}>
          Next
        </Button>
      </Stack>
    </div>
  );
};

export default ImportMap;
