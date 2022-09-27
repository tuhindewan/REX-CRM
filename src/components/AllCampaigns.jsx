import React, { useEffect, useState } from "react";
import { getAllCampaigns } from "../services/Campaign";
import CampaignListTable from "./Campaign/CampaignListTable";
import CampaignsNavbar from "./CampaignNav";
import FilterBox from "./Filterbox";
import Search from "./Icons/Search";
import ThreeDotIcon from "./Icons/ThreeDotIcon";

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
  // whether to show more options or not
  const [showMoreOptions, setShowMoreOptions] = useState(false);

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
                    onChange={(e) => {
                      let value = e.target.value;
                      setSearch(value);
                      // only set query when there are more than 3 characters
                      if (value.length >= 3) {
                        setQuery(`&search=${value}`);
                        // on every new search term set the page explicitly to 1 so that results can
                        // appear
                        setPage(1);
                      } else {
                        setQuery("");
                      }
                    }}
                    placeholder="Search by title"
                  />
                </span>
                <div className="bulk-action">
                  {/* show more options section */}
                  <button
                    className="more-option"
                    onClick={() => setShowMoreOptions(!showMoreOptions)}
                  >
                    <ThreeDotIcon />

                    <ul
                      className={
                        showMoreOptions
                          ? "mintmrm-dropdown show"
                          : "mintmrm-dropdown"
                      }
                    >
                      <li className="delete">Delete Selected</li>
                    </ul>
                  </button>
                </div>
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
