import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import HoverMenu from "../HoverMenu";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Portal from "../Portal";
import Plus from "../Icons/Plus";
import Selectbox from "../Selectbox";
import Search from "../Icons/Search";
import FormIconXL from "../Icons/FormIconXL";
import FormIconSM from "../Icons/FormIconSM";
import CopyIcon from "../Icons/CopyIcon";
import Pagination from "../Pagination";

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

  // single selected array which holds selected ids
  const [selected, setSelected] = useState([]);

  // handler for all item click
  const handleSelectAll = (e) => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(formData.map((form) => form.id));
    }
    setAllSelected(!allSelected);
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

  //get current date
  const date = new Date();

  // get how many days ago the form is created
  const getDaysAgo = (created_at) => {
    const created = new Date(created_at);

    return parseInt((date - created) / (1000 * 3600 * 24));
  };

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
      <div className="form-list-page">
        <div className="contact-list-page form-list">
          <div className="mintmrm-container">
            <div className="form-title-header">
              <div className="left-section">
                <h2>Forms</h2>
              </div>

              <div className="right-section">
                <Link
                  className="add-form-btn mintmrm-btn"
                  to="/form-builder/"
                  state={{ reload: true }}
                >
                  <Plus /> Add Form
                </Link>
              </div>
            </div>

            <div className="contact-list-area">
              <div className="contact-list-header">
                <h4 className="header-title">List View</h4>

                <div className="right-buttons">
                  <div className="sorting">
                    <h5>Sort by</h5>
                    <select name="sort-by" id="">
                      <option value="created_at">Date</option>
                      <option value="title">Title</option>
                    </select>
                  </div>

                  <span className="search-section">
                    <Search />
                    <input type="text" placeholder="Search..." />
                  </span>
                </div>
              </div>

              <div className="contact-list-body">
                <div class="contact-list-table">
                  <table>
                    <thead>
                      <tr>
                        <th className="form-name">
                          <span class="mintmrm-checkbox no-title">
                            <input
                              type="checkbox"
                              name="bulk-select"
                              id="bulk-select"
                              onChange={handleSelectAll}
                              checked={allSelected}
                            />
                            <label for="bulk-select">Forms Name</label>
                          </span>
                        </th>
                        {/* <th className="view">View</th> */}
                        <th className="signup">Signup</th>
                        <th className="shortcode">Shortcode</th>
                        <th className="status">Status</th>
                        <th className="action"></th>
                      </tr>
                    </thead>

                    <tbody>
                      {/* <tr>
                        <td className="form-name">
                          <div class="name-checkbox">
                            <span class="mintmrm-checkbox no-title">
                              <input type="checkbox" name="form1" id="form1" />
                              <label for="form1"></label>
                            </span>

                            <div className="name-wrapper">
                              <span className="icon">
                                <FormIconSM />
                              </span>

                              <span className="name">
                                <a href="">Collaboration Request</a>
                                <small>2 days ago</small>
                              </span>
                            </div>
                          </div>
                        </td>


                        <td className="signup">45</td>

                        <td className="shortcode">
                          <span id="myTooltip"></span>
                          <div className="shortcode-wrapper">
                            <input
                              type="text"
                              value='[mondcrm id="8"]'
                              id="shortcode1"
                            />
                            <button type="button" className="copy">
                              <CopyIcon />
                            </button>
                          </div>
                        </td>

                        <td className="status">
                          <span className="wpfnl-switcher">
                            <input
                              type="checkbox"
                              name="status"
                              id="form-status"
                            />
                            <label htmlFor="form-status"></label>
                          </span>
                        </td>

                        <td className="action">
                          <button className="more-option">
                            <ThreeDotIcon />

                            <ul className="mintmrm-dropdown">
                              <li>Edit</li>
                              <li>Delete</li>
                            </ul>
                          </button>
                        </td>
                      </tr> */}
                      {formData.length === 0 && (
                        <tr className="no-data">
                          <td colSpan={6}>
                            <FormIconXL />
                            <h5>No Forms found</h5>
                          </td>
                        </tr>
                      )}

                      {formData.length > 0 ? (
                        formData.map((form) => {
                          return (
                            <tr key={form.id}>
                              <td className="form-name">
                                <div class="name-checkbox">
                                  <span class="mintmrm-checkbox no-title">
                                    <input
                                      type="checkbox"
                                      name={form.id}
                                      id={form.id}
                                      onChange={handleSelectOne}
                                      checked={selected.includes(form.id)}
                                    />
                                    <label for={form.id}></label>
                                  </span>

                                  <div className="name-wrapper">
                                    <span className="icon">
                                      <FormIconSM />
                                    </span>

                                    <span className="name">
                                      <a href="">{form.title}</a>
                                      <small>
                                        {getDaysAgo(form.created_at)} days ago
                                      </small>
                                    </span>
                                  </div>
                                </div>
                              </td>

                              {/* <td className="view">453</td> */}

                              <td className="signup">
                                {form.meta_fields?.sign_up}
                              </td>

                              <td className="shortcode">
                                <span id="myTooltip"></span>
                                <div className="shortcode-wrapper">
                                  <input
                                    type="text"
                                    value={'[mondcrm id="' + form.id + '"]'}
                                    id="shortcode1"
                                  />
                                  <button type="button" className="copy">
                                    <CopyIcon />
                                  </button>
                                </div>
                              </td>

                              <td className="status">
                                <span className="wpfnl-switcher">
                                  <input
                                    type="checkbox"
                                    name="status"
                                    id="form-status"
                                  />
                                  <label htmlFor="form-status"></label>
                                </span>
                              </td>

                              <td className="action">
                                <button className="more-option">
                                  <ThreeDotIcon />

                                  <ul className="mintmrm-dropdown">
                                    <li>Edit</li>
                                    <li>Delete</li>
                                  </ul>
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr className="no-data">
                          <td colSpan={6}>
                            <FormIconXL />
                            <h5>No Forms found</h5>
                          </td>
                        </tr>
                      )}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
