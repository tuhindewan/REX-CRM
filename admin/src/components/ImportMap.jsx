import React, { useState, useEffect } from "react";
import {
  SelectPicker,
  Stack,
  Button,
  TagPicker,
  Notification,
  useToaster,
} from "rsuite";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";
import BasePicker from "../components/BasePicker.jsx";
import config from "../config.js";

import axios from "axios";
const ImportMap = (props) => {
  const { csvAttrs, contactAttrs, goToNextStep, goToPrevStep } = props;
  const csvSelectData = csvAttrs.map((item) => ({ label: item, value: item }));
  const statusData = ["pending", "subscribed", "unsubscribed", "bounced"].map(
    (data) => ({ label: data.toUpperCase(), value: data })
  );
  const contactSelectData = contactAttrs.map((item) => ({
    label: item,
    value: item,
  }));
  const toaster = useToaster();
  const [mappings, setMappings] = useState(() => {
    return contactAttrs.map((item) => ({ source: "", target: item }));
  });
  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState([]);
  const [tags, setTags] = useState([]);

  // default value should be "pending" for contact status
  const [status, setStatus] = useState("pending");

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

  const importContacts = async () => {
    const requestBody = {
      map: mappings,
      lists,
      tags,
      status: status,
    };
    setLoading(true);
    const res = await axios.post(
      `${config.baseURL}/contacts/import`,
      requestBody,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const resJson = res.data;
    console.log(resJson);
    const code = resJson.code;
    if (code == 200) {
      toaster.push(
        <Notification closable type="success" header="success" duration={2000}>
          Import Contacts Successfull
        </Notification>,
        {
          placement: "bottomEnd",
        }
      );
    }
    setLoading(false);
  };
  const styles = { width: 270, display: "block" };
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
              style={styles}
              label="CSV"
              data={csvSelectData}
              value={mappings[index]["source"]}
              onChange={(value) => handleAttrChange("source", value, index)}
            />
            <SelectPicker
              style={styles}
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
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <SelectPicker
          styles={styles}
          menuAutoWidth
          data={statusData}
          label="Status"
          name="status"
          defaultValue="pending"
          value={status}
          onChange={setStatus}
        />
        <BasePicker endpoint="/lists" data={lists} setData={setLists} />
        <BasePicker endpoint="/tags" data={tags} setData={setTags} />
      </Stack>

      <Stack
        spacing={10}
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: 100 }}
      >
        <Button appearance="primary" onClick={goToPrevStep}>
          Previous
        </Button>
        <Button appearance="primary" onClick={importContacts} loading={loading}>
          Import
        </Button>
      </Stack>
    </div>
  );
};

export default ImportMap;
