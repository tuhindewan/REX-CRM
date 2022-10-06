/**
 * External dependencies
 */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from "react";
import {__} from "@wordpress/i18n";
const { RawHTML, Component, useEffect, } = wp.element;
const { RichText } = wp.blockEditor;


/**
 * Internal dependencies
 */


const mrmLastName = ({
                           attributes: {
                               formLayout,
                               lastNameLabel,
                               lastNamePlaceholder,
                               isRequiredLastName,


                               fieldLabel,
                               requiredMark,
                               inputBgColor,
                               inputTextColor,
                               inputBorderRadius,
                               inputPaddingTop,
                               inputPaddingRight,
                               inputPaddingBottom,
                               inputPaddingLeft,
                               inputBorderStyle,
                               inputBorderWidth,
                               inputBorderColor,
                               rowSpacing,

                               labelColor,
                               labelSpacing,
                           },
                       }) => {

    let layout = formLayout
    let fieldSpacing = {
        marginBottom:  rowSpacing+'px',
    }

    let labelStyle = {
        color:  labelColor,
        marginBottom:  labelSpacing+'px',
    }
    let checkboxLabelColor = {
        color:  labelColor,
    }

    let inputStyle = {
        backgroundColor: inputBgColor,
        color:  inputTextColor,
        borderRadius:  inputBorderRadius+'px',
        paddingTop:  inputPaddingTop+'px',
        paddingRight:  inputPaddingRight+'px',
        paddingBottom:  inputPaddingBottom+'px',
        paddingLeft:  inputPaddingLeft+'px',
        borderStyle:  inputBorderStyle,
        borderWidth:  inputBorderWidth+'px',
        borderColor:  inputBorderColor,
    }

    return (

        <>
            <div className="mrm mrm-gutenberg-last-name-form-wrapper">
                    <div className={`mrm-last-form-wrapper ${layout}`} >
                         <div className="mrm-optin-form-group last-name" style={fieldSpacing}>
                             <div className="wpfnl-optin-form-group last-name" style={fieldSpacing}>
                                 <label htmlFor="wpfnl-last-name" style={labelStyle}>
                                     {lastNameLabel ? __(lastNameLabel,'mrm') : __('Last Name','wpfnl')}
                                     {requiredMark && isRequiredLastName && <span className="required-mark">*</span>}
                                 </label>
                                 <div>
                                     <span className="input-wrapper">
                                        <input type="text" name="last_name" id="wpfnl-last-name" placeholder={lastNamePlaceholder} required={isRequiredLastName} style={inputStyle} />
                                     </span>
                                 </div>

                             </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

mrmLastName.propTypes = {
    attributes: PropTypes.object.isRequired,
};
export default mrmLastName;
