import { useState } from "react";
import CrossIcon from "../Icons/CrossIcon";
import Search from "../Icons/Search";
import OptionList from "./OptionList";

export default function CampaignCustomSelect(props) {
  const [activeTag, setActiveTag] = useState(true);
  const [activeList, setActiveList] = useState(false);

  const showTag = () => {
    setActiveTag(true);
    setActiveList(false);
  };
  const showList = () => {
    setActiveTag(false);
    setActiveList(true);
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
      <div className="selected-items">
        <div className="items">
          <span>
            Product Feed
            <div className="cross-icon">
              <CrossIcon />
            </div>
          </span>
          <span>
            Funnel
            <div className="cross-icon">
              <CrossIcon />
            </div>
          </span>
        </div>
        <button className="clear-btn">Clear</button>
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
          <OptionList name="product-feed" title="Product Feed" />
          <OptionList name="funnels" title="Funnels" />
          <OptionList name="wpvr" title="WPVR" />
        </div>
      </div>
    </div>
  );
}
