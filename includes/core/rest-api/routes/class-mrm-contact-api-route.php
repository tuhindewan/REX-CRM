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
        
        
    }

}