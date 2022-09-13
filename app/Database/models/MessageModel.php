<?php

namespace Mint\MRM\DataBase\Models;

use Mint\MRM\DataBase\Tables\MessageSchema;
use MRM\Common\MRM_Common;
use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 15:27:55
 * @modify date 2022-08-17 15:27:55
 * @desc [Manage message related databse operation ]
 */

class MessageModel {

    use Singleton;

    /**
     * SQL query to create a new message
     * 
     * @param $message          MRM_Message object
     * @param $interaction_id   Interaction ID
     * @return void
     * @since 1.0.0
     */
    public static function insert($message, $campaign_id ){
        
        global $wpdb;
        $table = $wpdb->prefix . MessageSchema::$table_name;

        try {
            $wpdb->insert($table, array(
                'campaign_id'       => $campaign_id,
                'contact_id'        => $message['contact_id'],
                'email_address'     => $message['email_address'],
                'email_subject'     => $message['email_subject'],
                'email_body'        => $message['email_body'],
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
        $table_name = $wpdb->prefix . MessageSchema::$table_name;
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