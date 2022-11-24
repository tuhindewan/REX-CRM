<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
use MRM\Common\MRM_Common;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Responsible for managing double General settings API callbacks]
 */
class GeneralSettingController extends SettingBaseController {

	use Singleton;

	/**
	 * @desc Update General global settings into wp_options table
	 * @param WP_REST_Request $request
	 * @return array|WP_REST_Response
	 * @since 1.0.0
	 */
	public function create_or_update( WP_REST_Request $request ) {
		$params = MRM_Common::get_api_params_values( $request );

		if ( is_array( $params ) && ! empty( $params ) ) {
			foreach ( $params as $key => $value ) {
				if ( isset( $value['confirmation_type'] ) && 'message' === $value['confirmation_type'] ) {
					$value['confirmation_message'] = isset( $value['confirmation_message'] ) ? html_entity_decode( $value['confirmation_message'] ) : '';
				}
				if ( isset( $value['confirmation_type'] ) && 'redirect' === $value['confirmation_type'] ) {
					if ( isset( $value['url'] ) && ! empty( $value['url'] ) ) {
						if ( filter_var( $value['url'], FILTER_VALIDATE_URL ) === false ) {
							return $this->get_error_response( __( ' URL is not valid', 'mrm' ) );
						}
					}
				}
				update_option( '_mrm_general_' . $key, $value );
			}
			return $this->get_success_response( __( 'General settings have been successfully saved.', 'mrm' ) );
		}
		return $this->get_error_response( __( 'No changes have been made.', 'mrm' ) );
	}

	/**
	 * @desc Get General global settings from wp_option table
	 * @param WP_REST_Request $request
	 * @return array|WP_REST_Response
	 * @since 1.0.0
	 */
	public function get( WP_REST_Request $request ) {
		$params = MRM_Common::get_api_params_values( $request );

		$option_keys = apply_filters(
			'mrm_general_settings_option_key',
			array(
				'unsubscriber_settings',
				'preference',
				'user_signup',
				'comment_form_subscription',
			)
		);

		$settings = array();

		if ( isset( $params['general_settings_key'] ) ) {
			$key              = $params['general_settings_key'];
			$settings[ $key ] = get_option( '_mrm_general_' . $key, array() );
		} else {
			foreach ( $option_keys as $key ) {
				$settings[ $key ] = get_option( '_mrm_general_' . $key, array() );
			}
		}

		$settings = is_array( $settings ) && ! empty( $settings ) ? $settings : array();
		if(isset($settings['unsubscriber_settings'])){
			if (isset($settings['unsubscriber_settings']['page_id'])){
				$page_id = $settings['unsubscriber_settings']['page_id'];
				$get_page_title = get_the_title( $page_id );
				$settings['unsubscriber_settings']['page_title'] = $get_page_title;
			}

		}

		return $this->get_success_response_data( $settings );
	}
}
