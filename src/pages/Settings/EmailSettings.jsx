import React, { useState, useEffect } from "react";
import SettingsNav from "./SettingsNav";
import EmailSettingsIcon from "../../components/Icons/EmailSettingsIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";

export default function EmailSettings() {
  // Email Settings data if available
  const [emailSettingsData, setEmailSettingsData] = useState({});
  const [getResponseCode, setGetResponseCode] = useState();

  const [values, setValues] = useState();
  const [changesOccured, setChangesOccured] = useState(false);

  useEffect(() => {
    const getEmailSettings = async () => {
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/settings/email`
      );
      const resJson = await res.json();
      setGetResponseCode(resJson.code);
      setEmailSettingsData(resJson.data);
      setValues({ ...values, ...resJson.data });
    };
    getEmailSettings();
  }, []);

  const handleSubmit = async () => {
    await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/settings/email`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      if (response.ok) {
        setChangesOccured(false);
        return response.json();
      }
    });
  };

  // Set values from list form
  const handleChange = (e) => {
    setChangesOccured(true);
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
                        {400 === getResponseCode ? (
                          <input
                            type="text"
                            name="from_name"
                            placeholder="Enter From Name"
                            onInput={handleChange}
                          />
                        ) : (
                          <input
                            type="text"
                            name="from_name"
                            placeholder="Enter From Name"
                            defaultValue={emailSettingsData?.from_name}
                            onInput={handleChange}
                          />
                        )}
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
                        {400 === getResponseCode ? (
                          <input
                            type="email"
                            name="from_email"
                            placeholder="Enter From Email"
                            onInput={handleChange}
                          />
                        ) : (
                          <input
                            type="email"
                            name="from_email"
                            placeholder="Enter From Email"
                            defaultValue={emailSettingsData?.from_email}
                            onInput={handleChange}
                          />
                        )}
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
                        {400 === getResponseCode ? (
                          <input
                            type="text"
                            name="reply_name"
                            placeholder="Enter Reply-to Name"
                            onInput={handleChange}
                          />
                        ) : (
                          <input
                            type="text"
                            name="reply_name"
                            placeholder="Enter Reply-to Name"
                            defaultValue={emailSettingsData?.reply_name}
                            onInput={handleChange}
                          />
                        )}
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
                        {400 === getResponseCode ? (
                          <input
                            type="teemailxt"
                            name="reply_email"
                            placeholder="Enter Reply-to Email"
                            onInput={handleChange}
                          />
                        ) : (
                          <input
                            type="email"
                            name="reply_email"
                            placeholder="Enter Reply-to Email"
                            defaultValue={emailSettingsData?.reply_email}
                            onInput={handleChange}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="tab-footer">
                    {changesOccured ? (
                      <button
                        className="mintmrm-btn"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Save Settings
                        <span className="mintmrm-loader"></span>
                      </button>
                    ) : (
                      <button
                        className="mintmrm-btn"
                        type="button"
                        onClick={handleSubmit}
                        disabled={true}
                        style={{ color: "gray" }}
                      >
                        Save Settings
                        <span className="mintmrm-loader"></span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              {/* end settings-tab-content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
