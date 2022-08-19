import React, { useState } from "react";
import { Steps, Stack, TagPicker } from "rsuite";
import "../App.css";
import ImportFromCSV from "../components/ImportFromCSV";
import ImportFromWP from "../components/ImportFromWP";
import ImportMap from "../components/ImportMap";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";
import axios from "axios";

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

  const [listData, setListData] = useState([]);
  const [tagData, setTagData] = useState([]);
  const [lists, setLists] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listValue, setListValue] = useState([]);
  const [tagValue, setTagValue] = useState([]);
  const [listCache, setListCache] = useState([]);
  const [tagCache, setTagCache] = useState([]);
  const handleTagSelect = (value, item, event) => {
    let obj = {};
    obj.title = item.title;
    obj.slug = item.slug;
    if (item.create) {
      obj.id = 0;
    } else {
      obj.id = item.id;
    }
    setTags((prev) => {
      const newArr = [...prev, obj];
      console.log(newArr);
      return newArr;
    });
    setTagCache([...tagCache, item]);
  };

  const handleListSelect = (value, item, event) => {
    setListCache([...listCache, item]);
  };

  function gatherData(endpoint, value, callback) {
    setLoading(true);
    const res = axios
      .get(`/wp-json/mrm/v1/${endpoint}?search=${value}`)
      .then((res) => {
        const resJson = res.data;
        const data = resJson.data.data;
        setLoading(false);
        callback(data);
      });
  }
  return (
    <>
      <div className="mrm-spacing">
        <Steps current={current}>
          <Steps.Item title="Source" />
          <Steps.Item title="Map" />
          <Steps.Item title="Done" />
        </Steps>
      </div>
      <div>
        <TagPicker
          data={listData}
          value={listValue}
          cacheData={listCache}
          style={{ width: 300, padding: 10 }}
          labelKey="title"
          block
          valueKey="slug"
          onChange={setListValue}
          onSearch={(value) => gatherData("lists", value, setListData)}
          onSelect={handleListSelect}
          placeholder="Select Lists"
          renderMenu={(menu) => {
            if (loading) {
              return (
                <p style={{ padding: 4, color: "#999", textAlign: "center" }}>
                  <SpinnerIcon spin /> Loading...
                </p>
              );
            }
            return menu;
          }}
        />
        <TagPicker
          data={tagData}
          value={tagValue}
          cacheData={tagCache}
          style={{ width: 300 }}
          labelKey="title"
          valueKey="slug"
          block
          onChange={setTagValue}
          onSearch={(value) => gatherData("tags", value, setTagData)}
          onSelect={handleTagSelect}
          placeholder="Select Tags"
          renderMenu={(menu) => {
            if (loading) {
              return (
                <p style={{ padding: 4, color: "#999", textAlign: "center" }}>
                  <SpinnerIcon spin /> Loading...
                </p>
              );
            }
            return menu;
          }}
        />
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
