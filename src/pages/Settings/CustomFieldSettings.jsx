import React, { useRef, useState } from "react";

import SettingsNav from "./SettingsNav";
import SingleCustomField from "./CustomField/SingleCustomField";
import AddCustomFieldModal from "./CustomField/AddCustomFieldModal";

import CustomFieldIcon from "../../components/Icons/CustomFieldIcon";
import PlusIcon from "../../components/Icons/Plus";
import NoCustomFieldIcon from "../../components/Icons/NoCustomFieldIcon";


export default function CustomFieldSettings() {
    const [customFieldModal, setCustomFieldModal] = useState(false);
    const [newCustomField, setNewCustomField] = useState([]);

    //----show custom field modal-----
    const addCustomField = () => {
        setCustomFieldModal(!customFieldModal);
    };

    //----close custom field modal-----
    const closeCustomFieldModal = () => {
        setCustomFieldModal(false);
    };

    //----add new custom field-----
    const addNewCustomField = () => {
        setNewCustomField(prevState => {
            return [...prevState, { 
              social_link: ''
            }];
        })

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
                            <SettingsNav/>

                            <div className="settings-tab-content">
                                <div className="single-tab-content custom-field-tab-content">

                                    <div className={customFieldModal ? 'add-custom-field-modal show-modal' : 'add-custom-field-modal'}>
                                        <AddCustomFieldModal 
                                            addNewCustomField= {addNewCustomField}
                                            closeCustomFieldModal= {closeCustomFieldModal}
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
                                                <button type="button" className="mintmrm-btn" title="Add Custom Field" onClick={addCustomField} >
                                                    <PlusIcon/>
                                                    Add Field
                                                </button>
                                            </div>

                                            <div className="custom-field-wrapper">
                                                { newCustomField.length > 0 ? (
                                                    <div className="field-list-wrapper">
                                                        {newCustomField.map((singleCustomField, idx) => {
                                                            return (
                                                                <SingleCustomField
                                                                key={idx}
                                                                index={idx}
                                                                deleteCustomField={deleteCustomField}
                                                                />
                                                            );
                                                        })}
                                                    </div>
                                                ) : (
                                                    <div className="no-field">
                                                        <NoCustomFieldIcon/>
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

