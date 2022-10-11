<?php

namespace Mint\MRM\Admin\API\Controllers;

use Exception;
use Mint\MRM\DataBase\Models\FormModel;
use Mint\MRM\DataStores\FormData;
use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;
use MRM\Common\MRM_Common;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-07-10 11:03:17
 * @modify date 2022-07-10 11:03:17
 * @desc [Handle Form Module related API callbacks]
 */

class FormController extends BaseController {

    use Singleton;

    /**
     * Form object arguments
     * 
     * @var object
     * @since 1.0.0
     */
    public $args;


    /**
     * Function used to handle create  or update requests
     *
     * @param WP_REST_Request $request
     *
     * @return WP_REST_RESPONSE
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ){

        // Get values from the API request
        $params = MRM_Common::get_api_params_values( $request );

        //Form title validation
        $title = isset( $params['title'] ) ? sanitize_text_field( $params['title'] ) : NULL;
        if (empty($title)) {
            return $this->get_error_response( __( 'Form name is mandatory', 'mrm' ), 200);
        }

        // Form object create and insert or update to database
        $this->args = array(
            'title'          => $title,
            'form_body'      => isset( $params['form_body'] ) ? $params['form_body'] : "",
            'form_position'  => isset( $params['form_position'] ) ? $params['form_position'] : "",
            'status'         => isset( $params['status'] ) ? $params['status'] : "",
            'group_ids'      => isset( $params['group_ids'] ) ? $params['group_ids'] : "",
        );

        try {
            $form = new FormData( $this->args );


            if( isset( $params['form_id']) ) {
                $success = FormModel::update( $form, $params['form_id'], "forms" );
            } else {
                $success = FormModel::insert( $form, "forms" );
            }

            if($success) {
                return $this->get_success_response(__( 'Form has been saved successfully', 'mrm' ), 201, $success);
            }
            return $this->get_error_response(__( 'Failed to save', 'mrm' ), 200);

        } catch(Exception $e) {
            return $this -> get_error_response(__( 'Form is not valid', 'mrm' ), 200);
        }
    }



    /**
     * Function used to handle paginated get and search requests
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_all( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =  isset($params['page']) ? absint( $params['page'] ) : 1;
        $perPage    =  isset($params['per-page']) ? absint( $params['per-page'] ) : 25;
        $offset     =  ($page - 1) * $perPage;

        $order_by = isset($params['order-by']) ? strtolower($params['order-by']) : 'id';
        $order_type = isset($params['order-type']) ? strtolower($params['order-type']) : 'desc';

        // valid order by fields and types
        $allowed_order_by_fields = array("title", "created_at");
        $allowed_order_by_types = array("asc", "desc");

        // validate order by fields or use default otherwise
        $order_by = in_array($order_by, $allowed_order_by_fields) ? $order_by : 'id';
        $order_type = in_array($order_type, $allowed_order_by_types) ? $order_type : 'desc';



        // Form Search keyword
        $search = isset($params['search']) ? sanitize_text_field($params['search']) : '';

        $groups = FormModel::get_all( $offset, $perPage, $search);

        if(isset($groups)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $groups);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);
    }


    /**
     * Function used to handle paginated get all forms only title and id
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_all_id_title( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );


        $forms = FormModel::get_all_id_title();

        $form_data = [];
        $list_none = array('value' => 0, 'label' => 'None');
        array_push($form_data, $list_none);

        foreach ( $forms['data'] as $form){
            $forms_ob = array(
                'value' => $form['id'],
                'label' => $form['title']
            );
            array_push($form_data,$forms_ob);
        }


        if(isset($forms)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $form_data);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);
    }


    /**
     * Function used to handle a single get request
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_single( WP_REST_Request $request ){

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $group = FormModel::get( $params['form_id'] );

        if(isset($group)) {
            return $this -> get_success_response(__('Query Successful.', 'mrm' ), 200, $group);
        }
        return $this -> get_error_response(__('Failed to get data.', 'mrm' ), 400);

    }


    /**
     * Function used to handle delete single form requests
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_single( WP_REST_Request $request ){
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $success = FormModel::destroy( $params['form_id'] );
        if( $success ) {
            return $this->get_success_response( __( 'Form has been deleted successfully', 'mrm' ), 200 );
        }

        return $this->get_error_response( __( 'Failed to delete', 'mrm' ), 400 );
    }


    /**
     * Function used to handle delete requests
     *
     * @param WP_RESR_Request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function delete_all( WP_REST_Request $request ){
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // $success = FormModel::destroy_all( $params['list_ids'] );
        // if($success) {
        //     return $this->get_success_response(__( 'Lists has been deleted successfully', 'mrm' ), 200);
        // }

        return $this->get_error_response(__( 'Failed to delete', 'mrm' ), 400);

    }



}