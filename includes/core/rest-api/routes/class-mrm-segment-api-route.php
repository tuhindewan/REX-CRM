<?php

namespace MRM\REST\Routes;


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
     * MRM_Segment class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $mrm_segment;

    

    /**
     * Register API endpoints routes for segment module
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_routes()
    {
        
    }

}