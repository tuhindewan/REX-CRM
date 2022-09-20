import { useState, useEffect } from "react";
import Search from "../Icons/Search";

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

  function toggleActive() {
    setActive((prev) => !prev);
  }
  useEffect(() => {}, []);
  return (
    <>
      <div className="form-group left-filter">
        <button
          className={active ? "filter-btn show" : "filter-btn"}
          onClick={showTags}
        >
          Tags
        </button>
        <ul className={active ? "mintmrm-dropdown show" : "mintmrm-dropdown"}>
          <li className="searchbar">
            <span class="pos-relative">
              <Search />
              <input
                type="search"
                name="column-search"
                placeholder="Search..."
              />
            </span>
          </li>
          <li className="list-title">Choose List</li>
          <li className="single-column"></li>
          <li className="single-column"></li>
          <li className="single-column"></li>
          {/* {contactListColumns.map((column, index) => {
              <li className="single-column">
                <ColumnList title={column.title} key={index} />
              </li>;
            })} */}
        </ul>
      </div>
    </>
  );
}
