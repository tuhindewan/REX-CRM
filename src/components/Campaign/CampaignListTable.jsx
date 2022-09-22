import React from "react";
import NoCampaign from "./NoCampaign";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// Internal dependencies
import SingleCampaign from "./SingleCampaign";

export default function CampaignListTable(props) {

  const [currentActive, setCurrentActive] = useState(0);
  let navigate = useNavigate();
  
  function editField(campaign) {
    let path = `../campaigns/update/${campaign.id}`;
    navigate(path);
  }
  return (
    <>
      <div className="contact-list-table campaign-list-table">
        <table>
          <thead>
            <tr>
              <th className="campaign-name">
                <span class="mintmrm-checkbox">
                  <input
                    type="checkbox"
                    name="campaign-bulk-select"
                    id="campaign-bulk-select"
                  />
                  <label for="campaign-bulk-select">Campaign Name</label>
                </span>
              </th>


              {/* <th className="recipient">Recipient</th>
              <th className="open-rate">Open rate</th>
              <th className="click-rate">Click rate</th>
              <th className="unsubscribers">Unsubscribers</th> */}
              <th className="status">Status</th>
              <th className="action"></th>
            </tr>
          </thead>

          <tbody>

            {!props.campaigns.length && <NoCampaign />}
            {props.campaigns.map((campaign, idx) => {
              return <SingleCampaign 
                        key={idx} 
                        campaign={campaign} 
                        currentActive={currentActive}
                        setCurrentActive={setCurrentActive} 
                        editField={editField}
                        />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
