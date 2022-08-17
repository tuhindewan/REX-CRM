<?php

namespace MRM\Controllers;

use MRM\Common\MRM_Common;
use MRM\Data\MRM_Message;
use MRM\Traits\Singleton;
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
            'email_body'        => isset( $params['email_body'] )      ? sanitize_text_field( $params['email_body'] )       : NULL,
            'type'              => isset( $params['type'] )            ? sanitize_text_field( $params['type'] )             : NULL
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

        $sent = $this->send_message( $message );

        if( true == $sent ){
            return $this->get_success_response( __( 'Email has been sent', 'mrm' ), 200 );
        }
        return $this->get_error_response(__( 'Email not sent', 'mrm' ), 400);

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

        $message = $message->get_email_body();

        $headers = array(
			'MIME-Version: 1.0',
			'Content-type: text/html;charset=UTF-8'
		);
		$from    = '';
        $from = 'From: ' . 'MRM';
        $headers[] = $from . ' <' . 'support@rextheme.com' . '>';
        $headers[] = 'Reply-To:  ' . 'support@rextheme.com';

        try {
            $result = wp_mail( $to, $subject, $message, $headers );
            return $result;

        } catch(\Exception $e) {
            return false;
        }

    }


    /**
     * TODO: use this function to get multiple emails
     * 
     * @param WP_REST_Request $request
     * 
     * @return [type]
     */
    public function get_all(WP_REST_Request $request)
    {
        
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