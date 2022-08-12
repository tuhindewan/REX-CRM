<?php

namespace MRM\Models;

use MRM\Data\MRM_Contact;
use MRM\DB\Tables\MRM_Contacts_Table;
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
     * @return bool
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
                'created_at'    =>  current_time('mysql')));
        } catch(\Exception $e) {
            return false;
        }
        return $wpdb->insert_id;;
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
    
}