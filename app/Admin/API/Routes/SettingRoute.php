<?php

namespace Mint\MRM\Admin\API\Routes;

use Mint\MRM\Admin\API\Controllers\SettingController;

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
    protected $controller;

    
    /**
     * Register API endpoints routes for tags module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        $this->controller = SettingController::get_instance();

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