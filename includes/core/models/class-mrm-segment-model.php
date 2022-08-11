<?php

namespace MRM\Models;

use MRM\Data\MRM_Segment;
use MRM\Traits\Singleton;
use MRM\DB\Tables\MRM_Contact_Groups_Table;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle Segment Module database related operations]
 */

class MRM_Segment_Model{


    use Singleton;


    /**
     * Insert segment information to database
     * 
     * @param MRM_Segment $segment
     * 
     * @return bool
     * @since 1.0.0
     */
    public function insert(MRM_Segment $segment)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->insert($table_name, array(
                'title' => $segment->get_title(),
                'type' => 3,
                'data'  => $segment->get_data(),
                'created_at' => current_time('mysql')));
        } catch(\Exception $e) {
            return false;
        }
        return true;
    }


    /**
     * Update segment information to database
     * 
     * @param MRM_Segment $segment
     * @param $id 
     * 
     * @return bool
     * @since 1.0.0
     */
    public function update(MRM_Segment $segment, $id)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->update($table_name, array(
                'title' => $segment->get_title(),
                'type' => 3,
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
     * Run SQL query to get segments from database
     * 
     * @param int $offset
     * @param int $limit
     * @param string $search
     * 
     * @return array
     * @since 1.0.0
     */
    public function get_segments($offset = 0, $limit = 10, $search = '')
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        // Search segments by title
		if ( ! empty( $search ) ) {
			try {
                $sql = $wpdb->prepare( "SELECT * FROM {$table_name} WHERE type = %d AND title LIKE %s LIMIT %d, %d",array('3', "%{$search}%", $offset, $limit) );
                $data = $wpdb->get_results( $sql );
                $dataJson = json_decode(json_encode( $data ));
                $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE type = %d AND title LIKE %s",array('3', "%{$search}%"));
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
            $sql = $wpdb->prepare( "SELECT * FROM {$table_name} WHERE type = %d LIMIT %d, %d ",array('3', $offset, $limit) );
            $data = $wpdb->get_results( $sql );
            $dataJson = json_decode(json_encode( $data ));
            $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE type = %d",array('3'));
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