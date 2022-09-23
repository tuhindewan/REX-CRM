import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DeletePopup from "../DeletePopup";
import NoCampaign from "./NoCampaign";
// Internal dependencies
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import { deleteSingleCampaign, getAllCampaigns } from "../../services/Campaign";
import Plus from "../Icons/Plus";
import SuccessfulNotification from "../SuccessfulNotification";
import SingleCampaign from "./SingleCampaign";

export default function CampaignListTable(props) {
  // global counter update real time
  const counterRefresh = useGlobalStore((state) => state.counterRefresh);

  //set navbar Buttons
  useGlobalStore.setState({
    navbarMarkup: (
      <Link to="/campaigns/create">
        <button className="add-contact-btn mintmrm-btn ">
          <Plus /> Add Campaign
        </button>
      </Link>
    ),
    hideGlobalNav: false,
  });

  let navigate = useNavigate();
  const location = useLocation();
  const [currentActive, setCurrentActive] = useState(0);
  const [isDelete, setIsDelete] = useState("none");
  const [camaignID, setCampaignID] = useState();
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [showNotification, setShowNotification] = useState("none");
  const [message, setMessage] = useState("");
  // refresh the whole list if this boolean changes
  const [refresh, setRefresh] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getAllCampaigns().then((results) => {
      setCampaigns(results.data);
      if ("campaign-created" == location.state?.status) {
        setShowNotification("block");
        setMessage(location.state?.message);
      }
    });
    const timer = setTimeout(() => {
      setShowNotification("none");
    }, 3000);
    return () => clearTimeout(timer);
  }, [refresh]);

  // Navigate to campaign edit page
  function editField(campaign) {
    let path = `../campaign/edit/${campaign.id}`;
    navigate(path);
  }

  // Get campaign id from child component
  const deleteCampaign = async (campaign_id) => {
    setIsDelete("block");
    setCampaignID(campaign_id);
    setDeleteTitle("Campaign List");
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
          useGlobalStore.setState({
            counterRefresh: !counterRefresh,
          });
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
      <div className="mintmrm-container" style={{ display: isDelete }}>
        <DeletePopup
          title={deleteTitle}
          message={deleteMessage}
          onDeleteShow={onDeleteShow}
          onDeleteStatus={onDeleteStatus}
        />
      </div>
      <SuccessfulNotification display={showNotification} message={message} />
    </>
  );
}
