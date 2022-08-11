<?php

namespace MRM\Controllers;

use Exception;
use MRM\Controllers\MRM_Base_Controller;
use MRM\Models\MRM_List_Model;
use MRM\Data\MRM_List;
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
     * Function used to handle create  or updaterequests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function create_or_update_list(WP_REST_Request $request){
        //instantiate the model
        $this->model = MRM_List_Model::get_instance();
        // get query paramaters 
        $queryParams   = $request->get_query_params();
        // get url parameters
        $urlParams   = $request->get_url_params();  
        //get the list body
        $body = $request->get_json_params();
        $id = $urlParams['id'];
        $title = sanitize_text_field($body['title']);
        if (empty($title)) {
            return $this->get_error_response( __( 'Title is mandatory', 'mrm' ),  400);
        }
            
        try {
            $list = new MRM_List($title);
            if(isset($id)) {
                $success = $this->model->update_list($id, $list);
            } else {
                $success = $this->model->insert_list($list);
            }

            if($success) {
                return $this -> get_success_response("Insertion successfull", 201);
            } else {
                return $this -> get_error_response("Failed to Insert", 400);
            }

        } catch(Exception $e) {
            return $this -> get_error_response("Failed to Insert", 400);
        }   
    }

    /**
     * Function used to handle update requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function update_list(WP_REST_Request $request){
      //get an instance of the model
      $this->model = MRM_List_Model::get_instance();

      // get url parameters
      $urlParams = $request->get_url_params();
      
      // get json body as an array
      $body = $request->get_json_params();


      $id = $urlParams['id'];
      $list = new MRM_List($body['title']);

      $success = $this->model->update_list($id, $list);

      $result = null;
      if($success) {
        $result = $this -> get_success_response("Update successfull", 201);
      } else {
        $result = $this -> get_error_response("Failed to Update", 400);
      }
      return $result;
    }

    /**
     * Function used to handle paginated get requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function get_lists(WP_REST_Request $request){
      $this->model = MRM_List_Model::get_instance();
      // get json body as an array
      $body = $request->get_json_params();
      $queryParams = $request->get_query_params();
      $page = isset($queryParams['page']) ? $queryParams['page'] : 1;
      $perPage = isset($queryParams['per-page']) ? $queryParams['per-page'] : 3;
      $offset = ($page - 1) * $perPage;
      $limit = $perPage;
      $result = null;
      $data = $this->model->get_lists($offset, $limit);
      
      if(isset($data)) {
        $result = $this -> get_success_response("Query successfull", 201, $data);
      } else {
        $result = $this -> get_error_response(400, "Failed to Get Data");
      }
      return $result;
    }

    /**
     * Function used to handle a single get request
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function get_list(WP_REST_Request $request){
       //get an instance of the model
       $this->model = MRM_List_Model::get_instance();

       // get url parameters
       $urlParams = $request->get_url_params();
       
       // get json body as an array
       $body = $request->get_json_params();
 
 
       $id = $urlParams['id'];
 
       $data = $this->model->get_list($id);
 
       $result = null;
       if(isset($data)) {
         $result = $this -> get_success_response("Query Successfull", 200, $data);
       } else {
         $result = $this -> get_error_response("Failed to Get Data", 400);
       }
       return $result;
    }

    /**
     * Function used to handle delete requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function delete_list(WP_REST_Request $request){
      //get an instance of the model
      $this->model = MRM_List_Model::get_instance();

      // get url parameters
      $urlParams = $request->get_url_params();
      
      // get json body as an array
      $body = $request->get_json_params();


      $id = $urlParams['id'];

      $success = $this->model->delete_list($id);

      $result = null;
      if($success) {
        $result = $this -> get_success_response("Delete Successfull", 200);
      } else {
        $result = $this -> get_error_response("Failed to Delete", 400);
      }
      return $result;
    }

    /**
     * Function used to handle delete requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function delete_lists(WP_REST_Request $request){
      //get an instance of the model
      $this->model = MRM_List_Model::get_instance();

      // get url parameters
      $urlParams = $request->get_url_params();
      
      // get json body as an array
      $body = $request->get_json_params();

      $listOfIDS = $body['list_ids'];
      $success = $this->model->delete_lists($listOfIDS);
      $result = null;
      if($success) {
        $result = $this -> get_success_response("Delete Successfull", 200);
      } else {
        $result = $this -> get_error_response("Failed to Delete", 400);
      }
      return $result;
    }

    /**
     * Function used to handle search requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function search_lists(WP_REST_Request $request){
      $this->model = MRM_List_Model::get_instance();
      // get json body as an array
      $body = $request->get_json_params();
      $queryParams = $request->get_query_params();
      $title = $queryParams['title'];
      $page = isset($queryParams['page']) ? $queryParams['page'] : 1;
      $perPage = isset($queryParams['per-page']) ? $queryParams['per-page'] : 3;
      $offset = ($page - 1) * $perPage;
      $limit = $perPage;
    
      $data = $this->model->search_lists($title, $offset, $limit);
      
      if(isset($data)) {
        $result = $this -> get_success_response("Search successfull", 201, $data);
      } else {
        $result = $this -> get_error_response(400, "Failed to Get Data");
      }
      return $result;
    }


    /**
     * Function used check whether the given user has permission to acces the endpoing
     * @return boolean
     * @since 1.0.0 
     */
    public function lists_permissions_check(){
        return true;
    }
}