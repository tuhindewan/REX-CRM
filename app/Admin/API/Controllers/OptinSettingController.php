<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
use MRM\Common\MRM_Common;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Responsible for managing double opt-in settings API callbacks]
 */

class OptinSettingController extends SettingBaseController {
    
    use Singleton;

    /**
     * Setiings object arguments
     * 
     * @var object
     * @since 1.0.0
     */
    public $args;

    /**
     * Get and send response to create a new settings
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
        
        if( array_key_exists( 'optin', $params ) ){
            $setting_value = isset( $params['optin'] ) ? $params['optin'] : [];
            update_option('_mrm_optin_settings',  $setting_value);
            $this->get_success_response("Double optin settings has been successfully saved.");
        }
    }


    /**
     * Function used to handle a single get request
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0 
     */
    public function get( $key ){
 
    }



}