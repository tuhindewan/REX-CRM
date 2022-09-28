<?php

namespace Mint\MRM\DataBase\Models;

use Mint\MRM\DataBase\Tables\ContactGroupPivotSchema;
use Mint\MRM\DataBase\Tables\ContactGroupSchema;
use MRM\DB\Tables\MRM_Contact_Group_Pivot_Table;
use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage Contact Groups Module related database operations]
 */

class ContactGroupModel{

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
        $group_table = $wpdb->prefix . ContactGroupSchema::$table_name;

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
        $group_table = $wpdb->prefix . ContactGroupSchema::$table_name;

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
    public static function get_all( $type, $offset = 0, $limit = 20, $search = '', $order_by = 'id', $order_type = 'DESC' )
    {
        global $wpdb;
        $group_table    = $wpdb->prefix . ContactGroupSchema::$table_name;
        $pivot_table    = $wpdb->prefix . ContactGroupPivotSchema::$table_name;
        $search_terms   = null;
        // Search groups by title
		if ( ! empty( $search ) ) {
            $search = $wpdb->esc_like($search);
            $search_terms = "AND title LIKE '%%$search%%'";
		}
        
        // Return groups for list view
        try {
            $select_query  = $wpdb->prepare("SELECT count(group_id) as total_contacts, g.id, g.title, g.data, g.created_at
            from $pivot_table as p right join $group_table as g
            on p.group_id = g.id
            where type='$type'
            {$search_terms}
            group by g.id, g.title, g.data, g.created_at
            order by $order_by $order_type
            limit $offset, $limit");
            $query_results = $wpdb->get_results( $select_query );

            $count_query = $wpdb->prepare("SELECT COUNT(*) as total FROM (
                SELECT count(group_id) as total_contacts, g.id, g.title, g.data, g.created_at
            from $pivot_table as p right join $group_table as g
            on p.group_id = g.id
            where type='$type'
            {$search_terms}
            group by g.id, g.title, g.data, g.created_at
            ) as table1");
            $count_result   = $wpdb->get_results($count_query);
            
            $count = (int) $count_result['0']->total;
            $totalPages = ceil($count / $limit);
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
        $group_table    =   $wpdb->prefix . ContactGroupSchema::$table_name;

        try {
            $wpdb->delete( $group_table, ['id' => $id], ["%d"] );
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

        $group_table  = $wpdb->prefix . ContactGroupSchema::$table_name;

        try {
            $ids = implode(",", array_map( 'intval', $ids ));
            $wpdb->query( "DELETE FROM {$group_table} WHERE id IN ($ids)" );
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
        $group_table = $wpdb->prefix . ContactGroupSchema::$table_name;

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
        $group_table = $wpdb->prefix . ContactGroupSchema::$table_name;

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
        $table_name = $wpdb->prefix . ContactGroupSchema::$table_name;

        try {
            $groups = implode(",", array_map( 'intval', $group_ids ));
            $select_query = $wpdb->prepare( "SELECT * FROM $table_name WHERE id IN ($groups) AND type = %s", array( $type ) );
            return $wpdb->get_results( $select_query );
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Check existing tag, list or segment on database by id
     * 
     * @param mixed $slug group slug
     * @param mixed $type group type
     * @param int   $id   group id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_group_exist_by_id( $slug, $type, $id )
    {
        global $wpdb;
        $group_table = $wpdb->prefix . ContactGroupSchema::$table_name;

        $result  = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $group_table WHERE slug = %s AND type = %s AND id= %d",array( $slug, $type, $id ) ) );
        if( $result ){
            return true;
        }
        return false;
    }


    
}