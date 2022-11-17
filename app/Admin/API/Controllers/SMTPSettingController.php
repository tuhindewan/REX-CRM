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
 * @desc [Responsible for managing double SMTP settings API callbacks]
 */
class SMTPSettingController extends SettingBaseController {

	use Singleton;

	/**
	 * @desc Update SMTP global settings into wp_option table
	 * @param WP_REST_Request $request
	 * @return array|\WP_Error
	 * @since 1.0.0
	 */
	public function create_or_update( WP_REST_Request $request ) {
		$params = MRM_Common::get_api_params_values( $request );
		$params = is_array( $params ) && ! empty( $params ) ? $params : [
			'method'   => 'smtp',
			'settings' => [
				'host'     => '',
				'port'     => '',
				'login'    => '',
				'password' => '',
			],
		];

		if( update_option( '_mrm_smtp_settings', $params ) ) {
			return $this->get_success_response( __( 'SMTP settings have been successfully saved.', 'mrm' ) );
		}
		return $this->get_error_response( __( 'No changes have been made.', 'mrm' ) );
	}

	/**
	 * @desc Get SMTP global settings from wp_option table
	 * @return array
	 * @since 1.0.0
	 */
	public function get( WP_REST_Request $request ) {
		$default  = [
			'method'   => 'smtp',
			'settings' => [
				'host'     => '',
				'port'     => '',
				'login'    => '',
				'password' => '',
			],
		];
		$settings = get_option( '_mrm_smtp_settings', $default );
		$settings = is_array( $settings ) && !empty( $settings ) ? $settings : $default;
		return $this->get_success_response_data(  $settings );
	}
}