<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
use MRM\Common\MRM_Common;
use MRM\Data\MRM_Message;
use MRM\Models\MRM_Message_Model;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 10:28:03
 * @modify date 2022-08-17 10:28:03
 * @desc [Manage message related API request and responses]
 */


class MRM_Message_Controller extends MRM_Base_Controller {


    use Singleton;

    /**
     * API values after sanitization
     * 
     * @var array
     * @since 1.0.0
     */
    private $args  = array();


    /**
     * Send an email to contact 
     * Stores email information to database
     * 
     * @param WP_REST_Request $request
     * @return bool|WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $this->args = array(
            'email_address'     => isset( $params['email_address'] )   ? sanitize_text_field( $params['email_address'] )    : NULL,
            'email_subject'     => isset( $params['email_subject'] )   ? sanitize_text_field( $params['email_subject'] )    : NULL,
            'email_body'        => isset( $params['email_body'] )      ? $params['email_body']                              : NULL,
            'type'              => isset( $params['type'] )            ? sanitize_text_field( $params['type'] )             : NULL,
            'contact_id'        => isset( $params['contact_id'] )      ? sanitize_text_field( $params['contact_id'] )       : NULL
        );

        // Prepare message data
        $message = new MRM_Message( $this->args );

        // Email address valiation
        if ( 'email' === $this->args['type'] && empty( $this->args['email_address'] ) ) {

			return $this->get_error_response( __( 'Email address is mandatory', 'mrm' ), 400 );
		}

        // Email subject validation
        if ( 'email' === $this->args['type'] && empty( $this->args['email_subject'] ) ) {

			return $this->get_error_response( __( 'Email subject is mandatory', 'mrm' ), 400 );
		}

        // Email body validation
		if ( empty( $this->args['email_body'] ) ) {

			return $this->get_error_response( __( 'Message is mandatory', 'mrm' ), 400 );
		}

        
        /**
        * TODO: We will get last insert id when we will complete campaign module
        * 
        */
        $interaction_id = 1;

        MRM_Message_Model::insert( $message, $interaction_id );

        $sent = $this->send_message( $message );

        if( true == $sent ){
            return $this->get_success_response( __( 'Email has been sent', 'mrm' ), 200 );
        }
        return $this->get_error_response(__( 'Email not sent', 'mrm' ), 400);

    }

    /**
     * Get all emails for a contact
     * 
     * @param WP_REST_Request
     * @return WP_RESR_Response
     * 
     * @since 1.0.0
     * 
     */
    public function get_all_emails(WP_REST_Request $request){
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =   isset($params['page']) ? $params['page'] : 1;
        $perPage    =   isset($params['per-page']) ? $params['per-page'] : 25;
        $offset     =   ($page - 1) * $perPage;

        // Note Search keyword
        $search = isset($params['search']) ? sanitize_text_field($params['search']) : '';

        $emails = MRM_Message_Model::get_emails_to_contact($offset, $perPage, $search, $params['contact_id']);

        if(isset($emails)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $emails);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);
    }



    /**
     * Send a message to contact
     * 
     * @param mixed $message
     * @return bool|WP_REST_response
     * @since 1.0.0
     */
    public function send_message( $message )
    {
        $to     = $message->get_receiver_email();

        $subject = $message->get_email_subject();

        $body = $message->get_email_body();

        $headers = array(
			'MIME-Version: 1.0',
			'Content-type: text/html;charset=UTF-8'
		);
		$from    = '';
        $from = 'From: ' . 'MRM';
        $headers[] = $from . ' <' . 'support@rextheme.com' . '>';
        $headers[] = 'Reply-To:  ' . 'support@rextheme.com';

        try {
            $result = wp_mail( $to, $subject, $body, $headers );
            return $result;

        } catch(\Exception $e) {
            return false;
        }

    }


    /**
     * Get all emails from the database to a contact or entire users
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
        $search     = isset( $params['search'] )        ? sanitize_text_field( $params['search'] )     : '';
        $contact_id = isset( $params['contact_id'] )    ? sanitize_text_field( $params['contact_id'] ) : NULL;

        $emails = MRM_Message_Model::get_emails_to_contact( $offset, $perPage, $search, $contact_id );
        if(isset($emails)) {
            return $this->get_success_response( __( 'Query Successfull', 'mrm' ), 200, $emails );
        }
        return $this->get_error_response( __( 'Failed to get data', 'mrm' ), 400 );

    }


    /**
     * TODO: use this function to get single email
     * 
     * @param WP_REST_Request $request
     * 
     * @return [type]
     */
    public function get_single(WP_REST_Request $request)
    {
        
    }


    /**
     * TODO: use this function to delete multiple emails
     * 
     * @param WP_REST_Request $request
     * 
     * @return [type]
     */
    public function delete_all(WP_REST_Request $request)
    {
        
    }


    /**
     * TODO: use this function to delete single email
     * 
     * @param WP_REST_Request $request
     * 
     * @return [type]
     */
    public function delete_single(WP_REST_Request $request)
    {
        
    }
}