import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteSingleContact } from "../../services/Contact";
import HoverMenu from "../HoverMenu";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Portal from "../Portal";
//import PlusCircleIcon from "../Icons/PlusCircleIcon";

export default function SingleContact(props) {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const menuButtonRef = useRef(null);

  const showMoreOption = () => {
    setActive(!isActive);
  };
  const {
    index,
    contact,
    toggleRefresh,
    currentActive,
    setCurrentActive,
    handleSelectOne,
    selected,
  } = props;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSingleContact(contact.id).then((result) => {
          if (result.status === 200) {
            toggleRefresh();
          }
        });
      }
    });
  };

  const handleUpdate = () => {
    //console.log(contact.id);
    navigate(`/contacts/update/${contact.id}`);
  };

  return (
    <tr>
      <td className="email-wrapper">
        <div className="email">
          <span class="soronmrm-checkbox no-title">
            <input
              type="checkbox"
              name={contact.id}
              id={contact.id}
              onChange={handleSelectOne}
              checked={selected.includes(contact.id)}
            />
            <label for={contact.id}></label>
          </span>

          <Link to={`../contacts/update/${contact.id}`}>{contact.email}</Link>
        </div>
      </td>

      <td className="first-name">{contact.first_name}</td>

      <td className="last-name">{contact.last_name}</td>

      <td className="list">
        {contact.lists.map((list, idx) => {
          return (
            <span className="list-item" key={list.id}>
              {list.title}
            </span>
          );
        })}
      </td>

      <td className="tag">
        {contact.tags.map((tag, idx) => {
          return (
            <span className="tag-item" key={tag.id}>
              {tag.title}
            </span>
          );
        })}
      </td>

      <td className="last-activity">
        {contact.last_activity ? contact.last_activity : "-"}
      </td>

      <td className="status">
        <span className={contact.status}>
          {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
        </span>
      </td>

      <td className="phone-number">
        {contact?.meta_fields?.phone_number
          ? contact?.meta_fields?.phone_number
          : "-"}
      </td>

      <td className="source">{contact.source ? contact.source : "-"}</td>

      <td className="action">
        <button
          className="more-option"
          style={{ background: "white", position: "relative" }}
          onClick={() => {
            setActive((prev) => !prev);
            setCurrentActive(contact.id);
          }}
          ref={menuButtonRef}
        >
          <ThreeDotIcon />
          {currentActive == contact.id && ( // only show the menu if both active and current active points to this listitem
            <Portal>
              <HoverMenu elementRef={menuButtonRef} x={-150} y={-20}>
                <ul
                  className={
                    currentActive == contact.id && isActive
                      ? "soronmrm-dropdown show"
                      : "soronmrm-dropdown"
                  }
                >
                  <li style={{ display: "flex" }} onClick={handleUpdate}>
                    <span> View </span>
                  </li>
                  <li
                    className="delete"
                    onClick={() => {
                      handleDelete();
                    }}
                  >
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
