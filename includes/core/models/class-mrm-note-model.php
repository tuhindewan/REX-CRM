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
     * SQL query to create a new note
     * 
     * @param object
     * @return void
     * @since 1.0.0
     */
    public function insert(MRM_Note $note){
        global $wpdb;
        
        $table = $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;

        try {
            $wpdb->insert($table, array(
                'contact_id'    => $note->get_note_contact_id(),
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
    public function update(MRM_Note $note, $id){
        global $wpdb;

        $table = $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;
        
        try {
            $wpdb->update($table, array(
                'contact_id'    => $note->get_note_contact_id(),
                'type'          => $note->get_note_type(),
                'title'         => $note->get_note_title(),
                'description'   => $note->get_note_description(),
                'created_by'    => $note->get_note_created_by(),
                'status'        => $note->get_note_status(),
                'is_public'     => $note->get_note_is_public(),
                'updated_at' => current_time('mysql')), array(
                    'id' => $id
            ));
          } catch(Exception $e) {
            return false;
          }
          return true;
        
    }

}