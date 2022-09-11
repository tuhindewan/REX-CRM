import React from "react";
import { Link } from "react-router-dom";
//import ThreeDotIcon from "../Icons/ThreeDotIcon";

export default function SingleCampaign(props) {
  return (
    <tr>
      <td className="email-wrapper campaign-name-wrapper">
        <div className="email campaign-name">
          <span class="soronmrm-checkbox no-title">
            <input
              type="checkbox"
              name={props.campaign.id}
              id={props.campaign.id}
            />
            <label for={props.campaign.id}></label>
          </span>
          <h6 className="title">
            {" "}
            <Link to={`../campaigns/update/${props.campaign.id}`}>
              {props.campaign.title}
            </Link>{" "}
          </h6>
        </div>
      </td>

      <td className="status">{props.campaign.status}</td>
    </tr>
  );
}
