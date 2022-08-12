<?php

namespace MRM\Controllers;

use MRM\Models\MRM_Note_Model;
use MRM\Models\MRM_Model_Common;
use MRM\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Data\MRM_Note;


/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */


class MRM_Note_Controller extends MRM_Base_Controller {
    
    use Singleton;

    /**
     * MRM_Note class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $model;

    /**
     * Get and send response to create a new note
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function create_or_update_contact_note(WP_REST_Request $request){
        $this->model = MRM_Note_Model::get_instance();

        
        // Get values from API
        $query_params   = $request->get_query_params();
        $query_params   = is_array( $query_params ) ? $query_params : array();
        $request_params = $request->get_params();
        $request_params = is_array( $request_params ) ? $request_params : array();
        $params         = array_replace( $query_params, $request_params );


        // Note Title validation
        $title = sanitize_text_field($params['title']);


        if ( empty( $title ) ) {
			$response            = __( 'Title is mandatory', 'mrm' );

			return $this->get_error_response( $response,  400);
		}

        // Note contact id validation
        $contact_id = sanitize_text_field($params['contact_id']);


        if ( empty( $contact_id ) ) {
			$response            = __( 'Contact ID is mandatory', 'mrm' );

			return $this->get_error_response( $response,  400);
		}

        // Note object create and insert or update to database
        try {
            $note = new MRM_Note($params);

            if(isset($params['note_id'])){
                $success = $this->model->update($note, $params['contact_id'], $params['note_id']);
            }else{
                $success = $this->model->insert($note, $params['contact_id']);
            }

            if($success) {
                return $this->get_success_response(__( 'Insertion successfull', 'mrm' ), 201);
            } else {
                return $this->get_error_response(__( 'Insertion Failed', 'mrm' ), 400);
            }
        } catch(Exception $e) {
                return $this->get_error_response(__( 'Note is not valid', 'mrm' ), 400);
        }
    }


    /**
     * Delete notes for a contact
     * 
     * @param request
     * @return void
     * @since 1.0.0
     */
    public function delete_contact_note(WP_REST_Request $request){
        $this->model = MRM_Note_Model::get_instance();

        // Get url parameters
        $urlParams = $request->get_url_params();

        error_log(print_r($urlParams['note_id'],1));

        // Segments avaiability check
        $exist = MRM_Note_Model::is_group_exist($urlParams['note_id']);

        if ( !$exist ) {
			$response = __( 'Note not found', 'mrm' );

			return $this->get_error_response( $response,  400);
		}

        $success = MRM_Note_Model::delete_group($urlParams['note_id']);

        if($success) {
            return $this->get_success_response( __( 'Note for a contact Delete Successfull', 'mrm' ), 200 );
        } else {
            return $this->get_error_response( __( 'Failed to Delete', 'mrm' ), 400 );
        }
    }

    /**
     * Get all notes for a contact controller
     * 
     * @param request
     * @return JSON
     * @since 1.0.0
     */
    public function get_all_contact_notes(WP_REST_Request $request){
        $this->model = MRM_Note_Model::get_instance();

        // Get values from API
        $query_params   = $request->get_query_params();
        $query_params   = is_array( $query_params ) ? $query_params : array();
        $request_params = $request->get_params();
        $request_params = is_array( $request_params ) ? $request_params : array();
        $params         = array_replace( $query_params, $request_params );

        $page = isset($params['page']) ? $params['page'] : 1;
        $perPage = isset($params['per-page']) ? $params['per-page'] : 3;
        $offset = ($page - 1) * $perPage;

        // Segment Search keyword
        $search = isset($params['search']) ? sanitize_text_field($params['search']) : '';

        $data = $this->model->get_all_contact_notes($params['contact_id'] ,$offset, $perPage, $search);


        if(isset($data)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 201, $data);
        } else {
            return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);
        }
    }

}