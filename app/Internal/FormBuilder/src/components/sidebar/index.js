/**
 * WordPress dependencies
 */
import React from "react";
import { createSlotFill } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import CrossIcon from "../Icons/CrossIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import QuestionIcon from "../Icons/QuestionIcon";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";

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
  const [date, setDate] = useState(new Date());

  const [samePageMessage, setSamePageMessage] = useState("");

  const [settingData, setSettingData] = useState({
    settings: {
      confirmation_type: {
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
      form_layout: "",
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

  let currentDate = new Date();

  const toggleTab = (index) => {
    setTabState(index);
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

  //   const updateSetting = (index) => (e) => {
  //     const updatedSetting = settingData.map((item, i) => {
  //       if (index === i) {
  //         return { ...item, [e.target.name]: e.target.value };
  //       } else {
  //         return item;
  //       }
  //     });
  //     setSettingData(updatedSetting);
  //   };

  const handleConfirmationType = (index) => {
    toggleTab(index);


    if ("same_page" === index) {
      setSettingData({
        settings: {
          confirmation_type: {
            same_page: {
              message_to_show: "static",
            },
          },
        },
      });
    }
  };

  let submissionType = "hide-form";
  let labelAlign = "center";
  let maxEntries = false;
  let formScheduling = false;

  return (
    <div
      className="mrm-form-builder-sidebar"
      role="region"
      aria-label={__("MRM Block Editor advanced settings.")}
      tabIndex="-1"
    >
      <Panel header={__("Inspector")}>
        <InspectorSlot bubblesVirtually />
      </Panel>
      {console.log(settingData)}

      <Panel className="settings-pannel">
        <div className="components-panel__header">
          <h2>
            <SettingsIcon />
            Settings
          </h2>

          <span className="close-pannel">
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
                    Where do you want to send the user after form confirmation?
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
                  onChange={(e) => handleConfirmationType("same-page")}
                >
                  Same Page
                </span>

                <span
                  className={
                    tabState === "page" ? "tab-nav-item active" : "tab-nav-item"
                  }
                  onChange={(e) => handleConfirmationType("page")}
                >
                  To a page
                </span>

                <span
                  className={
                    tabState === "custom-url"
                      ? "tab-nav-item active"
                      : "tab-nav-item"
                  }
                  onChange={(e) => handleConfirmationType("custom-url")}
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
                    <TextareaControl name="message_to_show" />
                  </div>

                  <div className="single-settings">
                    <label className="settings-label">
                      After Form Submission
                      <span className="mintmrm-tooltip">
                        <QuestionIcon />
                        <p>lorem ipsum dollar sit amet</p>
                      </span>
                    </label>

                    <RadioControl
                      selected={submissionType}
                      options={[
                        { label: "Hide Form", value: "hide-form" },
                        { label: "Reset Form", value: "reset-form" },
                      ]}
                      onChange={(state) =>
                        this.props.setAttributes({ submissionType: state })
                      }
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
                      Message to show
                      <span className="mintmrm-tooltip">
                        <QuestionIcon />
                        <p>lorem ipsum dollar sit amet</p>
                      </span>
                    </label>

                    <SelectControl
                      value=""
                      options={[
                        {
                          value: "",
                          label: "Select option",
                        },
                        {
                          value: "",
                          label: "Select option",
                        },
                      ]}
                    />
                  </div>

                  <div className="single-settings">
                    <label className="settings-label">
                      Redirection Message
                      <span className="mintmrm-tooltip">
                        <QuestionIcon />
                        <p>lorem ipsum dollar sit amet</p>
                      </span>
                    </label>
                    <TextareaControl value="" />
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
                        <p>lorem ipsum dollar sit amet</p>
                      </span>
                    </label>

                    <TextControl value="" onChange={handleConfirmationType} />
                  </div>

                  <div className="single-settings">
                    <label className="settings-label">
                      Redirection Message
                      <span className="mintmrm-tooltip">
                        <QuestionIcon />
                        <p>lorem ipsum dollar sit amet</p>
                      </span>
                    </label>
                    <TextareaControl value="" />
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
                Label Alignment
                <span className="mintmrm-tooltip">
                  <QuestionIcon />
                  <p>lorem ipsum dollar sit amet</p>
                </span>
              </label>

              <RadioControl
                selected={labelAlign}
                options={[
                  { label: "Left", value: "left" },
                  { label: "Center", value: "center" },
                  { label: "Right", value: "right" },
                ]}
                onChange={(state) =>
                  this.props.setAttributes({ labelAlign: state })
                }
              />
            </div>
          </div>
        </PanelBody>

        <PanelBody
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
                  <p>lorem ipsum dollar sit amet</p>
                </span>
              </label>

              <ToggleControl
                checked={formScheduling}
                onChange={(state) => setAttributes({ formScheduling: state })}
              />
            </div>

            <div className="single-settings">
              <label className="settings-label">
                Submission Starts
                <span className="mintmrm-tooltip">
                  <QuestionIcon />
                  <p>lorem ipsum dollar sit amet</p>
                </span>
              </label>

              <DateTimePicker
                currentDate={date}
                onChange={(newDate) => setDate(newDate)}
                is12Hour={true}
                __nextRemoveHelpButton
                __nextRemoveResetButton
              />

              {/* <Dropdown
								position="middle left"
								renderToggle={ ( ( { isOpen, onToggle } ) => (
									<Button isLink onClick={ onToggle } aria-expanded={ isOpen }>
										{ currentDate ? date( 'd.m.Y H:i', currentDate ) : "placeholder" }
									</Button>
								) ) }

								renderContent={ () => (
									<DateTimePicker
										currentDate={ currentDate }
										onChange={ ( newDate ) => setDate( newDate ) }
									/>
								) }>
							</Dropdown> */}
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
                  <p>lorem ipsum dollar sit amet</p>
                </span>
              </label>
              <ToggleControl
                checked={maxEntries}
                onChange={(state) => setAttributes({ maxEntries: state })}
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

                <SelectControl
                  value=""
                  options={[
                    {
                      value: "",
                      label: "Select option",
                    },
                    {
                      value: "",
                      label: "Select option",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </PanelBody>
      </Panel>
    </div>
  );
}

Sidebar.InspectorFill = InspectorFill;

export default Sidebar;
