<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\MRM\DataBase\Models\ContactGroupPivotModel;
use Mint\MRM\DataBase\Models\MessageModel;
use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Common\MRM_Common;
use Mint\MRM\DataBase\Models\CampaignModel as ModelsCampaign;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Responsible for managing Campaign API callbacks]
 */

class CampaignController extends BaseController {
    
    use Singleton;

    
    /**
     * Campaign object arguments
     * 
     * @var object
     * @since 1.0.0
     */
    public $args = array();


    /**
     * Get and send response to create or update a campaign
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){
        
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Campaign title validation
        if ( isset($params['title']) && empty( $params['title'] )) {
            return $this->get_error_response( __( 'Title is mandatory', 'mrm' ),  200);
        }

        // Campaign slug create
        $params['slug'] = isset($params['title']) ? sanitize_title( $params['title'] ): "";

        // Email subject validation
        $emails = isset($params['emails']) ? $params['emails'] : array();
        foreach( $emails as $index => $email ){
            if ( isset($email['email_subject']) && empty( $email['email_subject'] )) {
                return $this->get_error_response( __( 'Subject is missing on email '. ($index+1), 'mrm' ),  200);
            }
        }

        try {
            // Update a campaign if campaign_id present on API request
            if( isset( $params['campaign_id']) ){
                $campaign_id    = $params['campaign_id'];
                $updated        = ModelsCampaign::update( $params, $campaign_id );

                if( true == $updated ){
                    // Update campaign recipients into meta table
                    $recipients  = isset($params['recipients']) ? maybe_serialize( $params['recipients']) : "";
                    ModelsCampaign::update_campaign_recipients( $recipients, $campaign_id );

                    // Update emails list
                    $emails = isset($params['emails']) ? $params['emails'] : array();

                    // set send_time key for all email of campaign
                    $emails = array_map(function($email){
                        $email['send_time'] = 0;
                        return $email;
                    }, $emails);

                    foreach( $emails as $index => $email ){
                        //counting the sending time for each email
                        $delay = isset( $email['delay'] ) ? $email['delay'] : 0;

                        if ($index == 0){
                            $email['send_time'] = microtime(true);
                            $emails[$index]['send_time'] = $email['send_time'];
                        }
                        else {
                            $prev_send_time = $emails[$index-1]['send_time'];
                            $email['send_time'] = $delay + $prev_send_time;
                            $emails[$index]['send_time'] = $email['send_time'];
                        }

                        ModelsCampaign::update_campaign_emails( $email, $campaign_id, $index );
                    }
                }

            }
            else{

                // Insert campaign information
                $campaign_id = ModelsCampaign::insert( $params );

                if( $campaign_id ){
                    // Insert campaign recipients information
                    $recipients = isset($params['recipients']) ? maybe_serialize( $params['recipients']) : "";
                    ModelsCampaign::insert_campaign_recipients( $recipients, $campaign_id );
                    
                    // Insert campaign emails information
                    $emails = isset($params['emails']) ? $params['emails'] : array();
                    
                    // set send_time key for all email of campaign
                    $emails = array_map(function($email){
                            $email['send_time'] = 0;
                            return $email;
                    }, $emails);


                    foreach( $emails as $index => $email ){
                        //counting the sending time for each email
                        $delay = isset( $email['delay'] ) ? $email['delay'] : 0;

                        if ($index == 0){
                            $email['send_time'] = microtime(true);
                            $emails[$index]['send_time'] = $email['send_time'];
                        }
                        else {
                            $prev_send_time = $emails[$index-1]['send_time'];
                            $email['send_time'] = $delay + $prev_send_time;
                            $emails[$index]['send_time'] = $email['send_time'];
                        }
                        
                        ModelsCampaign::insert_campaign_emails( $email, $campaign_id, $index );
                    }
                }
                
            }
            
            // Send renponses back to the frontend
            if($campaign_id) {
                $data['campaign_id'] = $campaign_id;
                return $this->get_success_response(__( 'Campaign has been saved successfully', 'mrm' ), 201, $data);
            }
            return $this->get_error_response(__( 'Failed to save', 'mrm' ), 400);

        } catch(Exception $e) {
            return $this->get_error_response(__( $e->getMessage(), 'mrm' ), 400);
        }

    }

    /**
     * Get and send response to send campaign email 
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public static function send_campaign_email( $campaign_id, $params ){
        
        $campaign = ModelsCampaign::get( $campaign_id );
        
        $meta = maybe_unserialize($campaign->meta);

        $tags   = $meta['tags'];
        $lists  = $meta['lists'];

        $groups = array_merge( $tags, $lists );


        $count = ContactGroupPivotModel::get_contacts_count_to_campaign($groups);
        $per_batch = 30;

        $total_batch = ceil($count/$per_batch);
        
        for ($i=1; $i <= $total_batch; $i++) { 
            $contacts = ContactGroupPivotModel::get_contacts_to_campaign($groups, $i + $per_batch, $per_batch);
            $messages = array_map(function($contact) use ($campaign) {
                return array(
                    'email_address' => $contact->email,
                    'email_subject' => $campaign->email_subject,
                    'email_body'    => $campaign->email_body,
                    'contact_id'    => $contact->id,
                    'sender_email'  => $campaign->sender_email,
                    'sender_name'   => $campaign->sender_name,
                    'campaign_id'   => $campaign->id
                );
            }, $contacts);

            do_action( 'mrm/send_campaign_email', $messages );
        }


        
        
    }


    /**
     * Request for deleting a single campaign to Campaign Model by Campaign ID
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_single( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
        $campaign_id = isset( $params['campaign_id'] ) ? $params['campaign_id'] : "";
        $success = ModelsCampaign::destroy( $campaign_id );

        if($success) {
            return $this->get_success_response( __( 'Campaign has been deleted successfully', 'mrm' ), 200 );
        }
        return $this->get_error_response( __( 'Failed to Delete', 'mrm' ), 400 );

    }


    /**
     * Request for deleting multiple campaigns to Campaign Model by Campaign ID
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_all( WP_REST_Request $request ){
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $campaign_ids = isset( $params['campaign_ids'] ) ? $params['campaign_ids'] : [];

        $success = ModelsCampaign::destroy_all( $campaign_ids );
        
        if($success) {
            return $this->get_success_response(__( 'Campaign has been deleted successfully', 'mrm' ), 200);
        }

        return $this->get_error_response(__( 'Failed to delete', 'mrm' ), 400);
    }


    /**
     * Get all campaign request to Campaign Model
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_all( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =  isset( $params['page'] ) ? $params['page'] : 1;
        $perPage    =  isset( $params['per-page'] ) ? $params['per-page'] : 10;
        $offset     =  ($page - 1) * $perPage;

        // Contact Search keyword
        $search     = isset( $params['search'] ) ? $params['search'] : '';
                
        $campaigns   = ModelsCampaign::get_all( $offset, $perPage, $search );

        $campaigns['current_page'] = (int) $page;

        if(isset($campaigns)) {
            return $this->get_success_response( __( 'Query Successfull', 'mrm' ), 200, $campaigns );
        }
        return $this->get_error_response( __( 'Failed to get data', 'mrm' ), 400 );

    }


    /**
     * Function use to get single campaign 
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0 
     */
    public function get_single( WP_REST_Request $request ){
 
        // Get values from REST API JSON
        $params     = MRM_Common::get_api_params_values( $request );

        $campaign_id = isset( $params['campaign_id'] ) ? $params['campaign_id'] : "";
        $campaign   = ModelsCampaign::get( $campaign_id );
        if(isset($campaign)) {
            return $this->get_success_response("Query Successfull", 200, $campaign);
        }
        return $this->get_error_response("Failed to Get Data", 400);

    }

    /**
     * Function use to schedule the action for campaign emails
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0 
     */
    public function process_campaign_email( $messages )
    {
        $data = array();
        if ( function_exists('as_has_scheduled_action') ) {
            if ( false === as_has_scheduled_action( 'mrm/process_campaign_email' ) ) {
                $data['data'] = $messages;
                as_schedule_single_action( time(), 'mrm/process_campaign_email', $data );
            }
        }elseif( function_exists('as_next_scheduled_action') ){
            if ( false === as_next_scheduled_action( 'mrm/process_campaign_email' ) ) {
                $data['data'] = $messages;
                as_schedule_single_action( time(), 'mrm/process_campaign_email', $data );
            }
        }
       
        
    }

    /**
     * Function use send campaign email to a recipients 
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0 
     */
    public function process_campaign_email_send($data)
    {
        foreach( $data as $message ) {
            MessageModel::insert( $message, $message['campaign_id'] );
            $sent = MessageController::get_instance()->send_message($message);
        }
    }


}