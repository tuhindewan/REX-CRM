<?php

namespace MRM\Models;

use MRM\DB\Tables\CustomFieldGroup;
use MRM\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage Field Groups related database operations]
 */

class FieldGroup{

    use Singleton;

    /**
     * Insert group information to database
     * 
     * @param $group        Field group object 
     * 
     * @return int|bool 
     * @since 1.0.0
     */
    public static function insert( $group )
    {
        global $wpdb;
        $group_table = $wpdb->prefix . CustomFieldGroup::$table_name;

        try {
            $wpdb->insert( $group_table, array(
                'title'         => $group->get_title(),
                'created_at'    => current_time('mysql')) 
            );
            return $wpdb->insert_id;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Update group information to database
     * 
     * @param object    $group         Field group object
     * @param int       $group_id
     * @return bool
     * @since 1.0.0
     */
    public static function update( $group, $id )
    {
        global $wpdb;
        $group_table = $wpdb->prefix . CustomFieldGroup::$table_name;

        try {
            $wpdb->update( $group_table, array(
                'title'         => $group->get_title(),
                'updated_at'    => current_time('mysql')
                ), array( 'id' => $id )
            );
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Run SQL query to get groups from database
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_all()
    {
        global $wpdb;
        $group_table    = $wpdb->prefix . CustomFieldGroup::$table_name;

        // Return field froups for list view
        try {
            $select_query  = $wpdb->prepare( "SELECT * FROM $group_table ORDER BY id ASC" );
            $query_results = $wpdb->get_results( $select_query );
      
            return array(
                'data' => $query_results
            );
        } catch(\Exception $e) {
            return NULL;
        }
	
    }


    /**
     * Delete a group from the database
     * 
     * @param mixed $id      Field group ID
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy( $id )
    {
        global $wpdb;
        $group_table    =   $wpdb->prefix . CustomFieldGroup::$table_name;

        try {
            $wpdb->delete( $group_table, ['id' => $id], ["%d"] );
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Run SQL query to get a single field group
     * 
     * @param int $id   Group ID
     * 
     * @return array an array of results if successfull, NULL otherwise
     * @since 1.0.0 
     */
    public static function get( $id ){

        global $wpdb;
        $group_table = $wpdb->prefix . CustomFieldGroup::$table_name;

        try {
            $select_query   = $wpdb->prepare( "SELECT * FROM $group_table WHERE id = %d",array( $id ) );
            $select_result  = $wpdb->get_results( $select_query );
            return $select_result;
        } catch(\Exception $e) {
            return false;
        }
    }
    
}