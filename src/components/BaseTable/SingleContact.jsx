import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import { deleteSingleContact } from "../../services/Contact";
import DeletePopup from "../DeletePopup";
import HoverMenu from "../HoverMenu";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Portal from "../Portal";
import EyeIcon from "../Icons/EyeIcon";
import Delete from "../Icons/Delete";

export default function SingleContact(props) {
  // global counter update real time
  const counterRefresh = useGlobalStore((state) => state.counterRefresh);
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const menuButtonRef = useRef(null);
  const [isDelete, setIsDelete] = useState("none");
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

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
    setIsDelete("block");
    setDeleteTitle("Delete Contact");
    setDeleteMessage("Are you sure you want to delete the contact?");
  };

  // Delete contact after delete confirmation
  const onDeleteStatus = async (status) => {
    if (status) {
      deleteSingleContact(contact.id).then((result) => {
        if (200 === result.code) {
          toggleRefresh();
          navigate("../contacts", {
            state: {
              status: "contact-created",
              message: result?.message,
            },
          });
        }
      });
    }
    setIsDelete("none");
  };

  // Hide delete popup after click on cancel
  const onDeleteShow = async (status) => {
    setIsDelete(status);
  };

  const handleUpdate = () => {
    navigate(`/contacts/update/${contact.id}`);
  };

  return (
    <>
      <tr>
        <td className="email-wrapper">
          <div className="email">
            <span class="mintmrm-checkbox no-title">
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

        <td className="first-name">{contact.first_name ? contact.first_name : "-"}</td>

        <td className="last-name">{contact.last_name ? contact.last_name : "-"}</td>

        {props.columns.map((column) => {
          
          if(column.id == "lists"){
            return (
              <td className="list" key={column.id}>
                {contact.lists.length > 0 ? contact.lists.map((list) => {
                  return (
                    <span className="list-item" key={list.id}>
                      {list.title}
                    </span>
                  );
                }) : "-"}
              </td>
            );
          }

          if(column.id == "tags"){
            return (
              <td className="tag" key={column.id}>
                {contact.tags.length > 0 ? contact.tags.map((tag) => {
                  return (
                    <span className="tag-item" key={tag.id}>
                      {tag.title}
                    </span>
                  );
                }) : "-"}
              </td>
            );
          }

          if(column.id == "status"){
            return (
              <td className="status" key={column.id}>
                <span className={contact.status}>
                  {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                </span>
              </td>
            );
          }

          if(column.id == "last_activity"){
            return (
              <td className="last-activity" key={column.id}>
                {contact.last_activity ? contact.last_activity : "-"}
              </td>
            );
          }

          if(column.id == "source"){
            return (
              <td className="source" key={column.id}>
                <td className="source">{contact.source ? contact.source : "-"}</td>
              </td>
            );
          }
          
          if(column.id in Object.assign({}, contact?.meta_fields)){
            return (
              <td className={column.id} key={column.id}>
                {contact?.meta_fields?.[column.id]
                  ? contact?.meta_fields?.[column.id]
                  : "-"}
              </td>
            );
          }else{
            return(
              <td className={column.id} key={column.id}>
                 -
              </td>
            )
          }
                  
        })}

        <td className="action">
          <button
            className="more-option"
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
                        ? "mintmrm-dropdown show"
                        : "mintmrm-dropdown"
                    }
                  >
                    <li
                      className="action-list"
                      onClick={handleUpdate}
                    >
                      <EyeIcon />
                      View
                    </li>
                    <li
                      className="action-list"
                      onClick={() => {
                        handleDelete();
                      }}
                    >
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
      <div className="mintmrm-container" style={{ display: isDelete }}>
        <DeletePopup
          title={deleteTitle}
          message={deleteMessage}
          onDeleteShow={onDeleteShow}
          onDeleteStatus={onDeleteStatus}
        />
      </div>
    </>
  );
}
