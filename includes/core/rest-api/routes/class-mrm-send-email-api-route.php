<?php

namespace MRM\REST\Routes;

use MRM\Controllers\MRM_Base_Controller;
use MRM\Email\MRM_Send_Email;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle Send Email Module related API callbacks]
 */

class MRM_Send_Email_API_Route{

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
    protected $rest_base = 'send-email';


    /**
     * MRM_Email class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $mailer;


    /**
     * Register API endpoints routes for send email module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        $this->mailer = MRM_Send_Email::get_instance();


        /**
         * Send Email create endpoint
         * Get Send Email endpoint
         * 
         * @return void
         * @since 1.0.0
        */  
        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<contact_id>[\d]+)', [
            [
                'methods' => \WP_REST_Server::CREATABLE,
                'callback' => [
                    $this->mailer ,
                    'send_email'
                ]
            ]

        ]);
    }

}