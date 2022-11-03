import { default as React, useEffect, useRef, useState } from "react";
import {
  Link,
  matchPath,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import AlertPopup from "../AlertPopup";
import CampaignCustomSelect from "../Campaign/CampaignCustomSelect";
import DoubleAngleLeftIcon from "../Icons/DoubleAngleLeftIcon";
import DownArrowIcon from "../Icons/DownArrowIcon";
import EditIcon from "../Icons/EditIcon";
import MobileIcon from "../Icons/MobileIcon";
import TabIcon from "../Icons/TabIcon";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import UpArrowIcon from "../Icons/UpArrowIcon";
import InputItem from "../InputItem";
import ListenForOutsideClicks from "../ListenForOutsideClicks";
import LoadingIndicator from "../LoadingIndicator";
import SuccessfulNotification from "../SuccessfulNotification";
import WarningNotification from "../WarningNotification";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import {  ClearNotification } from "../../utils/admin-notification";
const FormEditor = (props) => {
  // Hide WordPress admin notices
  const location = useLocation();
  const match = matchPath({ path: "form-builder" }, location.pathname);
  if (match) {
    const elems = document.getElementsByClassName("notice");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "none";
    }
  }
  const [preview, setPreview] = useState("editor");

  // lists
  const [lists, setLists] = useState([]);

  // tags
  const [tags, setTags] = useState([]);

  //loading
  const [loading, setLoading] = useState(true);

  const [selectedLists, setSelectedLists] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const [moreOption, setMoreOption] = useState(false);
  const [listDropdown, setListDropdown] = useState(false);
  const [settingsPannel, setSettingsPannel] = useState(false);

  const [enable, setEnable] = useState(false);

  const params = useParams();

  const [load, setLoad] = useState(false);

  const [id, setId] = useState(params.id);

  const [blockData, setBlockData] = useState();
  const [showPreview, setShowPreview] = useState(false);

  const [showNotification, setShowNotification] = useState("none");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState("none");

  const [savedSuccess, setSaveSuccess] = useState(false);

  const [recipientLists, setRecipientLists] = useState([]);
  const [recipientTags, setRecipientTags] = useState([]);
  const [dropDown, setDropDown] = useState(false);

  const [groupIds, setGroupIds] = useState([]);
  const [saveLoader, setsaveLoader] = useState(false);

  const [isReloaded, setIsReloaded] = useState(false);

  const [formData, setFormData] = useState({});
  const [resTime, setResTime] = useState(2000);

  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  useEffect(
    ListenForOutsideClicks(listening, setListening, menuRef, setDropDown)
  );

  const toggleEnable = () => {
    setEnable(!enable);
  };

  // Hide alert popup after click on ok
  const onShowAlert = async (status) => {
    setShowAlert(status);
  };

  useEffect(() => {
    localStorage.setItem("settingsPannel", "show");
    const getFormData = async () => {
      const start = new Date();
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/forms/get-title-group/${id}`
      );
      const resJson = await res.json();

      if (200 === resJson.code) {
        setFormData(resJson.data[0]);
        setRecipientLists(resJson.data[0]?.group_ids?.lists);
        setRecipientTags(resJson.data[0]?.group_ids?.tags);
        setLoading(false);

        setResTime(new Date() - start + 500);
      }
    };
    if (id) {
      getFormData();
    } else {
      setLoading(false);
    }

    //reload();
  }, []);

  const reload = () => {
    let hashCount = 0;
    const loc = window.location.hash;

    for (let i = 0; i < loc.length; i++) {
      if (loc[i] === "#") {
        hashCount = hashCount + 1;
      }
    }

    if (1 === hashCount) {
      window.location = window.location + "#";
      window.location.reload();
    }
  };

  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveFormAsDraft = async () => {
    const storedBlocks = window.localStorage.getItem("getmrmblocks");

    const settingData = window.localStorage.getItem("getsettings");

    setsaveLoader(true);

    const post_data = {
      title: formData?.title,
      form_body: storedBlocks,
      group_ids: {
        lists: recipientLists,
        tags: recipientTags,
      },
      status: 0,
      meta_fields: {
        settings: settingData,
      },
    };

    if (id == undefined) {
      const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(post_data),
      });
      const responseData = await res.json();
      setShowNotification("block");
      setMessage(responseData?.message);
      if (201 === responseData?.code) {
        setSaveSuccess(true);
        setsaveLoader(false);
        setId(responseData?.data);
      } else if (200 === responseData?.code) {
        setSaveSuccess(false);
        setsaveLoader(false);
      }
      ClearNotification('none',setShowNotification)
      return () => clearTimeout(timer);
    } else {
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/forms/${id}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(post_data),
        }
      );
      const responseData = await res.json();
      setShowNotification("block");
      setMessage(responseData?.message);
      if (201 === responseData?.code) {
        setSaveSuccess(true);
        setsaveLoader(false);
      } else if (200 === responseData?.code) {
        setSaveSuccess(false);
        setsaveLoader(false);
      }
      ClearNotification('none',setShowNotification)
    }
  };

  const saveForm = async () => {
    const storedBlocks = window.localStorage.getItem("getmrmblocks");

    const settingData = window.localStorage.getItem("getsettings");

    setsaveLoader(true);

    const post_data = {
      title: formData?.title,
      form_body: storedBlocks,
      group_ids: {
        lists: recipientLists,
        tags: recipientTags,
      },
      status: 1,
      meta_fields: {
        settings: settingData,
      },
    };

    if (id == undefined) {
      const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(post_data),
      });
      const responseData = await res.json();
      setShowNotification("block");
      setMessage(responseData?.message);
      if (201 === responseData?.code) {
        setSaveSuccess(true);
        setsaveLoader(false);
        setId(responseData?.data);
      } else if (200 === responseData?.code) {
        setSaveSuccess(false);
        setsaveLoader(false);
      }
      ClearNotification('none',setShowNotification)
    } else {
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/forms/${id}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(post_data),
        }
      );
      const responseData = await res.json();
      setShowNotification("block");
      setMessage(responseData?.message);
      if (201 === responseData?.code) {
        setSaveSuccess(true);
        setsaveLoader(false);
      } else if (200 === responseData?.code) {
        setSaveSuccess(false);
        setsaveLoader(false);
      }
      ClearNotification('none',setShowNotification)
    }
  };

  useEffect(() => {
    if (id) {
      navigate(`/form-builder/${id}`);
    } else {
      navigate(`/form-builder/`);
    }
  }, [id]);

  const [positionName, setPositionName] = useState("");
  const handleFormPosition = (param, name) => {
    setFormData((prevState) => ({
      ...prevState,
      form_position: param,
    }));
    setPositionName(name);
    setToggleDropdown(false);
  };

  //-------show more option click function-------
  const clickShowOption = () => {
    setMoreOption((current) => !current);
  };

  //-------list click function-------
  const showDropDown = () => {
    setDropDown(!dropDown);
  };

  //-------settings pannel open function-------
  const showSettingsPannel = () => {
    if ("show" === localStorage.settingsPannel) {
      const el = document.getElementsByClassName("getdave-sbe-block-editor");
      el[0].classList.remove("show-settings-pannel");
      localStorage.setItem("settingsPannel", "hide");
    } else {
      const el = document.getElementsByClassName("getdave-sbe-block-editor");
      el[0].classList.add("show-settings-pannel");
      localStorage.setItem("settingsPannel", "show");
    }
  };

  const handlePreview = (view) => {
    setPreview(view);
    const block = window.localStorage.getItem("getmrmblocks");
    setBlockData(block);
  };

  // to fix relaod issue
  const [loadComponent, setLoadComponent] = useState(true);

  useEffect(() => {
    const toRef = setTimeout(() => {
      setLoadComponent(false);
      clearTimeout(toRef);
    }, resTime); // resTime is calculated from server response time
  }, [loadComponent]);

  return (
    <>
      <div className="form-editor-page">
        {loadComponent ? (
          <LoadingIndicator type="table-full" />
        ) : (
          <div className="form-editor-topbar">
            <div className="topbar-left">
              <Link to="/forms/">
                <button className="back-button">
                  <DoubleAngleLeftIcon />
                </button>
              </Link>

              <div className="responsive-section">
                <button
                  className={
                    "editor" === preview ? "edit-view active" : "edit-view"
                  }
                  onClick={(e) => handlePreview("editor")}
                >
                  <EditIcon />
                </button>
                <button
                  className={
                    "desktop" === preview
                      ? "desktop-view active"
                      : "desktop-view"
                  }
                  onClick={(e) => handlePreview("desktop")}
                >
                  <TabIcon />
                </button>
                <button
                  className={
                    "mobile" === preview ? "mobile-view active" : "mobile-view"
                  }
                  onClick={(e) => handlePreview("mobile")}
                >
                  <MobileIcon />
                </button>
              </div>
            </div>

            <div className="topbar-right">
              <button
                className={moreOption ? "three-dot-btn show" : "three-dot-btn"}
                onClick={clickShowOption}
              >
                <ThreeDotIcon />
                <ul className="mintmrm-dropdown">
                  <li onClick={saveFormAsDraft}>Save as Draft</li>
                  {/*<li>Change Template</li>*/}
                </ul>
              </button>
              {/* <button
            className="mintmrm-btn settings"
            onClick={showSettingsPannel}
          >
            <SettingIcon />
          </button> */}
              <button
                className={
                  saveLoader
                    ? "mintmrm-btn enable show-loader"
                    : "mintmrm-btn enable"
                }
                onClick={saveForm}
              >
                {id ? "Update" : "Publish"}
                <span className="mintmrm-loader"></span>
              </button>
            </div>
          </div>
        )}

        <div className="form-editor-body">
          {loadComponent ? (
            <LoadingIndicator type="table-full" />
          ) : (
            <div className="form-editor-title-area">
              <InputItem
                label="Title*"
                name="title"
                handleChange={handleChange}
                value={formData?.title}
                placeholder="Enter Form title"
              />

              <div className="form-group list">
                <label className="list-label">Assign To*</label>

                <div className="list-content" ref={menuRef}>
                  {recipientLists?.length == 0 && recipientTags?.length == 0 ? (
                    <button className="all-recipients" onClick={showDropDown}>
                      All Subscriber
                      {dropDown ? <UpArrowIcon /> : <DownArrowIcon />}
                    </button>
                  ) : (
                    <button
                      className="all-recipients selected show"
                      onClick={showDropDown}
                    >
                      <span className="tags">{recipientTags?.length} Tags</span>
                      <span className="from">and</span>
                      <span className="lists">
                        {recipientLists?.length} Lists.
                      </span>
                      <span className="recipients"></span>
                      {dropDown ? <UpArrowIcon /> : <DownArrowIcon />}
                    </button>
                  )}

                  <CampaignCustomSelect
                    dropDown={dropDown}
                    setRecipientTags={setRecipientTags}
                    recipientTags={recipientTags}
                    setRecipientLists={setRecipientLists}
                    recipientLists={recipientLists}
                  />
                </div>
              </div>
            </div>
          )}

          {/*Preview Mobile and Desktop*/}

          {preview === "mobile" ? (
            <MobileView blockData={blockData} />
          ) : preview === "desktop" ? (
            <>
              <DesktopView blockData={blockData} />
            </>
          ) : (
            ""
          )}

          <div
            id="mrm-block-editor"
            className={
              "show" === localStorage.settingsPannel
                ? "getdave-sbe-block-editor block-editor show-settings-pannel"
                : "getdave-sbe-block-editor block-editor"
            }
            style={{ display: preview === "editor" ? "block" : "none" }}
          ></div>

          <div className="mintmrm-container" style={{ display: showAlert }}>
            <AlertPopup showAlert={showAlert} onShowAlert={onShowAlert} />
          </div>
          {savedSuccess && (
            <SuccessfulNotification
              display={showNotification}
              message={message}
            />
          )}
          {!savedSuccess && (
            <WarningNotification display={showNotification} message={message} />
          )}
        </div>
      </div>
    </>
  );
};

export default FormEditor;
