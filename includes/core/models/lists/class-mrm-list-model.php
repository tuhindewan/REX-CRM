<?php

namespace MRM\Models\Lists;

use MRM\Data\Lists\MRM_List_Data;
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

  public function mrm_insert_list($list){
    global $wpdb;
    $table_name = $wpdb->prefix. 'mrm_contact_groups';
    $wpdb.insert($table_name, array(
      'title' => $list['title'],
      'type' => 2,
      
    ))
    return true;
  }

  /**
   * Updates an existing list with new data
   * @param id the list id to be updated
   * @param list a instace of list that gets inserted
   * @return boolean
   * @since 1.0.0 
   */

  /**
   * Updates an existing list with new data
   * @param offset the list index to start from in the database
   * @param limit the list index to 
   * @return boolean
   * @since 1.0.0 
   */

  public function mrm_get_lists($offset, $limit){
    global $wpdb;
    return true;
  }
  public function mrm_update_list($id, $list){
    global $wpdb;
    return true;
  }

  /**
   * Updates an existing list with new data
   * @param id the list id to be deleted
   * @return boolean
   * @since 1.0.0 
   */

  public function mrm_delete_list($id){
    global $wpdb;
    return true;
  }
   
}