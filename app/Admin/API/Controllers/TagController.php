<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\MRM\DataBase\Models\ContactGroupModel;
use Mint\MRM\DataStores\TagData;
use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Common\MRM_Common;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Responsible for managing Tags Module API callbacks]
 */

class TagController extends BaseController {
    
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
        $exist = ContactGroupModel::is_group_exist( $params['slug'], 'tags' );
        if ( $exist && !isset($params['tag_id']) ) {
			return $this->get_error_response( __( 'Tag is already available', 'mrm' ),  400);
		}

        // Tag object create and insert or update to database
        try {
            $tag = new TagData( $params );

            if(isset($params['tag_id'])){
                $success = ContactGroupModel::update( $tag, $params['tag_id'], 'tags' );
            }else{
                $success = ContactGroupModel::insert( $tag, 'tags' );
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

        $success = ContactGroupModel::destroy( $params['tag_id'] );
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

        $success = ContactGroupModel::destroy_all( $params['tag_ids'] );
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


        $order_by = isset($params['order-by']) ? strtolower($params['order-by']) : 'id';
        $order_type = isset($params['order-type']) ? strtolower($params['order-type']) : 'desc';

        // valid order by fields and types
        $allowed_order_by_fields = array("title", "created_at");
        $allowed_order_by_types = array("asc", "desc");

        // validate order by fields or use default otherwise
        $order_by = in_array($order_by, $allowed_order_by_fields) ? $order_by : 'id';
        $order_type = in_array($order_type, $allowed_order_by_types) ? $order_type : 'desc';

        $groups = ContactGroupModel::get_all( 'tags', $offset, $perPage, $search, $order_by, $order_type );
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
    
        $group = ContactGroupModel::get( $params['tag_id'] );

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

        $contacts   = ContactPivotController::get_contacts_to_group( $params['tag_id'] );
        
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
     * @return bool
     * @since 1.0.0
     */
    public static function set_tags_to_contact( $tags, $contact_id )
    {
        $pivot_ids = array_map(function ( $tag ) use( $contact_id ) {

            // Create new tag if not exist
            if( filter_var($tag, FILTER_VALIDATE_INT) === false ){

                $slug = MRM_Common::create_slug($tag);
                $exist = ContactGroupModel::is_group_exist( $slug, 'tags' );
                $tag = array(
                    'title' => $tag,
                    'slug'  => $slug,
                    'data'  => null
                );
                if(!$exist){
                    $new_tag    = new TagData($tag);
                    $new_tag_id = ContactGroupModel::insert( $new_tag, 'tags' );
                }
                
            }

            if(isset($new_tag_id)){
                $tag = $new_tag_id;
            }

            return array(
                'group_id'    =>  $tag,
                'contact_id'  =>  $contact_id
            );
            

        }, $tags);
        return ContactPivotController::set_groups_to_contact( $pivot_ids );
    }

    /**
     * Add tags to multiple contacts
     * 
     * @param array $tags
     * @param int $contact_id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function set_tags_to_multiple_contacts( $tags, $contact_ids )
    {
        $res = array_map(function ( $tag ) use( $contact_ids ) {

            // Create new tag if not exist
            if( filter_var($tag, FILTER_VALIDATE_INT) === false ){

                $slug = MRM_Common::create_slug($tag);
                $exist = ContactGroupModel::is_group_exist( $slug, 'tags' );
                $tag = array(
                    'title' => $tag,
                    'slug'  => $slug,
                    'data'  => null
                );
                if(!$exist){
                    $new_tag    = new TagData($tag);
                    $new_tag_id = ContactGroupModel::insert( $new_tag, 'tags' );
                }
                
            }
            $tag = null;
            if(isset($new_tag_id)){
                $tag = $new_tag_id;
            }

            $pivot_ids = array_map(function ($contact_id) use ($tag){
                return array(
                    'group_id'    =>  $tag,
                    'contact_id'  =>  $contact_id
                );
            }, $contact_ids);

            (ContactPivotController::set_groups_to_contact( $pivot_ids ));
            
        }, $tags);
        
        return $res;
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
        $contact_id = isset($contact['contact_id']) ? $contact['contact_id'] : $contact['id'];
        $contact['tags'] = array();
        $results = ContactPivotController::get_instance()->get_groups_to_contact( $contact_id );
        
        if( !empty( $results ) ){

            $tag_ids = array_map( function($tag_id) {
                return $tag_id['group_id'];
            }, $results);
            
            $contact['tags'] = ContactGroupModel::get_groups_to_contact( $tag_ids, 'tags' );
        }
        
        return $contact;
    }

}