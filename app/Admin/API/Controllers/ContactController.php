<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\MRM\DataBase\Models\ContactModel;
use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;
use Exception;
use Mint\MRM\DataStores\ContactData;
use MRM\Common\MRM_Common;
use MRM\Helpers\Importer\MRM_Importer;



/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-11 11:58:47
 * @modify date 2022-08-11 11:58:47
 * @desc [Manage Contact Module related API callbacks]
 */


class ContactController extends BaseController {

    use Singleton;

    
    /**
     * CSV data override to this file   
     * 
     * @var string
     * @since 1.0.0
     */
    private $import_file_location;

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
        // Contact object create and insert or update to database
        try {

            if( isset( $params['contact_id']) ){

                $contact_id = isset( $params['contact_id'] ) ? $params['contact_id'] : '';
                $contact_id = ContactModel::update( $params, $contact_id );

            }else{
                // Existing contact email address check
                if ( empty( $email ) ) {
                    return $this->get_error_response( __( 'Email address is mandatory', 'mrm' ),  200);
                }

                $exist = ContactModel::is_contact_exist( $email );
                if($exist){
                    return $this->get_error_response( __( 'Email address already assigned to another contact.', 'mrm' ),  200);
                }
    
                $contact    = new ContactData( $email, $params );
                $contact_id = ContactModel::insert( $contact );
                if( isset( $params['status'][0] ) && 'pending' == $params['status'][0] ){
                    MessageController::get_instance()->send_double_opt_in( $contact_id );
                }
            }
             
            if(isset($params['tags'])){
                TagController::set_tags_to_contact( $params['tags'], $contact_id );
            }

            if(isset($params['lists'])){
                ListController::set_lists_to_contact( $params['lists'], $contact_id );
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
    
        $contact    = ContactModel::get( $params['contact_id'] );
        
        // Get and merge tags and lists
        if( isset($contact) ) {
            $contact    = TagController::get_tags_to_contact( $contact );
            $contact    = ListController::get_lists_to_contact( $contact );
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
        $perPage    =  isset( $params['per-page'] ) ? $params['per-page'] : 10;
        $offset     =  ($page - 1) * $perPage;

        // Contact Search keyword
        $search     = isset( $params['search'] ) ? $params['search'] : '';
                
        $contacts   = ContactModel::get_all( $offset, $perPage, $search );

        $contacts['data'] = array_map( function( $contact ){
            $contact = TagController::get_tags_to_contact( $contact );
            $contact = ListController::get_lists_to_contact( $contact );
            return $contact;
        }, $contacts['data'] );

        $contacts['current_page'] = (int) $page;

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

        $success = ContactModel::destroy( $params['contact_id'] );

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

        $success = ContactModel::destroy_all( $params['contact_ids'] );

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
        $success = ContactPivotController::get_instance()->delete_groups( $request );
        
        if($success) {
            return $this->get_success_response( __( 'Tag Removed Successfully', 'mrm' ), 200 );
        }
        return $this->get_error_response( __( 'Failed to Remove', 'mrm' ), 400 );
    }


    /**
     * Set tags, lists, and segments from a contact
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function set_groups( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        if( isset( $params['tags'] ) ){
            $success = TagController::set_tags_to_contact( $params['tags'], $params['contact_id'] );
        }

        if( isset( $params['lists'] ) ){
            $success = ListController::set_lists_to_contact( $params['lists'], $params['contact_id'] );
        }


        if($success) {
            return $this->get_success_response( __( 'Tag added Successfully', 'mrm' ), 200 );
        }
        return $this->get_error_response( __( 'Failed to add', 'mrm' ), 400 );
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
                $data = ContactModel::get_all($offset, $limit);
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
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
        $params['files'] = $request->get_file_params();

        $files  = isset( $params['files'] ) ? $params['files']: '';

        $csv_mimes = MRM_Common::csv_mimes();
        
        // CSV file upload validation
        if ( empty( $files ) || 
            ! is_array( $files['csv'] ) || 
            ! is_uploaded_file( $files['csv']['tmp_name'] ) || 
            ! in_array( $files['csv']['type'], $csv_mimes ) 
            ) {
			return $this->get_error_response( __( 'Please upload a CSV first', 'mrm' ) );
		}

        try{
            $delimiter = isset( $params['delimiter'] ) && ! empty( $params['delimiter'] ) ? $params['delimiter'] : 'comma';

            if ($delimiter == 'comma') {
                $delimiter = ',';
            } else {
                $delimiter = ';';
            }

            $import_res = MRM_Importer::create_csv_from_import( $files['csv'], $delimiter );

            if ( ! is_array( $import_res ) ) {
                return $this->get_error_response( is_string( $import_res ) ? $import_res : __( 'Unknown error occurred', 'mrm' ), null, 500 );
            }

            $this->import_file_location = isset( $import_res['file'] ) ? $import_res['file'] : "";

            $options = MRM_Importer::prepare_mapping_options_from_csv( $this->import_file_location, $import_res['delimiter'] );

            if( isset( $options['headers'] ) && empty( $options['headers'] ) ){
                return $this->get_error_response( __( "File is incompatible.", "mrm"), 400 );
            }
            $result = array(
                'headers'   => $options['headers'],
                'fields'    => isset( $options['fields'] ) ? $options['fields'] : "",
                'file'      => isset( $import_res['new_file_name'] ) ? $import_res['new_file_name'] : ""
            );
            return $this->get_success_response( __( 'File has been uploaded successfully.', "mrm" ), 200, $result );

        } catch (Exception $e) {

            return $this->get_error_response( __( $e->getMessage(), "mrm" ), 400 );
        }
    }

    /**
     * Parse raw csv data and send the headers back to the user
     *
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function import_contacts_raw_get_attrs( WP_REST_Request $request ) 
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $files  = isset( $params['files'] ) ? $params['files']: '';

        $csv_mimes = MRM_Common::csv_mimes();
        

        try{
            $delimiter = isset( $params['delimiter'] ) && ! empty( $params['delimiter'] ) ? $params['delimiter'] : 'comma';

            if ($delimiter == 'comma') {
                $delimiter = ',';
            } else {
                $delimiter = ';';
            }

            $import_res = MRM_Importer::create_csv_from_import( $files['csv'], $delimiter );

            if ( ! is_array( $import_res ) ) {
                return $this->get_error_response( is_string( $import_res ) ? $import_res : __( 'Unknown error occurred', 'mrm' ), null, 500 );
            }

            $this->import_file_location = $import_res['file'];

            $options = MRM_Importer::prepare_mapping_options_from_csv( $this->import_file_location, $import_res['delimiter'] );

            if( isset( $options['headers'] ) && empty( $options['headers'] ) ){
                return $this->get_error_response( __( "File is incompatible.", "mrm"), 400 );
            }
            $result = array(
                'headers'   => $options['headers'],
                'fields'    => isset( $options['fields'] ) ? $options['fields'] : "",
                'file'      => isset( $import_res['new_file_name'] ) ? $import_res['new_file_name'] : ""
            );
            return $this->get_success_response( __( 'File has been uploaded successfully.', "mrm" ), 200, $result );

        } catch (Exception $e) {

            return $this->get_error_response( __( $e->getMessage(), "mrm" ), 400 );
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
        try {
            if(isset( $params ) && empty( $params["map"] )) {
                throw new Exception( __("Map attribute is required.", "mrm") );
            }

            $mappings    = json_decode(json_encode($params["map"]), true);

            $file       = MRM_IMPORT_DIR . '/' . $params['file'];


            // if the file does not exist return error
            if(!file_exists($file)) {
                throw new Exception( __("The File is not found on this server.", "mrm") );
            }

            // open the file stream
            $handle = fopen($file, "r");

      
            // fetch the first line
            $raw_string = fgets($handle);

            // parse it to and get the header
            $header = str_getcsv($raw_string);

            $skipped = 0;
            $exists = 0;
            $totalCount = 0;
            // Iterate over every line of the file
            while (($raw_string = fgets($handle)) !== false) {
                // Parse the raw csv string as an array
                $row = str_getcsv($raw_string);


                // check if header and the current row has same length otherwise skip to the next iteration
                if(count($header) !== count($row)) {
                    $skipped++;
                    $totalCount++;
                    continue;
                }
                // combine header and values to make a contact associative array
                $csv_contact = array_combine($header, $row);
                $contact_args = array(
                    'status'    => $params['status'],
                    'source'    => 'csv',
                    'meta_fields'   => []
                );

                foreach($mappings as $map) {

                    $map_array = json_decode(json_encode($map), true);

                    if( in_array( $map_array["target"], array( "first_name", "last_name", "email" ) ) ){
                        $contact_args[$map_array["target"]] = $csv_contact[$map_array["source"]];
                    } else {
                        $contact_args['meta_fields'][$map_array["target"]] = $csv_contact[$map_array["source"]];
                    }
                }
                if (!array_key_exists('email', $contact_args)) {
                    return $this->get_error_response( __("The email field is required.", "mrm"), 400 );
                }
                $contact_email = trim($contact_args['email']);
                if ($contact_email && is_email( $contact_email )) {

                    $is_exists = ContactModel::is_contact_exist( $contact_email );

                    if(!$is_exists){
                        $contact    = new ContactData( $contact_email, $contact_args );
                        $contact_id = ContactModel::insert( $contact );
                        if( isset( $contact_args['status'][0] ) && 'pending' == $contact_args['status'][0] ){
                            MessageController::get_instance()->send_double_opt_in( $contact_id );
                        }
                        if(isset($params['tags'])){
                            TagController::set_tags_to_contact( $params['tags'], $contact_id );
                        }
            
                        if(isset($params['lists'])){
                            ListController::set_lists_to_contact( $params['lists'], $contact_id );
                        }
                    }else {
                        $exists++;
                    }
                    
                }else {
                    $skipped++;
                }
                $totalCount++;
            }
            fclose($handle);
            /**
             * Prepare data for sucess response
             */
            $result = array(
                'total'                => $totalCount,
                'skipped'              => $skipped,
                'existing_contacts'    => $exists,
            );

            wp_delete_file( $file );

            return $this->get_success_response(__("Import contact has been successful", "mrm"), 200, $result);

        } catch(Exception $e) {
            error_log(print_r($e,1));
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
                
                $contact = new ContactData( $email, array(
                                                "first_name"    => $user_metadata['first_name'],
                                                "last_name"     => $user_metadata['last_name'],
                                                "status"        => $params['status'],
                                                "source"        => 'WordPress'
                                            )
                                        );

                $exists = ContactModel::is_contact_exist( $email );
                if(!$exists) {
                    
                    $contact_id = ContactModel::insert( $contact );

                    if(isset($params['tags'])){
                        TagController::set_tags_to_contact( $params['tags'], $contact_id );
                    }
        
                    if(isset($params['lists'])){
                        ListController::set_lists_to_contact( $params['lists'], $contact_id );
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

                $contact = new ContactData($email, array(
                                                "first_name"    => $wc_customer['first_name'],
                                                "last_name"     => $wc_customer['last_name'],
                                                "status"        => $params['status'],
                                                "source"        => 'WooCommerce'
                                            )
                                        );

                $exists = ContactModel::is_contact_exist( $email );
                if(!$exists) {
                    
                    $contact_id = ContactModel::insert( $contact );

                    if(isset($params['tags'])){
                        TagController::set_tags_to_contact( $params['tags'], $contact_id );
                    }
        
                    if(isset($params['lists'])){
                        ListController::set_lists_to_contact( $params['lists'], $contact_id );
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
        return MessageController::get_instance()->create_or_update( $request );
    }


    /**
     * Send double opt-in email for pending status
     * 
     * @param WP_REST_Request $request
     * 
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function send_double_opt_in( WP_REST_Request $request )
    {
        // Get values from API
        $params     = MRM_Common::get_api_params_values( $request );
        $contact_id = isset( $params['contact_id'] ) ? $params['contact_id'] : "";
        $success    = MessageController::get_instance()->send_double_opt_in( $contact_id  );
        
        if( 1 == $success) {
            return $this->get_success_response("Double Optin email has been sent", 200);
        }
        return $this->get_error_response("Failed to send double optin email", 400);
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
        return MessageController::get_instance()->get_all( $request );
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

        $group_id = isset( $params['group_id'] ) ? $params['group_id'] : array(); 
        $contacts = ContactModel::get_filtered_contacts( $params['status'], $group_id, $perPage, $offset, $search );

        $contacts['data'] = array_map( function( $contact ){
            $contact = TagController::get_tags_to_contact( $contact );
            $contact = ListController::get_lists_to_contact( $contact );
            return $contact;
        }, $contacts['data'] );

        if(isset($contacts)) {
            return $this->get_success_response( __( 'Query Successfull', 'mrm' ), 200, $contacts );
        }
        return $this->get_error_response( __( 'Failed to get data', 'mrm' ), 400 );
    }



    /**
     * Create contact after form submission
     * 
     * @param mixed $request POST request after form submission on frontend
     * @return void
     * @since 1.0.0
     */
    public function save_mrm_form_contact($request)
    {
        $email = isset( $request['email'] ) ? sanitize_text_field( $request['email'] ) : '';
        $request['status']  = 'pending';
        $request['source']  = 'form';
        $contact    = new ContactData( $email, $request );
        ContactModel::insert( $contact );
    }

    /**
     * Get total Contact
     * 
     * @param mixed $request POST request after form submission on frontend
     * @return void
     * @since 1.0.0
     */
    public function get_total_count($request)
    {
        return ContactModel::get_instance()->get_total_count( $request );
    }


}
