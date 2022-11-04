import React from "react";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import { AdminNavMenuClassChange } from "../../utils/admin-settings";
import ContactCards from "../../components/ContactCards";
import ContactProfile from "../../components/Icons/ContactProfile";

function Settings() {
  AdminNavMenuClassChange("mrm-admin", "settings");
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
