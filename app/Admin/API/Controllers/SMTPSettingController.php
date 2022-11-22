<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
use MRM\Common\MRM_Common;
use WP_REST_Request;
use Mint\MRM\Internal\Admin\MRMSecurity;

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
			'method'   => 'web_server',
			'settings' => [
				'frequency' => [
					'type' => 'recommended',
					'interval' => '5'
				],
			],
		];

		$params = $this->encrypt_keys( $params );

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
			'method'   => 'web_server',
			'settings' => [
				'frequency' => [
					'type' => 'recommended',
					'interval' => '5'
				],
			],
		];
		$settings = get_option( '_mrm_smtp_settings', $default );
		$settings = is_array( $settings ) && !empty( $settings ) ? $settings : $default;
		return $this->get_success_response_data(  $settings );
	}

	/**
	 * @desc Encrypts password/api key/secret key
	 * @param $params
	 *
	 * @return array
	 * @since 1.0.0
	 */
	private function encrypt_keys( $params ) {
		if ( isset( $params[ 'method' ] ) ) {
			if ( 'smtp' === $params[ 'method' ] && isset( $params[ 'settings' ][ 'password' ] ) ) {
				$params[ 'settings' ][ 'password' ] = MRMSecurity::get_instance()->encrypt( $params[ 'settings' ][ 'password' ] );
			}
			elseif ( 'sendgrid' === $params[ 'method' ] && isset( $params[ 'settings' ][ 'api_key' ] ) ) {
				$params[ 'settings' ][ 'api_key' ] = MRMSecurity::get_instance()->encrypt( $params[ 'settings' ][ 'api_key' ] );
			}
			elseif ( 'amazonses' === $params[ 'method' ] && isset( $params[ 'settings' ][ 'secret_key' ] ) ) {
				$params[ 'settings' ][ 'secret_key' ] = MRMSecurity::get_instance()->encrypt( $params[ 'settings' ][ 'secret_key' ] );
			}
		}
		return $params;
	}
}