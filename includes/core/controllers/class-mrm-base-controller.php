<?php

namespace MRM\Controllers;

use WP_REST_Response;

abstract class MRM_Base_Controller {

  public $response_code = 200;

  public function get_success_response($message = '', $code = 0, $wp_error = null ) {
    return array(
			'code'    => $code,
			'message' => $message,
			'data'  => [
        "status" => $code,
        "error_code"  => []
      ],
		);
  }


  public function get_error_response($message = '', $code = 0, $wp_error = null  ) {
    if ( 0 !== absint( $code ) ) {
			$this->response_code = $code;
		} else if ( empty( $this->response_code ) ) {
			$this->response_code = 500;
		}

		$data = array();
		if ( $wp_error instanceof \WP_Error ) {
			$message = $wp_error->get_error_message();
			$data    = $wp_error->get_error_data();
		}

		return new \WP_Error( $this->response_code, $message, array( 'status' => $this->response_code, 'error_data' => $data ) );
  }
}