<?php

namespace MRM\Models;

use MRM\Common\MRM_Common;
use MRM\Data\MRM_Message;
use MRM\DB\Tables\MRM_Messages_Table;
use MRM\Traits\Singleton;
use MRM\DB\Tables\MRM_Contacts_Table;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 15:27:55
 * @modify date 2022-08-17 15:27:55
 * @desc [Manage message related databse operation ]
 */

class MRM_Message_Model {

    use Singleton;

    /**
     * SQL query to create a new message
     * 
     * @param $message          MRM_Message object
     * @param $interaction_id   Interaction ID
     * @return void
     * @since 1.0.0
     */
    public static function insert( MRM_Message $message, $interaction_id ){
        
        global $wpdb;
        $table = $wpdb->prefix . MRM_Messages_Table::$mrm_table;

        try {
            $wpdb->insert($table, array(
                'interaction_id'    => $interaction_id,
                'contact_id'        => $message->get_receiver_id(),
                'email_address'     => $message->get_receiver_email(),
                'email_subject'     => $message->get_email_subject(),
                'email_body'        => $message->get_email_body(),
                'sender_id'         => MRM_Common::get_current_user_id(),
                'created_at'        => current_time('mysql')
                )
            );
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * SQL query to get all emails relate to a contact or all users
     * 
     * @param mixed $offset
     * @param mixed $limit
     * @param mixed $search
     * @param mixed $contact_id
     * @return bool\array
     * @since 1.0.0
     */
    public static function get_emails_to_contact( $offset = 0, $limit = 10, $search = '', $contact_id = null )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Messages_Table::$mrm_table;
        $search_terms = null;
        $contact_emails_search = null;

        // Search email by address, or subject
		if ( ! empty( $search ) ) {
            $search_terms = "WHERE email_address LIKE '%".$search."%' OR email_subject LIKE '%".$search."%'";
		}

        if ( ! empty( $contact_id ) ) {
            $search_terms = "WHERE contact_id = {$contact_id}";
		}

        if ( ! empty( $search ) && ! empty( $contact_id ) ) {
            $search_terms = "WHERE email_address LIKE '%".$search."%' OR email_subject LIKE '%".$search."%' AND contact_id = '%".$contact_id."%'";
		}

        // Prepare sql results for list view
        try {
            $select_query = "SELECT * FROM {$table_name} {$search_terms} ORDER BY id DESC LIMIT {$offset}, {$limit}";
            $query_results = $wpdb->get_results( $select_query );
            $results = json_decode(json_encode($query_results), true);

            $count_query = "SELECT COUNT(*) as total FROM {$table_name} {$search_terms}";
            $count_data = $wpdb->get_results($count_query);
            $count_array = json_decode(json_encode($count_data), true);
            
            $count = (int) $count_array['0']['total'];
            $totalPages = ceil($count / $limit);
      
            return array(
                'data'=> $results,
                'total_pages' => $totalPages
            );
        } catch(\Exception $e) {
            return NULL;
        }
    }
}