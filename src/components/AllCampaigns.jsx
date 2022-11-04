import React, {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../hooks/useGlobalStore";
import {
  deleleMultipleCampaigns,
  deleteSingleCampaign,
  getAllCampaigns,
  updateCampaignStatus,
} from "../services/Campaign";
import { AdminNavMenuClassChange } from "../utils/admin-settings";
import AlertPopup from "./AlertPopup";
import NoCampaign from "./Campaign/NoCampaign";
import SingleCampaign from "./Campaign/SingleCampaign";
import CampaignsNavbar from "./CampaignNav";
import DeletePopup from "./DeletePopup";
import Delete from "./Icons/Delete";
import Search from "./Icons/Search";
import ThreeDotIcon from "./Icons/ThreeDotIcon";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import PublishAlert from "./PublishAlert";
import SuccessfulNotification from "./SuccessfulNotification";
import ListenForOutsideClicks from "./ListenForOutsideClicks";
import { ClearNotification } from "../utils/admin-notification";


export default function AllCampaigns() {
  // Admin active menu selection
  AdminNavMenuClassChange("mrm-admin", "campaigns");
  useGlobalStore.setState({
    hideGlobalNav: true,
  });
  let navigate = useNavigate();
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
  // the select all checkbox
  const [allSelected, setAllSelected] = useState(false);
  const [currentActive, setCurrentActive] = useState(0);
  const [isDelete, setIsDelete] = useState("none");
  const [camaignID, setCampaignID] = useState();
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [message, setMessage] = useState("");
  // refresh the whole list if this boolean changes
  const [refresh, setRefresh] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  // single selected array which holds selected ids
  const [selected, setSelected] = useState([]);
  const [showAlert, setShowAlert] = useState("none");
  const [isUpdate, setIsUpdate] = useState("none");

  useEffect(() => {
    getAllCampaigns(page, perPage, query).then((results) => {
      setCampaigns(results.data);
      setCount(results.count);
      setTotalPages(results.total_pages);
      setShowLoader(false);
    });
    ClearNotification('none',setShowNotification)
  }, [page, perPage, query, refresh]);

  // Multiple selection confirmation
  const deleleMultipleCampaign = async () => {
    if (selected.length > 0) {
      setIsDelete("block");
      setDeleteTitle("Delete Multiple");
      setDeleteMessage("Are you sure you want to delete these selected items?");
    } else {
      setShowAlert("block");
    }
  };

  // Hide alert popup after click on ok
  const onShowAlert = async (status) => {
    setShowAlert(status);
  };

  // Navigate to campaign edit page
  function editField(campaign) {
    let path = `../campaign/edit/${campaign.id}`;
    navigate(path);
  }

  // Get campaign id from child component
  const deleteCampaign = async (campaign_id) => {
    setIsDelete("block");
    setCampaignID(campaign_id);
    setDeleteTitle("Campaign Delete");
    setDeleteMessage("Are you sure you want to delete the campaign?");
  };

  // Hide delete popup after click on cancel
  const onDeleteShow = async (status) => {
    setIsDelete(status);
  };

  // Delete list after delete confirmation
  const onDeleteStatus = async (status) => {
    if (status) {
      deleteSingleCampaign(camaignID).then((response) => {
        if (200 === response.code) {
          setShowNotification("block");
          setMessage(response.message);
          toggleRefresh();
        } else {
          setErrors({
            ...errors,
            title: response?.message,
          });
        }
      });
    }
    setIsDelete("none");
  };

  // Delete multiple lists after delete confirmation
  const onMultiDelete = async (status) => {
    if (status) {
      deleleMultipleCampaigns(selected).then((response) => {
        if (200 === response.code) {
          setShowNotification("block");
          setMessage(response.message);
          toggleRefresh();
          setAllSelected(false);
          setSelected([]);
        } else {
          setErrors({
            ...errors,
            title: response?.message,
          });
        }
      });
    }
    setIsDelete("none");
  };

  // the data is fetched again whenver refresh is changed
  function toggleRefresh() {
    setRefresh((prev) => !prev);
  }

  // handler for one single item click
  const handleSelectOne = (e) => {
    if (selected.includes(e.target.id)) {
      // already in selected list so remove it from the array
      setSelected(selected.filter((element) => element != e.target.id));
      // corner case where one item is deselected so hide all checked
      setAllSelected(false);
    } else {
      // add id to the array
      setSelected([...selected, e.target.id]);
    }
  };

  // handler for all item click
  const handleSelectAll = (e) => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(campaigns.map((campaign) => campaign.id));
    }
    setAllSelected(!allSelected);
  };

  // Handle single campaign status update
  const handleStatusUpdate = (campaign_id) => {
    setIsUpdate("block");
    setCampaignID(campaign_id);
  };

  const onNotPublish = async (status) => {
    setIsUpdate(status);
  };

  const onPublishStatus = async (status) => {
    if (status) {
      const campaign = {
        status: "suspended",
        campaign_id: camaignID,
      };

      updateCampaignStatus(campaign).then((response) => {
        if (201 === response.code) {
          // Show success message
          setShowNotification("block");
          setMessage(response?.message);
          toggleRefresh();
          setCampaignID();
        } else {
          setShowWarning("block");
          setMessage(response?.message);
        }
      });
      setIsUpdate("none");
      const isValid = validate();
      setIsValid(isValid);
      ClearNotification('none',setShowNotification)
    }
  };

  const [listening, setListening] = useState(false);

  // Outside click events for bulk action dropdown
  const threeDotRef = useRef(null);
  useEffect(
      ListenForOutsideClicks( listening, setListening, threeDotRef, setShowMoreOptions )
  );

  return (
    <>
      <div className="campaign-index-page">
        <CampaignsNavbar />
        <div className="campaign-list-page">
          <div className="mintmrm-container">
            <div className="campaign-list-area">
              <div className="campaign-list-header">
                <div className="left-filters">
                  <h2 className="table-title">List View</h2>
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
                        if (value.length >= 1) {
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
                      ref={threeDotRef}
                    >
                      <ThreeDotIcon />

                      <ul
                        className={
                          showMoreOptions
                            ? "select-option mintmrm-dropdown show "
                            : "select-option mintmrm-dropdown"
                        }
                      >
                        <li onClick={deleleMultipleCampaign}>
                          <Delete /> Delete Selected
                        </li>
                      </ul>
                    </button>
                  </div>
                  {/* <FilterBox
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
                  /> */}
                </div>
              </div>
              {showLoader ? (
                <LoadingIndicator type="table" />
              ) : (
                <>
                  <div className="campaign-list-body">
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
                                  onChange={handleSelectAll}
                                  checked={allSelected}
                                />
                                <label for="campaign-bulk-select">
                                  Campaign Name
                                </label>
                              </span>
                            </div>

                            <div className="table-header recipient">
                              Recipient
                            </div>
                            <div className="table-header open-rate">
                              Open rate
                            </div>
                            <div className="table-header click-rate">
                              Click rate
                            </div>
                            <div className="table-header unsubscribers">
                              Unsubscribers
                            </div>
                            <div className="table-header status">Status</div>
                            <div className="table-header three-dot"></div>
                          </div>
                        </div>

                        <div className="table-body">
                          {!campaigns.length && <NoCampaign search={search} />}
                          {campaigns.map((campaign) => {
                            return (
                              <SingleCampaign
                                key={campaign.id}
                                campaign={campaign}
                                setCurrentActive={setCurrentActive}
                                currentActive={currentActive}
                                editField={editField}
                                deleteCampaign={deleteCampaign}
                                handleSelectOne={handleSelectOne}
                                selected={selected}
                                handleStatusUpdate={handleStatusUpdate}
                              />
                            );
                          })}
                        </div>
                        {totalPages > 1 && (
                          <div className="table-footer">
                            <Pagination
                              currentPage={page}
                              pageSize={perPage}
                              onPageChange={setPage}
                              totalCount={count}
                              totalPages={totalPages}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mintmrm-container" style={{ display: isDelete }}>
        <DeletePopup
          title={deleteTitle}
          message={deleteMessage}
          onDeleteShow={onDeleteShow}
          onDeleteStatus={onDeleteStatus}
          onMultiDelete={onMultiDelete}
          selected={selected}
        />
      </div>
      <div className="mintmrm-container" style={{ display: showAlert }}>
        <AlertPopup showAlert={showAlert} onShowAlert={onShowAlert} />
      </div>
      <SuccessfulNotification display={showNotification} message={message} />
      <div className="mintmrm-container" style={{ display: isUpdate }}>
        <PublishAlert
          title="Campaign Update"
          message="Are you sure to pause this campaign?"
          buttonText={"Yes"}
          onNotPublish={onNotPublish}
          onPublishStatus={onPublishStatus}
        />
      </div>
    </>
  );
}
