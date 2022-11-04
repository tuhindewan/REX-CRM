import React, { useState } from "react";

import ContactCards from "../ContactCards/index";

import { useLocation } from "react-router-dom";
import ContactNavbar from "../ContactNavbar/index";
import ContactProfile from "../Icons/ContactProfile";
import Pending from "../Icons/Pending";
import Subscribe from "../Icons/Subscribe";
import Unsubscribe from "../Icons/Unsubscribe";
import SuccessfulNotification from "../SuccessfulNotification";
import ContactListTable from "./ContactListTable";

const BaseTable = (props) => {
  const [refresh, setRefresh] = useState();
  const [countData, setCountData] = useState([]);
  const [showNotification, setShowNotification] = useState("none");
  const [message, setMessage] = useState("");
  const location = useLocation();

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
