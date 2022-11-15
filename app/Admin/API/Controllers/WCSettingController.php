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
class WCSettingController extends SettingsBaseController {

    use Singleton;

    /**
     * @desc Update WooCommerce global settings into wp_option table
     * @param WP_REST_Request $request
     * @return array|\WP_Error
     * @since 1.0.0
     */
    public function update_woocommerce_settings( WP_REST_Request $request ) {
        $params = MRM_Common::get_api_params_values( $request );
        $params = is_array( $params ) && !empty( $params ) ? $params : [
            'enable' => false,
            'checkbox_label' => 'Please put a checkbox label.',
            'lists' => [],
            'tags' => [],
            'double_optin' => true
        ];

        if( update_option( '_mrm_woocommerce_settings', $params ) ) {
            return $this->get_success_response( __( 'WooCommerce settings has been successfully saved.', 'mrm' ), 200 );
        }
        return $this->get_error_response( __( 'No changes have been made.', 'mrm' ), 400 );
    }


    /**
     * @desc Update WooCommerce global settings into wp_option table
     * @return array|\WP_Error
     * @since 1.0.0
     */
    public function get_woocommerce_settings() {
        $default = [
            'enable' => false,
            'checkbox_label' => 'Please put a checkbox label.',
            'lists' => [],
            'tags' => [],
            'double_optin' => true
        ];
        $settings = get_option( '_mrm_woocommerce_settings', $default );
        $settings = is_array( $settings ) && !empty( $settings ) ? $settings : $default;
        return $this->get_success_response( __( 'WooCommerce settings has been successfully saved.', 'mrm' ), 200, $settings );
    }
}