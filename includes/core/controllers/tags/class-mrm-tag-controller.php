<?php

namespace MRM\Controllers\Tags;

use MRM\Models\Tags\MRM_Tag_Model;
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
    public function mrm_create_tag(WP_REST_Request $request){
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();
        $body = $request->get_json_params();
        $this->mrm_tag_model->insert_tag($body);
    }

    /**
     * Create new tag permission
     * 
     * @return bool
     * @since 1.0.0
     */
    public function mrm_create_tag_permissions_check(){
        return true;
    }


    /**
     * Update a tag
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function mrm_update_tag(WP_REST_Request $request){
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();
        $id = $request['id'];
        $body = $request->get_json_params();
        $this->mrm_tag_model->update_tag($id, $body);
    }

    /**
     * Update permission for tags
     * 
     * @return bool
     * @since 1.0.0
     */
    public function mrm_update_tag_permissions_check(){
        return true;
    }
   

    /**
     * Delete request for tags
     * 
     * @param request
     * @return void
     * @since 1.0.0
     */
    public function mrm_delete_tag(WP_REST_Request $request){
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();
        $id = $request['id'];
        $body = $request->get_json_params();
        $this->mrm_tag_model->delete_tag($id, $body);
    }

    /**
     *  Delete permission for tag
     * 
     * @return bool
     * @since 1.0.0
     */
    public function mrm_delete_tag_permissions_check(){
        return true;
    }

    /**
     * Get all tags request for tags
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function mrm_get_all_tags(WP_REST_Request $request){
        $this->mrm_tag_model = MRM_Tag_Model::get_instance();

        $result = $this->mrm_tag_model->get_all_tags($request);

        return rest_ensure_response($result);
    }

    /**
     * Get tag permission for tags
     * 
     * @return bool
     * @since 1.0.0
     */
    public function mrm_get_all_tags_permissions_check(){
        return true;
    }

    /**
     * Get all tags request for tags
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function mrm_get_single_tag(WP_REST_Request $request){
        return rest_ensure_response($request);
    }

    /**
     * Get tag permission for tags
     * 
     * @return bool
     * @since 1.0.0
     */
    public function mrm_get_single_tag_permissions_check(){
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
        return rest_ensure_response($request);
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