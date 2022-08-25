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
                'status'        =>  $contact->get_status(),
                'source'        =>  $contact->get_source(),
                'hash'          =>  MRM_Common::get_rand_hash( $contact->get_email() ),
                'created_at'    =>  current_time('mysql')
            ));

            $insert_id = $wpdb->insert_id;
            if( !empty( $contact->get_meta_fields() )){
                $meta_fields['meta_fields'] = $contact->get_meta_fields();
                self::update_meta_fields( $insert_id, $meta_fields );
            }

            return $insert_id;

        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Update a contact information
     * 
     * @param mixed $contact_id     Contact ID
     * @param mixed $args           Entity and value to update
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function update( $args, $contact_id )
    {
        global $wpdb;
        $contacts_table = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;

        self::update_meta_fields($contact_id, $args);
        
        $args['updated_at'] = current_time('mysql');
        unset($args['meta_fields']);
        unset($args['contact_id']);

        try {
            $wpdb->update( 
                $contacts_table, 
                $args, 
                array( 'ID' => $contact_id )
            );
        }catch(\Exception $e){
            return false;
        }
        return true;
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
    public static function update_meta_fields( $contact_id, $args )
    {
        global $wpdb;
        $contacts_meta_table = $wpdb->prefix . MRM_Contact_Meta_Table::$mrm_table;
        
        if( self::is_contact_meta_exist( $contact_id ) ){
            foreach( $args['meta_fields'] as $key => $value ){
                $wpdb->update( $contacts_meta_table, array(
                    'meta_value'    => $value
                ), array( 'meta_key' => $key , 'contact_id' => $contact_id ));
            }
        }else{
            foreach( $args['meta_fields'] as $key => $value ){
                $wpdb->insert( $contacts_meta_table, array(
                    'contact_id'    => $contact_id,
                    'meta_key'      => $key,
                    'meta_value'    => $value
                ));
            }
        }
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
    public static function get_all( $offset = 0, $limit = 10, $search = '' )
    {
        global $wpdb;
        $contact_table = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;
        $search_terms = null;

        // Search contacts by email, first name or last name
		if ( ! empty( $search ) ) {
            $search_terms = "WHERE email LIKE '%".$search."%' OR first_name LIKE '%".$search."%' OR last_name LIKE '%".$search."%'";
		}

        // Prepare sql results for list view
        try {
            $select_query  = $wpdb->prepare( "SELECT * FROM $contact_table $search_terms ORDER BY id DESC LIMIT %d, %d", array( $offset, $limit ) );
            $query_results   = json_decode(json_encode($wpdb->get_results($select_query)), true);
            
            $results = array();

            foreach( $query_results as $query_result ){
                $new_meta = self::get_meta( $query_result['id'] );
                $results[] = array_merge($query_result, $new_meta);
            }

            $count_query    = $wpdb->prepare("SELECT COUNT(*) as total FROM $contact_table $search_terms");
            $count_result   = $wpdb->get_results($count_query);
    
            $count = (int) $count_result['0']->total;
            $total_pages = ceil($count / $limit);

            return array(
                'data'=> $results,
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
            $contacts_query     = $wpdb->prepare("SELECT * FROM $contacts_table WHERE id = %d",array( $id ));
            $contacts_results   = json_decode(json_encode($wpdb->get_results($contacts_query)), true);

            $new_meta = self::get_meta( $id );
            
            return array_merge($contacts_results[0], $new_meta);
        
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Returns contact meta data
     * 
     * @param int $id   Contact ID
     * @return array
     * @since 1.0.0
     */
    public static function get_meta( $id )
    {
        global $wpdb;
        $contacts_meta_table = $wpdb->prefix . MRM_Contact_Meta_Table::$mrm_table;

        $meta_query         = $wpdb->prepare("SELECT meta_key, meta_value FROM $contacts_meta_table  WHERE contact_id = %d",array( $id ));
        $meta_results       = json_decode(json_encode($wpdb->get_results($meta_query)), true);

        $new_meta = [];
        foreach($meta_results as $result){
            $new_meta[$result['meta_key']] = $result['meta_value'];
        }
        return $new_meta;
    }


    /**
     * Check existing contact through an email address
     * 
     * @param string $email 
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_contact_meta_exist( $contact_id )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Meta_Table::$mrm_table;

        $select_query = $wpdb->prepare("SELECT * FROM $table_name WHERE contact_id = %d", array( $contact_id ));
        $results = $wpdb->get_results($select_query);

        if( !empty($results) ){
            return true;
        }
        return false;
    }

    
    /**
     * Run SQL Query to get filtered Contacts
     * 
     * @param mixed $group_ids
     * @param mixed $type
     * 
     * @return array|bool
     * @since 1.0.0
     */
    public static function get_filtered_contacts(  $offset = 0, $limit = 10, $search = '' , $status, $group_ids)
    {
        global $wpdb;
        $contact_table = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;
        $pivot_table   = $wpdb->prefix . MRM_Contact_Group_Pivot_Table::$mrm_table;

        $search_terms = null;

		if ( ! empty( $search ) ) {
            $search_terms = "email LIKE '%".$search."%' OR first_name LIKE '%".$search."%' OR last_name LIKE '%".$search."%'";
		}

        // Prepare sql results for list view
        try {
            $ids = implode(",", array_map( 'intval', $group_ids ));
            $no_groupId = "$pivot_table.group_id IN ($ids) AND ";

            if (count($group_ids)==0){
                $no_groupId = "";
            }

            $select_query  = $wpdb->prepare(
                "SELECT * FROM $pivot_table RIGHT JOIN $contact_table 
                ON $contact_table.id = $pivot_table.contact_id 
                WHERE $search_terms AND $no_groupId $contact_table.status = %s
                GROUP BY $contact_table.id
                ", array($status)) ;
            $query_results = $wpdb->get_results( $select_query );

            $count_query  = $wpdb->prepare(
                "SELECT COUNT(*) AS total FROM $pivot_table RIGHT JOIN $contact_table 
                ON $contact_table.id = $pivot_table.contact_id 
                WHERE $search_terms AND $no_groupId $contact_table.status = %s
                GROUP BY $contact_table.id
                ", array($status)) ;
            $count_result   = $wpdb->get_results($count_query);
    
            $count = (int) $count_result['0']->total;
            $total_pages = ceil($count / $limit);
      
            return array(
                'data'=> $query_results,
                'total_pages' => $total_pages,
                'count' => $count
            );
        } catch(\Exception $e) {
            return NULL;
        }
    }

    
}