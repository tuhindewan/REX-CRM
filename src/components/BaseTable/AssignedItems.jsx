import { useState } from "react";
import Search from "../Icons/Search";
import ColumnList from "./ColumnList";
import Plus from "../Icons/Plus";
import { Link } from "react-router-dom";

export default function AssignedItems(props) {
  return (
    <ul
      className={
        props.isActive
          ? "assigned-to mintmrm-dropdown show"
          : "assigned-to mintmrm-dropdown"
      }
    >
      <li className="searchbar">
        <span class="pos-relative">
          <Search />
          <input
            type="search"
            name="column-search"
            placeholder="Create or find list.."
          />
        </span>
      </li>
      <li className="list-title">Choose List</li>
      <div className="option-section">
        <li className="single-column">
          <ColumnList title="WPVR" name="wpvr" id="wpvr" />
        </li>
        <li className="single-column">
          <ColumnList
            title="Product Feed"
            name="product-feed"
            id="product-feed"
          />
        </li>
        <li className="single-column">
          <ColumnList title="Funnels" name="funnels" id="funnels" />
        </li>
      </div>
      <div className="no-found">
        <span>No List found</span>
      </div>
      <Link className="add-action" to="">
        <Plus />
        Add List
      </Link>
      {/* {contactListColumns.map((column, index) => {
              <li className="single-column">
                <ColumnList title={column.title} key={index} />
              </li>;
            })} */}
    </ul>
  );
}
