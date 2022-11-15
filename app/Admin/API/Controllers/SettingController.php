<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
use MRM\Common\MRM_Common;
use WP_REST_Request;
use Exception;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Responsible for managing double opt-in settings API callbacks]
 */

class SettingController extends BaseController {
    
    use Singleton;

    /**
     * Settings object arguments
     * 
     * @var object
     * @since 1.0.0
     */
    public $args;

    /**
     * Get and send response to create or update a new settings
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // From email address validation
        if( isset($params['from_email']) ){
            $from_email = sanitize_text_field( $params['from_email'] );
            if ( empty( $from_email ) ) {
                return $this->get_error_response( __( 'Email address is mandatory', 'mrm' ),  200);
            }
    
            if ( !is_email( $from_email ) ) {
                return $this->get_error_response( __( 'Enter a valid email address from where to send email', 'mrm' ),  200);
            }
        }

        // Reply to email address validation
        if( isset($params['reply_email']) ){
            $reply_email = sanitize_text_field( $params['reply_email'] );
            if ( empty( $reply_email ) ) {
                return $this->get_error_response( __( 'Email address is mandatory', 'mrm' ),  200);
            }
    
            if ( !is_email( $reply_email ) ) {
                return $this->get_error_response( __( 'Enter a valid email address where to reply email', 'mrm' ),  200);
            }
        }


        // create email settings
        try {
            $from_name  = isset($params['from_name']) ? $params['from_name'] : "";
            $reply_name = isset($params['reply_name']) ? $params['reply_name']: "";

            $from_name   = sanitize_text_field( $from_name );
            $reply_email = sanitize_text_field( $reply_name );

            $email_settings = array (
                "from_name"     => $from_name,
                "from_email"    => $from_email,
                "reply_name"    => $reply_name,
                "reply_email"   => $reply_email
            );

            $serialize_email_settings = maybe_serialize($email_settings);

            //enque to wp option table
            add_option('email_settings', $serialize_email_settings, 'yes');
            

           

        } catch(Exception $e) {
                return $this->get_error_response(__( 'Contact is not valid', 'mrm' ), 400);
        }

    }


    /**
     * Delete request for tags
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_single( WP_REST_Request $request ){

    }


    /**
     * Delete multiple tags
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_all( WP_REST_Request $request ){

    }


    /**
     * Get all tags request for tags
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_all( WP_REST_Request $request ){


    }


    /**
     * Function used to handle a single get request
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0 
     */
    public function get_single( WP_REST_Request $request ){
 


    }


    /**
     * Get all contacts related to specific tag
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_contacts( WP_REST_Request $request )
    {

    }


}