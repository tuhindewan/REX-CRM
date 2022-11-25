import React, { useRef, useState, useEffect } from "react";

import CrossIcon from "../../../components/Icons/CrossIcon";
import TooltipQuestionIcon from "../../../components/Icons/TooltipQuestionIcon";
import { getSingleCustomField, updateCustomFields } from "../../../services/CustomField";
import LoadingIndicator from "../../../components/LoadingIndicator/index";

export default function AddCustomFieldModal(props) {
  const {
    id,
    setId,
    addNewCustomField,
    handleCustomFieldUpdate,
    closeCustomFieldModal,
    prepareData,
    setPrepareData,
    refresh,
    setRefresh,
    setCustomFieldModal,
    previousFieldData,
    setPreviousFieldData,
    customFieldData,
    setCustomFieldData
  } = props;

  const [customFieldType, setCustomFieldType] = useState();
  const [customFieldLabel, setCustomFieldLabel] = useState();
  const [customFieldSlug, setCustomFieldSlug] = useState();
  const [newDropdownOption, setNewDropdownOption] = useState([]);
  const [optionArray, setOptionsArray] = useState([]);

  const [addOption, setAddOption] = useState();
  const [isOptionChanged, setIsOptionChanged] = useState(true);

  const [addCall, setAddCall] = useState(false);
  const [loader, setLoader] = useState(false);

  const [isUpdate, setIsUpdate] = useState(false);

  /**
   * Make Slug when render text
   * @param values
   * @returns {string}
   */
  const makeSlug = (values) => {
    const slug = values.toLowerCase().replace(/[\W_]+/g, "-");
    return slug;
  };

  const toggleRefresh = () => {
    setRefresh(!refresh);
  }

  //----get field type from selectbox-----
  const selectFieldType = (event) => {
    setCustomFieldType(event.target.value);
    setPreviousFieldData({
      ...previousFieldData,
      [event.target.name]: event.target.value,
    });
  };

  const [firstCall, setFirstCall] = useState(false);

  const addFinalOption = () => {
    if (addOption) {
      setIsOptionChanged(false);
    }
    setOptionsArray([...optionArray, addOption]);
    setFirstCall(!firstCall);
    setId();
  };

  useEffect(() => {
    setPrepareData({ ...prepareData, ["options"]: optionArray });
    setAddCall(!addCall);
  }, [firstCall]);

  useEffect(() => {
    setOptionsArray([]);
    setPrepareData({});

    addNewCustomField();
  }, [addCall]);

  const handleChange = (event) => {
    setCustomFieldData({
      ...customFieldData,
      [event.target.name]: event.target.value,
    });
    setPreviousFieldData({
      ...previousFieldData,
      [event.target.name]: event.target.value,
    });
    setCustomFieldSlug(makeSlug(event.target.value));
  };

  useEffect(() => {
    setPrepareData({
      title: customFieldData.title,
      slug: customFieldData.slug,
      type: customFieldType,
      label: customFieldData.label,
      placeholder: customFieldData.placeholder,
      options: optionArray,
      required: customFieldData.isRequired,
      checked: customFieldData.checkedStatus,
    });
  }, [customFieldData, customFieldType, optionArray]);

  //----get custom new label field value-----
  const getFieldLabelValue = (event) => {
    setCustomFieldLabel(event.target.value);
    setCustomFieldSlug(makeSlug(event.target.value));
  };

  //----get custom new slug field value-----
  const getFieldSlugValue = (event) => {
    setCustomFieldSlug(makeSlug(event.target.value));
  };

  //----add new option repeater-----
  const addNewOption = () => {
    // if (addOption) {

    setIsOptionChanged(false);

    setOptionsArray([...optionArray, addOption]);

    // }
    // setNewDropdownOption((prevState) => {
    //   return [
    //     ...prevState,
    //     {
    //       label: addOption,
    //     },
    //   ];
    // });
  };

  const handleOptionChange = (option, e, idx) => {
    setAddOption(e.target.value);
    setIsOptionChanged(true);
  };

  const handleOptionRemove = (option, idx) => {
    setOptionsArray([
      ...optionArray.slice(0, idx + 1),
      ...optionArray.slice(idx + 2, optionArray.length),
    ]);
    // const list = [...optionArray];
    // list.splice(idx + 1, 1);
    // setOptionsArray(list);
  };

  useEffect(() => {
    if (id) {
      setLoader(true);
      setCustomFieldModal(true);
      const getFieldData = async () => {
        const resJson = await getSingleCustomField(id);
        setPreviousFieldData(resJson);
        setOptionsArray(resJson.options.options);
        setCustomFieldType(resJson.type);
        setLoader(false);
        setIsUpdate(true);
        toggleRefresh();
        
      };
      getFieldData();
    }
  }, [id]);

  const handleUpdate = () => {
    setId();
    handleCustomFieldUpdate(prepareData, id);
  };

  return (
    <>
      {console.log(prepareData)}
      {console.log(customFieldData)}
      {previousFieldData && console.log(prepareData)}
      <div className="custom-field-modal-inner">
        <div className="modal-content-wrapper">
          <button
            type="button"
            className="close-modal"
            onClick={closeCustomFieldModal}
          >
            <CrossIcon />
          </button>
          {loader ? (
            <LoadingIndicator type="table-full-ten" />
          ) : (
            <div className="modal-body">
              <h4 className="modal-title">Add Custom Field</h4>

              <div className="form-group">
                <label htmlFor="custom-field-name">Field Name</label>
                <input
                  type="text"
                  name="title"
                  id="custom-field-name"
                  placeholder={
                    previousFieldData?.options?.placeholder
                      ? previousFieldData?.options?.placeholder
                      : "Enter field name"
                  }
                  defaultValue={previousFieldData?.title}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="custom-field-type">Field Type</label>
                <select
                  name="type"
                  id="custom-field-type"
                  value={previousFieldData?.type}
                  onChange={selectFieldType}
                >
                  <option value="">Select field type</option>
                  <option value="text">Text field</option>
                  <option value="textArea">Multiline text field</option>
                  <option value="number">Number field</option>
                  {/* <option value="email-field">Email field</option> */}
                  <option value="selectField">Select dropdown</option>
                  <option value="radioField">Radio</option>
                  <option value="checkboxField">Checkbox</option>
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
                      name="label"
                      placeholder={
                        previousFieldData?.options?.label
                          ? previousFieldData?.options?.label
                          : "Enter field label"
                      }
                      value={previousFieldData?.options?.label}
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
                          Must enter an email where will a reply will be
                          received{" "}
                        </p>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="slug"
                      placeholder={
                        previousFieldData?.slug
                          ? previousFieldData?.slug
                          : "Enter custom field slug"
                      }
                      value={previousFieldData?.slug}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Placeholder Text</label>
                    <input
                      type="text"
                      name="fieldPlaceholder"
                      placeholder={
                        previousFieldData?.options?.placeholder
                          ? previousFieldData?.options?.placeholder
                          : "Enter placeholder text"
                      }
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

              {(customFieldType === "selectField" ||
                customFieldType === "radioField" ||
                customFieldType === "checkboxField") && (
                <div className="new-field-wrapper">
                  <div className="form-group">
                    <label>Label</label>
                    <input
                      type="text"
                      name="label"
                      placeholder={
                        previousFieldData?.options?.label
                          ? previousFieldData?.options?.label
                          : "Enter field Label"
                      }
                      value={previousFieldData?.options?.label}
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
                          Must enter an email where will a reply will be
                          received{" "}
                        </p>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="slug"
                      placeholder={
                        previousFieldData?.slug
                          ? previousFieldData?.slug
                          : "Enter custom field slug"
                      }
                      value={previousFieldData?.slug}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group field-options">
                    <div className="option-header">
                      <label>Add New Option</label>
                      {isOptionChanged ? (
                        <button className="mintmrm-btn" onClick={addNewOption}>
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
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6.508 1v11M1 6.5h11"
                            />
                          </svg>
                          New Option
                        </button>
                      ) : (
                        <button
                          className="mintmrm-btn"
                          onClick={addNewOption}
                          disabled={true}
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
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6.508 1v11M1 6.5h11"
                            />
                          </svg>
                          New Option
                        </button>
                      )}
                    </div>

                    <div className="option-body">
                      {optionArray?.map((option, idx) => {
                        return (
                          <div className="single-option" key={idx}>
                            <input
                              type="text"
                              name={idx}
                              defaultValue={optionArray[idx + 1]}
                              onChange={(e) =>
                                handleOptionChange(option, e, idx)
                              }
                            />
                            <button
                              className="delete-option"
                              onClick={() => handleOptionRemove(option, idx)}
                            >
                              <CrossIcon />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* <div className="form-group">
                  <span className="mintmrm-checkbox">
                    <input id="is-required" type="checkbox" />
                    <label for="is-required"> Mark as Required </label>
                  </span>
                </div> */}
                </div>
              )}
            </div>
          )}

          <div className="modal-footer">
            <button
              type="button"
              className="mintmrm-btn outline"
              onClick={closeCustomFieldModal}
            >
              Cancel
            </button>
            {isUpdate ? (
              <button
                type="button"
                className="mintmrm-btn"
                onClick={handleUpdate}
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                className="mintmrm-btn"
                onClick={addFinalOption}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
