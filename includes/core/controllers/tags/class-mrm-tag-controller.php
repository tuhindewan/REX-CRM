<?php

namespace MRM\Controllers\Tags;

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
     * Create a new tag
     * 
     * @return JSON
     * @since 1.0.0
     */
    public function mrm_create_tag(WP_REST_Request $request){
        return rest_ensure_response($request);
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
     * @return JSON
     * @since 1.0.0
     */
    public function mrm_update_tag(WP_REST_Request $request){
        return rest_ensure_response($request);
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
     * @return void
     * @since 1.0.0
     */
    public function mrm_delete_tag(WP_REST_Request $request){
        return rest_ensure_response($request);
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
     * @return JSON
     * @since 1.0.0
     */
    public function mrm_get_all_tags(WP_REST_Request $request){
        return rest_ensure_response($request);
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

}