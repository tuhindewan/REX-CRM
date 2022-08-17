<?php

namespace MRM\REST\Routes;

use MRM\Controllers\MRM_Workflow_Controller;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 12:25:17
 * @modify date 2022-08-17 12:25:17
 * @desc [Handle Workflow Module related API callbacks]
 */

class MRM_Workflow_API_Route{

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
    protected $rest_base = 'workflows';


    /**
     * MRM_Tags class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $controller;

    

    /**
     * Register API endpoints routes for workflow module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        $this->controller = MRM_Workflow_Controller::get_instance();

        /**
         * Workflow create endpoint
         * Get Workflow endpoint
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'create_or_update'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ]
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
                ]
            ]

        ]);

        /**
         * Workflow update endpoint
         * Workflow delete endpoint
         * 
         * @return void
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<workflow_id>[\d]+)', 
       [
            [
                'methods' => \WP_REST_Server::EDITABLE,
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
                'methods' => \WP_REST_Server::DELETABLE,
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
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->controller ,
                    'get_single'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ]
            ]
        ]);

    }

}