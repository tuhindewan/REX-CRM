<?php

namespace MRM\Controllers;

use MRM\Models\MRM_Workflow_Model;
use MRM\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Data\MRM_Workflow;
use MRM\Common\MRM_Common;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Responsible for managing Workflow Module API callbacks]
 */

class MRM_Workflow_Controller extends MRM_Base_Controller {
    
    use Singleton;

    /**
     * Get and send response to create a new tag
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Workflow title validation
        $title = isset( $params['title'] ) ? sanitize_text_field($params['title']) : NULL;

        if ( empty( $title ) ) {
			$response = __( 'Title is mandatory', 'mrm' );
			return $this->get_error_response( $response,  400);
		}

        // Workflow object create and insert or update to database
        try {

            // Workflow avaiability check
            $exist = MRM_Workflow_Model::is_workflow_exist( $params['workflow_id'], 1 );

            $workflow = new MRM_Workflow( $params );

            if(isset($params['workflow_id'])){
                $success = MRM_Workflow_Model::update( $workflow , $params['workflow_id'] );
            }else{
                $success = MRM_Workflow_Model::insert( $workflow, 1 );
            }

            if($success) {
                return $this->get_success_response(__( 'Workflow has been saved successfully', 'mrm' ), 201);
            }
            return $this->get_error_response(__( 'Failed to save', 'mrm' ), 400);

        } catch(Exception $e) {
                return $this->get_error_response(__( 'Workflow is not valid', 'mrm' ), 400);
        }
    }


    /**
     * Delete request for workflows
     * 
     * @param request
     * @return void
     * @since 1.0.0
     */
    public function delete_single( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // workflow avaiability check
        $exist = MRM_Workflow_Model::is_workflow_exist( $params['workflow_id'] );

        if ( !$exist ) {
			$response = __( 'Workflow not found', 'mrm' );
			return $this->get_error_response( $response,  400);
		}

        $success = MRM_Workflow_Model::destroy( $params['workflow_id'] );
        if( $success ) {
            return $this->get_success_response( __( 'Workflow has been deleted successfully', 'mrm' ), 200 );
        }

        return $this->get_error_response( __( 'Failed to delete', 'mrm' ), 400 );
    }



    /**
     * Delete multiple workflows
     * 
     * @param request
     * @return void
     * @since 1.0.0
     */
    public function delete_all( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $success = MRM_Workflow_Model::destroy_all( $params['workflow_ids'] );
        if($success) {
            return $this->get_success_response(__( 'Workflows have been deleted successfully', 'mrm' ), 200);
        }

        return $this->get_error_response(__( 'Failed to delete', 'mrm' ), 400);
    }


    /**
     * Get all workflows request for workflows
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function get_all( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =  isset($params['page']) ? $params['page'] : 1;
        $perPage    =  isset($params['per-page']) ? $params['per-page'] : 25;
        $offset     =  ($page - 1) * $perPage;

        // Tag Search keyword
        $search = isset($params['search']) ? sanitize_text_field($params['search']) : '';

        $groups = MRM_Workflow_Model::get_all($offset, $perPage, $search );

        if(isset($groups)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $groups);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);

    }


    /**
     * Function used to handle a single get request
     * 
     * @param $request
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */
    public function get_single( WP_REST_Request $request ){
 
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
    
        $group = MRM_Workflow_Model::get( $params['workflow_id'] );

        if(isset($group)) {
            return $this->get_success_response("Query Successfull", 200, $group);
        }
        return $this->get_error_response("Failed to Get Data", 400);

    }

}