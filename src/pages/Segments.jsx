// import BaseTable from "../components/Base/BaseTable";
// import { Table, Button } from "rsuite";
// const { HeaderCell, Cell, Column } = Table;
// import BaseCreate from "../components/Base/BaseCreate";
// import { Link ,useParams} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AlertPopup from "../components/AlertPopup";
import ContactNavbar from "../components/ContactNavbar";
import DeletePopup from "../components/DeletePopup";
import Delete from "../components/Icons/Delete";
import NoSegmentIcon from "../components/Icons/NoSegmentIcon";
import Search from "../components/Icons/Search";
import ThreeDotIcon from "../components/Icons/ThreeDotIcon";
import ListenForOutsideClicks from "../components/ListenForOutsideClicks";
import SegmentList from "../components/Segment/SegmentList";
import { useGlobalStore } from "../hooks/useGlobalStore";
import { getAllSegments } from "../services/Segment";

const Segments = () => {
  // global counter update real time
  const counterRefresh = useGlobalStore((state) => state.counterRefresh);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortButtonName, setSortButtonName] = useState("Name (A - Z)");
  const [isDelete, setIsDelete] = useState("none");
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [listID, setListID] = useState();
  const [search, setSearch] = useState("");
  const [showAlert, setShowAlert] = useState("none");

  // current active menu id, whenever a option button is selected this
  // var tracks the current id of
  const [currentActive, setCurrentActive] = useState(0);

  // search query, search query only updates when there are more than 3 characters typed
  const [query, setQuery] = useState("");
  // current page
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  // order by which field
  const [orderBy, setOrderBy] = useState("title");
  const [refresh, setRefresh] = useState(true);
  const [count, setCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  // order type asc or desc
  const [orderType, setOrderType] = useState("asc");
  // showCreate shows the create form if true
  const [showCreate, setShowCreate] = useState(false);
  // single selected array which holds selected ids
  const [selected, setSelected] = useState([]);
  // the select all checkbox
  const [allSelected, setAllSelected] = useState(false);
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    getAllSegments(orderBy, orderType, page, perPage, query).then(
      (response) => {
        console.log(response);
        setSegments(response.data.data);
        setCount(response.count);
        setTotalPages(response.total_pages);
      }
    );
  }, [page, perPage, query, refresh, orderBy, orderType]);

  const [listening, setListening] = useState(false);

  const sortByRef = useRef(null);
  const moreOptionRef = useRef(null);

  useEffect(
    ListenForOutsideClicks(listening, setListening, sortByRef, setShowDropdown)
  );

  useEffect(
    ListenForOutsideClicks(
      listening,
      setListening,
      moreOptionRef,
      setShowMoreOptions
    )
  );

  useGlobalStore.setState({
    navbarMarkup: (
      <Link to="/segments/create">
        <button
          className="contact-save mintmrm-btn"
          onClick={() => setShowCreate((prev) => !prev)}
        >
          + Add Segments
        </button>
      </Link>
    ),
    hideGlobalNav: false,
  });

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleSelect = (event, order_by, order_type) => {
    setShowDropdown(false);
    setOrderBy(order_by);
    setOrderType(order_type);
    if (order_by == "title" && order_type == "asc") {
      setSortButtonName("Name (A - Z)");
    } else if (order_by == "title" && order_type == "desc") {
      setSortButtonName("Name (Z - A)");
    } else if (order_by == "created_at" && order_type == "asc") {
      setSortButtonName("Date Created Asc");
    } else {
      setSortButtonName("Date Created Desc");
    }
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
      setSelected(segments.map((segment) => segment.id));
    }
    setAllSelected(!allSelected);
  };

  // Get field id from child component
  const deleteSegment = async (list_id) => {
    setIsDelete("block");
    setDeleteTitle("Delete List");
    setDeleteMessage("Are you sure you want to delete the list?");
    setListID(list_id);
    setAllSelected(false);
    setSelected([]);
    setShowMoreOptions(false);
  };

  // Multiple selection confirmation
  const deleteMultipleSegment = async () => {
    if (selected.length > 0) {
      setIsDelete("block");
      setDeleteTitle("Delete Multiple");
      setDeleteMessage("Are you sure you want to delete these selected items?");
    } else {
      setShowAlert("block");
    }
  };
  // Hide alert popup after click on ok
  const onShowAlert = async (status) => {
    setShowAlert(status);
  };
  // Hide delete popup after click on cancel
  const onDeleteShow = async (status) => {
    setIsDelete(status);
  };
  const onDeleteStatus = () => {
    setIsDelete("none");
  };
  const onMultiDelete = () => {
    setIsDelete("none");
  };

  return (
    <>
    {console.log(segments)}
      <ContactNavbar />
      <div className="contact-list-page segment-page">
        <div className="mintmrm-container">
          <div className="contact-list-area">
            <div className="contact-list-header">
              <div className="left-filters">
                <p className="sort-by">Sort by</p>
                <div className="sort-by-dropdown" ref={sortByRef}>
                  <button
                    className={
                      showDropdown
                        ? "drop-down-button show"
                        : "drop-down-button"
                    }
                    onClick={handleDropdown}
                  >
                    {sortButtonName}
                  </button>
                  <ul
                    className={
                      showDropdown
                        ? "mintmrm-dropdown show"
                        : "mintmrm-dropdown"
                    }
                  >
                    <li
                      onClick={(event) => handleSelect(event, "title", "asc")}
                    >
                      Name (A - Z)
                    </li>
                    <li
                      onClick={(event) => handleSelect(event, "title", "desc")}
                    >
                      Name (Z - A)
                    </li>
                    {/* <li
                      onClick={(event) =>
                        handleSelect(event, "created_at", "asc")
                      }
                    >
                      Date Created Asc
                    </li>
                    <li
                      onClick={(event) =>
                        handleSelect(event, "created_at", "desc")
                      }
                    >
                      Date Created Desc
                    </li> */}
                  </ul>
                </div>
              </div>
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
                      if (value.length >= 1) {
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
                <div className="bulk-action" ref={moreOptionRef}>
                  {/* show more options section */}
                  <button
                    className="more-option"
                    onClick={() => setShowMoreOptions(!showMoreOptions)}
                  >
                    <ThreeDotIcon />

                    <ul
                      className={
                        showMoreOptions
                          ? "select-option mintmrm-dropdown show"
                          : "select-option mintmrm-dropdown"
                      }
                    >
                      <li onClick={deleteMultipleSegment}>
                        <Delete />
                        Delete Selected
                      </li>
                    </ul>
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-list-body">
              <div class="contact-list-table">
                <table>
                  <thead>
                    <tr>
                      <th className="">
                        <span class="mintmrm-checkbox no-title">
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
                      <th>Contacts</th>
                      <th className="">Description</th>
                      <th className="creation-date">Creation Date</th>
                      <th className="action"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* List empty or search not found ui */}
                    {!segments?.length && (
                      <tr>
                        <td
                          className="no-contact"
                          colspan="10"
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <NoSegmentIcon />
                          No Segment Found
                          {search ? `"${search}"` : null}
                        </td>
                      </tr>
                    )}
                    {segments?.map((segment, idx) => {
                      return (
                        <SegmentList
                          key={idx}
                          segment={segment}
                          deleteSegment={deleteSegment}
                          currentActive={currentActive}
                          setCurrentActive={setCurrentActive}
                          handleSelectOne={handleSelectOne}
                          selected={selected}
                        />
                      );
                    })}
                    {}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              {/* <Pagination
                    currentPage={page}
                    pageSize={perPage}
                    onPageChange={setPage}
                    totalCount={count}
                    totalPages={totalPages}
                  /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mintmrm-container" style={{ display: isDelete }}>
        <DeletePopup
          title={deleteTitle}
          message={deleteMessage}
          onDeleteShow={onDeleteShow}
          selected={selected}
          onDeleteStatus={onDeleteStatus}
          onMultiDelete={onMultiDelete}
        />
      </div>
      <div className="mintmrm-container" style={{ display: showAlert }}>
        <AlertPopup showAlert={showAlert} onShowAlert={onShowAlert} />
      </div>
    </>
  );
};

export default Segments;
