<?php

namespace MRM\Models;

use MRM\Common\MRM_Common;
use MRM\Data\MRM_Contact;
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
 * @desc [Handle Contact Module database related operations]
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
    public function insert(MRM_Contact $contact)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;

        try {
            $wpdb->insert($table_name, array(
                'email'         =>  $contact->get_email(),
                'first_name'    =>  $contact->get_first_name(),
                'last_name'     =>  $contact->get_last_name(),
                'phone'         =>  $contact->get_phone(),
                'status'        =>  $contact->get_status(),
                'source'        =>  $contact->get_source(),
                'hash'          =>  MRM_Common::get_rand_hash(),
                'created_at'    =>  current_time('mysql')));
        } catch(\Exception $e) {
            return false;
        }
        return $wpdb->insert_id;;
    }


    /**
     * Update a contact information
     * 
     * @param mixed $contact_id
     * @param mixed $fields      Entity and value to update
     * 
     * @return bool
     * @since 1.0.0
     */
    public function update( $contact_id, $fields )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;

        $entity = array_key_first($fields);
        $value  = array_values($fields)[0];

        try {
            $wpdb->update( 
                $table_name, 
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
    public static function is_contact_exist($email)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;

        $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE email = %s",array($email));
        $sqlCountData = $wpdb->get_results($sqlCount);
        $sqlCountDataJson = json_decode(json_encode($sqlCountData), true);
        $count = (int) $sqlCountDataJson['0']['total'];
        if( $count ){
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
    public function delete($id)
    {
        global $wpdb;
        $table_name                     =   $wpdb->prefix . MRM_Contacts_Table::$mrm_table;
        $contact_meta_table             =   $wpdb->prefix . MRM_Contact_Meta_Table::$mrm_table;
        $contact_note_table             =   $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;
        $contact_interaction_table      =   $wpdb->prefix . MRM_Interactions_Table::$mrm_table;

        try {
            $wpdb->delete($table_name, array('id' => $id));
        } catch(\Exception $e) {
            return false;
        }

        $wpdb->delete($contact_meta_table,          array('contact_id' => $id));
        $wpdb->delete($contact_note_table,          array('contact_id' => $id));
        $wpdb->delete($contact_interaction_table,   array('contact_id' => $id));

        return true;
    }


    /**
     * Delete multiple contacts
     * 
     * @param array $contact_ids contact id
     * 
     * @return bool
     * @since 1.0.0
     */
    public function delete_contacts($contact_ids)
    {
        global $wpdb;
        $table_name                     =   $wpdb->prefix . MRM_Contacts_Table::$mrm_table;
        $contact_meta_table             =   $wpdb->prefix . MRM_Contact_Meta_Table::$mrm_table;
        $contact_note_table             =   $wpdb->prefix . MRM_Contact_Note_Table::$mrm_table;
        $contact_interaction_table      =   $wpdb->prefix . MRM_Interactions_Table::$mrm_table;

        try {
            $contact_ids = implode( ',', array_map( 'absint', $contact_ids ) );

            $wpdb->query( "DELETE FROM $table_name WHERE id IN($contact_ids)" );
        } catch(\Exception $e) {
            return false;
        }

        $wpdb->query( "DELETE FROM $contact_meta_table WHERE contact_id IN($contact_ids)" );
        $wpdb->query( "DELETE FROM $contact_note_table WHERE contact_id IN($contact_ids)" );
        $wpdb->query( "DELETE FROM $contact_interaction_table WHERE contact_id IN($contact_ids)" );

        return true;
    }
    
}