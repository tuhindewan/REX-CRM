import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImportNavbar from "../components/Import/ImportNavbar";
import WarningNotification from "../components/WarningNotification";

export default function ImportContactRaw() {
  const navigate = useNavigate();
  // stores the text data
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState("none");
  const [message, setMessage] = useState("");

  // ref for referring textarea
  const textAreaRef = useRef(null);

  // sets the file text from textarea reference on textarea change
  function handleChange(event) {
    setText(event.target.value);
  }

  async function uploadRawData() {
    let options = {
      method: "POST",
      body: JSON.stringify({
        raw: textAreaRef.current.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    };

    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/contacts/import/raw/attrs`,
      options
    );
    const resJson = await res.json();
    if (resJson.code == 200) {
      navigate("/contacts/import/raw/map", {
        state: {
          data: resJson.data,
          type: "raw", // indicated the type of import
        },
      });
    } else {
      setShowWarning("block");
      setMessage(resJson.message);
      const timer = setTimeout(() => {
        setShowWarning("none");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }

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
              <h3>Paste Your Data</h3>
              <span className="csv-title">
                This file needs to be formatted in a CSV style
                (comma-separated-values.)
                <a href="#"> Look at some examples on our support site.</a>
              </span>
              <textarea
                className="raw-textarea"
                ref={textAreaRef}
                onChange={handleChange}
                placeholder={`(Example Data)
Email, First Name, Last Name
john@doe.com, John, Doe
mary@smith.com, Mary, Smith
johnny@walker.com, Johny, Walker
                  `}
              ></textarea>
              <span className="csv-title">
                Type or paste your existing contacts in this box
              </span>
              <div className="csv-save-button">
                <button
                  className="contact-cancel mintmrm-btn outline"
                  onClick={routeChange}
                >
                  Cancel
                </button>
                <button
                  className="contact-save mintmrm-btn"
                  onClick={uploadRawData}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WarningNotification display={showWarning} message={message} />
    </>
  );
}
