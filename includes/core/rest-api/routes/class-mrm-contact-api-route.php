<?php

namespace MRM\REST\Routes;

use MRM\Controllers\MRM_Contact_Controller;
/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-11 11:54:42
 * @modify date 2022-08-11 11:54:42
 * @desc [Handle Contact Module related API callbacks]
 */


class MRM_Contact_API_Route {
    
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
    protected $rest_base = 'contacts';


    /**
     * MRM_Contact_Controller class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $controller;


    /**
     * Register API endpoints routes for contact module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        $this->controller = MRM_Contact_Controller::get_instance();
        
        /**
         * Contact create endpoint
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'create_or_update_contact'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ]
        ]);

        /**
         * Contact create endpoint
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<contact_id>[\d]+)', [
            [
                'methods' => \WP_REST_Server::EDITABLE,
                'callback' => [
                    $this->controller ,
                    'create_or_update_contact'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ]
        ]);
        /**
         * Contact import csv send attrs endpoint
         * 
         * 
         * 
         * @return void
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/' . $this->rest_base . '/import/attrs', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'import_contacts_get_attrs'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ],
            ]
        ]);

        /**
         * Contact import endpint
         * This endpoint saves the imported file to database with correct mappings
         * @return void
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/' . $this->rest_base . '/import/', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'import_contacts'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ],
            ]
        ]);



        /**
         * Contact export  endpint
         * 
         * @return void
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/' . $this->rest_base . '/export/', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'export_contacts'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ]
        ]);
    }

}