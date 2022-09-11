import React from "react";
import NoCampaign from "./NoCampaign";

// Internal dependencies
import SingleCampaign from "./SingleCampaign";

export default function CampaignListTable(props) {
  return (
    <>
      <div className="contact-list-table campaign-list-table">
        <table>
          <thead>
            <tr>
              <th className="campaign-name">
                <span class="soronmrm-checkbox">
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
            </tr>
          </thead>

          <tbody>

            {!props.campaigns.length && <NoCampaign />}
            {props.campaigns.map((campaign, idx) => {
              return <SingleCampaign key={idx} campaign={campaign} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
