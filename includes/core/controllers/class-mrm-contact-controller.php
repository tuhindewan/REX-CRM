<?php

namespace MRM\Controllers;

use MRM\Data\MRM_Contact;
use MRM\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Common\MRM_Common;
use MRM\Models\MRM_Contact_Model;
use League\Csv\Reader;
use League\Csv\Writer;
use MRM\Constants\MRM_Constants;
use MRM\Helpers\Importer\MRM_Importer;



/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-11 11:58:47
 * @modify date 2022-08-11 11:58:47
 * @desc [Manage Contact Module related API callbacks]
 */


class MRM_Contact_Controller extends MRM_Base_Controller {

    use Singleton;

    
    /**
     * CSV data override to this file   
     * 
     * @var string
     * @since 1.0.0
     */
    private $import_file_location = __DIR__.'/../../../../../uploads/import-new.csv';

    /**
     * Export data override to this file
     * 
     * @var string
     * @since 1.0.0
     */
    private $export_file_location = __DIR__.'/../../../../../uploads/contacts.csv';

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
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Email address validation
        $email = isset( $params['email'] ) ? sanitize_text_field( $params['email'] ) : '';

        if ( empty( $email ) ) {
			return $this->get_error_response( __( 'Email address is mandatory', 'mrm' ),  400);
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
                // Existing contact email address check
                $exist = MRM_Contact_Model::is_contact_exist( $email );
                if($exist){
                    return $this->get_error_response( __( 'Email address is already exist', 'mrm' ),  400);
                }
                $contact    = new MRM_Contact( $email, $this->contact_args );
                $contact_id = MRM_Contact_Model::insert( $contact );
            }
             
            if(isset($params['tags'])){
                MRM_Tag_Controller::set_tags_to_contact( $params['tags'], $contact_id );
            }

            if(isset($params['lists'])){
                MRM_List_Controller::set_lists_to_contact( $params['lists'], $contact_id );
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
     * Return a contact details
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_single( WP_REST_Request $request )
    {
        // Get values from API
        $params     = MRM_Common::get_api_params_values( $request );
    
        $contact    = MRM_Contact_Model::get( $params['contact_id'] );

        // Get and merge tags and lists
        if( isset($contact) ) {
            $contact    = MRM_Tag_Controller::get_tags_to_contact( $contact );
            $contact    = MRM_List_Controller::get_lists_to_contact( $contact );
        }
        
        if(isset($contact)) {
            return $this->get_success_response("Query Successfull", 200, $contact);
        }
        return $this->get_error_response("Failed to Get Data", 400);
    }


    /**
     * Return Contacts for list view
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_all( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =  isset( $params['page'] ) ? $params['page'] : 1;
        $perPage    =  isset( $params['per-page'] ) ? $params['per-page'] : 25;
        $offset     =  ($page - 1) * $perPage;

        // Contact Search keyword
        $search   = isset( $params['search'] ) ? sanitize_text_field( $params['search'] ) : '';
        $contacts = MRM_Contact_Model::get_all( $offset, $perPage, $search );

        $contacts['data'] = array_map( function( $contact ){
            $contact = MRM_Tag_Controller::get_tags_to_contact( $contact );
            $contact = MRM_List_Controller::get_lists_to_contact( $contact );
            return $contact;
        }, $contacts['data'] );

        if(isset($contacts)) {
            return $this->get_success_response( __( 'Query Successfull', 'mrm' ), 200, $contacts );
        }
        return $this->get_error_response( __( 'Failed to get data', 'mrm' ), 400 );
    }

    
    /**
     * Delete a contact
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
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
     * @return WP_REST_Response
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
     * Remove tags, lists, and segments from a contact
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_groups( WP_REST_Request $request ) 
    {
        $success = MRM_Contact_Pivot_Controller::get_instance()->delete_groups( $request );

        if($success) {
            return $this->get_success_response( __( 'Tag Removed Successfully', 'mrm' ), 200 );
        }
        return $this->get_error_response( __( 'Failed to Remove', 'mrm' ), 400 );
    }


    /**
     * Export contacts controller
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function export_contacts( WP_REST_Request $request ) {
        try {
            $body = $request->get_json_params();
            $exportJson = json_decode(json_encode($body["export"]), true);
            if(!isset($body) && empty($body["export"])) {
                throw new Exception(__("Export Array with necessary field names is required.", "mrm"));
            }
            if(file_exists($this->export_file_location)) {
                unlink($this->export_file_location);
            } 
            $csvWriter = Writer::createFromPath($this->export_file_location, 'w+');
            // write csv header
            $csvWriter->insertOne($exportJson);
            $page = 1;
            $limit = 25;
            do {
                $offset = ($page - 1) * $limit;
                $data = MRM_Contact_Model::get_all($offset, $limit);
                $totalPages = $data['total_pages'];
                $contactsBatchArray = $data['data'];
                $contactsBatchFiltered = array_map(function($record) use($exportJson){
                    $filtered = array();
                    foreach($record as $key => $value) {
                        if(in_array($key, $exportJson)) {
                            $filtered[$key] = $value;
                        }
                    }
                    return $filtered;
                } , $contactsBatchArray);
                $csvWriter->insertAll($contactsBatchFiltered);

            } while($page++ <= $totalPages);
            
        } catch(Exception $e) {
            return $this->get_error_response(__($e->getMessage(), 'mrm'), 400);
        }
        return $this->get_success_response(__('Export Successful', 'mrm'), 200);
    }

    
    /**
     * Saves the uploaded import file in filesystem
     * sends both csv file attrs and system contacts attrs as an array to user
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function import_contacts_get_attrs( WP_REST_Request $request ) 
    {
        $files = $request->get_file_params();

        try{
            // CSV file upload validation
            if ( !empty($files) && !empty($files["csv"]) ) {
                $csv = $files['csv'];
            } else {
                throw new Exception( __("CSV file not uploaded.", "mrm") );
            }

            // save the file
            move_uploaded_file( $csv['tmp_name'], $this->import_file_location );
            $csv = Reader::createFromPath($this->import_file_location, 'r');
            $csv->setHeaderOffset(0);
            
            $csv_attrs = $csv->getHeader();
            $contact_attrs = MRM_Constants::$contacts_attrs;
            $map_results = array(
                "csv"       => $csv_attrs,
                "contact"   => $contact_attrs
            );
            return $this->get_success_response( __('Import Successful.', "mrm"), 200, $map_results );

        } catch (Exception $e) {
            return $this->get_error_response( __($e->getMessage(), "mrm"), 400 );
        }
    }


    /**
     * Prepare contact object from the uploaded CSV
     * Inseret contcts data into database
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function import_contacts( WP_REST_Request $request ) {

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
        error_log(print_r($params, 1));
        try {
            if(isset( $params ) && empty( $params["map"] )) {
                throw new Exception( __("Map attribute is required.", "mrm") );
            }

            $mapJson = json_decode(json_encode($params["map"]), true);
            $csv = Reader::createFromPath($this->import_file_location, 'r');
            $csv->setHeaderOffset(0);
            $csvContacts = $csv->getRecords();
            
            foreach($csvContacts as $csvContact) {
                // each contact
                $contactArgs = array(
                    'status'    => $params['status'],
                    'source'    => 'csv'
                );
                foreach($mapJson as $map) {
                    $mapArr = json_decode(json_encode($map), true);
                    $source = $mapArr["source"];
                    $target = $mapArr["target"];
                    if($target == "email") {
                      $contactEmail = $csvContact[$source];
                    } else {
                      if(in_array($target, MRM_Constants::$contacts_attrs)){
                        $contactArgs[$target] = $csvContact[$source];
                      } else {
                        // TODO Contact meta table information insertion goes here
                      }
                    }
                }
                $contact    = new MRM_Contact( $contactEmail, $contactArgs );
                $exists     = MRM_Contact_Model::is_contact_exist($contactEmail);
                if(!$exists) {
                    
                    $contact_id = MRM_Contact_Model::insert( $contact );

                    if(isset($params['tags'])){
                        MRM_Tag_Controller::set_tags_to_contact( $params['tags'], $contact_id );
                    }
        
                    if(isset($params['lists'])){
                        MRM_List_Controller::set_lists_to_contact( $params['lists'], $contact_id );
                    }

                }
            }
            return $this->get_success_response(__("Import successful", "mrm"), 200);

        } catch(Exception $e) {
            return $this->get_error_response(__($e->getMessage(), "mrm"), 400);
        }
    }


    /**
     * Get all roles from the WordPress core
     * 
     * @param void
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_native_wp_roles()
    {
        $roles = MRM_Importer::get_wp_roles();

        if( isset($roles) ){
            return $this->get_success_response( __( 'Query Successful.', "mrm" ), 200, $roles );
        }
        return $this->get_error_response( __(  "Failed to retrieve", "mrm" ), 400 );

    }


    /**
     * Import contacts from WordPress
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function import_contacts_native_wp( WP_REST_Request $request ) {

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        try {
            if(!isset( $params ) || !isset( $params["roles"] )) {
                throw new Exception(__("Roles attribute is required.", "mrm"));
            }

            $wp_users = MRM_Importer::get_wp_users( $params["roles"] );

            foreach( $wp_users as $wp_user ) {
                $user_data      = $wp_user->data;
                if( isset( $user_data ) ){
                    $user_metadata  = $user_data->usermeta;
                    $email          = $user_data->user_email;
                }
                
                $contact = new MRM_Contact( $email, array(
                                                "first_name"    => $user_metadata['first_name'],
                                                "last_name"     => $user_metadata['last_name'],
                                                "status"        => $params['status'],
                                                "source"        => 'WordPress'
                                            )
                                        );

                $exists = MRM_Contact_Model::is_contact_exist( $email );
                if(!$exists) {
                    
                    $contact_id = MRM_Contact_Model::insert( $contact );

                    if(isset($params['tags'])){
                        MRM_Tag_Controller::set_tags_to_contact( $params['tags'], $contact_id );
                    }
        
                    if(isset($params['lists'])){
                        MRM_List_Controller::set_lists_to_contact( $params['lists'], $contact_id );
                    }

                }
                
            }
            return $this->get_success_response(__( "Import has been successful", "mrm" ), 200);

        } catch(Exception $e) {
            return $this->get_error_response(__( $e->getMessage(), "mrm" ), 400);
        }
    }


    /**
     * Import contacts from woocommerce customers
     * 
     * 
     * @param WP_REST_Request $request
     * 
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function import_contacts_native_wc( WP_REST_Request $request ) {

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        try {
            $wc_customers = MRM_Importer::get_wc_customers();

            foreach($wc_customers as $wc_customer) {
                
                if( isset( $wc_customer ) ){
                    $email = $wc_customer['email'];
                }

                $contact = new MRM_Contact($email, array(
                                                "first_name"    => $wc_customer['first_name'],
                                                "last_name"     => $wc_customer['last_name'],
                                                "status"        => $params['status'],
                                                "source"        => 'WooCommerce'
                                            )
                                        );

                $exists = MRM_Contact_Model::is_contact_exist( $email );
                if(!$exists) {
                    
                    $contact_id = MRM_Contact_Model::insert( $contact );

                    if(isset($params['tags'])){
                        MRM_Tag_Controller::set_tags_to_contact( $params['tags'], $contact_id );
                    }
        
                    if(isset($params['lists'])){
                        MRM_List_Controller::set_lists_to_contact( $params['lists'], $contact_id );
                    }

                }
            }
            return $this->get_success_response(__( "Import has been successful", "mrm" ), 200);

        } catch(Exception $e) {
            return $this->get_error_response(__( $e->getMessage(), "mrm" ), 400);
        }
    }


    /**
     * Send a message to contact
     * 
     * @param WP_REST_Request $request
     * 
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function send_message( WP_REST_Request $request )
    {
        return MRM_Message_Controller::get_instance()->create_or_update( $request );
    }


    /**
     * Get all emails to a contact
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_all_emails( WP_REST_Request $request )
    {
        return MRM_Message_Controller::get_instance()->get_all( $request );
    }

    /**
     * Return Filtered Contacts for list view
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_filtered_contacts( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =  isset( $params['page'] ) ? $params['page'] : 1;
        $perPage    =  isset( $params['per-page'] ) ? $params['per-page'] : 25;
        $offset     =  ($page - 1) * $perPage;


        // Contact Search keyword
        $search   = isset( $params['search'] ) ? sanitize_text_field( $params['search'] ) : '';
        $contacts = MRM_Contact_Model::get_filtered_contacts( $offset, $perPage, $search ,$params['status'], $params['group_id']);



        $contacts['data'] = array_map( function( $contact ){
            error_log(print_r($contact,1));
            $contact = MRM_Tag_Controller::get_tags_to_contact( $contact );
            $contact = MRM_List_Controller::get_lists_to_contact( $contact );
            return $contact;
        }, $contacts['data'] );

        if(isset($contacts)) {
            return $this->get_success_response( __( 'Query Successfull', 'mrm' ), 200, $contacts );
        }
        return $this->get_error_response( __( 'Failed to get data', 'mrm' ), 400 );
    }


}
