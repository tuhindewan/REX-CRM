<?php
/**
 * REST API Opt-in Setting Controller
 *
 * Handles requests to the opt-in setting endpoint.
 *
 * @author   MRM Team
 * @category API
 * @package  MRM
 * @since    1.0.0
 */

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
use MRM\Common\MRM_Common;
use WP_REST_Request;

/**
 * This is the main class that controls the opt-in setting feature. Its responsibilities are:
 *
 * - Create or update opt-in settings
 * - Retrieve opt-in settings from options table
 *
 * @package Mint\MRM\Admin\API\Controllers
 */
class OptinSettingController extends SettingBaseController {

	use Singleton;

	/**
	 * Setiings object arguments
	 *
	 * @var object
	 * @since 1.0.0
	 */
	public $args;

	/**
	 * Optin setiings key
	 *
	 * @var object
	 * @since 1.0.0
	 */
	private $option_key = '_mrm_optin_settings';

	/**
	 * Get and send response to create a new settings
	 *
	 * @param WP_REST_Request $request Request object used to generate the response.
	 * @return WP_REST_Response
	 * @since 1.0.0
	 */
	public function create_or_update( WP_REST_Request $request ) {

		// Get values from API.
		$params = MRM_Common::get_api_params_values( $request );

		if ( array_key_exists( 'optin', $params ) ) {
			$setting_value                         = isset( $params['optin'] ) ? $params['optin'] : array();
			$setting_value['email_body']           = isset( $setting_value['email_body'] ) ? html_entity_decode( $setting_value['email_body'] ) : '';
			$setting_value['confirmation_message'] = isset( $setting_value['confirmation_message'] ) ? html_entity_decode( $setting_value['confirmation_message'] ) : '';

			$confirmation_type = isset( $setting_value['confirmation_type'] ) ? $setting_value['confirmation_type'] : '';

			// Email body and confirmation message validation.
			if ( 'message' === $confirmation_type && empty( $setting_value['email_body'] ) ) {
				return $this->get_error_response( __( 'Email body is empty', 'mrm' ) );
			}

			if ( 'message' === $confirmation_type && empty( $setting_value['confirmation_message'] ) ) {
				return $this->get_error_response( __( 'Confirmation message is empty', 'mrm' ) );
			}

			// URL validation.
			$url = isset( $setting_value['url'] ) ? $setting_value['url'] : '';
			if ( 'redirect' === $confirmation_type && filter_var( $url, FILTER_VALIDATE_URL ) === false ) {
				return $this->get_error_response( __( 'Redirect URL is not valid', 'mrm' ) );
			}

			if ( 'redirect' === $confirmation_type && empty( $url ) ) {
				return $this->get_error_response( __( 'Redirect URL is missing', 'mrm' ) );
			}

			update_option( '_mrm_optin_settings', $setting_value );
			return $this->get_success_response( __( 'Double opt-in settings have been successfully saved.', 'mrm' ) );
		}
	}


	/**
	 * Function used to handle a single get request
	 *
	 * @param WP_REST_Request $request Request object used to generate the response.
	 * @return WP_REST_Response
	 * @since 1.0.0
	 */
	public function get( WP_REST_Request $request ) {
		$default = array(
			'enable'               => true,
			'email_subject'        => 'Please Confirm Subscription.',
			'email_body'           => 'Please Confirm Subscription. {{subscribe_link}}. <br> If you receive this email by mistake, simply delete it.',
			'confirmation_type'    => 'message',
			'confirmation_message' => 'Subscription Confirmed. Thank you.',
		);

		$settings = get_option( $this->option_key, $default );
		$settings = is_array( $settings ) && ! empty( $settings ) ? $settings : $default;
		return $this->get_success_response_data( $settings );
	}



}
