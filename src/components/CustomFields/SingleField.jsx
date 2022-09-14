import React, { useRef } from "react";
import ThreeDotIcon from "../Icons/ThreeDotIcon";

export default function SingleField(props) {
  // read title and description from list prop
  const { title, id } = props.field;
  const {
    editField,
    deleteField,
    setCurrentActive,
    currentActive, // whether to show the overlay menu
    handleSelectOne,
    selected,
  } = props;

  const menuButtonRef = useRef(null);
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
      <td className=""></td>
      <td className=""></td>
      <td>
        <button
          className="more-option"
          style={{ background: "white", position: "relative" }}
          onClick={() => {
            setCurrentActive((prevActive) => {
              // if current list item is already active then hide the overlay menu by setting current active to 0
              if (prevActive == id) {
                return 0;
              } else {
                // show current active as ususal
                return id;
              }
            });
          }}
          ref={menuButtonRef}
        >
          <ThreeDotIcon />
          {currentActive == id && ( // only show the menu if both active and current active points to this listitem
            <Portal>
              <HoverMenu elementRef={menuButtonRef} x={-150} y={-20}>
                <ul
                  className={
                    currentActive == id // only show the menu if both active and current active points to this listitem
                      ? "soronmrm-dropdown show"
                      : "soronmrm-dropdown"
                  }
                >
                  <li
                    onClick={() => {
                      editField(props.field);
                    }}
                  >
                    {" "}
                    Edit
                  </li>
                  <li className="delete" onClick={() => deleteField(id)}>
                    Delete
                  </li>
                </ul>
              </HoverMenu>
            </Portal>
          )}
        </button>
      </td>
    </tr>
  );
}
