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
     * Run SQL query to insert campaign information into database
     * 
     * @param $args    
     * 
     * @return int|bool 
     * @since 1.0.0
     */
    public static function insert( $args )
    {
        global $wpdb;
        $campaign_table = $wpdb->prefix . CampaignSchema::$campaign_table;

        unset($args['recipients']);
        unset($args['emails']);
        $args['created_at'] = current_time('mysql');

        $inserted = $wpdb->insert( $campaign_table, $args );
        if( $inserted ){
            return $wpdb->insert_id;
        }
        return false;
    }


    /**
     * Run SQL query to update campaign recipients information into database
     * 
     * @param $recipients    
     * @param $campaign_id
     * 
     * @return int|bool 
     * @since 1.0.0
     */
    public static function insert_campaign_recipients( $recipients, $campaign_id )
    {
        global $wpdb;
        $campaign_meta_table = $wpdb->prefix . CampaignSchema::$campaign_meta_table;

        $inserted = $wpdb->insert( $campaign_meta_table, [
            'meta_key'      => 'recipients',
            'meta_value'    => $recipients,
            'campaign_id'   => $campaign_id
        ] );
        if( $inserted ){
            return $wpdb->insert_id;
        }
        return false;
    }


    /**
     * Run SQL query to update campaign emails information into database
     * 
     * @param $email    
     * @param $campaign_id
     * @param $index
     * 
     * @return int|bool 
     * @since 1.0.0
     */
    public static function insert_campaign_emails( $email, $campaign_id, $index )
    {
        global $wpdb;
        $fields_table = $wpdb->prefix . CampaignSchema::$campaign_emails_table;

        $email['campaign_id']   = $campaign_id;
        $email['created_at']    = current_time('mysql');
        $email['email_index']   = $index + 1;

        $inserted = $wpdb->insert( $fields_table, $email );
        if( $inserted ){
            return $wpdb->insert_id;
        }
        return false;
    }


    /**
     * Run SQL query to update campaign information into database
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
        unset($args['recipients']);
        unset($args['emails']);

        return $wpdb->update( $fields_table, $args, array( 'id' => $id ) );
            
    }


    /**
     * Run SQL query to update campaign recipients into database
     * 
     * @param string    $recipients         
     * @param int       $campaign_id     
     * @return bool
     * @since 1.0.0
     */
    public static function update_campaign_recipients( $recipients, $campaign_id )
    {
        global $wpdb;
        $fields_table = $wpdb->prefix . CampaignSchema::$campaign_meta_table;

        return $wpdb->update( $fields_table, array(
                    'meta_value'    => $recipients
                ), array( 'meta_key' => 'recipients' , 'campaign_id' => $campaign_id ));
    }


    /**
     * Run SQL query to update campaign emails into database
     * 
     * @param array     $email         
     * @param int       $campaign_id    
     * @param int       $index 
     * @return bool
     * @since 1.0.0
     */
    public static function update_campaign_emails( $email, $campaign_id, $index )
    {
        global $wpdb;
        $fields_table = $wpdb->prefix . CampaignSchema::$campaign_emails_table;

        return $wpdb->update( $fields_table, $email, array( 
                            'campaign_id' => $campaign_id, 'email_index' => $index + 1 
                        ));
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

        try {
            $select_query     = $wpdb->prepare("SELECT * FROM $campaign_table WHERE id = %d",array( $id ));
            $select_campaign_results   = json_decode( json_encode( $wpdb->get_row($select_query) ), true );

            $campaign_meta = self::get_campaign_meta( $id );
            $campaign_email = self::get_campaign_email( $id );

            

            $results[] = array_merge($select_campaign_results, $campaign_meta, $campaign_email);
            
            return $results;
        
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
            $campaign_query_results   = json_decode( json_encode( $wpdb->get_results($select_query) ), true );

            $results = array();
            
            foreach( $campaign_query_results as $campaign_query_result ){
                $q_id = isset($campaign_query_result['id']) ? $campaign_query_result['id'] : "";
                $campaign_meta = self::get_campaign_meta( $q_id );
                $campaign_email = self::get_campaign_email( $q_id );
                $results[] = array_merge($campaign_query_result, $campaign_meta, $campaign_email);
            }

            $count_campaign_query    = "SELECT COUNT(*) as total FROM $campaign_table $search_terms";
            $count_result   = $wpdb->get_results($count_campaign_query);
            
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

        $campaign_emails_query = $wpdb->prepare("SELECT 
                                    id,delay,sender_email,
                                    sender_name,email_index,email_subject,email_preview_text,
                                    template_id,email_body, created_at, updated_at
                                     FROM $campaign_emails_table  
                                     WHERE campaign_id = %d",array( $id ));
        $campaign_email_results       = json_decode(json_encode($wpdb->get_results($campaign_emails_query)), true);
        $campaign_emails['emails'] = [];

        $campaign_emails['emails'] = array_map(function($result){
            return $result;
        }, $campaign_email_results);

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
            $success = $wpdb->delete( $campaign_table, array('id' => $id) );
            if ($success) return true;
            return false;
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
                $success = $wpdb->query( "DELETE FROM $campaign_table WHERE id IN ($ids)" );
                if ($success) return true;
                return false;
            }
            return false;
        } catch(\Exception $e) {
            return false;
        }
    }
    
    
}