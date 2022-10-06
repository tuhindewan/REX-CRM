<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\MRM\DataBase\Models\ContactGroupPivotModel;
use Mint\MRM\DataBase\Models\MessageModel;
use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Common\MRM_Common;
use Mint\MRM\DataBase\Models\CampaignModel as ModelsCampaign;
use Mint\MRM\DataBase\Models\ContactModel;

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
     * Campaign array from API response
     * 
     * @var array
     * @since 1.0.0
     */
    public $campaign_data;


    /**
     * Get and send response to create or update a campaign
     * 
     * @param WP_REST_Request
     * @return \WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){
        
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Assign Untitled as value if title is empty
        if ( isset($params['title']) && empty( $params['title'] )) {
            $params['title'] = "Untitled";
        }

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
                $campaign_id            = $params['campaign_id'];
                $this->campaign_data    = ModelsCampaign::update( $params, $campaign_id );

                if( $this->campaign_data ){
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

                        if (0 === $index){
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
                $this->campaign_data = ModelsCampaign::insert( $params );
                $campaign_id = isset($this->campaign_data['id']) ? $this->campaign_data['id'] : "";
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

                        if (0 === $index){
                            $email['send_time'] = microtime(true);
                            $emails[$index]['send_time'] = microtime(true);
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
            if($this->campaign_data) {
                $data['campaign'] = $this->campaign_data;

                //test_email_sending(for dev)
                self::send_email_to_reciepents($this->campaign_data);

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
     * Request for deleting a email from a campaign
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_campaign_email( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $campaign_id = isset( $params['campaign_id'] ) ? $params['campaign_id'] : "";
        $email_id = isset( $params['email_id'] ) ? $params['email_id'] : "";
        
        $success = ModelsCampaign::remove_email_from_campaign( $campaign_id, $email_id );
        if($success) {
            return $this->get_success_response( __( 'Campaign email has been deleted successfully', 'mrm' ), 200 );
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
        
        // Prepare human_time_diff for every campaign
        if(isset( $campaigns['data'] )){
            $campaigns['data'] = array_map(function($campaign){
                if( isset($campaign['created_at']) ){
                    $campaign['created_at'] = human_time_diff(strtotime($campaign['created_at']), time());
                }
                return $campaign;
            }, $campaigns['data']);
        }

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
        $params         = MRM_Common::get_api_params_values( $request );
        $campaign_id    = isset( $params['campaign_id'] ) ? $params['campaign_id'] : "";
        $campaign       = ModelsCampaign::get( $campaign_id );
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


    /**
     * Function use to send email
     * 
     * @param array $campaign
     * @return WP_REST_Response
     * @since 1.0.0 
     */
    public function send_email_to_reciepents($campaign)
    {
        $campaign_id = isset( $campaign['id'] ) ? $campaign['id'] : "";
        $recipients_emails = self::get_reciepents_email($campaign_id);
        $recipients = array_map(function($recipients_email){
            return $recipients_email['email'];
        }, $recipients_emails);

        $email = isset( $campaign['emails'] ) ? $campaign['emails'][0] : [];
        
        $sender_email   = isset( $email['sender_email'] ) ? $email['sender_email'] : "";
        $sender_name    = isset( $email['sender_name'] ) ? $email['sender_name'] : "";
        $email_subject  = isset( $email['email_subject'] ) ? $email['email_subject'] : "";
        $email_body     = isset( $email['email_body'] ) ? $email['email_body'] : "";
        $headers = array(
			'MIME-Version: 1.0',
			'Content-type: text/html;charset=UTF-8'
		);

		$from    = '';
        $from = 'From: '. $sender_name;
        $headers[] = $from . ' <' . $sender_email . '>';
        $headers[] = 'Reply-To:  ' . $sender_email;

        try {
            foreach( $recipients as $recipient ){
                wp_mail( $recipient, $email_subject, "Dummy Email Body", $headers );
            }

        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Function use to get recipients
     * 
     * @param WP_REST_Request
     * @return array
     * @since 1.0.0 
     */
    public function get_reciepents_email($campaign_id)
    {
        $all_receipents = ModelsCampaign::get_campaign_meta($campaign_id);
        $group_ids = [];

        if( isset($all_receipents['recipients']['lists'], $all_receipents['recipients']['tags']) ){
             $group_ids = array_merge($all_receipents['recipients']['lists'],$all_receipents['recipients']['tags']);
        }else{
            isset($all_receipents['recipients']['lists']) ? $group_ids = $all_receipents['recipients']['lists'] : 
            (isset($all_receipents['recipients']['tags']) ?  $group_ids = $all_receipents['recipients']['tags'] :
            $group_ids = []);
        }
        $contact_ids = [];

        foreach ($group_ids as $group_id){
            $id = isset( $group_id['id'] ) ? $group_id['id'] : "";
            array_push($contact_ids,ContactGroupPivotModel::get_contacts_to_group($id));
        }
        $recipients_ids = [];

        foreach ($contact_ids as $contact_id){
            if (is_array($contact_id ) ){
                foreach ($contact_id as $id){
                    if( isset( $id->contact_id ) ){
                        array_push($recipients_ids, $id->contact_id);
                    }
                }
            }
        }
        $unique_recipients_ids = array_unique($recipients_ids);

        $recipients_emails = [];
        foreach ($unique_recipients_ids as $contact_id){
            array_push($recipients_emails, ContactModel::get_single_email($contact_id));
        }

        return $recipients_emails;
    }


}