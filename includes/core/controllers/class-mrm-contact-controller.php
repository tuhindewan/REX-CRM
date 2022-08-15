<?php

namespace MRM\Controllers;

use MRM\Data\MRM_Contact;
use MRM\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Common\MRM_Common;
use MRM\Data\MRM_List;
use MRM\Models\MRM_Contact_Model;
use MRM\Data\MRM_Tag;
use MRM\Models\MRM_Contact_Group_Model;
use MRM\Models\MRM_Contact_Group_Pivot_Model;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-11 11:58:47
 * @modify date 2022-08-11 11:58:47
 * @desc [Handle Contact Module related API callbacks]
 */


class MRM_Contact_Controller extends MRM_Base_Controller {

    use Singleton;

    /**
     * MRM_Contact_Model class object
     * 
     * @var object
     * @since 1.0.0
     */
    public $model;


    /**
     * Contact object arguments
     * 
     * @var object
     * @since 1.0.0
     */
    public $contact_args;


    /**
     * Create a new contact or update a existing contact
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Email address validation
        $email = isset( $params['email'] ) ? sanitize_text_field( $params['email'] ) : '';

        if ( empty( $email ) ) {
			$response = __( 'Email address is mandatory', 'mrm' );

			return $this->get_error_response( $response,  400);
		}

        // Existing contact email address check
        $exist = MRM_Contact_Model::is_contact_exist( $email );
        if($exist){
            $response = __( 'Email address is already exist', 'mrm' );

			return $this->get_error_response( $response,  400);
        }

        $this->contact_args = array(
			'first_name'    =>  isset( $params['first_name'] )  ?   sanitize_text_field($params['first_name'])  : NULL,
            'last_name'     =>  isset( $params['last_name'] )   ?   sanitize_text_field($params['last_name'])   : NULL,
            'phone'         =>  isset( $params['phone'] )       ?   sanitize_text_field($params['phone'])       : NULL,
            'status'        =>  isset( $params['status'] )      ?   sanitize_text_field($params['status'])      : NULL,
            'source'        =>  isset( $params['source'] )      ?   sanitize_text_field($params['source'])      : NULL,
		);

        // Contact object create and insert or update to database
        try {

            if( isset( $params['contact_id']) ){
                $contact_id = MRM_Contact_Model::update( $params['contact_id'], $params['fields'] );
            }else{
                $contact    = new MRM_Contact( $email, $this->contact_args );
                $contact_id = MRM_Contact_Model::insert( $contact );
            }
             
            if(isset($params['tags'])){
                $this->set_tags_to_contact( $params['tags'], $contact_id );
            }

            if(isset($params['lists'])){
                $this->set_lists_to_contact( $params['lists'], $contact_id );
            }

            if($contact_id) {
                return $this->get_success_response(__( 'Contact has been saved successfully', 'mrm' ), 201);
            }
            return $this->get_error_response(__( 'Failed to save', 'mrm' ), 400);

        } catch(Exception $e) {
                return $this->get_error_response(__( 'Contact is not valid', 'mrm' ), 400);
        }
    }


    /**
     * Return Contacts for list view
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public function get_all(WP_REST_Request $request)
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =  isset( $params['page'] ) ? $params['page'] : 1;
        $perPage    =  isset( $params['per-page'] ) ? $params['per-page'] : 25;
        $offset     =  ($page - 1) * $perPage;

        // Contact Search keyword
        $search   = isset($params['search']) ? sanitize_text_field( $params['search'] ) : '';
        $contacts = MRM_Contact_Model::get_all( $offset, $perPage, $search );
        if(isset($contacts)) {
            return $this->get_success_response( __( 'Query Successfull', 'mrm' ), 200, $contacts );
        }
        return $this->get_error_response( __( 'Failed to get data', 'mrm' ), 400 );
    }


    /**
     * TODO: implement this method to get a contact details
     * @param WP_REST_Request $request
     * 
     * @return [type]
     */
    public function get_single( WP_REST_Request $request )
    {
        
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
    private function set_tags_to_contact( $tags, $contact_id )
    {
        $pivot_ids = array_map(function ( $tag ) use( $contact_id ) {

            // Create new tag if not exist
            if( 0 == $tag['id'] ){
                $new_tag = new MRM_Tag($tag['title']);
                $new_tag_id = MRM_Contact_Group_Model::get_instance()->insert( $new_tag, 1 );
            }

            if(isset($new_tag_id)){
                $tag['id'] = $new_tag_id;
            }

            return array(
                'group_id'    =>  $tag['id'],
                'contact_id'  =>  $contact_id
            );
            

        }, $tags);
        
        MRM_Contact_Group_Pivot_Model::add_groups_to_contact( $pivot_ids );
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
    private function set_lists_to_contact( $lists, $contact_id )
    {
        $pivot_ids = array_map(function ( $list ) use( $contact_id ) {

            // Create new tag if not exist
            if( 0 == $list['id'] ){
                $new_list = new MRM_List($list['title']);
                $new_list_id = MRM_Contact_Group_Model::get_instance()->insert( $new_list, 2 );
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
     * Delete a contact
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public function delete_single( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $success = MRM_Contact_Model::destroy( $params['contact_id'] );

        if($success) {
            return $this->get_success_response( __( 'Contact has been deleted successfully', 'mrm' ), 200 );
        } 
        return $this->get_error_response( __( 'Failed to delete', 'mrm' ), 400 );
    }


    /**
     * Delete multiple contacts
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public function delete_all( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $success = MRM_Contact_Model::destroy_all( $params['contact_ids'] );

        if($success) {
            return $this->get_success_response( __( 'Contacts has been deleted successfully', 'mrm' ), 200 );
        }
        return $this->get_error_response( __( 'Failed to Delete', 'mrm' ), 400 );

    }



    /**
     * Remove tags from a contact
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public function delete_groups(WP_REST_Request $request) 
    {
        $success = MRM_Contact_Pivot_Controller::get_instance()->delete_groups( $request );

        if($success) {
            return $this->get_success_response( __( 'Tag Removed Successfully', 'mrm' ), 200 );
        }
        return $this->get_error_response( __( 'Failed to Remove', 'mrm' ), 400 );
    }

}