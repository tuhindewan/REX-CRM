<?php

namespace Mint\MRM\DataBase\Models;

use Mint\MRM\DataBase\Tables\CampaignEmailBuilderSchema;
use Mint\MRM\DataBase\Tables\CampaignSchema;
use Mint\MRM\DataStores\Campaign;
use Mint\Mrm\Internal\Traits\Singleton;
use wpdb;

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
        $args['created_at'] = current_time('mysql', 1);
        $args['title']      = $args['title'] ? $args['title'] : 'No title';

        $result = $wpdb->insert(
            $campaign_table,
            $args
        );

        return $result ? self::get( $wpdb->insert_id ) : false;
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
        unset($email['toError']);
        unset($email['senderEmailError']);
        $email['campaign_id']   = $campaign_id;
        $email['created_at']    = current_time('mysql');
        $email['email_index']   = $index;
        $email['email_json']    = isset($email['email_json']) ? serialize($email['email_json']) : '';
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

        $result = $wpdb->update( $fields_table, $args, array( 'id' => $id ) );
        return $result ? self::get( $id ) : false;
            
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
        $campaign_email     = self::get_campaign_email_by_index( $campaign_id, $email );

        if($campaign_email){
            $wpdb->update(
                $fields_table,
                $email,
                array(
                    'campaign_id' => $campaign_id, 'id' => $email['id']
                ));
        }else{
            self::insert_campaign_emails( $email, $campaign_id, $index );
        }
        return true;
    }


    /**
     * Run SQL Query to get a single campaign information
     * 
     * @param mixed $id campaign ID
     * 
     * @return object
     * @since 1.0.0
     */
    public static function get( $id )
    {
        global $wpdb;
        $campaign_table = $wpdb->prefix . CampaignSchema::$campaign_table;
        $campaign_meta_table = $wpdb->prefix . CampaignSchema::$campaign_meta_table;

        $select_query       = $wpdb->prepare("SELECT * FROM $campaign_table as CT LEFT JOIN $campaign_meta_table as CMT on CT.id = CMT.campaign_id WHERE CT.id = %d", $id );

        $campaign           = $wpdb->get_row( $select_query, ARRAY_A );
        $campaign['id']     = $id;
        $campaign['emails']    = self::get_campaign_email( $id );
        return $campaign;
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

        // Prepare serach terms for query
        $search_terms = null;
		if ( !empty( $search ) ) {
            $search = $wpdb->esc_like($search);
            $search_terms = "WHERE (`title` LIKE '%%$search%%')";
		}
        
        // Prepare sql results for list view
        $results     = $wpdb->get_results( $wpdb->prepare( "SELECT id, title, status, type, created_at FROM $campaign_table $search_terms ORDER BY id DESC  LIMIT $offset, $limit" ), ARRAY_A ) ;
            
        $count       = $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) as total FROM $campaign_table $search_terms" ) );
        $total_pages = ceil($count / $limit);

        return [
            'data'          => $results,
            'total_pages'   => $total_pages,
            'count'         => $count
        ];
	
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

        $meta_results       = $wpdb->get_results($wpdb->prepare("SELECT meta_key, meta_value FROM $campaign_meta_table  WHERE campaign_id = %d",array( $id )), ARRAY_A);

        $campaign_meta = [];
        foreach($meta_results as $result){
            $campaign_meta[$result['meta_key']] = maybe_unserialize($result['meta_value']);
        }

        return $campaign_meta;
    }

    /**
     * Returns campaign email data for Cron background process
     * 
     * @param int $id   campaign ID
     * @return array
     * @since 1.0.0
     */
    public static function get_campaign_email_for_background( $id, $scheduled_at = null )
	{
		global $wpdb;
		$campaign_emails_table = $wpdb->prefix . CampaignSchema::$campaign_emails_table;
		$campaign_emails_query = $wpdb->prepare("SELECT * FROM {$campaign_emails_table} WHERE `campaign_id` = %d AND `status` = %s", $id, 'scheduled' );
		if ( $scheduled_at ) {
			$campaign_emails_query .= $wpdb->prepare( "AND `scheduled_at` <= %s", $scheduled_at );
		}
        $emails = $wpdb->get_results($campaign_emails_query, ARRAY_A);
        $first_email_id = isset($emails[0]['id']) ? $emails[0]['id'] : "";
        $email_builder = CampaignEmailBuilderModel::get( $first_email_id );
        if (!empty($emails)) {
            $emails = array_map(function ($email) use($email_builder) {
                $email['email_json'] = unserialize($email['email_json']);  //phpcs:ignore
                $email['email_body'] = $email_builder['email_body'];        //phpcs:ignore
                return $email;
            }, $emails);
        }

        return $emails;
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
        $email_builder_table    = $wpdb->prefix . CampaignEmailBuilderSchema::$table_name;

        $campaign_emails_query = $wpdb->prepare("SELECT
                                               CET.id, delay, delay_count, delay_value,
                                               send_time, sender_email, sender_name,
                                               email_index, email_subject, email_preview_text,
                                               template_id, CET.status, CET.email_json, scheduled_at,
                                               EBT.status as ebt_status, EBT.email_body as body_data, EBT.json_data
                                               FROM $campaign_emails_table
                                               as CET LEFT JOIN $email_builder_table
                                               as EBT
                                               on CET.id = EBT.email_id
                                               WHERE CET.campaign_id = %d", $id);
       $emails = $wpdb->get_results($campaign_emails_query, ARRAY_A);
        
        if (!empty($emails)) {
            $emails = array_map(function ($email) {
                $email_body    = isset($email['body_data']) ? $email['body_data'] : "";
                $email['email_json'] = unserialize($email['email_json']);  //phpcs:ignore
                $email['email_body'] = maybe_unserialize($email_body);     //phpcs:ignore
                return $email;
            }, $emails);
        }
    
        return $emails;
    }



    /**
     * Get an email by its index for a specific campaign
     * 
     * @param mixed $campaign_id
     * @param mixed $index
     * 
     * @return object
     * @since 1.0.0
     */
    public static function get_campaign_email_by_index($campaign_id, $email)
    {
        global $wpdb;
        $campaign_emails_table = $wpdb->prefix . CampaignSchema::$campaign_emails_table;
        $email_id  = isset( $email['id'] ) ? $email['id'] : "";
        $campaign_emails_query = $wpdb->prepare("SELECT 
                                    id,email_index
                                     FROM $campaign_emails_table  
                                     WHERE campaign_id = %d AND id = %d", $campaign_id, $email_id);
        return $wpdb->get_row($campaign_emails_query);
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

        if ( is_array( $ids ) ){
            $ids = implode( ",", array_map( 'intval', $ids ) );
            return $wpdb->query( "DELETE FROM $campaign_table WHERE id IN ( $ids )" );
        }
        return false;
    }


    /**
     * Delete a email from campaign 
     * 
     * @param int $campaign_id 
     *  @param int $email_id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function remove_email_from_campaign( $campaign_id, $email_id )
    {
        global $wpdb;
        $campaign_emails_table = $wpdb->prefix . CampaignSchema::$campaign_emails_table;

        return $wpdb->delete( $campaign_emails_table, array('id' => $email_id, 'campaign_id' => $campaign_id) );
    }


    /**
     * Get campaign email id by email index of that campaign
     *
     * @param $campaign_id
     * @param $email_index
     * @return object|array
     *
     * @since 1.0.0
     */
    public static function get_email_by_index( $campaign_id, $email_index ) {
        global $wpdb;
        $email_table    = $wpdb->prefix . CampaignSchema::$campaign_emails_table;
        $select_query   = $wpdb->prepare("SELECT * FROM {$email_table} WHERE campaign_id=%s AND email_index=%s", $campaign_id, $email_index );
        return $wpdb->get_row( $select_query );
    }

    /**
     * Get campaign email by email id of that campaign
     *
     * @param $campaign_id
     * @param $email_index
     * @return object|array
     *
     * @since 1.0.0
     */
    public static function get_campaign_email_by_id( $campaign_id, $email_index ) {
        global $wpdb;
        $email_table    = $wpdb->prefix . CampaignSchema::$campaign_emails_table;
        $select_query   = $wpdb->prepare("SELECT * FROM {$email_table} WHERE campaign_id=%s AND id=%s", $campaign_id, $email_index );
        return $wpdb->get_row( $select_query );
    }
    

    /**
     * Returns all publish campaigns
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_publish_campaign_id() {
        global $wpdb;
        $campaign_table = $wpdb->prefix . CampaignSchema::$campaign_table;

        $select_query   = $wpdb->prepare("SELECT * FROM {$campaign_table} WHERE `status` = %s", 'active');
        return $wpdb->get_results( $select_query, ARRAY_A );
    }


    /**
     * Update a campaign status 
     * 
     * @param mixed $campaign_id
     * @param mixed $status
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function update_campaign_status($campaign_id, $status)
    {
        global $wpdb;
        $fields_table = $wpdb->prefix . CampaignSchema::$campaign_table;

        $args['updated_at'] = current_time('mysql');

        return $wpdb->update( $fields_table, array( 'status' => $status), array( 'id' => $campaign_id ) );
    }


    /**
     * @desc Update a campaign email status
     * @param mixed $campaign_id
     * @param mixed $email_id
     * @param mixed $status
     * @return bool
     * @since 1.0.0
     */
    public static function update_campaign_email_status( $campaign_id, $email_id, $status)
    {
        global $wpdb;
        $campaign_emails_table = $wpdb->prefix . CampaignSchema::$campaign_emails_table;
        return $wpdb->update(
            $campaign_emails_table,
            [
                'status' => $status
            ],
            [
                'id' => $email_id,
                'campaign_id' => $campaign_id
            ]
        );
    }


    /**
     * Get email template data from email builder
     * 
     * @param mixed $campaign_id
     * @param mixed $email_id
     * 
     * @return object
     * @since 1.0.0
     */
    public static function get_campaign_email_to_builder( $campaign_id, $email_id )
    {
        global $wpdb;
        $email_table    = $wpdb->prefix . CampaignSchema::$campaign_emails_table;
        $select_query   = $wpdb->prepare("SELECT * FROM {$email_table} WHERE campaign_id=%s AND id=%s", $campaign_id, $email_id );
        return $wpdb->get_row( $select_query );
    }


    /**
     * Return campaign's emaild meta value
     * 
     * @param mixed $email_id
     * @param mixed $key
     * 
     * @return bool|int
     * @since 1.0.0
     */
    public static function get_campaign_email_meta( $email_id, $key )
    {
        global $wpdb;
        $email_meta_table = $wpdb->prefix . CampaignSchema::$campaign_emails_meta_table;
        $select_query   = $wpdb->prepare("SELECT meta_value FROM {$email_meta_table} WHERE campaign_emails_id=%d AND meta_key=%s", $email_id, $key );
        $meta_data = $wpdb->get_col( $select_query );
        return isset( $meta_data[0] ) ? $meta_data[0] : false;
    }


    /**
     * Update campaign's email meta fields
     * 
     * @param mixed $email_id
     * @param mixed $key
     * @param mixed $value
     * 
     * @return void
     * @since 1.0.0
     */
    public static function update_campaign_email_meta( $email_id, $key, $value )
    {
        global $wpdb;
        $email_meta_table = $wpdb->prefix . CampaignSchema::$campaign_emails_meta_table;
        $isMeta = self::get_campaign_email_meta( $email_id, $key );
        
        if(!$isMeta){
            $wpdb->insert(
                $email_meta_table,
                [
                    "campaign_emails_id" => $email_id,
                    "meta_key"           => $key,
                    "meta_value"         => $value
                ]
            );
        }
        else {
            $wpdb->update( $email_meta_table, 
                [
                    "meta_value"=> $value
                ], 
                [
                    'campaign_emails_id' => $email_id, "meta_key" => $key
                ] 
            );
        }
    }
}