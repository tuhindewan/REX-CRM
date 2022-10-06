import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import { registerCoreBlocks } from '@wordpress/block-library';
import Editor from './editor';
import EmailBlock from './components/email-field-block/index'
const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;
import './styles.scss';
import icon from "./components/email-field-block/icon";
import attributes from "./components/email-field-block/attributes";
import Edit from "./components/email-field-block/edit";
import mrmEmailField from "./components/email-field-block/block";

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
	render( <Editor settings={ settings } />, document.getElementById( 'mrm-block-editor' ) );
} );

