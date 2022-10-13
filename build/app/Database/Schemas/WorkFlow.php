<?php

namespace Mint\MRM\DataBase\Tables;

require_once MRM_DIR_PATH . "app/Interfaces/Schema.php";

use Mint\MRM\Interfaces\Schema;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 11:55:03
 * @modify date 2022-08-17 11:55:03
 * @desc [Create wp_mrm_contact_group_pivot table into database]
 */

class WorkFlowSchema implements Schema{

    /**
     * Table name
     * 
     * @var string
     * @since 1.0.0
     */
    public static $table_name = 'mrm_workflows';



    /**
     * Get the schema of Workflow table
     *
     * @return string
     * @since 1.0.0
     */
    public function get_sql()
    {
        global $wpdb;
        $table = $wpdb->prefix . self::$table_name;

        return "CREATE TABLE {$table} (
                `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
                `title` VARCHAR(255),
                `workflow_data` longtext,
                `global_state` longtext,
                `status` TINYINT(1) UNSIGNED NOT NULL DEFAULT 1,
                `last_step_id` VARCHAR(255) NOT NULL,
                PRIMARY KEY (`id`)
             ) ";
    }
}
