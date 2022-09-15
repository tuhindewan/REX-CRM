import React from "react";

export default function ColumnItems(props) {
  return (
    <span class="soronmrm-checkbox">
      <input type="checkbox" name={props.name} id={props.id} />
      <label for={props.id}>{props.title}</label>
    </span>
  );
}