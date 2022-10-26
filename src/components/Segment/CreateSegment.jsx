import React from 'react'
import { useState } from "react";
import SingleCondition from './SingleCondition'

import DoubleAngleLeftIcon from '../Icons/DoubleAngleLeftIcon'
import DoubleAngleRightIcon from '../Icons/DoubleAngleRightIcon'
import DeleteIcon from '../Icons/Delete'

const CreateSegment = () => {
    const [matchDropdown, setMatchDropdown] = useState(false);

    const showMatchDropdown = () => {
        setMatchDropdown(!matchDropdown);
    };

    let segmentConditions = [
        { 
            'field_type': {
                'their-email-addresses': 'Their email addresses',
                'their-last-names': 'Their last names',
                'their-first-names': 'Their first names',
                'their-mobile-numbers': 'Their mobile phone numbers',
            }, 
            'field_condition': {
                'are-exactly': 'Are exactly',
                'are-not': 'Are Not',
            },
            'field_action': {
                'action-1': 'Action 1',
                'action-2': 'Action 2',
                'action-3': 'Action 3',
                'action-4': 'Action 4',
            },
            'field_action_input': 'input-text',
        },
        { 
            'field_type': {
                'their-email-addresses': 'Their email addresses',
                'their-last-names': 'Their last names',
                'their-first-names': 'Their first names',
                'their-mobile-numbers': 'Their mobile phone numbers',
            }, 
            'field_condition': {
                'are-exactly': 'Are exactly',
                'are-not': 'Are Not',
            },
            'field_action': {
                'action-1': 'Action 1',
                'action-2': 'Action 2',
                'action-3': 'Action 3',
                'action-4': 'Action 4',
            },
            'field_action_input': 'input-text',
        },
        
        
    ];
      
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
                        <b>Match</b> 
                        <div className={ matchDropdown ? "mrm-custom-select-container show-dropdown" : "mrm-custom-select-container" } >
                            <button className="mrm-custom-select-btn" type="button" onClick={() => showMatchDropdown()} >All</button>
                            <ul className="mintmrm-dropdown mrm-custom-select-dropdown">
                                <li value="all">All</li>
                                <li value="any">Any</li>
                            </ul>
                        </div>
                        of the following conditions:
                    </div>

                    <div className="segment-condition-wrapper">
                        {segmentConditions.map((segmentCondition, idx) => {
                            return (
                                <SingleCondition
                                key={idx}
                                segmentCondition={segmentCondition}
                                />
                            );
                        })}

                    </div>

                    <button className="preview-segment">
                        Preview Segment
                        <DoubleAngleRightIcon />
                    </button>
                </div>

                <div className="preview-contact-wrapper">
                    <div className="contact-list-header">
                        <h4>2 Contacts</h4>
                    </div>

                    <div className="preview-contact-list">
                        here will be contact list preview according to segment condition.
                    </div>
                </div>

                <div className="save-btn-area">
                    <button className="mintmrm-btn cancel">Cancel</button>
                    <button className="mintmrm-btn save">Save</button>
                </div>
            </div>
        </>
    )
}

export default CreateSegment