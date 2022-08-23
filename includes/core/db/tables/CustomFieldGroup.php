<?php

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 15:39:56
 * @modify date 2022-08-09 15:39:56
 * @desc [Create wp_mrm_custom_field_groups table into database]
 */


namespace MRM\DB\Tables;


class CustomFieldGroup {


    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $table_name = 'mrm_custom_field_groups';


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

        $table = $wpdb->prefix . self::$table_name;

        $sql = "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
			`title` VARCHAR(255) NOT NULL,
            `created_at` TIMESTAMP,
            `updated_at` TIMESTAMP
         ) $charsetCollate;";

        dbDelta($sql);
    }
}
