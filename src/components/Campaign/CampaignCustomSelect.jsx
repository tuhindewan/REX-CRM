import { useState } from "react";
import CrossIcon from "../Icons/CrossIcon";
import Search from "../Icons/Search";
import OptionList from "./OptionList";

export default function CampaignCustomSelect(props) {
  const [activeTag, setActiveTag] = useState(true);
  const [activeList, setActiveList] = useState(false);
  const [checkList, setCheckList] = useState([]);
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
    const updatedItem = checkList.filter((item, index) => {
      return index != id;
    });
    setCheckList(updatedItem);
  };

  const deleteAll = () => {
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
                <div className="cross-icon" onClick={(e) => deleteItem(index)}>
                  <CrossIcon />
                </div>
              </span>
            );
          })}
        </div>
        <button
          className={checkList.length == 0 ? "clear-btn inactive" : "clear-btn"}
          onClick={deleteAll}
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
            checkList={checkList}
            setCheckList={setCheckList}
            
          />
          <OptionList
            name="funnels"
            title="Funnels"
            checkList={checkList}
            setCheckList={setCheckList}
            
          />
          <OptionList
            name="wpvr"
            title="WPVR"
            checkList={checkList}
            setCheckList={setCheckList}
            
          />
        </div>
      </div>
    </div>
  );
}
