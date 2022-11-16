import React, { useRef, useState } from "react";

import CrossIcon from "../../../components/Icons/CrossIcon";


export default function AddCustomFieldModal({closeCustomFieldModal}) {

    return (
        <>
            <div className="custom-field-modal-inner">
                <div className="modal-content-wrapper">
                    <button type="button" className="close-modal" onClick={closeCustomFieldModal}>
                        <CrossIcon/>
                    </button>
                    <div className="modal-body">
                        <h4 className="modal-title">Add Custom Field</h4>

                        <div className="form-group">
                            <label htmlFor="custom-field-name">Field Name</label>
                            <input type="text" name="field-name" id="custom-field-name" placeholder="Enter field name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="custom-field-type">Field Type</label>
                            <select name="field-type" id="custom-field-type">
                                <option value="">Select field type</option>
                                <option value="">Select field type</option>
                                <option value="">Select field type</option>
                            </select>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="mintmrm-btn outline" onClick={closeCustomFieldModal}>Cancel</button>
                        <button type="button" className="mintmrm-btn">Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}

