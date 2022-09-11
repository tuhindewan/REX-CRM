import React, { useState, useEffect } from "react";
import Search from "../components/Icons/Search";
import ThreeDotIcon from "../components/Icons/ThreeDotIcon";
import TagItem from "../components/Tag/TagItem";
import Pagination from "../components/Pagination";
import TagIcon from "../components/Icons/TagIcon";
import { useGlobalStore } from "../hooks/useGlobalStore";

const Tags = () => {
  // set navbar Buttons
  useGlobalStore.setState({
    navbarMarkup: (
      <button
        className="contact-save soronmrm-btn"
        onClick={() => setShowCreate((prev) => !prev)}
      >
        + Add Tag
      </button>
    ),
    hideGlobalNav: false
  });
  // editID is the id of the edit page
  const [editID, setEditID] = useState(0);

  // showCreate shows the create form if true
  const [showCreate, setShowCreate] = useState(false);

  // whether to show more options or not
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  // current lists data
  const [lists, setLists] = useState([]);

  // how many to show per page
  const [perPage, setPerPage] = useState(10);

  // current page
  const [page, setPage] = useState(1);

  // total count of results
  const [count, setCount] = useState(0);

  // total number of pages for result
  const [totalPages, setTotalPages] = useState(0);

  // list values for sending to backend
  const [values, setValues] = useState({
    title: "",
  });

  // search input value is stored here
  const [search, setSearch] = useState("");

  // search query, search query only updates when there are more than 3 characters typed
  const [query, setQuery] = useState("");

  // refresh the whole list if this boolean changes
  const [refresh, setRefresh] = useState(true);

  // current active menu id, whenever a option button is selected this
  // var tracks the current id of
  const [currentActive, setCurrentActive] = useState(0);

  // the select all checkbox
  const [allSelected, setAllSelected] = useState(false);

  // single selected array which holds selected ids with
  const [selected, setSelected] = useState([]);

  // Set values from list form
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // handler for one single item click
  const handleSelectOne = (e) => {
    if (selected.includes(e.target.id)) {
      // already in selected list so remove it from the array
      setSelected(selected.filter((element) => element != e.target.id));
      // corner case where one item is deselected so hide all checked
      setAllSelected(false);
    } else {
      // add id to the array
      setSelected([...selected, e.target.id]);
    }
  };

  // handler for all item click
  const handleSelectAll = (e) => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(lists.map((list) => list.id));
    }
    setAllSelected(!allSelected);
  };

  // the data is fetched again whenver refresh is changed
  function toggleRefresh() {
    setRefresh((prev) => !prev);
  }

  // this function sets the required edit parameters
  function editList(list) {
    setEditID(list.id);
    setValues(list);
    setShowCreate(true);
    console.log(values);
  }

  // Handle list create form submission
  const createOrUpdate = async () => {
    try {
      let res = null;
      let body = JSON.stringify({
        ...values,
        slug: values["title"].toLowerCase().replace(/[\W_]+/g, "-"),
      });
      // check if title is not empty
      if (values["title"].length < 1) {
        window.alert("Tag name can not be empty.");
        return;
      }
      if (editID != 0) {
        // update contact
        res = await fetch(
          `${window.MRM_Vars.api_base_url}mrm/v1/tags/${editID}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: body,
          }
        );
      } else {
        // create contact
        res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/tags`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: body,
        });
      }

      const resJson = await res.json();
      if (resJson.code == 201) {
        toggleRefresh();
        setValues({
          title: "",
          data: "",
          slug: "",
        });
        setShowCreate(false);
        setEditID(0);
      } else {
        window.alert(resJson.message);
      }
    } catch (e) {}
  };

  // at first page load get all the available lists
  // also get lists if the page or perpage or search item changes
  useEffect(() => {
    async function getTags() {
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/tags?page=${page}&per-page=${perPage}${query}`
      );
      const resJson = await res.json();
      if (resJson.code == 200) {
        setLists(resJson.data.data);
        setCount(resJson.data.count);
        setTotalPages(resJson.data.total_pages);
      }
    }
    getTags();
  }, [page, perPage, query, refresh]);

  async function deleteList(id) {
    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/tags/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const resJson = await res.json();
    toggleRefresh();
  }

  async function deleteMultipleList() {
    if (selected.length > 0) {
      if (
        window.confirm("Are you sure you want to delete these selected items?")
      ) {
        const res = await fetch(`${window.MRM_Vars.api_base_url}mrm/v1/tags/`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            tag_ids: selected,
          }),
        });
        const resJson = await res.json();
        // remove all selected after deletion
        setAllSelected(false);
        setSelected([]);
        toggleRefresh();
      }
    } else {
      window.alert("Please select at least one item to delete.");
    }
  }

  return (
    <>
      {showCreate && (
        <div className="create-contact">
          <div className="soronmrm-container">
            <h2 className="conatct-heading">
              {editID == 0 ? "Add Tag" : "Update Tag"}
            </h2>

            <div>
              <div className="add-contact-form">
                <div
                  className="contact-form-body"
                  style={{ alignItems: "center", gap: "15px" }}
                >
                  <div className="form-group contact-input-field">
                    <label htmlFor="title" aria-required>
                      Tag Name
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={values["title"]}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="contact-save soronmrm-btn"
                    onClick={createOrUpdate} // explicityly set the id as null to force create list
                  >
                    {editID == 0 ? "Save" : "Update"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="contact-list-page">
        <div className="soronmrm-container">
          <div className="contact-list-area">
            <div className="contact-list-header">
              <div className="left-filters"></div>
              <div className="right-buttons">
                {/* search input */}
                <span className="search-section">
                  <Search />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                      let value = e.target.value;
                      setSearch(value);
                      // only set query when there are more than 3 characters
                      if (value.length >= 3) {
                        setQuery(`&search=${value}`);
                        // on every new search term set the page explicitly to 1 so that results can
                        // appear
                        setPage(1);
                      } else {
                        setQuery("");
                      }
                    }}
                  />
                </span>
                {/* show more options section */}
                <button
                  className="more-option"
                  onClick={() => setShowMoreOptions(!showMoreOptions)}
                >
                  <ThreeDotIcon />

                  <ul
                    className={
                      showMoreOptions
                        ? "soronmrm-dropdown show"
                        : "soronmrm-dropdown"
                    }
                  >
                    <li className="delete" onClick={deleteMultipleList}>
                      Delete Selected
                    </li>
                  </ul>
                </button>
              </div>
            </div>
            <div className="contact-list-body">
              <div class="contact-list-table">
                <table>
                  <thead>
                    <tr>
                      <th className="">
                        <span class="soronmrm-checkbox no-title">
                          <input
                            type="checkbox"
                            name="bulk-select"
                            id="bulk-select"
                            onChange={handleSelectAll}
                            checked={allSelected}
                          />
                          <label for="bulk-select">Name</label>
                        </span>
                      </th>
                      <th className="creation-date">Creation Date</th>
                      <th className="action"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {lists.length > 0 &&
                      lists.map((list, idx) => {
                        return (
                          <TagItem
                            key={idx}
                            list={list}
                            deleteList={deleteList}
                            currentActive={currentActive}
                            setCurrentActive={setCurrentActive}
                            handleSelectOne={handleSelectOne}
                            selected={selected}
                            editList={editList}
                          />
                        );
                      })}
                  </tbody>
                </table>
                {/* List empty or search not found ui */}
                {lists.length == 0 && (
                  <div className="mrm-empty-state-wrapper">
                    <TagIcon />
                    <div>
                      No Tags Found{" "}
                      {search.length > 0 ? ` for the term "${search}"` : null}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="contact-list-footer">
              <Pagination
                currentPage={page}
                pageSize={perPage}
                onPageChange={setPage}
                totalCount={count}
                totalPages={totalPages}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
