import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HoverMenu from "../HoverMenu";
import CompletedCampaignIcon from "../Icons/CompletedCampaignIcon";
import DraftCampaignIcon from "../Icons/DraftCampaignIcon";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Portal from "../Portal";

export default function SingleCampaign(props) {
  const menuButtonRef = useRef(null);

  return (
    <div className="table-row">
      <div className="table-data email-wrapper campaign-name-wrapper">
        <div className="email campaign-name">
          <span class="mintmrm-checkbox no-title">
            <input
              type="checkbox"
              name={props.campaign.id}
              id={props.campaign.id}
              onChange={props.handleSelectOne}
              checked={props.selected.includes(props.campaign.id)}
            />
            <label for={props.campaign.id}></label>
          </span>
          {props.campaign.status == "draft" ? (
            <DraftCampaignIcon />
          ) : (
            <CompletedCampaignIcon />
          )}
          <div className="title">
            {" "}
            <Link to={`../campaign/edit/${props.campaign.id}`}>
              {props.campaign.title}
            </Link>{" "}
            <span>2 days ago</span>
          </div>
        </div>
      </div>

      {/* 
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
                  <li
                    className="delete"
                    onClick={() => props.deleteCampaign(props.campaign.id)}
                  >
                    Delete
                  </li>
                </ul>
              </HoverMenu>
            </Portal>
          )}
        </button>
      </td> */}

      <div className="table-data recipient">-</div>
      <div className="table-data open-rate">-</div>
      <div className="table-data click-rate">-</div>
      <div className="table-data unsubscribers">-</div>
      <div className="table-data status">
        <span className="draft">{props.campaign.status}</span>
      </div>
      <div>
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
                  <li
                    className="delete"
                    onClick={() => props.deleteCampaign(props.campaign.id)}
                  >
                    Delete
                  </li>
                </ul>
              </HoverMenu>
            </Portal>
          )}
        </button>
      </div>
      {/* <div className="three-dot">
        <ThreeDotIcon />
      </div> */}
    </div>
  );
}
