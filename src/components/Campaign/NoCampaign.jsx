import React, { useState } from "react";
import OpenEnvelopeIcon from "../Icons/OpenEnvelopeIcon";


export default function NoCampaign(props) {

    return (
        <tr>
            <td className="no-campaign" colSpan={6}>
                <div className="no-campaign-wrapper">
                    <OpenEnvelopeIcon />
                    <span className="title">No campaigns found</span>
                </div>
            </td>
        </tr>
    );
}
