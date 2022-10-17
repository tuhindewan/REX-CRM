import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

const FormEditor = (props) => {
  const navigate = useNavigate();
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

  const id = params.id;

  const toggleEnable = () => {
    setEnable(!enable);
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
  }, []);

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
    getFormData();
  }, []);

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

  const saveForm = async () => {
    const storedBlocks = window.localStorage.getItem("getmrmblocks");
    const post_data = {
      title: formData.title,
      form_body: storedBlocks,
    };
    const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/forms/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post_data),
    });
    const responseData = await res.json();
  };

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

  return (
    <>
      <div className="form-editor-page">
        <div className="form-editor-topbar">
          <div className="topbar-left">
            <button className="back-button">
              <Link to="/form-editor/">
                <DoubleAngleLeftIcon />
              </Link>
            </button>

            <div className="responsive-section">
              <button className="computer-view active">
                <ComputerIcon />
              </button>
              <button className="mobile-view">
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
            <button className="mintmrm-btn enable" onClick={saveForm}>
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

          <div
            id="mrm-block-editor"
            className={
              settingsPannel
                ? "getdave-sbe-block-editor block-editor show-settings-pannel"
                : "getdave-sbe-block-editor block-editor"
            }
          ></div>
        </div>
      </div>
    </>
  );
};

export default FormEditor;
