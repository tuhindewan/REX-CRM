<?php

namespace MRM\Common;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 15:11:01
 * @modify date 2022-08-10 15:11:01
 * @desc [Manage MRM common functions]
 */

class MRM_Common {

    public static $response_code = 200;

    public static function error_response( $message = '', $code = 0, $wp_error = null ) {
		if ( 0 !== absint( $code ) ) {
			self::$response_code = $code;
		} else if ( empty( self::$response_code ) ) {
			self::$response_code = 500;
		}

		$data = array();
		if ( $wp_error instanceof \WP_Error ) {
			$message = $wp_error->get_error_message();
			$data    = $wp_error->get_error_data();
		}

		return new \WP_Error( self::$response_code, $message, array( 'status' => self::$response_code, 'error_data' => $data ) );
	}

}

