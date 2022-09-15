import { useState, useEffect, useRef } from "react";
import Search from "../Icons/Search";
import Portal from "../Portal";
import HoverMenu from "../HoverMenu";
import InputItem from "../InputItem";

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

  function handleChange(e) {
    setSearch(e.target.value);
    setQuery(`&search=${e.target.value}`);
  }

  // at first page load get all the available lists
  // also get lists if the page or perpage or search item changes
  useEffect(() => {
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
      <div className="mrm-custom-select-container">
        <button
          className={
            active ? "mrm-custom-select-btn show" : "mrm-custom-select-btn"
          }
          onClick={toggleActive}
          ref={buttonRef}
        >
          {placeholder}
        </button>
      </div>
      <Portal>
        <HoverMenu elementRef={buttonRef} x={55} y={5}>
          <div className="mrm-custom-select-dropdown-container">
            <ul
              className={
                active
                  ? "mintmrm-dropdown custom-select-dropdown show"
                  : "mintmrm-dropdown custom-select-dropdown"
              }
            >
              <li className="searchbar" key="hello">
                <span class="pos-relative">
                  <Search />
                  {/* <input
                    type="text"
                    key="lskdjfaalskdjf"
                    placeholder={placeholder}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  /> */}
                  <InputItem
                    label="hello"
                    value={search}
                    handleChange={handleChange}
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

              {/* {contactListColumns.map((column, index) => {
              <li className="single-column">
                <ColumnList title={column.title} key={index} />
              </li>;
            })} */}
            </ul>
          </div>
        </HoverMenu>
      </Portal>
    </>
  );
}
