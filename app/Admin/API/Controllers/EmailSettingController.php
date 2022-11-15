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

class EmailSettingController {
    
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
                $from_email_existance_failed = array (
                    'success' => false,
                    'message' => 'Email address is mandatory',
                    'code'    => 200
                );
                return $from_email_existance_failed;
            }
    
            if ( !is_email( $from_email ) ) {
                $from_email_validation_failded = array (
                    'success' => false,
                    'message' => 'Enter a valid email address from where to send email',
                    'code'    => 200
                );
                return $from_email_validation_failded;
            }
        }

        // Reply to email address validation
        if( isset($params['reply_email']) ){
            $reply_email = sanitize_text_field( $params['reply_email'] );
            if ( empty( $reply_email ) ) {
                $reply_email_existance_failed = array (
                    'success' => false,
                    'message' => 'Email address is mandatory',
                    'code'    => 200
                );
                return $reply_email_existance_failed;
            }
    
            if ( !is_email( $reply_email ) ) {
                $reply_email_validation_failded = array (
                    'success' => false,
                    'message' => 'Enter a valid email address where to reply email',
                    'code'    => 200
                );
                return $reply_email_validation_failded;
            }
        }


        // create email settings
        $from_name  = isset($params['from_name']) ? $params['from_name'] : "";
        $reply_name = isset($params['reply_name']) ? $params['reply_name']: "";

        $from_name   = sanitize_text_field( $from_name );
        $reply_email = sanitize_text_field( $reply_email );

        $email_settings = array (
            "from_name"     => $from_name,
            "from_email"    => $from_email,
            "reply_name"    => $reply_name,
            "reply_email"   => $reply_email
        );

        $serialize_email_settings = maybe_serialize($email_settings);

        //enque to wp option table
        if(update_option('email_settings', $serialize_email_settings, 'yes')){
            $success_data = array(
                'success' => true,
                'message' => 'Email settings has been saved successfully',
                'code'    => 201,
                'data'    => $email_settings
            );
            return $success_data;
        }
        $failed_data = array(
            'success' => false,
            'message' => 'Failed to save',
            'code'    => 400
        );
        return $failed_data;
    }

    /**
     * Get email settings
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_email_settings( ){
        
        if (!get_option('email_settings')){
            $email_settings_data_failed = array(
                'code'    => 400,
                'message' => 'Option key does not exist',
                'data'    => null
            );
            return $email_settings_data_failed ;
        }
        $email_settings_data = array(
            'code'    => 200,
            'message' => 'Query Successfull',
            'data'    => maybe_unserialize(get_option('email_settings'))
        );

        return $email_settings_data;
    }

    /**
     * User accessability check for REST API
     * 
     * @return bool
     * @since 1.0.0
     */  
	public function rest_permissions_check()
	{
		return true;
	}

}