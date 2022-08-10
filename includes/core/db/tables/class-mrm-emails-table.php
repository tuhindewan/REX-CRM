<?php

namespace MRM\DB\Tables;

require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 11:55:03
 * @modify date 2022-08-10 11:55:03
 * @desc [Create wp_mrm_contact_group_pivot table into database]
 */

class MRM_Emails_Table {

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $mrm_table = 'mrm_emails';

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

        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
            `track_id` BIGINT(20) unsigned NOT NULL,
            `subject` VARCHAR(255) NOT NULL,
            `preview_text` VARCHAR(255) NOT NULL,
            `body` longtext,
            `template_id` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Template ID',
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`),
            KEY `track_id` (`track_id`)
         ) $charsetCollate;";

        dbDelta($sql);
    }
}
