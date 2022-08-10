<?php

namespace MRM\DB\Tables;

require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 15:39:56
 * @modify date 2022-08-09 15:39:56
 * @desc [Create wp_mrm_contact_groups table inot database]
 */

class MRM_Contact_Groups_Table {


    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $mrm_table = 'mrm_contact_groups';


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
                `ID` bigint(20) unsigned NOT NULL auto_increment,
                `title` varchar(255) NOT NULL,
                `type` tinyint(2) unsigned NOT NULL, -- 1 -> tags, 2 -> lists, 3 -> segments
                `data` longtext, 
                `created_at` datetime,
                `updated_at` datetime,
               PRIMARY KEY (`ID`),
               KEY `type` (`type`)
             ) $charsetCollate;";

            dbDelta($sql);
        }
    }
}