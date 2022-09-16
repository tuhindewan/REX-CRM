import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ImportNavbar() {
  const location = useLocation();
  return (
    <>
      <div className="import-tabs choose-import-section">
        <span className="import-type-title">Choose Import Contacts</span>
        <Link to="/contacts/import/csv">
          <button
            className={`mintmrm-btn upload-button ${
              location.pathname.includes("csv") ? "" : "outline"
            }`}
          >
            Upload CSV File
          </button>
        </Link>
        <Link to="/contacts/import/raw">
          <button
            className={`mintmrm-btn upload-button ${
              location.pathname.includes("raw") ? "" : "outline"
            }`}
          >
            Paste Your Data
          </button>
        </Link>
        <Link to="/contacts/import/mailchimp">
          <button
            className={`mintmrm-btn upload-button ${
              location.pathname.includes("mailchimp") ? "" : "outline"
            }`}
          >
            Import From MailChimp
          </button>
        </Link>
      </div>
    </>
  );
}
