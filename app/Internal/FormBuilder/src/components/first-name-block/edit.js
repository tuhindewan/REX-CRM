import React from "react";
import classnames from 'classnames';
import PropTypes from 'prop-types';

import {__} from "@wordpress/i18n";
const {
    withSelect,
    withDispatch,
    useSelect,
    useDispatch
} = wp.data;
const {
    Component,
    RawHTML,
    useEffect,
    useState
} = wp.element;
const { compose } = wp.compose;
const {
    TextControl,
    SelectControl,
    RangeControl,
    TextareaControl,
    Button,
    Panel,
    ToggleControl,
    FormToggle,
    PanelBody,
    RadioGroup,
    RadioControl,
    Radio,
} = wp.components;
const {
    InspectorControls,
    ColorPalette,
    RichText,
    useBlockProps,
    BlockControls,
    BlockAlignmentToolbar
} = wp.blockEditor;

const {useEntityProp} = wp.coreData;
/**
 * Internal dependencies
 */


class Editor extends Component {

    static propTypes = {
        attributes      : PropTypes.object.isRequired,
        isSelected      : PropTypes.bool.isRequired,
        name            : PropTypes.string.isRequired,
        setAttributes   : PropTypes.func.isRequired,
    };

    onChangeAttribute = (key, value) => {
        this.props.setAttributes({
            ...this.props.attributes,
            [key]: value
        })
    }

    onChangePadding = ( type, attribute, value ) => {
        this.props.setAttributes({
            [attribute] : value
        });
    }
    formFields = () => {
        let { attributes, setAttributes } 	= this.props,
            firstName = attributes.firstName,
            firstNameLabel = attributes.firstNameLabel,
            firstNamePlaceholder = attributes.firstNamePlaceholder,
            isRequiredName = attributes.isRequiredName;
        return (
                <PanelBody title="First Name" className="inner-pannel">
                   <TextControl
                        label="First Name Label"
                        value={ firstNameLabel }
                        onChange={ (state ) => this.props.setAttributes({ firstNameLabel: state }) }
                    />
                    <TextControl
                        label="First Name Placeholder"
                        value={ firstNamePlaceholder }
                        onChange={ (state ) => this.props.setAttributes({ firstNamePlaceholder: state }) }
                    />
                    <ToggleControl
                        label="Is Required First Name"
                        checked={ isRequiredName }
                        onChange={ (state ) => setAttributes({ isRequiredName: state }) }
                    />
                </PanelBody>
        )
    }

    formStyle = () => {
        let { attributes, setAttributes } 	= this.props,
            labelTypography = attributes.labelTypography,
            device = attributes.device;

        return (
            <PanelBody title="Form Style" initialOpen={false}>
                <label className="blocks-base-control__label">Row Spacing</label>
                <RangeControl
                    value={ attributes.rowSpacing }
                    onChange={ rowSpacing => this.onChangeAttribute( 'rowSpacing', rowSpacing )}
                    allowReset={true}
                    min={0}
                    max={50}
                    step={1}
                />

                <hr className="mrm-hr"/>
                <label className="blocks-base-control__label">Label Color</label>
                <ColorPalette
                    onChange={ labelColor => this.onChangeAttribute( 'labelColor', labelColor )}
                    value = { attributes.labelColor }
                />

                <label className="blocks-base-control__label">Label Spacing</label>
                <RangeControl
                    value={ attributes.labelSpacing }
                    onChange={ labelSpacing => this.onChangeAttribute( 'labelSpacing', labelSpacing )}
                    allowReset={true}
                    min={0}
                    max={50}
                    step={1}
                />
            </PanelBody>

        )
    }

    inputFieldStyle = () => {
        let { attributes, setAttributes } 	= this.props,
            inputTypography = attributes.inputTypography,
            device = attributes.device;

        return (
            <PanelBody title="Input Field Style" initialOpen={false}>

                <label className="blocks-base-control__label">Text Color</label>
                <ColorPalette
                    onChange={ inputTextColor => this.onChangeAttribute( 'inputTextColor', inputTextColor )}
                    value = { attributes.inputTextColor }
                />

                <label className="blocks-base-control__label">Background Color</label>
                <ColorPalette
                    onChange={ inputBgColor => this.onChangeAttribute( 'inputBgColor', inputBgColor )}
                    value = { attributes.inputBgColor }
                />

                <hr className="mrm-hr"/>

                <label className="blocks-base-control__label">Border Radius</label>
                <RangeControl
                    value={ attributes.inputBorderRadius }
                    onChange={ radius => this.onChangeAttribute( 'inputBorderRadius', radius )}
                    allowReset={true}
                    min={0}
                    max={100}
                    step={1}
                />

                <label className="blocks-base-control__label">Border Style</label>
                <SelectControl
                    value={attributes.inputBorderStyle}
                    onChange={ inputBorderStyle => this.onChangeAttribute( 'inputBorderStyle', inputBorderStyle )}
                    options={[
                        {
                            value: 'none',
                            label: 'None'
                        },
                        {
                            value: 'solid',
                            label: 'Solid'
                        },
                        {
                            value: 'Dashed',
                            label: 'dashed'
                        },
                        {
                            value: 'Dotted',
                            label: 'dotted'
                        },
                        {
                            value: 'Double',
                            label: 'double'
                        }
                    ]}
                />

                <label className="blocks-base-control__label">Border Width</label>
                <RangeControl
                    value={ attributes.inputBorderWidth }
                    onChange={ border => this.onChangeAttribute( 'inputBorderWidth', border )}
                    allowReset={true}
                    min={0}
                    max={5}
                    step={1}
                />

                <label className="blocks-base-control__label">Border Color</label>
                <ColorPalette
                    onChange={ inputBorderColor => this.onChangeAttribute( 'inputBorderColor', inputBorderColor )}
                    value = { attributes.inputBorderColor }
                />

                <hr className="mrm-hr"/>

            </PanelBody>
        )
    }
    getInspectorControls = () => {
        return (
            <InspectorControls key="mrm-mrm-form-inspector-controls">
                <div id="mrm-block-inspected-inspector-control-wrapper">
                    <Panel>
                        {this.formFields()}
                        {this.formStyle()}
                        {this.inputFieldStyle()}
                    </Panel>
                </div>
            </InspectorControls>
        );
    };

    render() {
        const {
            attributes : {
                firstNameLabel,
                firstNamePlaceholder,
                isRequiredName,
                fieldLabel,
                requiredMark,
                buttonAlign,
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
        } = this.props;


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
                { this.getInspectorControls() }

                <div className="mrm mrm-optin-form mrm-gutenberg-optin-form-wrapper">
                    <div className="mrm-mrm-form-wrapper">
                        <div className="mrm-mrm-form-group first-name" style={fieldSpacing}>
                             <label htmlFor="mrm-first-name" style={labelStyle}>
                                {firstNameLabel ? __(firstNameLabel,'mrm') : __('First Name','mrm')}
                                {requiredMark && isRequiredName && <span className="required-mark">*</span>}
                            </label>
                            <div>
                                <span className="input-wrapper">
                                    <input type="text" name="first_name" id="mrm-first-name" placeholder={firstNamePlaceholder} required={isRequiredName} style={inputStyle} />
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </>


        );
    }
}

export default compose( [
] )( Editor );
