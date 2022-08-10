<?php

namespace MRM\Controllers;

use WP_Error;
use WP_REST_Request;
use WP_REST_Response;

abstract class MRM_Base_Controller {
  public function get_success_response(string $msg = "Successfully performed operation", int $status = 200, $data = NULL ) {
    return new WP_REST_Response(
      array(
        'success' => true,
        'msg' => $msg,
        'data' => $data 
      ),
      $status
    );
  }
  public function get_error_response(string $msg = "Failed to perform operation", int $code  ) {
    return new WP_Error(
      $code,
      $msg,
      array(
        'success' => false,
        'msg' => $msg 
      ),
    );
  }
}