<?php

namespace MRM\Controllers;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Abstract class for REST API controller]
 */

abstract class MRM_Base_Controller {


	/**
     * REST API response code
     * 
     * @var integer
     * @since 1.0.0
     */
  	private $response_code = 200;
  

	/**
     * Prepare success response for REST API
     * 
	 * @param $message
	 * @param $code
	 * @param $wp_error
	 * 
     * @return array
     * @since 1.0.0
     */  
	public function get_success_response( $message = '', $code = 0, $data = null ) {
		return array(
			'code'    => $code,
			'message' => $message,
			'data'  => $data,
		);
	}


	/**
     * Prepare error response for REST API
     * 
	 * @param $message
	 * @param $code
	 * @param $wp_error
	 * 
     * @return array
     * @since 1.0.0
     */  
	public function get_error_response( $message = '', $code = 0, $wp_error = null  ) {
		if ( 0 !== absint( $code ) ) {
			$this->response_code = $code;
		} else if ( empty( $code ) ) {
			$this->response_code = 500;
		}

		$data = array();
		if ( $wp_error instanceof \WP_Error ) {
			$message = $wp_error->get_error_message();
			$data    = $wp_error->get_error_data();
		}

		return new \WP_Error( $this->response_code, $message, array( 'status' => $this->response_code, 'error_data' => $data ) );
	}


	/**
     * User accessability check for REST API
     * 
     * @return bool
     * @since 1.0.0
     */  
	public function rest_permissions_check()
	{
		return true;
	}

}