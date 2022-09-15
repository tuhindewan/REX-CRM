<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;
use Exception;
use Mint\MRM\DataBase\Models\CustomFieldModel;
use Mint\MRM\DataStores\CustomFieldData;
use MRM\Common\MRM_Common;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Responsible for managing Custom Fields API callbacks]
 */

class CustomFieldController extends BaseController {
    
    use Singleton;

    /**
     * Field object arguments
     * 
     * @var object
     * @since 1.0.0
     */
    public $args;


    /**
     * Get and send response to create or update a custom field 
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){
        
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // Filed title validation
        $title = isset( $params['title'] ) ? sanitize_text_field($params['title']) : NULL;

        if ( empty( $title ) ) {
            return $this->get_error_response( __( 'Title is mandatory', 'mrm' ),  200);
        }

        $slug = sanitize_title( $title );

        // Field type validation
        $type = isset( $params['type'] ) ? sanitize_text_field($params['type']) : NULL;

        if ( empty( $type ) ) {
            return $this->get_error_response( __( 'Type is mandatory', 'mrm' ),  202);
        }


        if ( ! empty( $params['options'] ) ) {
            $options = $params['options'];
        }
        
        $placeholder = isset( $params['placeholder'] ) ? sanitize_text_field( $params['placeholder'] ) : '';

        $meta = array();
        if ( ! empty( $options ) ) {
            $meta['options'] = $options;
        }
        if ( ! empty( $placeholder ) ) {
            $meta['placeholder'] = $placeholder;
        }
        
        $this->args = array(
            'title'    => $title,
            'slug'     => $slug,
            'type'     => $type,
            'meta'     => $meta
        );

        $field = new CustomFieldData( $this->args );

        // Field object create and insert or update to database
        try {

            if(isset( $params['field_id'] )){
                $field_id = isset( $params['field_id'] ) ? $params['field_id'] : '';

                $success = CustomFieldModel::update( $field, $field_id );
            }else{

                $success = CustomFieldModel::insert( $field );
            }

            if($success) {
                return $this->get_success_response(__( 'Field has been saved successfully', 'mrm' ), 201);
            }
            return $this->get_error_response(__( 'Failed to save', 'mrm' ), 400);

        } catch(Exception $e) {
            return $this->get_error_response(__( $e->getMessage(), 'mrm' ), 400);
        }

    }


    /**
     * Request for deleting a single field 
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_single( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $field_id = isset( $params['field_id'] ) ? $params['field_id'] : "";

        $success = CustomFieldModel::destroy( $field_id );
        if( $success ) {
            return $this->get_success_response( __( 'Field has been deleted successfully', 'mrm' ), 200 );
        }

        return $this->get_error_response( __( 'Failed to delete', 'mrm' ), 400 );

    }


    /**
     * TODO: complete this function in order to delete multilple fields
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_all( WP_REST_Request $request ){

        
    }


    /**
     * Get all fields request
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_all( WP_REST_Request $request ){

       // Get values from API
       $params = MRM_Common::get_api_params_values( $request );

       $fields = CustomFieldModel::get_all();

       if(isset($fields)) {
           return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $fields);
       }
       return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);

    }


    /**
     * Function use to get single field 
     * 
     * @param WP_REST_Request
     * @return WP_REST_Response
     * @since 1.0.0 
     */
    public function get_single( WP_REST_Request $request ){
 
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
    
        $field = CustomFieldModel::get( $params['field_id'] );
        
        if( $field->meta ){
            $field->options = maybe_unserialize( $field->meta );
        }
        
        if( isset( $field ) ) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $field);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);

    }

}