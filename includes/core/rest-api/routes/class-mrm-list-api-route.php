<?php

namespace MRM\REST\Routes;

use MRM\Controllers\Lists\MRM_List_Controller;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */

class MRM_List_API_Route{

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
    protected $rest_base = 'lists';


    /**
     * MRM_List class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $mrm_list;

    

    /**
     * Register API endpoints routes for lists module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        $this->mrm_list = MRM_List_Controller::get_instance();
        
       
        register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->mrm_list ,
                    'mrm_create_list'
                ],
                 'permission_callback' => [
                    $this->mrm_list ,
                     'mrm_list_create_permissions_check'
                 ] ,
            ],
        ]);
        register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
          [
              'methods' => \WP_REST_Server::READABLE,
              'callback' => [
                  $this->mrm_list ,
                  'mrm_get_list'
              ],
               'permission_callback' => [
                  $this->mrm_list ,
                   'mrm_list_create_permissions_check'
               ] ,
          ],
      ]);
    }

}