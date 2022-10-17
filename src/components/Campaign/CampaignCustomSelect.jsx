import { useState, useEffect } from "react";
import CrossIcon from "../Icons/CrossIcon";
import Search from "../Icons/Search";
import OptionList from "./OptionList";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";

export default function CampaignCustomSelect(props) {
  const [activeTag, setActiveTag] = useState(true);
  const [activeList, setActiveList] = useState(false);
  const [checkList, setCheckList] = useState([]);
  const [checktag, setChecktag] = useState([]);
  const [unSelect, setUnSelect] = useState();
  const [lists, setLists] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedLists, setSelectedLists] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const showTag = () => {
    setActiveTag(true);
    setActiveList(false);
  };
  const showList = () => {
    setActiveTag(false);
    setActiveList(true);
  };

  // const deleteItem = (id) => {
  //   const updatedListItem = checkList.filter((item, index) => {
  //     return index != id;
  //   });
  //   const updatedTagItem = checktag.filter((item, index) => {
  //     return index != id;
  //   });
  //   setCheckList(updatedListItem);
  //   setChecktag(updatedTagItem);
  // };

  const deleteSelectedTag = (e, id) => {
    const index = selectedTags.findIndex((item) => item.id == id);

    // already in selected list so remove it from the array
    if (index >= 0) {
      setSelectedTags(selectedTags.filter((item) => item.id != id));
    }
  };
  const deleteSelectedList = (e, id) => {
    const index = selectedLists.findIndex((item) => item.id == id);

    // already in selected list so remove it from the array
    if (index >= 0) {
      setSelectedLists(selectedLists.filter((item) => item.id != id));
    }
  };

  const deleteAllTag = () => {
    setSelectedTags([]);
  };
  const deleteAllList = () => {
    setSelectedLists([]);
  };
  useEffect(() => {
    // Get lists
    getLists().then((results) => {
      setLists(results.data);
    });
    // Get tags
    getTags().then((results) => {
      setTags(results.data);
    });
  }, []);

  const checkIfSelectedList = (id) => {
    const checkedList = selectedLists.findIndex((item) => item.id == id) >= 0;
    return checkedList;
  };
  const checkIfSelectedTag = (id) => {
    const checkedTag = selectedTags.findIndex((item) => item.id == id) >= 0;
    return checkedTag;
  };

  return (
    <div
      className={
        props.dropDown ? "recipient-dropdown" : "recipient-dropdown inactive"
      }
    >
      <div className="dropdown-header">
        <button
          className={
            activeTag ? "tab-button active tag-btn" : "tab-button tag-btn"
          }
          onClick={showTag}
        >
          Tag
        </button>
        <button
          className={
            activeList ? "tab-button active list-btn" : "tab-button list-btn"
          }
          onClick={showList}
        >
          List
        </button>
      </div>
      {activeTag ? (
        <div className="options-section">
          <div
            className={
              selectedTags?.length != 0
                ? "selected-items"
                : "selected-items inactive"
            }
          >
            <div className="items">
              {selectedTags?.map((item, index) => {
                return (
                  <span key={index} id={item.id}>
                    {item.title}
                    <div
                      className="cross-icon"
                      onClick={(e) => deleteSelectedTag(e, item.id)}
                    >
                      <CrossIcon />
                    </div>
                  </span>
                );
              })}
            </div>
            <button
              className={
                selectedTags?.length == 0 ? "clear-btn inactive" : "clear-btn"
              }
              onClick={deleteAllTag}
            >
              Clear
            </button>
          </div>
          <div className="dropdown-body">
            <div className="searchbar">
              <div class="pos-relative">
                <Search />
                <input
                  className="recipient-input"
                  type="search"
                  placeholder="Search tag"
                />
              </div>
            </div>
            <div className="checkbox-options">
              {tags.map((item, index) => {
                let checkedTag = checkIfSelectedTag(item.id);
                return (
                  <li
                    key={index}
                    className={
                      checkedTag
                        ? "single-column mrm-custom-select-single-column-selected"
                        : "single-column"
                    }
                  >
                    <OptionList
                      selected={selectedTags}
                      setSelected={setSelectedTags}
                      allowMultiple={true}
                      id={item.id}
                      title={item.title}
                      checked={checkedTag}
                    />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
      {activeList ? (
        <div className="options-section">
          <div
            className={
              selectedLists?.length != 0
                ? "selected-items"
                : "selected-items inactive"
            }
          >
            <div className="items">
              {selectedLists?.map((item, index) => {
                return (
                  <span key={index} id={item.id}>
                    {item.title}
                    <div
                      className="cross-icon"
                      onClick={(e) => deleteSelectedList(e, item.id)}
                    >
                      <CrossIcon />
                    </div>
                  </span>
                );
              })}
            </div>
            <button
              className={
                selectedLists?.length == 0 ? "clear-btn inactive" : "clear-btn"
              }
              onClick={deleteAllList}
            >
              Clear
            </button>
          </div>
          <div className="dropdown-body">
            <div className="searchbar">
              <div class="pos-relative">
                <Search />
                <input
                  className="recipient-input"
                  type="search"
                  placeholder="Search tag"
                />
              </div>
            </div>
            <div className="checkbox-options">
              {lists.map((item, index) => {
                let checkedList = checkIfSelectedList(item.id);
                return (
                  <li
                    key={index}
                    className={
                      checkedList
                        ? "single-column mrm-custom-select-single-column-selected"
                        : "single-column"
                    }
                  >
                    <OptionList
                      selected={selectedLists}
                      setSelected={setSelectedLists}
                      allowMultiple={true}
                      id={item.id}
                      title={item.title}
                      checked={checkedList}
                    />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
