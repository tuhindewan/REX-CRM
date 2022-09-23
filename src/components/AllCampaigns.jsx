import React, { useState } from "react";
import CampaignListTable from "./Campaign/CampaignListTable";
import FilterBox from "./Filterbox";
import Search from "./Icons/Search";

export default function AllCampaigns() {
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  return (
    <div className="campaign-index-page">
      {/* <CampaignsNavbar /> */}
      <div className="campaign-list-page">
        <div className="mintmrm-container">
          <div className="campaign-list-area">
            <div className="campaign-list-header">
              <div className="left-filters">
                <FilterBox
                  label="Statusss"
                  name="Statusss"
                  options={[
                    {
                      title: "Pending",
                      id: "pending",
                    },
                    {
                      title: "Subscribed",
                      id: "subscribed",
                    },
                    {
                      title: "Unsubscribed",
                      id: "unsubscribed",
                    },
                  ]}
                  placeholder="Statusss"
                />
              </div>

              <div className="right-buttons">
                <span className="search-section">
                  <Search />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title"
                  />
                </span>
              </div>
            </div>

            <div className="campaign-list-body">
              <CampaignListTable campaigns={campaigns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
