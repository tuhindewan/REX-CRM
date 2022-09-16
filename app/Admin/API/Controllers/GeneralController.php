<?php

namespace Mint\MRM\Admin\API\Controllers;

use Exception;
use Mint\MRM\DataBase\Models\ContactGroupModel;
use Mint\MRM\DataBase\Models\ContactModel;
use Mint\MRM\DataStores\ListData;
use Mint\MRM\DataStores\TagData;
use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;
use MRM\Common\MRM_Common;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */

class GeneralController{

    use Singleton;

    /**
     * Function used to handle paginated get and search requests
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_general_count( WP_REST_Request $request ){
         // Get values from API
         $params = MRM_Common::get_api_params_values( $request );

         $lists = ContactGroupModel::get_all( 'lists' );
         $tags = ContactGroupModel::get_all( 'tags' );
         $contacts = ContactModel::get_all( 'contacts' );

         $data = array(
            'total_contacts' => isset($contacts['count']) ? $contacts['count']: 0,
            'total_lists'    => isset($lists['count']) ? $lists['count'] : 0,
            'total_tags'     => isset($tags['count']) ? $tags['count'] : 0
         );

         if(isset($lists) && isset($tags) && isset($contacts)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $data);
         }
         return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);

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
}