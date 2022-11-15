<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Responsible for managing double opt-in settings API callbacks]
 */

class SettingController extends BaseController {
    
    use Singleton;

    /**
     * Tag object arguments
     * 
     * @var object
     * @since 1.0.0
     */
    public $args;

    /**
     * Get and send response to create a new tag
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){

    }


    /**
     * Delete request for tags
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_single( WP_REST_Request $request ){

    }


    /**
     * Delete multiple tags
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_all( WP_REST_Request $request ){

    }


    /**
     * Get all tags request for tags
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_all( WP_REST_Request $request ){


    }


    /**
     * Function used to handle a single get request
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0 
     */
    public function get_single( WP_REST_Request $request ){
 


    }


    /**
     * Get all contacts related to specific tag
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_contacts( WP_REST_Request $request )
    {

    }


}