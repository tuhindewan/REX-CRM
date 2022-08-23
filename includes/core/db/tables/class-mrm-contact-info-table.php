<?php

namespace MRM\DB\Tables;

require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 10:45:03
 * @modify date 2022-08-10 10:45:03
 * @desc [Create wp_mrm_contact_info table into database]
 */

class MRM_Contact_Info_Table {

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $mrm_table = 'mrm_contact_info';

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
            `id` BIGINT unsigned NOT NULL auto_increment,
            `contact_id` BIGINT unsigned NOT NULL,
            `timezone` VARCHAR(192) NULL,
            `address_line_1` VARCHAR(192) NULL,
            `address_line_2` VARCHAR(192) NULL,
            `postal_code` VARCHAR(192) NULL,
            `city` VARCHAR(192) NULL,
            `state` VARCHAR(192) NULL,
            `country` VARCHAR(192) NULL,
            `phone` VARCHAR(50) NULL,
            `company_name` VARCHAR(192) NULL,
            `contact_owner` BIGINT UNSIGNED NULL,
            `date_of_birth` DATE NULL,
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`),
            KEY `contact_id` (`contact_id`)
         ) $charsetCollate;";

        dbDelta($sql);
    }
}
