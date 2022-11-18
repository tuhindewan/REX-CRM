<?php

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 15:39:56
 * @modify date 2022-08-09 15:39:56
 * @desc [Create wp_mrm_custom_fields table into database]
 */


namespace Mint\MRM\DataBase\Tables;

require_once MRM_DIR_PATH . 'app/Interfaces/Schema.php';

use Mint\MRM\Interfaces\Schema;


class CustomFieldSchema implements Schema {


	/**
	 * Table name
	 *
	 * @var string
	 * @since 1.0.0
	 */
	public static $table_name = 'mrm_custom_fields';


	/**
	 * Create the table.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function get_sql() {
		global $wpdb;

		$table = $wpdb->prefix . self::$table_name;

		return "CREATE TABLE IF NOT EXISTS {$table} (
                `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
                `title` VARCHAR(255) NOT NULL,
                `slug` VARCHAR(255) NOT NULL,
                `group_id` BIGINT(20) DEFAULT 1,
                `type` VARCHAR(192) NOT NULL COMMENT 'text-input, text-number, text-area, dropdown, radio-button, checkbox date',
                `meta` TEXT NOT NULL,
                `created_at` TIMESTAMP,
                `updated_at` TIMESTAMP
            ) ";
	}
}
