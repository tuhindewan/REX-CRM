<?php

namespace MRM\Controllers\Lists;

use Exception;
use MRM\Models\Lists\MRM_List_Model;
use MRM\Data\Lists\MRM_List_Data;
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
    
    /**
     * holds the model instance for database related queries
     * @var MRM_List_Model
     * @since 1.0.0 
     */

    public $model;
    
    
    
    /**
     * Function used to handle create requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function mrm_create_list(WP_REST_Request $request){
      $this->model = MRM_List_Model::get_instance();
      try {
        $result = $this->model->mrm_insert_list("hello");
      } catch(Exception $e) {

      }
      error_log(print_r($result, 1));
      $queryParams = $request->get_query_params();
      $body = $request->get_json_params();
      error_log(print_r($body, 1));
      error_log(print_r($this->model, 1));
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

    /**
     * Function used check whether the given user has permission to acces the endpoing
     * @return boolean
     * @since 1.0.0 
     */
    public function mrm_lists_permissions_check(){
        return true;
    }
}