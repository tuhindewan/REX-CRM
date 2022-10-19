import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import InputItem from "../InputItem";
import CustomSelect from "../CustomSelect";
import { useLocation } from "react-router-dom";
import Selectbox from "../Selectbox";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import CampaignCustomSelect from "../Campaign/CampaignCustomSelect";

import ComputerIcon from "../Icons/ComputerIcon";
import DoubleAngleLeftIcon from "../Icons/DoubleAngleLeftIcon";
import MobileIcon from "../Icons/MobileIcon";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import SettingIcon from "../Icons/SettingIcon";
import DownArrowIcon from "../Icons/DownArrowIcon";
import UpArrowIcon from "../Icons/UpArrowIcon";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import EditIcon from "../Icons/EditIcon";

import AlertPopup from "../AlertPopup";
import SuccessfulNotification from "../SuccessfulNotification";
import WarningNotification from "../WarningNotification";

const FormEditor = (props) => {
  const { settingData, setSettingData } = props;

  const [settingToSave, setSettingToSave] = useState(settingData);

  const [preview, setPreview] = useState("editor");

  // lists
  const [lists, setLists] = useState([]);

  // tags
  const [tags, setTags] = useState([]);

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

  const navigate = useNavigate();

  const toggleEnable = () => {
    setEnable(!enable);
  };

  // Hide alert popup after click on ok
  const onShowAlert = async (status) => {
    setShowAlert(status);
  };

  const settingDataValidation = (settingData) => {
    if (!settingData) {
      setSettingData({
        settings: {
          confirmation_type: {
            same_page: {
              message_to_show: "",
              after_form_submission: "hide-form",
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
          form_layout: "pop-in",
          schedule: {
            form_scheduling: "",
            submission_start: {
              date: "",
              time: "",
            },
          },
          restriction: {
            max_entries: "",
            max_number: "",
            max_type: "",
          },
        },
      });
    }
  };

  // Fetch lists & tags
  useEffect(() => {
    // Get lists
    getLists().then((results) => {
      results.data.map(function () {
        setLists(results.data);
      });
    });

    // Get tags
    getTags().then((results) => {
      setTags(results.data);
    });
  }, [settingData]);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const getFormData = async () => {
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/forms/${id}`
      );
      const resJson = await res.json();

      if (200 === resJson.code) {
        setFormData(resJson.data);
      }
    };
    if (id) getFormData();
    reload();
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

  const onSelect = (e, name) => {
    const updatedOptions = [...e.target.options]
      .filter((option) => option.selected)
      .map((x) => x.value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedOptions,
    }));
  };

  const onRemove = (e, name) => {
    let unselectedItem = e.params.data.id;
    setFormData((prevState) => ({
      ...prevState,
      [name]: prevState[name].filter((x) => x !== unselectedItem),
    }));
  };

  // const [refresh, setRefresh] = useState(false);
  // useEffect(() => {}, [refresh]);

  const saveForm = async (settingData) => {
    const storedBlocks = window.localStorage.getItem("getmrmblocks");
    // if (settingDataValidation(settingData)) {
    //   console.log(settingData);
    // }

    const post_data = {
      title: formData?.title,
      form_body: storedBlocks,
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
        setId(responseData?.data);
      }
      const timer = setTimeout(() => {
        setShowNotification("none");
      }, 3000);
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
      }
      const timer = setTimeout(() => {
        setShowNotification("none");
      }, 3000);
      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    if (id) navigate(`/form-builder/${id}`);
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

  useEffect(() => {
    const lists = selectedLists
      .filter((list) => list.id > 0)
      .map((list) => list.id);

    const tags = selectedTags.filter((tag) => tag.id > 0).map((tag) => tag.id);

    const group_ids = lists.concat(tags);

    setFormData((prevState) => ({
      ...prevState,
      group_ids: group_ids,
    }));
  }, [selectedLists, selectedTags]);

  //-------show more option click function-------
  const clickShowOption = () => {
    setMoreOption((current) => !current);
  };

  //-------list click function-------
  const showListDropdown = () => {
    setListDropdown((current) => !current);
  };

  //-------settings pannel open function-------
  const showSettingsPannel = () => {
    setSettingsPannel((current) => !current);
  };

  const handlePreview = (view) => {
    setPreview(view);
    const block = window.localStorage.getItem("getmrmblocks");
    setBlockData(block);
  };

  return (
    <>
      <div className="form-editor-page">
        <div className="form-editor-topbar">
          <div className="topbar-left">
            <Link to="/forms/">
              <button className="back-button">
                <DoubleAngleLeftIcon />
              </button>
            </Link>

            <div className="responsive-section">
              <button
                className="computer-view active"
                onClick={(e) => handlePreview("editor")}
              >
                <EditIcon />
              </button>
              <button
                className="computer-view active"
                onClick={(e) => handlePreview("desktop")}
              >
                <ComputerIcon />
              </button>
              <button
                className="mobile-view"
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
                <li>Save as Draft</li>
                <li>Change Template</li>
              </ul>
            </button>
            <button
              className="mintmrm-btn settings"
              onClick={showSettingsPannel}
            >
              <SettingIcon />
            </button>
            <button
              className="mintmrm-btn enable"
              onClick={(e) => saveForm(settingData)}
            >
              Enable
            </button>
          </div>
        </div>

        <div className="form-editor-body">
          <div className="form-editor-title-area">
            <InputItem
              label="Title"
              name="title"
              handleChange={handleChange}
              value={formData?.title}
            />

            <div className="form-group list">
              <label className="list-label">List</label>

              <div className="list-content">
                <button className="all-recipients" onClick={showListDropdown}>
                  All Subscriber
                  {listDropdown ? <UpArrowIcon /> : <DownArrowIcon />}
                </button>

                <CampaignCustomSelect dropDown={listDropdown} />
              </div>
            </div>
          </div>

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
              settingsPannel
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
