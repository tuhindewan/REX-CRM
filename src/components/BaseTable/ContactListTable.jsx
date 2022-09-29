import queryString from "query-string";
import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Plus from "../Icons/Plus";
// Internal dependencies
import { useGlobalStore } from "../../hooks/useGlobalStore";
import { deleteMultipleContactsItems } from "../../services/Contact";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import AlertPopup from "../AlertPopup";
import DeletePopup from "../DeletePopup";
import ContactProfile from "../Icons/ContactProfile";
import CrossIcon from "../Icons/CrossIcon";
import PlusCircleIcon from "../Icons/PlusCircleIcon";
import Search from "../Icons/Search";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Pagination from "../Pagination";
import SuccessfulNotification from "../SuccessfulNotification";
import AssignedItems from "./AssignedItems";
import FilterItems from "./FilterItems";
import SingleContact from "./SingleContact";

export default function ContactListTable(props) {
  const { refresh, setRefresh } = props;
  const [isLists, setIsLists] = useState(false);
  const [isTags, setIsTags] = useState(false);
  const [isStatus, setIsStatus] = useState(false);

  const { endpoint = "contacts" } = props;
  const [contacts, setContacts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const [filterPerPage, setFilterPerPage] = useState(10);
  const [filterPage, setFilterPage] = useState(1);
  const [filterCount, setFilterCount] = useState(0);

  const [isActive, setActive] = useState(false);
  const [isAddColumn, setAddColumn] = useState(false);
  const [isAssignTo, setIsAssignTo] = useState(false);

  const [selectedSection, setSelectedSection] = useState(false);

  const [contactData, setContactData] = useState([]);
  const [filterContact, setFilterContact] = useState([]);

  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState("");
  // search query, search query only updates when there are more than 3 characters typed
  const [query, setQuery] = useState("");

  const [lists, setLists] = useState([]);
  const [tags, setTags] = useState([]);

  const [filterData, setFilterData] = useState({});

  const navigate = useNavigate();

  const [countData, setCountData] = useState({});

  // the select all checkbox
  const [allSelected, setAllSelected] = useState(false);

  // single selected array which holds selected ids with
  const [selected, setSelected] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [filterTotalPages, setFilterTotalPages] = useState(0);

  const [currentActive, setCurrentActive] = useState(0);
  const [openListSelectBox, setOpenTagSelectBox] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [filterParams, setFilterParams] = useState([]);

  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedLists, setSelectedLists] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const [isFilter, setIsFilter] = useState(0);

  const location = useLocation();

  const [filterRequest, setFilterRequest] = useState({});

  // global counter update real time
  const counterRefresh = useGlobalStore((state) => state.counterRefresh);
  const [showNotification, setShowNotification] = useState("none");
  const [message, setMessage] = useState("");

  // Prepare filter object
  const [filterAdder, setFilterAdder] = useState({
    lists: [],
    tags: [],
    status: [],
  });

  const [isNoteForm, setIsNoteForm] = useState(true);
  const [isCloseNote, setIsCloseNote] = useState(true);
  const [showAlert, setShowAlert] = useState("none");
  const [isDelete, setIsDelete] = useState("none");
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [assignLists, setAssignLists] = useState([]);

  const onSelect = (e, name) => {
    const updatedOptions = [...e.target.options]
      .filter((option) => option.selected)
      .map((x) => x.value);

    setFilterAdder((prevState) => ({
      ...prevState,
      [name]: updatedOptions,
    }));
  };

  const onRemove = (e, name) => {
    let unselectedItem = e.params.data.id;
    setFilterAdder((prevState) => ({
      ...prevState,
      [name]: prevState[name].filter((x) => x !== unselectedItem),
    }));
  };

  useEffect(() => {
    //console.log(filterAdder);

    setSearchParams(filterAdder);
    setFilterParams(searchParams);

    //  navigate(`${location.pathname}/${filterData}`);
  }, [filterAdder]);

  useEffect(() => {
    setFilterData(queryString.parse(location.search));
  }, [filterParams]);

  useEffect(() => {
    //console.log("getFilter");

    const getFilter = async () => {
      return fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/contacts/filter?search=${filterSearch}&page=${filterPage}&per-page=${filterPerPage}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filterRequest),
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          if (200 == data.code) {
            setContactData(data.data.data);
            setFilterCount(data.data.count);
            setFilterTotalPages(data.data.total_pages);
            // setFilterPerPage(data.total_pages);
            setLoaded(true);
          }
        });
    };

    if (
      filterRequest.tags_ids != undefined ||
      filterRequest.lists_ids != undefined ||
      filterRequest.status != undefined
    ) {
      getFilter();
      setIsFilter(1);
    } else {
      setIsFilter(0);
      // toggleRefresh();
    }
  }, [filterRequest, filterPage, filterCount, filterSearch]);

  useEffect(() => {
    //console.log("Normal Data")
    async function getData() {
      setLoaded(false);
      await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/contacts?page=${page}&per-page=${perPage}${query}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          if (200 == data.code) {
            setContactData(data.data.data);
            setCount(data.data.count);
            setTotalPages(data.data.total_pages);
            // setPerPage(data.total_pages);
            setLoaded(true);
          }
        });
    }

    // Get lists
    getLists().then((results) => {
      results.data.map(function () {
        setLists(results.data);
      });
    });

    // Get tags
    getTags().then((results) => {
      setTags(results.data);
    });

    if (0 == isFilter) getData();
  }, [perPage, page, query, refresh, isFilter]);

  const toggleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  const showMoreOption = () => {
    setActive(!isActive);
    setIsAssignTo(false);
  };

  async function deleteMultipleContacts() {
    if (selected.length > 0) {
      setIsDelete("block");
      setDeleteTitle("Delete Multiple");
      setDeleteMessage("Are you sure you want to delete these selected items?");
    } else {
      setShowAlert("block");
    }
  }

  // Delete multiple contacts after delete confirmation
  const onMultiDelete = async (status) => {
    if (status) {
      deleteMultipleContactsItems(selected).then((response) => {
        if (200 === response.code) {
          setShowNotification("block");
          setMessage(response.message);
          toggleRefresh();
          setAllSelected(false);
          setSelected([]);
          useGlobalStore.setState({
            counterRefresh: !counterRefresh,
          });
        } else {
          setErrors({
            ...errors,
            title: response?.message,
          });
        }
      });
    }
    setIsDelete("none");
  };

  // Hide alert popup after click on ok
  const onShowAlert = async (status) => {
    setShowAlert(status);
  };

  // Hide delete popup after click on cancel
  const onDeleteShow = async (status) => {
    setIsDelete(status);
  };

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

  const handleSelectAll = (e) => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(contactData.map((contact) => contact.id));
    }
    setAllSelected(!allSelected);
  };
  const showLists = (event) => {
    event.stopPropagation();
    setIsLists(!isLists);
    setIsTags(false);
    setIsStatus(false);
  };
  const showTags = (event) => {
    event.stopPropagation();
    setIsTags(!isTags);
    setIsLists(false);
    setIsStatus(false);
  };
  const showStatus = (event) => {
    event.stopPropagation();
    setIsStatus(!isStatus);
    setIsTags(false);
    setIsLists(false);
  };

  const showListDropdown = () => {
    if (!selected.length) {
      setShowAlert("block");
    } else {
      setIsAssignTo(!isAssignTo);
      setActive(!isActive);
    }
  };

  const showAddColumnList = () => {
    setAddColumn(!isAddColumn);
  };

  const noteForm = () => {
    setIsNoteForm(true);
    setIsCloseNote(!isCloseNote);
  };

  return (
    <>
      <div
        className="contact-list-header"
        onClick={() => {
          setIsLists(false);
          setIsTags(false);
          setIsStatus(false);
        }}
      >
        <div className="left-filters filter-box">
          <div className="form-group left-filter">
            <button
              className={isLists ? "filter-btn show" : "filter-btn"}
              onClick={showLists}
            >
              Lists
            </button>
            <FilterItems isActiveFilter={isLists} />
          </div>
          <div className="form-group left-filter">
            <button
              className={isTags ? "filter-btn show" : "filter-btn"}
              onClick={showTags}
            >
              Tags
            </button>
            <FilterItems isActiveFilter={isTags} />
          </div>
          <div className="form-group left-filter">
            <button
              className={isStatus ? "filter-btn show" : "filter-btn"}
              onClick={showStatus}
            >
              Status
            </button>
            <FilterItems isActiveFilter={isStatus} />
          </div>

          {/* <FilterBox
            label="Status"
            name="status"
            options={[
              {
                title: "Pending",
                id: "pending",
              },
              {
                title: "Subscribed",
                id: "subscribed",
              },
              {
                title: "Unsubscribed",
                id: "unsubscribed",
              },
            ]}
            value={status}
            tags={false}
            placeholder="Status"
            multiple={false}
            onSelect={onSelectStatus}
          /> */}
        </div>

        <div className="right-buttons">
          {!isFilter ? (
            <span className="search-section">
              <Search />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  let value = e.target.value;
                  setSearch(value);
                  // only set query when there are more than 3 characters
                  if (value.length >= 3) {
                    setQuery(encodeURI(`&search=${value}`));
                    // on every new search term set the page explicitly to 1 so that results can
                    // appear
                    setPage(1);
                  } else {
                    setQuery("");
                  }
                }}
                placeholder="Search..."
              />
            </span>
          ) : (
            ""
          )}

          {/* <button className="export-btn mintmrm-btn outline" onClick={noteForm}>
            <ExportIcon />
            Export
          </button>
          <ExportDrawer
            isOpenNote={isNoteForm}
            isCloseNote={isCloseNote}
            setIsCloseNote={setIsCloseNote}
          /> */}

          <div className="bulk-action">
            <button className="more-option" onClick={showMoreOption}>
              <ThreeDotIcon />
            </button>
            <ul
              className={
                isActive ? "mintmrm-dropdown show" : "mintmrm-dropdown"
              }
            >
              <li onClick={showListDropdown}>Assign to list</li>
              <li onClick={showListDropdown}>Assign to tag</li>
              <li onClick={showListDropdown}>Assign to segment</li>
              <li className="delete" onClick={deleteMultipleContacts}>
                Delete
              </li>
            </ul>
            <AssignedItems
              selected={assignLists}
              setSelected={setAssignLists}
              endpoint="lists"
              placeholder="Lists"
              name="list"
              listTitle="CHOOSE LIST"
              listTitleOnNotFound="No Data Found"
              searchPlaceHolder="Search..."
              allowMultiple={true}
              showSearchBar={true}
              showListTitle={true}
              showSelectedInside={false}
              allowNewCreate={true}
              isActive={isAssignTo}
              contactIds={selected}
            />
          </div>
        </div>
      </div>

      <div
        className={
          selectedSection ? "selected-result" : "selected-result inactive"
        }
      >
        <div className="selected-items">
          <span>Product Feed</span>
          <CrossIcon />
        </div>
        <div className="selected-items">
          <span>Funnel</span>
          <CrossIcon />
        </div>
        <div className="selected-items">
          <span>WPVR</span>
          <CrossIcon />
        </div>
        <div className="clear-all">
          <span>Clear All</span>
        </div>
      </div>

      <div className="pos-relative">
        <div className="add-column">
          <button className="add-column-btn" onClick={showAddColumnList}>
            <PlusCircleIcon />
            <span className="tooltip">Add Column</span>
          </button>
          <ul
            className={
              isAddColumn ? "mintmrm-dropdown show" : "mintmrm-dropdown"
            }
          >
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

            <li className="list-title">Choose columns</li>

            <Link className="add-action" to="">
              <Plus />
              Add Column
            </Link>

            {/* {contactListColumns.map((column, index) => {
                  <li className="single-column">
                    <ColumnList title={column.title} key={index} />
                  </li>;
                })} */}

            {/* <li className="button-area">
              <button className="mintmrm-btn outline default-btn">
                Default
              </button>
              <button className="mintmrm-btn outline cancel-btn">
                Cancel
              </button>
              <button className="mintmrm-btn save-btn">Save</button>
            </li> */}
          </ul>
        </div>
        <div className="contact-list-table">
          <table>
            <thead>
              <tr>
                <th className="email">
                  <span class="mintmrm-checkbox">
                    <input
                      type="checkbox"
                      name="bulk-select"
                      id="bulk-select"
                      onChange={handleSelectAll}
                      checked={allSelected}
                    />
                    <label for="bulk-select">Email</label>
                  </span>
                </th>

                <th className="first-name">First Name</th>

                <th className="last-name">Last Name</th>

                <th className="list">List</th>
                <th className="tag">Tag</th>
                <th className="last-activity">Last Activity</th>
                <th className="status">Status</th>
                <th className="phone-number">Phone Number</th>
                <th className="source">Source</th>
                <th className="action"></th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((contact, idx) => {
                return (
                  <SingleContact
                    key={idx}
                    contact={contact}
                    toggleRefresh={toggleRefresh}
                    currentActive={currentActive}
                    setCurrentActive={setCurrentActive}
                    handleSelectOne={handleSelectOne}
                    selected={selected}
                  />
                );
              })}
            </tbody>
          </table>
          {contactData.length == 0 && (
            <div className="mrm-empty-state-wrapper">
              <ContactProfile />
              <div>
                No Contact Found{" "}
                {search.length > 0 ? ` for the term "${search}"` : null}
              </div>
            </div>
          )}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="contact-list-footer">
          <Pagination
            currentPage={page}
            pageSize={perPage}
            onPageChange={setPage}
            totalCount={count}
            totalPages={totalPages}
          />
        </div>
      )}
      <div className="mintmrm-container" style={{ display: showAlert }}>
        <AlertPopup showAlert={showAlert} onShowAlert={onShowAlert} />
      </div>
      <div className="mintmrm-container" style={{ display: isDelete }}>
        <DeletePopup
          title={deleteTitle}
          message={deleteMessage}
          onDeleteShow={onDeleteShow}
          onMultiDelete={onMultiDelete}
          selected={selected}
        />
      </div>
      <SuccessfulNotification display={showNotification} message={message} />
    </>
  );
}
