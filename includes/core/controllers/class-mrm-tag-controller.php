<?php

namespace MRM\Controllers;

use MRM\Data\MRM_Tag;
use MRM\Controllers\MRM_Base_Controller;
use MRM\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Common\MRM_Common;
use MRM\Models\MRM_Contact_Group_Model;

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
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Tag title validation
        $title = isset( $params['title'] ) ? sanitize_text_field($params['title']) : NULL;

        if ( empty( $title ) ) {
			return $this->get_error_response( __( 'Title is mandatory', 'mrm' ),  400);
		}

        // Tag avaiability check
        $exist = MRM_Contact_Group_Model::is_group_exist( $params['slug'], 'tags' );
        if ( $exist && !isset($params['tag_id']) ) {
			return $this->get_error_response( __( 'Tag is already available', 'mrm' ),  400);
		}

        // Tag object create and insert or update to database
        try {
            $tag = new MRM_Tag( $params );

            if(isset($params['tag_id'])){
                $success = MRM_Contact_Group_Model::update( $tag, $params['tag_id'], 'tags' );
            }else{
                $success = MRM_Contact_Group_Model::insert( $tag, 'tags' );
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
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_single( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Tag avaiability check
        $exist = MRM_Contact_Group_Model::is_group_exist( $params['slug'], "tags" );

        if ( !$exist ) {
			return $this->get_error_response( __( 'Tag not found', 'mrm' ),  400);
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
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_all( WP_REST_Request $request ){

        // Get values from API
        $params  = MRM_Common::get_api_params_values( $request );

        $success = MRM_Contact_Group_Model::destroy_all( $params['tag_ids'] );
        if($success) {
            return $this->get_success_response(__( 'Tags has been deleted successfully', 'mrm' ), 200);
        }

        return $this->get_error_response(__( 'Failed to delete', 'mrm' ), 400);
    }


    /**
     * Get all tags request for tags
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
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

        $groups = MRM_Contact_Group_Model::get_all( 'tags', $offset, $perPage, $search );

        if(isset($groups)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $groups);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);

    }


    /**
     * Function used to handle a single get request
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0 
     */
    public function get_single( WP_REST_Request $request ){
 
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
    
        $group = MRM_Contact_Group_Model::get( $params['tag_id'] );

        if(isset($group)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $group);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);

    }


    /**
     * Get all contacts related to specific tag
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_contacts( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $contacts   = MRM_Contact_Pivot_Controller::get_contacts_to_group( $params['tag_id'] );
        
        if(isset($contacts)) {
            return $this->get_success_response("Query Successfull", 200, $contacts);
        } 
        return $this->get_error_response("Failed to Get Data", 400);
    }


    /**
     * Add tags to new contact
     * 
     * @param array $tags
     * @param int $contact_id
     * 
     * @return void
     * @since 1.0.0
     */
    public static function set_tags_to_contact( $tags, $contact_id )
    {
        $pivot_ids = array_map(function ( $tag ) use( $contact_id ) {
    
            // Create new tag if not exist
            if( 0 == $tag['id'] ){

                $exist = MRM_Contact_Group_Model::is_group_exist( $tag['slug'], 'tags' );

                if(!$exist){
                    $new_tag    = new MRM_Tag($tag);
                    $new_tag_id = MRM_Contact_Group_Model::insert( $new_tag, 'tags' );
                }
                
            }

            if(isset($new_tag_id)){
                $tag['id'] = $new_tag_id;
            }

            return array(
                'group_id'    =>  $tag['id'],
                'contact_id'  =>  $contact_id
            );
            

        }, $tags);
        MRM_Contact_Pivot_Controller::set_groups_to_contact( $pivot_ids );
    }


    /**
     * Return tags which are assigned to a contact
     * 
     * @param mixed $contact
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_tags_to_contact( $contact )
    {
        $contact->tags = array();
        $results = MRM_Contact_Pivot_Controller::get_instance()->get_groups_to_contact( $contact->id );
        $tag_ids = array_map( function($tag_id) {
            return $tag_id['group_id'];
        }, $results);

        $contact->tags = MRM_Contact_Group_Model::get_groups_to_contact( $tag_ids, 'tags' );
        return $contact;
    }

}