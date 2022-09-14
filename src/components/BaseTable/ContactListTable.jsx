import React, { useEffect, useState } from "react";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";
import queryString from "query-string";

// Internal dependencies
import Pagination from "../Pagination";
import SingleContact from "./SingleContact";
import FilterBox from "../Filterbox";
import Search from "../Icons/Search";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import { getLists } from "../../services/List";
import { getTags } from "../../services/Tag";
import Swal from "sweetalert2";
import Selectbox2 from "../Selectbox2";
import ColumnList from "./ColumnList";
import FilterItems from "./FilterItems";
import CrossIcon from "../Icons/CrossIcon";

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

  const [isActive, setActive] = useState(false);
  const [isAddColumn, setAddColumn] = useState(false);
  const [selectedSection, setSelectedSection] = useState(false);

  const [contactData, setContactData] = useState([]);
  const [filterContact, setFilterContact] = useState([]);

  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

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

  const [currentActive, setCurrentActive] = useState(0);
  const [openListSelectBox, setOpenTagSelectBox] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [filterParams, setFilterParams] = useState([]);

  // Prepare filter object
  const [filterAdder, setFilterAdder] = useState({
    lists: [],
    tags: [],
    status: [],
  });

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

  // filter by status

  const onSelectStatus = (e) => {
    setStatus([e.target.value]);
    navigateSearch("/contacts", {
      // lists: lists,
      // tags: tags,
      status: e.target.value,
    });
  };

  // const useNavigateSearch = () => {
  //   return (pathname, params) => {
  //     navigate(`${pathname}?${createSearchParams(params)}`, {
  //       replace: true,
  //     });
  //     //console.log(params);
  //     setFilterData(params);
  //     // add your query here
  //     fetch(
  //       `${window.MRM_Vars.api_base_url}mrm/v1/contacts/filter?search=${search}&page=${page}&per-page=${perPage}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json, text/plain, */*",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(params),
  //       }
  //     )
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //       })
  //       .then((data) => {
  //         if (200 == data.code) {
  //           setContactData(data.data.data);
  //           setCount(data.data.count);
  //           setTotalPages(data.data.total_pages);
  //           // setPerPage(data.total_pages);
  //           setLoaded(true);
  //         }
  //       });
  //     //setContacts([]);
  //   };
  // };
  // const navigateSearch = useNavigateSearch();

  const location = useLocation();

  useEffect(() => {
    setStatus(location.search.slice(8));

    fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/contacts/filter?search=${search}&page=${page}&per-page=${perPage}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: status }),
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
          setCount(data.data.count);
          setTotalPages(data.data.total_pages);
          // setPerPage(data.total_pages);
          setLoaded(true);
        }
      });
  }, [status]);

  // lists

  const onSelectLists = (e) => {};

  // const onSelectLists = (e) => {
  //   setFilterLists(e.target.value);
  //   fetch(
  //     `${window.MRM_Vars.api_base_url}mrm/v1/contacts/filter?search=${search}&page=${page}&per-page=${perPage}`,
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json, text/plain, */*",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ group_id: [e.target.value] }),
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       if (200 == data.code) {
  //         setContacts(data.data.data);
  //         setCount(data.count);
  //         // setPerPage(data.total_pages);
  //         setLoaded(true);
  //       }
  //     });
  // };

  useEffect(() => {
    console.log(isLists);
    async function getData() {
      setLoaded(false);
      fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/contacts?search=${search}&page=${page}&per-page=${perPage}`
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

    if (filterData.status == undefined) getData();
  }, [perPage, page, search, refresh]);

  const toggleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  const showMoreOption = () => {
    setActive(!isActive);
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
  const showLists = () => {
    setIsLists(!isLists);
    // if(isLists === true){
    //   setIsTags(false);
    //   setStatus(false);
    // }
    console.log(isLists);
  };
  const showTags = () => {
    setIsTags(!isTags);
    // if(isTags === true){
    //   setIsLists(false);
    //   setStatus(false);
    // }
    console.log(isTags);
  };
  const showStatus = () => {
    setIsStatus(!isStatus);
    // if(isStatus== true){
    //   setIsTags(false);
    //   setIsLists(false);
    // }
    console.log(isStatus);
  };

  return (
    <>
      <div className="contact-list-header">
        <div className="left-filters filter-box">
          {/* <FilterBox
            label="Lists"
            name="lists"
            options={lists}
            values={contactData.lists}
            placeholder="Select List"
            tags={false}
            multiple={false}
            onSelect={onSelectLists}
          /> */}
          {/* <Selectbox2
            label=""
            name="lists"
            options={lists}
            placeholder="Lists"
            tags={false}
            multiple={true}
            onSelect={onSelect}
            onRemove={onRemove}
          />
          <Selectbox2
            label=""
            name="tags"
            options={tags}
            placeholder="Tags"
            tags={true}
            multiple={true}
            onSelect={onSelect}
            onRemove={onRemove}
          />
          <Selectbox2
            label=""
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
            placeholder="Status"
            value={status}
            tags={true}
            multiple={true}
            onSelect={onSelect}
            onRemove={onRemove}
          /> */}

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
          {filterData.status === undefined ? (
            <span className="search-section">
              <Search />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search..."
              />
            </span>
          ) : (
            ""
          )}

          {/* <button className="export-btn soronmrm-btn outline">
                  <ExportIcon />
                  Export
                </button> */}

          <button className="more-option" onClick={showMoreOption}>
            <ThreeDotIcon />

            <ul
              className={
                isActive ? "soronmrm-dropdown show" : "soronmrm-dropdown"
              }
            >
              <li>Assign to list</li>
              <li>Assign to tag</li>
              <li>Assign to segment</li>
              <li className="delete" onClick={deleteMultipleContacts}>
                Delete
              </li>
            </ul>
          </button>
        </div>
      </div>

      <div className={selectedSection ? "selected-result" : "selected-result inactive"}>
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

      <div className="contact-list-table">
        <table>
          <thead>
            <tr>
              <th className="email">
                <span class="soronmrm-checkbox">
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
