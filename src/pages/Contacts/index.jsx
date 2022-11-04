import React, { useEffect, useState } from "react";

import ContactCards from "../../components/ContactCards/index";

import { useLocation } from "react-router-dom";
import ContactProfile from "../../components/Icons/ContactProfile";
import Pending from "../../components/Icons/Pending";
import Subscribe from "../../components/Icons/Subscribe";
import Unsubscribe from "../../components/Icons/Unsubscribe";
import SuccessfulNotification from "../../components/SuccessfulNotification";
import ContactListTable from "./ContactListTable";
import ContactNavbar from "../../components/ContactNavbar/index";
import {  ClearNotification } from "../../utils/admin-notification";


const BaseTable = () => {
  const [refresh, setRefresh] = useState();
  const [countData, setCountData] = useState([]);
  const [showNotification, setShowNotification] = useState("none");
  const [message, setMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    async function getTotal() {
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/contacts/total-count`
      );
      const resJson = await res.json();
      setCountData(resJson);
    }
    getTotal();
    if ("contact-created" == location.state?.status) {
      setShowNotification("block");
      setMessage(location.state?.message);
    }
    ClearNotification('none',setShowNotification)
  }, [refresh]);

  return (
    <>
      <ContactNavbar />
      <div className="contact-list-page">
        <div className="mintmrm-container">
          <div className="contact-info-wrapper">
            <ContactCards
              source={<ContactProfile />}
              url="#"
              cardTitle="Total Contacts"
              totalAmount={countData.total_contacts}
            />
            <ContactCards
              source={<Subscribe />}
              url="#"
              cardTitle="Subscribed"
              totalAmount={countData.total_subscribed}
            />
            <ContactCards
              source={<Unsubscribe />}
              url="#"
              cardTitle="Unsubscribed"
              totalAmount={countData.total_unsubscribed}
            />
            <ContactCards
              source={<Pending />}
              url="#"
              cardTitle="Pending"
              totalAmount={countData.total_pending}
            />
          </div>

          <div className="contact-list-area">
            <div className="contact-list-body">
              <ContactListTable refresh={refresh} setRefresh={setRefresh} />
            </div>
          </div>
        </div>
      </div>
      <SuccessfulNotification display={showNotification} message={message} />
    </>
  );
};

export default BaseTable;
