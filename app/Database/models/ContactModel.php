<?php

namespace Mint\MRM\DataBase\Models;

use Mint\MRM\DataBase\Tables\ContactGroupPivotSchema;
use Mint\MRM\DataBase\Tables\ContactMetaSchema;
use Mint\MRM\DataBase\Tables\ContactNoteSchema;
use Mint\MRM\DataBase\Tables\ContactSchema;
use Mint\MRM\DataBase\Tables\MessageSchema;
use Mint\MRM\DataStores\ContactData;
use MRM\Common\MRM_Common;
use MRM\Data\MRM_Contact;
use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage Contact Module database related operations]
 */

class ContactModel{


    use Singleton;


    /**
     * Insert contact information to database
     * 
     * @param ContactData $contact
     * 
     * @return bool|int
     * @since 1.0.0
     */
    public static function insert(ContactData $contact)
    {
        global $wpdb;
        $contacts_table = $wpdb->prefix . ContactSchema::$table_name;
        

        try {
            $wpdb->insert( $contacts_table, array(
                'email'         =>  $contact->get_email(),
                'first_name'    =>  $contact->get_first_name(),
                'last_name'     =>  $contact->get_last_name(),
                'status'        =>  $contact->get_status(),
                'source'        =>  $contact->get_source(),
                'hash'          =>  MRM_Common::get_rand_hash( $contact->get_email() ),
                'created_by'    =>  $contact->get_created_by(),
                'wp_user_id'    =>  $contact->get_wp_user_id(),
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
        $contacts_table = $wpdb->prefix . ContactSchema::$table_name;
        if( !empty( $args['meta_fields'] )){
            self::update_meta_fields($contact_id, $args);
        }
        
        $args['updated_at'] = current_time('mysql');
        unset($args['meta_fields']);
        unset($args['contact_id']);
        unset($args['tags']);
        unset($args['lists']);
        unset($args['avatar_url']);
        unset($args['created_time']);
        unset($args['added_by_login']);
        unset($args['avatar_url']);
        unset($args['notes']);

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
        $contacts_meta_table = $wpdb->prefix . ContactMetaSchema::$table_name;

        foreach( $args['meta_fields'] as $key => $value ){
            if( self::is_contact_meta_exist( $contact_id, $key ) ){
                $wpdb->update( $contacts_meta_table, array(
                    'meta_value'    => $value
                ), array( 'meta_key' => $key , 'contact_id' => $contact_id ));
            }else{
                $wpdb->insert( $contacts_meta_table, array(
                    'contact_id'    => $contact_id,
                    'meta_key'      => $key,
                    'meta_value'    => $value
                ));
                
                // $wpdb->query( 'SET foreign_key_checks=0' );
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
        $contacts_table = $wpdb->prefix . ContactSchema::$table_name;

        $select_query = $wpdb->prepare("SELECT * FROM $contacts_table WHERE email = %s", array( $email ));
        $results = $wpdb->get_results($select_query);
        if( $results ){
            return true;
        }
        return false;
    }


    /**
     * Check existing contact through an email address and contact ID
     * 
     * @param string $email 
     * @param int $contact_id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_contact_exist_by_id( $email, $contact_id )
    {
        global $wpdb;
        $contacts_table = $wpdb->prefix . ContactSchema::$table_name;

        $select_query = $wpdb->prepare("SELECT * FROM $contacts_table WHERE email = %s AND id = %d", array( $email, $contact_id ));
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
        $contacts_table                 =   $wpdb->prefix . ContactSchema::$table_name;
        $contact_meta_table             =   $wpdb->prefix . ContactMetaSchema::$table_name;
        $contact_note_table             =   $wpdb->prefix . ContactNoteSchema::$table_name;
        $contact_group_pivot_table      =   $wpdb->prefix . ContactGroupPivotSchema::$table_name;

        try {
            $wpdb->delete($contacts_table,              array('id' => $id));
            $wpdb->delete($contact_meta_table,          array('contact_id' => $id));
            $wpdb->delete($contact_note_table,          array('contact_id' => $id));
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
        $contacts_table                 =   $wpdb->prefix . ContactSchema::$table_name;
        $contact_meta_table             =   $wpdb->prefix . ContactMetaSchema::$table_name;
        $contact_note_table             =   $wpdb->prefix . ContactNoteSchema::$table_name;
        $contact_group_pivot_table      =   $wpdb->prefix . ContactGroupPivotSchema::$table_name;

        try {
            $contact_ids = implode( ',', array_map( 'intval', $contact_ids ) );

            $wpdb->query( "DELETE FROM $contacts_table WHERE id IN($contact_ids)" );
            $wpdb->query( "DELETE FROM $contact_meta_table WHERE contact_id IN($contact_ids)" );
            $wpdb->query( "DELETE FROM $contact_note_table WHERE contact_id IN($contact_ids)" );
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
        $contact_table = $wpdb->prefix . ContactSchema::$table_name;
        $search_terms = null;

        // Search contacts by email, first name or last name
		if ( ! empty( $search ) ) {
            $search = $wpdb->esc_like($search);
            $search_terms = "WHERE (`hash` LIKE '%%$search%%' 
             OR `email` LIKE '%%$search%%' OR `first_name` LIKE '%%$search%%' OR `last_name` LIKE '%%$search%%'
             OR concat(`first_name`, ' ', `last_name`) LIKE '%%$search%%'
             OR `source` LIKE '%%$search%%' 
             OR `status` LIKE '%%$search%%' 
             OR `stage` LIKE '%%$search%%')";
		}
        
        // Prepare sql results for list view
        $query_results  =  $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $contact_table $search_terms ORDER BY id DESC  LIMIT %d, %d", [$offset, $limit] ), ARRAY_A ) ;
        $results = array();
        
        foreach( $query_results as $query_result ){
            $q_id = isset($query_result['id']) ? $query_result['id'] : "";
            $new_meta = self::get_meta( $q_id );
            $results[] = array_merge($query_result, $new_meta);
        }

        $count   = $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(id) as total FROM $contact_table $search_terms" ) );

        return array(
            'data'=> $results,
            'total_pages' => ceil( $count / $limit ),
            'total_count' => $count
        );
	
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
        $contacts_table = $wpdb->prefix . ContactSchema::$table_name;

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
     * Run SQL Query to get a single contact email only
     * 
     * @param mixed $ids Contact IDs
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_single_email( $ids )
    {
        global $wpdb;
        $contacts_table = $wpdb->prefix . ContactSchema::$table_name;

        if ( is_array( $ids ) ) {
            $ids = !empty( $ids ) ? implode( ', ', $ids ) : 0;
        }

        $sql = $wpdb->prepare( "SELECT `id`, `email` FROM {$contacts_table} WHERE `id` IN( %s ) AND `status` = %s", $ids, 'subscribed' );
        $sql = str_replace( '( \'' , '( ', $sql );
        $sql = str_replace( '\' )' , ' )', $sql );
        return $wpdb->get_results( $sql, ARRAY_A );
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
        $contacts_meta_table = $wpdb->prefix . ContactMetaSchema::$table_name;

        $meta_query         = $wpdb->prepare("SELECT meta_key, meta_value FROM $contacts_meta_table  WHERE contact_id = %d",array( $id ));
        $meta_results       = json_decode(json_encode($wpdb->get_results($meta_query)), true);

        $new_meta['meta_fields'] = [];
        foreach($meta_results as $result){
            $new_meta['meta_fields'][$result['meta_key']] = $result['meta_value'];
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
    public static function is_contact_meta_exist( $contact_id, $key )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . ContactMetaSchema::$table_name;

        try {
            $select_query = $wpdb->prepare("SELECT * FROM $table_name WHERE contact_id = %d AND meta_key=%s", array( $contact_id, $key ));
            $results = $wpdb->get_results($select_query);
            if( !empty($results) ){
                return true;
            }
        } catch (\Throwable $th) {
            return false;

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
    public static function is_contact_meta_key_exist( $contact_id, $meta_key )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . ContactMetaSchema::$table_name;

        try {
            $select_query = $wpdb->prepare("SELECT * FROM $table_name WHERE contact_id = %d AND meta_key=%s", array( $contact_id, $meta_key ));
            $results = $wpdb->get_results($select_query);
            if( !empty($results) ){
                return true;
            }
        } catch (\Throwable $th) {
            return false;

        }
    }

    
    /**
     * Run SQL Query to get filtered Contacts
     * 
     * @param int $offset
     * @param int $limit
     * @param string $search
     * @param mixed $status
     * @param mixed $group_ids
     * 
     * @return array|bool
     * @since 1.0.0
     */
    public static function get_filtered_contacts( $status, $tags_ids, $lists_ids, $limit = 10, $offset = 0, $search = '' )
    {
        global $wpdb;
        $contact_table = $wpdb->prefix . ContactSchema::$table_name;
        $pivot_table   = $wpdb->prefix . ContactGroupPivotSchema::$table_name;

        // Prepare sql results for list view
        try {
            $tags = implode(",", array_map( 'intval', $tags_ids ));
            $lists= implode(",", array_map( 'intval', $lists_ids ));
            $statuses = implode('","',$status);


            //$no_groupId = "$pivot_table.group_id IN ($ids) ";
            $status_arr = 'status IN ("'.$statuses.'")';

            $and = "AND";


            $contact_filter_query = "( $pivot_table.group_id IN ($tags) AND  tt1.group_id IN ($lists)
            AND $status_arr )";

            if (count($tags_ids)==0 && count($lists_ids)==0 && count($status)==0){
                $and = ""; 
                $contact_filter_query = "";
            }else if (count($tags_ids)==0 && count($lists_ids)==0 && count($status)!=0){
                $contact_filter_query = "( $status_arr )";
            }else if (count($tags_ids)==0 && count($lists_ids)!=0 && count($status)==0){
                $contact_filter_query = " (tt1.group_id IN ($lists))";
            }else if (count($tags_ids)==0 && count($lists_ids)!=0 && count($status)!=0){
                $contact_filter_query = " (tt1.group_id IN ($lists) AND $status_arr)";
            }else if (count($tags_ids)!=0 && count($lists_ids)==0 && count($status)==0){
                $contact_filter_query = " ($pivot_table.group_id IN ($tags))";
            }else if (count($tags_ids)!=0 && count($lists_ids)==0 && count($status)!=0){
                $contact_filter_query = "( $pivot_table.group_id IN ($tags) AND $status_arr )";
            }else if (count($tags_ids)!=0 && count($lists_ids)!=0 && count($status)==0){
                $contact_filter_query = "( $pivot_table.group_id IN ($tags) AND  tt1.group_id IN ($lists))";
            }

            $search = $wpdb->esc_like($search);
            

            $select_query = $wpdb->prepare("SELECT * FROM $contact_table
            LEFT JOIN $pivot_table ON ($contact_table.id = $pivot_table.contact_id)  
            LEFT JOIN $pivot_table AS tt1 ON ($contact_table.id = tt1.contact_id)
            WHERE (`hash` LIKE '%%$search%%' OR `email` LIKE '%%$search%%' OR
                 `first_name` LIKE '%%$search%%' OR `last_name` LIKE '%%$search%%' OR concat(`first_name`, ' ', `last_name`) LIKE '%%$search%%'
                 OR `source` LIKE '%%$search%%' OR `status` LIKE '%%$search%%' OR 
                 `stage` LIKE '%%$search%%') $and $contact_filter_query
                 GROUP BY $contact_table.id
                LIMIT $offset, $limit
            " );
            
            $query_results = $wpdb->get_results( $select_query );

            $count_query = $wpdb->prepare("SELECT COUNT(*) AS total FROM $contact_table
            LEFT JOIN $pivot_table ON ($contact_table.id = $pivot_table.contact_id)  
            LEFT JOIN $pivot_table AS tt1 ON ($contact_table.id = tt1.contact_id)
            WHERE 
            (`hash` LIKE '%%$search%%' OR `email` LIKE '%%$search%%' OR
                 `first_name` LIKE '%%$search%%' OR `last_name` LIKE '%%$search%%' 
                 OR `source` LIKE '%%$search%%' OR `status` LIKE '%%$search%%' OR 
                 `stage` LIKE '%%$search%%') $and $contact_filter_query
                GROUP BY $contact_table.id
            " );

            $count_result = $wpdb->get_results( $count_query );

    
            $count = (int) count($count_result);

            $total_pages = ceil($count / $limit);
      
            return array(
                'data'=> json_decode( json_encode( $query_results ), true ),
                'total_pages' => $total_pages,
                'count' => $count
            );
        } catch(\Exception $e) {
            return NULL;
        }
    }


    /**
     * Return custiom fields for mapping 
     * 
     * @param void
     * @return array
     * @since 1.0.0
     */
    public static function mrm_contact_custom_attributes()
    {
        global $wpdb;
        $contacts_meta_table = $wpdb->prefix . ContactMetaSchema::$table_name;

        $select_query  = $wpdb->prepare("SELECT DISTINCT meta_key FROM $contacts_meta_table WHERE meta_key NOT IN ('first_name', 
                                                                                                                    'last_name',
                                                                                                                    'email',
                                                                                                                    'date_of_birth',
                                                                                                                    'company_name',
                                                                                                                    'address_line_1',	
                                                                                                                    'address_line_2',
                                                                                                                    'postal_code',
                                                                                                                    'city',	
                                                                                                                    'state',
                                                                                                                    'country',
                                                                                                                    'phone',
                                                                                                                    'timezone'
                                                                                                                    )");
        $results = json_decode(json_encode($wpdb->get_results($select_query)), true);

        $custom_fields = array_map(function( $result ){
            return $result['meta_key'];
        }, $results);
        return $custom_fields;
    }

    /**
     * Get Total Number of contacts 
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function get_total_count( $contact_id )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . ContactSchema::$table_name;

        $select_query = $wpdb->prepare("SELECT COUNT(*) as total FROM $table_name");
        $total_subscribed = $wpdb->prepare("SELECT COUNT(*) as subscribed FROM $table_name WHERE status='subscribed'");
        $total_unsubscribed = $wpdb->prepare("SELECT COUNT(*) as unsubscribed FROM $table_name WHERE status='unsubscribed'");
        $total_pending = $wpdb->prepare("SELECT COUNT(*) as pending FROM $table_name WHERE status='pending'");

        $contacts =  json_decode(json_encode($wpdb->get_results($select_query)), true);
        $subscribed = json_decode(json_encode($wpdb->get_results($total_subscribed)), true);
        $unsubscribed = json_decode(json_encode($wpdb->get_results($total_unsubscribed)), true);
        $pending = json_decode(json_encode($wpdb->get_results($total_pending)), true);

        $results = [
            'total_contacts' => $contacts[0]['total'],
            'total_subscribed'     => $subscribed[0]['subscribed'],
            'total_unsubscribed'   => $unsubscribed[0]['unsubscribed'],
            'total_pending'        => $pending[0]['pending']
        ];

        if( !empty($results) ){
            return $results;
        }
        return false;
    }


    /**
     * Return total number of contacts 
     * 
     * @return int
     * @since 1.0.0
     */
    public static function get_contacts_count()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . ContactSchema::$table_name;
        return absint( $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(id) FROM $table_name" ) ) );
    }
    
}