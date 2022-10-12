<?php

namespace Mint\MRM\Admin\API\Routes;

use Mint\MRM\Admin\API\Controllers\CampaignController;
use WP_REST_Server;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage Campaign related API]
 */

class CampaignRoute{

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
    protected $rest_base = 'campaigns';


    /**
     * CampaignController class object
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
    
        $this->controller = CampaignController::get_instance();

        /**
         * Campaign multiple interaction endpoints
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
                'methods' => WP_REST_Server::READABLE,
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
                'methods' => WP_REST_Server::DELETABLE,
                'callback' => [
                    $this->controller,
                    'delete_all'
                ],
                'permission_callback' => [
                    $this->controller, 
                    'rest_permissions_check'
                ],
            ]
        ]);


        /**
         * Campaign single interaction endpoints
         * 
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<campaign_id>[\d]+)', [
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
            ],
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
                    $this->controller,
                    'delete_single'
                ],
                'permission_callback' => [
                    $this->controller,
                    'rest_permissions_check'
                ],
            ]

        ]);


        /**
         * Delete a campaign email
         * 
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<campaign_id>[\d]+)' . '/email' . '/(?P<email_id>[\d]+)', [
            [
                'methods' => WP_REST_Server::DELETABLE,
                'callback' => [
                    $this->controller ,
                    'delete_campaign_email'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ]

        ]);

    }

}