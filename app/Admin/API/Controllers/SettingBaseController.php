<?php
/**
 * REST API Setting Base Controller
 *
 * Core base controller for managing and interacting with REST API items.
 *
 * @author   MRM Team
 * @category API
 * @package  MRM
 * @since    1.0.0
 */

namespace Mint\MRM\Admin\API\Controllers;

use WP_REST_Request;

/**
 * This is the core class that defines abstract function for child controllers
 *
 * @package Mint\MRM\Admin\API\Controllers
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
	 * @param WP_REST_Request $request Request object used to generate the response.
	 *
	 * @return WP_REST_Response
	 */
	abstract public function create_or_update( WP_REST_Request $request );


	/**
	 * Get an object
	 *
	 * @param WP_REST_Request $request Request object used to generate the response.
	 *
	 * @return WP_REST_Response
	 */
	abstract public function get( WP_REST_Request $request );


	/**
	 * Prepare success response for REST API
	 *
	 * @param string $message Response success message.
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function get_success_response( $message = '' ) {
		$response = array(
			'success' => true,
			'message' => $message,
		);

		return rest_ensure_response( $response );
	}


	/**
	 * Prepare success response with data for REST API
	 *
	 * @param array $settings Array of settings information.
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function get_success_response_data( $settings ) {
		$settings['success'] = true;
		return rest_ensure_response( $settings );
	}


	/**
	 * Prepare error response for REST API
	 *
	 * @param string $message Response error message.
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function get_error_response( $message = '' ) {
		$response = array(
			'success' => false,
			'message' => $message,
		);
		return rest_ensure_response( $response );
	}


	/**
	 * User accessability check for REST API
	 *
	 * @return bool
	 * @since 1.0.0
	 */
	public function rest_permissions_check() {
		return true;
	}

}
