import $ from "jquery";
import React, { useEffect, useState } from "react";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import "./style.css";

export default function Selectbox(props) {
  const [options, setOptions] = useState([]);

  const jQuerycode = () => {
    if (props.index) {
      $(".soronmrm-" + props.index + "-selectbox").select2({
        dropdownParent: $("." + props.index + "-select2-result"),
        placeholder: props.placeholder,
        tags: props.tags,
      });
    }
  };

  useEffect(() => {
    jQuerycode();

    // Get lists
    if ("lists" == props.index) {
      getLists().then((results) => {
        setOptions(results.data);
      });
    }

    // Get tags
    if ("tags" == props.index) {
      getTags().then((results) => {
        setOptions(results.data);
      });
    }

    // Options for status select
    if (!props.index) {
      let status_options = [
        {
          name: "Pending",
          value: "pending",
        },
        {
          name: "Subscribed",
          value: "subscribed",
        },
        {
          name: "Unsubscribed",
          value: "unsubscribed",
        },
      ];
      setOptions(status_options);
    }
  }, []);

  return (
    <>
      {props.index && (
        <div
          className={
            "form-group soronmrm-select2-selectbox " +
            props.index +
            "-selectbox"
          }
        >
          <label>{props.label}</label>

          <select
            className={"soronmrm-" + props.index + "-selectbox"}
            name={props.name}
            onChange={props.handleChange}
          >
            {options.map((option) => (
              <option key={option.slug} value={option.id}>
                {option.title}
              </option>
            ))}
          </select>

          <div
            className={"select2-result " + props.index + "-select2-result"}
          ></div>
        </div>
      )}

      {!props.index && (
        <div className="form-group">
          <label>{props.label}</label>
          <select name={props.name} onChange={props.handleChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}
