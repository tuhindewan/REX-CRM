<?php

namespace MRM\DB\Tables;

require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 11:55:03
 * @modify date 2022-08-17 11:55:03
 * @desc [Create wp_mrm_contact_group_pivot table into database]
 */

class MRM_Workflows_Table {

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $mrm_table = 'mrm_workflows';

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
                `title` VARCHAR(255),
                `workflow_data` longtext,
                `gobal_state` longtext,
                `status` VARCHAR(255) NOT NULL,
                `last_step_id` BIGINT(20) UNSIGNED NOT NULL,
                PRIMARY KEY (`id`)
             ) $charsetCollate;";

            dbDelta($sql);
        }
    }
}
