<?php

namespace MRM\Models;

use MRM\DB\Tables\MRM_Contact_Group_Pivot_Table;
use MRM\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage contact and group relationship related database operations]
*/

class MRM_Contact_Group_Pivot_Model {

    use Singleton;


    /**
     * Run SQL query to insert contact and groups relation
     * 
     * @param array $pivot_ids
     * 
     * @return void
     * @since 1.0.0
     */
    public static function add_groups_to_contact( $pivot_ids )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Group_Pivot_Table::$mrm_table;

        foreach($pivot_ids as $id) {
            $wpdb->insert($table_name, array(
                'contact_id'    =>  $id['contact_id'],
                'group_id'      =>  $id['group_id'],
                'created_at'    =>  current_time('mysql')
            ));
        }

    }


    /**
     * Returns list of contacts related to a group 
     * 
     * @param mixed $id group id
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_contacts_to_group( $id )
    {
        global $wpdb;
        $pivot_table = $wpdb->prefix . MRM_Contact_Group_Pivot_Table::$mrm_table;

        try {
            $select_query   = $wpdb->prepare( "SELECT contact_id FROM $pivot_table WHERE group_id = %d", array( $id ) );
            $query_results  = $wpdb->get_results( $select_query );
            return $query_results;

        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Run SQL query to delete contacts and groups relation from pivot table
     * 
     * @param mixed $contact_id
     * @param mixed $groups
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function delete_groups_to_contact( $contact_id, $groups )
    {
        global $wpdb;
        $pivot_table = $wpdb->prefix . MRM_Contact_Group_Pivot_Table::$mrm_table;
        $groups = implode( ',', array_map( 'intval', $groups ) );
        try {
           return $wpdb->query("DELETE FROM $pivot_table WHERE contact_id = $contact_id AND group_id IN ($groups)");
        } catch(\Exception $e) {
            return false;
        }
        return true;
    }


    /**
     * Run SQL Query to get group ids related to a contact
     * 
     * @param mixed $contact_id
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_groups_to_contact( $contact_id )
    {
        global $wpdb;
        $pivot_table = $wpdb->prefix . MRM_Contact_Group_Pivot_Table::$mrm_table;

        try {
            $select_query   = $wpdb->prepare("SELECT group_id FROM $pivot_table WHERE contact_id = %d",array( $contact_id ));
            $query_results  = $wpdb->get_results($select_query);
            return $query_results;

        } catch(\Exception $e) {
            return false;
        }
    }
}