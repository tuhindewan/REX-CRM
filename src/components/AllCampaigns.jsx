
import React, { useEffect, useState } from "react";
import CampaignListTable from "./Campaign/CampaignListTable";
import CampaignsNavbar from "./CampaignNav";

export default function AllCampaigns() {
  const [search, setSearch] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
      fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/campaigns?search=${search}&page=${page}&per-page=${perPage}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          if (200 == data.code) {
            setCampaigns(data.data.data);
          }
        });
    }
    getData();
  }, []);

  return (
    <div className="campaign-index-page">
      <CampaignsNavbar />
      <div className="campaign-list-page">
        <div className="soronmrm-container">
          <div className="contact-list-area">
            <div className="contact-list-header">
              {/* <div className="left-filters">
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
              </div> */}

              {/* <div className="right-buttons">
                <span className="search-section">
                  <Search />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title"
                  />
                </span>
              </div> */}
            </div>

            <div className="contact-list-body">
              <CampaignListTable campaigns={campaigns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
