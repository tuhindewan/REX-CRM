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
         * Contact get all endpoint
         * Contact delete all endpoint
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
            ]
        ]);

        /**
         * Contact update endpoint
         * Contact delete endpoint
         * Single contact endpoint 
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<contact_id>[\d]+)', [
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
                ] ,
            ]
        ]);

        /**
         * Remove tags, lists, and segments from contact
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<contact_id>[\d]+)' . '/groups', [
            [
                'methods' => \WP_REST_Server::DELETABLE,
                'callback' => [
                    $this->controller ,
                    'delete_groups'
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
         * Get WordPress users roles
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/import/native/wp/roles', [
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->controller ,
                    'get_native_wp_roles'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ],
            ]
        ]);

        /**
         * Contact import endpoint for WordPress users
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/import/native/wp', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'import_contacts_native_wp'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ],
            ]
        ]);

        /**
         * Contact import endpoint for WooCommerce customers
         * 
         * @return void
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/' . $this->rest_base . '/import/native/wc', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'import_contacts_native_wc'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ],
            ]
        ]);

        /**
         * Contact import endpoint
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
         * Contact export  endpoint
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
                ]
            ]
        ]);

        /**
         * Send a message to contact
         * 
         * @return void
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<contact_id>[\d]+)' . '/send-message', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'send_message'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ]
            ]
        ]);

        /**
         * Get all message for a contact
         * 
         * @return void
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<contact_id>[\d]+)' . '/get-emails', [
        [
            'methods' => \WP_REST_Server::READABLE,
            'callback' => [
                $this->controller ,
                'get_all_emails'
            ],
            'permission_callback' => [
                $this->controller ,
                'rest_permissions_check'
            ]
        ]
    ]);

        /**
         * Emails list for a contact
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<contact_id>[\d]+)' . '/emails', [
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->controller ,
                    'get_all_emails'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ]
            ]
        ]);


        /**
         * Filtered list for of contacts
         * 
         * @return void
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/' . $this->rest_base . '/filter', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'get_filtered_contacts'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ]
            ]
        ]);
        
    }

}