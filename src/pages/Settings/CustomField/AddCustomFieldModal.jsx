import React, { useRef, useState } from "react";

import CrossIcon from "../../../components/Icons/CrossIcon";
import TooltipQuestionIcon from "../../../components/Icons/TooltipQuestionIcon";

export default function AddCustomFieldModal({addNewCustomField, closeCustomFieldModal}) {
    const [customFieldType, setCustomFieldType] = useState();

    const selectFieldType = (event) => {
        setCustomFieldType(event.target.value);
    }

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
                            <select name="field-type" id="custom-field-type" onChange={selectFieldType}>
                                <option value="">Select field type</option>
                                <option value="text-field">Text field</option>
                                <option value="textarea-field">Multiline text field</option>
                                <option value="number-field">Number field</option>
                                <option value="emial-field">Email field</option>
                                <option value="select-field">Select dropdown</option>
                                <option value="radio-field">Radio</option>
                                <option value="checkbox-field">Checkbox</option>
                            </select>
                        </div>

                        {(customFieldType === 'text-field' || customFieldType === 'textarea-field' || customFieldType === 'number-field' || customFieldType === 'emial-field') &&
                            <div className="new-field-wrapper">
                                <div className="form-group">
                                    <label>Label</label>
                                    <input type="text" name="new-field-label" placeholder="Enter field Label" />
                                </div>

                                <div className="form-group">
                                    <label>
                                        Slug (Optional)
                                        <span class="mintmrm-tooltip">
                                            <TooltipQuestionIcon />
                                            <p> Must enter an email where will a reply will be received </p>
                                        </span>
                                    </label>
                                    <input type="text" name="new-field-slug" placeholder="Enter custom field slug" />
                                </div>

                                <div className="form-group">
                                    <label>Placeholder Text</label>
                                    <input type="text" name="new-field-placeholder" placeholder="Enter placeholder text" />
                                </div>
                            </div>
                        }
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="mintmrm-btn outline" onClick={closeCustomFieldModal}>Cancel</button>
                        <button type="button" className="mintmrm-btn" onClick={addNewCustomField}>Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}

