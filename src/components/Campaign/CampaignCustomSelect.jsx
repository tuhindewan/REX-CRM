import { useState } from "react";
import CrossIcon from "../Icons/CrossIcon";
import Search from "../Icons/Search";
import OptionList from "./OptionList";

export default function CampaignCustomSelect(props) {
  const [activeTag, setActiveTag] = useState(true);
  const [activeList, setActiveList] = useState(false);
  const [checkList, setCheckList] = useState([]);
  const [checktag, setChecktag] = useState([]);
  const [unSelect, setUnSelect] = useState();

  const showTag = () => {
    setActiveTag(true);
    setActiveList(false);
  };
  const showList = () => {
    setActiveTag(false);
    setActiveList(true);
  };

  const deleteItem = (id) => {
    const updatedListItem = checkList.filter((item, index) => {
      return index != id;
    });
    const updatedTagItem = checktag.filter((item, index) => {
      return index != id;
    });
    setCheckList(updatedListItem);
    setChecktag(updatedTagItem);
  };

  const deleteAllTag = () => {
    setChecktag([]);
  };
  const deleteAllList = () => {
    setCheckList([]);
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
      {activeTag ? <div className="options-section">
        <div
          className={
            checktag.length != 0 ? "selected-items" : "selected-items inactive"
          }
        >
          <div className="items">
            {checktag.map((item, index) => {
              return (
                <span key={index} id={index}>
                  {item}
                  <div
                    className="cross-icon"
                    onClick={(e) => deleteItem(index)}
                  >
                    <CrossIcon />
                  </div>
                </span>
              );
            })}
          </div>
          <button
            className={
              checktag.length == 0 ? "clear-btn inactive" : "clear-btn"
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
            <OptionList
              name="product-feed"
              title="Product Feed"
              checkItem={checktag}
              setCheckItem={setChecktag}
            />
            <OptionList
              name="funnels"
              title="Funnels"
              checkItem={checktag}
              setCheckItem={setChecktag}
            />
            <OptionList
              name="wpvr"
              title="WPVR"
              checkItem={checktag}
              setCheckItem={setChecktag}
            />
          </div>
        </div>
      </div> : null}
      {activeList ? <div className="options-section">
        <div
          className={
            checkList.length != 0 ? "selected-items" : "selected-items inactive"
          }
        >
          <div className="items">
            {checkList.map((item, index) => {
              return (
                <span key={index} id={index}>
                  {item}
                  <div
                    className="cross-icon"
                    onClick={(e) => deleteItem(index)}
                  >
                    <CrossIcon />
                  </div>
                </span>
              );
            })}
          </div>
          <button
            className={
              checkList.length == 0 ? "clear-btn inactive" : "clear-btn"
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
            <OptionList
              name="comilla"
              title="Comilla"
              checkItem={checkList}
              setCheckItem={setCheckList}
            />
            <OptionList
              name="dhaka"
              title="Dhaka"
              checkItem={checkList}
              setCheckItem={setCheckList}
            />
            <OptionList
              name="vip"
              title="Vip"
              checkItem={checkList}
              setCheckItem={setCheckList}
            />
          </div>
        </div>
      </div> : null}
    </div>
  );
}
