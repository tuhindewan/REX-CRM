<?php

namespace MRM\REST\Routes;

use MRM\Controllers\Tags\MRM_Tag_Controller;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */

class MRM_Tag_API_Route{

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
    protected $rest_base = 'tags';


    /**
     * MRM_Tags class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $mrm_tag;

    

    /**
     * Register API endpoints routes for tags module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        $this->mrm_tag = MRM_Tag_Controller::get_instance();
        // MRM_Tag_Controller::get_instance()->init();

        register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->mrm_tag ,
                    'mrm_create_tag'
                ],
                 'permission_callback' => [
                    $this->mrm_tag ,
                     'mrm_create_tag_permissions_check'
                ],
            ],
        ]);

        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>\d+)', [
            [
                'methods' => \WP_REST_Server::EDITABLE,
                'callback' => [
                    $this->mrm_tag ,
                    'mrm_update_tag'
                ],
                 'permission_callback' => [
                    $this->mrm_tag ,
                     'mrm_update_tag_permissions_check'
                ],
            ],
        ]);

        register_rest_route( $this->namespace, '/' . $this->rest_base . '/(?P<id>\d+)', [
            [
                'methods' => \WP_REST_Server::DELETABLE,
                'callback' => [
                    $this->mrm_tag ,
                    'mrm_delete_tag'
                ],
                'permission_callback' => [
                    $this->mrm_tag , 
                    'mrm_delete_tag_permissions_check'
                ], 
            ],
        ]);
        
        register_rest_route($this->namespace, '/' . $this->rest_base . '/', [
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->mrm_tag ,
                    'mrm_get_all_tags'
                ],
                 'permission_callback' => [
                    $this->mrm_tag ,
                     'mrm_get_all_tags_permissions_check'
                ],
            ],
        ]);

        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>\d+)', [
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->mrm_tag ,
                    'mrm_get_single_tag'
                ],
                 'permission_callback' => [
                    $this->mrm_tag ,
                     'mrm_get_single_tag_permissions_check'
                ],
            ],
        ]);

        register_rest_route($this->namespace, '/' . $this->rest_base . '/search/', [
            [
                'methods' => \WP_REST_Server::READABLE,
                'callback' => [
                    $this->mrm_tag ,
                    'mrm_get_single_tag'
                ],
                 'permission_callback' => [
                    $this->mrm_tag ,
                     'mrm_get_single_tag_permissions_check'
                ],
            ],
        ]);

        register_rest_route($this->namespace, '/' . $this->rest_base . '/search/', [
			[
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => [ 
                    $this->mrm_tag, 
                    'get_tag_search_result' 
                ],
				'permission_callback' => [ 
                    $this->mrm_tag, 
                     'get_tag_search_result_permission_check' 
                ],
            ]
		]);
        
    }

}