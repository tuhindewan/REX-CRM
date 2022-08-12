<?php

namespace MRM\Models;

use Exception;
use MRM\Traits\Singleton;
use MRM\DB\Tables\MRM_Contact_Note_Table;
use MRM\Data\MRM_Note;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */

class MRM_Note_Model {

    use Singleton;

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
        $table_name = $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;

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
     * SQL query to create a new note
     * 
     * @param object
     * @return void
     * @since 1.0.0
     */
    public function insert(MRM_Note $note, $contact_id){
        global $wpdb;
        
        $table = $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;

        try {
            $wpdb->insert($table, array(
                'contact_id'    => $contact_id,
                'type'          => $note->get_note_type(),
                'title'         => $note->get_note_title(),
                'description'   => $note->get_note_description(),
                'created_by'    => $note->get_note_created_by(),
                'status'        => $note->get_note_status(),
                'is_public'     => $note->get_note_is_public(),
                'created_at'    => current_time('mysql')
            )
        );
        } catch(Exception $e) {
            return false;
        }
        return true;
    }


    /**
     * SQL query to update a note
     * 
     * @param int, object
     * @return JSON
     * @since 1.0.0
     */
    public function update(MRM_Note $note, $contact_id, $note_id){
        global $wpdb;

        $table = $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;
        
        try {
            $wpdb->update($table, array(
                'contact_id'    => $contact_id,
                'type'          => $note->get_note_type(),
                'title'         => $note->get_note_title(),
                'description'   => $note->get_note_description(),
                'created_by'    => $note->get_note_created_by(),
                'status'        => $note->get_note_status(),
                'is_public'     => $note->get_note_is_public(),
                'updated_at' => current_time('mysql')), array(
                    'id' => $note_id
            ));
          } catch(Exception $e) {
            return false;
          }
          return true;
        
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
        $table_name = $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;

        try {
            $wpdb->delete($table_name, array('id' => $id));
        } catch(\Exception $e) {
            return false;
        }
        return true;

    }


}