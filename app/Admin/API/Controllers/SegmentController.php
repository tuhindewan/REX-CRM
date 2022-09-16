<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\MRM\DataBase\Models\ContactGroupModel;
use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;
use Exception;
use Mint\MRM\DataStores\SegmentData;
use MRM\Common\MRM_Common;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle Segment Module related API callbacks]
 */

class SegmentController extends BaseController {
    
    use Singleton;

    /**
     * Create a new segment or update a existing segment
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Segment title validation
        $title = isset( $params['title'] ) ? sanitize_text_field($params['title']) : NULL;
        if ( empty( $title ) ) {
			return $this->get_error_response( __( 'Title is mandatory', 'mrm' ),  200 );
		}

        // Segment avaiability check
        $slug = sanitize_title( $title );
        $params['slug'] = $slug;
        $exist = ContactGroupModel::is_group_exist( $slug, "segments" );

        if ( $exist && !isset($params['segment_id']) ) {
			return $this->get_error_response( __( 'Segment is already available', 'mrm' ),  200 );
		}

        // Segment filters validation
        if ( empty( $params['data'] ) || ( is_array( $params['data'] ) && empty( $params['data']['filters'] ) ) ) {
			return $this->get_error_response( __( 'Filters are mandatory.', 'mrm' ), 200 );
		}

        // Segment object create and insert or update to database
        try {
            $segment = new SegmentData( $params );

            if(isset($params['segment_id'])){
                $success = ContactGroupModel::update( $segment, $params['segment_id'], "segments" );
            }else{
                $success = ContactGroupModel::insert( $segment, "segments" );
            }

            if($success) {
                return $this->get_success_response(__( 'Segment has been saved successfully', 'mrm' ), 201);
            }
            return $this->get_error_response(__( 'Failed to save', 'mrm' ), 200);
        } catch(Exception $e) {
                return $this->get_error_response(__( 'Segment is not valid', 'mrm' ), 200);
        }

    }


    /**
     * Get segments for list views
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_all( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =  isset($params['page']) ? $params['page'] : 1;
        $perPage    =  isset($params['per-page']) ? $params['per-page'] : 25;
        $offset     =  ($page - 1) * $perPage;

        // Segment Search keyword
        $search = isset($params['search']) ? sanitize_text_field( $params['search'] ) : '';

        $segments = ContactGroupModel::get_all( "segments", $offset, $perPage, $search );
        if( isset( $segments ) ) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $segments);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);

    }


    /**
     * Get a specefic segment data
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_single( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $segment_id = isset($params['segment_id']) ? $params['segment_id'] : '';
        $segment = ContactGroupModel::get( $segment_id );
        error_log(print_r($segment, 1));
        if(isset($segment)) {
            return $this->get_success_response("Query Successfull", 200, $segment);
        }
        return $this->get_error_response("Failed to Get Data", 400);
    }


    /**
     * Delete a segement 
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_single( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $segment_id = isset($params['segment_id']) ? $params['segment_id'] : '';

        $success = ContactGroupModel::destroy( $segment_id );
        if( $success ) {
            return $this->get_success_response( __( 'Segment has been deleted successfully', 'mrm' ), 200 );
        }

        return $this->get_error_response( __( 'Failed to delete', 'mrm' ), 400 );

    }


    /**
     * Delete multiple groups
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_all( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $segment_ids = isset($params['segment_ids']) ? $params['segment_ids'] : '';
        $success = ContactGroupModel::destroy_all( $segment_ids );
        if($success) {
            return $this->get_success_response(__( 'Segments has been deleted successfully', 'mrm' ), 200);
        }

        return $this->get_error_response(__( 'Failed to delete', 'mrm' ), 400);

    }

}