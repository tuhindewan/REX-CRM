<?php

namespace MRM\REST\Routes;

use MRM\Controllers\MRM_Note_Controller;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */

class MRM_Note_API_Route{

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
    protected $rest_base = 'notes';


    /**
     * MRM_Tags class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $controller;

    

    /**
     * Register API endpoints routes for notes module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        $this->controller = MRM_Note_Controller::get_instance();


        /**
         * Note create endpoint
         * Get Note endpoint
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/contact'. '/(?P<contact_id>[\d]+)' .'/'. $this->rest_base . '/', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'create_or_update_note'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ]
            ]
        ]);

        /**
         * Note update endpoint
         * Note delete endpoint
         * 
         * @return void
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/contact' .'/(?P<contact_id>[\d]+)'.'/'. $this->rest_base . '/(?P<note_id>[\d]+)', 
       [
            [
                'methods' => \WP_REST_Server::EDITABLE,
                'callback' => [
                    $this->controller ,
                    'create_or_update_note'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ]
        ]);

    }

}