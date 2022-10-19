/**
 * WordPress dependencies
 */
import '@wordpress/editor'; // This shouldn't be necessary
import '@wordpress/format-library';
import { useSelect, useDispatch} from '@wordpress/data';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { serialize, parse } from '@wordpress/blocks';
import { uploadMedia } from '@wordpress/media-utils';

import {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockList,
	BlockInspector,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Sidebar from '../sidebar';
import {ShortcutProvider} from '@wordpress/keyboard-shortcuts';
import { useParams } from "react-router-dom";

function BlockEditor( { settings: _settings } ) {
	const location = window.location.hash;
	var locationArray = location.split('/');
	const lastIndex = locationArray.at(-1);
	const id = lastIndex.replace("#",'');
	const [ blocks, updateBlocks ] = useState( [] );
	const { createInfoNotice } = useDispatch( 'core/notices' );

	const canUserCreateMedia = useSelect( ( select ) => {
		const _canUserCreateMedia = select( 'core' ).canUser( 'create', 'media' );
		return _canUserCreateMedia || _canUserCreateMedia !== false;
	}, [] );

	const settings = useMemo(() => {
		if ( ! canUserCreateMedia ) {
			return _settings;
		}
		return {
			..._settings,
			mediaUpload( { onError, ...rest } ) {
				uploadMedia( {
					wpAllowedMimeTypes: _settings.allowedMimeTypes,
					onError: ( { message } ) => onError( message ),
					...rest,
				} );
			},
		};
	}, [ canUserCreateMedia, _settings ] );

	useEffect( () => {
		const getFormData = async () => {
			if(id){
				const res = await fetch(
					`${window.MRM_Vars.api_base_url}mrm/v1/forms/${id}`
				);
				const resJson = await res.json();
				if (200 === resJson.code) {
					window.localStorage.setItem( 'getmrmblocks', resJson.data.form_body )
					const storedBlocks = window.localStorage.getItem( 'getmrmblocks' );

					if ( storedBlocks?.length ) {
						handleUpdateBlocks(() => parse(storedBlocks));
						// createInfoNotice( 'Blocks loaded', {
						// 	type: 'snackbar',
						// 	isDismissible: true,
						// } );
					}
				}else{
					window.localStorage.setItem( 'getmrmblocks', '' )
				}
			}else{
				window.localStorage.setItem( 'getmrmblocks', '' )
			}

		};
		getFormData();

	}, [] );

	/**
	 * Wrapper for updating blocks. Required as `onInput` callback passed to
	 * `BlockEditorProvider` is now called with more than 1 argument. Therefore
	 * attempting to setState directly via `updateBlocks` will trigger an error
	 * in React.
	 */
	function handleUpdateBlocks(blocks) {
		updateBlocks( blocks );
	}

	function handlePersistBlocks( newBlocks ) {
		updateBlocks( newBlocks );
		window.localStorage.setItem( 'getmrmblocks', serialize( newBlocks ) );
	}
	return (
		<div className="get-mrm-block-editor">
			<ShortcutProvider>
				<BlockEditorProvider
					value={ blocks }
					onInput={ handleUpdateBlocks }
					onChange={ handlePersistBlocks }
					settings={ settings }
				>
					<Sidebar.InspectorFill>
						<BlockInspector />
					</Sidebar.InspectorFill>
					<div className="editor-styles-wrapper">
						<BlockEditorKeyboardShortcuts />
						<WritingFlow>
							<ObserveTyping>
								<BlockList className="get-mrm-block-editor__block-list" />
							</ObserveTyping>
						</WritingFlow>
					</div>
				</BlockEditorProvider>
			</ShortcutProvider>
		</div>
	);
}

export default BlockEditor;

