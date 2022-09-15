import { __ } from "@wordpress/i18n";
import React, { useEffect, useState } from "react";

import ContactCards from "../ContactCards/index";
import PlusCircleIcon from "../Icons/PlusCircleIcon"
import Search from "../Icons/Search";
import ColumnList from "../BaseTable/ColumnList"

import { useLocation } from "react-router-dom";
import ContactProfile from "../Icons/ContactProfile";
import Pending from "../Icons/Pending";
import Subscribe from "../Icons/Subscribe";
import Unsubscribe from "../Icons/Unsubscribe";
import SuccessfulNotification from "../SuccessfulNotification";
import ContactListTable from "./ContactListTable";

import "./style.css";

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
  }, [refresh]);

    if ("contact-created" == location.state?.status) {
      setShowNotification("block");
      setMessage(location.state?.message);
    }



  return (
    <>
      <div className="contact-list-page">
        <div className="soronmrm-container">
          <div className="contact-info-wrapper">
            <ContactCards
              source={<ContactProfile />}
              cardTitle="Total Contacts"
              totalAmount={countData.total_contacts}
            />
            <ContactCards
              source={<Subscribe />}
              cardTitle="Subscribed"
              totalAmount={countData.total_subscribed}
            />
            <ContactCards
              source={<Unsubscribe />}
              cardTitle="Unsubscribed"
              totalAmount={countData.total_unsubscribed}
            />
            <ContactCards
              source={<Pending />}
              cardTitle="Pending"
              totalAmount={countData.total_pending}
            />
          </div>

          <div className="contact-list-area">
            <div className="contact-list-body">
              

              <ContactListTable 
                refresh = {refresh}
                setRefresh= {setRefresh}
              />
            </div>
          </div>
        </div>
      </div>
      <SuccessfulNotification display={showNotification} message={message} />
    </>
  );
};

export default BaseTable;
