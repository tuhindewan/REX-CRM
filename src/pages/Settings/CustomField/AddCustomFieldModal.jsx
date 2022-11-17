import React, { useRef, useState } from "react";

import CrossIcon from "../../../components/Icons/CrossIcon";
import TooltipQuestionIcon from "../../../components/Icons/TooltipQuestionIcon";

export default function AddCustomFieldModal({addNewCustomField, closeCustomFieldModal}) {
    const [customFieldType, setCustomFieldType] = useState();
    const [customFieldLabel, setCustomFieldLabel] = useState();
    const [customFieldSlug, setCustomFieldSlug] = useState();
    const [newDropdownOption, setNewDropdownOption] = useState([{}]);

    /**
     * Make Slug when render text
     * @param values
     * @returns {string}
     */
    const makeSlug = (values) => {
        const slug = values.toLowerCase().replace(/[\W_]+/g, "-");
        return slug;
    };

    //----get field type from selectbox-----
    const selectFieldType = (event) => {
        setCustomFieldType(event.target.value);
    }

    //----get custom new label field value-----
    const getFieldLabelValue = (event) => {
        setCustomFieldLabel(event.target.value);
        setCustomFieldSlug(makeSlug(event.target.value));
    }

    //----get custom new slug field value-----
    const getFieldSlugValue = (event) => {
        setCustomFieldSlug(makeSlug(event.target.value));
    }

    //----add new option repeater-----
    const addNewOption = () => {
        setNewDropdownOption(prevState => {
            return [...prevState, { 
              label: ''
            }];
        })
    };
    

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
                                <option value="email-field">Email field</option>
                                <option value="select-field">Select dropdown</option>
                                <option value="radio-field">Radio</option>
                                <option value="checkbox-field">Checkbox</option>
                            </select>
                        </div>

                        {(customFieldType === 'text-field' || customFieldType === 'textarea-field' || customFieldType === 'number-field' || customFieldType === 'email-field') &&
                            <div className="new-field-wrapper">
                                <div className="form-group">
                                    <label>Label</label>
                                    <input type="text" name="new-field-label" placeholder="Enter field Label" onChange={getFieldLabelValue} />
                                </div>

                                <div className="form-group">
                                    <label>
                                        Slug (Optional)
                                        <span class="mintmrm-tooltip">
                                            <TooltipQuestionIcon />
                                            <p> Must enter an email where will a reply will be received </p>
                                        </span>
                                    </label>
                                    <input type="text" name="new-field-slug" placeholder="Enter custom field slug" value={customFieldSlug} onChange={getFieldSlugValue} />
                                </div>

                                <div className="form-group">
                                    <label>Placeholder Text</label>
                                    <input type="text" name="new-field-placeholder" placeholder="Enter placeholder text" />
                                </div>

                                <div className="form-group">
                                    <span className="mintmrm-checkbox">
                                        <input id="is-required" type="checkbox" />
                                        <label for="is-required"> Mark as Required </label>
                                    </span>
                                </div>
                            </div>
                        }

                        {(customFieldType === 'select-field' || customFieldType === 'radio-field' || customFieldType === 'checkbox-field') &&
                            <div className="new-field-wrapper">
                                <div className="form-group">
                                    <label>Label</label>
                                    <input type="text" name="new-field-label" placeholder="Enter field Label" onChange={getFieldLabelValue} />
                                </div>

                                <div className="form-group">
                                    <label>
                                        Slug (Optional)
                                        <span class="mintmrm-tooltip">
                                            <TooltipQuestionIcon />
                                            <p> Must enter an email where will a reply will be received </p>
                                        </span>
                                    </label>
                                    <input type="text" name="new-field-slug" placeholder="Enter custom field slug" value={customFieldSlug} onChange={getFieldSlugValue} />
                                </div>

                                <div className="form-group field-options">
                                    <div className="option-header">
                                        <label>Add New Option</label>
                                        <button className="mintmrm-btn" onClick={addNewOption}>
                                            <svg width="13" height="13" fill="none" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.508 1v11M1 6.5h11"/></svg>
                                            New Option
                                        </button>
                                    </div>

                                    <div className="option-body">
                                        {newDropdownOption.map((singleDropdownOption, idx) => {
                                            return (
                                                <div className="single-option" key={idx} >
                                                    <input type="text" name="" />
                                                    <button className="delete-option">
                                                        <CrossIcon/>
                                                    </button>
                                                </div>
                                            );
                                        })}
                                        
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="mintmrm-checkbox">
                                        <input id="is-required" type="checkbox" />
                                        <label for="is-required"> Mark as Required </label>
                                    </span>
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

