<?php

namespace MRM\Controllers\Tags;

use MRM\Models\Tags\MRM_Tag_Model;
use MRM\Controllers\MRM_Base_Controller;
use MRM\Traits\Singleton;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */


class MRM_Tag_Controller {
    
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
        $this->mrm_tag_model->insert_tag_model($body);
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
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();
        $id = $request['id'];
        $body = $request->get_json_params();
        $this->mrm_tag_model->update_tag_model($id, $body);
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
        $body = $request->get_json_params();
        $this->mrm_tag_model->delete_tag_model($id, $body);
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

        $idArray = $request->get_json_params();
        
        $this->mrm_tag_model->delete_multiple_tags_model($idArray);
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

        $result = $this->mrm_tag_model->get_all_tags_model($offset, $limit);
      
        return rest_ensure_response($result);
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
        $this->model = MRM_Tag_Model::get_instance();
 
        // get url parameters
        $urlParams = $request->get_url_params();
  
  
        $id = $urlParams['id'];
  
        $data = $this->model->get_single_tag_model($id);

        return $data;
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

        $result = $this->mrm_tag_model->get_tag_search_model($searchTitle, $offset, $limit);
      
        return rest_ensure_response($result);
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