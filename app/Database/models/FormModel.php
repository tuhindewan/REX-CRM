<?php

namespace Mint\MRM\DataBase\Models;

use Exception;
use Mint\MRM\DataBase\Tables\FormSchema;
use Mint\MRM\DataStores\FormData;
use MRM\Common\MRM_Common;
use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-10-07 11:03:17
 * @modify date 2022-10-07 11:03:17
 * @desc [Manage contact form related databse operation]
 */

class FormModel {

    use Singleton;

    /**
     * Check existing form on database
     * 
     * @param mixed $id Form id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_form_exist( $id )
    {
        global $wpdb;
        $form_table = $wpdb->prefix . FormSchema::$table_name;

        $select_query = $wpdb->prepare("SELECT * FROM $form_table WHERE id = %d", array( $id ) );
        $results = $wpdb->get_results($select_query);

        if( $results ){
            return true;
        }
        return false;
    }

    /**
     * SQL query to create a new note
     * 
     * @param $form         FormData object
     * @return void
     * @since 1.0.0
     */
    public static function insert( FormData $form ){
        
        global $wpdb;
        $form_table = $wpdb->prefix . FormSchema::$table_name;

        try {
            $wpdb->insert($form_table, array(
                'title'         => $form->get_title(),
                'form_body'     => $form->get_form_body(),
                'form_position' => $form->get_form_position(),
                'status'        => $form->get_status(),
                'group_ids'     => $form->get_group_ids(),
                'created_by'    => $form->get_created_by(),
                'template_id'   => $form->get_template_id(),
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
    public static function update( FormData $note, $contact_id, $note_id ){

        global $wpdb;
        $table = $wpdb->prefix . FormSchema::$table_name;
        
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
     * Run SQL query to get or search contacts from database
     * 
     * @param int $offset
     * @param int $limit
     * @param string $search
     * @param array $filters
     * @return array
     * @since 1.0.0
     */
    public static function get_all( $offset = 0, $limit = 10, $search = '' )
    {
        global $wpdb;
        $form_table = $wpdb->prefix . FormSchema::$table_name;
        $search_terms = null;

        // Search form by title
		if ( ! empty( $search ) ) {
            $search = $wpdb->esc_like($search);
            $search_terms = "WHERE title LIKE '%%$search%%'";
		}
        
        // Prepare sql results for list view
        try {
            
            // Return forms for a contact in list view
            $select_query = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $form_table {$search_terms} ORDER BY id DESC LIMIT %d, %d", array( $offset, $limit ) ), ARRAY_A );
            $count_query   = $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) as total FROM $form_table", array(  ) ) );
            
            $count = (int) $count_query;
            $total_pages = ceil($count / $limit);


            return array(
                'data'        => $select_query,
                'total_pages' => $total_pages,
                'count'       => $count
            );
        } catch(\Exception $e) {
            return NULL;
        }
	
    }

    /**
     * Run SQL Query to get a single form information
     * 
     * @param mixed $id Form ID
     * 
     * @return object
     * @since 1.0.0
     */
    public static function get( $id )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . FormSchema::$table_name;

        return $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$table_name} WHERE id = %d", array($id) ), ARRAY_A );
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
        return $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $table_name WHERE contact_id = %d ORDER BY id DESC", [$contact_id] ), ARRAY_A );
    }


}