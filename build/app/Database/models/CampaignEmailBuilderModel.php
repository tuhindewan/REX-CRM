<?php

namespace Mint\MRM\DataBase\Models;

use Mint\MRM\DataBase\Tables\CampaignEmailBuilderSchema;
use Mint\MRM\DataBase\Tables\CampaignSchema;
use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @desc [Manage Campaign email builder related database operations]
 */

class CampaignEmailBuilderModel {

    use Singleton;


    public static function is_new_email_template( $email_id ) {
        global $wpdb;
        $email_builder_table    = $wpdb->prefix . CampaignEmailBuilderSchema::$table_name;
        $query                  = $wpdb->prepare("SELECT * FROM $email_builder_table WHERE email_id = %d", array( $email_id ) );
        $results                = $wpdb->get_row($query);
        if( $results ){
            return false;
        }
        return true;
    }

    /**
     * Run SQL query to insert campaign email builder information into database
     *
     * @param $args
     *
     * @return int|bool
     * @since 1.0.0
     */
    public static function insert( $args )
    {
        global $wpdb;
        $email_builder_table = $wpdb->prefix . CampaignEmailBuilderSchema::$table_name;
        $args['created_at'] = current_time('mysql');
        $inserted = $wpdb->insert( $email_builder_table, $args );
        if( $inserted ){
            return $wpdb->insert_id;
        }
        return false;
    }



    /**
     * Run SQL query to update campaign email builder information into database
     *
     * @param array $args
     * @param int   $email_id
     * @return bool
     * @since 1.0.0
     */
    public static function update( $email_id, $args ) {
        global $wpdb;
        $email_builder_table    = $wpdb->prefix . CampaignEmailBuilderSchema::$table_name;
        $args['updated_at']     = current_time('mysql');
        $wpdb->update(
            $email_builder_table,
            $args,
            array(
                'email_id' => $email_id
            )
        );
    }


    /**
     * get single email template
     *
     * @param $id
     * @return array|bool|object|void|null
     *
     * @since 1.0.0
     */
    public static function get( $id )
    {
        global $wpdb;
        $email_builder_table    = $wpdb->prefix . CampaignEmailBuilderSchema::$table_name;
        $select_query           = $wpdb->prepare("SELECT * FROM $email_builder_table WHERE email_id=%s", $id );
        $email                  = $wpdb->get_row( $select_query, ARRAY_A );
        $email_body             = isset($email['email_body']) ? $email['email_body'] : ""; 
        $email['email_body']    = maybe_unserialize($email_body);
        $email['json_data']     = maybe_unserialize($email['json_data']);
        return $email;
    }

}