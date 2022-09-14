import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ImportNavbar from "../components/Import/ImportNavbar";
import InputItem from "../components/InputItem";

export default function ImportMailchimp() {
  const navigate = useNavigate();
  // stores the text data
  const [apiKey, setApiKey] = useState("");

  // stores available lists from mailchimp
  const [lists, setLists] = useState([]);

  // function to handle changes in the input text
  function handleChange(event) {
    setApiKey(event.target.value);
  }

  // Funtion to get mailchimp available lists for selection
  async function getLists() {
    if (apiKey == "") {
      window.alert("Please Enter a valid API Key");
      return;
    }
    let options = {
      method: "POST",
      body: JSON.stringify({
        key: apiKey,
      }),
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log(options);

    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/contacts/import/mailchimp/attrs`,
      options
    );
    const resJson = await res.json();
    if (resJson.code == 200) {
      navigate("/contacts/import/mailchimp/map", {
        state: {
          data: resJson.data,
          type: "mailchimp", // indicated the type of import
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
            <h3>Import from MailChimp</h3>
            <span className="csv-title">
              Find your MailChimp API key in our
              <a href=""> documentation.</a>
            </span>
            <div className="import-form-wrapper">
              <InputItem
                label="MailChimp API Key"
                name="mailchimp-api-key"
                handleChange={handleChange}
              />
              <button className="contact-save soronmrm-btn" onClick={getLists}>
                Verify
              </button>
            </div>
            <div className="csv-save-button">
              <button className="contact-save soronmrm-btn" onClick={getLists}>
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
