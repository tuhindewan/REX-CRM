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
    buttonText = () =>{
        let { attributes, setAttributes } 	= this.props;

        return (
            <PanelBody title="Button Text" className="inner-pannel">
                <TextControl
                    className="mrm-inline-label"
                    label="Button Text"
                    value={ attributes.buttonText }
                    onChange={ (state ) => setAttributes({ buttonText: state }) }
                />
            </PanelBody>
        )
    }
    buttonStyle = () => {
        let { attributes, setAttributes } 	= this.props;

        return (
            <PanelBody title="Button Style" initialOpen={false}>

                <label className="blocks-base-control__label">Text Color</label>
                <ColorPalette
                    onChange={ buttonTextColor => this.onChangeAttribute( 'buttonTextColor', buttonTextColor )}
                    value = { attributes.buttonTextColor }
                />

                <label className="blocks-base-control__label">Background Color</label>
                <ColorPalette
                    onChange={ buttonBgColor => this.onChangeAttribute( 'buttonBgColor', buttonBgColor )}
                    value = { attributes.buttonBgColor }
                />

                <hr className="mrm-hr"/>

                <label className="blocks-base-control__label">Border Radius</label>
                <RangeControl
                    value={ attributes.buttonBorderRadius }
                    onChange={ btnRadius => this.onChangeAttribute( 'buttonBorderRadius', btnRadius )}
                    allowReset={true}
                    min={0}
                    max={100}
                    step={1}
                />

                <label className="blocks-base-control__label">Border Style</label>
                <SelectControl
                    value={attributes.buttonBorderStyle}
                    onChange={ buttonBorderStyle => this.onChangeAttribute( 'buttonBorderStyle', buttonBorderStyle )}
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
                    value={ attributes.buttonBorderWidth }
                    onChange={ btnBorder => this.onChangeAttribute( 'buttonBorderWidth', btnBorder )}
                    allowReset={true}
                    min={0}
                    max={5}
                    step={1}
                />

                <label className="blocks-base-control__label">Border Color</label>
                <ColorPalette
                    onChange={ buttonBorderColor => this.onChangeAttribute( 'buttonBorderColor', buttonBorderColor )}
                    value = { attributes.buttonBorderColor }
                />
            </PanelBody>
        )
    }

    getInspectorControls = () => {
        return (
            <InspectorControls key="mrm-mrm-form-inspector-controls">
                <div id="mrm-block-inspected-inspector-control-wrapper" className="mrm-block-control-wrapper">
                    <Panel>
                        {this.buttonText()}
                        {this.buttonStyle()}
                    </Panel>
                </div>
            </InspectorControls>
        );
    };

    render() {
        const {
            attributes : {
                buttonText,
                buttonAlign,
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
        } = this.props;


        let fieldSpacing = {
            marginBottom:  rowSpacing+'px',
        }

        let buttonStyle = {
            backgroundColor: buttonBgColor,
            color:  buttonTextColor,
            borderRadius:  buttonBorderRadius+'px',
            paddingTop:  buttonPaddingTop+'px',
            paddingRight:  buttonPaddingRight+'px',
            paddingBottom:  buttonPaddingBottom+'px',
            paddingLeft:  buttonPaddingLeft+'px',
            borderStyle:  buttonBorderStyle,
            borderWidth:  buttonBorderWidth+'px',
            borderColor:  buttonBorderColor,
        }


        // display the map selector
        return (
            <>
                { this.getInspectorControls() }

                <div className="mrm mrm-gutenberg-mrm-form-wrapper">
                    <div className="mrm-mrm-form-wrapper">
                            <div className="mrm-mrm-form-group submit" style={fieldSpacing}>
                                <BlockControls>
                                    <BlockAlignmentToolbar
                                        value={ buttonAlign }
                                        onChange={ (newAlign) => this.props.setAttributes({ buttonAlign: newAlign }) }
                                        controls={["left", "center", "right"]}
                                    />
                                </BlockControls>
                                <RichText
                                    className='mrm-submit-button'
                                    tagName="button"
                                    type='button'
                                    value={ buttonText }
                                    style={ buttonStyle }
                                    onChange={ ( content ) => this.props.setAttributes( { buttonText: content } ) }
                                    placeholder={ __( 'Submit', 'mrm' ) }
                                />

                            </div>
                        </div>
                </div>
            </>


        );
    }
}

export default compose( [
] )( Editor );
