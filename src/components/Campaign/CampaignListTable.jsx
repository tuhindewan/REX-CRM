import React from "react";
import NoCampaign from "./NoCampaign";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DeletePopup from "../DeletePopup";
// Internal dependencies
import SingleCampaign from "./SingleCampaign";
import { deleteSingleCampaign, getAllCampaigns } from "../../services/Campaign";
import SuccessfulNotification from "../SuccessfulNotification";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import { useEffect } from "react";

export default function CampaignListTable(props) {

  // global counter update real time
  const counterRefresh = useGlobalStore((state) => state.counterRefresh);

  // set navbar Buttons
  // useGlobalStore.setState({
  //   navbarMarkup: (
  //     <button
  //       className="contact-save mintmrm-btn"
  //       onClick={() => setShowCreate((prev) => !prev)}
  //     >
  //       + Add List
  //     </button>
  //   ),
  //   hideGlobalNav: false,
  // });

  let navigate = useNavigate();
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
    });
    const timer = setTimeout(() => {
      setShowNotification("none");
    }, 3000);
    return () => clearTimeout(timer);
  }, [refresh]);

  // Navigate to campaign edit page
  function editField(campaign) {
    let path = `../campaigns/update/${campaign.id}`;
    navigate(path);
  }

  // Get campaign id from child component
  const deleteCampaign = async (campaign_id) => {
    setIsDelete("block");
    setCampaignID(campaign_id);
    setDeleteTitle("Campaign List");
    setDeleteMessage("Are you sure you want to delete the campaign?");
  }

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

            {!campaigns.length && <NoCampaign />}
            {campaigns.map((campaign, idx) => {
              return <SingleCampaign 
                        key={idx} 
                        campaign={campaign} 
                        currentActive={currentActive}
                        setCurrentActive={setCurrentActive} 
                        editField={editField}
                        deleteCampaign={deleteCampaign}
                        />;
            })}
          </tbody>
        </table>
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
