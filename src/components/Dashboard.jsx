import React from "react";
import { useGlobalStore } from "../hooks/useGlobalStore";
import ContactCards from "./ContactCards";
import ContactProfile from "./Icons/ContactProfile";
import Pending from "./Icons/Pending";
import Subscribe from "./Icons/Subscribe";
import Unsubscribe from "./Icons/Unsubscribe";

const Dashboard = () => {
  useGlobalStore.setState({
    hideGlobalNav: true,
  });
  return (
    <div className="contact-list-page">
      <div className="mintmrm-container">
        <h2 class="conatct-heading">Dashboard</h2>
        <div className="contact-info-wrapper">
          <ContactCards
            url="/contacts"
            source={<ContactProfile />}
            cardTitle="Contacts"
          />
          <ContactCards url="/tags" source={<Subscribe />} cardTitle="Tags" />
          <ContactCards
            url="/lists"
            source={<Unsubscribe />}
            cardTitle="Lists"
          />
          <ContactCards
            url="/campaigns"
            source={<Pending />}
            cardTitle="Campaigns"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
