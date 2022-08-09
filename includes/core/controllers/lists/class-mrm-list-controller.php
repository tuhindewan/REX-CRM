<?php

namespace MRM\Controllers\Lists;

use MRM\Traits\Singleton;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */

class MRM_List_Controller {
    
    use Singleton;
   
    public function __construct()
    {
        
    }

    public function mrm_list_create(WP_REST_Request $request){
        return rest_ensure_response($request);
    }

    public function mrm_list_create_permissions_check(){
        return true;
    }
}