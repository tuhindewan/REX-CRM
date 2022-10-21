/**
 * WordPress dependencies
 */
import React from "react";
import {
  BrowserRouter,
  Router,
  useNavigate,
  useParams,
} from "react-router-dom";
import { createSlotFill, G } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import CrossIcon from "../Icons/CrossIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import QuestionIcon from "../Icons/QuestionIcon";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";
import FormEditor from "../../../../../../src/components/Form/FormEditor";
import { cleanForSlug, withFontSizes } from "@wordpress/editor";

const {
  TextControl,
  SelectControl,
  RangeControl,
  TextareaControl,
  Button,
  Dropdown,
  Panel,
  PanelBody,
  RadioGroup,
  RadioControl,
  ToggleControl,
  Radio,
  DateTimePicker,
  DatePicker,
} = wp.components;

const { Component, RawHTML, useEffect, useState } = wp.element;

const {
  InspectorControls,
  ColorPalette,
  MediaUpload,
  PanelColorSettings,
  withColors,
  useBlockProps,
} = wp.blockEditor;

const { Slot: InspectorSlot, Fill: InspectorFill } = createSlotFill(
  "MRMBlockEditorSidebarInspector"
);

function Sidebar() {
  const [tabState, setTabState] = useState("same-page");
  const [count, setCount] = useState(0);

  // preparing settings data for backend as JSON
  const [settingData, setSettingData] = useState({
    settings: {
      confirmation_type: {
        selected_confirmation_type: "",
        same_page: {
          message_to_show: "",
          after_form_submission: "",
        },
        to_a_page: {
          page: "",
          redirection_message: "",
        },
        to_a_custom_url: {
          custom_url: "",
          custom_redirection_message: "",
        },
      },
      form_layout: {
        form_placement: "",
        form_animation: "",
      },
      schedule: {
        form_scheduling: false,
        submission_start: {
          date: "",
          time: "",
        },
      },
      restriction: {
        max_entries: false,
        max_number: "",
        max_type: "",
      },
    },
  });

  /* @settings variables */

  // confirmation tabs
  const [selectedConfirmationType, setSelectedConfirmationType] = useState("");
  // confirmation type "Same Page"
  const [messageToShow, setMessageToShow] = useState("");
  const [afterFormSubmission, setAfterFormSubmission] = useState("hide-form");
  // confirmation type "To A Page"
  const [page, setPage] = useState("");
  const [redirectionMessage, setRedirectionMessage] = useState("");
  // confirmation type "Custom URL"
  const [customURL, setCustomURL] = useState("");
  const [customRedirectionMessage, setCustomRedirectionMessage] = useState("");

  // form position and animation
  const [formPosition, setFormPosition] = useState("default");
  const [formAnimation, setFormAnimation] = useState("none");

  // form scheduling
  const [formScheduling, setFormScheduling] = useState(false);
  const [date, setDate] = useState(new Date());
  const [submissionStartDate, setSubmissionStartDate] = useState("");
  const [submissionStartTime, setSubmissionStartTime] = useState("");

  // form restriction
  const [maxEntries, setMaxEntries] = useState(false);
  const [maxNumber, setMaxNumber] = useState();
  const [maxType, setMaxType] = useState();

  // hook
  const params = useParams();

  // get id from URL
  const [id, setId] = useState(window.location.hash.slice(15));

  const [formData, setFormData] = useState({});

  // it's a copy of main settingData
  const [prevSetting, setPrevSetting] = useState({});

  // confirmation tab
  const [currentTab, setCurrentTab] = useState("same-page");

  const [pageData, setPageData] = useState([]);
  const [pageOptions, setPageOptions] = useState([]);

  const [pageId, setPageId] = useState();
  const [selectedPageId, setSelectedPageId] = useState();

  useEffect(() => {
    if (id) {
      const getFormData = async () => {
        const res = await fetch(
          `${window.MRM_Vars.api_base_url}mrm/v1/forms/${id}`
        );
        const resJson = await res.json();

        if (200 === resJson.code) {
          setFormData(resJson.data);
          setSettingData(JSON.parse(resJson.data?.meta_fields?.settings));
          setPrevSetting(JSON.parse(resJson.data?.meta_fields?.settings));
        }
      };
      getFormData();
    }
  }, []);

  const [isValidUrl, setIsValidUrl] = useState(true);
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    setIsValidUrl(!!pattern.test(str));
    return !!pattern.test(str);
  }

  useEffect(() => {
    console.log(prevSetting);
    // set selected confiramation type
    if (prevSetting?.settings?.confirmation_type?.selected_confirmation_type) {
      setSelectedConfirmationType(
        prevSetting?.settings?.confirmation_type?.selected_confirmation_type
      );
    } else {
      setSelectedConfirmationType("same-page");
    }

    // set "Message to show" in same page tab
    if (prevSetting?.settings?.confirmation_type?.same_page?.message_to_show) {
      setMessageToShow(
        prevSetting?.settings?.confirmation_type?.same_page?.message_to_show
      );
    } else {
      setMessageToShow("Form submitted succesfully.");
    }

    // set "After form submission" in same page tab
    if (
      prevSetting?.settings?.confirmation_type?.same_page?.after_form_submission
    ) {
      setAfterFormSubmission(
        prevSetting?.settings?.confirmation_type?.same_page
          ?.after_form_submission
      );
    } else {
      setAfterFormSubmission("none");
    }

    // set "Page" for "to a page" tab
    if (prevSetting?.settings?.confirmation_type?.to_a_page?.page) {
      setSelectedPageId(
        prevSetting?.settings?.confirmation_type?.to_a_page?.page
      );
    } else {
      setSelectedPageId("");
    }

    // set "Redirection message" for "to a page" tab
    if (
      prevSetting?.settings?.confirmation_type?.to_a_page?.redirection_message
    ) {
      setRedirectionMessage(
        prevSetting?.settings?.confirmation_type?.to_a_page?.redirection_message
      );
    } else {
      setRedirectionMessage(
        "Welcome to this page. Form Submitted Successfully!"
      );
    }

    // set custom url for "to a custom url" tab
    if (prevSetting?.settings?.confirmation_type?.to_a_custom_url?.custom_url) {
      setCustomURL(
        prevSetting?.settings?.confirmation_type?.to_a_custom_url?.custom_url
      );
      setIsValidUrl(
        validURL(
          prevSetting?.settings?.confirmation_type?.to_a_custom_url?.custom_url
        )
      );
    } else {
      setCustomURL("https://");
    }

    // set message for a "to a custom url" tab
    if (
      prevSetting?.settings?.confirmation_type?.to_a_custom_url
        ?.custom_redirection_message
    ) {
      setCustomRedirectionMessage(
        prevSetting?.settings?.confirmation_type?.to_a_custom_url
          ?.custom_redirection_message
      );
    } else {
      setCustomRedirectionMessage("You are redirected to a new url.");
    }

    // set form layout position
    if (prevSetting?.settings?.form_layout?.form_position) {
      setFormPosition(prevSetting?.settings?.form_layout?.form_position);
    } else {
      setFormPosition("default");
    }

    //set form layout animation
    if (prevSetting?.settings?.form_layout?.form_animation) {
      setFormAnimation(prevSetting?.settings?.form_layout?.form_animation);
    } else {
      setFormAnimation("none");
    }
  }, [prevSetting]);

  useEffect(async () => {
    if ("same-page" === currentTab) {
      setSettingData({
        settings: {
          confirmation_type: {
            selected_confirmation_type: "same-page",
            same_page: {
              message_to_show: messageToShow,
              after_form_submission: afterFormSubmission,
            },
          },
          form_layout: {
            form_position: formPosition,
            form_animation: formAnimation,
          },
          schedule: {
            form_scheduling: formScheduling,
            submission_start: {
              date: submissionStartDate,
              time: submissionStartTime,
            },
          },
          restriction: {
            max_entries: maxEntries,
            max_number: count,
            max_type: "",
          },
        },
      });
    } else if ("page" === currentTab) {
      setSettingData({
        settings: {
          confirmation_type: {
            selected_confirmation_type: "page",
            to_a_page: {
              page: selectedPageId,
              redirection_message: redirectionMessage,
            },
          },
          form_layout: {
            form_position: formPosition,
            form_animation: formAnimation,
          },
          schedule: {
            form_scheduling: formScheduling,
            submission_start: {
              date: submissionStartDate,
              time: submissionStartTime,
            },
          },
          restriction: {
            max_entries: maxEntries,
            max_number: count,
            max_type: "",
          },
        },
      });
    } else if ("custom-url" === currentTab) {
      setSettingData({
        settings: {
          confirmation_type: {
            selected_confirmation_type: "custom-url",
            to_a_custom_url: {
              custom_url: customURL,
              custom_redirection_message: customRedirectionMessage,
            },
          },
          form_layout: {
            form_position: formPosition,
            form_animation: formAnimation,
          },
          schedule: {
            form_scheduling: formScheduling,
            submission_start: {
              date: submissionStartDate,
              time: submissionStartTime,
            },
          },
          restriction: {
            max_entries: maxEntries,
            max_number: count,
            max_type: "",
          },
        },
      });
    }
  }, [
    selectedConfirmationType,
    messageToShow,
    afterFormSubmission,
    selectedPageId,
    redirectionMessage,
    customURL,
    customRedirectionMessage,
    formPosition,
    formAnimation,
    formScheduling,
    submissionStartDate,
    submissionStartTime,
    maxEntries,
    count,
    maxType,
    currentTab,
  ]);

  useEffect(() => {
    localStorage.setItem("getsettings", JSON.stringify(settingData));
  }, [settingData]);

  let currentDate = new Date();

  const toggleTab = (index) => {
    setTabState(index);
    if ("page" === index) {
      const getPageData = async () => {
        const res = await fetch(`${window.MRM_Vars.api_base_url}wp/v2/pages`);
        const resJson = await res.json();

        if (200 == res.status) {
          setPageData(resJson);
        }
      };
      getPageData();
    }
  };

  const handlePageChange = (state) => {
    setSelectedPageId(state);
  };

  useEffect(() => {
    const optionArray = [];
    pageData?.map((page) => {
      optionArray.push({
        value: page.id,
        label: page.id + " - " + page.title.rendered,
      });
    });
    setPageOptions(optionArray);
  }, [pageData]);

  //-------settings pannel open function-------
  const showSettingsPannel = (event) => {
    const el = document.getElementsByClassName("getdave-sbe-block-editor");
    el[0].classList.remove("show-settings-pannel");
  };

  //-----counter increment-------
  function counterIncrement() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  //-----counter decrement-------
  function counterDecrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  const handleConfirmationType = (index) => {
    setCurrentTab(index);
    toggleTab(index);
  };

  let submissionType = "hide-form";
  let labelAlign = "center";

  const dateTimeSplitter = () => {
    const convertedDate = JSON.stringify(date);
    setSubmissionStartDate(convertedDate.slice(1, 11));
    setSubmissionStartTime(convertedDate.slice(12, 20));
  };

  useEffect(() => {
    dateTimeSplitter();
  }, [date]);

  const handleCustomURL = (e) => {
    setCustomURL(e);
    validURL(e);
  };

  return (
    <>
      <div
        className="mrm-form-builder-sidebar"
        role="region"
        aria-label={__("MRM Block Editor advanced settings.")}
        tabIndex="-1"
      >
        <Panel header={__("Inspector")}>
          <InspectorSlot bubblesVirtually />
        </Panel>

        <Panel className="settings-pannel">
          <div className="components-panel__header">
            <h2>
              <SettingsIcon />
              Settings
            </h2>

            <span className="close-pannel" onClick={showSettingsPannel}>
              <CrossIcon />
            </span>
          </div>

          <PanelBody
            title="Confirmation Settings"
            className="confirmation-settings"
            initialOpen={true}
          >
            <div className="pannelbody-wrapper">
              <div className="pannel-single-settings">
                <label className="settings-label">
                  Confirmation Type
                  <span className="mintmrm-tooltip">
                    <QuestionIcon />
                    <p>
                      Where do you want to send the user after form
                      confirmation?
                    </p>
                  </span>
                </label>

                <div className="pannel-tab-nav">
                  <span
                    className={
                      tabState === "same-page"
                        ? "tab-nav-item active"
                        : "tab-nav-item"
                    }
                    onClick={() => handleConfirmationType("same-page")}
                  >
                    Same Page
                  </span>

                  <span
                    className={
                      tabState === "page"
                        ? "tab-nav-item active"
                        : "tab-nav-item"
                    }
                    onClick={() => handleConfirmationType("page")}
                  >
                    To a page
                  </span>

                  <span
                    className={
                      tabState === "custom-url"
                        ? "tab-nav-item active"
                        : "tab-nav-item"
                    }
                    onClick={() => handleConfirmationType("custom-url")}
                  >
                    To a custom URL
                  </span>
                </div>

                <div className="pannel-tab-content">
                  <div
                    className={
                      tabState === "same-page"
                        ? "single-tab-content same-page-tab-content active"
                        : "single-tab-content same-page-tab-content"
                    }
                  >
                    <div className="single-settings">
                      <label className="settings-label">
                        Message to show
                        <span className="mintmrm-tooltip">
                          <QuestionIcon />
                          <p>What message you want to show to the use?</p>
                        </span>
                      </label>
                      <TextareaControl
                        name="message_to_show"
                        defaultValue={messageToShow}
                        onChange={(e) => setMessageToShow(e)}
                      />
                    </div>

                    <div className="single-settings">
                      <label className="settings-label">
                        After Form Submission
                        <span className="mintmrm-tooltip">
                          <QuestionIcon />
                          <p>Define behaviour of the form after submission</p>
                        </span>
                      </label>

                      <RadioControl
                        selected={afterFormSubmission}
                        options={[
                          { label: "None", value: "none" },
                          { label: "Hide Form", value: "hide_form" },
                          { label: "Reset Form", value: "reset_form" },
                        ]}
                        onChange={(state) => setAfterFormSubmission(state)}
                      />
                    </div>
                  </div>

                  <div
                    className={
                      tabState === "page"
                        ? "single-tab-content same-page-tab-content active"
                        : "single-tab-content same-page-tab-content"
                    }
                  >
                    <div className="single-settings">
                      <label className="settings-label">
                        Select a page
                        <span className="mintmrm-tooltip">
                          <QuestionIcon />
                          <p>
                            Which page you want to redirect after the submitted
                            the form?
                          </p>
                        </span>
                      </label>
                      <SelectControl
                        value={selectedPageId}
                        options={pageOptions}
                        onChange={(state) => handlePageChange(state)}
                      />
                    </div>

                    <div className="single-settings">
                      <label className="settings-label">
                        Redirection Message
                        <span className="mintmrm-tooltip">
                          <QuestionIcon />
                          <p>
                            What is the message after redirection of a page?
                          </p>
                        </span>
                      </label>
                      <TextareaControl
                        name="redirection_message"
                        defaultValue={redirectionMessage}
                        onChange={(e) => setRedirectionMessage(e)}
                      />
                    </div>
                  </div>

                  <div
                    className={
                      tabState === "custom-url"
                        ? "single-tab-content same-page-tab-content active"
                        : "single-tab-content same-page-tab-content"
                    }
                  >
                    <div className="single-settings">
                      <label className="settings-label">
                        Custom URL
                        <span className="mintmrm-tooltip">
                          <QuestionIcon />
                          <p>Enter a custom URL to redirect</p>
                        </span>
                      </label>

                      <TextControl
                        name="custom-url"
                        value={customURL}
                        onChange={(e) => handleCustomURL(e)}
                      />
                      {!isValidUrl && (
                        <p className="validation-warning">
                          **Warning : Your URL is not in a valid format**
                        </p>
                      )}
                    </div>

                    <div className="single-settings">
                      <label className="settings-label">
                        Redirection Message
                        <span className="mintmrm-tooltip">
                          <QuestionIcon />
                          <p>Reidrectional message for custom URL</p>
                        </span>
                      </label>
                      <TextareaControl
                        name="custom-redirection-message"
                        defaultValue={customRedirectionMessage}
                        onChange={(e) => setCustomRedirectionMessage(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PanelBody>

          <PanelBody
            title="Form Layout"
            className="form-layout-settings"
            initialOpen={false}
          >
            <div className="pannelbody-wrapper">
              <div className="single-settings">
                <label className="settings-label">
                  Form Placement
                  <span className="mintmrm-tooltip">
                    <QuestionIcon />
                    <p>Animation to show up your form</p>
                  </span>
                </label>

                <RadioControl
                  selected={formPosition}
                  options={[
                    { label: "Default", value: "default" },
                    { label: "Pop Up", value: "popup" },
                    { label: "Fly Ins", value: "flyins" },
                  ]}
                  onChange={(state) => setFormPosition(state)}
                />
              </div>
            </div>
          </PanelBody>

          {"default" !== formPosition && (
            <PanelBody
              title="Form Animation"
              className="form-animation-settings"
              initialOpen={false}
            >
              <div className="pannelbody-wrapper">
                <div className="single-settings">
                  <label className="settings-label">
                    Animation Type
                    <span className="mintmrm-tooltip">
                      <QuestionIcon />
                      <p>Type of animation to show your form</p>
                    </span>
                  </label>

                  <SelectControl
                    value={formAnimation}
                    options={[
                      { label: "None", value: "none" },
                      { label: "Fade In", value: "fade_in" },
                      { label: "Slide In Up", value: "slide_in_up" },
                    ]}
                    onChange={(state) => setFormAnimation(state)}
                  />
                </div>
              </div>
            </PanelBody>
          )}

          {/* <PanelBody
            title="Schedule"
            className="schedule-settings"
            initialOpen={false}
          >
            <div className="pannelbody-wrapper">
              <div className="single-settings inline-label">
                <label className="settings-label">
                  Form Scheduling
                  <span className="mintmrm-tooltip">
                    <QuestionIcon />
                    <p>Schedule your form submission time</p>
                  </span>
                </label>

                <ToggleControl
                  checked={formScheduling}
                  onChange={(state) => setFormScheduling(!formScheduling)}
                />
              </div>

              <div className="single-settings">
                <label className="settings-label">
                  Submission Starts
                  <span className="mintmrm-tooltip">
                    <QuestionIcon />
                    <p>Take Submissions from...</p>
                  </span>
                </label>

                <DateTimePicker
                  currentDate={date}
                  onChange={(newDate) => setDate(newDate)}
                  is12Hour={true}
                  __nextRemoveHelpButton
                  __nextRemoveResetButton
                />
              </div>
            </div>
          </PanelBody>

          <PanelBody
            title="Restrictions"
            className="restrictions-settings"
            initialOpen={false}
          >
            <div className="pannelbody-wrapper">
              <div className="single-settings inline-label">
                <label className="settings-label">
                  Maximum Number of Entries
                  <span className="mintmrm-tooltip">
                    <QuestionIcon />
                    <p>Restrict the total number of submissions</p>
                  </span>
                </label>
                <ToggleControl
                  checked={maxEntries}
                  onChange={(state) => setMaxEntries(!maxEntries)}
                />
              </div>

              <div className="single-settings">
                <label className="settings-label">Submission Starts </label>

                <div className="submission-counter-wrapper">
                  <div className="counter">
                    <span
                      className="counter-increment"
                      onClick={counterDecrement}
                    >
                      <MinusIcon />
                    </span>

                    <input type="number" min="1" value={count} />

                    <span
                      className="counter-decrement"
                      onClick={counterIncrement}
                    >
                      <PlusIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </PanelBody> */}
        </Panel>
      </div>
    </>
  );
}

Sidebar.InspectorFill = InspectorFill;

export default Sidebar;
