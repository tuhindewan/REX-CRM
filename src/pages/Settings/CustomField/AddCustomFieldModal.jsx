import React, { useRef, useState, useEffect } from "react";

import CrossIcon from "../../../components/Icons/CrossIcon";
import TooltipQuestionIcon from "../../../components/Icons/TooltipQuestionIcon";

export default function AddCustomFieldModal(props) {
  const {
    addNewCustomField,
    closeCustomFieldModal,
    prepareData,
    setPrepareData,
  } = props;
  const [customFieldType, setCustomFieldType] = useState();
  const [customFieldData, setCustomFieldData] = useState([]);

  const selectFieldType = (event) => {
    setCustomFieldType(event.target.value);
  };

  const handleChange = (event) => {
    setCustomFieldData({
      ...customFieldData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(prepareData);
  };

  useEffect(() => {
    setPrepareData({
      title: customFieldData.fieldName,
      slug: customFieldData.newFieldSlug,
      type: customFieldType,
      meta: {
        label: customFieldData.fieldLabel,
        placeholder: customFieldData.fieldPlaceholder,
        required: customFieldData.isRequired,
        options: customFieldData.fieldOptions,
        checked: customFieldData.checkedStatus,
      },
    });
  }, [customFieldData, customFieldType]);

  return (
    <>
      <div className="custom-field-modal-inner">
        <div className="modal-content-wrapper">
          <button
            type="button"
            className="close-modal"
            onClick={closeCustomFieldModal}
          >
            <CrossIcon />
          </button>
          <div className="modal-body">
            <h4 className="modal-title">Add Custom Field</h4>

            <div className="form-group">
              <label htmlFor="custom-field-name">Field Name</label>
              <input
                type="text"
                name="fieldName"
                id="custom-field-name"
                placeholder="Enter field name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="custom-field-type">Field Type</label>
              <select
                name="field-type"
                id="custom-field-type"
                onChange={selectFieldType}
              >
                <option value="">Select field type</option>
                <option value="text">Text field</option>
                <option value="textArea">Multiline text field</option>
                <option value="number">Number field</option>
                <option value="email-field">Email field</option>
                <option value="select-field">Select dropdown</option>
                <option value="radio-field">Radio</option>
                <option value="checkbox-field">Checkbox</option>
              </select>
            </div>

            {(customFieldType === "text" ||
              customFieldType === "textArea" ||
              customFieldType === "number" ||
              customFieldType === "email-field") && (
              <div className="new-field-wrapper">
                <div className="form-group">
                  <label>Label</label>
                  <input
                    type="text"
                    name="fieldLabel"
                    placeholder="Enter field Label"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Slug (Optional)
                    <span class="mintmrm-tooltip">
                      <TooltipQuestionIcon />
                      <p>
                        {" "}
                        Must enter an email where will a reply will be received{" "}
                      </p>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="newFieldSlug"
                    placeholder="Enter custom field slug"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Placeholder Text</label>
                  <input
                    type="text"
                    name="fieldPlaceholder"
                    placeholder="Enter placeholder text"
                    onChange={handleChange}
                  />
                </div>

                {/* <div className="form-group">
                  <span className="mintmrm-checkbox">
                    <input
                      id="is-required"
                      type="checkbox"
                      name="isRequired"
                      onChange={handleChange}
                    />
                    <label for="is-required"> Mark as Required </label>
                  </span>
                </div> */}
              </div>
            )}

            {(customFieldType === "select-field" ||
              customFieldType === "radio-field" ||
              customFieldType === "checkbox-field") && (
              <div className="new-field-wrapper">
                <div className="form-group">
                  <label>Label</label>
                  <input
                    type="text"
                    name="new-field-label"
                    placeholder="Enter field Label"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Slug (Optional)
                    <span class="mintmrm-tooltip">
                      <TooltipQuestionIcon />
                      <p> An unique identifier for a custom field </p>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="new-field-slug"
                    placeholder="Enter custom field slug"
                  />
                </div>

                <div className="form-group">
                  <label>Options</label>
                </div>

                <div className="form-group">
                  <span className="mintmrm-checkbox">
                    <input id="is-required" type="checkbox" />
                    <label for="is-required"> Mark as Required </label>
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="mintmrm-btn outline"
              onClick={closeCustomFieldModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="mintmrm-btn"
              onClick={addNewCustomField}
              onSubmit={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
