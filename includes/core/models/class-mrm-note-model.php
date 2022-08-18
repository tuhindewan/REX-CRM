<?php

namespace MRM\Models;

use Exception;
use MRM\Common\MRM_Common;
use MRM\Traits\Singleton;
use MRM\DB\Tables\MRM_Contact_Note_Table;
use MRM\Data\MRM_Note;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage contact note related databse operation]
 */

class MRM_Note_Model {

    use Singleton;

    /**
     * Check existing note on database
     * 
     * @param mixed $id Note id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_note_exist( $id )
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
     * @param $note         MRM_Note object
     * @param $contact_id   Contact id
     * @return void
     * @since 1.0.0
     */
    public static function insert( MRM_Note $note, $contact_id ){
        
        global $wpdb;
        $table = $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;

        try {
            $wpdb->insert($table, array(
                'contact_id'    => $contact_id,
                'type'          => $note->get_type(),
                'title'         => $note->get_title(),
                'description'   => $note->get_description(),
                'created_by'    => MRM_Common::get_current_user_id(),
                'status'        => $note->get_status(),
                'is_public'     => $note->get_is_public(),
                'created_at'    => current_time('mysql')
                )
            );
            return true;
        } catch(Exception $e) {
            return false;
        }
    }


    /**
     * SQL query to update a note
     * 
     * @param $object       Note object
     * @param $contact_id   Contact id
     * @param $note_id      Note id
     * 
     * @return JSON
     * @since 1.0.0
     */
    public static function update( MRM_Note $note, $contact_id, $note_id ){

        global $wpdb;
        $table = $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;
        
        try {
            $wpdb->update($table, array(
                'contact_id'    => $contact_id,
                'type'          => $note->get_type(),
                'title'         => $note->get_title(),
                'description'   => $note->get_description(),
                'created_by'    => MRM_Common::get_current_user_id(),
                'status'        => $note->get_status(),
                'is_public'     => $note->get_is_public(),
                'updated_at' => current_time('mysql')), array(
                    'id' => $note_id
                )
            );
            return true;
        } catch(Exception $e) {
            return false;
        }
        
    }

    /**
     * Delete a note from the database
     * 
     * @param mixed $id Note id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy( $id )
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


    /**
     * SQL query to get all notes for a contact with pagination
     * 
     * @param mixed $contact_id
     * @param int $offset
     * @param int $limit
     * @param string $search
     * 
     * @return array|bool
     * @since 1.0.0
     */
    public static function get_all( $contact_id, $offset = 0, $limit = 10, $search = '' ){

        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;
        $search_terms = null;

        // Search notes by title
		if ( ! empty( $search ) ) {
            $search_terms = "AND title LIKE '%" .$search. "%'";
		}

        // Return notes for a contact in list view
        try {
            $select_query = "SELECT * FROM {$table_name} WHERE contact_id = {$contact_id} {$search_terms} ORDER BY id DESC LIMIT {$offset}, {$limit}";
            $query_results = $wpdb->get_results( $select_query );
            $results = json_decode(json_encode($query_results), true);

            $count_query = "SELECT COUNT(*) as total FROM {$table_name} WHERE contact_id = {$contact_id}";
            $count_data = $wpdb->get_results($count_query);
            $count_array = json_decode(json_encode($count_data), true);
            
            $count = (int) $count_array['0']['total'];
            $totalPages = ceil(intdiv($count, $limit));
      
            return array(
                'data'=> $results,
                'total_pages' => $totalPages
            );
        } catch(\Exception $e) {
            return NULL;
        }
    }


}