<?php

namespace MRM\Controllers;

use MRM\Traits\Singleton;
use WP_REST_Request;
use MRM\Data\MRM_Segment;
use Exception;
use MRM\Models\MRM_Contact_Group_Model;
use MRM\Models\MRM_Model_Common;

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
     * MRM_Contact_Group_Model class object
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
        $this->model = MRM_Contact_Group_Model::get_instance();
        
        // Get values from API
        $query_params   = $request->get_query_params();
        $request_params = $request->get_params();
        $params         = array_replace( $query_params, $request_params );

        // Segment Title validation
        $title = sanitize_text_field($params['title']);

        if ( empty( $title ) ) {
			$response            = __( 'Title is mandatory', 'mrm' );

			return $this->get_error_response( $response,  400);
		}

        // Segment filters validation
        if ( empty( $params['data'] ) || ( is_array( $params['data'] ) && empty( $params['data']['filters'] ) ) ) {
			$response            = __( 'Filters are mandatory.', 'mrm' );

			return $this->get_error_response( $response, 400 );
		}

        // Segment object create and insert or update to database
        try {
            $segment = new MRM_Segment($params);

            if(isset($params['segment_id'])){
                $success = $this->model->update($segment, $params['segment_id'], 3);
            }else{
                $success = $this->model->insert($segment, 3);
            }

            if($success) {
                return $this->get_success_response(__( 'Insertion successfull', 'mrm' ), 201);
            } else {
                return $this->get_error_response(__( 'Insertion Failed', 'mrm' ), 400);
            }
        } catch(Exception $e) {
                return $this->get_error_response(__( 'Segment is not valid', 'mrm' ), 400);
        }

    }



    /**
     * Get segments for list views
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public function get_segments( WP_REST_Request $request )
    {
        $this->model = MRM_Contact_Group_Model::get_instance();

        // Get values from API
        $query_params   = $request->get_query_params();
        $request_params = $request->get_params();
        $params         = array_replace( $query_params, $request_params );

        $page = isset($params['page']) ? $params['page'] : 1;
        $perPage = isset($params['per-page']) ? $params['per-page'] : 3;
        $offset = ($page - 1) * $perPage;

        // Segment Search keyword
        $search = isset($params['search']) ? sanitize_text_field( $params['search'] ) : '';

        $data = $this->model->get_groups( 3, $offset, $perPage, $search );

        if(isset($data)) {
            return $this->get_success_response( __( 'Query Successfull', 'mrm' ), 201, $data );
        } else {
            return $this->get_error_response( __( 'Failed to get data', 'mrm' ), 400 );
        }

    }


    /**
     * Delete a segement 
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public function delete_segment( WP_REST_Request $request )
    {
        $this->model = MRM_Contact_Group_Model::get_instance();

        // Get url parameters
        $urlParams = $request->get_url_params();

        // Segments avaiability check
        $exist = MRM_Model_Common::is_group_exist($urlParams['segment_id']);

        if ( !$exist ) {
			$response = __( 'Segment not found', 'mrm' );

			return $this->get_error_response( $response,  400);
		}

        $success = $this->model->delete_group($urlParams['segment_id']);

        if($success) {
            return $this->get_success_response( __( 'Segment Delete Successfull', 'mrm' ), 200 );
        } else {
            return $this->get_error_response( __( 'Failed to Delete', 'mrm' ), 400 );
        }

    }


    /**
     * Delete multiple groups
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public function delete_segments( WP_REST_Request $request )
    {
        $this->model = MRM_Contact_Group_Model::get_instance();

        // get json body as an array
        $body = $request->get_json_params();

        $success = $this->model->delete_groups($body['segment_ids']);

        if($success) {
            return $this->get_success_response(__( 'Segments Delete Successfull', 'mrm' ), 200);
        } else {
            return $this -> get_error_response(__( 'Failed to Delete', 'mrm' ), 400);
        }

    }

}