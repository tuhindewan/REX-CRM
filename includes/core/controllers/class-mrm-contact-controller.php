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
use League\Csv\Reader;
use League\Csv\Writer;
use MRM\Constants\MRM_Constants;

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
    private $import_file_location = __DIR__.'/../../../tmp/new.csv';
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
     * Return a contact details
     * @param WP_REST_Request $request
     * 
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_single( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
    
        $contact = MRM_Contact_Model::get( $params['contact_id'] );

        // Get tags and lists
        $tags   = $this->get_tags_to_contact( $params['contact_id'] );
        $lists  = $this->get_lists_to_contact( $params['contact_id'] );

        if(isset($contact)) {
            return $this->get_success_response("Query Successfull", 200, $contact);
        }
        return $this->get_error_response("Failed to Get Data", 400);
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

                $exist = MRM_Contact_Group_Model::is_group_exist( $tag['slug'], 1 );

                if(!$exist){
                    $new_tag    = new MRM_Tag($tag);
                    $new_tag_id = MRM_Contact_Group_Model::get_instance()->insert( $new_tag, 1 );
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
        
        MRM_Contact_Group_Pivot_Model::add_groups_to_contact( $pivot_ids );
    }



    /**
     * Return tags which are assigned to a contact
     * 
     * @param mixed $contact_id
     * 
     * @return array
     * @since 1.0.0
     */
    private function get_tags_to_contact( $contact_id )
    {
        $results = MRM_Contact_Pivot_Controller::get_instance()->get_groups_to_contact( $contact_id );
        $tag_ids = array_map( function($tag_id) {
            return $tag_id['group_id'];
        }, $results);

        return MRM_Tag_Controller::get_instance()->get_tags_to_contact( $tag_ids );
        
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
     * @param mixed $contact_id
     * 
     * @return array
     * @since 1.0.0
     */
    private function get_lists_to_contact( $contact_id )
    {
        $results  = MRM_Contact_Pivot_Controller::get_instance()->get_groups_to_contact( $contact_id );
        $list_ids = array_map( function($list_id) {
            return $list_id['group_id'];
        }, $results);

        return MRM_List_Controller::get_instance()->get_lists_to_contact( $list_ids );
        
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


    /**
     * Export contacts controller
     * 
     * @param WP_REST_Request $request
     * 
     * @return void
     * @since 1.0.0
     */
    public function export_contacts(WP_REST_Request $request) {
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
     * 
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function import_contacts_get_attrs(WP_REST_Request $request) {

        $files = $request->get_file_params();

        try{
            // CSV file upload validation
            if (!empty($files) && !empty($files["csv"])) {
                $csv = $files['csv'];
            } else {
                throw new Exception(__("CSV file not uploaded.", "mrm"));
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
            return $this->get_success_response(__('Import Successful.', "mrm"), 200, $map_results);

        } catch (Exception $e) {
            return $this->get_error_response(__($e->getMessage(), "mrm"), 400);
        }
    }


    /**
     * Prepare contact object from the uploaded CSV
     * Inseret contcts data into database
     * 
     * @param WP_REST_Request $request
     * 
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function import_contacts(WP_REST_Request $request) {

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        try {
            if(!isset( $params ) && empty( $params["map"] )) {
                throw new Exception(__("Map attribute is required.", "mrm"));
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
                $exists = MRM_Contact_Model::is_contact_exist($contactEmail);
                if(!$exists) {
                    
                    $contact_id = MRM_Contact_Model::insert( $contact );

                    if(isset($params['tags'])){
                        $this->set_tags_to_contact( $params['tags'], $contact_id );
                    }
        
                    if(isset($params['lists'])){
                        $this->set_lists_to_contact( $params['lists'], $contact_id );
                    }

                }
            }
            return $this->get_success_response(__("Import successful", "mrm"), 200);

        } catch(Exception $e) {
            return $this->get_error_response(__($e->getMessage(), "mrm"), 400);
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
    public function send_message(WP_REST_Request $request)
    {
        error_log(print_r($request, 1));
    }


}
