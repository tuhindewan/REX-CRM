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
    public static $table_name = 'mrm_campaigns';


    /**
     * @var string
     * @since 1.0.0
     */
    public static $mrm_campaign_meta_table = 'mrm_campaigns_meta';


    /**
     * @var string
     * @since 1.0.0
     */
    public static $mrm_table = 'mrm_campaign_emails';


    /**
     * Create the table.
     *
     * @return void
     * @since 1.0.0
     */
    public function create()
    {
        global $wpdb;

        $charsetCollate = $wpdb->get_charset_collate();

        $table = $wpdb->prefix . self::$mrm_table;

        // campaigns table
        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `title` VARCHAR(192) NULL,
            `slug` VARCHAR(192),
            `status` varchar(20),
            `template_id` bigint(20) unsigned NULL,
            `email_subject` varchar(192) NULL,
            `email_preview_text` VARCHAR(192),
            `email_body` longtext,
            `sender_email` VARCHAR(192),
            `sender_name` VARCHAR(192),
            `settings` longtext NULL,
            `total_recipients` bigint(20) unsigned NULL,
            `created_by` bigint(20) unsigned NULL,
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL
         ) $charsetCollate;";

        dbDelta($sql);


        // campaign meta table
        $table = $wpdb->prefix . self::$mrm_campaign_meta_table;
        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `campaign_id` BIGINT(20) NOT NULL,
            `meta_key` varchar(50) NULL,
            `meta_value` longtext
         ) $charsetCollate;";
        dbDelta($sql);


        // campaign emails table
        $table = $wpdb->prefix . self::$mrm_emails_table;
        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `campaign_id` BIGINT(20) NOT NULL,
            `contact_id` BIGINT(20) NULL,
            `status` varchar(50),
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL
         ) $charsetCollate;";

        dbDelta($sql);
    }
}