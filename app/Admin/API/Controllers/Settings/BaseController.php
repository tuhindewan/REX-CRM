<?php

namespace Mint\MRM\Admin\API\Controllers\Settings;

use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Abstract class for Settings REST API controller]
 */

abstract class BaseController extends \WP_REST_Controller {

	/**
     * REST API response code
     * 
     * @var integer
     * @since 1.0.0
     */
  	private $response_code = 200;


	/**
	 * Create or update an object
	 * 
	 * @param WP_REST_Request $request
	 * 
	 * @return WP_REST_Response 
	 */
	public abstract function create_or_update( WP_REST_Request $request );


	/**
	 * Get an object
	 * 
	 * @param string $key
	 * 
	 * @return WP_REST_Response
	 */
	public abstract function get( $key );


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
		$response =  array(
			'code'    => $code,
			'message' => $message,
			'data'  => $data,
		);

		return rest_ensure_response($response);
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