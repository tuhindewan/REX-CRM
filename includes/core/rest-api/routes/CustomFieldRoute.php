<?php

namespace MRM\REST\Routes;

use MRM\Controllers\CustomFieldController;
use WP_REST_Server;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage Custom Fields related API]
 */

class CustomFieldRoute{

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
    protected $rest_base = 'custom-fields';


    /**
     * CustomFieldController class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $controller;

    

    /**
     * Register API endpoints routes for lists module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes(){

        $this->controller = CustomFieldController::get_instance();
    
        /**
         * Field group create endpoint
         * 
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
            [
                'methods' => WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'create_or_update'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ],
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->controller ,
                    'get_all'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ]
        ]);

        /**
         * Field group update endpoint
         * 
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<field_id>[\d]+)', [
            [
                'methods' => WP_REST_Server::EDITABLE,
                'callback' => [
                    $this->controller ,
                    'create_or_update'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ],
            [
                'methods' => WP_REST_Server::DELETABLE,
                'callback' => [
                    $this->controller ,
                    'delete_single'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ],
            [
                'methods' => WP_REST_Server::READABLE,
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