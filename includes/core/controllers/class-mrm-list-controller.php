<?php

namespace MRM\Controllers;

use Exception;
use MRM\Controllers\MRM_Base_Controller;
use MRM\Models\MRM_List_Model;
use MRM\Data\MRM_List_Data;
use MRM\Traits\Singleton;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */

class MRM_List_Controller extends MRM_Base_Controller{
    
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
      //instantiate the model
      $this->model = MRM_List_Model::get_instance();

      //get the list body
      $body = $request->get_json_params();

      try {
        $list = new MRM_List_Data($body['title']);
      } catch(Exception $e) {
        return $this->get_error_response('Invalid Data', 400);
      }
      
      $success = $this->model->mrm_insert_list($list);
      
      $result = null;
      if($success) {
        $result = $this -> get_success_response("Insertion successfull", 201);
      } else {
        $result = $this -> get_error_response(400, "Failed to Insert");
      }
      return $result;
    }

    /**
     * Function used to handle update requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function mrm_update_list(WP_REST_Request $request){
      //get an instance of the model
      $this->model = MRM_List_Model::get_instance();

      // get url parameters
      $urlParams = $request->get_url_params();
      
      // get json body as an array
      $body = $request->get_json_params();


      $id = $urlParams['id'];
      $list = new MRM_List_Data($body['title']);

      $success = $this->model->mrm_update_list($id, $list);

      $result = null;
      if($success) {
        $result = $this -> get_success_response("Update successfull", 201);
      } else {
        $result = $this -> get_error_response("Failed to Update", 400);
      }
      return $result;
    }

    /**
     * Function used to handle get requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function mrm_get_lists(WP_REST_Request $request){
      $this->model = MRM_List_Model::get_instance();
      // get json body as an array
      $body = $request->get_json_params();
      $queryParams = $request->get_query_params();
      $page = isset($queryParams['page']) ? $queryParams['page'] : 1;
      $perPage = isset($queryParams['per-page']) ? $queryParams['per-page'] : 3;
      $offset = ($page - 1) * $perPage;
      $limit = $perPage;
      $result = null;
      $data = $this->model->mrm_get_lists($offset, $limit);
      
      if(isset($data)) {
        $result = $this -> get_success_response("Update successfull", 201, $data);
      } else {
        $result = $this -> get_error_response(400, "Failed to Update");
      }
      return rest_ensure_response($result);
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