<?php

namespace Mint\MRM\Admin\API\Routes;

use Mint\MRM\Admin\API\Controllers\WCSettingController;
use Mint\MRM\Admin\API\Controllers\OptinSettingController;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage double opt-in settings API routes]
 */

class SettingRoute {

    /**
     * Endpoint namespace.
     *
     * @var string
     * @since 1.0.0
     */
    protected $namespace = 'mrm/v1';

    /**
     * Route base.
     *
     * @var string
     * @since 1.0.0
     */
    protected $rest_base = 'settings';


    /**
     * MRM_Tag_Controller class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $wc_controller;

    
    /**
     * Register API endpoints routes for tags module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        $this->wc_controller = WCSettingController::get_instance();

        // API routes for WooCommerce settings
        register_rest_route($this->namespace, '/' . $this->rest_base . '/wc/', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->wc_controller ,
                    'create_or_update'
                ],
                'permission_callback' => [
                    $this->wc_controller ,
                    'rest_permissions_check'
                ] ,
            ],
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->wc_controller ,
                    'get'
                ],
                'permission_callback' => [
                    $this->wc_controller ,
                    'rest_permissions_check'
                ] ,
            ],
        ]);

        $this->controller = OptinSettingController::get_instance();

        /**
         * Register rest routes for double opt-in settings
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/' . $this->rest_base . '/optin', [

        // POST request for store on wp_options table
        [
            'methods' => \WP_REST_Server::CREATABLE,
            'callback' => [
                $this->controller ,
                'create_or_update'
            ],
            'permission_callback' => [
                $this->controller ,
                'rest_permissions_check'
            ] ,
        ],

        // GET request for retrieving double opt-in settings
        [
            'methods' => \WP_REST_Server::READABLE,
            'callback' => [
                $this->controller ,
                'get_single'
            ],
            'permission_callback' => [
                $this->controller ,
                'rest_permissions_check'
            ] ,
        ]
    ]);
    }
}