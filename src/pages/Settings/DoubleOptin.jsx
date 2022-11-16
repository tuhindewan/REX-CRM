import React, { useEffect, useState } from "react";
import EmailPendingIcon from "../../components/Icons/EmailPendingIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";
import SettingsNav from "./SettingsNav";

export default function DoubleOptin() {
  const [selectOption, setSelectOption] = useState("message");
  const [selectSwitch, setSelectSwitch] = useState(true);
  const onChangeValue = (e) => {
    setSelectOption(e.target.value);
  };
  const handleSwitcher = () => {
    setSelectSwitch(!selectSwitch);
  };

  useEffect(() => {
    let tinyMceConfig = {
      tinymce: {
        wpautop: true,
        plugins:
          "charmap colorpicker compat3x directionality fullscreen hr image lists media paste tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview",
        toolbar1:
          "bold italic underline strikethrough | bullist numlist | blockquote hr wp_more | alignleft aligncenter alignright | link unlink | fullscreen | wp_adv",
        toolbar2:
          "formatselect alignjustify forecolor | pastetext removeformat charmap | outdent indent | undo redo | wp_help",
      },
      quicktags: true,
      mediaButtons: true,
    };
    let editorId = "tinymce";
    if (tinymce.get(editorId)) {
      tinymce.remove("#" + editorId);
    }
    wp.editor.initialize(editorId, tinyMceConfig);
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
                <div className="single-tab-content business-tab-content">
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
                          </div>
                          <hr></hr>
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
    </>
  );
}
