<?php

namespace MRM\Models\Common;

use MRM\DB\Tables\MRM_Contact_Groups_Table;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 15:11:01
 * @modify date 2022-08-10 15:11:01
 * @desc [Manage MRM models common functions]
 */

class MRM_Model_Common {


    /**
     * Check existing tag, list or segment on database
     * 
     * @param mixed $id group id (tag_id, list_id, segment_id)
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_group_exist($id)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE id = %d",array($id));
        $sqlCountData = $wpdb->get_results($sqlCount);
        $sqlCountDataJson = json_decode(json_encode($sqlCountData), true);
        $count = (int) $sqlCountDataJson['0']['total'];
        if( $count ){
            return true;
        }
        return false;
    }


    /**
     * Delete a group from the database
     * 
     * @param mixed $id group id (tag_id, list_id, segment_id)
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function delete_group($id)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->delete($table_name, array('id' => $id));
        } catch(\Exception $e) {
            return false;
        }
        return true;

    }


    /**
     * Delete multiple groups from the database
     * 
     * @param mixed $ids multiple group ids (tag_id, list_id, segment_id)
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function delete_groups($ids)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            foreach ($ids as $id) {
              $wpdb->delete($table_name, array('id' => $id));
            }
        } catch(\Exception $e) {
            return false;
        }
        return true;

    }



    /**
     * Run SQL query to get groups from database
     * 
     * @param int $type
     * @param int $offset
     * @param int $limit
     * @param string $search
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_groups($type ,$offset = 0, $limit = 10, $search = '')
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        // Search segments by title
		if ( ! empty( $search ) ) {
			try {
                $sql = $wpdb->prepare( "SELECT * FROM {$table_name} WHERE type = %d AND title LIKE %s LIMIT %d, %d",array($type, "%{$search}%", $offset, $limit) );
                $data = $wpdb->get_results( $sql );
                $dataJson = json_decode(json_encode( $data ));
                $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE type = %d AND title LIKE %s",array($type, "%{$search}%"));
                $sqlCountData = $wpdb->get_results($sqlCount);
                $sqlCountDataJson = json_decode(json_encode($sqlCountData), true);
                
                $count = (int) $sqlCountDataJson['0']['total'];
                $totalPages = ceil(intdiv($count, $limit));
          
                return array(
                    'data'=> $dataJson,
                    'total_pages' => $totalPages
                );

            } catch(\Exception $e) {
                return NULL;
            }
		}

        // Return segments for list view
        try {
            $sql = $wpdb->prepare( "SELECT * FROM {$table_name} WHERE type = %d LIMIT %d, %d ",array($type, $offset, $limit) );
            $data = $wpdb->get_results( $sql );
            $dataJson = json_decode(json_encode( $data ));
            $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE type = %d",array($type));
            $sqlCountData = $wpdb->get_results($sqlCount);
            $sqlCountDataJson = json_decode(json_encode($sqlCountData), true);
            
            $count = (int) $sqlCountDataJson['0']['total'];
            $totalPages = ceil(intdiv($count, $limit));
      
            return array(
                'data'=> $dataJson,
                'total_pages' => $totalPages
            );
        } catch(\Exception $e) {
            return NULL;
        }
	
    }

}

