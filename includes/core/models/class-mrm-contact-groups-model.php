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
 * @desc [Handle Contact Groups Module related database operations]
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
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->insert($table_name, array(
                'title' => $group->get_title(),
                'type'  => $type,
                'slug'  => $group->get_slug(),
                'data'  => $group->get_data(),
                'created_at' => current_time('mysql')));
            return $wpdb->insert_id;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Update group information to database
     * 
     * @param object $group         Tag or List or Segment object 
     * @param int    $id            Tag or List or Segment id
     * @param int    $type          Tag or List or Segment type
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function update( $group, $id, $type )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->update($table_name, array(
                'title' => $group->get_title(),
                'type' => $type,
                'data'  => $group->get_data(),
                'updated_at' => current_time('mysql')), array(
                  'id' => $id
                ));
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Run SQL query to get groups from database
     * 
     * @param int $type     Tag or List or Segment type
     * @param int $offset
     * @param int $limit
     * @param string $search
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_all( $type ,$offset = 0, $limit = 10, $search = '' )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $search_terms = null;

        // Search segments by title
		if ( ! empty( $search ) ) {
            $search_terms = "AND title LIKE '%" .$search. "%'";
		}

        // Return segments for list view
        try {
            $select_query = "SELECT * FROM {$table_name} WHERE type = {$type}  {$search_terms} ORDER BY id DESC LIMIT {$offset}, {$limit}";
            $query_results = $wpdb->get_results( $select_query );
            $results = json_decode(json_encode($query_results), true);
            
            $count_query = "SELECT COUNT(*) as total FROM {$table_name} WHERE type = {$type} {$search_terms}";
            $count_data = $wpdb->get_results($count_query);
            $count_array = json_decode(json_encode($count_data), true);
            
            $count = (int) $count_array['0']['total'];
            $totalPages = ceil(intdiv($count, $limit));
      
            return array(
                'data'=> $results,
                'total_pages' => $totalPages
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
        $table_name     =   $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $pivot_table    =   $wpdb->prefix . MRM_Contact_Group_Pivot_Table::$mrm_table;

        try {
            $wpdb->delete($table_name, array('id' => $id));
            $wpdb->delete($pivot_table, array('group_id' => $id));
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Delete multiple groups from the database
     * 
     * @param mixed $ids multiple group ids (tag_id, list_id, segment_id)
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy_all( $ids )
    {
        global $wpdb;

        $table          =   $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $pivot_table    =   $wpdb->prefix . MRM_Contact_Group_Pivot_Table::$mrm_table;

        try {
            $idListString = implode(",",$ids);
            $wpdb->query("DELETE FROM $table WHERE id IN ($idListString)");
            $wpdb->query("DELETE FROM $pivot_table WHERE group_id IN ($idListString)");
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
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $sql = $wpdb->prepare("SELECT * FROM {$table_name} WHERE id = %d",array($id));
            $data = $wpdb->get_results($sql);
            $dataJson = json_decode(json_encode($data));
            return $dataJson;
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
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE slug = %s AND type = %d",array( $slug, $type ));
        $sqlCountData = $wpdb->get_results($sqlCount);
        $sqlCountDataJson = json_decode(json_encode($sqlCountData), true);
        $count = (int) $sqlCountDataJson['0']['total'];
        if( $count ){
            return true;
        }
        return false;
    } 


    /**
     * Run SQL Query to get groups related to a contact
     * 
     * @param mixed $tag_ids
     * @param mixed $type
     * 
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public static function get_groups_to_contact( $tag_ids, $type )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $tags = implode(",",$tag_ids);
            $sql = $wpdb->prepare("SELECT * FROM {$table_name} WHERE id IN ($tags) AND type = $type");
            $data = $wpdb->get_results($sql);
            $dataJson = json_decode(json_encode($data), true);
            return $dataJson;
        } catch(\Exception $e) {
            return false;
        }
    }
    
}