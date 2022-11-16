import React, { useRef, useState } from "react";

import EditIcon from "../../../components/Icons/EditIcon";
import DeleteIcon from "../../../components/Icons/Delete";
import ThreeDotIcon from "../../../components/Icons/ThreeDotIcon";


export default function SingleCustomField() {

    return (
        <>
            <div className="single-custom-field">
                <h5 className="field-name">Country</h5>

                <button className="field-action">
                    <ThreeDotIcon />
                    <ul className="mintmrm-dropdown">
                        <li>
                            <EditIcon/>
                            Edit
                        </li>
                        <li>
                            <DeleteIcon/>
                            Delete
                        </li>
                    </ul>
                </button>
            </div>
        </>
    );
}

