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


const mrmButton = ({
        attributes: {
            formLayout,
            buttonAlign,
            buttonText,
            rowSpacing,
            buttonTextColor,
            buttonBgColor,
            buttonBorderRadius,
            buttonPaddingTop,
            buttonPaddingRight,
            buttonPaddingBottom,
            buttonPaddingLeft,
            buttonBorderStyle,
            buttonBorderWidth,
            buttonBorderColor,
        },
    }) => {

    let layout = formLayout
    let fieldSpacing = {
        marginBottom:  rowSpacing+'px',
    }

    let buttonStyle = {
        backgroundColor: buttonBgColor,
        color:  buttonTextColor +' !important',
        borderRadius:  buttonBorderRadius+'px',
        paddingTop:  buttonPaddingTop+'px',
        paddingRight:  buttonPaddingRight+'px',
        paddingBottom:  buttonPaddingBottom+'px',
        paddingLeft:  buttonPaddingLeft+'px',
        borderStyle:  buttonBorderStyle,
        borderWidth:  buttonBorderWidth+'px',
        borderColor:  buttonBorderColor,
    }

    return (
        <>
            <div className="mrm-form-group submit" style={fieldSpacing}>
                <RichText.Content
                    className='mrm-submit-button mintmrm-btn'
                    tagName="button"
                    type="submit"
                    style={ buttonStyle }
                    value={ buttonText }
                />
            </div>
        </>
    )
}

mrmButton.propTypes = {
    attributes: PropTypes.object.isRequired,
};
export default mrmButton;
