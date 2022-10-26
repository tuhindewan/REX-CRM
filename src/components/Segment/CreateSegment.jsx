import React from 'react'
import DoubleAngleLeftIcon from '../Icons/DoubleAngleLeftIcon'

const CreateSegment = () => {
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

                    <div className="segment-condition-wrapper">
                        
                    </div>
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