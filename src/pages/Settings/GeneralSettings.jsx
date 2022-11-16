import SettingsNav from "./SettingsNav";
import { useState, useRef, useEffect } from "react";
import { getLists } from "../../services/List";
import GeneralSettingIcon from "../../components/Icons/GeneralSettingIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";
import ListenForOutsideClicks from "../../components/ListenForOutsideClicks";
import CrossIcon from "../../components/Icons/CrossIcon";
import AddItemDropdown from "../../components/AddItemDropdown";
export default function GeneralSettings() {
    const [selectUnsubscribeOption, setSelectUnsubscribeOption] =
        useState("message");
    const [selectPreferenceOption, setSelectPreferenceOption] =
        useState("no-contact-manage");
    const [optinSelectSwitch, setOptinSelectSwitch] = useState(true);
    const [preferenceSelectSwitch, setPreferenceSelectSwitch] = useState(false);
    const [lists, setLists] = useState([]);
    const [isActiveList, setIsActiveList] = useState(false);
    const [assignLists, setAssignLists] = useState([]);
    const [refresh, setRefresh] = useState();
    const listMenuRef = useRef(null);

    const [listening, setListening] = useState(false);

        // Fetch lists 
        useEffect(() => {
            // Get lists
            getLists().then((results) => {
                results.data.map(function () {
                    setLists(results.data);
                });
            });
        }, [refresh]);

    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            listMenuRef,
            setIsActiveList
        )
    );
    const handleList = () => {
        setIsActiveList(!isActiveList);
    };
    const deleteSelectedList = (e, id) => {
        const index = assignLists.findIndex((item) => item.id == id);

        // already in selected list so remove it from the array
        if (0 <= index) {
            setAssignLists(assignLists.filter((item) => item.id != id));
        }
    };
    const onChangeUnsubscribeValue = (e) => {
        setSelectUnsubscribeOption(e.target.value);
    };
    const onChangePreferenceValue = (e) => {
        setSelectPreferenceOption(e.target.value);
    };
    const handleOptinSwitcher = () => {
        setOptinSelectSwitch(!optinSelectSwitch);
    };
    const handlePreferenceSwitcher = () => {
        setPreferenceSelectSwitch(!preferenceSelectSwitch);
    };
    return (
        <div className="mintmrm-settings-page">
            <div className="mintmrm-container">
                <div className="mintmrm-settings">
                    <h2 class="conatct-heading">Settings</h2>

                    <div className="mintmrm-settings-wrapper">
                        <SettingsNav />

                        <div className="settings-tab-content">
                            <div className="single-tab-content general-tab-content">
                                <div className="tab-body">
                                    <header className="tab-header">
                                        <h4 className="title">
                                            <GeneralSettingIcon />
                                            General Settings
                                        </h4>
                                    </header>

                                    <div className="form-wrapper">
                                        <div className="general-single-settings">
                                            <div className="general-settings-header">
                                                <div className="form-group">
                                                    <label htmlFor="">
                                                        Unsubscribe Page
                                                        Settings
                                                        <span class="mintmrm-tooltip">
                                                            <TooltipQuestionIcon />
                                                            <p>
                                                                Define behaviour
                                                                of the form
                                                                after submission
                                                            </p>
                                                        </span>
                                                    </label>
                                                    <span className="mintmrm-switcher">
                                                        <input
                                                            type="checkbox"
                                                            name="optin-radio"
                                                            id="optin-radio"
                                                            value={
                                                                optinSelectSwitch
                                                            }
                                                            onChange={
                                                                handleOptinSwitcher
                                                            }
                                                            defaultChecked={
                                                                optinSelectSwitch
                                                            }
                                                        />
                                                        <label htmlFor="optin-radio"></label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    optinSelectSwitch
                                                        ? "general-settings-body show"
                                                        : "general-settings-body"
                                                }
                                            >
                                                <div className="form-group">
                                                    <label htmlFor="confirmation-type">
                                                        After Confirmation Type
                                                        <span class="mintmrm-tooltip">
                                                            <TooltipQuestionIcon />
                                                            <p>
                                                                Define behaviour
                                                                of the form
                                                                after submission
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
                                                                checked={
                                                                    selectUnsubscribeOption ===
                                                                    "message"
                                                                }
                                                                onChange={
                                                                    onChangeUnsubscribeValue
                                                                }
                                                            />
                                                            <label for="show-message">
                                                                Show Message
                                                            </label>
                                                        </span>
                                                        <span className="mintmrm-radiobtn">
                                                            <input
                                                                id="redirect-url"
                                                                type="radio"
                                                                name="message-redirect"
                                                                value="redirect"
                                                                checked={
                                                                    selectUnsubscribeOption ===
                                                                    "redirect"
                                                                }
                                                                onChange={
                                                                    onChangeUnsubscribeValue
                                                                }
                                                            />
                                                            <label for="redirect-url">
                                                                Redirect to an
                                                                URL
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>
                                                {selectUnsubscribeOption ===
                                                "message" ? (
                                                    <div className="form-group top-align">
                                                        <label htmlFor="confirmation-message">
                                                            Confirmation Message
                                                            <span class="mintmrm-tooltip">
                                                                <TooltipQuestionIcon />
                                                                <p>
                                                                    Define
                                                                    behaviour of
                                                                    the form
                                                                    after
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
                                                        <label htmlFor="redirect-url">
                                                            Redirect URL
                                                            <span class="mintmrm-tooltip">
                                                                <TooltipQuestionIcon />
                                                                <p>
                                                                    Define
                                                                    behaviour of
                                                                    the form
                                                                    after
                                                                    submission
                                                                </p>
                                                            </span>
                                                        </label>
                                                        <input
                                                            id="redirect-url"
                                                            type="text"
                                                            name="redirect"
                                                            placeholder="Enter Redirect URL"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="general-single-settings">
                                            <div className="general-settings-header">
                                                <div className="form-group">
                                                    <label htmlFor="">
                                                        Preference Page Select
                                                        <span class="mintmrm-tooltip">
                                                            <TooltipQuestionIcon />
                                                            <p>
                                                                Define behaviour
                                                                of the form
                                                                after submission
                                                            </p>
                                                        </span>
                                                    </label>
                                                    <span className="mintmrm-switcher">
                                                        <input
                                                            type="checkbox"
                                                            name="preference-radio"
                                                            id="preference-radio"
                                                            value={
                                                                preferenceSelectSwitch
                                                            }
                                                            onChange={
                                                                handlePreferenceSwitcher
                                                            }
                                                            defaultChecked={
                                                                preferenceSelectSwitch
                                                            }
                                                        />
                                                        <label htmlFor="preference-radio"></label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="general-settings-body show">
                                                <div className="form-group">
                                                    <label htmlFor="redirect-url">
                                                        Select Preference
                                                        <span class="mintmrm-tooltip">
                                                            <TooltipQuestionIcon />
                                                            <p>
                                                                Define behaviour
                                                                of the form
                                                                after submission
                                                            </p>
                                                        </span>
                                                    </label>
                                                    <div className="select-preference-wrapper">
                                                        <span className="mintmrm-radiobtn">
                                                            <input
                                                                id="no-contact-manage"
                                                                type="radio"
                                                                name="select-reference-option"
                                                                value="no-contact-manage"
                                                                checked={
                                                                    selectPreferenceOption ===
                                                                    "no-contact-manage"
                                                                }
                                                                onChange={
                                                                    onChangePreferenceValue
                                                                }
                                                            />
                                                            <label for="no-contact-manage">
                                                                No, Contact can
                                                                not manage list
                                                                subscriptions
                                                            </label>
                                                        </span>
                                                        <span className="mintmrm-radiobtn">
                                                            <input
                                                                id="contact-manage-following"
                                                                type="radio"
                                                                name="select-reference-option"
                                                                value="contact-manage-following"
                                                                checked={
                                                                    selectPreferenceOption ===
                                                                    "contact-manage-following"
                                                                }
                                                                onChange={
                                                                    onChangePreferenceValue
                                                                }
                                                            />
                                                            <label for="contact-manage-following">
                                                                Contact only see
                                                                and manage the
                                                                following list
                                                                subscriptions
                                                            </label>
                                                        </span>
                                                        <span className="mintmrm-radiobtn">
                                                            <input
                                                                id="contact-manage"
                                                                type="radio"
                                                                name="select-reference-option"
                                                                value="contact-manage"
                                                                checked={
                                                                    selectPreferenceOption ===
                                                                    "contact-manage"
                                                                }
                                                                onChange={
                                                                    onChangePreferenceValue
                                                                }
                                                            />
                                                            <label for="contact-manage">
                                                                Contact can see
                                                                all lists and
                                                                manage
                                                                subscriptions
                                                            </label>
                                                        </span>
                                                        <div
                                                            className="form-group"
                                                            ref={listMenuRef}
                                                        >
                                                            <label>
                                                                Assign List
                                                                <span class="mintmrm-tooltip">
                                                                    <TooltipQuestionIcon />
                                                                    <p>
                                                                        Define
                                                                        behaviour
                                                                        of the
                                                                        form
                                                                        after
                                                                        submission
                                                                    </p>
                                                                </span>
                                                            </label>
                                                            <button
                                                                type="button"
                                                                className={
                                                                    isActiveList
                                                                        ? "drop-down-button show"
                                                                        : "drop-down-button"
                                                                }
                                                                onClick={
                                                                    handleList
                                                                }
                                                            >
                                                                {assignLists.length !=
                                                                0
                                                                    ? assignLists?.map(
                                                                          (
                                                                              list
                                                                          ) => {
                                                                              return (
                                                                                  <span
                                                                                      className="single-list"
                                                                                      key={
                                                                                          list.id
                                                                                      }
                                                                                  >
                                                                                      {
                                                                                          list.title
                                                                                      }

                                                                                      <button
                                                                                          className="close-list"
                                                                                          title="Delete"
                                                                                          onClick={(
                                                                                              e
                                                                                          ) =>
                                                                                              deleteSelectedList(
                                                                                                  e,
                                                                                                  list.id
                                                                                              )
                                                                                          }
                                                                                      >
                                                                                          <CrossIcon />
                                                                                      </button>
                                                                                  </span>
                                                                              );
                                                                          }
                                                                      )
                                                                    : "Select Lists"}
                                                            </button>
                                                            <AddItemDropdown
                                                                isActive={
                                                                    isActiveList
                                                                }
                                                                setIsActive={
                                                                    setIsActiveList
                                                                }
                                                                selected={
                                                                    assignLists
                                                                }
                                                                setSelected={
                                                                    setAssignLists
                                                                }
                                                                endpoint="lists"
                                                                items={lists}
                                                                allowMultiple={
                                                                    true
                                                                }
                                                                allowNewCreate={
                                                                    true
                                                                }
                                                                name="list"
                                                                title="CHOOSE LIST"
                                                                refresh={
                                                                    refresh
                                                                }
                                                                setRefresh={
                                                                    setRefresh
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-footer">
                                    <button
                                        className="mintmrm-btn"
                                        type="button"
                                    >
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
