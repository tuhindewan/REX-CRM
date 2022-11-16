import React, { useState, useEffect } from "react";
import SettingsNav from "./SettingsNav";
import EmailSettingsIcon from "../../components/Icons/EmailSettingsIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";

export default function EmailSettings() {
  // Email Settings data if available
  const [emailSettingsData, setEmailSettingsData] = useState({});
  const [getResponseCode, setGetResponseCode] = useState();

  useEffect(() => {
    const getEmailSettings = async () => {
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/settings/email`
      );
      const resJson = await res.json();
      console.log(resJson);
      setGetResponseCode(resJson.code);
      setEmailSettingsData(resJson.data);
    };
    getEmailSettings();
  }, []);

  return (
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
                        Form Name
                        <span class="mintmrm-tooltip">
                          <TooltipQuestionIcon />
                          <p>Define behaviour of the form after submission</p>
                        </span>
                      </label>
                      {400 === getResponseCode ? (
                        <input
                          type="text"
                          name="from-name"
                          placeholder="Enter From Name"
                        />
                      ) : (
                        <input
                          type="text"
                          name="from-name"
                          placeholder="Enter From Name"
                          defaultValue={emailSettingsData?.from_name}
                        />
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="">
                        Form Email
                        <span class="mintmrm-tooltip">
                          <TooltipQuestionIcon />
                          <p>Define behaviour of the form after submission</p>
                        </span>
                      </label>
                      {400 === getResponseCode ? (
                        <input
                          type="email"
                          name="from-email"
                          placeholder="Enter From Email"
                        />
                      ) : (
                        <input
                          type="email"
                          name="from-email"
                          placeholder="Enter From Email"
                          defaultValue={emailSettingsData?.from_email}
                        />
                      )}
                    </div>
                    <hr></hr>
                    <div className="form-group">
                      <label htmlFor="">
                        Reply-to Name
                        <span class="mintmrm-tooltip">
                          <TooltipQuestionIcon />
                          <p>Define behaviour of the form after submission</p>
                        </span>
                      </label>
                      {400 === getResponseCode ? (
                        <input
                          type="text"
                          name="reply-to-name"
                          placeholder="Enter Reply-to Name"
                        />
                      ) : (
                        <input
                          type="text"
                          name="reply-to-name"
                          placeholder="Enter Reply-to Name"
                          defaultValue={emailSettingsData?.reply_name}
                        />
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="">
                        Reply-to Email
                        <span class="mintmrm-tooltip">
                          <TooltipQuestionIcon />
                          <p>Define behaviour of the form after submission</p>
                        </span>
                      </label>
                      {400 === getResponseCode ? (
                        <input
                          type="teemailxt"
                          name="reply-to-email"
                          placeholder="Enter Reply-to Email"
                        />
                      ) : (
                        <input
                          type="email"
                          name="reply-to-email"
                          placeholder="Enter Reply-to Email"
                          defaultValue={emailSettingsData?.reply_email}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="tab-footer">
                  <button className="mintmrm-btn" type="button">
                    Save Settings
                    <span className="mintmrm-loader"></span>
                  </button>
                </div>
              </div>
            </div>
            {/* end settings-tab-content */}
          </div>
        </div>
      </div>
    </div>
  );
}
