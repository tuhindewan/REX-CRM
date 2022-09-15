import { useState } from "react";
import Search from "../Icons/Search";
import Plus from "../Icons/Plus";
import { Link } from "react-router-dom";
import ColumnItems from "./ColumnItems";

export default function AddItems(props) {
  return (
    <ul
      className={
        props.isActive
          ? "assigned-to soronmrm-dropdown show"
          : "assigned-to soronmrm-dropdown"
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
          <ColumnItems title="WPVR" name="wpvr" id="wpvr" />
        </li>
        <li className="single-column">
          <ColumnItems
            title="Product Feed"
            name="product-feed"
            id="product-feed"
          />
        </li>
        <li className="single-column">
          <ColumnItems title="Funnels" name="funnels" id="funnels" />
        </li>
      </div>
      <div className="no-found">
        <span>No List found</span>
      </div>
      <Link className="add-action" to="" >
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
