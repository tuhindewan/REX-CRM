import React, { useEffect, useState } from "react";
import { getAllCampaigns } from "../services/Campaign";
import CampaignListTable from "./Campaign/CampaignListTable";
import CampaignsNavbar from "./CampaignNav";
import FilterBox from "./Filterbox";
import Search from "./Icons/Search";

export default function AllCampaigns() {
  const [search, setSearch] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  // search query, search query only updates when there are more than 3 characters typed
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllCampaigns(page, perPage, query).then((results) => {
      console.log(results);
      setCampaigns(results.data);
    });
    const timer = setTimeout(() => {
      setShowNotification("none");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="campaign-index-page">
      <CampaignsNavbar />
      <div className="campaign-list-page">
        <div className="mintmrm-container">
          <div className="campaign-list-area">
            <div className="campaign-list-header">
              <div className="left-filters">
                <FilterBox
                  label="Status"
                  name="Status"
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
                  placeholder="Status"
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
