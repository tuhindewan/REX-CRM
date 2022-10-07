<?php

namespace Mint\MRM\Admin\API\Routes;


use Mint\MRM\Admin\API\Controllers\FormController;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-07-10 11:03:17
 * @modify date 2022-07-10 11:03:17
 * @desc [Handle Form Module related API callbacks]
 */

class FormRoute{

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
    protected $rest_base = 'forms';


    /**
     * MRM_form class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $controller;

    

    /**
     * Register API endpoints routes for form module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        $this->controller = FormController::get_instance();

        /**
         * Form no id endpoint
         * Create, All Forms, Delete Multiple
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
            ],
            [
                'methods' => \WP_REST_Server::DELETABLE,
                'callback' => [
                    $this->controller ,
                    'delete_all'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ],
        ]);

        /**
         * Form with id endpoint
         * Update, Single Form, Single Delete
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<form_id>[\d]+)', [
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
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->controller ,
                    'get_single'
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
        ]);

    }

}