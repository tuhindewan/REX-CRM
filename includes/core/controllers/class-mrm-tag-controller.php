<?php

namespace MRM\Controllers;

use MRM\Data\MRM_Tag;
use MRM\Controllers\MRM_Base_Controller;
use MRM\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Common\MRM_Common;
use MRM\Models\MRM_Contact_Group_Model;
use MRM\Models\MRM_Contact_Group_Pivot_Model;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Responsible for managing Tags Module API callbacks]
 */

class MRM_Tag_Controller extends MRM_Base_Controller {
    
    use Singleton;

    /**
     * Get and send response to create a new tag
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Tag title validation
        $title = isset( $params['title'] ) ? sanitize_text_field($params['title']) : NULL;

        if ( empty( $title ) ) {
			$response = __( 'Title is mandatory', 'mrm' );
			return $this->get_error_response( $response,  400);
		}

        // Tag object create and insert or update to database
        try {
            $tag = new MRM_Tag( $params );

            if(isset($params['tag_id'])){
                $success = MRM_Contact_Group_Model::update( $tag, $params['tag_id'], 1 );
            }else{
                $success = MRM_Contact_Group_Model::insert( $tag, 1 );
            }

            if($success) {
                return $this->get_success_response(__( 'Tag has been saved successfully', 'mrm' ), 201);
            }
            return $this->get_error_response(__( 'Failed to save', 'mrm' ), 400);

        } catch(Exception $e) {
                return $this->get_error_response(__( 'Tag is not valid', 'mrm' ), 400);
        }
    }


    /**
     * Delete request for tags
     * 
     * @param request
     * @return void
     * @since 1.0.0
     */
    public function delete_single( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Tag avaiability check
        $exist = MRM_Contact_Group_Model::is_group_exist( $params['tag_id'] );

        if ( !$exist ) {
			$response = __( 'Tag not found', 'mrm' );
			return $this->get_error_response( $response,  400);
		}

        $success = MRM_Contact_Group_Model::destroy( $params['tag_id'] );
        if( $success ) {
            return $this->get_success_response( __( 'Tag has been deleted successfully', 'mrm' ), 200 );
        }

        return $this->get_error_response( __( 'Failed to delete', 'mrm' ), 400 );
    }



    /**
     * Delete multiple tags
     * 
     * @param request
     * @return void
     * @since 1.0.0
     */
    public function delete_all( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $success = MRM_Contact_Group_Model::destroy_all( $params['tag_ids'] );
        if($success) {
            return $this->get_success_response(__( 'Tags has been deleted successfully', 'mrm' ), 200);
        }

        return $this->get_error_response(__( 'Failed to delete', 'mrm' ), 400);
    }


    /**
     * Get all tags request for tags
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function get_all( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =  isset($params['page']) ? $params['page'] : 1;
        $perPage    =  isset($params['per-page']) ? $params['per-page'] : 25;
        $offset     =  ($page - 1) * $perPage;

        // Tag Search keyword
        $search = isset($params['search']) ? sanitize_text_field($params['search']) : '';

        $groups = MRM_Contact_Group_Model::get_all( 1, $offset, $perPage, $search );

        if(isset($groups)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $groups);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);

    }


    /**
     * Function used to handle a single get request
     * 
     * @param $request
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */
    public function get_single( WP_REST_Request $request ){
 
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
    
        $group = MRM_Contact_Group_Model::get( $params['tag_id'] );

        if(isset($group)) {
            return $this->get_success_response("Query Successfull", 200, $group);
        }
        return $this->get_error_response("Failed to Get Data", 400);

    }


    /**
     * Get all contacts related to specific tag
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public function get_contacts(WP_REST_Request $request)
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $results = MRM_Contact_Group_Pivot_Model::get_instance()->get_contacts_to_group( $params['tag_id'] );
        $contacts = array_map(function($result) {
            return $result['contact_id'];
        }, $results);
        
        if(isset($contacts)) {
            return $this->get_success_response("Query Successfull", 200, $contacts);
        } 
        return $this->get_error_response("Failed to Get Data", 400);
    }

}