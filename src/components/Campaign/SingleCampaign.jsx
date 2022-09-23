import React from "react";
import { Link } from "react-router-dom";
//import ThreeDotIcon from "../Icons/ThreeDotIcon";
import CompletedCampaignIcon from "../Icons/CompletedCampaignIcon";
import DraftCampaignIcon from "../Icons/DraftCampaignIcon";
import ThreeDotIcon from "../Icons/ThreeDotIcon";

export default function SingleCampaign(props) {
  return (
    <div className="table-row">
      <div className="table-data email-wrapper campaign-name-wrapper">
        <div className="email campaign-name">
          <span class="mintmrm-checkbox no-title">
            <input
              type="checkbox"
              name={props.campaign.id}
              id={props.campaign.id}
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

      <div className="table-data recipient">-</div>
      <div className="table-data open-rate">-</div>
      <div className="table-data click-rate">-</div>
      <div className="table-data unsubscribers">-</div>
      <div className="table-data status">
        <span className="draft">{props.campaign.status}</span>
      </div>
      <div className="three-dot">
        <ThreeDotIcon/>
      </div>
    </div>
  );
}
