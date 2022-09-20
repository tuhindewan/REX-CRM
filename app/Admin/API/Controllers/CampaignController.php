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
     * Get and send response to create or update a custom field 
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){
        
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        if ( isset($params['title']) && empty( $params['title'] )) {
            return $this->get_error_response( __( 'Title is mandatory', 'mrm' ),  400);
        }

        $params['slug'] = isset($params['title']) ? sanitize_title( $params['title'] ): "";
        // Field object create and insert or update to database
        try {
            if( isset( $params['campaign_id']) ){
                $campaign_id = $params['campaign_id'];
                $update      = ModelsCampaign::update( $params, $campaign_id );
                $recipients = isset($params['recipients']) ? maybe_serialize( $params['recipients']) : "";
                ModelsCampaign::update_campaign_recipients( $recipients, $campaign_id );
                
                $emails = isset($params['emails']) ? $params['emails'] : array();

                foreach( $emails as $email ){
                    ModelsCampaign::update_campaign_emails( $email, $campaign_id );
                }

            }
            else{

                $campaign_id = ModelsCampaign::insert( $params );

                $recipients = isset($params['recipients']) ? maybe_serialize( $params['recipients']) : "";

                ModelsCampaign::insert_campaign_recipients( $recipients, $campaign_id );

                $emails = isset($params['emails']) ? $params['emails'] : array();

                foreach( $emails as $email ){
                    ModelsCampaign::insert_campaign_emails( $email, $campaign_id );
                }
                
            }
            

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

        // Campaign avaiability check
        $exist = ModelsCampaign::is_campaign_exist($params['campaign_id']);

        if ( !$exist ) {
			return $this->get_error_response( __( 'Campaign not found', 'mrm' ),  400);
		}

        $success = ModelsCampaign::destroy( $params['id'] );

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

        $success = ModelsCampaign::destroy_all( $params['campaign_ids'] );
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
 
        // Get values from API
        $params     = MRM_Common::get_api_params_values( $request );

        $campaign_id = isset( $params['campaign_id'] ) ? $params['campaign_id'] : "";
        $campaign   = ModelsCampaign::get( $campaign_id );
        error_log(print_r($campaign, 1));
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