<?php

namespace MRM\Controllers\Tags;

use MRM\Data\MRM_Tag;
use MRM\Controllers\MRM_Base_Controller;
use MRM\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Models\MRM_Contact_Group_Model;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */


class MRM_Tag_Controller extends MRM_Base_Controller {
    
    use Singleton;

    /**
     * MRM_Contact_Group_Model class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $model;


    /**
     * Get and send response to create a new tag
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function create_or_update_tag(WP_REST_Request $request){

        $this->model = MRM_Contact_Group_Model::get_instance();

        // Get values from API
        $query_params   = $request->get_query_params();
        $request_params = $request->get_params();
        $params         = array_replace( $query_params, $request_params );

        // Tag Title validation
        $title = sanitize_text_field($params['title']);


        if ( empty( $title ) ) {
			$response            = __( 'Title is mandatory', 'mrm' );

			return $this->get_error_response( $response,  400);
		}

        // Tag object create and insert or update to database
        try {
            $tag = new MRM_Tag($params['title']);

            if(isset($params['tag_id'])){
                $success = $this->model->update($tag, $params['tag_id'], 1);
            }else{
                $success = $this->model->insert($tag, 1);
            }

            if($success) {
                return $this->get_success_response(__( 'Insertion successfull', 'mrm' ), 201);
            } else {
                return $this->get_error_response(__( 'Insertion Failed', 'mrm' ), 400);
            }
        } catch(Exception $e) {
                return $this->get_error_response(__( 'Tag is not valid', 'mrm' ), 400);
        }
    }


    /**
     * Delete request for tags
     * 
     * @param request
     * @return void
     * @since 1.0.0
     */
    public function delete_tag(WP_REST_Request $request){

        $this->model = MRM_Contact_Group_Model::get_instance();

        // Get url parameters
        $urlParams = $request->get_url_params();

        // Segments avaiability check
        $exist = $this->model->is_group_exist($urlParams['tag_id']);

        if ( !$exist ) {
			$response = __( 'Tag not found', 'mrm' );

			return $this->get_error_response( $response,  400);
		}

        $success = $this->model->delete_group($urlParams['tag_id']);

        if($success) {
            return $this->get_success_response( __( 'Tag Delete Successfull', 'mrm' ), 200 );
        } else {
            return $this->get_error_response( __( 'Failed to Delete', 'mrm' ), 400 );
        }
    }



    /**
     * Delete multiple tags
     * 
     * @param request
     * @return void
     * @since 1.0.0
     */
    public function delete_multiple_tags(WP_REST_Request $request){

        $this->model = MRM_Contact_Group_Model::get_instance();

        // get json body as an array
        $body = $request->get_json_params();

        $success = $this->model->delete_groups($body['tag_ids']);

        if($success) {
            return $this->get_success_response(__( 'Tags Delete Successfull', 'mrm' ), 200);
        } else {
            return $this -> get_error_response(__( 'Failed to Delete', 'mrm' ), 400);
        }
    }

    /**
     * Get all tags request for tags
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function get_all_tags(WP_REST_Request $request){

        $this->model = MRM_Contact_Group_Model::get_instance();

        // Get values from API
        $query_params   = $request->get_query_params();
        $request_params = $request->get_params();
        $params         = array_replace( $query_params, $request_params );

        $page = isset($params['page']) ? $params['page'] : 1;
        $perPage = isset($params['per-page']) ? $params['per-page'] : 3;
        $offset = ($page - 1) * $perPage;

        // Segment Search keyword
        $search = isset($params['search']) ? sanitize_text_field($params['search']) : '';

        $data = $this->model->get_groups( 1, $offset, $perPage, $search );


        if(isset($data)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 201, $data);
        } else {
            return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);
        }
    }


    /**
     * Function used to handle a single get request
     * @return WP_REST_RESPONSE
     * @since 1.0.0 
     */

    public function get_single_tag(WP_REST_Request $request){

        $this->model = MRM_Contact_Group_Model::get_instance();
 
        // get url parameters
        $urlParams = $request->get_url_params();
  
        $id = $urlParams['tag_id'];
  
        $data = $this->model->get_group($id);

        if(isset($data)) {
            return $this->get_success_response("Query Successfull", 200, $data);
        } else {
            return $this->get_error_response("Failed to Get Data", 400);
        }

     }

}