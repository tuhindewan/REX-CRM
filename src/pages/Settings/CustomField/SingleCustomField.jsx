import React, { useRef, useState } from "react";

import EditIcon from "../../../components/Icons/EditIcon";
import DeleteIcon from "../../../components/Icons/Delete";
import ThreeDotIcon from "../../../components/Icons/ThreeDotIcon";


export default function SingleCustomField({index, deleteCustomField}) {
    const [showModal, setShowModal] = useState(false);

    const showMoreOption = (index) => {
        setShowModal(!showModal);
    }

    return (
        <>
            <div className="single-custom-field">
                <h5 className="field-name">Country</h5>

                <button className="field-action" onClick={() => showMoreOption(index)}>
                    <ThreeDotIcon />

                    <ul className={showModal ? 'mintmrm-dropdown show' : 'mintmrm-dropdown'}>
                        <li>
                            <EditIcon/>
                            Edit
                        </li>
                        <li onClick={() => deleteCustomField(index)}>
                            <DeleteIcon/>
                            Delete
                        </li>
                    </ul>
                </button>
            </div>
        </>
    );
}

