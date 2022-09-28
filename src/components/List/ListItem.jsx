import React, { useRef } from "react";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Portal from "../Portal";
import HoverMenu from "../HoverMenu";
import { useNavigate } from "react-router-dom";

export default function ListItem(props) {
  const navigate = useNavigate();
  // read title and description from list prop
  const { title, data, created_at, total_contacts, id } = props.list;
  const {
    editList,
    deleteList,
    setCurrentActive,
    currentActive, // whether to show the overlay menu
    handleSelectOne,
    selected,
  } = props;
  const menuButtonRef = useRef(null);

  const handleHref = async (event) => {
    event.preventDefault();
    
    navigate(`/contacts?list=${id}`, {
      state: { list_id: id },
    });
  }

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
      <td className=""><a href="" onClick={handleHref} >{total_contacts}</a></td>
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
              if (prevActive == id) {
                return 0;
              } else {
                // show current active as ususal
                return id;
              }
            });
          }}
          ref={menuButtonRef} // we need to add ref to menu button in order to correctly position the hovermenu
        >
          <ThreeDotIcon />
          {currentActive == id && ( // only show the menu if both active and current active points to this listitem
            <Portal>
              <HoverMenu elementRef={menuButtonRef} x={-150} y={-20}>
                <ul
                  className={
                    currentActive == id // only show the menu  current active points to this listitem id
                      ? "mintmrm-dropdown show"
                      : "mintmrm-dropdown"
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
              </HoverMenu>
            </Portal>
          )}
        </button>
      </td>
    </tr>
  );
}
