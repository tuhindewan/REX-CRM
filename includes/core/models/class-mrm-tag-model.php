<?php

namespace MRM\Models;

use Exception;
use MRM\Data\MRM_Tag;
use MRM\Traits\Singleton;
use MRM\DB\Tables\MRM_Contact_Groups_Table;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */

class MRM_Tag_Model {

    use Singleton;

   
    /**
     * SQL query to create a new tag
     * 
     * @param object
     * @return void
     * @since 1.0.0
     */
    public function insert(MRM_Tag $tag){
        global $wpdb;
        
        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->insert($table, array(
            'title' => $tag->get_title(),
            'type' => 1,
            'created_at' => current_time('mysql')
        ));
        } catch(Exception $e) {
            return false;
        }
        return true;
    }


    /**
     * SQL query to update a tag
     * 
     * @param int, object
     * @return JSON
     * @since 1.0.0
     */
    public function update(MRM_Tag $tag, $id){
        global $wpdb;

        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        
        try {
            $wpdb->update($table, array(
            'title' => $tag->get_title(),
            'type' => 1,
            'updated_at' => current_time('mysql')), array(
              'id' => $id
            ));
          } catch(Exception $e) {
            return false;
          }
          return true;
        
    }

    /**
     * SQL query to get all tags with pagination
     * 
     * @param int,int
     * @return JSON
     * @since 1.0.0
     */
    public function get_tags($offset = 0, $limit = 10, $search = ''){
        global $wpdb;

        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        
        // Search segments by title
		if ( ! empty( $search ) ) {
			try {
                $sql = $wpdb->prepare( "SELECT * FROM {$table_name} WHERE type = %d AND title LIKE %s LIMIT %d, %d",array('1', "%{$search}%", $offset, $limit) );
                $data = $wpdb->get_results( $sql );
                $dataJson = json_decode(json_encode( $data ));
                $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE type = %d AND title LIKE %s",array('1', "%{$search}%"));
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
            $sql = $wpdb->prepare( "SELECT * FROM {$table_name} WHERE type = %d LIMIT %d, %d ",array('1', $offset, $limit) );
            $data = $wpdb->get_results( $sql );
            $dataJson = json_decode(json_encode( $data ));
            $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE type = %d",array('1'));
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

     /**
   * Returns a single tag
   * @param id the id of the tag to get
   * @return array an array of results if successfull, NULL otherwise
   * @since 1.0.0 
   */
    public function get_single_tag_model($id){
        global $wpdb;
        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        try {
            $sql = $wpdb->prepare("SELECT * FROM {$table} WHERE ID = %d AND type = %d",array($id, '1'));
            $data = $wpdb->get_results($sql);
            $dataJson = json_decode(json_encode($data));
            return $dataJson;
        } catch(\Exception $e) {
            return NULL;
        }
        
        return NULL;
    }

}