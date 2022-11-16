import React, { useRef, useState } from "react";

import SettingsNav from "./SettingsNav";
import SingleCustomField from "./CustomField/SingleCustomField";

import CustomFieldIcon from "../../components/Icons/CustomFieldIcon";
import PlusIcon from "../../components/Icons/Plus";
import NoCustomFieldIcon from "../../components/Icons/NoCustomFieldIcon";


export default function CustomFieldSettings() {

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
                                                <button type="button" className="mintmrm-btn" title="Add Custom Field" >
                                                    <PlusIcon/>
                                                    Add Field
                                                </button>
                                            </div>

                                            <div className="custom-field-wrapper">
                                                <div className="field-list-wrapper">
                                                    <SingleCustomField/>
                                                </div>

                                                {/* <div className="no-field">
                                                    <NoCustomFieldIcon/>
                                                    <p>No custom field found</p>
                                                </div> */}
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

