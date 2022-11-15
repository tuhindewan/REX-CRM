<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
use MRM\Common\MRM_Common;
use WP_REST_Request;


Class BusinessSettingController extends SettingBaseController{


	use Singleton;

	/**
	 * Setiings object arguments
	 *
	 * @var object
	 * @since 1.0.0
	 */
	public $args;

	/**
	 * Get and send response to create a new settings
	 *
	 * @param WP_REST_Request
	 * @return WP_REST_Response
	 * @since 1.0.0
	 */
	public function create_or_update( WP_REST_Request $request ){
		$params = MRM_Common::get_api_params_values( $request );
		error_log(print_r($params,1));

	}


	/**
	 * Function used to handle a single get request
	 *
	 * @param WP_REST_Request
	 * @return WP_REST_Response
	 * @since 1.0.0
	 */
	public function get( $key ){

		error_log(print_r($key,1));

	}

}