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
    const [unsubscribeSelectSwitch, setUnsubscribeSelectSwitch] =
        useState(true);
    const [userSelectSwitch, setUserSelectSwitch] = useState(false);
    const [preferenceSelectSwitch, setPreferenceSelectSwitch] = useState(false);
    const [commentSelectSwitch, setCommentSelectSwitch] = useState(false);

    const [lists, setLists] = useState([]);
    const [administratorlists, setAdministratorLists] = useState([]);
    const [tutorlists, setTutorLists] = useState([]);
    const [shoplists, setShopLists] = useState([]);
    const [isActiveList, setIsActiveList] = useState(false);
    const [isActiveAdministratorList, setIsActiveAdministratorList] =
        useState(false);
    const [isActiveTutorList, setIsActiveTutorList] = useState(false);
    const [isActiveShopList, setIsActiveShopList] = useState(false);
    const [assignLists, setAssignLists] = useState([]);
    const [assignAdministratorLists, setAssignAdministratorLists] = useState(
        []
    );
    const [assignTutorLists, setAssignTutorLists] = useState([]);
    const [assignShopLists, setAssignShopLists] = useState([]);
    const [refresh, setRefresh] = useState();
    const [refreshAdministrator, setRefreshAdministrator] = useState();
    const [refreshTutor, setRefreshTutor] = useState();
    const [refreshShop, setRefreshShop] = useState();
    const listMenuRef = useRef(null);
    const listAdministratorMenuRef = useRef(null);
    const listTutorMenuRef = useRef(null);
    const listShopMenuRef = useRef(null);

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
    useEffect(() => {
        // Get lists
        getLists().then((results) => {
            results.data.map(function () {
                setAdministratorLists(results.data);
            });
        });
    }, [refreshAdministrator]);
    useEffect(() => {
        // Get lists
        getLists().then((results) => {
            results.data.map(function () {
                setTutorLists(results.data);
            });
        });
    }, [refreshTutor]);
    useEffect(() => {
        // Get lists
        getLists().then((results) => {
            results.data.map(function () {
                setShopLists(results.data);
            });
        });
    }, [refreshShop]);

    useEffect(
        ListenForOutsideClicks(
            listening,
            setListening,
            listMenuRef,
            setIsActiveList
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
    const handleList = () => {
        setIsActiveList(!isActiveList);
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
        setUnsubscribeSelectSwitch(!unsubscribeSelectSwitch);
    };
    const handleUserSwitcher = () => {
        setUserSelectSwitch(!userSelectSwitch);
    };
    const handlePreferenceSwitcher = () => {
        setPreferenceSelectSwitch(!preferenceSelectSwitch);
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
                                                    <span className="mintmrm-switcher">
                                                        <input
                                                            type="checkbox"
                                                            name="unsubscribe-radio"
                                                            id="unsubscribe-radio"
                                                            value={
                                                                unsubscribeSelectSwitch
                                                            }
                                                            onChange={
                                                                handleOptinSwitcher
                                                            }
                                                            defaultChecked={
                                                                unsubscribeSelectSwitch
                                                            }
                                                        />
                                                        <label htmlFor="unsubscribe-radio"></label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    unsubscribeSelectSwitch
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
                                            <div
                                                className={
                                                    preferenceSelectSwitch
                                                        ? "general-settings-body show"
                                                        : "general-settings-body"
                                                }
                                            >
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
                                                            />
                                                            <label for="first-name">
                                                                First name
                                                            </label>
                                                        </span>
                                                        <span className="mintmrm-checkbox">
                                                            <input
                                                                id="last-name"
                                                                type="checkbox"
                                                            />
                                                            <label for="last-name">
                                                                Last name
                                                            </label>
                                                        </span>
                                                        <span className="mintmrm-checkbox">
                                                            <input
                                                                id="status"
                                                                type="checkbox"
                                                            />
                                                            <label for="status">
                                                                Status
                                                            </label>
                                                        </span>
                                                        <span className="mintmrm-checkbox">
                                                            <input
                                                                id="lists"
                                                                type="checkbox"
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
                                                                administratorlists
                                                            }
                                                            allowMultiple={true}
                                                            allowNewCreate={
                                                                true
                                                            }
                                                            name="list"
                                                            title="CHOOSE LIST"
                                                            refresh={
                                                                refreshAdministrator
                                                            }
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
                                                            items={tutorlists}
                                                            allowMultiple={true}
                                                            allowNewCreate={
                                                                true
                                                            }
                                                            name="list"
                                                            title="CHOOSE LIST"
                                                            refresh={
                                                                refreshTutor
                                                            }
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
                                                            items={shoplists}
                                                            allowMultiple={true}
                                                            allowNewCreate={
                                                                true
                                                            }
                                                            name="list"
                                                            title="CHOOSE LIST"
                                                            refresh={
                                                                refreshShop
                                                            }
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
                                            <div className="general-settings-body"></div>
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
