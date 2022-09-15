import { useState, useEffect, useRef } from "react";
import Search from "../Icons/Search";

export default function CustomSelect(props) {
  const {
    active,
    setActive,
    showSearchBar,
    selected,
    setSelected,
    dynamic = false,
    endpoint = "/lists",
    page = 1,
    perPage = 20,
    placeholder = "Lists",
    listTitle = "CHOOSE LIST",
    searchPlaceHolder = "Search...",
    multiple,
    allowNewCreate = false,
  } = props;
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  // store retrieved
  const [items, setItems] = useState([]);
  // search input value is stored here
  const [search, setSearch] = useState("");

  // search query, search query only updates when there are more than 3 characters typed
  const [query, setQuery] = useState("");

  function toggleActive(event) {
    event.stopPropagation();
    setActive((prev) => !prev);
  }

  function handleSearch(e) {
    e.stopPropagation();
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);
    if (value.length >= 3) setQuery(`&search=${value}`);
    else setQuery("");
  }

  // at first page load get all the available lists
  useEffect(() => {
    console.log("useeffect");

    async function getItems() {
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1${endpoint}?&page=${page}&per-page=${perPage}${query}`
      );
      const resJson = await res.json();
      if (resJson.code == 200) {
        setItems(resJson.data.data);
      }
    }
    getItems();
  }, [query]);

  return (
    <>
      <div className="mrm-custom-select-container" key="container">
        <button
          className={
            active ? "mrm-custom-select-btn show" : "mrm-custom-select-btn"
          }
          onClick={toggleActive}
          ref={buttonRef}
        >
          {placeholder} lkasjflksadfjlsdkajflkjsf
        </button>

        <ul
          className={
            active
              ? "mintmrm-dropdown mrm-custom-select-dropdown show"
              : "mintmrm-dropdown mrm-custom-select-dropdown"
          }
        >
          <li className="searchbar" key="hello">
            <span class="pos-relative">
              <Search />
              <input
                type="search"
                name="column-search"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
              />
            </span>
          </li>
          <li className="list-title" key="world">
            {listTitle}
          </li>

          {/* Render all elements */}
          {items?.length > 0 &&
            items.map((item, index) => {
              return (
                <li key={index} className="single-column">
                  <span class="mintmrm-checkbox">
                    <input type="checkbox" name="status" id="status" />
                    <label for="status">{item.title}</label>
                  </span>
                </li>
              );
            })}
          {items?.length == 0 && (
            <>
              <li className="not-found">No data found</li>
              <button className="mrm-custom-select-add-btn">
                + Add new list "{search}"
              </button>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
