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

    onChangeOBProps = ( key, value ) => {
        this.props.setAttributes({ adminEmail: {
                ...this.props.attributes.adminEmail, [key] : value
            }})

        setTimeout(
            () => {
                this.loadCheckoutMarkup();
            },
            0
        );
    }

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

    onChangeLayout = (value) => {
        this.props.setAttributes({
            formLayout  : value,
        })
    }


    formFields = () => {
        let { attributes, setAttributes } 	= this.props,
            lastNameLabel = attributes.lastNameLabel,
            lastNamePlaceholder = attributes.lastNamePlaceholder,
            isRequiredLastName = attributes.isRequiredLastName;

        return (
                <PanelBody title="Last Name" className="inner-pannel">
                    <TextControl
                        className="mrm-inline-label"
                        label="Last Name Label"
                        value={ lastNameLabel }
                        onChange={ (state ) => this.props.setAttributes({ lastNameLabel: state }) }
                    />

                    <TextControl
                        className="mrm-inline-label"
                        label="Last Name Placeholder Text"
                        value={ lastNamePlaceholder }
                        onChange={ (state ) => this.props.setAttributes({ lastNamePlaceholder: state }) }
                    />

                    <ToggleControl
                        className="mrm-switcher-block"
                        label="Mark Last Name As Required"
                        checked={ isRequiredLastName }
                        onChange={ (state ) => setAttributes({ isRequiredLastName: state }) }
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
        let { attributes, setAttributes } 	= this.props;

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

            </PanelBody>
        )
    }

    getInspectorControls = () => {
        return (
            <InspectorControls key="mrm-mrm-form-inspector-controls">
                <div id="mrm-block-inspected-inspector-control-wrapper" className="mrm-block-control-wrapper" >
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
                lastNameLabel,
                lastNamePlaceholder,
                isRequiredLastName,

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


        // display the map selector
        return (
            <>
                { this.getInspectorControls() }

                <div className="mrm mrm-gutenberg-last-name-form-wrapper">
                    <div className={`mrm-mrm-form-wrapper ${this.props.attributes.formLayout}`}>
                        <div className="mrm-mrm-form-group last-name" style={fieldSpacing}>
                            <label htmlFor="mrm-last-name" style={labelStyle}>
                                {lastNameLabel ? __(lastNameLabel,'mrm') : __('Last Name','mrm')}
                                {requiredMark && isRequiredLastName && <span className="required-mark">*</span>}
                            </label>
                            <div>
                                <span className="input-wrapper">
                                 <input type="text" name="last_name" id="mrm-last-name" placeholder={lastNamePlaceholder} required={isRequiredLastName} style={inputStyle} />
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
