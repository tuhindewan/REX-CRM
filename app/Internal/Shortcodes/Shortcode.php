<?php

namespace Mint\MRM\Internal\ShortCode;

use Mint\Mrm\Internal\Traits\Singleton;

class ShortCode {

	use Singleton;

	/**
	 * Assign Shortcode name and callback function
	 */
	public static function init() {
		$shortcodes = array(
			'mintmrm' => __CLASS__ . '::render_contact_form',
		);

		foreach ( $shortcodes as $shortcode => $function ) {
			add_shortcode( $shortcode, $function );
		}
	}


	/**
	 * Render Shortcode
	 *
	 * @param $atts
	 * @return string
	 */

	public static function render_contact_form( $atts ) {
		$shortcode = new ContactForm( (array) $atts );
		return $shortcode->get_content();
	}
}
