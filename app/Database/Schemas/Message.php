<?php

namespace Mint\MRM\DataBase\Tables;

require_once MRM_DIR_PATH . "app/Interfaces/Schema.php";

use Mint\MRM\Interfaces\Schema;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 11:55:03
 * @modify date 2022-08-10 11:55:03
 * @desc [Create wp_mrm_messages table into database]
 */

class MessageSchema implements Schema{


    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $table_name = 'mrm_messages';



    /**
     * Get the schema of Messages table
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
                `interaction_id` BIGINT UNSIGNED NULL,
                `ineraction_type` VARCHAR(50) NULL DEFAULT 'campaign',
                `message_type` VARCHAR(50) NULL DEFAULT 'email' COMMENT 'For future messaging process',
                `contact_id` BIGINT UNSIGNED NULL COMMENT 'Set NULL on contact delete',
                `sender_id` BIGINT(10) UNSIGNED NOT NULL DEFAULT 1,
                `email_address` VARCHAR(192) NOT NULL,
                `email_subject` VARCHAR(192) NULL,
                `email_preview_text` VARCHAR(192) NULL,
                `email_body` LONGTEXT NULL,
                `email_headers` TEXT NULL,
                `first_open` TIMESTAMP DEFAULT NULL,
                `first_click` TIMESTAMP DEFAULT NULL,
                `click_count` INT NULL,
                `status` VARCHAR(50) NOT NULL DEFAULT 'draft' COMMENT 'SENT, SCHEDULED, PENDING, BOUNCED, FAILED',
                `scheduled_at` TIMESTAMP NULL,
                `created_at` TIMESTAMP NULL,
                `updated_at` TIMESTAMP NULL,
                INDEX `interaction_id_index` (`interaction_id` DESC),
                INDEX `contact_id_index` (`contact_id` DESC)
             ) ";
    }
}
