import React from "react";

export default function ColumnList(props) {
  return (
    <span class="mintmrm-checkbox">
      <input type="checkbox" name={props.name} id={props.id} />
      <label for={props.id}>{props.title}</label>
    </span>
  );
}
