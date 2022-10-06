/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export default function Header() {
	return (
		<div
			className="mrm-from-builder-header"
			role="region"
			aria-label={ __( 'Form Header.', 'getdavesbe' ) }
			tabIndex="-1"
		>
			<h1 className="mrm-from-builder-header__title">
				{ __( 'Form Block Editor', 'getdavesbe' ) }
			</h1>
		</div>
	);
}
