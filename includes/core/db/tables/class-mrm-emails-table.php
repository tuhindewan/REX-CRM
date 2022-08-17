<?php

namespace MRM\DB\Tables;

require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 11:55:03
 * @modify date 2022-08-10 11:55:03
 * @desc [Create wp_mrm_messages table into database]
 */

class MRM_Messages_Table {

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $mrm_table = 'mrm_messages';

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

        if ($wpdb->get_var("SHOW TABLES LIKE '$table'") != $table) {

            $sql = "CREATE TABLE IF NOT EXISTS {$table} (
                `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
                `interaction_id` BIGINT UNSIGNED NULL,
                `ineraction_type` VARCHAR(50) NULL DEFAULT 'campaign',
                `contact_id` BIGINT UNSIGNED NULL COMMENT 'Set NULL on contact delete',
                `email_address` VARCHAR(192) NOT NULL,
                `email_subject` VARCHAR(192) NULL,
                `email_preview_text` VARCHAR(192) NULL,
                `email_body` LONGTEXT NULL,
                `email_headers` TEXT NULL,
                `first_open` TIMESTAMP DEFAULT NULL,
                `first_click` TIMESTAMP DEFAULT NULL,
                `click_count` INT NULL,
                `status` VARCHAR(50) NOT NULL DEFAULT 'draft' COMMENT 'SENT, SCHEDULED, PENDING, BOUNCED, FAILED',
                `scheduled_at` TIMESTAMP NULL,
                `created_at` TIMESTAMP NULL,
                `updated_at` TIMESTAMP NULL,
                INDEX `interaction_id_index` (`interaction_id` DESC),
                INDEX `contact_id_index` (`contact_id` DESC)
             ) $charsetCollate;";

            dbDelta($sql);
        }
    }
}
