<?php

namespace MRM\Controllers;

use MRM\Traits\Singleton;
use WP_REST_Request;
use MRM\Data\MRM_Segment;
use Exception;
use MRM\Models\MRM_Segment_Model;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle Segment Module related API callbacks]
 */

class MRM_Segment_Controller extends MRM_Base_Controller {
    
    use Singleton;

    /**
     * MRM_Segment_Model class object
     * 
     * @var object
     * @since 1.0.0
     */
    public $model;


    /**
     * Create a new segment or update a existing segment
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public function create_or_update_segment(WP_REST_Request $request)
    {
        $this->model = MRM_Segment_Model::get_instance();
        
        // Get values from API
        $query_params   = $request->get_query_params();
        $query_params   = is_array( $query_params ) ? $query_params : array();
        $request_params = $request->get_params();
        $request_params = is_array( $request_params ) ? $request_params : array();
        $params         = array_replace( $query_params, $request_params );

        // Segment Title validation
        $title = sanitize_text_field($params['title']);

        if ( empty( $title ) ) {
			$this->response_code = 400;
			$response            = __( 'Title is mandatory', 'mrm' );

			return $this->get_error_response( $response,  $this->response_code);
		}

        // Segment filters validation
        if ( empty( $params['data'] ) || ( is_array( $params['data'] ) && empty( $params['data']['filters'] ) ) ) {
			$this->response_code = 400;
			$response            = __( 'Filters are mandatory.', 'mrm' );

			return $this->get_error_response( $response, $this->response_code );
		}

        // Segment object create and insert or update to database
        try {
            $segment = new MRM_Segment($params);

            if(isset($params['segment_id'])){
                $success = $this->model->update($segment, $params['segment_id']);
            }else{
                $success = $this->model->insert($segment);
            }

            if($success) {
                return $this->get_success_response("Insertion successfull", 201);
            } else {
                return $this->get_error_response('Failed to insert', 400);
            }
        } catch(Exception $e) {
                return $this->get_error_response('Segment is not valid', 400);
        }

    }

}