import React, { useState } from "react";
import { useGlobalStore } from "../hooks/useGlobalStore";
import DashboardCard from "./DashboardCard";
import EmailDraftProgressBar from "./Dashboard/EmailDraftProgressBar";
import EmailSentProgressBar from "./Dashboard/EmailSentProgressBar";
import ContactProfile from "./Icons/ContactProfile";
import Pending from "./Icons/Pending";
import Subscribe from "./Icons/Subscribe";
import Unsubscribe from "./Icons/Unsubscribe";

const Dashboard = () => {
  useGlobalStore.setState({
    hideGlobalNav: true,
  });

  const [draftPercentage, setDraftPercentage] = useState(10);
  const [sentPercentage, setSentPercentage] = useState(24);

  const handleChangeEvent = (event) => {
    setDraftPercentage(event.target.value);
    setSentPercentage(event.target.value);
  }

  return (
    <div className="contact-list-page">
      <div className="mintmrm-container">
        <h2 class="conatct-heading">Dashboard</h2>

        <div className="contact-info-wrapper">
          <DashboardCard
            url="/contacts"
            source={<ContactProfile />}
            cardTitle="Contacts"
          />
          <DashboardCard url="/tags" source={<Subscribe />} cardTitle="Tags" />
          <DashboardCard
            url="/lists"
            source={<Unsubscribe />}
            cardTitle="Lists"
          />
          <DashboardCard
            url="/campaigns"
            source={<Pending />}
            cardTitle="Campaigns"
          />
        </div>

        <div className="email-campaign-stats">
          <EmailDraftProgressBar strokeWidth="10" sqSize="200" percentage={draftPercentage}/>
          <EmailSentProgressBar strokeWidth="10" sqSize="130" percentage={sentPercentage}/>
        </div>

        <div>
          <input 
            id="progressInput" 
            type="range" 
            min="0" 
            max="100" 
            step="1"
            onChange={handleChangeEvent}/>
        </div>


      </div>
    </div>
  );
};

export default Dashboard;
