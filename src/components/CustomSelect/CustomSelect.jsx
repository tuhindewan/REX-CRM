import { useState, useEffect } from "react";
import Search from "../Icons/Search";
import ColumnList from "./ColumnList";

export default function CustomSelect(props) {
  const {
    active,
    setActive,
    showSearchBar,
    selected,
    setSelected,
    dynamic = false,
    endpoint,
    placeholder,
    multiple,
  } = props;

  useEffect(() => {}, []);
  return (
    <>
      <div className="form-group left-filter">
        <button
          className={isTags ? "filter-btn show" : "filter-btn"}
          onClick={showTags}
        >
          Tags
        </button>
        <FilterItems isActiveFilter={isTags} />
      </div>
      <ul
        className={
          props.isActiveFilter ? "soronmrm-dropdown show" : "soronmrm-dropdown"
        }
      >
        <li className="searchbar">
          <span class="pos-relative">
            <Search />
            <input type="search" name="column-search" placeholder="Search..." />
          </span>
        </li>
        <li className="list-title">Choose List</li>
        <li className="single-column">
          <ColumnList title="Subscribe" name="subscribe" id="subscribe" />
        </li>
        <li className="single-column">
          <ColumnList title="Pending" name="pending" id="pending" />
        </li>
        <li className="single-column">
          <ColumnList title="Unsubscribe" name="unsubscribe" id="unsubscribe" />
        </li>
        {/* {contactListColumns.map((column, index) => {
              <li className="single-column">
                <ColumnList title={column.title} key={index} />
              </li>;
            })} */}
      </ul>
    </>
  );
}
