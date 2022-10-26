import React from "react";
import DoubleAngleLeftIcon from "../Icons/DoubleAngleLeftIcon";
import DeleteIcon from "../Icons/Delete";
import { useState } from "react";

const CreateSegment = () => {
    const [conditionDropdown, setIsActiveDropdown] = useState(false);

    return (
        <>
            <div className="add-segment-page">
                <button className="backto-segment">
                    <DoubleAngleLeftIcon />
                    Back
                </button>

                <h4 className="add-segment-title">Add Segment</h4>

                <div className="segment-wrapper">
                    <div className="segment-header">
                        <div className="form-group">
                            <label htmlFor="">Segment Name</label>
                            <input type="text" name="segment-name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Segment Description</label>
                            <input type="text" name="segment-description" />
                        </div>
                    </div>

                    <div className="condition-matching">
                        of the following conditions:
                    </div>
                    <div className="segment-condition-wrapper">
                        <div className="single-condition">
                            <ul className="single-condition-inner">
                                <li className="single-condition-filed field-type">
                                    <select name="" id="">
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                    </select>
                                </li>

                                <li className="single-condition-filed field-condition">
                                    <select name="" id="">
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                    </select>
                                </li>

                                <li className="single-condition-filed field-action">
                                    <select name="" id="">
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                    </select>
                                </li>

                                <li className="single-condition-filed delete-condition">
                                    <button type="button">
                                        <DeleteIcon />
                                    </button>
                                </li>
                            </ul>

                            <div className="condition-repeater">
                                <span
                                    className="add-condition"
                                    title="Add Condition"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        fill="none"
                                        viewBox="0 0 26 26"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            fill="#573BFF"
                                            clip-path="url(#clip0_616_1195)"
                                        >
                                            <path d="M13 0C5.831 0 0 5.831 0 13s5.831 13 13 13 13-5.832 13-13S20.169 0 13 0zm0 23.986C6.943 23.986 2.014 19.058 2.014 13 2.014 6.942 6.944 2.014 13 2.014c6.057 0 10.986 4.928 10.986 10.986 0 6.058-4.928 10.986-10.986 10.986z" />
                                            <path d="M18.035 11.902h-4.028V7.875a1.007 1.007 0 10-2.014 0v4.027H7.965a1.007 1.007 0 100 2.014h4.028v4.028a1.007 1.007 0 102.014 0v-4.027h4.028a1.007 1.007 0 100-2.014z" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_616_1195">
                                                <path
                                                    fill="#fff"
                                                    d="M0 0h26v26H0z"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <ul className="conditions mintmrm-dropdown">
                                        <li>and</li>
                                        <li>or</li>
                                    </ul>
                                </span>
                            </div>

                            <div className="condition-symbol">
                                <span className="symbol-and">&</span>
                                <span className="symbol-or">or</span>
                            </div>
                        </div>

                        <div className="single-condition">
                            <ul className="single-condition-inner">
                                <li className="single-condition-filed field-type">
                                    <select name="" id="">
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                    </select>
                                </li>

                                <li className="single-condition-filed field-condition">
                                    <select name="" id="">
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                    </select>
                                </li>

                                <li className="single-condition-filed field-action">
                                    <select name="" id="">
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                        <option value="">field type</option>
                                    </select>
                                </li>

                                <li className="single-condition-filed delete-condition">
                                    <button type="button">
                                        <DeleteIcon />
                                    </button>
                                </li>
                            </ul>

                            <div className="condition-repeater">
                                <span
                                    className="add-condition"
                                    title="Add Condition"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        fill="none"
                                        viewBox="0 0 26 26"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            fill="#573BFF"
                                            clip-path="url(#clip0_616_1195)"
                                        >
                                            <path d="M13 0C5.831 0 0 5.831 0 13s5.831 13 13 13 13-5.832 13-13S20.169 0 13 0zm0 23.986C6.943 23.986 2.014 19.058 2.014 13 2.014 6.942 6.944 2.014 13 2.014c6.057 0 10.986 4.928 10.986 10.986 0 6.058-4.928 10.986-10.986 10.986z" />
                                            <path d="M18.035 11.902h-4.028V7.875a1.007 1.007 0 10-2.014 0v4.027H7.965a1.007 1.007 0 100 2.014h4.028v4.028a1.007 1.007 0 102.014 0v-4.027h4.028a1.007 1.007 0 100-2.014z" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_616_1195">
                                                <path
                                                    fill="#fff"
                                                    d="M0 0h26v26H0z"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <ul className="conditions mintmrm-dropdown">
                                        <li>and</li>
                                        <li>or</li>
                                    </ul>
                                </span>
                            </div>

                            <div className="condition-symbol">
                                <span className="symbol-and">&</span>
                                <span className="symbol-or">or</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="preview-contact-wrapper">
                    <div className="contact-list-header">
                        <h4>2 Contacts</h4>
                    </div>

                    <div className="preview-contact-list">
                        here will be contact list preview according to segment
                        condition.
                    </div>
                </div>

                <div className="save-btn-area">
                    <button className="mintmrm-btn cancel">Cancel</button>
                    <button className="mintmrm-btn save">Save</button>
                </div>
            </div>
        </>
    );
};

export default CreateSegment;
