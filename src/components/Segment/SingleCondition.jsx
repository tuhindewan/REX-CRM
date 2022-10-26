import React from 'react'
import { useState } from "react";
import DeleteIcon from '../Icons/Delete'

const SingleCondition = (props) => {
    const [conditionDropdown, setConditionDropdown] = useState(false);
    const [fieldTypeDropdown, setFieldTypeDropdown] = useState(false);
    const [fieldConditionDropdown, setFieldConditionDropdown] = useState(false);
    const [fieldActionDropdown, setfieldActionDropdown] = useState(false);

    const addCondition = () => {
        setConditionDropdown(!conditionDropdown);
    };

    const showDropdownOption = (param) => {
        
        if( 'field-type' == param ){
            setFieldTypeDropdown(!fieldTypeDropdown);
            setFieldConditionDropdown(false);
            setfieldActionDropdown(false);

        }else if( 'field-condition' == param ){
            setFieldTypeDropdown(false);
            setFieldConditionDropdown(!fieldConditionDropdown);
            setfieldActionDropdown(false);

        }else {
            setFieldTypeDropdown(false);
            setFieldConditionDropdown(false);
            setfieldActionDropdown(!fieldActionDropdown);
        }

    };

    return (
        <>
            <div className="single-condition">
                <ul className="single-condition-inner">
                    <li className="single-condition-filed field-type">
                        <div className={ fieldTypeDropdown ? "mrm-custom-select-container show-dropdown" : "mrm-custom-select-container" } >
                            <button className="mrm-custom-select-btn" type="button" onClick={() => showDropdownOption('field-type')} >Select field type</button>
                            <ul className="mintmrm-dropdown mrm-custom-select-dropdown">
                                <li value="sg">twst</li>
                                <li value="sg">twst</li>
                                <li value="sg">twst</li>
                                <li value="sg">twst</li>
                            </ul>
                        </div>
                    </li>

                    <li className="single-condition-filed field-condition">
                        <div className={ fieldConditionDropdown ? "mrm-custom-select-container show-dropdown" : "mrm-custom-select-container" } >
                            <button className="mrm-custom-select-btn" type="button" onClick={() => showDropdownOption('field-condition')} >Select field type</button>
                            <ul className="mintmrm-dropdown mrm-custom-select-dropdown">
                                <li value="sg">twst</li>
                                <li value="sg">twst</li>
                                <li value="sg">twst</li>
                                <li value="sg">twst</li>
                            </ul>
                        </div>
                    </li>

                    <li className="single-condition-filed field-action">
                        <div className={ fieldActionDropdown ? "mrm-custom-select-container show-dropdown" : "mrm-custom-select-container" } >
                            <button className="mrm-custom-select-btn" type="button" onClick={() => showDropdownOption('field-action')} >Select field type</button>
                            <ul className="mintmrm-dropdown mrm-custom-select-dropdown">
                                <li value="sg">twst</li>
                                <li value="sg">twst</li>
                                <li value="sg">twst</li>
                                <li value="sg">twst</li>
                            </ul>
                        </div>
                    </li>

                    <li className="single-condition-filed delete-condition">
                        <button type="button">
                            <DeleteIcon />
                        </button>
                    </li>
                </ul>

                <div className="condition-repeater">
                    <span className={ conditionDropdown ? "add-condition show-dropdown" : "add-condition" } title="Add Condition" onClick={addCondition}>
                        <svg width="22" height="22" fill="none" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><g fill="#573BFF" clip-path="url(#clip0_616_1195)"><path d="M13 0C5.831 0 0 5.831 0 13s5.831 13 13 13 13-5.832 13-13S20.169 0 13 0zm0 23.986C6.943 23.986 2.014 19.058 2.014 13 2.014 6.942 6.944 2.014 13 2.014c6.057 0 10.986 4.928 10.986 10.986 0 6.058-4.928 10.986-10.986 10.986z"/><path d="M18.035 11.902h-4.028V7.875a1.007 1.007 0 10-2.014 0v4.027H7.965a1.007 1.007 0 100 2.014h4.028v4.028a1.007 1.007 0 102.014 0v-4.027h4.028a1.007 1.007 0 100-2.014z"/></g><defs><clipPath id="clip0_616_1195"><path fill="#fff" d="M0 0h26v26H0z"/></clipPath></defs></svg>

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
        </>
    )
}

export default SingleCondition