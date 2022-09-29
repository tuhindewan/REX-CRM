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
import Swal from "sweetalert2";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import CrossIcon from "../Icons/CrossIcon";
import PlusCircleIcon from "../Icons/PlusCircleIcon";
import Search from "../Icons/Search";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Pagination from "../Pagination";
import AssignedItems from "./AssignedItems";
import SingleContact from "./SingleContact";
import ExportIcon from "../Icons/ExportIcon";
import ExportDrawer from "../ExportDrawer";
import FilterItems from "./FilterItems";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import CustomSelect from "../CustomSelect";

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
  const [listIds, setListIds] = useState([]);
  const [tagIds, setTagIds] = useState([]);
  const [statusIds, setStatusIds] = useState([]);
  const [filterElem, setFilterElem] = useState({
    lists: [],
    tags: [],
    status: [],
  });
  useEffect(() => {
    selectedLists.map((list) => {
      // console.log(list);
      setListIds([...listIds, list.id]);
      setFilterElem((prev) => ({
        ...prev,
        lists: listIds,
      }));
    });
    selectedTags.map((tag) => {
      setTagIds([...tagIds, tag.id]);
      setFilterElem((prev) => ({
        ...prev,
        tags: tagIds,
      }));
    });
    selectedStatus.map((status) => {
      setStatusIds([...statusIds, status.id]);
      setFilterElem((prev) => ({
        prev,
        status: statusIds,
      }));
    });
  }, [selectedLists, selectedStatus, selectedTags]);

  // global counter update real time
  const counterRefresh = useGlobalStore((state) => state.counterRefresh);

  // Prepare filter object
  const [filterAdder, setFilterAdder] = useState({
    lists: [],
    tags: [],
    status: [],
  });

  const [isNoteForm, setIsNoteForm] = useState(true);
  const [isCloseNote, setIsCloseNote] = useState(true);

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (selected.length > 0) {
          const res = await fetch(
            `${window.MRM_Vars.api_base_url}mrm/v1/contacts/`,
            {
              method: "DELETE",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                contact_ids: selected,
              }),
            }
          );
          Swal.fire("Deleted!", "Contact has been deleted.", "success");
          setAllSelected(false);
          useGlobalStore.setState({
            counterRefresh: !counterRefresh,
          });
          toggleRefresh();
        }
      }
    });
  }

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
    setIsAssignTo(!isAssignTo);
    setActive(!isActive);
  };

  const showAddColumnList = () => {
    setAddColumn(!isAddColumn);
  };

  const noteForm = () => {
    setIsNoteForm(true);
    setIsCloseNote(!isCloseNote);
  };


  const onCustomSelect = (e) => {

  }

  const deleteSelectedlist = (e, id) => {
    const index = selectedLists.findIndex((item) => item.id == id);

    // already in selected list so remove it from the array
    if (index >= 0) {
      setSelectedLists(selectedLists.filter((item) => item.id != id));
    }
  };
  const deleteSelectedtag = (e, id) => {
    const index = selectedTags.findIndex((item) => item.id == id);

    // already in selected list so remove it from the array
    if (index >= 0) {
      setSelectedTags(selectedTags.filter((item) => item.id != id));
    }
  };
  const deleteSelectedstatus = (e, id) => {
    const index = selectedStatus.findIndex((item) => item.id == id);

    // already in selected list so remove it from the array
    if (index >= 0) {
      setSelectedStatus(selectedStatus.filter((item) => item.id != id));
    }
  };

  return (
    <>
    {console.log(filterElem)}
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
            <CustomSelect
              selected={selectedLists}
              setSelected={setSelectedLists}
              endpoint="/lists"
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
            />
          </div>
          <div className="form-group left-filter">
            <CustomSelect
              selected={selectedTags}
              setSelected={setSelectedTags}
              endpoint="/tags"
              placeholder="Tags"
              name="tag"
              listTitle="CHOOSE TAG"
              listTitleOnNotFound="No Data Found"
              searchPlaceHolder="Search..."
              allowMultiple={true}
              showSearchBar={true}
              showListTitle={true}
              showSelectedInside={false}
              allowNewCreate={true}
            />
          </div>
          <div className="form-group left-filter">
            <CustomSelect
              selected={selectedStatus}
              setSelected={setSelectedStatus}
              endpoint="/status"
              placeholder="Status"
              name="status"
              listTitle="CHOOSE Status"
              listTitleOnNotFound="No Data Found"
              searchPlaceHolder="Search..."
              allowMultiple={true}
              showSearchBar={true}
              showListTitle={true}
              showSelectedInside={false}
              allowNewCreate={true}
            />
          </div>
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

          <button className="export-btn mintmrm-btn outline" onClick={noteForm}>
            <ExportIcon />
            Export
          </button>
          <ExportDrawer
            isOpenNote={isNoteForm}
            isCloseNote={isCloseNote}
            setIsCloseNote={setIsCloseNote}
          />

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
            <AssignedItems isActive={isAssignTo} />
          </div>
        </div>
      </div>

      <div className={selectedLists.length == 0 && selectedTags.length == 0 && selectedStatus.length == 0 ? "selected-result inactive" : "selected-result"}>
        {selectedLists.map((item) => {
          return (
            <span key={item.id} className="mrm-custom-selected-items">
              {item.title}
              <div
                className="cross-icon"
                onClick={(e) => deleteSelectedlist(e, item.id)}
              >
                <CrossIcon />
              </div>
            </span>
          );
        })}
        {selectedTags.map((item) => {
          return (
            <span key={item.id} className="mrm-custom-selected-items">
              {item.title}
              <div
                className="cross-icon"
                onClick={(e) => deleteSelectedtag(e, item.id)}
              >
                <CrossIcon />
              </div>
            </span>
          );
        })}
        {selectedStatus.map((item) => {
          return (
            <span key={item.id} className="mrm-custom-selected-items">
              {item.title}
              <div
                className="cross-icon"
                onClick={(e) => deleteSelectedstatus(e, item.id)}
              >
                <CrossIcon />
              </div>
            </span>
          );
        })}

        {/* <div className="selected-items">
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
        </div> */}
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
              {!contactData.length && (
                <tr>
                  <td colspan="10" style={{ textAlign: "center" }}>
                    No contact data found.
                  </td>
                </tr>
              )}
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
    </>
  );
}
