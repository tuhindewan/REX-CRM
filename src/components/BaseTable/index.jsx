import { __ } from "@wordpress/i18n";
import React, { useEffect, useState } from "react";

import ContactCards from "../ContactCards/index";

import ContactProfile from "../Icons/ContactProfile";
import Pending from "../Icons/Pending";
import Subscribe from "../Icons/Subscribe";
import Unsubscribe from "../Icons/Unsubscribe";
import ContactListTable from "./ContactListTable";
import Swal from "sweetalert2";

import "./style.css";

const BaseTable = () => {
  const [refresh, setRefresh] = useState();
  const [countData, setCountData] = useState([]);

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

  const contactListColumns = [
    {
      title: __("Email", "mrm"),
    },
    {
      title: __("First Name", "mrm"),
    },
    {
      title: __("Last name", "mrm"),
    },
    {
      title: __("List", "mrm"),
    },
    {
      title: __("Last Activity", "mrm"),
    },
    {
      title: __("Phone Number", "mrm"),
    },
    {
      title: __("Source", "mrm"),
    },
    {
      title: __("Action", "mrm"),
    },
  ];

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
              {/* <button className="add-column" onClick={showAddColumnList}>
                <PlusCircleIcon />
                <span className="tooltip">Add Column</span>

                <ul
                  className={
                    isAddColumn ? "soronmrm-dropdown show" : "soronmrm-dropdown"
                  }
                >
                  <li className="searchbar">
                    <span class="pos-relative">
                      <Search />
                      <input
                        type="search"
                        name="column-search"
                        placeholder="Search..."
                      />
                    </span>
                  </li>

                  <li className="list-title">Choose columns</li>

                  {contactListColumns.map((column, index) => {
                    <li className="single-column">
                      <ColumnList title={column.title} key={index} />
                    </li>;
                  })}

                  <li className="button-area">
                    <button className="soronmrm-btn outline default-btn">
                      Default
                    </button>
                    <button className="soronmrm-btn outline cancel-btn">
                      Cancel
                    </button>
                    <button className="soronmrm-btn save-btn">Save</button>
                  </li>
                </ul>
              </button> */}

              <ContactListTable 
                refresh = {refresh}
                setRefresh= {setRefresh}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseTable;
