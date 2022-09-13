import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ImportNavbar from "../components/Import/ImportNavbar";

export default function ImportContactRaw() {
  const navigate = useNavigate();
  // stores the text data
  const [text, setText] = useState("");

  // sets the file text from textarea reference on textarea change
  function handleChange(event) {
    setText(event.target.value);
  }

  async function uploadRawData() {
    if (text == "") {
      window.alert("Please paste some data in the textarea.");
      return;
    }
    let options = {
      method: "POST",
      body: JSON.stringify({
        raw: text,
      }),
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
          type: "raw",
        },
      });
    } else {
      window.alert(resJson.message);
    }
    console.log(resJson);
  }
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
          <ImportNavbar />

          <div className="import-tabs-content upload-section">
            <h3>Paste Your Data</h3>
            <span className="csv-title">
              This file needs to be formatted in a CSV style
              (comma-separated-values.)
              <a href=""> Look at some examples on our support site.</a>
            </span>
            <textarea
              className="raw-textarea"
              onChange={handleChange}
              value={text}
              placeholder={`
            Email, First Name, Last Name
            john@doe.com, John, Doe
            mary@smith.com, Mary, Smith
            johnny@walker.com, Johny, Walker
                  `}
            ></textarea>
            <div className="csv-save-button">
              <button
                className="contact-save soronmrm-btn"
                onClick={uploadRawData}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
