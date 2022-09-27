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
  const [showNotification, setShowNotification] = useState("none");
  // total count of results
  const [count, setCount] = useState(0);
  // total number of pages for result
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getAllCampaigns(page, perPage, query).then((results) => {
      setCampaigns(results.data);
      setCount(results.count);
      setTotalPages(results.total_pages);
    });
    const timer = setTimeout(() => {
      setShowNotification("none");
    }, 3000);
    return () => clearTimeout(timer);
  }, [page, perPage, query]);

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
              <CampaignListTable
                currentPage={page}
                pageSize={perPage}
                onPageChange={setPage}
                totalCount={count}
                totalPages={totalPages}
                campaigns={campaigns}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
