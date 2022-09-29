import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Plus from "../Icons/Plus";
import Search from "../Icons/Search";
import LoadingIndicator from "../LoadingIndicator";

export default function AssignedItems(props) {
  const {
    selected,
    setSelected,
    endpoint = "lists",
    placeholder = "Lists",
    options = null,
    name = "list", // used inside the new button of
    listTitle = "CHOOSE LIST",
    listTitleOnNotFound = "No Data Found",
    searchPlaceHolder = "Search...",
    allowMultiple = true,
    showSearchBar = true,
    showListTitle = true,
    showSelectedInside = true,
    allowNewCreate = true,
  } = props;

  // store retrieved
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function getItems() {
      setLoading(true);
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/${endpoint}?${query}`
      );
      const resJson = await res.json();
      if (resJson.code == 200) {
        setItems(resJson.data.data);
        setLoading(false);
      }
    }
    if (!options) getItems();
  }, [query]);

  // function used for checking whether the current item is selected or not
  const checkIfSelected = (id) => {
    const checked = selected.findIndex((item) => item.id == id) >= 0;
    return checked;
  };

  // handler for one single item click for both list item and checkbox rendering
  const handleSelectOne = (e) => {
    e.stopPropagation();
    // since this function is handling input for both checkboxes and li elements
    // there might be either id and value for input checkboxes
    // or custom ID and custom Value dataset attribute for li elements
    let value = e.target.value ? e.target.value : e.target.dataset.customValue;
    let id = e.target.id ? e.target.id : e.target.dataset.customId;
    const index = selected.findIndex((item) => item.id == id);
    // already in selected list so remove it from the array
    if (allowMultiple) {
      if (index >= 0) {
        setSelected(selected.filter((item) => item.id != id));
      } else {
        // add id to the array
        setSelected([...selected, { id: id, title: value }]);
      }
    } else {
      if (index >= 0) setSelected([]);
      else setSelected([{ id: id, title: value }]);
    }
  };

  // helper function to set the search query only when there are at least 3 characters or more
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
              placeholder="Create or find"
              value={search}
              onChange={handleSearch}
            />
          </span>
        </li>
        <li className="list-title">{listTitle}</li>
        <div className="option-section">
          {items?.length > 0 &&
            !options &&
            !loading &&
            items.map((item, index) => {
              let checked = checkIfSelected(item.id);
              return (
                <li
                  key={index}
                  className={
                    checked
                      ? "single-column mrm-custom-select-single-column-selected"
                      : "single-column"
                  }
                >
                  <div class="mintmrm-checkbox">
                    <input
                      type="checkbox"
                      name={item.id}
                      id={item.id}
                      value={item.title}
                      onChange={handleSelectOne}
                      checked={checked}
                    />

                    <label for={item.id} className="mrm-custom-select-label">
                      {item.title}
                    </label>
                  </div>
                </li>
              );
            })}
        </div>
        <div className="no-found">
          <span>No List found</span>
        </div>
        <Link className="add-action" to="">
          <Plus />
          Add {placeholder}
        </Link>
        {/* {contactListColumns.map((column, index) => {
              <li className="single-column">
                <ColumnList title={column.title} key={index} />
              </li>;
            })} */}
        {loading && <LoadingIndicator type="table" />}
      </ul>
    </>
  );
}
