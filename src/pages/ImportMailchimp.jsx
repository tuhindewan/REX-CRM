import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ImportNavbar from "../components/Import/ImportNavbar";
import InputItem from "../components/InputItem";
import Selectbox from "../components/Selectbox";

export default function ImportMailchimp() {
  const navigate = useNavigate();
  // stores the text data
  const [apiKey, setApiKey] = useState("11b321614d43814ca7d8406041bb3839-us8");

  // stores available lists as selectbox options from mailchimp
  const [listsOptions, setListsOptions] = useState([]);

  // stores currently selected lists
  const [selectedLists, setSelectedLists] = useState([]);

  // function to handle changes in the input text
  function handleChange(event) {
    setApiKey(event.target.value);
  }

  // handle selectbox new items currently selected
  function handleSelectBox(e, name) {
    const updatedOptions = [...e.target.options]
      .filter((option) => option.selected)
      .map((x) => x.value);
    setSelectedLists(updatedOptions);
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

    const res = await fetch(
      `${window.MRM_Vars.api_base_url}mrm/v1/contacts/import/mailchimp/attrs`,
      options
    );
    const resJson = await res.json();
    if (resJson.code == 200) {
      const options = [];
      // iterate over all the lists and set list options
      resJson.data?.lists.map((list) => {
        options.push({
          title: list.name,
          id: list.id,
        });
      });

      setListsOptions(options);
      
    } else {
      window.alert(resJson.message);
    }
    console.log(resJson);
  }
  
  // if a list is selected, send the user to map page
  function goToMapPage() {
    navigate("/contacts/import/mailchimp/map", {
        state: {
        data: resJson.data,
        type: "mailchimp", // indicated the type of import
        },
    });
  }


  return (
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
                value={apiKey}
              />
              <button className="contact-save mintmrm-btn" onClick={getLists}>
                Verify
              </button>
            </div>
            {listsOptions.length > 0 && (
              <div className="import-form-wrapper">
                <Selectbox
                  label="Lists"
                  name="Lists"
                  options={listsOptions}
                  tags={false}
                  placeholder="Select Lists for importing"
                  multiple={true}
                  onSelect={handleSelectBox}
                  onRemove={handleSelectBox}
                />
              </div>
            )}
            <div className="csv-save-button">
              {selectedLists.length > 0 && (
                <button
                  className="contact-save mintmrm-btn"
                  onClick={getLists}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
