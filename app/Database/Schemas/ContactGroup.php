<?php

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 15:39:56
 * @modify date 2022-08-09 15:39:56
 * @desc [Create wp_mrm_contact_groups table into database]
 */


namespace Mint\MRM\DataBase\Tables;

require_once MRM_DIR_PATH . "app/Interfaces/Schema.php";


use Mint\MRM\Interfaces\Schema;

class ContactGroupSchema implements Schema {


    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $table_name = 'mrm_contact_groups';


    /**
     * Get the schema of ContactGroup table
     *
     * @return string
     * @since 1.0.0
     */
    public function get_sql()
    {
        global $wpdb;
        $table = $wpdb->prefix . self::$table_name;

        return "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT(20) unsigned NOT NULL auto_increment,
            `title` VARCHAR(255) NOT NULL,
            `type` VARCHAR(192) NOT NULL COMMENT 'tags, lists, segments',
            `slug` VARCHAR(255) NOT NULL,
            `data` longtext, 
            `created_at` TIMESTAMP,
            `updated_at` TIMESTAMP,
           PRIMARY KEY (`id`),
           KEY `type` (`type`)
         ) ;";

    }
}