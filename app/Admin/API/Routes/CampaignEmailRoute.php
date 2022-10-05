<?php

namespace Mint\MRM\Admin\API\Routes;

use Mint\MRM\Admin\API\Controllers\CampaignEmailController;
use WP_REST_Server;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @desc [Manage Campaign email builder related API]
 */

class CampaignEmailRoute {

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
    protected $rest_base = 'campaign';


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

        $this->controller = CampaignEmailController::get_instance();

        /**
         * Campaign email crud operations
         *
         * @since 1.0.0
         */
        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<campaign_id>[\d]+)/email/(?P<email_id>[\d]+)', [
            array(
                'methods' => WP_REST_Server::READABLE,
                'callback' => [
                    $this->controller ,
                    'get_single'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ),
            array(
                'methods' => WP_REST_Server::EDITABLE,
                'callback' => [
                    $this->controller ,
                    'create_or_update'
                ],
                'permission_callback' => [
                    $this->controller ,
                    'rest_permissions_check'
                ] ,
            ),
        ]);
    }

}