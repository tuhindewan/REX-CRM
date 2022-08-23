import axios from "axios";
import React, { useState, useEffect } from "react";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";
import { TagPicker } from "rsuite";
import config from "../config";

const BasePicker = (props) => {
  const { endpoint = "/tags", data, setData } = props;
  const plural = endpoint.replace("/", "");
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState([]);
  const [cache, setCache] = useState([]);
  const handleSelect = (value, item, event) => {
    let obj = {};
    obj.title = item.title;
    obj.slug = item.slug;
    if (item.create) {
      obj.id = 0;
    } else {
      obj.id = item.id;
    }
    console.log(value);
    setCache([...cache, item]);
    setData((prev) => {
        if(prev.find((dataItem) => dataItem.slug == item.slug) != undefined ) {
            // already exists
            return prev;
        } else {
            const newArr = [...prev, obj];
            console.log(newArr);
            return newArr;
        }

    });
  };

  function gatherData(value) {
    console.log(value);
    setLoading(true);
    const res = axios
      .get(`${config.baseURL}${endpoint}?search=${value}`)
      .then((res) => {
        const resJson = res.data;
        const data = resJson.data.data;
        setFetchedData(data);
        setLoading(false);
      });
  }
  return (
    <div>
      <TagPicker
        data={fetchedData}
        value={value}
        cacheData={cache}
        style={{ width: 300 }}
        labelKey="title"
        block
        creatable
        valueKey="slug"
        onChange={setValue}
        onSearch={(value) => gatherData(value)}
        onSelect={handleSelect}
        placeholder={`Select ${plural}`}
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
  );
};

export default BasePicker;
