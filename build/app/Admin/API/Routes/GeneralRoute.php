<?php

namespace Mint\MRM\Admin\API\Routes;


use Mint\MRM\Admin\API\Controllers\GeneralController;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle General Module related API callbacks]
 */

class GeneralRoute{

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
    protected $rest_base = 'general';


    /**
     * MRM_General class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $controller;

    

    /**
     * Register API endpoints routes for general module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        $this->controller = GeneralController::get_instance();

        /**
         * General create endpoint
         * Get General endpoint
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->controller ,
                    'get_general_count'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ]
            ]

        ]);

    }

}