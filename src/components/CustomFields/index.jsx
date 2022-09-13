import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import Plus from "../Icons/Plus";
import Search from "../Icons/Search";
import TagIcon from "../Icons/TagIcon";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Pagination from "../Pagination";
import Selectbox from "../Selectbox";

const CustomFields = () => {
  // set navbar Buttons
  useGlobalStore.setState({
    navbarMarkup: (
      <Link to="/custom-fields/create">
        <button className="add-contact-btn soronmrm-btn ">
          <Plus /> Add Field
        </button>
      </Link>
    ),
    hideGlobalNav: false,
  });

  // whether to show more options or not
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  // how many to show per page
  const [perPage, setPerPage] = useState(10);

  // current page
  const [page, setPage] = useState(1);

  // total count of results
  const [count, setCount] = useState(0);

  // total number of pages for result
  const [totalPages, setTotalPages] = useState(0);

  return (
    <>
      <div className="contact-list-page">
        <div className="soronmrm-container">
          <div className="contact-list-area">
            <div className="contact-list-header">
              <div className="left-filters">
                <p className="sort-by">Sort by</p>
                <Selectbox
                  options={[
                    {
                      title: "Name",
                      id: "name",
                    },
                    {
                      title: "Date Created",
                      id: "date-created",
                    },
                  ]}
                  tags={false}
                  placeholder="Name"
                  multiple={false}
                />
              </div>
              <div className="right-buttons">
                {/* search input */}
                <span className="search-section">
                  <Search />
                  <input type="text" placeholder="Search..." />
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
                    <li className="delete">Delete Selected</li>
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
                          />
                          <label for="bulk-select">Field Name</label>
                        </span>
                      </th>
                      <th className="field-type">Type</th>
                      <th className="creation-date">Creation Date</th>
                      <th className="action"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* {lists.length > 0 &&
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
                      })} */}
                  </tbody>
                </table>
                {/* List empty or search not found ui */}
                {/* {lists.length == 0 && ( */}
                <div className="mrm-empty-state-wrapper">
                  <TagIcon />
                  <div>
                    No Fields Found{" "}
                    {/* {search.length > 0 ? ` for the term "${search}"` : null} */}
                  </div>
                </div>
                {/* )} */}
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

export default CustomFields;
