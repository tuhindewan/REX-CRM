<?php

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-10-07 15:39:56
 * @desc [Create wp_mrm_forms table into database]
 */

namespace Mint\MRM\DataBase\Tables;

require_once MRM_DIR_PATH . "app/Interfaces/Schema.php";

use Mint\MRM\Interfaces\Schema;


class FormSchema implements Schema{

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $table_name = 'mrm_forms';


    /**
     * Get the schema of Form table
     *
     * @return string
     * @since 1.0.0
     */
    public function get_sql()
    {
        global $wpdb;
        $table = $wpdb->prefix . self::$table_name;

        return "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
            `title` VARCHAR(255),
            `form_body` longtext,
            `form_position` VARCHAR(255),
            `status` TINYINT(1) UNSIGNED NOT NULL DEFAULT 1,
            `template_id` bigint(20) unsigned NULL,
            `created_by` BIGINT(20),
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL,
            PRIMARY KEY (`id`)
         ) ";
    }
}
