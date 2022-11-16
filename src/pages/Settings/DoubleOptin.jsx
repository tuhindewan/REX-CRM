import React, { useEffect, useState } from "react";
import EmailPendingIcon from "../../components/Icons/EmailPendingIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";
import SuccessfulNotification from "../../components/SuccessfulNotification";
import { submitOptin } from "../../services/Setting";
import { ClearNotification } from "../../utils/admin-notification";
import SettingsNav from "./SettingsNav";

export default function DoubleOptin() {
  const [selectOption, setSelectOption] = useState("message");
  const [selectSwitch, setSelectSwitch] = useState(true);
  const [loader, setLoader] = useState(false);
  const [notificationType, setNotificationType] = useState("success");
  const [showNotification, setShowNotification] = useState("none");
  const [message, setMessage] = useState("");
  const [optinSetting, setOptinSettings] = useState({
    enable: true,
    email_subject: "",
    email_body: "",
    confirmation_type: "message",
    confirmation_message: "",
  });
  const onChangeValue = (e) => {
    setSelectOption(e.target.value);
  };
  const handleSwitcher = () => {
    setSelectSwitch(!selectSwitch);
  };

  // Copy text to clipboard
  const copyToClipboard = (text) => {
    if ("clipboard" in navigator) {
      return navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleSubmit = async () => {
    setLoader(true);
    const optin = {
      optin: optinSetting,
    };
    submitOptin(optin).then((response) => {
      if (true === response.success) {
        setNotificationType("success");
        setShowNotification("block");
        setMessage(response?.message);
      } else {
        setNotificationType("warning");
        setShowNotification("block");
        setMessage(response?.message);
      }
      ClearNotification("none", setShowNotification);
      setLoader(false);
    });
  };

  useEffect(() => {
    let tinyMceConfig = {
      tinymce: {
        wpautop: true,
        plugins:
          "charmap colorpicker compat3x directionality hr image lists media tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview",
        toolbar1:
          "bold italic underline strikethrough | bullist numlist | blockquote hr wp_more | alignleft aligncenter alignright | link unlink | wp_adv ",
        toolbar2:
          "formatselect alignjustify forecolor | fontsizeselect | fontselect |pastetext removeformat charmap | outdent indent | undo redo | wp_help ",
      },
      quicktags: true,
      mediaButtons: true,
    };

    let editorId = "tinymce";
    if (tinymce.get(editorId)) {
      tinymce.remove("#" + editorId);
    }
    wp.editor.initialize(editorId, tinyMceConfig);

    if (tinymce.get("confirmation-message")) {
      tinymce.remove("#" + "confirmation-message");
    }
    wp.editor.initialize("confirmation-message", tinyMceConfig);
  }, [selectSwitch]);

  return (
    <>
      <div className="mintmrm-settings-page">
        <div className="mintmrm-container">
          <div className="mintmrm-settings">
            <h2 class="conatct-heading">Settings</h2>
            <div className="mintmrm-settings-wrapper">
              <SettingsNav />

              <div className="settings-tab-content">
                <div className="single-tab-content double-optin-tab-content">
                  <div className="tab-body">
                    <header className="tab-header">
                      <h4 className="title">
                        <EmailPendingIcon />
                        Double Opt-In Settings
                      </h4>
                    </header>

                    <div className="form-wrapper">
                      <div className="form-group">
                        <label htmlFor="">
                          Double Opt-In
                          <span class="mintmrm-tooltip">
                            <TooltipQuestionIcon />
                            <p>Define behaviour of the form after submission</p>
                          </span>
                        </label>
                        <span className="mintmrm-switcher">
                          <input
                            type="checkbox"
                            name="checkedB"
                            id="st"
                            value={selectSwitch}
                            onChange={handleSwitcher}
                            defaultChecked={selectSwitch}
                          />
                          <label htmlFor="st"></label>
                        </span>
                      </div>

                      {selectSwitch ? (
                        <>
                          <div className="form-group">
                            <label htmlFor="">
                              Email Subject
                              <span class="mintmrm-tooltip">
                                <TooltipQuestionIcon />
                                <p>
                                  Define behaviour of the form after submission
                                </p>
                              </span>
                            </label>
                            <input
                              type="text"
                              name="email-subject"
                              placeholder="Enter Email Subject"
                            />
                          </div>
                          <div className="form-group top-align">
                            <label htmlFor="">
                              Email Body
                              <span class="mintmrm-tooltip">
                                <TooltipQuestionIcon />
                                <p>
                                  Define behaviour of the form after submission
                                </p>
                              </span>
                            </label>

                            <textarea
                              id="tinymce"
                              rows="4"
                              placeholder="Enter Email Body"
                            ></textarea>
                            <p>
                              Use{" "}
                              <button
                                onClick={() =>
                                  copyToClipboard("{{subscribe_link}}")
                                }
                              >
                                {"{{subscribe_link}}"}
                              </button>{" "}
                              in the email body to generate a subcribe link
                            </p>
                          </div>
                          <hr />

                          <div className="form-group">
                            <label htmlFor="">
                              After Confirmation Type
                              <span class="mintmrm-tooltip">
                                <TooltipQuestionIcon />
                                <p>
                                  Define behaviour of the form after submission
                                </p>
                              </span>
                            </label>
                            <div>
                              <span className="mintmrm-radiobtn">
                                <input
                                  id="show-message"
                                  type="radio"
                                  name="message-redirect"
                                  value="message"
                                  checked={selectOption === "message"}
                                  onChange={onChangeValue}
                                />
                                <label for="show-message">Show Message</label>
                              </span>
                              <span className="mintmrm-radiobtn">
                                <input
                                  id="redirect-url"
                                  type="radio"
                                  name="message-redirect"
                                  value="redirect"
                                  checked={selectOption === "redirect"}
                                  onChange={onChangeValue}
                                />
                                <label for="redirect-url">
                                  Redirect to an URL
                                </label>
                              </span>
                            </div>
                          </div>
                          {selectOption === "message" ? (
                            <div className="form-group top-align">
                              <label htmlFor="">
                                Confirmation Message
                                <span class="mintmrm-tooltip">
                                  <TooltipQuestionIcon />
                                  <p>
                                    Define behaviour of the form after
                                    submission
                                  </p>
                                </span>
                              </label>
                              <textarea
                                id="confirmation-message"
                                rows="3"
                                placeholder="Enter Confirmation Message"
                              ></textarea>
                            </div>
                          ) : (
                            <div className="form-group">
                              <label htmlFor="">
                                Redirect URL
                                <span class="mintmrm-tooltip">
                                  <TooltipQuestionIcon />
                                  <p>
                                    Define behaviour of the form after
                                    submission
                                  </p>
                                </span>
                              </label>
                              <input
                                type="text"
                                name="redirect"
                                placeholder="Enter Redirect URL"
                              />
                            </div>
                          )}
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="tab-footer">
                  <button
                    className="mintmrm-btn"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Save Settings
                    {loader && <span className="mintmrm-loader"></span>}
                  </button>
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
        notificationType={notificationType}
        setNotificationType={setNotificationType}
        message={message}
      />
    </>
  );
}
