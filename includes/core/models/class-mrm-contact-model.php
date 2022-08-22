<?php

namespace MRM\Models;

use MRM\Common\MRM_Common;
use MRM\Data\MRM_Contact;
use MRM\DB\Tables\MRM_Contact_Group_Pivot_Table;
use MRM\DB\Tables\MRM_Contact_Meta_Table;
use MRM\DB\Tables\MRM_Contact_Note_Table;
use MRM\DB\Tables\MRM_Contacts_Table;
use MRM\DB\Tables\MRM_Interactions_Table;
use MRM\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage Contact Module database related operations]
 */

class MRM_Contact_Model{


    use Singleton;


    /**
     * Insert contact information to database
     * 
     * @param MRM_Contact $contact
     * 
     * @return bool|int
     * @since 1.0.0
     */
    public static function insert(MRM_Contact $contact)
    {
        global $wpdb;
        $contacts_table = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;

        try {
            $wpdb->insert( $contacts_table, array(
                'email'         =>  $contact->get_email(),
                'first_name'    =>  $contact->get_first_name(),
                'last_name'     =>  $contact->get_last_name(),
                'phone'         =>  $contact->get_phone(),
                'status'        =>  $contact->get_status(),
                'source'        =>  $contact->get_source(),
                'contact_owner' =>  $contact->get_contact_owner(),
                'hash'          =>  MRM_Common::get_rand_hash(),
                'created_at'    =>  current_time('mysql')
            ));
        return $wpdb->insert_id;;

        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Update a contact information
     * 
     * @param mixed $contact_id     Contact ID
     * @param mixed $fields         Entity and value to update
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function update( $contact_id, $fields )
    {
        global $wpdb;
        $contacts_table = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;

        $entity = array_key_first($fields);
        $value  = array_values($fields)[0];

        try {
            $wpdb->update( 
                $contacts_table, 
                array( 
                    $entity         =>  $value,
                    'updated_at'    =>  current_time('mysql')
                ), 
                array( 'ID' => $contact_id )
            );
        }catch(\Exception $e){
            return false;
        }
        return true;
    }


    /**
     * Check existing contact through an email address
     * 
     * @param string $email 
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_contact_exist( $email )
    {
        global $wpdb;
        $contacts_table = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;

        $select_query = $wpdb->prepare("SELECT * FROM $contacts_table WHERE email = %s", array( $email ));
        $results = $wpdb->get_results($select_query);

        if( $results ){
            return true;
        }
        return false;
    }


    /**
     * Delete a contact
     * 
     * @param mixed $id contact id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy( $id )
    {
        global $wpdb;
        $contacts_table                 =   $wpdb->prefix . MRM_Contacts_Table::$mrm_table;
        $contact_meta_table             =   $wpdb->prefix . MRM_Contact_Meta_Table::$mrm_table;
        $contact_note_table             =   $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;
        $contact_interaction_table      =   $wpdb->prefix . MRM_Interactions_Table::$mrm_table;
        $contact_group_pivot_table      =   $wpdb->prefix . MRM_Contact_Group_Pivot_Table::$mrm_table;

        try {
            $wpdb->delete($contacts_table,              array('id' => $id));
            $wpdb->delete($contact_meta_table,          array('contact_id' => $id));
            $wpdb->delete($contact_note_table,          array('contact_id' => $id));
            $wpdb->delete($contact_interaction_table,   array('contact_id' => $id));
            $wpdb->delete($contact_group_pivot_table,   array('contact_id' => $id));
            return true;
        } catch(\Exception $e) {
            return false;
        }

    }


    /**
     * Delete multiple contacts
     * 
     * @param array $contact_ids contact id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy_all($contact_ids)
    {
        global $wpdb;
        $contacts_table                 =   $wpdb->prefix . MRM_Contacts_Table::$mrm_table;
        $contact_meta_table             =   $wpdb->prefix . MRM_Contact_Meta_Table::$mrm_table;
        $contact_note_table             =   $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;
        $contact_interaction_table      =   $wpdb->prefix . MRM_Interactions_Table::$mrm_table;
        $contact_group_pivot_table      =   $wpdb->prefix . MRM_Contact_Group_Pivot_Table::$mrm_table;

        try {
            $contact_ids = implode( ',', array_map( 'intval', $contact_ids ) );

            $wpdb->query( "DELETE FROM $contacts_table WHERE id IN($contact_ids)" );
            $wpdb->query( "DELETE FROM $contact_meta_table WHERE contact_id IN($contact_ids)" );
            $wpdb->query( "DELETE FROM $contact_note_table WHERE contact_id IN($contact_ids)" );
            $wpdb->query( "DELETE FROM $contact_interaction_table WHERE contact_id IN($contact_ids)" );
            $wpdb->query( "DELETE FROM $contact_group_pivot_table WHERE contact_id IN($contact_ids)" );
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
    public static function get_all( $offset = 0, $limit = 10, $search = '', $filters = array() )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;
        $search_terms = null;

        // Search contacts by email, first name or last name
		if ( ! empty( $search ) ) {
            $search_terms = "WHERE email LIKE '%".$search."%' OR first_name LIKE '%".$search."%' OR last_name LIKE '%".$search."%'";
		}

        // Prepare sql results for list view
        try {
            $select_query  = $wpdb->prepare( "SELECT * FROM $table_name $search_terms ORDER BY id DESC LIMIT %d, %d", array( $offset, $limit ) );
            $query_results = $wpdb->get_results( $select_query );

            $wpdb->prepare( "SELECT COUNT(*) as total FROM $table_name $search_terms" );
            $count = $wpdb->num_rows;

            $total_pages = ceil(intdiv($count, $limit));
      
            return array(
                'data'=> $query_results,
                'total_pages' => $total_pages,
                'count' => $count
            );
        } catch(\Exception $e) {
            return NULL;
        }
	
    }


    /**
     * Run SQL Query to get a single contact information
     * 
     * @param mixed $id Contact ID
     * 
     * @return object
     * @since 1.0.0
     */
    public static function get( $id )
    {
        global $wpdb;
        $contacts_table = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;

        try {
            $select_query = $wpdb->prepare("SELECT * FROM $contacts_table WHERE id = %d",array( $id ));
            return $wpdb->get_row( $select_query );
        } catch(\Exception $e) {
            return false;
        }
    }

    
}