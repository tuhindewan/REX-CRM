<?php

namespace Mint\MRM\DataBase\Models;

use Mint\MRM\DataBase\Tables\CampaignSchema;
use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage Campaign related database operations]
 */

class CampaignModel {

    use Singleton;

    /**
     * Insert information to database
     * 
     * @param $args    
     * 
     * @return int|bool 
     * @since 1.0.0
     */
    public static function insert( $args )
    {
        global $wpdb;
        $fields_table = $wpdb->prefix . CampaignSchema::$table_name;

        $args['created_at'] = current_time('mysql');

        try {
            $wpdb->insert( $fields_table, $args );
            return $wpdb->insert_id;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Update information to database
     * 
     * @param object    $args         
     * @param int       $id     
     * @return bool
     * @since 1.0.0
     */
    public static function update( $args, $id )
    {
        global $wpdb;
        $fields_table = $wpdb->prefix . CampaignSchema::$table_name;

        $args['updated_at'] = current_time('mysql');
        unset($args['campaign_id']);

        try {
            $wpdb->update( $fields_table, $args, array( 'id' => $id ) );
            return true;
        } catch(\Exception $e) {
            return false;
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
        $table = $wpdb->prefix . CampaignSchema::$table_name;

        try {
            $select_query     = $wpdb->prepare("SELECT * FROM $table WHERE id = %d",array( $id ));
            $select_results   = $wpdb->get_row($select_query);
            
            return $select_results;
        
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
        $contact_table = $wpdb->prefix . CampaignSchema::$table_name;
        $search_terms = null;

        // Search contacts by email, first name or last name
		if ( ! empty( $search ) ) {
            $search_terms = "WHERE (`title` LIKE '%$search%')";
		}
        // Prepare sql results for list view
        try {
            $select_query  =  "SELECT * FROM `wp_mrm_campaigns` $search_terms ORDER BY id DESC  LIMIT $offset, $limit" ;
            $results   = json_decode( json_encode( $wpdb->get_results($select_query) ), true );

            $count_query    = "SELECT COUNT(*) as total FROM $contact_table $search_terms";
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
    
}