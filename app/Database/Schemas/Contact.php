<?php

namespace Mint\MRM\DataBase\Tables;

require_once MRM_DIR_PATH . "app/Interfaces/Schema.php";

use Mint\MRM\Interfaces\Schema;


/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 10:20:03
 * @modify date 2022-08-10 10:20:03
 * @desc [Create wp_mrm_contacts table into database]
 */

class ContactSchema implements Schema {

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $table_name = 'mrm_contacts';


    /**
     * Get the schema of Contact table
     *
     * @return string
     * @since 1.0.0
     */
    public function get_sql()
    {

        global $wpdb;
        $table = $wpdb->prefix . self::$table_name;
        return "CREATE TABLE IF NOT EXISTS {$table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `wp_user_id` BIGINT UNSIGNED NULL,
            `hash` VARCHAR(90) NULL,
            `email` VARCHAR(190) NOT NULL UNIQUE,
            `first_name` VARCHAR(192) NULL,
            `last_name` VARCHAR(192) NULL,
            `scores` INT UNSIGNED NOT NULL DEFAULT 0,
            `source` VARCHAR(50) NULL,
            `status` VARCHAR(50) NOT NULL DEFAULT 'subscribed' COMMENT 'SUBSCRIBED, UNSUBSCRIBED, PENDING',
            `stage` VARCHAR(50) DEFAULT 'lead' COMMENT 'LEAD, MQL, SQL, CUSTOMER',
            `last_activity` TIMESTAMP NULL,
            `created_by` BIGINT(20),
            `created_at` TIMESTAMP NULL,
            `updated_at` TIMESTAMP NULL,
             INDEX `contact_email_index` (`email` ASC),
             INDEX `contact_id_index` (`id` ASC)
         ) ";
    }
}
