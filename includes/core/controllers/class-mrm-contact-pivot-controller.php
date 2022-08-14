<?php

namespace MRM\Controllers;

use MRM\Models\MRM_Contact_Group_Pivot_Model;
use MRM\Traits\Singleton;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-11 11:58:47
 * @modify date 2022-08-11 11:58:47
 * @desc [Handle Contacts and Groups related API callbacks]
 */

class MRM_Contact_Pivot_Controller extends MRM_Base_Controller {

    use Singleton;

    /**
     * MRM_Contact_Group_Pivot_Model class object
     * 
     * @var object
     * @since 1.0.0
     */
    public $model;


    /**
     * Preapre API values and send to pivot model to delete data
     * 
     * @param WP_REST_Request $request
     * 
     * @return bool
     * @since 1.0.0
     */
    public function delete_groups( WP_REST_Request $request )
    {
        $this->model = MRM_Contact_Group_Pivot_Model::get_instance();

        // Get values from API
        $query_params   =   $request->get_query_params();
        $request_params =   $request->get_params();
        $params         =   array_replace( $query_params, $request_params );

        $groups = isset( $params['groups'] ) ? $params['groups'] : NULL;

        return $this->model->delete_groups_to_contact( $params['contact_id'], $groups );
        
    }

}