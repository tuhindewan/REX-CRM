<?php

namespace MRM\DB\Tables;

require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 11:55:03
 * @modify date 2022-08-10 11:55:03
 * @desc [Create wp_mrm_contact_note table into database]
 */

class MRM_Contact_Note_Table {

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $mrm_table = 'mrm_contact_note';

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
                `type` VARCHAR(255) NOT NULL,
                `title` VARCHAR(255),
                `description` longtext,
                `created_by` BIGINT(20),
                `status` TINYINT(1) UNSIGNED NOT NULL DEFAULT 1,
                `is_public` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0,
                `created_at` TIMESTAMP NULL,
                `updated_at` TIMESTAMP NULL,
                PRIMARY KEY (`id`),
                KEY `contact_id` (`contact_id`)
             ) $charsetCollate;";

            dbDelta($sql);
        }
    }
}
