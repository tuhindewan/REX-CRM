<?php

namespace MRM\Common;

use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 15:11:01
 * @modify date 2022-08-10 15:11:01
 * @desc [Manage MRM common functions]
 */

class MRM_Common {

    /**
	 * Returns alphanumeric hash
	 * 
     * @param mixed $len=32
     * 
     * @return string
	 * @since 1.0.0
     */
    public static function get_rand_hash( $email, $len = 32 )
	{
		return substr(md5( $email ),-$len);
	}


    /**
     * Returns request query params or body values
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_api_params_values( WP_REST_Request $request )
    {
        $query_params   =  $request->get_query_params();
        $request_params =  $request->get_params();
        $params         =  array_replace( $query_params, $request_params );
        return $params;
    }


    /**
     * Return created by or author id 
     * 
     * @return int
     * @since 1.0.0
     */
    public static function get_current_user_id()
    {
        if ( is_user_logged_in() ) {
            return get_current_user_id();
        }
        return 1;     
    }


    /**
     * Get the possible csv mimes.
     *
     * @return array
     * @since 1.0.0
     */
    public static function csv_mimes()
    {
        return apply_filters('mrm_csv_mimes', array(
            'text/csv',
            'text/plain',
            'application/csv',
            'text/comma-separated-values',
            'application/excel',
            'application/vnd.ms-excel',
            'application/vnd.msexcel',
            'text/anytext',
            'application/octet-stream',
            'application/txt'
        ));
    }


    /**
     * Create a slug from a string
     * 
     * @param mixed $str
     * 
     * @return string
     * @since 1.0.0
     */
    public static function create_slug($str){
        $slug=preg_replace('/[^A-Za-z0-9-]+/', '-', $str);
        return $slug;
    }

}

