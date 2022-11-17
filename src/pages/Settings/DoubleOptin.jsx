import React, { useEffect, useRef, useState } from "react";
import EmailPendingIcon from "../../components/Icons/EmailPendingIcon";
import Search from "../../components/Icons/Search";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";
import ListenForOutsideClicks from "../../components/ListenForOutsideClicks";
import SuccessfulNotification from "../../components/SuccessfulNotification";
import { getOptinSettings, submitOptin } from "../../services/Setting";
import { ClearNotification } from "../../utils/admin-notification";
import SettingsNav from "./SettingsNav";

export default function DoubleOptin() {
  const [selectOption, setSelectOption] = useState("message");
  const [selectSwitch, setSelectSwitch] = useState(true);
  const [loader, setLoader] = useState(false);
  const [notificationType, setNotificationType] = useState("success");
  const [showNotification, setShowNotification] = useState("none");
  const [message, setMessage] = useState("");
  const [selectPage, setSelectpage] = useState(false);
  const [pages, setpages] = useState([
    {
      title: "Privacy",
      id: "0",
    },
    {
      title: "Cart",
      id: "1",
    },
    {
      title: "Checkout",
      id: "2",
    },
    {
      title: "Shop",
      id: "3",
    },
    {
      title: "Blog",
      id: "4",
    },
  ]);
  const selectPageRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [errors, setErrors] = useState({});
  const [isValidate, setIsValidate] = useState(true);

  useEffect(
    ListenForOutsideClicks(
      listening,
      setListening,
      selectPageRef,
      setSelectpage
    )
  );
  const [selectPageOption, setSelectPageOption] = useState("");

  const handleSelectOption = (title) => {
    setSelectPageOption(title);
  };

  const handlePageSelect = () => {
    setSelectpage(!selectPage);
  };
  const [optinSetting, setOptinSettings] = useState({
    enable: true,
    email_subject: "Please Confirm Subscription.",
    email_body:
      "Please Confirm Subscription. {{subscribe_link}}. <br> If you receive this email by mistake, simply delete it.",
    confirmation_type: "message",
    confirmation_message: "Subscription Confirmed. Thank you.",
    url: "",
  });
  const onChangeValue = (e) => {
    setSelectOption(e.target.value);
    setErrors({});
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

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    validate(name, value);
    setOptinSettings((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = (name, value) => {
    switch (name) {
      case "url":
        if (
          !new RegExp(
            "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
          ).test(value)
        ) {
          setErrors({
            ...errors,
            url: "Enter a valid URL",
          });
          setIsValidate(false);
        } else {
          setErrors({});
          setIsValidate(true);
        }
        break;
        if (value.length > 35) {
          setErrors({
            ...errors,
            last_name: "Last name character limit exceeded 35 characters",
          });
          setIsValidate(false);
        } else {
          setErrors({});
          setIsValidate(true);
        }
        break;
      default:
        break;
    }
  };

  // Submit optin object and hit post request
  const handleSubmit = async () => {
    setLoader(true);
    const body_content = tinymce.get("tinymce").getContent();
    const message_content = tinymce.get("confirmation-message").getContent();
    optinSetting.enable = selectSwitch;
    optinSetting.confirmation_type = selectOption;
    optinSetting.email_body = body_content;
    optinSetting.confirmation_message = message_content;
    const optin = {
      optin: optinSetting,
    };
    if (isValidate) {
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
      });
    }
    setLoader(false);
    ClearNotification("none", setShowNotification);
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

  useEffect(() => {
    getOptinSettings().then((response) => {
      tinymce.get("tinymce").setContent(response.email_body);
      tinymce
        .get("confirmation-message")
        .setContent(response.confirmation_message);
      setSelectSwitch(response.enable);
      setSelectOption(response.confirmation_type);
      setOptinSettings(response);
    });
  }, []);

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
                            name="enable"
                            id="st"
                            value={selectSwitch}
                            onChange={handleSwitcher}
                            checked={selectSwitch}
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
                              name="email_subject"
                              value={optinSetting.email_subject}
                              placeholder="Enter Email Subject"
                              onChange={handleChange}
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
                              <span className="mintmrm-radiobtn">
                                <input
                                  id="redirect-page"
                                  type="radio"
                                  name="message-redirect"
                                  value="redirect-page"
                                  checked={selectOption === "redirect-page"}
                                  onChange={onChangeValue}
                                />
                                <label for="redirect-page">
                                  Redirect to a page
                                </label>
                              </span>
                            </div>
                          </div>
                          <div
                            className={
                              selectOption === "message"
                                ? "form-group top-align confirmation-message-section show"
                                : "form-group top-align confirmation-message-section"
                            }
                          >
                            <label htmlFor="">
                              Confirmation Message
                              <span class="mintmrm-tooltip">
                                <TooltipQuestionIcon />
                                <p>
                                  Define behaviour of the form after submission
                                </p>
                              </span>
                            </label>
                            <textarea
                              id="confirmation-message"
                              rows="3"
                              placeholder="Enter Confirmation Message"
                            ></textarea>
                          </div>
                          <div
                            className={
                              selectOption === "redirect"
                                ? "form-group redirect-url-section show"
                                : "form-group redirect-url-section"
                            }
                          >
                            <label htmlFor="">
                              Redirect URL
                              <span class="mintmrm-tooltip">
                                <TooltipQuestionIcon />
                                <p>
                                  Define behaviour of the form after submission
                                </p>
                              </span>
                            </label>
                            <input
                              type="text"
                              name="url"
                              value={optinSetting.url}
                              placeholder="Enter Redirect URL"
                              onChange={handleChange}
                            />
                            <p
                              className={
                                errors?.url
                                  ? "error-message show"
                                  : "error-message"
                              }
                            >
                              {errors?.url}
                            </p>
                          </div>
                          <div
                            className={
                              selectOption === "redirect-page"
                                ? "form-group page-dropdown-section show"
                                : "form-group page-dropdown-section"
                            }
                          >
                            <label htmlFor="">
                              Redirect Page
                              <span class="mintmrm-tooltip">
                                <TooltipQuestionIcon />
                                <p>
                                  Define behaviour of the form after submission
                                </p>
                              </span>
                            </label>
                            <div
                              className="redirect-page-button"
                              ref={selectPageRef}
                            >
                              <button
                                className={
                                  selectPage
                                    ? "drop-down-button show"
                                    : "drop-down-button"
                                }
                                onClick={handlePageSelect}
                              >
                                {selectPageOption
                                  ? selectPageOption
                                  : "Select Page"}
                              </button>
                              <ul
                                className={
                                  selectPage
                                    ? "mintmrm-dropdown show"
                                    : "mintmrm-dropdown"
                                }
                              >
                                <li className="searchbar">
                                  <span class="pos-relative">
                                    <Search />
                                    <input
                                      type="search"
                                      name="column-search"
                                      placeholder="Search or create"
                                    />
                                  </span>
                                </li>
                                {pages.map((item, index) => {
                                  return (
                                    <li
                                      onClick={() =>
                                        handleSelectOption(item.title)
                                      }
                                      key={index}
                                      className={"single-column"}
                                    >
                                      {item.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
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
