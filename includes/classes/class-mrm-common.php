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
    public static function get_rand_hash( $len=32 )
	{
		return substr(md5(openssl_random_pseudo_bytes(20)),-$len);
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

}

