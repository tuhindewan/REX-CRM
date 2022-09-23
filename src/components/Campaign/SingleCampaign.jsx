import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Portal from "../Portal";
import HoverMenu from "../HoverMenu";

export default function SingleCampaign(props) {
  const menuButtonRef = useRef(null);
  
  return (
    <tr>
      <td className="email-wrapper campaign-name-wrapper">
        <div className="email campaign-name">
          <span class="mintmrm-checkbox no-title">
            <input
              type="checkbox"
              name={props.campaign.id}
              id={props.campaign.id}
            />
            <label for={props.campaign.id}></label>
          </span>
          <h6 className="title">
            {" "}
            <Link to={`../campaign/edit/${props.campaign.id}`}>
              {props.campaign.title}
            </Link>{" "}
          </h6>
        </div>
      </td>

      <td className="status">{props.campaign.status}</td>
      <td>
        <button
          className="more-option"
          style={{ background: "white", position: "relative" }}
          onClick={() => {
            props.setCurrentActive((prevActive) => {
              // if current list item is already active then hide the overlay menu by setting current active to 0
              if (prevActive == props.campaign.id) {
                return 0;
              } else {
                // show current active as ususal
                return props.campaign.id;
              }
            });
          }}
          ref={menuButtonRef}
        >
          <ThreeDotIcon />
          {props.currentActive == props.campaign.id && ( // only show the menu if both active and current active points to this listitem
            <Portal>
              <HoverMenu elementRef={menuButtonRef} x={-150} y={-20}>
                <ul
                  className={
                    props.currentActive == props.campaign.id // only show the menu if both active and current active points to this listitem
                      ? "mintmrm-dropdown show"
                      : "mintmrm-dropdown"
                  }
                >
                  <li
                    onClick={() => {
                      props.editField(props.campaign);
                    }}
                  >
                    {" "}
                    Edit
                  </li>
                  <li className="delete" onClick={() => props.deleteCampaign(props.campaign.id)}>
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
