import React, { useState } from "react";
import ThreeDotIcon from "../Icons/ThreeDotIcon";

export default function ListItem(props) {
  // read title and description from list prop
  const { title, data, created_at, id } = props.list;
  const {
    editList,
    deleteList,
    setCurrentActive,
    currentActive, // whether to show the overlay menu
    handleSelectOne,
    selected,
  } = props;


  return (
    <tr>
      <td>
        <span class="soronmrm-checkbox" title="">
          <input
            type="checkbox"
            name={id}
            id={id}
            onChange={handleSelectOne}
            checked={selected.includes(id)}
          />
          <label for={id}>{title}</label>
        </span>
      </td>
      <td className="">
        {data?.length > 20 ? data.substring(0, 20) + "..." : data}
      </td>
      <td className="">{created_at}</td>
      <td>
        <button
          className="more-option"
          style={{ background: "white", position: "relative" }}
          onClick={() => {
            setCurrentActive((prevActive) => {
                // if current list item is already active then hide the overlay menu by setting current active to 0
                if(prevActive == id) {
                    return 0;
                } else { // show current active as ususal
                    return id;
                }
            });
          }}
        >
          <ThreeDotIcon />

          <ul
            className={
              currentActive == id // only show the menu if both active and current active points to this listitem
                ? "soronmrm-dropdown show"
                : "soronmrm-dropdown"
            }
          >
            <li
              onClick={() => {
                editList(props.list);
              }}
            >
              {" "}
              Edit
            </li>
            <li className="delete" onClick={() => deleteList(id)}>
              Delete
            </li>
          </ul>
        </button>
      </td>
    </tr>
  );
}
