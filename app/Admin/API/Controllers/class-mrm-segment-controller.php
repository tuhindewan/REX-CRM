<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;
use MRM\Data\MRM_Segment;
use Exception;
use MRM\Models\MRM_Contact_Group_Model;
use MRM\Common\MRM_Common;

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
			return $this->get_error_response( __( 'Title is mandatory', 'mrm' ),  400 );
		}

        // Segment avaiability check
        $exist = MRM_Contact_Group_Model::is_group_exist( $params['slug'], "segments" );
        if ( $exist ) {
			return $this->get_error_response( __( 'Segment is already available', 'mrm' ),  400 );
		}

        // Segment filters validation
        if ( empty( $params['data'] ) || ( is_array( $params['data'] ) && empty( $params['data']['filters'] ) ) ) {
			return $this->get_error_response( __( 'Filters are mandatory.', 'mrm' ), 400 );
		}

        // Segment object create and insert or update to database
        try {
            $segment = new MRM_Segment( $params );

            if(isset($params['segment_id'])){
                $success = MRM_Contact_Group_Model::update( $segment, $params['segment_id'], "segments" );
            }else{
                $success = MRM_Contact_Group_Model::insert( $segment, "segments" );
            }

            if($success) {
                return $this->get_success_response(__( 'Segment has been saved successfully', 'mrm' ), 201);
            }
            return $this->get_error_response(__( 'Failed to save', 'mrm' ), 400);
        } catch(Exception $e) {
                return $this->get_error_response(__( 'Segment is not valid', 'mrm' ), 400);
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

        $groups = MRM_Contact_Group_Model::get_all( "segments", $offset, $perPage, $search );

        if( isset( $groups ) ) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $groups);
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

        $group = MRM_Contact_Group_Model::get( $params['segment_id'] );

        if(isset($group)) {
            return $this->get_success_response("Query Successfull", 200, $group);
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

        // Segments avaiability check
        $exist = MRM_Contact_Group_Model::is_group_exist( $params['slug'], "segments" );

        if ( !$exist ) {
			return $this->get_error_response( __( 'Segemnt not found', 'mrm' ),  400);
		}

        $success = MRM_Contact_Group_Model::destroy( $params['segment_id'] );
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

        $success = MRM_Contact_Group_Model::destroy_all( $params['segment_ids'] );
        if($success) {
            return $this->get_success_response(__( 'Segments has been deleted successfully', 'mrm' ), 200);
        }

        return $this->get_error_response(__( 'Failed to delete', 'mrm' ), 400);

    }

}