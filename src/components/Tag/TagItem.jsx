import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HoverMenu from "../HoverMenu";
import Delete from "../Icons/Delete";
import EditIcon from "../Icons/EditIcon";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Portal from "../Portal";
import ListenForOutsideClicks from "../ListenForOutsideClicks";

export default function TagItem(props) {
  const navigate = useNavigate();
  // read title and description from list prop
  const { title, created_at, total_contacts, id } = props.list;
  const {
    editList,
    deleteTag,
    setCurrentActive,
    currentActive, // whether to show the overlay menu
    handleSelectOne,
    selected,
  } = props;
  const [listening, setListening] = useState(false);
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

  const menuButtonRef = useRef(null);
  const moreOptionRef = useRef(null);

  useEffect(
    ListenForOutsideClicks(
      listening,
      setListening,
      moreOptionRef,
      setIsActiveDropdown
    )
  );

  return (
    <tr>
      <td>
        <span class="mintmrm-checkbox" title="">
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
      <td className="">{total_contacts}</td>
      <td className="">{new Date(created_at).toDateString()}</td>
      <td ref={moreOptionRef}>
        <button
          className="more-option"
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
            setIsActiveDropdown((prev) => !prev);
          }}
          ref={menuButtonRef}
        >
          <ThreeDotIcon />
          {isActiveDropdown && ( // only show the menu if both active and current active points to this listitem
            <Portal>
              <HoverMenu elementRef={menuButtonRef} x={-10} y={-20}>
                <ul
                  className={
                    isActiveDropdown // only show the menu if both active and current active points to this listitem
                      ? "mintmrm-dropdown show"
                      : "mintmrm-dropdown"
                  }
                >
                  <li
                    onClick={() => {
                      editList(props.list);
                    }}
                  >
                    <EditIcon />
                    Edit
                  </li>
                  <li onClick={() => deleteTag(id)}>
                    <Delete />
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
