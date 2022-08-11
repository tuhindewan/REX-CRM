<?php

namespace MRM\Models\Tags;

use Exception;
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
    public function insert_tag_model($body){
        global $wpdb;
        
        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $now = date('Y-m-d H:i:s');

        $data  = array(
            'title'       => $body['title'],
            'type'        => 1,
            'data'        => $body['data'],
            'created_at'  => $body['created_at'],
            'updated_at'  => $now
        );
        try {
            $wpdb->insert($table,$data);
        } catch(Exception $e) {
            error_log(print_r($e, 1));
        }

        return $data;
    }


    /**
     * SQL query to update a tag
     * 
     * @param int, object
     * @return JSON
     * @since 1.0.0
     */
    public function update_tag_model($id, $body){
        global $wpdb;

        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $now = date('Y-m-d H:i:s');
        
        $data  = array(
            'title'       => $body['title'],
            'type'        => 1,
            'data'        => $body['data'],
            'created_at'  => $body['created_at'],
            'updated_at'  => $now
        );
        $where = array(
            'id'     =>  $id
        );

        try {
            $wpdb->update( $table , $data, $where );
        } catch(Exception $e) {
            error_log(print_r($e, 1));
        }
        
    }

    /**
     * SQL query to delete a tag
     * 
     * @param int, object
     * @return JSON
     * @since 1.0.0
     */
    public function delete_tag_model($id, $body){
        global $wpdb;

        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->delete( $table, array( 'id' => $id ) );
        } catch(Exception $e) {
            error_log(print_r($e, 1));
        }
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

        $idListString = implode(",",$ids);
        $wpdb->query("DELETE FROM $table WHERE id IN ($idListString)");
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
    }

}