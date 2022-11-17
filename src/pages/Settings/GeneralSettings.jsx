import SettingsNav from "./SettingsNav";
import React, { useState, useRef, useEffect } from "react";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import GeneralSettingIcon from "../../components/Icons/GeneralSettingIcon";
import TooltipQuestionIcon from "../../components/Icons/TooltipQuestionIcon";
import ListenForOutsideClicks, {
    useOutsideAlerter,
} from "../../components/ListenForOutsideClicks";
import CrossIcon from "../../components/Icons/CrossIcon";
import AddItemDropdown from "../../components/AddItemDropdown";
import {
    getGeneralSettings,
    submitGeneralSetting,
} from "../../services/Setting";
import SuccessfulNotification from "../../components/SuccessfulNotification";

export default function GeneralSettings() {
    const [loader, setLoader] = useState(false);
    const [notificationType, setNotificationType] = useState("success");
    const [showNotification, setShowNotification] = useState("none");
    const [message, setMessage] = useState("");
    const [selectUnsubscribeOption, setSelectUnsubscribeOption] =
        useState("message");
    const [selectPreferenceOption, setSelectPreferenceOption] =
        useState("no-contact-manage");
    const [userSelectSwitch, setUserSelectSwitch] = useState(false);
    const [commentSelectSwitch, setCommentSelectSwitch] = useState(false);

    const [lists, setLists] = useState([]);
    const [commentLists, setCommentLists] = useState([]);
    const [tags, setTags] = useState([]);
    const [isActiveTag, setIsActiveTag] = useState(false);
    const [assignTags, setAssignTags] = useState([]);
    const [administratorLists, setAdministratorLists] = useState([]);
    const [tutorLists, setTutorLists] = useState([]);
    const [shopLists, setShopLists] = useState([]);
    const [isActiveList, setIsActiveList] = useState(false);
    const [isActiveCommentList, setIsActiveCommentList] = useState(false);
    const [isActiveAdministratorList, setIsActiveAdministratorList] =
        useState(false);
    const [isActiveTutorList, setIsActiveTutorList] = useState(false);
    const [isActiveShopList, setIsActiveShopList] = useState(false);
    const [assignLists, setAssignLists] = useState([]);
    const [assignCommentLists, setAssignCommentLists] = useState([]);
    const [assignAdministratorLists, setAssignAdministratorLists] = useState(
        []
    );
    const [assignTutorLists, setAssignTutorLists] = useState([]);
    const [assignShopLists, setAssignShopLists] = useState([]);
    const [refresh, setRefresh] = useState();
    const listMenuRef = useRef(null);
    const listCommentMenuRef = useRef(null);
    const listAdministratorMenuRef = useRef(null);
    const listTutorMenuRef = useRef(null);
    const listShopMenuRef = useRef(null);
    const tagMenuRef = useRef(null);
    const [redirectUrl, setRedirectUrl] = useState("");
    const [editableFirstname, setEditableFirstname] = useState(false);
    const [editableLastname, setEditableLastname] = useState(false);
    const [editableStatus, setEditableStatus] = useState(false);
    const [editabList, setEditableList] = useState(false);

    const [listening, setListening] = useState(false);
    // Get General setting data
    const [confirmation_message, setConfirmation_message] = useState("");

    useEffect(() => {
        getGeneralSettings().then((response) => {
            console.log(response)
            const unsubscriber_settings = response.unsubscriber_settings;
            const preference_settings = response.preference;

            if(unsubscriber_settings.length > 0){
                setRedirectUrl(unsubscriber_settings.url)
                setSelectUnsubscribeOption(unsubscriber_settings.confirmation_type ? unsubscriber_settings.confirmation_type : 'message')
                setConfirmation_message(unsubscriber_settings.confirmation_message)
            }

            //preference
            if(preference_settings.length > 0){
                setSelectPreferenceOption(preference_settings.preference ? preference_settings.preference : "no-contact-manage")
                setEditableFirstname(preference_settings.primary_fields ? preference_settings.primary_fields.first_name : false )
                setEditableLastname(preference_settings.primary_fields ? preference_settings.primary_fields.last_name : false)
                setEditableStatus(preference_settings.primary_fields ? preference_settings.primary_fields.status: false)
                setEditableList(preference_settings.primary_fields ? preference_settings.primary_fields.list : false)
                setAssignLists(preference_settings.lists)
            }

        });
    }, []);

    //Handle Submit general setting
    const handleGeneralSubmit = () => {
        const settings = {
            unsubscriber_settings: {
                confirmation_type: selectUnsubscribeOption,
                url: redirectUrl,
                confirmation_message: confirmation_message,
            },
            preference: {
                enable: true,
                preference: selectPreferenceOption,
                lists: assignLists,
                primary_fields: {
                    first_name: editableFirstname,
                    last_name: editableLastname,
                    status: editableStatus,
                    list: editabList,
                },
            },
        };
        submitGeneralSetting(settings).then((response) => {
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
    };

    //Handle Confirmation message
    const handleChange = (event) => {
        const { name, value } = event.target;
        setConfirmation_message(value);
    };
    //Handle Confirmation Url
    const handleChangeURL = (event) => {
        const { name, value } = event.target;
        setRedirectUrl(value);
    };

    // Handle Primary edit Field
    const handleEditPrimaryFields = (event) => {
        const { name, value, checked } = event.target;
        if ("first-name" == name) {
            setEditableFirstname(checked);
        }
        if ("last-name" == name) {
            setEditableLastname(checked);
        }
        if ("status" == name) {
            setEditableStatus(checked);
        }
        if ("lists" == name) {
            setEditableList(checked);
        }
    };

    // Fetch lists
    useEffect(() => {
        // Get lists
        getLists().then((results) => {
            results.data.map(function () {
                setLists(results.data);
                setAdministratorLists(results.data);
                setTutorLists(results.data);
                setShopLists(results.data);
                setCommentLists(results.data);
            });
        });
        // Get tags
        getTags().then((results) => {
            setTags(results.data);
        });
    }, [refresh]);

    // useEffect(
    //     ListenForOutsideClicks(
    //         listening,
    //         setListening,
    //         listMenuRef,
    //         setIsActiveList
    //     )
    // );
    // Outside click events for preference page List checkbox dropdown
    useOutsideAlerter(listMenuRef, setIsActiveList);
    useOutsideAlerter();
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            tagMenuRef,
            setIsActiveTag
        )
    );
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            listAdministratorMenuRef,
            setIsActiveAdministratorList
        )
    );
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            listTutorMenuRef,
            setIsActiveTutorList
        )
    );
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            listShopMenuRef,
            setIsActiveShopList
        )
    );
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            tagMenuRef,
            setIsActiveTag
        )
    );
    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            listCommentMenuRef,
            setIsActiveCommentList
        )
    );
    const handleList = () => {
        setIsActiveList(!isActiveList);
    };
    const handleTag = () => {
        setIsActiveTag(!isActiveTag);
    };
    const handleAdministratorList = () => {
        setIsActiveAdministratorList(!isActiveAdministratorList);
    };
    const handleTutorList = () => {
        setIsActiveTutorList(!isActiveTutorList);
    };
    const handleShopList = () => {
        setIsActiveShopList(!isActiveShopList);
    };
    const handleCommentList = () => {
        setIsActiveCommentList(!isActiveCommentList);
    };
    const deleteSelectedList = (e, id) => {
        const index = assignLists.findIndex((item) => item.id == id);

        // already in selected list so remove it from the array
        if (0 <= index) {
            setAssignLists(assignLists.filter((item) => item.id != id));
        }
    };
    const deleteSelectedAdministratorList = (e, id) => {
        const index = assignAdministratorLists.findIndex(
            (item) => item.id == id
        );

        // already in selected list so remove it from the array
        if (0 <= index) {
            setAssignAdministratorLists(
                assignAdministratorLists.filter((item) => item.id != id)
            );
        }
    };
    const deleteSelectedTutorList = (e, id) => {
        const index = assignTutorLists.findIndex((item) => item.id == id);

        // already in selected list so remove it from the array
        if (0 <= index) {
            setAssignTutorLists(
                assignTutorLists.filter((item) => item.id != id)
            );
        }
    };
    const deleteSelectedShopList = (e, id) => {
        const index = assignShopLists.findIndex((item) => item.id == id);

        // already in selected list so remove it from the array
        if (0 <= index) {
            setAssignShopLists(assignShopLists.filter((item) => item.id != id));
        }
    };
    const deleteSelectedCommentList = (e, id) => {
        const index = assignCommentLists.findIndex((item) => item.id == id);

        // already in selected list so remove it from the array
        if (0 <= index) {
            setAssignCommentLists(
                assignCommentLists.filter((item) => item.id != id)
            );
        }
    };
    const deleteSelectedTag = (e, id) => {
        const index = assignTags.findIndex((item) => item.id == id);

        // already in selected list so remove it from the array
        if (0 <= index) {
            setAssignTags(assignTags.filter((item) => item.id != id));
        }
    };
    const onChangeUnsubscribeValue = (e) => {
        setSelectUnsubscribeOption(e.target.value);
    };
    const onChangePreferenceValue = (e) => {
        setSelectPreferenceOption(e.target.value);
    };

    const handleUserSwitcher = () => {
        setUserSelectSwitch(!userSelectSwitch);
    };

    const handleCommentSwitcher = () => {
        setCommentSelectSwitch(!commentSelectSwitch);
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
                                                </div>
                                            </div>
                                            <div className="general-settings-body show">
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
                                                            name="confirmation_message"
                                                            value={
                                                                confirmation_message
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
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
                                                            type="text"
                                                            name="redirect"
                                                            placeholder="Enter Redirect URL"
                                                            value={redirectUrl}
                                                            onChange={
                                                                handleChangeURL
                                                            }
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
                                                </div>
                                            </div>
                                            <div className="general-settings-body show">
                                                <div className="form-group top-align">
                                                    <label htmlFor="">
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
                                                        {selectPreferenceOption ==
                                                        "contact-manage-following" ? (
                                                            <div
                                                                className="form-group list-section"
                                                                ref={
                                                                    listMenuRef
                                                                }
                                                            >
                                                                <label>
                                                                    Lists
                                                                    <span class="mintmrm-tooltip">
                                                                        <TooltipQuestionIcon />
                                                                        <p>
                                                                            Define
                                                                            behaviour
                                                                            of
                                                                            the
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
                                                                    items={
                                                                        lists
                                                                    }
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
                                                                    prefix="lists"
                                                                />
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="form-group top-align">
                                                    <label htmlFor="">
                                                        Editable Primary Fields
                                                        <span class="mintmrm-tooltip">
                                                            <TooltipQuestionIcon />
                                                            <p>
                                                                Define behaviour
                                                                of the form
                                                                after submission
                                                            </p>
                                                        </span>
                                                    </label>
                                                    <div className="editable-primary-field">
                                                        <span className="mintmrm-checkbox">
                                                            <input
                                                                id="first-name"
                                                                type="checkbox"
                                                                name="first-name"
                                                                checked={
                                                                    editableFirstname
                                                                }
                                                                onChange={
                                                                    handleEditPrimaryFields
                                                                }
                                                            />
                                                            <label for="first-name">
                                                                First name
                                                            </label>
                                                        </span>
                                                        <span className="mintmrm-checkbox">
                                                            <input
                                                                id="last-name"
                                                                type="checkbox"
                                                                name="last-name"
                                                                checked={
                                                                    editableLastname
                                                                }
                                                                onChange={
                                                                    handleEditPrimaryFields
                                                                }
                                                            />
                                                            <label for="last-name">
                                                                Last name
                                                            </label>
                                                        </span>
                                                        <span className="mintmrm-checkbox">
                                                            <input
                                                                id="status"
                                                                type="checkbox"
                                                                name="status"
                                                                checked={
                                                                    editableStatus
                                                                }
                                                                onChange={
                                                                    handleEditPrimaryFields
                                                                }
                                                            />
                                                            <label for="status">
                                                                Status
                                                            </label>
                                                        </span>
                                                        <span className="mintmrm-checkbox">
                                                            <input
                                                                id="lists"
                                                                type="checkbox"
                                                                name="lists"
                                                                checked={
                                                                    editabList
                                                                }
                                                                onChange={
                                                                    handleEditPrimaryFields
                                                                }
                                                            />
                                                            <label for="lists">
                                                                Lists
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="general-single-settings">
                                            <div className="general-settings-header">
                                                <div className="form-group">
                                                    <label htmlFor="">
                                                        User Signup Settings
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
                                                            name="user-signup-radio"
                                                            id="user-signup-radio"
                                                            value={
                                                                userSelectSwitch
                                                            }
                                                            onChange={
                                                                handleUserSwitcher
                                                            }
                                                            defaultChecked={
                                                                userSelectSwitch
                                                            }
                                                        />
                                                        <label htmlFor="user-signup-radio"></label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    userSelectSwitch
                                                        ? "general-settings-body user-signup-settings show"
                                                        : "general-settings-body user-signup-settings"
                                                }
                                            >
                                                <div className="wp-user">
                                                    <span>WP User Role</span>
                                                    <span>
                                                        Lists to be added
                                                    </span>
                                                </div>
                                                <div
                                                    className="form-group"
                                                    ref={
                                                        listAdministratorMenuRef
                                                    }
                                                >
                                                    <label htmlFor="">
                                                        Administrator
                                                    </label>
                                                    <div className="administrator">
                                                        <button
                                                            type="button"
                                                            className={
                                                                isActiveAdministratorList
                                                                    ? "drop-down-button show"
                                                                    : "drop-down-button"
                                                            }
                                                            onClick={
                                                                handleAdministratorList
                                                            }
                                                        >
                                                            {assignAdministratorLists.length !=
                                                            0
                                                                ? assignAdministratorLists?.map(
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
                                                                                          deleteSelectedAdministratorList(
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
                                                                isActiveAdministratorList
                                                            }
                                                            setIsActive={
                                                                setIsActiveAdministratorList
                                                            }
                                                            selected={
                                                                assignAdministratorLists
                                                            }
                                                            setSelected={
                                                                setAssignAdministratorLists
                                                            }
                                                            endpoint="lists"
                                                            items={
                                                                administratorLists
                                                            }
                                                            allowMultiple={true}
                                                            allowNewCreate={
                                                                true
                                                            }
                                                            name="list"
                                                            title="CHOOSE LIST"
                                                            refresh={refresh}
                                                            setRefresh={
                                                                setRefresh
                                                            }
                                                            prefix="administrator"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="form-group"
                                                    ref={listTutorMenuRef}
                                                >
                                                    <label htmlFor="">
                                                        Tutor Instructor
                                                    </label>
                                                    <div className="tutor-instructor">
                                                        <button
                                                            type="button"
                                                            className={
                                                                isActiveTutorList
                                                                    ? "drop-down-button show"
                                                                    : "drop-down-button"
                                                            }
                                                            onClick={
                                                                handleTutorList
                                                            }
                                                        >
                                                            {assignTutorLists.length !=
                                                            0
                                                                ? assignTutorLists?.map(
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
                                                                                          deleteSelectedTutorList(
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
                                                                isActiveTutorList
                                                            }
                                                            setIsActive={
                                                                setIsActiveTutorList
                                                            }
                                                            selected={
                                                                assignTutorLists
                                                            }
                                                            setSelected={
                                                                setAssignTutorLists
                                                            }
                                                            endpoint="lists"
                                                            items={tutorLists}
                                                            allowMultiple={true}
                                                            allowNewCreate={
                                                                true
                                                            }
                                                            name="list"
                                                            title="CHOOSE LIST"
                                                            refresh={refresh}
                                                            setRefresh={
                                                                setRefresh
                                                            }
                                                            prefix="tutor"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="form-group"
                                                    ref={listShopMenuRef}
                                                >
                                                    <label htmlFor="">
                                                        Shop manager
                                                    </label>
                                                    <div className="shop-manager">
                                                        <button
                                                            type="button"
                                                            className={
                                                                isActiveShopList
                                                                    ? "drop-down-button show"
                                                                    : "drop-down-button"
                                                            }
                                                            onClick={
                                                                handleShopList
                                                            }
                                                        >
                                                            {assignShopLists.length !=
                                                            0
                                                                ? assignShopLists?.map(
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
                                                                                          deleteSelectedShopList(
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
                                                                isActiveShopList
                                                            }
                                                            setIsActive={
                                                                setIsActiveShopList
                                                            }
                                                            selected={
                                                                assignShopLists
                                                            }
                                                            setSelected={
                                                                setAssignShopLists
                                                            }
                                                            endpoint="lists"
                                                            items={shopLists}
                                                            allowMultiple={true}
                                                            allowNewCreate={
                                                                true
                                                            }
                                                            name="list"
                                                            title="CHOOSE LIST"
                                                            refresh={refresh}
                                                            setRefresh={
                                                                setRefresh
                                                            }
                                                            prefix="shop"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="general-single-settings">
                                            <div className="general-settings-header">
                                                <div className="form-group">
                                                    <label htmlFor="">
                                                        Comment Form
                                                        Subscription Settings
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
                                                            name="comment-radio"
                                                            id="comment-radio"
                                                            value={
                                                                commentSelectSwitch
                                                            }
                                                            onChange={
                                                                handleCommentSwitcher
                                                            }
                                                            defaultChecked={
                                                                commentSelectSwitch
                                                            }
                                                        />
                                                        <label htmlFor="comment-radio"></label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    commentSelectSwitch
                                                        ? "general-settings-body show"
                                                        : "general-settings-body"
                                                }
                                            >
                                                <div
                                                    className="form-group"
                                                    ref={listCommentMenuRef}
                                                >
                                                    <label>
                                                        Assign List
                                                        <span class="mintmrm-tooltip">
                                                            <TooltipQuestionIcon />
                                                            <p>
                                                                Define behaviour
                                                                of the form
                                                                after submission
                                                            </p>
                                                        </span>
                                                    </label>
                                                    <button
                                                        type="button"
                                                        className={
                                                            isActiveCommentList
                                                                ? "drop-down-button show"
                                                                : "drop-down-button"
                                                        }
                                                        onClick={
                                                            handleCommentList
                                                        }
                                                    >
                                                        {assignCommentLists.length !=
                                                        0
                                                            ? assignCommentLists?.map(
                                                                  (list) => {
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
                                                                                      deleteSelectedCommentList(
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
                                                            isActiveCommentList
                                                        }
                                                        setIsActive={
                                                            setIsActiveCommentList
                                                        }
                                                        selected={
                                                            assignCommentLists
                                                        }
                                                        setSelected={
                                                            setAssignCommentLists
                                                        }
                                                        endpoint="lists"
                                                        items={commentLists}
                                                        allowMultiple={true}
                                                        allowNewCreate={true}
                                                        name="list"
                                                        title="CHOOSE LIST"
                                                        refresh={refresh}
                                                        setRefresh={setRefresh}
                                                        prefix="comment"
                                                    />
                                                </div>
                                                <div
                                                    className="form-group"
                                                    ref={tagMenuRef}
                                                >
                                                    <label>
                                                        Assign Tag
                                                        <span class="mintmrm-tooltip">
                                                            <TooltipQuestionIcon />
                                                            <p>
                                                                Define behaviour
                                                                of the form
                                                                after submission
                                                            </p>
                                                        </span>
                                                    </label>
                                                    <button
                                                        type="button"
                                                        className={
                                                            isActiveTag
                                                                ? "drop-down-button show"
                                                                : "drop-down-button"
                                                        }
                                                        onClick={handleTag}
                                                    >
                                                        {assignTags.length != 0
                                                            ? assignTags?.map(
                                                                  (tag) => {
                                                                      return (
                                                                          <span
                                                                              className="single-list"
                                                                              key={
                                                                                  tag.id
                                                                              }
                                                                          >
                                                                              {
                                                                                  tag.title
                                                                              }

                                                                              <button
                                                                                  className="close-list"
                                                                                  title="Delete"
                                                                                  onClick={(
                                                                                      e
                                                                                  ) =>
                                                                                      deleteSelectedTag(
                                                                                          e,
                                                                                          tag.id
                                                                                      )
                                                                                  }
                                                                              >
                                                                                  <CrossIcon />
                                                                              </button>
                                                                          </span>
                                                                      );
                                                                  }
                                                              )
                                                            : "Select Tags"}
                                                    </button>
                                                    <AddItemDropdown
                                                        isActive={isActiveTag}
                                                        setIsActive={
                                                            setIsActiveTag
                                                        }
                                                        selected={assignTags}
                                                        setSelected={
                                                            setAssignTags
                                                        }
                                                        endpoint="tags"
                                                        items={tags}
                                                        allowMultiple={true}
                                                        allowNewCreate={true}
                                                        name="tag"
                                                        title="CHOOSE TAG"
                                                        refresh={refresh}
                                                        setRefresh={setRefresh}
                                                        prefix="comment"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-footer">
                                    <button
                                        className="mintmrm-btn"
                                        type="button"
                                        onClick={handleGeneralSubmit}
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
            <SuccessfulNotification
                display={showNotification}
                setShowNotification={setShowNotification}
                notificationType={notificationType}
                setNotificationType={setNotificationType}
                message={message}
            />
        </div>
    );
}
