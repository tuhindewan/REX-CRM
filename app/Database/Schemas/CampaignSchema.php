<?php

namespace Mint\MRM\DataBase\Tables;

use ParagonIE\Sodium\Core\Curve25519\H;

require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 11:55:03
 * @modify date 2022-08-10 11:55:03
 * @desc [Create wp_mrm_contact_group_pivot table into database]
 */

class CampaignSchema {

    /**
     * Table name for mrm_campaigns
     *
     * @var string
     * @since 1.0.0
     */
    public static $campaign_table = 'mrm_campaigns';


    /**
     * Table name for mrm_campaigns_meta
     * 
     * @var string
     * @since 1.0.0
     */
    public static $campaign_meta_table = 'mrm_campaigns_meta';


    /**
     * Table name for mrm_campaign_emails
     * 
     * @var string
     * @since 1.0.0
     */
    public static $campaign_emails_table = 'mrm_campaign_emails';


    /**
     * Table name for mrm_campaign_emails_meta
     * 
     * @var string
     * @since 1.0.0
     */
    public static $campaign_emails_meta_table = 'mrm_campaign_emails_meta';
    


    /**
     * Create tables on plugin activation
     *
     * @return void
     * @since 1.0.0
     */
    public function get_sql()
    {
        global $wpdb;

        $charsetCollate = $wpdb->get_charset_collate();

        // campaigns table
        $campaign_table         = $wpdb->prefix . self::$campaign_table;
        $this->create_campaign_table( $campaign_table, $charsetCollate );

        // campaign meta table
        $campaign_meta_table    = $wpdb->prefix . self::$campaign_meta_table;
        $this->create_campaign_meta_table( $campaign_meta_table, $charsetCollate );

        // campaign emails table
        $campaign_emails_table  = $wpdb->prefix . self::$campaign_emails_table;
        $this->create_campaign_emails_table( $campaign_emails_table, $charsetCollate );

        // campaign emails meta table
        $campaign_emails_meta_table  = $wpdb->prefix . self::$campaign_emails_meta_table;
        $this->create_campaign_emails_meta_table( $campaign_emails_meta_table, $charsetCollate );
    }


    /**
     * Create Campaign table
     * 
     * @param mixed $table Campaign table name
     * @param mixed $charsetCollate
     * 
     * @return void
     * @since 1.0.0
     */
    public function create_campaign_table( $table, $charsetCollate )
    {
        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `title` VARCHAR(192) NULL,
            `slug` VARCHAR(192),
            `status` ENUM('draft', 'scheduled', 'ongoing', 'completed'),
            `type` ENUM('regular', 'sequence'),
            `scheduled_at` TIMESTAMP NULL,
            `created_by` bigint(20) unsigned NULL,
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL
         ) $charsetCollate;";

        dbDelta($sql);
    }


    /**
     * Create Campaign meta table
     * 
     * @param mixed $table Campaign meta table name
     * @param mixed $charsetCollate
     * 
     * @return void
     * @since 1.0.0
     */
    public function create_campaign_meta_table( $table, $charsetCollate )
    {
        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `campaign_id` BIGINT(20) NOT NULL,
            `meta_key` VARCHAR(50) NOT NULL,
            `meta_value` longtext,
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL
         ) $charsetCollate;";
        dbDelta($sql);
    }


    /**
     * Create Campaign emails table
     * 
     * @param mixed $table Campaign emails table name
     * @param mixed $charsetCollate
     * 
     * @return void
     * @since 1.0.0
     */
    public function create_campaign_emails_table( $table, $charsetCollate )
    {
        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `campaign_id` BIGINT(20) NOT NULL,
            `delay` INT(10) DEFAULT 0,
            `sender_email` VARCHAR(192),
            `sender_name` VARCHAR(192),
            `email_index` INT(10),
            `email_subject` VARCHAR(192),
            `email_preview_text` VARCHAR(192) NULL,
            `template_id` bigint(20) unsigned NULL,
            `email_body` longtext,
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL
         ) $charsetCollate;";

        dbDelta($sql);
    }


    /**
     * Create Campaign emails meta table
     * 
     * @param mixed $table
     * @param mixed $charsetCollate
     * 
     * @return void
     * @since 1.0.0
     */
    public function create_campaign_emails_meta_table( $table, $charsetCollate  )
    {
        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `campaign_emails_id` BIGINT(20) NOT NULL,
            `meta_key` VARCHAR(50) NOT NULL,
            `meta_value` longtext
         ) $charsetCollate;";
        dbDelta($sql);
    }
}