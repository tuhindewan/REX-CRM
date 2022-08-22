<?php

namespace MRM\DB\Tables;

require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 10:20:03
 * @modify date 2022-08-10 10:20:03
 * @desc [Create wp_mrm_contacts table into database]
 */

class MRM_Contacts_Table {

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $mrm_table = 'mrm_contacts';

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
            `wp_user_id` BIGINT UNSIGNED NULL,
            `hash` VARCHAR(90) NULL,
            `email` VARCHAR(190) NOT NULL UNIQUE,
            `first_name` VARCHAR(192) NULL,
            `last_name` VARCHAR(192) NULL,
            `phone` VARCHAR(50) NULL,
            `company_name` VARCHAR(192) NULL,
            `contact_owner` BIGINT UNSIGNED NULL,
            `scores` INT UNSIGNED NOT NULL DEFAULT 0,
            `source` VARCHAR(50) NULL,
            `status` VARCHAR(50) NOT NULL DEFAULT 'subscribed' COMMENT 'SUBSCRIBED, UNSUBSCRIBED, PENDING, BOUNCED',
            `stage` VARCHAR(50) DEFAULT 'lead' COMMENT 'LEAD, MQL, SQL, CUSTOMERS',
            `last_activity` TIMESTAMP NULL,
            `date_of_birth` DATE NULL,
            `timezone` VARCHAR(192) NULL,
            `address_line_1` VARCHAR(192) NULL,
            `address_line_2` VARCHAR(192) NULL,
            `postal_code` VARCHAR(192) NULL,
            `city` VARCHAR(192) NULL,
            `state` VARCHAR(192) NULL,
            `country` VARCHAR(192) NULL,
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL,
             INDEX `contact_wp_user_id_index` (`wp_user_id` ASC),
             INDEX `contact_status_index` (`status` ASC)
         ) $charsetCollate;";

        dbDelta($sql);
    }
}