import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ImportNavbar from "../components/Import/ImportNavbar";
import { getWordPressRoles } from "../services/Import";
import ColumnItems from "../components/ContactDetails/ColumnItems";

export default function ImportWordpress() {

  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  // The select all checkbox
  const [allSelected, setAllSelected] = useState(false);
  // single selected array which holds selected roles ids
  const [selected, setSelected] = useState([]);

  //Fetch roles from the native WordPress
  useEffect(() => {
    getWordPressRoles().then((response) => {
      setRoles(response)
    });
  }, []);

  // Handle all checkbox selection
  const handleSelectAll = (event) => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(roles.map((role) => role.role));
    }
    setAllSelected(!allSelected);
  }

  // Handle single role selection and set to an array state
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

  // Redirect to contacts list view 
  const routeChange = () => {
    let path = `/contacts`;
    navigate(path);
  };
  return (
    <>
    <div className="mintmrm-import-page">
      <div className="mintmrm-header">
        <div className="contact-details-breadcrumb import-contact-breadcrum">
          <div className="import-cotainer">
            <div className="mintmrm-container">
              <ul className="mintmrm-breadcrumb">
                <li>
                  <a href="">Contact</a>
                </li>
                <li className="active">Import</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mintmrm-container">
        <div className="import-wrapper">
          <ImportNavbar />

          <div className="import-tabs-content upload-section">
            <h3>Import from WordPress</h3>
            <span className="csv-title">
              Select the user roles that you want to import as contact
            </span>
            <div className="wordpress-import-section">
              <p>Select User Roles</p>
              <div className="mintmrm-checkbox">
                <input type="checkbox" name="all-user-roles" id="all-user-roles" onChange={handleSelectAll} checked={allSelected} />
                <label for="all-user-roles">All user roles</label>
              </div>
              {roles.map( (role) => {
                return(
                  <div className="mintmrm-checkbox" key={role.role}>
                    <ColumnItems name={role.role} id={role.role} title={role.name} selected={selected} handleSelectOne={handleSelectOne} />
                  </div>
                )
              })}
            </div>

            <div className="csv-save-button">
              {/* {selectedLists.length > 0 && (
                <button className="contact-save mintmrm-btn" onClick={getLists}>
                  Save
                </button>
              )} */}
              <button
                className="contact-cancel mintmrm-btn outline"
                onClick={routeChange}
              >
                Cancel
              </button>
              <button className="contact-save mintmrm-btn">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}
