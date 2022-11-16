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
 * @desc [Responsible for managing double General settings API callbacks]
 */
class GeneralSettingController extends SettingBaseController {

    use Singleton;

    /**
     * @desc Update General global settings into wp_options table
     * @param WP_REST_Request $request
     * @return array|WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ) {
        $params = MRM_Common::get_api_params_values( $request );
        $params = is_array( $params ) && !empty( $params ) ? $params : [
            'unsubscriber_settings' => [
                'confirmation_type'    => 'message',
                'page_id'              => 5,
                'url'                  => 'url',
                'confirmation_message' => 'String',
            ],
            'preference' => [],
            'user_signup' => [],
            'comment_form_subscription' => []
        ];

        if( update_option( '_mrm_general_settings', $params ) ) {
            return $this->get_success_response( __( 'General settings have been successfully saved.', 'mrm' ) );
        }
        return $this->get_error_response( __( 'No changes have been made.', 'mrm' ) );
    }

    /**
     * @desc Get General global settings from wp_option table
     * @param WP_REST_Request $request
     * @return array|WP_REST_Response
     * @since 1.0.0
     */
    public function get() {
        $default  = [
            'unsubscriber_settings' => [
                'confirmation_type'    => 'message',
                'page_id'              => 5,
                'url'                  => 'url',
                'confirmation_message' => 'String',
            ],
            'preference' => [],
            'user_signup' => [],
            'comment_form_subscription' => []
        ];
        $settings = get_option( '_mrm_general_settings', $default );
        $settings = is_array( $settings ) && !empty( $settings ) ? $settings : $default;
        return $this->get_success_response_data(  $settings );
    }
}