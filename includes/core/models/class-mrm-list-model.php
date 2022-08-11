<?php

namespace MRM\Models;
use Exception;
use MRM\Data\MRM_List_Data;
use MRM\DB\Tables\MRM_Contact_Groups_Table;
use MRM\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module database related operations]
 */

class MRM_List_Model {
    
  use Singleton;

  /**
   * Inserts a new list into db
   * @param list a new instace of list that gets inserted
   * @return boolean
   * @since 1.0.0 
   */

  public function insert_list(MRM_List_Data $list){
    global $wpdb;
    $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
    try {
      $wpdb->insert($table_name, array(
      'title' => $list->get_title(),
      'type' => 2,
      'created_at' => current_time('mysql')));
    } catch(Exception $e) {
      return false;
    }
    return true;
  }

  /**
   * Updates an existing list with new data
   * @param id the list id to be updated
   * @param list a instace of list that gets inserted
   * @return boolean
   * @since 1.0.0 
   */
  public function update_list($id, MRM_List_Data $list){
    global $wpdb;
    $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
  
    try {
      $wpdb->update($table_name, array(
      'title' => $list->get_title(),
      'type' => 2,
      'updated_at' => current_time('mysql')), array(
        'id' => $id
      ));
    } catch(Exception $e) {
      return false;
    }
    return true;
  }

  /**
   * Returns lists with pagination data
   * @param offset the start of the list data
   * @param limit how many lists to show
   * @return array an array of results if successfull, NULL otherwise
   * @since 1.0.0 
   */
  public function get_lists($offset, $limit){
    global $wpdb;
    $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
    
    try {
      $sql = $wpdb->prepare("SELECT * FROM {$table_name} WHERE type = %d LIMIT %d, %d ",array('2', $offset, $limit));
      $data = $wpdb->get_results($sql);
      $dataJson = json_decode(json_encode($data));
      $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE type = %d",array('2'));
      $sqlCountData = $wpdb->get_results($sqlCount);
      $sqlCountDataJson = json_decode(json_encode($sqlCountData), true);
      
      $count = (int) $sqlCountDataJson['0']['total'];
      $totalPages = ceil(intdiv($count, $limit));

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
   * Returns a single list
   * @param id the id of the list to get
   * @return array an array of results if successfull, NULL otherwise
   * @since 1.0.0 
   */
  public function get_list($id){
    global $wpdb;
    $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
    try {
      $sql = $wpdb->prepare("SELECT * FROM {$table_name} WHERE ID = %d AND type = %d",array($id, '2'));
      $data = $wpdb->get_results($sql);
      $dataJson = json_decode(json_encode($data));
      return $dataJson;
    } catch(Exception $e) {
      return NULL;
    }
    
    return NULL;
  }

  /**
   * Deletes a list
   * @param id the list id to be deleted
   * @return boolean
   * @since 1.0.0 
   */

  public function delete_list($id){
    global $wpdb;
    $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
    try {
      $wpdb->delete($table_name, array('ID' => $id));
    } catch(Exception $e) {
      return false;
    }
    return true;
  }

  /**
   * Deletes multiple lists
   * @param array the list of ids to be deleted
   * @return boolean
   * @since 1.0.0 
   */
  public function delete_lists($ids){
    global $wpdb;
    $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
    try {
      foreach ($ids as $id) {
        $wpdb->delete($table_name, array('ID' => $id));
      }
    } catch(Exception $e) {
      return false;
    }
    return true;
  }

  /**
   * Searches lists by title
   * @param title the start of the list data
   * @return array an array of results if successfull, NULL otherwise
   * @since 1.0.0 
   */
  public function search_lists($title, $offset, $limit){
    global $wpdb;
    $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
    
    try {
      $sql = $wpdb->prepare("SELECT * FROM {$table_name} WHERE type = %d AND title LIKE %s LIMIT %d, %d",array('2', "%{$title}%", $offset, $limit));
      $data = $wpdb->get_results($sql);
      $dataJson = json_decode(json_encode($data));
      $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE type = %d AND title LIKE %s",array('2', "%{$title}%"));
      $sqlCountData = $wpdb->get_results($sqlCount);
      $sqlCountDataJson = json_decode(json_encode($sqlCountData), true);
      
      $count = (int) $sqlCountDataJson['0']['total'];
      $totalPages = ceil(intdiv($count, $limit));

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