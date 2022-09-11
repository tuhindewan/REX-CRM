<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\MRM\DataBase\Models\NoteModel;
use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Data\MRM_Note;
use MRM\Common\MRM_Common;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle Note for a contact API related callbacks]
 */


class NoteController extends BaseController {
    
    use Singleton;

    /**
     * Get and send response to create a new note
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Note Title validation
        $title = isset( $params['title'] ) ? sanitize_text_field( $params['title'] ) : '';
        if ( empty( $title ) ) {
			return $this->get_error_response( __( 'Title is mandatory', 'mrm' ),  400);
		}

        // Note type validation
        $type = isset( $params['type'] ) ? sanitize_text_field( $params['type'] ) : '';
        if ( empty( $type ) ) {
			return $this->get_error_response( __( 'Type is mandatory', 'mrm' ),  400);
		}

        // Note description validation
        $description = isset( $params['description'] ) ? sanitize_text_field( $params['description'] ) : '';
        if ( empty( $description ) ) {
			return $this->get_error_response( __( 'Description is mandatory', 'mrm' ),  400);
		}

        // Note object create and insert or update to database
        try {
            $note = new MRM_Note( $params );

            if(isset($params['note_id'])){
                $success = NoteModel::update( $note, $params['contact_id'], $params['note_id'] );
            }else{
                $success = NoteModel::insert( $note, $params['contact_id'] );
            }

            if($success) {
                return $this->get_success_response(__( 'Note has been saved successfully', 'mrm' ), 201);
            }
            return $this->get_error_response(__( 'Failed to save', 'mrm' ), 400);

        } catch(Exception $e) {
            return $this->get_error_response(__( $e->getMessage(), 'mrm' ), 400);
        }
    }


    /**
     * Delete notes for a contact
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_single(WP_REST_Request $request){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Segments avaiability check
        $exist = NoteModel::is_note_exist($params['note_id']);

        if ( !$exist ) {
			return $this->get_error_response( __( 'Note not found', 'mrm' ),  400);
		}

        $success = NoteModel::destroy( $params['note_id'] );

        if($success) {
            return $this->get_success_response( __( 'Note has been deleted successfully', 'mrm' ), 200 );
        }
        return $this->get_error_response( __( 'Failed to Delete', 'mrm' ), 400 );

    }

    /**
     * Get all notes for a contact controller
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_all( WP_REST_Request $request ){

       // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =   isset($params['page']) ? $params['page'] : 1;
        $perPage    =   isset($params['per-page']) ? $params['per-page'] : 25;
        $offset     =   ($page - 1) * $perPage;

        // Note Search keyword
        $search = isset($params['search']) ? sanitize_text_field($params['search']) : '';

        $notes = NoteModel::get_all( $params['contact_id'], $offset, $perPage, $search );

        if(isset($notes)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $notes);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);
    }


    /**
     * TODO: write this method to get single note
     * @param WP_REST_Request $request
     * 
     * @return [type]
     */
    public function get_single(WP_REST_Request $request)
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
    
        $note = NoteModel::get( $params['note_id'] );

        if(isset($note)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $note);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);
    }


    /**
     * TODO: write this method to delete all or multiple notes
     * @param WP_REST_Request $request
     * 
     * @return [type]
     */
    public function delete_all(WP_REST_Request $request)
    {
        
    }

}