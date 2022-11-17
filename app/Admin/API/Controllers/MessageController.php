<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\MRM\DataBase\Models\ContactModel;
use Mint\MRM\DataBase\Models\MessageModel;
use Mint\MRM\DataStores\MessageData;
use Mint\Mrm\Internal\Traits\Singleton;
use Mint\MRM\Utilites\Helper\Email;
use MRM\Common\MRM_Common;
use MRM\Data\MRM_Message;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 10:28:03
 * @modify date 2022-08-17 10:28:03
 * @desc [Manage message related API request and responses]
 */


class MessageController extends BaseController {


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
            'contact_id'        => isset( $params['contact_id'] )      ? sanitize_text_field( $params['contact_id'] )       : NULL,
            'sender_id'         => isset( $params['sender_id'] )       ? sanitize_text_field( $params['sender_id'] )        : NULL
        );

        // Email address valiation
        if ( empty( $this->args['email_address'] ) ) {

			return $this->get_error_response( __( 'Email address is mandatory', 'mrm' ), 200 );
		}

        // Email subject validation
        if ( empty( $this->args['email_subject'] ) ) {

			return $this->get_error_response( __( 'Email subject is mandatory', 'mrm' ), 200 );
		}

        // Email body validation
		if ( empty( $this->args['email_body'] ) ) {

			return $this->get_error_response( __( 'Email body is mandatory', 'mrm' ), 200 );
		}

        // Prepare message data
        $message = new MessageData( $this->args );

        MessageModel::insert( $message );

        $sent = $this->send_message( $message );

        $messages = isset( $params['contact_id'] ) ? MessageModel::get_messages( $params['contact_id'] ) : [];
        $messages = end($messages );
        $message_id = is_array( $messages ) && isset( $messages[ 'id' ] ) ? $messages[ 'id' ] : false;

        if( $sent ){
            if( $message_id ) {
                MessageModel::update( $message_id, 'status', 'sent' );
            }
            return $this->get_success_response( __( 'Email has been sent successfully', 'mrm' ), 201 );
        }
        if( $message_id ) {
            MessageModel::update( $message_id, 'status', 'failed' );
        }
        return $this->get_error_response(__( 'Email not sent', 'mrm' ), 200);

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

        $emails = MessageModel::get_emails_to_contact($offset, $perPage, $search, $params['contact_id']);

        if(isset($emails)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $emails);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);
    }



    /**
     * Send a message to contact
     * TODO: Here we have static values, it will be dynamic after finishig up the Settings module
     * @param mixed $message
     * @return bool|WP_REST_response
     * @since 1.0.0
     */
    public function send_message( $message )
    {
        $to      = $message->get_receiver_email();

        $subject = $message->get_email_subject();

        $body    = $message->get_email_body();

        $headers = array(
			'MIME-Version: 1.0',
			'Content-type: text/html;charset=UTF-8'
		);
		$from    = '';
        $from = 'From: Mint CRM';
        $headers[] = $from . ' <' . 'mrm@coderex.co'. '>';
        $headers[] = 'Reply-To:  ' . 'mrm@coderex.co';

        try {
            return wp_mail( $to, $subject, $body, $headers );
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

        $emails = MessageModel::get_emails_to_contact( $offset, $perPage, $search, $contact_id );
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


    /**
     * Send double optin email
     * 
     * @param mixed $contact_id
     * 
     * @return bool
     * @since 1.0.0
     */
    public function send_double_opt_in( $contact_id)
    {
        $contact    = ContactModel::get( $contact_id );

        // Contact status check and validation
        $status     = isset( $contact['status'] ) ? $contact['status'] : "";
        if ($status == 'subscribed') {
            return $this->get_error_response( __( 'Contact Already Subscribed', 'mrm' ), 400 );
        }

        $default    = [
                        "enable"                => true,
                        "email_subject"         => "Please Confirm Subscription.",
                        "email_body"            => "Please Confirm Subscription. {{subscribe_link}}. <br> If you receive this email by mistake, simply delete it.",
                        "confirmation_type"     => "message",
                        "confirmation_message"  => "Subscription Confirmed. Thank you."
                    ];

        $settings   = get_option( "_mrm_optin_settings", $default );
        $enable     = isset( $settings['enable'] ) ? $settings['enable'] : "";
        if ( !$enable ) {
            return false;
        }
        if( $enable ){
            $to       = isset( $contact['email'] ) ? $contact['email'] : "";
            $hash     = isset( $contact['hash'] ) ? $contact['hash'] : "";
            
            $subscribe_url = site_url('?mrm=1&route=confirmation&hash=' . $hash);

            $subject    = isset( $settings['email_subject'] ) ? $settings['email_subject'] : "";
            //Prepare email body
            $email_body = isset( $settings['email_body'] ) ? $settings['email_body'] : "";
            $email_body = str_replace("http://", "", $email_body);
            $email_body = str_replace('{{subscribe_link}}', $subscribe_url, $email_body);
            
            $server = isset( $_SERVER['SERVER_PROTOCOL'] ) ? $_SERVER['SERVER_PROTOCOL'] : "";
            $protocol = strpos(strtolower( $server ), 'https') === FALSE ? 'http' : 'https';
            $domainLink = $protocol . '://' . $_SERVER['HTTP_HOST'];


            $body = Email::getMailTemplate( $email_body, $domainLink, $contact_id, $hash );

            $headers = Email::getMailHeader();
        
            try {
                return wp_mail( $to, $subject, $body, $headers );
            } catch(\Exception $e) {
                return false;
            }
        }
    }
}