<?php

namespace MRM\Controllers;

use Exception;
use MRM\Controllers\MRM_Base_Controller;
use MRM\Data\MRM_List;
use MRM\Models\MRM_Contact_Group_Model;
use MRM\Traits\Singleton;
use WP_REST_Request;
use MRM\Common\MRM_Common;
use MRM\Models\MRM_Contact_Group_Pivot_Model;

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
     * Function used to handle create  or update requests
     * 
     * @param WP_REST_Request $request
     * 
     * @return WP_REST_RESPONSE
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){
        
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // List title validation
        $title = isset( $params['title'] ) ? sanitize_text_field( $params['title'] ) : NULL;
        if (empty($title)) {
            return $this->get_error_response( __( 'Title is mandatory', 'mrm' ),  400);
        }

        // list avaiability check
        $exist = MRM_Contact_Group_Model::is_group_exist( $params['slug'], 2 );
        if ( $exist ) {
			$response = __( 'List is already available', 'mrm' );
			return $this->get_error_response( $response,  400);
		}
        
        // List object create and insert or update to database
        try {
            $list = new MRM_List( $params );

            if(isset($params['list_id'])) {
                $success = MRM_Contact_Group_Model::update( $list, $params['list_id'], 2 );
            } else {
                $success = MRM_Contact_Group_Model::insert( $list, 2 );
            }

            if($success) {
                return $this->get_success_response(__( 'List has been saved successfully', 'mrm' ), 201);
            }
            return $this->get_error_response(__( 'Failed to save', 'mrm' ), 400);

        } catch(Exception $e) {
            return $this -> get_error_response(__( 'List is not valid', 'mrm' ), 400);
        }   
    }


    /**
     * Function used to handle paginated get and search requests
     * 
     * @param WP_REST_Request $request
     * 
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */
    public function get_all( WP_REST_Request $request ){

        //instantiate the model
        $this->model = MRM_Contact_Group_Model::get_instance();

       // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =  isset($params['page']) ? absint( $params['page'] ) : 1;
        $perPage    =  isset($params['per-page']) ? absint( $params['per-page'] ) : 25;
        $offset     =  ($page - 1) * $perPage;

        // List Search keyword
        $search = isset($params['search']) ? sanitize_text_field($params['search']) : '';

        $groups = MRM_Contact_Group_Model::get_all( 2, $offset, $perPage, $search );

        if(isset($groups)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $groups);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400); 
    }


    /**
     * Function used to handle a single get request
     * 
     * @param WP_REST_Request $request
     * 
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */
    public function get_single( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
    
        $group = MRM_Contact_Group_Model::get( $params['list_id'] );
  
        if(isset($group)) {
            return $this -> get_success_response(__('Query Successful.', 'mrm' ), 200, $group);
        }
        return $this -> get_error_response(__('Failed to get data.', 'mrm' ), 400);

    }


    /**
     * Function used to handle delete requests
     * 
     * @param WP_REST_Request $request
     * 
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */
    public function delete_single( WP_REST_Request $request ){
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // List avaiability check
        $exist = MRM_Contact_Group_Model::is_group_exist( $params['slug'], 2 );

        if ( !$exist ) {
			$response = __( 'List not found', 'mrm' );
			return $this->get_error_response( $response,  400);
		}

        $success = MRM_Contact_Group_Model::destroy( $params['list_id'] );
        if( $success ) {
            return $this->get_success_response( __( 'List has been deleted successfully', 'mrm' ), 200 );
        }

        return $this->get_error_response( __( 'Failed to delete', 'mrm' ), 400 );
    }


    /**
     * Function used to handle delete requests
     * 
     * @param WP_RESR_Request
     * 
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */
    public function delete_all( WP_REST_Request $request ){
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $success = MRM_Contact_Group_Model::destroy_all( $params['list_ids'] );
        if($success) {
            return $this->get_success_response(__( 'Lists has been deleted successfully', 'mrm' ), 200);
        }

        return $this->get_error_response(__( 'Failed to delete', 'mrm' ), 400);
       
    }


    /**
     * Add lists to new contact
     * 
     * @param array $lists
     * @param int $contact_id
     * 
     * @return void
     * @since 1.0.0
     */
    public static function set_lists_to_contact( $lists, $contact_id )
    {
        $pivot_ids = array_map(function ( $list ) use( $contact_id ) {

            // Create new tag if not exist
            if( 0 == $list['id'] ){
                $exist = MRM_Contact_Group_Model::is_group_exist( $list['slug'], 2 );
                if(!$exist){
                    $new_list = new MRM_List($list);
                    $new_list_id = MRM_Contact_Group_Model::get_instance()->insert( $new_list, 2 );
                }
                
            }

            if(isset($new_list_id)){
                $list['id'] = $new_list_id;
            }

            return array(
                'group_id'    =>  $list['id'],
                'contact_id'  =>  $contact_id
            );
            

        }, $lists);
        
        MRM_Contact_Group_Pivot_Model::add_groups_to_contact( $pivot_ids );
        
    }


    /**
     * Return lists which are assigned to a contact
     * 
     * @param mixed $contact
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_lists_to_contact( $contact )
    {
        $contact->lists = array();
        $results  = MRM_Contact_Pivot_Controller::get_instance()->get_groups_to_contact( $contact->id );
        $list_ids = array_map( function($list_id) {
            return $list_id['group_id'];
        }, $results);

        $contact->lists = MRM_Contact_Group_Model::get_groups_to_contact( $list_ids, 2 );
        return $contact;
    }
    
}