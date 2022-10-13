<?php

namespace Mint\MRM\DataBase\Tables;

require_once MRM_DIR_PATH . "app/Interfaces/Schema.php";

use Mint\MRM\Interfaces\Schema;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 10:55:03
 * @modify date 2022-08-10 10:55:03
 * @desc [Create wp_mrm_form_meta table into database]
 */

class FormMetaSchema implements Schema{

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $table_name = 'mrm_form_meta';


    /**
     * Get the schema of Form meta table
     *
     * @return string
     * @since 1.0.0
     */
    public function get_sql()
    {
        global $wpdb;
        $table = $wpdb->prefix . self::$table_name;
        $form_table = $wpdb-> prefix . FormSchema::$table_name;

        return "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `form_id` BIGINT UNSIGNED NOT NULL,
            `meta_key` VARCHAR(50) DEFAULT NULL,    
            `meta_value` longtext,
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL,
            FOREIGN KEY (form_id)
            REFERENCES `{$form_table}` (id)
            ON DELETE CASCADE
         ) ";
    }
}