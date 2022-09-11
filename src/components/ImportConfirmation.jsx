import { Link, useLocation, Navigate } from "react-router-dom";
import Confirmation from "./Icons/Confirmation";

export default function ImportConfirmation() {
  const location = useLocation();
  const state = location.state;
  if (!state) {
    return <Navigate to="/contacts/import" />;
  }
  const data = state.data;
  return (
    <div className="soronmrm-import-page">
      <div className="soronmrm-header">
        <div className="contact-details-breadcrumb import-contact-breadcrum">
          <div className="import-cotainer">
            <div className="soronmrm-container">
              <ul className="soronmrm-breadcrumb">
                <li>
                  <a href="">Contact</a>
                </li>
                <li className="active">Import</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="soronmrm-container">
        <div className="import-wrapper">
          <div className="import-tabs choose-import-section">
            <span className="import-type-title">Choose Import Contacts</span>
            <button className="soronmrm-btn upload-button">
              Upload CSV File
            </button>
            {/* <button className="contact-cancel soronmrm-btn outline">Paste Your Data</button> */}
          </div>
          <div className="import-tabs-content upload-section">
            <div className="confirmation-detail">
              <Confirmation />
              <h3>Congratulations</h3>
              <span className="csv-title">
                Your data have been successfully imported.
              </span>
            </div>
            <div className="wordpress-user">
              <div className="wordpress-user-title">
                <span className="total-subscribe">
                  <strong>{data.total}</strong>
                  <span> records processed.</span>.
                </span>
                <span className="total-subscribe">
                  <strong>{data.skipped}</strong>
                  <span> records are skipped.</span>.
                </span>
                <span className="existing-subscribe">
                  <strong>{data.existing_contacts}</strong>
                  <span>existing subscribers were updated.</span>
                </span>
              </div>
              <div className="csv-save-button">
                <Link to="/contacts/">
                  <button className="contact-save soronmrm-btn ">
                    View Contacts
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
