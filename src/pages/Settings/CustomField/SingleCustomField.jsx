import React, { useRef, useState } from "react";

import EditIcon from "../../../components/Icons/EditIcon";
import DeleteIcon from "../../../components/Icons/Delete";
import ThreeDotIcon from "../../../components/Icons/ThreeDotIcon";
import CrossIcon from "../../../components/Icons/CrossIcon";


export default function SingleCustomField({index, deleteCustomField}) {

    const [showModal, setShowModal] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(false);

    const showMoreOption = () => {
        setShowModal(!showModal);
    }
    
    //----delete confirmation modal-----
    const deleteConfirmationAlert = (index) => {
        console.log(index);
        setConfirmationModal(true);
    };
    
    //----delete confirmation modal-----
    const cancelConfirmationModal = () => {
        setConfirmationModal(false);
    };

    return (
        <>
            {confirmationModal &&
                <div className="mintmrm-delete-alert-wrapper" >
                    <div className="mintmrm-delete-confirmation">
                        <div className="delete-confirmation-header">
                            <h3>Delete Custom Field {index}</h3>
                            <div className="cross-icon" onClick={cancelConfirmationModal}>
                                <CrossIcon />
                            </div>
                        </div>

                        <div className="delete-confirmation-body">
                            <DeleteIcon />
                            <p>Are you sure, You wnat to delete it ?</p>
                        </div>

                        <ul className="mintmrm-delete-confirm-btn">
                            <li>
                                <button className="btn-default cancel" onClick={cancelConfirmationModal}> Cancel </button>
                            </li>
                            <li>
                                <button type="button" className="btn-default delete" onClick={() => deleteCustomField(index)}> Delete </button>
                            </li>
                        </ul>
                    </div>
                </div>
            }

            <div className="single-custom-field">
                <h5 className="field-name">Country</h5>

                <button className="field-action" onClick={() => showMoreOption(index)}>
                    <ThreeDotIcon />

                    <ul className={showModal ? 'mintmrm-dropdown show' : 'mintmrm-dropdown'}>
                        <li>
                            <EditIcon/>
                            Edit
                        </li>
                        <li onClick={() => deleteConfirmationAlert(index)}>
                            <DeleteIcon/>
                            Delete
                        </li>
                    </ul>
                </button>
            </div>
        </>
    );
}

