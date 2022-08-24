<?php

namespace MRM\DB\Tables;

require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 10:55:03
 * @modify date 2022-08-10 10:55:03
 * @desc [Create wp_mrm_contact_meta table into database]
 */

class MRM_Contact_Meta_Table {

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $mrm_table = 'mrm_contact_meta';

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
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `contact_id` BIGINT UNSIGNED NOT NULL,
            `meta_key` VARCHAR(50) DEFAULT NULL,    
            `meta_value` longtext,
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL,
            KEY `meta_key` (`meta_key`),
            FOREIGN KEY (contact_id)
            REFERENCES wp_mrm_contacts (id)
            ON DELETE CASCADE
         ) $charsetCollate;";

        dbDelta($sql);
    }
}
