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

                        <div className="form-group submit-btn">
                            <label htmlFor="">submit</label>
                            <button className="mintmrm-btn">Save <span className="mintmrm-loader"></span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateSegment