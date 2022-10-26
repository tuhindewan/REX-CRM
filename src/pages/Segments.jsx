// import BaseTable from "../components/Base/BaseTable";
// import { Table, Button } from "rsuite";
// const { HeaderCell, Cell, Column } = Table;
// import BaseCreate from "../components/Base/BaseCreate";
// import { Link ,useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactNavbar from "../components/ContactNavbar";
import { useGlobalStore } from "../hooks/useGlobalStore";
import Search from "../components/Icons/Search";
import ThreeDotIcon from "../components/Icons/ThreeDotIcon";
import Delete from "../components/Icons/Delete";
import NoSegmentIcon from "../components/Icons/NoSegmentIcon";
import SegmentList from "../components/Segment/SegmentList";

const Segments = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortButtonName, setSortButtonName] = useState("Name (A - Z)");
  const [segment, setSegment] = useState([
    {
      created_at: "2022-10-20 04:44:48",
      data: "",
      id: "1",
      slug: "Segment-1",
      title: "Segment-1",
      total_contacts: "6",
    },
    {
      created_at: "2022-10-25 04:44:48",
      data: "",
      id: "2",
      slug: "Segment-2",
      title: "Segment-2",
      total_contacts: "4",
    },
    {
      created_at: "2022-10-24 04:44:48",
      data: "",
      id: "3",
      slug: "Segment-3",
      title: "Segment-3",
      total_contacts: "5",
    },
  ]);

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
  return (
    <>
      <ContactNavbar />
      <div className="contact-list-page segment-page">
        <div className="mintmrm-container">
          <div className="contact-list-area">
            <div className="contact-list-header">
              <div className="left-filters">
                <p className="sort-by">Sort by</p>
                <div className="sort-by-dropdown">
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
                    // onClick={(event) => handleSelect(event, "title", "asc")}
                    >
                      Name (A - Z)
                    </li>
                    <li
                    // onClick={(event) => handleSelect(event, "title", "desc")}
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
                  <input type="text" placeholder="Search..." />
                </span>
                <div className="bulk-action">
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
                      <li>
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
                    {/* {
                      <tr>
                        <td
                          className="no-contact"
                          colspan="10"
                          style={{ textAlign: "center" }}
                        >
                          <NoSegmentIcon />
                          No Segment Found
                        </td>
                      </tr>
                    } */}
                    {<SegmentList />}
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
      {/* <BaseTable endpoint="/segments">
        <Column width={100} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell>Title</HeaderCell>
          <TitleCell dataKey="title">
          </TitleCell>
        </Column>
        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell>Slug</HeaderCell>
          <Cell dataKey="slug" />
        </Column>
        <Column width={150} align="left" flexGrow={1}>
          <HeaderCell>Created At</HeaderCell>
          <Cell dataKey="created_at" />
        </Column>
      </BaseTable> */}
    </>
  );
};

export default Segments;
