<?php

namespace MRM\Controllers;

use WP_Error;
use WP_REST_Request;
use WP_REST_Response;

abstract class MRM_Base_Controller {
  public function get_success_response(string $msg, int $status = 200 ) {
    return new WP_REST_Response(
      array(
        'success' => true,
        'msg' => isset($msg) ? $msg : "Successfully performed operation"
      ),
      $status
    );
  }
  public function get_error_response(string $msg, int $code  ) {
    return new WP_Error(
      $code,
      $msg,
      array(
        'success' => false,
        'msg' => isset($msg) ? $msg : "Failed to perform operation"
      ),
    );
  }
}