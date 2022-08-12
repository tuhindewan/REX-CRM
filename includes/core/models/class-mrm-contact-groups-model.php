<?php

namespace MRM\Models;

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
     * Insert segment information to database
     * 
     * @param $segment Tag or List or Segment object 
     * 
     * @return bool
     * @since 1.0.0
     */
    public function insert( $group, $type )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->insert($table_name, array(
                'title' => $group->get_title(),
                'type' => $type,
                'data'  => $group->get_data(),
                'created_at' => current_time('mysql')));
        } catch(\Exception $e) {
            return false;
        }
        return true;
    }


    /**
     * Update segment information to database
     * 
     * @param object $segment       Tag or List or Segment object 
     * @param int    $id            Tag or List or Segment id
     * @param int    $type          Tag or List or Segment type
     * 
     * @return bool
     * @since 1.0.0
     */
    public function update( $segment, $id, $type )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->update($table_name, array(
                'title' => $segment->get_title(),
                'type' => $type,
                'data'  => $segment->get_data(),
                'updated_at' => current_time('mysql')), array(
                  'id' => $id
                ));
        } catch(\Exception $e) {
            return false;
        }
        return true;
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