<?php

namespace Mint\MRM\DataBase\Models;

use Mint\MRM\DataBase\Tables\CampaignSchema;
use Mint\MRM\DataStores\Campaign;
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
     * Check existing campaign on database
     * 
     * @param mixed $id Campaign id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_campaign_exist( $id )
    {
        global $wpdb;
        $campaign_table = $wpdb->prefix . CampaignSchema::$campaign_table;

        $select_query = $wpdb->prepare("SELECT * FROM $campaign_table WHERE id = %d", array( $id ) );
        $results = $wpdb->get_results($select_query);

        if( $results ){
            return true;
        }
        return false;
    }

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
        $fields_table = $wpdb->prefix . CampaignSchema::$campaign_table;

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
        $fields_table = $wpdb->prefix . CampaignSchema::$campaign_table;

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
        $campaign_table = $wpdb->prefix . CampaignSchema::$campaign_table;
        $campaign_meta_table = $wpdb->prefix . CampaignSchema::$campaign_meta_table;
        $campaign_emails_table = $wpdb->prefix . CampaignSchema::$campaign_emails_table;
        $campaign_emails_meta_table = $wpdb->prefix . CampaignSchema::$campaign_emails_meta_table;

        try {
            $select_query     = $wpdb->prepare("SELECT * FROM $campaign_table WHERE id = %d",array( $id ));
            $select_results   = $wpdb->get_row($select_query);
            
            return $select_results;
        
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Run SQL query to get or search campaigns from database
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
        $campaign_table = $wpdb->prefix . CampaignSchema::$campaign_table;


        $search_terms = null;

		if ( ! empty( $search ) ) {
            $search = $wpdb->esc_like($search);
            $search_terms = "WHERE (`title` LIKE '%%$search%%')";
		}
        // Prepare sql results for list view
        try {
            $select_query  =  "SELECT * FROM $campaign_table $search_terms ORDER BY id DESC  LIMIT $offset, $limit" ;
            $query_results   = json_decode( json_encode( $wpdb->get_results($select_query) ), true );

            $results = array();
            
            foreach( $query_results as $query_result ){
                $q_id = isset($query_result['id']) ? $query_result['id'] : "";
                $campaign_meta = self::get_campaign_meta( $q_id );
                $campaign_email = self::get_campaign_email( $q_id );
                $results[] = array_merge($query_result, $campaign_meta, $campaign_email);
            }

            $count_query    = "SELECT COUNT(*) as total FROM $campaign_table $search_terms";
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
     * Returns campaign meta data
     * 
     * @param int $id   campaign ID
     * @return array
     * @since 1.0.0
     */
    public static function get_campaign_meta( $id )
    {
        global $wpdb;
        $campaign_meta_table = $wpdb->prefix . CampaignSchema::$campaign_meta_table;

        $meta_query         = $wpdb->prepare("SELECT meta_key, meta_value FROM $campaign_meta_table  WHERE campaign_id = %d",array( $id ));
        $meta_results       = json_decode(json_encode($wpdb->get_results($meta_query)), true);

        $campaign_meta = [];

        foreach($meta_results as $result){
            $campaign_meta[$result['meta_key']] = maybe_unserialize($result['meta_value']);
        }

        return $campaign_meta;
    }

    /**
     * Returns campaign email data
     * 
     * @param int $id   campaign ID
     * @return array
     * @since 1.0.0
     */
    public static function get_campaign_email( $id )
    {
        global $wpdb;
        $campaign_emails_table = $wpdb->prefix . CampaignSchema::$campaign_emails_table;

        $campaign_table_query = $wpdb->prepare("SELECT 
                                    id,delay,sender_email,
                                    sender_name,email_index,email_subject,email_preview_text,
                                    template_id,email_body, created_at, updated_at
                                     FROM $campaign_emails_table  
                                     WHERE campaign_id = %d",array( $id ));
        $email_results       = json_decode(json_encode($wpdb->get_results($campaign_table_query)), true);
        $campaign_emails['emails'] = [];

        $campaign_emails['emails'] = array_map(function($result){
            return $result;
        }, $email_results);

        return $campaign_emails;
    }


    /**
     * Delete a campaign from the database
     * 
     * @param mixed $id Campaign id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy( $id )
    {
        global $wpdb;
        $campaign_table = $wpdb->prefix . CampaignSchema::$campaign_table;

        try {
            $wpdb->delete( $campaign_table, array('id' => $id) );
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Delete multiple campaigns from the database
     * 
     * @param array $ids multiple campaigns
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy_all( $ids )
    {
        global $wpdb;

        $campaign_table  = $wpdb->prefix . CampaignSchema::$campaign_table;

        try {
            if (is_array($ids)){
                $ids = implode(",", array_map( 'intval', $ids ));
                $wpdb->query( "DELETE FROM $campaign_table WHERE id IN ($ids)" );
                return true;
            }
            return false;
        } catch(\Exception $e) {
            return false;
        }
    }
    
    
}