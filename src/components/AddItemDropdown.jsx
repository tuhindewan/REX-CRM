import { useMemo, useState } from "react";
import Search from "./Icons/Search";
import SuccessfulNotification from "./SuccessfulNotification";
import WarningNotification from "./WarningNotification";

export default function AddItemDropdown(props) {
  const {
    selected,
    setSelected,
    endpoint,
    items,
    allowMultiple,
    allowNewCreate,
    name,
    title,
    refresh,
    setRefresh,
  } = props;
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [showWarning, setShowWarning] = useState("none");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState("none");

  const filteredItems = useMemo(() => {
    if (search) {
      return items.filter(
        (item) =>
          item.title.toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
      );
    }
    return items;
  }, [search, items]);

  function handleSearch(e) {
    e.stopPropagation();
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);
    if (value.length >= 3) setQuery(`&search=${value}`);
    else setQuery("");
  }

  const checkIfSelected = (id) => {
    const checked = selected?.findIndex((item) => item == id) >= 0;
    return checked;
  };

  // Select or unselect items from the list
  const handleSelectOne = (e) => {
    e.stopPropagation();
    let value = e.target.value ? e.target.value : e.target.dataset.customValue;
    let id = e.target.id ? e.target.id : e.target.dataset.customId;
    const index = selected?.findIndex((item) => item == id);
    if (allowMultiple) {
      if (index >= 0) {
        setSelected(selected.filter((item) => item != id));
      } else {
        setSelected([...selected, id]);
      }
    } else {
      if (index >= 0) setSelected([]);
      else setSelected([id]);
    }
  };

  // Handle new list or tag creation
  const addNewItem = async () => {
    let res = null;
    let body = {
      title: search,
    };

    try {
      res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const resJson = await res.json();
      if (resJson.code == 201) {
        setSearch("");
        setSelected([...selected, resJson.data]);
        setShowNotification("block");
        setMessage(resJson?.message);
        setRefresh(!refresh);
      } else {
        setShowWarning("block");
        setMessage(resJson?.message);
      }
    } catch (e) {
    } finally {
    }
  };

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
              placeholder="Search or create"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </span>
        </li>
        <li className="list-title">{title}</li>
        <div className="option-section">
          {filteredItems?.length > 0 &&
            filteredItems.map((item, index) => {
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
        {filteredItems?.length == 0 && allowNewCreate && (
          <>
            <button className="mrm-custom-select-add-btn" onClick={addNewItem}>
              {`+ Create new ${name} ${search}`}
            </button>
          </>
        )}
      </ul>
      <WarningNotification display={showWarning} message={message} />
      <SuccessfulNotification display={showNotification} message={message} />
    </>
  );
}
