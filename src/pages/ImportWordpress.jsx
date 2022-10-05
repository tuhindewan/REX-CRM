import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ImportNavbar from "../components/Import/ImportNavbar";
import { getWordPressRoles } from "../services/Import";

export default function ImportWordpress() {

  const [roles, setRoles] = useState([]);

  //Fetch roles from the native WordPress
  useEffect(() => {
    getWordPressRoles().then((response) => {
      setRoles(response)
    });
  }, []);

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
                <input type="checkbox" name="all-user-roles" id="all-user-roles" />
                <label for="all-user-roles">All user roles</label>
              </div>
              <div className="mintmrm-checkbox">
                <input type="checkbox" name="administrator" id="administrator" />
                <label for="administrator">Administrator</label>
              </div>
              <div className="mintmrm-checkbox">
                <input type="checkbox" name="editor" id="editor" />
                <label for="editor">Editor</label>
              </div>
              <div className="mintmrm-checkbox">
                <input type="checkbox" name="author" id="author" />
                <label for="author">Author</label>
              </div>
              <div className="mintmrm-checkbox">
                <input type="checkbox" name="contributor" id="contributor" />
                <label for="contributor">Contributor</label>
              </div>
              <div className="mintmrm-checkbox">
                <input type="checkbox" name="subscriber" id="subscriber" />
                <label for="subscriber">Subscriber</label>
              </div>
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
