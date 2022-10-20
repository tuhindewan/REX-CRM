<?php

namespace Mint\MRM\DataBase\Models;

use Mint\MRM\DataBase\Tables\ContactGroupPivotSchema;
use Mint\MRM\DataBase\Tables\ContactSchema;
use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage contact and group relationship related database operations]
*/

class ContactGroupPivotModel {

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
        $table_name = $wpdb->prefix . ContactGroupPivotSchema::$table_name;

        try{
            foreach($pivot_ids as $id) {
                $wpdb->insert($table_name, array(
                    'contact_id'    =>  $id['contact_id'],
                    'group_id'      =>  $id['group_id'],
                    'created_at'    =>  current_time('mysql')
                ));
            }
            return true;
        } catch(\Exception $e){
            return false;
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
    public static function get_contacts_to_group( $ids, $offset = 0, $per_batch = 0 )
    {
        global $wpdb;
        $pivot_table = $wpdb->prefix . ContactGroupPivotSchema::$table_name;
        $ids = is_array( $ids ) && !empty( $ids ) ? implode( ', ', $ids ) : $ids;

        try {
            $select_query   = $wpdb->prepare( "SELECT DISTINCT `contact_id` FROM {$pivot_table} WHERE `group_id` IN( %s )", $ids );

            if ( $per_batch ) {
                $select_query = $wpdb->prepare($select_query . " LIMIT %d, %d", $offset, $per_batch );
            }
            $select_query = str_replace( '( \'', '( ', $select_query );
            $select_query = str_replace( '\' )', ' )', $select_query );

            return $wpdb->get_results( $select_query );

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
        $pivot_table = $wpdb->prefix . ContactGroupPivotSchema::$table_name;
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
        $pivot_table = $wpdb->prefix . ContactGroupPivotSchema::$table_name;

        try {
            $select_query   = $wpdb->prepare("SELECT group_id FROM $pivot_table WHERE contact_id = %d",array( $contact_id ));
            $query_results  = $wpdb->get_results($select_query);
            return $query_results;

        } catch(\Exception $e) {
            return false;
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
    public static function get_contacts_to_campaign( $groups, $offset, $limit )
    {
        global $wpdb;
        $pivot_table = $wpdb->prefix . ContactGroupPivotSchema::$table_name;
        $contact_table = $wpdb->prefix . ContactSchema::$table_name;

        try {
            $groups = implode(",", array_map( 'intval', $groups ));
            $select_query   = $wpdb->prepare( "SELECT *
                                                FROM $contact_table
                                                INNER JOIN $pivot_table 
                                                    ON $pivot_table.contact_id = wp_mrm_contacts.id 
                                            WHERE $pivot_table.group_id in ($groups) LIMIT $offset, $limit" );
            $query_results  = $wpdb->get_results( $select_query );
            return $query_results;

        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Returns list of contacts related to a group 
     * 
     * @param mixed $id group id
     * 
     * @return int
     * @since 1.0.0
     */
    public static function get_contacts_count_to_campaign( $groups )
    {
        global $wpdb;
        $pivot_table = $wpdb->prefix . ContactGroupPivotSchema::$table_name;
        $contact_table = $wpdb->prefix . ContactSchema::$table_name;

        try {
            $groups = implode(",", array_map( 'intval', $groups ));
            $select_query   = $wpdb->prepare( "SELECT COUNT(*) as total
                                                FROM $contact_table
                                                INNER JOIN $pivot_table 
                                                    ON $pivot_table.contact_id = wp_mrm_contacts.id 
                                            WHERE $pivot_table.group_id in ($groups)" );
            $query_results  = $wpdb->get_results( $select_query );
            $count = intval($query_results[0]->total);
            return $count;

        } catch(\Exception $e) {
            return false;
        }
    }
}