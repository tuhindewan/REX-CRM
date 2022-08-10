<?php

namespace MRM\DB\Tables;

require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 11:55:03
 * @modify date 2022-08-10 11:55:03
 * @desc [Create wp_mrm_interactions table into database]
 */

class MRM_Interactions_Table {

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $mrm_table = 'mrm_interactions';

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

            $sql = "CREATE TABLE {$table} (
                `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
                `contact_id` BIGINT(20) UNSIGNED NOT NULL,
                `hash` VARCHAR(60) NOT NULL,
                `mode` TINYINT(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1 - Email 2 - SMS',
                `type` TINYINT(2) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1 - Automation 2 - Campaign 3 - Note 4 - Email 5 - SMS',
                `open_rate` INT(3) UNSIGNED NOT NULL DEFAULT 0,
                `click_rate` INT(3) UNSIGNED NOT NULL DEFAULT 0,
                `step_id` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Step ID',
                `created_by` BIGINT(10) UNSIGNED NOT NULL DEFAULT 1,
                `first_open` TIMESTAMP DEFAULT NULL,
                `first_click` TIMESTAMP DEFAULT NULL,
                `status` TINYINT(2) UNSIGNED DEFAULT 1 COMMENT '1 - Draft 2 - Send 3 - Error 4 - Bounced',
                `created_at` TIMESTAMP NULL,
                `updated_at` TIMESTAMP NULL,
                PRIMARY KEY (`id`),
                KEY `contact_id` (`contact_id`)
             ) $charsetCollate;";

            dbDelta($sql);
        }
    }
}
