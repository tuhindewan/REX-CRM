import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import {
  deleteMultipleFieldItems,
  deleteSingleCustomField,
  getCustomFields,
} from "../../services/CustomField";
import AlertPopup from "../AlertPopup";
import DeletePopup from "../DeletePopup";
import Plus from "../Icons/Plus";
import Search from "../Icons/Search";
import TagIcon from "../Icons/TagIcon";
import ThreeDotIcon from "../Icons/ThreeDotIcon";
import Pagination from "../Pagination";
import Selectbox from "../Selectbox";
import SuccessfulNotification from "../SuccessfulNotification";
import SingleField from "./SingleField";

const CustomFields = () => {
  let navigate = useNavigate();

  const location = useLocation();
  // set navbar Buttons
  useGlobalStore.setState({
    navbarMarkup: (
      <Link to="/custom-fields/create">
        <button className="add-contact-btn mintmrm-btn ">
          <Plus /> Add Field
        </button>
      </Link>
    ),
    hideGlobalNav: false,
  });

  // global counter update real time
  const counterRefresh = useGlobalStore((state) => state.counterRefresh);
  const [customFields, setCustomFields] = useState([]);
  const [showNotification, setShowNotification] = useState("none");
  const [isDelete, setIsDelete] = useState("none");
  const [message, setMessage] = useState("");

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
  const [currentActive, setCurrentActive] = useState(0);
  // the select all checkbox
  const [allSelected, setAllSelected] = useState(false);

  // single selected array which holds selected ids with
  const [selected, setSelected] = useState([]);

  // refresh the whole list if this boolean changes
  const [refresh, setRefresh] = useState(true);

  const [fieldID, setFieldID] = useState();
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState("none");
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  // Fetch all custom fields
  useEffect(() => {
    getCustomFields().then((results) => {
      setCustomFields(results.data);
    });
    if ("field-created" == location.state?.status) {
      setShowNotification("block");
      setMessage(location.state?.message);
    }
  }, [refresh]);

  // Get field id from child component
  const deleteField = async (field_id) => {
    setIsDelete("block");
    setDeleteTitle("Delete List");
    setDeleteMessage("Are you sure you want to delete the list?");
    setFieldID(field_id);
  };

  // Delete field after delete confirmation
  const onDeleteStatus = async (status) => {
    if (status) {
      deleteSingleCustomField(fieldID).then((response) => {
        if (200 === response.code) {
          setShowNotification("block");
          setMessage(response.message);
          toggleRefresh();
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

  // Hide delete popup after click on cancel
  const onDeleteShow = async (status) => {
    setIsDelete(status);
  };

  // Handle one row selection
  const handleSelectOne = async (event) => {
    if (selected.includes(event.target.id)) {
      setSelected(selected.filter((element) => element != event.target.id));
      setAllSelected(false);
    } else {
      setSelected([...selected, event.target.id]);
    }
  };

  // this function sets the required edit parameters
  function editField(field) {
    let path = `../custom-fields/update/${field.id}`;
    navigate(path);
  }

  // Handle all checkbox row selection
  const handleSelectAll = async (event) => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(customFields.map((field) => field.id));
    }
    setAllSelected(!allSelected);
  };

  // the data is fetched again whenver refresh is changed
  const toggleRefresh = async () => {
    setRefresh((prev) => !prev);
  };

  // Hide alert popup after click on ok
  const onShowAlert = async (status) => {
    setShowAlert(status);
  };

  // Multiple selection confirmation
  const deleteMultipleFields = async () => {
    if (selected.length > 0) {
      setIsDelete("block");
      setDeleteTitle("Delete Multiple");
      setDeleteMessage("Are you sure you want to delete these selected items?");
    } else {
      setShowAlert("block");
    }
  };

  // Delete multiple lists after delete confirmation
  const onMultiDelete = async (status) => {
    if (status) {
      deleteMultipleFieldItems(selected).then((response) => {
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

  return (
    <>
      <div className="contact-list-page">
        <div className="mintmrm-container">
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
                <div className="bulk-action">
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
                      <li className="delete" onClick={deleteMultipleFields}>
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
                          <label for="bulk-select">Field Name</label>
                        </span>
                      </th>
                      <th className="field-type">Slug</th>
                      <th className="field-type">Type</th>
                      <th className="creation-date">Creation Date</th>
                      <th className="action"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {customFields.length > 0 &&
                      customFields.map((field, idx) => {
                        return (
                          <SingleField
                            key={idx}
                            field={field}
                            deleteField={deleteField}
                            currentActive={currentActive}
                            setCurrentActive={setCurrentActive}
                            handleSelectOne={handleSelectOne}
                            selected={selected}
                            editField={editField}
                          />
                        );
                      })}
                  </tbody>
                </table>
                {/* Custom fields empty or search not found ui */}
                {customFields.length == 0 && (
                  <div className="mrm-empty-state-wrapper">
                    <TagIcon />
                    <div>No Fields Found </div>
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
      <div className="mintmrm-container" style={{ display: isDelete }}>
        <DeletePopup
          title={deleteTitle}
          message={deleteMessage}
          onDeleteShow={onDeleteShow}
          onDeleteStatus={onDeleteStatus}
          onMultiDelete={onMultiDelete}
          selected={selected}
        />
      </div>
      <div className="mintmrm-container" style={{ display: showAlert }}>
        <AlertPopup showAlert={showAlert} onShowAlert={onShowAlert} />
      </div>
      <SuccessfulNotification display={showNotification} message={message} />
    </>
  );
};

export default CustomFields;
