import React from "react";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import ContactCards from "../ContactCards";
import ContactProfile from "../Icons/ContactProfile";

function Settings() {
  useGlobalStore.setState({
    hideGlobalNav: true,
  });
  return (
    <div className="contact-list-page">
      <div className="mintmrm-container">
        <h2 class="conatct-heading">Settings</h2>
        <div className="contact-info-wrapper">
          <ContactCards
            url="/custom-fields"
            source={<ContactProfile />}
            cardTitle="Custom Fields"
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
