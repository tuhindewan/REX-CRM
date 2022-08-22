<?php

namespace MRM\Models;

use MRM\DB\Tables\MRM_Contact_Group_Pivot_Table;
use MRM\Traits\Singleton;
use MRM\DB\Tables\MRM_Contact_Groups_Table;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage Contact Groups Module related database operations]
 */

class MRM_Contact_Group_Model{

    use Singleton;

    /**
     * Insert group information to database
     * 
     * @param $group Tag or List or Segment object 
     * 
     * @return int|bool 
     * @since 1.0.0
     */
    public static function insert( $group, $type )
    {
        global $wpdb;
        $group_table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->insert( $group_table, array(
                'title'         => $group->get_title(),
                'type'          => $type,
                'slug'          => $group->get_slug(),
                'data'          => $group->get_data(),
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
     * @param object    $group         Tag or List or Segment object 
     * @param int       $id            Tag or List or Segment id
     * @param string    $type          Tag or List or Segment type
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function update( $group, $id, $type )
    {
        global $wpdb;
        $group_table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->update( $group_table, array(
                'title'         => $group->get_title(),
                'type'          => $type,
                'slug'          => $group->get_slug(),
                'data'          => $group->get_data(),
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
     * @param string $type     Tag or List or Segment type
     * @param int $offset
     * @param int $limit
     * @param string $search
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_all( $type, $offset = 0, $limit = 20, $search = '' )
    {
        global $wpdb;
        $group_table    = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $search_terms   = null;

        // Search segments by title
		if ( ! empty( $search ) ) {
            $search_terms = "AND title LIKE '%" .$search. "%'";
		}

        // Return segments for list view
        try {
            $select_query  = $wpdb->prepare( "SELECT * FROM $group_table WHERE type = %s $search_terms ORDER BY id DESC LIMIT %d, %d", array( $type, $offset, $limit ) );
            $query_results = $wpdb->get_results( $select_query );

            $wpdb->prepare( "SELECT COUNT(*) as total FROM $group_table WHERE type = %s $search_terms LIMIT %d, %d", array( $type, $offset, $limit ) );
            $count = $wpdb->num_rows;

            $totalPages = ceil(intdiv($count, $limit));
      
            return array(
                'data'          => $query_results,
                'total_pages'   => $totalPages,
                'count'         => $count
            );
        } catch(\Exception $e) {
            return NULL;
        }
	
    }


    /**
     * Delete a group from the database
     * 
     * @param mixed $id group id (tag_id, list_id, segment_id)
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy( $id )
    {
        global $wpdb;
        $group_table    =   $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $pivot_table    =   $wpdb->prefix . MRM_Contact_Group_Pivot_Table::$mrm_table;

        try {
            $wpdb->delete( $group_table, ['id' => $id], ["%d"] );
            $wpdb->delete( $pivot_table, ['group_id' => $id], ["%d"] );
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Delete multiple groups from the database
     * 
     * @param array $ids multiple group ids (tag_id, list_id, segment_id)
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy_all( $ids )
    {
        global $wpdb;

        $group_table  = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $pivot_table  = $wpdb->prefix . MRM_Contact_Group_Pivot_Table::$mrm_table;

        try {
            $ids = implode(",", array_map( 'intval', $ids ));
            $wpdb->query( "DELETE FROM $group_table WHERE id IN ($ids)" );
            $wpdb->query( "DELETE FROM $pivot_table WHERE group_id IN ($ids)" );
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Returns a single group data
     * 
     * @param int $id Tag, List or Segment ID
     * 
     * @return array an array of results if successfull, NULL otherwise
     * @since 1.0.0 
     */
    public static function get( $id ){

        global $wpdb;
        $group_table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $select_query   = $wpdb->prepare( "SELECT * FROM $group_table WHERE id = %d",array( $id ) );
            $select_result  = $wpdb->get_results( $select_query );
            return $select_result;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Check existing tag, list or segment on database
     * 
     * @param mixed $slug group slug
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_group_exist( $slug, $type )
    {
        global $wpdb;
        $group_table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        $select_query   = $wpdb->prepare( "SELECT * FROM $group_table WHERE slug = %s AND type = %s",array( $slug, $type ) );
        $select_result  = $wpdb->get_results( $select_query );
        if( $select_result ){
            return true;
        }
        return false;
    } 


    /**
     * Run SQL Query to get groups related to a contact
     * 
     * @param mixed $group_ids
     * @param mixed $type
     * 
     * @return array|bool
     * @since 1.0.0
     */
    public static function get_groups_to_contact( $group_ids, $type )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $groups = implode(",", array_map( 'intval', $group_ids ));
            $select_query = $wpdb->prepare( "SELECT * FROM $table_name WHERE id IN ($groups) AND type = %s", array( $type ) );
            return $wpdb->get_results( $select_query );
        } catch(\Exception $e) {
            return false;
        }
    }
    
}