/**
 * WordPress dependencies
 */
import { createSlotFill, Panel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

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
		</div>
	);
}

Sidebar.InspectorFill = InspectorFill;

export default Sidebar;
