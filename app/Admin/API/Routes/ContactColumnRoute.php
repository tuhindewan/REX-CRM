<?php

namespace Mint\MRM\Admin\API\Routes;


use Mint\MRM\Admin\API\Controllers\ContactController;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle contact list columns related API callbacks]
 */

class ContactColumnRoute{

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
    protected $rest_base = 'columns';


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
        $this->controller = ContactController::get_instance();

        /**
         * Get columns for contact index page
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->controller ,
                    'get_columns'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ]
            ],
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'save_contact_columns'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ]
            ]

        ]);

        register_rest_route($this->namespace, '/' . $this->rest_base . '/stored', [
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->controller ,
                    'get_stored_columns'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ]
            ]
        ]);

    }

}