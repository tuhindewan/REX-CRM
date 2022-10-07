import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import HoverMenu from "../HoverMenu";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Portal from "../Portal";
import Plus from "../Icons/Plus";
import Selectbox from "../Selectbox";
import Search from "../Icons/Search";

export default function FormIndex(props) {
  const [formData, setFormData] = useState({});

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
    data: "",
  });

  // search input value is stored here
  const [search, setSearch] = useState("");

  // search query, search query only updates when there are more than 3 characters typed
  const [query, setQuery] = useState("");

  // refresh the whole list if this boolean changes
  const [refresh, setRefresh] = useState(true);

  // at first page load get all the available lists
  // also get lists if the page or perpage or search item changes
  useEffect(() => {
    async function getForms() {
      const res = await fetch(
        `${window.MRM_Vars.api_base_url}mrm/v1/forms?page=${page}&per-page=${perPage}${query}`
      );
      const resJson = await res.json();
      if (resJson.code == 200) {
        setFormData(resJson.data.data);
        setCount(resJson.data.count);
        setTotalPages(resJson.data.total_pages);
      }
    }
    getForms();
    // const timer = setTimeout(() => {
    //   setShowNotification("none");
    // }, 3000);
    // return () => clearTimeout(timer);
  }, [page, perPage, query, refresh]);

  return (
    <>
      <Link
        className="add-form-btn"
        to="/form-builder/"
        state={{ reload: true }}
      >
        <button className=" mintmrm-btn ">
          <Plus /> Add Form
        </button>
      </Link>

      <div className="contact-list-page tags-page">
        <div className="mintmrm-container">
          <div className="contact-list-area">
            <div className="contact-list-header">
              <div className="right-buttons">
                {/* search input */}
                <span className="search-section">
                  <Search />
                  <input
                    type="text"
                    placeholder="Search..."
                    // value={search}
                    // onChange={(e) => {
                    //   let value = e.target.value;
                    //   setSearch(value);
                    //   // only set query when there are more than 3 characters
                    //   if (value.length >= 3) {
                    //     setQuery(`&search=${value}`);
                    //     // on every new search term set the page explicitly to 1 so that results can
                    //     // appear
                    //     setPage(1);
                    //   } else {
                    //     setQuery("");
                    //   }
                    // }}
                  />
                </span>
                    {/* <div className="bulk-action">
                    <button
                        className="more-option"
                        onClick={() => setShowMoreOptions(!showMoreOptions)}
                    >
                        <ThreeDotIcon />

                        <ul
                        className={
                            showMoreOptions
                            ? "mintmrm-dropdown show"
                            : "mintmrm-dropdown"
                        }
                        >
                        <li className="delete"
                            onClick={deleteMultipleList}>
                            Delete Selected
                        </li>
                        </ul>
                    </button>
                    </div> */}
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
                            // onChange={handleSelectAll}
                            // checked={allSelected}
                          />
                          <label for="bulk-select">Name</label>
                        </span>
                      </th>
                      <th>Contacts</th>
                      <th className="creation-date">Creation Date</th>
                      <th className="action"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* {formData.length > 0 &&
                        formData.map((form, idx) => {
                        return (
                          <TagItem
                            key={idx}
                            list={form}
                            deleteTag={deleteTag}
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
                {/* {lists.length == 0 && (
                  <div className="mrm-empty-state-wrapper">
                    <TagIcon />
                    <div>
                      No Tags Found{" "}
                      {search.length > 0 ? ` for the term "${search}"` : null}
                    </div>
                  </div>
                )} */}
              </div>
            </div>
            {/* {totalPages > 1 && (
              <div className="contact-list-footer">
                <Pagination
                  currentPage={page}
                  pageSize={perPage}
                  onPageChange={setPage}
                  totalCount={count}
                  totalPages={totalPages}
                />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
