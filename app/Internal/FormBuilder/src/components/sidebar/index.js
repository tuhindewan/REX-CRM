/**
 * WordPress dependencies
 */
import React from "react";
import { createSlotFill } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import CrossIcon from '../Icons/CrossIcon';
import SettingsIcon from '../Icons/SettingsIcon';

const {
    TextControl,
    SelectControl,
    RangeControl,
    TextareaControl,
    Button,
    Panel,
    PanelBody,
    RadioGroup,
    Radio,
} = wp.components;

const {
	Component,
	RawHTML,
	useEffect,
	useState
} = wp.element;

const {
    InspectorControls,
    ColorPalette,
    MediaUpload,
    PanelColorSettings,
    withColors,
	useBlockProps
} = wp.blockEditor;

const { Slot: InspectorSlot, Fill: InspectorFill } = createSlotFill(
	'MRMBlockEditorSidebarInspector'
);

function Sidebar() {
	return (
		<div
			className="mrm-form-builder-sidebar"
			role="region"
			aria-label={ __( 'MRM Block Editor advanced settings.' ) }
			tabIndex="-1"
		>
			<Panel header={ __( 'Inspector' ) }>
				<InspectorSlot bubblesVirtually />
			</Panel>

			<Panel className="settings-pannel">
				<div className="components-panel__header">
					<h2>
						<SettingsIcon/>
						Settings
					</h2>

					<span className="close-pannel">
						<CrossIcon/>
					</span>
				</div>

				<PanelBody title="Confirmation Settings" className="confirmation-settings" initialOpen={true}>
					<h1>confirmation settings</h1>
				</PanelBody>
			</Panel>
		</div>
	);
}

Sidebar.InspectorFill = InspectorFill;

export default Sidebar;
