<?php

namespace MRM\Models;

use MRM\Data\MRM_Segment;
use MRM\Traits\Singleton;
use MRM\DB\Tables\MRM_Contact_Groups_Table;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module database related operations]
 */

class MRM_Segment_Model{


    use Singleton;


    /**
     * Insert segment information to database
     * 
     * @param MRM_Segment $segment
     * 
     * @return bool
     * @since 1.0.0
     */
    public function insert(MRM_Segment $segment)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->insert($table_name, array(
                'title' => $segment->get_title(),
                'type' => 3,
                'data'  => $segment->get_data(),
                'created_at' => current_time('mysql')));
        } catch(\Exception $e) {
            return false;
        }
        return true;
    }


    /**
     * Update segment information to database
     * 
     * @param MRM_Segment $segment
     * @param $id 
     * 
     * @return bool
     * @since 1.0.0
     */
    public function update(MRM_Segment $segment, $id)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        try {
            $wpdb->update($table_name, array(
                'title' => $segment->get_title(),
                'type' => 3,
                'data'  => $segment->get_data(),
                'updated_at' => current_time('mysql')), array(
                  'id' => $id
                ));
        } catch(\Exception $e) {
            return false;
        }
        return true;
    }
}