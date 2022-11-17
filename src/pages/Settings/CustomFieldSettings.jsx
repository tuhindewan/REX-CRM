import React, { useRef, useState, useEffect } from "react";

import SettingsNav from "./SettingsNav";
import SingleCustomField from "./CustomField/SingleCustomField";
import AddCustomFieldModal from "./CustomField/AddCustomFieldModal";

import CustomFieldIcon from "../../components/Icons/CustomFieldIcon";
import NoCustomFieldIcon from "../../components/Icons/NoCustomFieldIcon";

import {
  submitCustomFields,
  getCustomFields,
  deleteCustomField,
} from "../../services/CustomField";

export default function CustomFieldSettings() {
  const [customFieldModal, setCustomFieldModal] = useState(false);
  const [newCustomField, setNewCustomField] = useState([]);
  const [prepareData, setPrepareData] = useState({});
  const [refresh, setRefresh] = useState(false);

  //----show custom field modal-----
  const addCustomField = () => {
    setCustomFieldModal(!customFieldModal);
  };

  //----close custom field modal-----
  const closeCustomFieldModal = () => {
    setCustomFieldModal(false);
  };

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const getAllCustomField = async () => {
      const res = await getCustomFields();
      setNewCustomField(res.data);
    };
    getAllCustomField();
  }, [refresh]);

  //----add new custom field-----
  const addNewCustomField = async () => {
    submitCustomFields(prepareData);

    toggleRefresh();

    setCustomFieldModal(false);
  };

  //----delete custom field-----
  const deleteCustomField = (index) => {
    // setNewCustomField([
    //     ...newCustomField.slice(0, index),
    //     ...newCustomField.slice(index + 1, newCustomField.length)
    // ]);
  };

  return (
    <>
      <div className="mintmrm-settings-page">
        <div className="mintmrm-container">
          <div className="mintmrm-settings">
            <h2 class="conatct-heading">Settings</h2>

            <div className="mintmrm-settings-wrapper">
              <SettingsNav />

              <div className="settings-tab-content">
                <div className="single-tab-content custom-field-tab-content">
                  <div
                    className={
                      customFieldModal
                        ? "add-custom-field-modal show-modal"
                        : "add-custom-field-modal"
                    }
                  >
                    <AddCustomFieldModal
                      addNewCustomField={addNewCustomField}
                      closeCustomFieldModal={closeCustomFieldModal}
                      prepareData={prepareData}
                      setPrepareData={setPrepareData}
                    />
                  </div>

                  <div className="tab-body">
                    <header className="tab-header">
                      <h4 className="title">
                        <CustomFieldIcon />
                        Contact Custom Fields
                      </h4>
                    </header>

                    <div className="form-wrapper">
                      <div className="form-header">
                        <h4>Add Custom Field</h4>
                        <button
                          type="button"
                          className="mintmrm-btn"
                          title="Add Custom Field"
                          onClick={addCustomField}
                        >
                          <svg
                            width="13"
                            height="13"
                            fill="none"
                            viewBox="0 0 13 13"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="roun d"
                              stroke-width="2"
                              d="M6.508 1v11M1 6.5h11"
                            />
                          </svg>
                          Add Field
                        </button>
                      </div>

                      <div className="custom-field-wrapper">
                        {newCustomField.length > 0 ? (
                          <div className="field-list-wrapper">
                            {newCustomField.map((singleCustomField, idx) => {
                              return (
                                <SingleCustomField
                                  key={idx}
                                  index={idx}
                                  deleteCustomField={deleteCustomField}
                                  customFieldData={singleCustomField}
                                />
                              );
                            })}
                          </div>
                        ) : (
                          <div className="no-field">
                            <NoCustomFieldIcon />
                            <p>No custom field found</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="tab-footer">
                    <button className="mintmrm-btn" type="button">
                      Save Settings
                      <span className="mintmrm-loader"></span>
                    </button>
                  </div>
                </div>
              </div>
              {/* end settings-tab-content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
