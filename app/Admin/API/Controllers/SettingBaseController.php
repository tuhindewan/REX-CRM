<?php

namespace Mint\MRM\Admin\API\Controllers;

use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Abstract class for Settings REST API controller]
 */

abstract class SettingBaseController extends \WP_REST_Controller {

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
	public function get_success_response( $message = '' ) {
		$response =  array(
			'success'    => true,
			'message' => $message
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
	public function get_error_response( $message = '' ) {
		$response =  array(
			'success'    => false,
			'message' => $message
		);
		return rest_ensure_response($response);
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