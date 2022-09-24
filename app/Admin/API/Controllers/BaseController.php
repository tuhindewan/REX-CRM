<?php

namespace Mint\MRM\Admin\API\Controllers;

use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Abstract class for REST API controller]
 */

abstract class BaseController {

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
	 * @return JSON 
	 */
	public abstract function create_or_update( WP_REST_Request $request );


	/**
	 * Delete a single object
	 * 
	 * @param WP_REST_Request $request
	 * 
	 * @return JSON
	 */
	public abstract function delete_single( WP_REST_Request $request );


	/**
	 * Delete all or multiple objects
	 * 
	 * @param WP_REST_Request $request
	 * 
	 * @return JSON
	 */
	public abstract function delete_all( WP_REST_Request $request );


	/**
	 * Get an object
	 * 
	 * @param WP_REST_Request $request
	 * 
	 * @return JSON
	 */
	public abstract function get_single( WP_REST_Request $request );


	/**
	 * Get all or multipla objects
	 * 
	 * @param WP_REST_Request $request
	 * 
	 * @return JSON
	 */
	public abstract function get_all( WP_REST_Request $request );
  

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
	public function get_success_response( $data = null, $message = '', $code = 201 ) {
		$response =  [
			'code'    	=> $code,
			'message' 	=> $message,
			'data'  	=> $data
		];

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
	public function get_error_response( $message = '', $code = 400 ) {
		$response =  [
			'error'    	=> 'bad_request',
			'message' 	=> $message,
		];

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