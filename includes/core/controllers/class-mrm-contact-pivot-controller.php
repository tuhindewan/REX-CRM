<?php

namespace MRM\Controllers;

use MRM\Common\MRM_Common;
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

class MRM_Contact_Pivot_Controller {

    use Singleton;


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
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $groups = isset( $params['groups'] ) ? $params['groups'] : NULL;

        return MRM_Contact_Group_Pivot_Model::delete_groups_to_contact( $params['contact_id'], $groups );
        
    }


    /**
     * Return group ids related to a contact
     * 
     * @param mixed $contact_id
     * 
     * @return array
     * @since 1.0.0
     */
    public function get_groups_to_contact( $contact_id )
    {
        $results = MRM_Contact_Group_Pivot_Model::get_groups_to_contact( $contact_id );
        return json_decode( json_encode( $results ), true );
    }


    /**
     * Set Contact and groups many to many relation
     * 
     * @param array $pivotIds
     * @return void
     * @since 1.0.0
     */
    public static function set_groups_to_contact( $pivotIds )
    {
        MRM_Contact_Group_Pivot_Model::add_groups_to_contact( $pivotIds );
    }


    /**
     * Get all contacts related to a tag or list or segments
     * 
     * @param mixed $group_id
     * @return array
     * @since 1.0.0
     */
    public static function get_contacts_to_group( $group_id )
    {
        $results = MRM_Contact_Group_Pivot_Model::get_contacts_to_group( $group_id );
        $contact_ids = json_decode( json_encode( $results ), true );
        $contacts  = array_map( function( $contact_id ) {
            return $contact_id['contact_id'];
        }, $contact_ids );
        return $contacts;
    }

}