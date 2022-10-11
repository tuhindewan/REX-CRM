import React from "react";

export default function ColumnList(props) {
  return (
    <span class="mintmrm-checkbox">
      <input type="checkbox" name={props.id} id={props.id} />
      <label for={props.id}>{props.title}</label>
    </span>
  );
}
