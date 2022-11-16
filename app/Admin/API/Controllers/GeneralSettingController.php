<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
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
     * @return WP_REST_Response|void
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ) {
        // TODO: Implement create_or_update() method.
    }

    /**
     * @desc Get General global settings from wp_option table
     * @return WP_REST_Response|void
     * @since 1.0.0
     */
    public function get() {
        // TODO: Implement get() method.
    }
}