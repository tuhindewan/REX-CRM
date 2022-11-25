import React, { useEffect, useState } from "react";

import AddCustomFieldModal from "./CustomField/AddCustomFieldModal";
import SingleCustomField from "./CustomField/SingleCustomField";
import SettingsNav from "./SettingsNav";
import CustomFieldIcon from "../../components/Icons/CustomFieldIcon";
import NoCustomFieldIcon from "../../components/Icons/NoCustomFieldIcon";

import {
  deleteSingleCustomField,
  getCustomFields,
  submitCustomFields,
} from "../../services/CustomField";
import { AdminNavMenuClassChange } from "../../utils/admin-settings";
import LoadingIndicator from "../../components/LoadingIndicator";

export default function CustomFieldSettings() {
  // Admin active menu selection
  AdminNavMenuClassChange("mrm-admin", "settings");
  const [customFieldModal, setCustomFieldModal] = useState(false);
  const [newCustomField, setNewCustomField] = useState([]);
  const [prepareData, setPrepareData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [selectedIdForDelete, setSelectedIdForDelete] = useState();
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [id, setId] = useState();
  const [previousFieldData, setPreviousFieldData] = useState([]);

  // loading or not
  const [loading, setLoading] = useState(false);

  //----show custom field modal-----
  const addCustomField = () => {
    setCustomFieldModal(!customFieldModal);
    setId();
  };

  //----close custom field modal-----
  const closeCustomFieldModal = () => {
    setCustomFieldModal(false);
    setId();
  };

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    setLoading(true);
    const getAllCustomField = async () => {
      const res = await getCustomFields();
      setNewCustomField(res.data);
      setLoading(false);
    };
    getAllCustomField();
  }, [refresh]);

  //----add new custom field-----
  const addNewCustomField = async () => {
    submitCustomFields(prepareData).then((response) => {
      setPrepareData({});
      toggleRefresh();
      setCustomFieldModal(false);
    });
  };

  //----delete custom field-----
  useEffect(() => {
    const handleDelete = async () => {
      const res = await deleteSingleCustomField(selectedIdForDelete);
      toggleRefresh();
      setConfirmationModal(false);
      setConfirmDelete(false);
    };
    if (confirmDelete) handleDelete();
  }, [confirmDelete]);

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
                      refresh={refresh}
                      setRefresh={setRefresh}
                      id={id}
                      setId={setId}
                      setCustomFieldModal={setCustomFieldModal}
                      previousFieldData={previousFieldData}
                      setPreviousFieldData={setPreviousFieldData}
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
                      {loading ? (
                        <LoadingIndicator type="table" />
                      ) : (
                        <div className="custom-field-wrapper">
                          {newCustomField.length > 0 ? (
                            <div className="field-list-wrapper">
                              {newCustomField.map((singleCustomField, idx) => {
                                return (
                                  <SingleCustomField
                                    key={idx}
                                    index={idx}
                                    customFieldData={singleCustomField}
                                    setSelectedIdForDelete={
                                      setSelectedIdForDelete
                                    }
                                    confirmationModal={confirmationModal}
                                    setConfirmationModal={setConfirmationModal}
                                    setConfirmDelete={setConfirmDelete}
                                    setCustomFieldModal={setCustomFieldModal}
                                    setId={setId}
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
                      )}
                    </div>
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
