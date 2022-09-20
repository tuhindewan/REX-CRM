<?php

namespace Mint\MRM\DataBase\Tables;

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
     * Table name
     *
     * @var string
     * @since 1.0.0
     */
    public static $campaign_table = 'mrm_campaigns';


    /**
     * @var string
     * @since 1.0.0
     */
    public static $campaign_meta_table = 'mrm_campaigns_meta';


    /**
     * @var string
     * @since 1.0.0
     */
    public static $campaign_emails_table = 'mrm_campaign_emails';


    /**
     * Create the table.
     *
     * @return void
     * @since 1.0.0
     */
    public function get_sql()
    {
        global $wpdb;

        $charsetCollate = $wpdb->get_charset_collate();

        $table = $wpdb->prefix . self::$campaign_table;

        // campaigns table
        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `title` VARCHAR(192) NULL,
            `slug` VARCHAR(192),
            `status` varchar(20) NOT NULL DEFAULT 'draft' COMMENT 'DRAFT, SCHEDULED, ONGOING, COMPLETED',
            `type` VARCHAR(50) NOT NULL DEFAULT 'regular' COMMENT 'REGULAR, SEQUENCE',
            `scheduled_at` TIMESTAMP NULL,
            `created_by` bigint(20) unsigned NULL,
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL
         ) $charsetCollate;";

        dbDelta($sql);


        // campaign meta table
        $table = $wpdb->prefix . self::$campaign_meta_table;
        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `campaign_id` BIGINT(20) NOT NULL,
            `meta_key` VARCHAR(50) NULL,
            `meta_value` longtext
         ) $charsetCollate;";
        dbDelta($sql);


        // campaign emails table
        $table = $wpdb->prefix . self::$campaign_emails_table;
        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `campaign_id` BIGINT(20) NOT NULL,
            `delay` INT(10) DEFAULT 0,
            `email_subject` VARCHAR(192),
            `email_preview_text` VARCHAR(192) NULL,
            `template_id` bigint(20) unsigned NULL,
            `email_body` longtext,
            `sender_email` VARCHAR(192),
            `sender_name` VARCHAR(192),
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL
         ) $charsetCollate;";

        dbDelta($sql);
    }
}