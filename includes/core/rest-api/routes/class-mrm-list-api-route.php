<?php

namespace MRM\REST\Routes;

use MRM\Controllers\MRM_List_Controller;

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
    protected $controller;

    

    /**
     * Register API endpoints routes for lists module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes(){
      $this->controller = MRM_List_Controller::get_instance();
    
        /**
         * List create endpoint
         * Get lists endpoint
         * 
         * @return void
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
        [
            'methods' => \WP_REST_Server::CREATABLE,
            'callback' => [
                $this->controller ,
                'create_or_update_list'
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
                'get_lists'
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
                'delete_lists'
            ],
            'permission_callback' => [
                $this->controller ,
                'rest_permissions_check'
            ] ,
        ],
    ]);
    /**
         * Segment update endpoint
         * Segment delete endpoint
         * 
         * @return void
         * @since 1.0.0
        */  
       register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>[\d]+)', [
        [
            'methods' => \WP_REST_Server::EDITABLE,
            'callback' => [
                $this->controller ,
                'create_or_update_list'
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
                'delete_list'
            ],
            'permission_callback' => [
                $this->controller ,
                'rest_permissions_check'
            ] ,
        ],
    ]);
       
    //   register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
    //       [
    //           'methods' => \WP_REST_Server::CREATABLE,
    //           'callback' => [
    //               $this->controller ,
    //               'create_list'
    //           ],
    //             'permission_callback' => [
    //               $this->controller ,
    //               'lists_permissions_check'
    //             ] ,
    //       ],
    //   ]);

    //   /**
    //  * List get endpoint with pagination
    //  * 
    //  * @return void
    //  * @since 1.0.0
    //  */  
    //   register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
    //     [
    //         'methods' => \WP_REST_Server::READABLE,
    //         'callback' => [
    //             $this->controller ,
    //             'get_lists'
    //         ],
    //           'permission_callback' => [
    //             $this->controller ,
    //             'lists_permissions_check'
    //           ],
    //     ],
    //   ]);

    //   /**
    //     * List get a single list endpoint
    //     * 
    //     * @return void
    //     * @since 1.0.0
    //   */  
    //   register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>[\d]+)', [
    //     [
    //         'methods' => \WP_REST_Server::READABLE,
    //         'callback' => [
    //             $this->controller ,
    //             'get_list'
    //         ],
    //           'permission_callback' => [
    //             $this->controller ,
    //             'lists_permissions_check'
    //           ] ,
    //     ],
    //   ]);


    //   /**
    //  * List update endpoint
    //  * 
    //  * @return void
    //  * @since 1.0.0
    //  */  
    //   register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>[\d]+)', [
    //     [
    //         'methods' => \WP_REST_Server::EDITABLE,
    //         'callback' => [
    //             $this->controller ,
    //             'update_list'
    //         ],
    //           'permission_callback' => [
    //             $this->controller ,
    //             'lists_permissions_check'
    //           ] ,
    //     ],
    //   ]);

    //   /**
    //    * List delete endpoint
    //    * 
    //    * @return void
    //    * @since 1.0.0
    //   */  
    //   register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>[\d]+)', [
    //     [
    //         'methods' => \WP_REST_Server::DELETABLE,
    //         'callback' => [
    //             $this->controller ,
    //             'delete_list'
    //         ],
    //           'permission_callback' => [
    //             $this->controller,
    //             'lists_permissions_check'
    //           ] ,
    //     ],
    //   ]);

    //   /**
    //    * List delete multiple endpoint
    //    * 
    //    * @return void
    //    * @since 1.0.0
    //   */  
    //  register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
    //   [
    //       'methods' => \WP_REST_Server::DELETABLE,
    //       'callback' => [
    //           $this->controller ,
    //           'delete_lists'
    //       ],
    //         'permission_callback' => [
    //           $this->controller,
    //           'lists_permissions_check'
    //         ] ,
    //   ],
    //   ]);

    //   /**
    //    * List search by title endpoint
    //    * 
    //    * @return void
    //    * @since 1.0.0
    //   */  
    //  register_rest_route($this->namespace, '/' . $this->rest_base . '/search', [
    //   [
    //       'methods' => \WP_REST_Server::READABLE,
    //       'callback' => [
    //           $this->controller ,
    //           'search_lists'
    //       ],
    //         'permission_callback' => [
    //           $this->controller,
    //           'lists_permissions_check'
    //         ] ,
    //   ],
    //   ]);
    }

}