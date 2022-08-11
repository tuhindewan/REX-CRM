<?php

namespace MRM\Controllers;

use Exception;
use MRM\Controllers\MRM_Base_Controller;
use MRM\Models\MRM_List_Model;
use MRM\Data\MRM_List;
use MRM\Models\Common\MRM_Model_Common;
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
                return $this -> get_success_response(__( 'Insertion successful.', 'mrm' ), 201);
            } else {
                return $this -> get_error_response(__( 'Failed to Insert', 'mrm' ), 400);
            }

        } catch(Exception $e) {
            return $this -> get_error_response(__( 'Query Error', 'mrm' ), 400);
        }   
    }

    /**
     * Function used to handle paginated get and search requests
     * 
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function get_lists(WP_REST_Request $request){
        $this->model = MRM_List_Model::get_instance();
        $query_params   = $request->get_query_params();
        $request_params = $request->get_params();
        $params         = array_replace( $query_params, $request_params );

        $queryParams = $request->get_query_params();
        $page = isset($queryParams['page']) ? absint($queryParams['page']) : 1;
        $perPage = isset($queryParams['per-page']) ? absint($queryParams['per-page']) : 3;
        $offset = ($page - 1) * $perPage;

        $search = $queryParams['search'];
        $page = isset($params['page']) ? $params['page'] : 1;
        $perPage = isset($params['per-page']) ? $params['per-page'] : 3;
        $offset = ($page - 1) * $perPage;
        $search = isset($queryParams['search']) ? sanitize_text_field( $queryParams['search'] ) : '';
        $data = MRM_Model_Common::get_groups( '2', $offset, $perPage, $search );
        if(isset($data)) {
            return $this -> get_success_response(__( 'Query Successful.', 'mrm' ), 201, $data);
        } else {
            return $this -> get_error_response(__( 'Failed to get data', 'mrm' ), 400);
        } 
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
       $id = $urlParams['id'];
 
       
       $data = $this->model->get_list($id);
 
       
       if(isset($data)) {
         return $this -> get_success_response(__('Query Successful.', 'mrm' ), 200, $data);
       } else {
         return $this -> get_error_response(__('Failed to get data.', 'mrm' ), 400);
       }
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
      $id = $urlParams['id'];

      $success = MRM_Model_Common::delete_group($id);

      if($success) {
        return $this -> get_success_response(__( 'Deleted Succesfully.', 'mrm' ), 200);
      } else {
        return $this -> get_error_response(__( 'Failed to delete.', 'mrm' ), 400);
      }
      
    }

    /**
     * Function used to handle delete requests
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function delete_lists(WP_REST_Request $request){
    //get an instance of the model
        $this->model = MRM_List_Model::get_instance();

        // get json body as an array
        $body = $request->get_json_params();
        $listOfIDS = $body['list_ids'];
        $success = MRM_Model_Common::delete_groups($listOfIDS);

        if($success) {
            return $this -> get_success_response(__( 'Deleted Successfully.', 'mrm' ), 200);
        } else {
            return $this -> get_error_response("Failed to Delete", 400);
        }
       
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