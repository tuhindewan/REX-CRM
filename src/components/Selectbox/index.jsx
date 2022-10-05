import $ from "jquery";
import React, { useEffect, useState } from "react";
import "select2";

import "./style.css";

export default function Selectbox(props) {
  const [myValue, setMyValue] = useState("");
  // const [selected, setSelected] = useState("false");
  // const selected = optionState === option.value ? "selected" : "false";
  useEffect(() => {
    setMyValue(props.value);
    // Init select2
    let element = $(".mintmrm-" + props.name + "-selectbox");
    element.css('color', 'red')
    element.select2({
      dropdownParent: $("." + props.name + "-select2-result"),
      placeholder: props.placeholder,
      tags: props.tags,
    });

    element.on("select2:select", function (e) {
      props.onSelect(e, props.name, props.arg1); // here arg1 is any extra information that is passed to the calling component
    });

    element.on("select2:unselect", function (e) {
      props.onRemove(e, props.name);
    });
  }, []);

  return (
    <>
      <div
        className={
          "form-group mintmrm-select2-selectbox " + props.name + "-selectbox"
        }
      >
        {props.label && <label>{props.label}</label>}
        <select
          name={props.name}
          className={"mintmrm-" + props.name + "-selectbox"}
          multiple={props.multiple}
          data-placeholder={props.placeholder}
          defaultValue={myValue}
        >
          <option></option>
          {props.options.map((option, key) => (
            <option key={key} value={option.id}>
              {option.title}
            </option>
          ))}
        </select>
        <div
          className={"select2-result " + props.name + "-select2-result"}
        ></div>
        <p className="error-message">{props?.error}</p>
      </div>
    </>
  );
}
