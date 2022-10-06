import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Icons/Search";
import Plus from "./Icons/Plus";

export default function AddItemDropdown(props) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    e.stopPropagation();
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);
    if (value.length >= 3) setQuery(`&search=${value}`);
    else setQuery("");
  }
  return (
    <>
      <ul
        className={
          props.isActive
            ? "add-contact mintmrm-dropdown show"
            : "add-contact mintmrm-dropdown"
        }
      >
        <li className="searchbar">
          <span class="pos-relative">
            <Search />
            <input
              type="search"
              name="column-search"
              placeholder="Create or find"
              value={search}
              onChange={handleSearch}
            />
          </span>
        </li>
        <li className="list-title">Choose List</li>
        <div className="option-section">
          <li className="single-column">
            <div class="mintmrm-checkbox">
              <input
                type="checkbox"
                name="product-feed"
                id="product-feed"
                value="Product Feed"
              />

              <label for="product-feed" className="mrm-custom-select-label">
                Product Feed
              </label>
            </div>
          </li>
          <li className="single-column">
            <div class="mintmrm-checkbox">
              <input
                type="checkbox"
                name="funnels"
                id="funnels"
                value="Funnels"
              />

              <label for="funnels" className="mrm-custom-select-label">
                Funnels
              </label>
            </div>
          </li>
          <li className="single-column">
            <div class="mintmrm-checkbox">
              <input type="checkbox" name="wpvr" id="wpvr" value="WPVR" />
              <label for="wpvr" className="mrm-custom-select-label">
                WPVR
              </label>
            </div>
          </li>
        </div>
        {/* <div className="no-found">
          <span>No List found</span>
        </div> */}
        <Link className="add-action" to="">
          <Plus />
          Add List
        </Link>
      </ul>
    </>
  );
}
