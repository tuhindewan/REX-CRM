import React, { useEffect, useState } from "react";
import EmailSettingsIcon from "../../components/Icons/EmailSettingsIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";
import SuccessfulNotification from "../../components/SuccessfulNotification";
import { getEmailSettings } from "../../services/Setting";
import { AdminNavMenuClassChange } from "../../utils/admin-settings";
import SettingsNav from "./SettingsNav";

export default function EmailSettings() {
  // Admin active menu selection
  AdminNavMenuClassChange("mrm-admin", "settings");
  // Email Settings data if available
  const [emailSettingsData, setEmailSettingsData] = useState({});

  const [values, setValues] = useState();

  //notifications
  const [showNotification, setShowNotification] = useState("none");
  const [notificationType, setNotificationType] = useState("success");
  const [message, setMessage] = useState("");

  const [refresh, setRefresh] = useState();
  const [loader, setLoader] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  // the data is fetched again whenver refresh is changed
  function toggleRefresh() {
    setRefresh((prev) => !prev);
  }

  // Send request to get email settings data from the database
  useEffect(() => {
    getEmailSettings().then((response) => {
      setEmailSettingsData(response);
      setValues({ ...values, ...response });
    });
  }, [refresh]);

  const handleSubmit = async () => {
    setLoader(true);
    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/settings/email`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const resJson = await res.json();
    setLoader(false);
    setShowNotification("block");
    setMessage(resJson.message);
    if (resJson.success) {
      setNotificationType("success");
    } else {
      setNotificationType("failed");
    }

    toggleRefresh();
    return resJson;
  };

  // Set values from list form
  const handleChange = (e) => {
    setShowNotification("none");
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mintmrm-settings-page">
        <div className="mintmrm-container">
          <div className="mintmrm-settings">
            <h2 class="conatct-heading">Settings</h2>

            <div className="mintmrm-settings-wrapper">
              <SettingsNav />

              <div className="settings-tab-content">
                <div className="single-tab-content email-tab-content">
                  <div className="tab-body">
                    <header className="tab-header">
                      <h4 className="title">
                        <EmailSettingsIcon />
                        Email Settings
                      </h4>
                    </header>

                    <div className="form-wrapper">
                      <div className="form-group">
                        <label htmlFor="">
                          From Name
                          <span class="mintmrm-tooltip">
                            <TooltipQuestionIcon />
                            <p>Enter a name from whom to send the email</p>
                          </span>
                        </label>
                        <input
                          type="text"
                          name="from_name"
                          placeholder="Enter From Name"
                          defaultValue={emailSettingsData?.from_name}
                          onInput={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          From Email
                          <span class="mintmrm-tooltip">
                            <TooltipQuestionIcon />
                            <p>
                              Must enter an email from where to send the email**
                            </p>
                          </span>
                        </label>
                        <input
                          type="email"
                          name="from_email"
                          placeholder="Enter From Email"
                          defaultValue={emailSettingsData?.from_email}
                          onInput={handleChange}
                        />
                      </div>
                      <hr></hr>
                      <div className="form-group">
                        <label htmlFor="">
                          Reply-to Name
                          <span class="mintmrm-tooltip">
                            <TooltipQuestionIcon />
                            <p>Enter a name who will recieve a reply</p>
                          </span>
                        </label>
                        <input
                          type="text"
                          name="reply_name"
                          placeholder="Enter Reply-to Name"
                          defaultValue={emailSettingsData?.reply_name}
                          onInput={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">
                          Reply-to Email
                          <span class="mintmrm-tooltip">
                            <TooltipQuestionIcon />
                            <p>
                              Must enter an email where will a reply will be
                              received
                            </p>
                          </span>
                        </label>
                        <input
                          type="email"
                          name="reply_email"
                          placeholder="Enter Reply-to Email"
                          defaultValue={emailSettingsData?.reply_email}
                          onInput={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="tab-footer">
                    <button
                      className="mintmrm-btn"
                      type="button"
                      onClick={handleSubmit}
                      disabled={loader ? true : false}
                    >
                      Save Settings
                      {loader && <span className="mintmrm-loader"></span>}
                    </button>
                  </div>
                </div>
              </div>
              {/* end settings-tab-content */}
            </div>
          </div>
        </div>
      </div>
      <SuccessfulNotification
        display={showNotification}
        setShowNotification={setShowNotification}
        message={message}
        notificationType={notificationType}
        setNotificationType={setNotificationType}
      />
    </>
  );
}
