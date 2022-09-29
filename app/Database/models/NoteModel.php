<?php

namespace Mint\MRM\DataBase\Models;

use Exception;
use Mint\MRM\DataBase\Tables\ContactNoteSchema;
use Mint\MRM\DataBase\Tables\ContactSchema;
use Mint\MRM\DataStores\NoteData;
use MRM\Common\MRM_Common;
use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage contact note related databse operation]
 */

class NoteModel {

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
        $note_table = $wpdb->prefix . ContactNoteSchema::$table_name;

        $select_query = $wpdb->prepare("SELECT * FROM $note_table WHERE id = %d", array( $id ) );
        $results = $wpdb->get_results($select_query);

        if( $results ){
            return true;
        }
        return false;
    }

    /**
     * SQL query to create a new note
     * 
     * @param $note         NoteData object
     * @param $contact_id   Contact id
     * @return void
     * @since 1.0.0
     */
    public static function insert( NoteData $note, $contact_id ){
        
        global $wpdb;
        $note_table = $wpdb->prefix . ContactNoteSchema::$table_name;

        try {
            $wpdb->insert($note_table, array(
                'contact_id'    => $contact_id,
                'type'          => $note->get_type(),
                'title'         => $note->get_title(),
                'description'   => $note->get_description(),
                'created_by'    => $note->get_created_by(),
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
     * @return bool
     * @since 1.0.0
     */
    public static function update( NoteData $note, $contact_id, $note_id ){

        global $wpdb;
        $table = $wpdb->prefix . ContactNoteSchema::$table_name;
        
        try {
            $wpdb->update($table, array(
                'contact_id'    => $contact_id,
                'type'          => $note->get_type(),
                'title'         => $note->get_title(),
                'description'   => $note->get_description(),
                'created_by'    => $note->get_created_by(),
                'status'        => $note->get_status(),
                'is_public'     => $note->get_is_public(),
                'updated_at'    => current_time('mysql')), 
                array(
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
        $note_table = $wpdb->prefix . ContactNoteSchema::$table_name;

        try {
            $wpdb->delete( $note_table, array('id' => $id) );
            return true;
        } catch(\Exception $e) {
            return false;
        }
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
        $table_name = $wpdb->prefix . ContactNoteSchema::$table_name;
        $search_terms = null;

        // Search notes by title
		if ( ! empty( $search ) ) {
            $search_terms = "AND title LIKE '%%$search%%'";
		}

        // Return notes for a contact in list view
        $results = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $table_name WHERE contact_id = $contact_id {$search_terms} ORDER BY id DESC LIMIT %d, %d", array( $offset, $limit ) ), ARRAY_A );
        $count   = $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) as total FROM $table_name WHERE contact_id = %d", array( $contact_id ) ) );

        $totalPages = ceil($count / $limit);
    
        return array(
            'data'=> $results,
            'total_pages' => $totalPages,
            'count' => $count
        );
    }

    /**
     * Run SQL Query to get a single note information
     * 
     * @param mixed $id Note ID
     * 
     * @return object
     * @since 1.0.0
     */
    public static function get( $id )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . ContactNoteSchema::$table_name;

        return $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$table_name} WHERE id = %d",array($id) ), ARRAY_A );
    }


    /**
     * Run sql query to get  notes information for a contact
     * 
     * @param mixed $contact_id
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_notes_to_contact( $contact_id )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . ContactNoteSchema::$table_name;
        return $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $table_name WHERE contact_id = $contact_id ORDER BY id DESC" ), ARRAY_A );
    }


}