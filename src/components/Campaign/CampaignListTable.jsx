import React from "react";
import NoCampaign from "./NoCampaign";

// Internal dependencies
import SingleCampaign from "./SingleCampaign";

export default function CampaignListTable(props) {
  return (
    <>
      <div className="campaign-list-table">
        <div className="campaign-table"> 
          <div className="table-head">
            <div className="table-row">
              <div className="table-header campaign-name">
                <span class="mintmrm-checkbox">
                  <input
                    type="checkbox"
                    name="campaign-bulk-select"
                    id="campaign-bulk-select"
                  />
                  <label for="campaign-bulk-select">Campaign Name</label>
                </span>
              </div>

              <div className="table-header recipient">Recipient</div>
              <div className="table-header open-rate">Open rate</div>
              <div className="table-header click-rate">Click rate</div>
              <div className="table-header unsubscribers">Unsubscribers</div>
              <div className="table-header status">Status</div>
              <div className="table-header three-dot"></div>

            </div>
          </div>

          <div className="table-body">

            {!props.campaigns.length && <NoCampaign />}
            {props.campaigns.map((campaign, idx) => {
              return <SingleCampaign key={idx} campaign={campaign} />;
            })}
          </div>
        </div> 
      </div>
    </>
  );
}
