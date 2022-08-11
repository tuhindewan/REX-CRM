<?php

namespace MRM\Controllers\Tags;

use MRM\Models\Tags\MRM_Tag_Model;
use MRM\Data\MRM_Tag;
use MRM\Controllers\MRM_Base_Controller;
use MRM\Traits\Singleton;
use WP_REST_Request;
use Exception;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */


class MRM_Tag_Controller extends MRM_Base_Controller {
    
    use Singleton;

    /**
     * MRM_Tags class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $mrm_tag_model;


    /**
     * Get and send response to create a new tag
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function create_tag(WP_REST_Request $request){
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();
        $body = $request->get_json_params();

        try {
            $tag = new MRM_Tag($body['title']);
        } catch(Exception $e) {
            return $this->get_error_response('Invalid Data', 400);
        }
        $success = $this->mrm_tag_model->insert_tag_model($tag);

        $result = null;
        if($success) {
            $result = $this -> get_success_response("Insertion successfull", 201);
        } else {
            $result = $this -> get_error_response("Failed to Insert", 400);
        }
        return $result;
    }

    /**
     * Create new tag permission
     * 
     * @return bool
     * @since 1.0.0
     */
    public function create_tag_permissions_check(){
        return true;
    }


    /**
     * Update a tag
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function update_tag(WP_REST_Request $request){
        //get an instance of the model
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();

        // get url parameters
        $urlParams = $request->get_url_params();
        
        // get json body as an array
        $body = $request->get_json_params();


        $id = $urlParams['id'];
        $list = new MRM_Tag($body['title']);

        $success = $this->model->update_tag_model($id, $list);

        $result = null;
        if($success) {
            $result = $this -> get_success_response("Update successfull", 201);
        } else {
            $result = $this -> get_error_response("Failed to Update", 400);
        }
        return $result;
    }

    /**
     * Update permission for tags
     * 
     * @return bool
     * @since 1.0.0
     */
    public function update_tag_permissions_check(){
        return true;
    }
   

    /**
     * Delete request for tags
     * 
     * @param request
     * @return void
     * @since 1.0.0
     */
    public function delete_tag(WP_REST_Request $request){
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();

        $id = $request['id'];

        $success = $this->mrm_tag_model->delete_tag_model($id);

        $result = null;
        if($success) {
            $result = $this -> get_success_response("Delete Successfull", 200);
        } else {
            $result = $this -> get_error_response("Failed to Delete", 400);
        }
        return $result;
    }

    /**
     *  Delete permission for tag
     * 
     * @return bool
     * @since 1.0.0
     */
    public function delete_tag_permissions_check(){
        return true;
    }


    /**
     * Delete multiple tags
     * 
     * @param request
     * @return void
     * @since 1.0.0
     */
    public function delete_multiple_tags(WP_REST_Request $request){
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();

        $body = $request->get_json_params();
        
        $success = $this->mrm_tag_model->delete_multiple_tags_model($body['tag_ids']);

        $result = null;
        if($success) {
            $result = $this -> get_success_response("Delete Successfull", 200);
        } else {
            $result = $this -> get_error_response("Failed to Delete", 400);
        }
        return $result;
    }

    /**
     *  Delete multiple permission for tag
     * 
     * @return bool
     * @since 1.0.0
     */
    public function delete_multiple_tags_permissions_check(){
        return true;
    }

    /**
     * Get all tags request for tags
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function get_all_tags(WP_REST_Request $request){
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();

        $queryParams = $request->get_query_params();

        $page = isset($queryParams['page']) ? $queryParams['page'] : 1;

        $perPage = isset($queryParams['per-page']) ? $queryParams['per-page'] : 3;
        $offset = ($page - 1) * $perPage;
        $limit = $perPage;

        $result = null;
        $data = $this->mrm_tag_model->get_all_tags_model($offset, $limit);
        
        if(isset($data)) {
            $result = $this -> get_success_response("Query successfull", 201, $data);
        } else {
            $result = $this -> get_error_response(400, "Failed to Get Data");
        }
        return $result;
    }

    /**
     * Get tag permission for tags
     * 
     * @return bool
     * @since 1.0.0
     */
    public function get_all_tags_permissions_check(){
        return true;
    }

    /**
     * Function used to handle a single get request
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function get_single_tag(WP_REST_Request $request){
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();
 
        // get url parameters
        $urlParams = $request->get_url_params();
  
  
        $id = $urlParams['id'];
  
        $data = $this->mrm_tag_model->get_single_tag_model($id);

        $result = null;
        if(isset($data)) {
            $result = $this -> get_success_response("Query Successfull", 200, $data);
        } else {
            $result = $this -> get_error_response("Failed to Get Data", 400);
        }
        return $result;

     }

    /**
     * Get single tag permission for tags
     * 
     * @return bool
     * @since 1.0.0
     */
    public function get_single_tag_permissions_check(){
        return true;
    }


    /**
     * Get all tags request for tags
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function get_tag_search_result(WP_REST_Request $request){
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();
        
        $queryParams = $request->get_query_params();

        $page = isset($queryParams['page']) ? $queryParams['page'] : 1;

        $perPage = isset($queryParams['per-page']) ? $queryParams['per-page'] : 3;

        $searchTitle = $queryParams['title'];

        $offset = ($page - 1) * $perPage;
        $limit = $perPage;

        $data = $this->mrm_tag_model->get_tag_search_model($searchTitle, $offset, $limit);
      
        if(isset($data)) {
            $result = $this -> get_success_response("Search successfull", 201, $data);
        } else {
            $result = $this -> get_error_response(400, "Failed to Get Data");
        }
        return $result;
    }

    /**
     * Get tag permission for tags
     * 
     * @return bool
     * @since 1.0.0
     */
    public function get_tag_search_result_permissions_check(){
        return true;
    }

}