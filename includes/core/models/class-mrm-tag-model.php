<?php

namespace MRM\Models\Tags;

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
    public function insert_tag_model(MRM_Tag $tag){
        global $wpdb;
        
        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $now = date('Y-m-d H:i:s');

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
    public function update_tag_model($id, MRM_Tag $tag){
        global $wpdb;

        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $now = date('Y-m-d H:i:s');
        
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
     * SQL query to delete a tag
     * 
     * @param int, object
     * @return JSON
     * @since 1.0.0
     */
    public function delete_tag_model($id){
        global $wpdb;
        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        try {
            $wpdb->delete($table, array('ID' => $id));
        } catch(Exception $e) {
            return false;
        }
        return true;
    }

    /**
     * SQL query to delete a multiple tags
     * 
     * @param array
     * @return void
     * @since 1.0.0
     */
    public function delete_multiple_tags_model($ids){
        global $wpdb;

        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $idListString = implode(",",$ids);
            $wpdb->query("DELETE FROM $table WHERE id IN ($idListString)");
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
    public function get_all_tags_model($offset, $limit){
        global $wpdb;

        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        
        try {
            $sql = $wpdb->prepare("SELECT * FROM {$table} WHERE type = %d LIMIT %d, %d ",array('1', $offset, $limit));
            $data = $wpdb->get_results($sql);
            $dataJson = json_decode(json_encode($data));
            $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table} WHERE type = %d",array('1'));
            $sqlCountData = $wpdb->get_results($sqlCount);
            $sqlCountDataJson = json_decode(json_encode($sqlCountData), true);
                
            $count = (int) $sqlCountDataJson['0']['total'];
            $totalPages = intdiv($count, $limit) + 1;

            return array(
                'data'=> $dataJson,
                'total_pages' => $totalPages
            );
        } catch(Exception $e) {
            return NULL;
        }
        
        return NULL;
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
        } catch(Exception $e) {
            return NULL;
        }
        
        return NULL;
    }

    /**
     * SQL query to searc
     * 
     * @param string,int,int
     * @return array
     * @since 1.0.0
     */
    public function get_tag_search_model($searchTitle, $offset, $limit){
        global $wpdb;

        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        
        try {
            $sql = $wpdb->prepare("SELECT * FROM {$table} WHERE type = %d AND title LIKE %s LIMIT %d, %d",array('1', "%{$searchTitle}%", $offset, $limit));
            $data = $wpdb->get_results($sql);
            $dataJson = json_decode(json_encode($data));
            $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table} WHERE type = %d AND title LIKE %s",array('1', "%{$searchTitle}%"));
            $sqlCountData = $wpdb->get_results($sqlCount);
            $sqlCountDataJson = json_decode(json_encode($sqlCountData), true);
                
            $count = (int) $sqlCountDataJson['0']['total'];
            $totalPages = intdiv($count, $limit) + 1;

        return array(
            'data'=> $dataJson,
            'total_pages' => $totalPages
        );
        } catch(Exception $e) {
            return NULL;
        }
          
        return NULL;
    }

}