<?php

namespace MRM\Controllers;

use MRM\Common\MRM_Common;
use MRM\Data\MRM_Message;
use MRM\Traits\Singleton;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 10:28:03
 * @modify date 2022-08-17 10:28:03
 * @desc [Manage message related API request and responses]
 */


class MRM_Message_Controller {


    use Singleton;

    public function create_or_update( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $message = new MRM_Message( $params );

    }
}