import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import { registerCoreBlocks } from '@wordpress/block-library';
import Editor from './editor';
const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;
import './styles.scss';
//Email
import icon from "./components/email-field-block/icon";
import attributes from "./components/email-field-block/attributes";
import Edit from "./components/email-field-block/edit";
import mrmEmailField from "./components/email-field-block/block";
// Firstname
import mrmFirstName from "./components/first-name-block/block";
import firstNameIcon from "./components/first-name-block/icon";
import firstNameAttributes from "./components/first-name-block/attributes";
import firstNameEdit from "./components/first-name-block/edit";
//last Name
import mrmLastName from "./components/last-name-block/block";

import lastNameIcon from "./components/last-name-block/icon";
import lastNameAttributes from "./components/last-name-block/attributes";
import lastNameEdit from "./components/last-name-block/edit";

domReady( function() {
	const settings = window.getmrmsetting || {};
	registerCoreBlocks();
	registerBlockType( "mrmformfield/email-field-block", {
		title: __( "Email Field", "mrm" ),
		category: "common",
		icon: icon.pricing,
		supports: {
			align: ['left', 'right', 'center']
		},
		attributes: attributes,
		edit: Edit,
		save: mrmEmailField,
	});

	registerBlockType( "mrmformfield/first-name-block", {
		title: __( "First Name", "mrm" ),
		category: "common",
		icon: firstNameIcon.pricing,
		supports: {
			align: ['left', 'right', 'center']
		},
		attributes: firstNameAttributes,
		edit: firstNameEdit,
		save: mrmFirstName,
	});

	registerBlockType( "mrmformfield/last-name-block", {
		title: __( "Last Name", "mrm" ),
		category: "common",
		icon: lastNameIcon.pricing,
		supports: {
			align: ['left', 'right', 'center']
		},
		attributes: lastNameAttributes,
		edit: lastNameEdit,
		save: mrmLastName,
	});
	render( <Editor settings={ settings } />, document.getElementById( 'mrm-block-editor' ) );
} );

