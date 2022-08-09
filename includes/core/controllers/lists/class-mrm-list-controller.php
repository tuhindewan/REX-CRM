<?php

namespace MRM\Controllers\Lists;

use MRM\Models\Lists\MRM_List_Model;
use MRM\Traits\Singleton;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */

class MRM_List_Controller {
    
    use Singleton;
    
    public $model = MRM_List_Model::get_instance();
    /**
     * Function used to handle create requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function mrm_create_list(WP_REST_Request $request){
      $queryParams = $request->get_query_params();
      $body = $request->get_json_params();
      error_log(print_r($body, 1));
      return rest_ensure_response($request);
    }

    /**
     * Function used to handle update requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */
    public function mrm_update_list(WP_REST_Request $request){
      $queryParams = $request->get_query_params();
      $body = $request->get_json_params();
      error_log(print_r($body, 1));
      return rest_ensure_response($request);
    }

    /**
     * Function used to handle get requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function mrm_get_lists(WP_REST_Request $request){
      $queryParams = $request->get_query_params();
      $body = $request->get_json_params();
      error_log(print_r($body, 1));
      return rest_ensure_response($request);
    }

    /**
     * Function used to handle a single get request
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function mrm_get_list(WP_REST_Request $request){
      $queryParams = $request->get_query_params();
      $body = $request->get_json_params();
      error_log(print_r($body, 1));
      return rest_ensure_response($request);
    }

    /**
     * Function used to handle delete requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function mrm_delete_list(WP_REST_Request $request){
      $queryParams = $request->get_query_params();
      $body = $request->get_json_params();
      error_log(print_r($body, 1));
      return rest_ensure_response($request);
    }

    public function mrm_list_permissions_check(){
        return true;
    }
}