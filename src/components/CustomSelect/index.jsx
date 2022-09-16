import { useState, useEffect, useRef, isValidElement } from "react";
import Search from "../Icons/Search";
import LoadingIndicator from "../LoadingIndicator";
import CrossIcon from "../Icons/CrossIcon";
import { useGlobalStore } from "../../hooks/useGlobalStore";

export default function CustomSelect(props) {
  const hideAllCustomSelect = useGlobalStore(
    (state) => state.hideAllCustomSelect
  );
  const {
    active,
    setActive,
    selected,
    setSelected,
    options = null,
    endpoint = "/lists",
    page = 1,
    perPage = 20,
    placeholder = "Lists",
    name = "list",
    listTitle = "CHOOSE LIST",
    listTitleOnNotFound = "No Data Found",
    searchPlaceHolder = "Search...",
    allowMultiple = true,
    showSearchBar = true,
    showListTitle = true,
    showSelectedInside = true,
    allowNewCreate = true,
  } = props;
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  // store retrieved
  const [items, setItems] = useState([]);
  // search input value is stored here
  const [search, setSearch] = useState("");

  // search query, search query only updates when there are more than 3 characters typed
  const [query, setQuery] = useState("");

  // loading or not
  const [loading, setLoading] = useState(false);

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

  // handler for one single item click
  const handleSelectOne = (e) => {
    e.stopPropagation();
    const index = selected.findIndex((item) => item.id == e.target.id);

    // already in selected list so remove it from the array
    if (allowMultiple) {
      if (index >= 0) {
        setSelected(selected.filter((item) => item.id != e.target.id));
      } else {
        // add id to the array
        setSelected([...selected, { id: e.target.id, title: e.target.value }]);
      }
    } else {
      if (index >= 0) setSelected([]);
      else setSelected([{ id: e.target.id, title: e.target.value }]);
    }
  };

  const checkIfSelected = (id) => {
    const checked = selected.findIndex((item) => item.id == id) >= 0;
    return checked;
  };

  const deleteSelected = (e, id) => {
    console.log("hello");
    console.log(id);
    const index = selected.findIndex((item) => item.id == id);

    // already in selected list so remove it from the array
    if (allowMultiple) {
      if (index >= 0) {
        setSelected(selected.filter((item) => item.id != id));
      }
    } else {
      if (index >= 0) setSelected([]);
    }
  };

  // at first page load get all the available lists
  useEffect(() => {
    async function getItems() {
      setLoading(true);
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1${endpoint}?&page=${page}&per-page=${perPage}${query}`
      );
      const resJson = await res.json();
      if (resJson.code == 200) {
        setItems(resJson.data.data);
        setLoading(false);
      } else {
        console.log(resJson);
      }
    }
    if (!options) getItems();
  }, [query]);

  // Handle list create or update form submission
  const addNewItem = async () => {
    let res = null;
    let body = {
      title: search,
      slug: search.toLowerCase().replace(/[\W_]+/g, "-"),
    };
    try {
      // create contact
      setLoading(true);
      res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1${endpoint}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const resJson = await res.json();
      if (resJson.code == 201) {
        setSearch("");
        setQuery("");
        setSelected([...selected, { id: resJson.data, title: body.title }]);
      } else {
        window.alert(resJson.message);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mrm-custom-select-container" key="container">
        <button
          className={
            active && hideAllCustomSelect
              ? "mrm-custom-select-btn show"
              : "mrm-custom-select-btn"
          }
          onClick={toggleActive}
          ref={buttonRef}
        >
          {placeholder}
        </button>
        {/* <div className="mrm-selected-items-container">
          {showSelectedInside &&
            selected.map((item) => {
              return (
                <span key={item.id} className="mrm-custom-selected-items">
                  {item.title}
                  <CrossIcon onClick={(e) => deleteSelected(e, item.id)} />
                </span>
              );
            })}
        </div> */}
        <ul
          className={
            active
              ? "mintmrm-dropdown mrm-custom-select-dropdown show"
              : "mintmrm-dropdown mrm-custom-select-dropdown"
          }
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {showSearchBar && (
            <li className="searchbar" key="hello">
              <span class="pos-relative">
                <Search />
                <input
                  type="search"
                  name="column-search"
                  placeholder={searchPlaceHolder}
                  value={search}
                  onChange={handleSearch}
                />
              </span>
            </li>
          )}
          {showListTitle && (
            <li className="list-title" key="world">
              {!loading
                ? items?.length && !options == 0
                  ? listTitleOnNotFound
                  : listTitle
                : null}
            </li>
          )}

          {/* Render all elements */}
          {options &&
            options.map((item, index) => {
              return (
                <li key={index} className="single-column">
                  <div class="mintmrm-checkbox">
                    <input
                      type="checkbox"
                      name={item.id}
                      id={item.id}
                      value={item.title}
                      onChange={handleSelectOne}
                      checked={checkIfSelected(item.id)}
                    />
                    <label for={item.id} className="mrm-custom-select-label">
                      {item.title}
                    </label>
                  </div>
                </li>
              );
            })}
          {items?.length > 0 &&
            !options &&
            !loading &&
            items.map((item, index) => {
              return (
                <li key={index} className="single-column">
                  <div class="mintmrm-checkbox">
                    <input
                      type="checkbox"
                      name={item.id}
                      id={item.id}
                      value={item.title}
                      onChange={handleSelectOne}
                      checked={checkIfSelected(item.id)}
                    />
                    <label for={item.id} className="mrm-custom-select-label">
                      {item.title}
                    </label>
                  </div>
                </li>
              );
            })}
          {items?.length == 0 && allowNewCreate && !loading && !options && (
            <>
              <button
                className="mrm-custom-select-add-btn"
                onClick={addNewItem}
              >
                {`+ Add new ${name} "${search}"`}
              </button>
            </>
          )}
          {loading && <LoadingIndicator type="table" />}
        </ul>
      </div>
    </>
  );
}
