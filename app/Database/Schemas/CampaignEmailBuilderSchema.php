<?php

namespace Mint\MRM\DataBase\Tables;

require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 */

class CampaignEmailBuilderSchema {

    /**
     * Table name for mrm_campaigns
     *
     * @var string
     * @since 1.0.0
     */
    public static $table_name = 'mrm_campaign_email_builder';





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

        // campaign email builder table
        $campaign_email_builder_table         = $wpdb->prefix . self::$table_name;
        $this->create_campaign_email_builder_table( $campaign_email_builder_table, $charsetCollate );
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
    public function create_campaign_email_builder_table( $table, $charsetCollate )
    {
        global $wpdb;
        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `email_id` BIGINT UNSIGNED NOT NULL,
            `status` ENUM('draft', 'published'),
            `email_body` longtext,
            `json_data` longtext,
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL,
            INDEX `email_id_index` (`email_id` DESC)
         ) $charsetCollate;";
        dbDelta($sql);
    }
}