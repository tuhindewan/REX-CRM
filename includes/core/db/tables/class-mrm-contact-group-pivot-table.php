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

class MRM_Contact_Group_Pivot_Table {

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $mrm_table = 'mrm_contact_group_pivot';

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
            `group_id` BIGINT UNSIGNED NOT NULL COMMENT 'list_id or tag_id or segment_id',
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL,
            INDEX `contact_id_pivot_index` (`contact_id` ASC),
            INDEX `group_id_pivot_index` (`group_id` ASC)
         ) $charsetCollate;";

        dbDelta($sql);
    }
}
