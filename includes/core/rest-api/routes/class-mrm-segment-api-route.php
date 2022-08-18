<?php

namespace MRM\REST\Routes;

use MRM\Controllers\MRM_Segment_Controller;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 12:50:17
 * @modify date 2022-08-10 12:50:17
 * @desc [Handle Segment Module related API callbacks]
 */

class MRM_Segment_API_Route{

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
    protected $rest_base = 'segment';


    /**
     * MRM_Segment_Controller class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $controller;

    
    /**
     * Register API endpoints routes for segment module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        $this->controller = MRM_Segment_Controller::get_instance();

        /**
         * Segment create endpoint
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->controller ,
                    'segment_create'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'segment_create_permissions_check'
                ] ,
            ],
        ]);
        
    }

}