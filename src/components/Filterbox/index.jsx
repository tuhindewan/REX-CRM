import $ from "jquery";
import React, { useEffect } from "react";

import "./style.css";

export default function FilterBox(props) {
  const { value } = props;
  useEffect(() => {
    // Init select2
    let element = $(".mintmrm-" + props.name + "-selectbox");
    element
      .select2({
        dropdownParent: $("." + props.name + "-select2-result"),
        placeholder: props.placeholder,
        value: props.value,
        tags: props.tags,
      })
      .val(value)
      .trigger("change");

    element.on("select2:select", function (e) {
      props.onSelect(e, props.name);
    });
  }, [value]);

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
          value={props.value}
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
      </div>
    </>
  );
}
