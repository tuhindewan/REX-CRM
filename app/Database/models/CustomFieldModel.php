<?php

namespace Mint\MRM\DataBase\Models;

use Mint\MRM\DataBase\Tables\CustomFieldSchema;
use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage Custom Fields related database operations]
 */

class CustomFieldModel{

    use Singleton;

    /**
     * Insert fields information to database
     * 
     * @param $field        Field object 
     * 
     * @return int|bool 
     * @since 1.0.0
     */
    public static function insert( $field )
    {
        global $wpdb;
        $fields_table = $wpdb->prefix . CustomFieldSchema::$table_name;

        try {
            $wpdb->insert( $fields_table, array(
                'title'      => $field->get_title(),
                'slug'       => $field->get_slug(),
                'type'       => $field->get_type(),
                'meta'       => $field->get_meta(),
                'created_at' => current_time('mysql')) 
            );
            return $wpdb->insert_id;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Update fields information to database
     * 
     * @param object    $args         Field object
     * @param int       $id            Field ID
     * @return bool
     * @since 1.0.0
     */
    public static function update( $args, $id )
    {
        global $wpdb;
        $fields_table = $wpdb->prefix . CustomFieldSchema::$table_name;

        $args['updated_at'] = current_time('mysql');
        unset($args['field_id']);

        try {
            $wpdb->update( $fields_table, $args, array( 'id' => $id )
            );
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Run SQL query to get fields from database
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_all()
    {
        global $wpdb;
        $fields_table = $wpdb->prefix . CustomFieldSchema::$table_name;

        // Return field froups for list view
        try {
            $select_query  = $wpdb->prepare( "SELECT * FROM $fields_table ORDER BY id ASC" );
            $query_results = $wpdb->get_results( $select_query );
      
            return array(
                'data' => $query_results
            );
        } catch(\Exception $e) {
            return NULL;
        }
	
    }


    /**
     * Delete a field from the database
     * 
     * @param mixed $id      Field ID
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy( $id )
    {
        global $wpdb;
        $fields_table    =   $wpdb->prefix . CustomFieldSchema::$table_name;

        try {
            $wpdb->delete( $fields_table, ['id' => $id], ["%d"] );
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Run SQL query to get a single field 
     * 
     * @param int $id   Field ID
     * 
     * @return array an array of results if successfull, NULL otherwise
     * @since 1.0.0 
     */
    public static function get( $id ){

        global $wpdb;
        $fields_table = $wpdb->prefix . CustomFieldSchema::$table_name;

        try {
            $select_query   = $wpdb->prepare( "SELECT * FROM $fields_table WHERE id = %d",array( $id ) );
            $select_result  = $wpdb->get_results( $select_query );
            return $select_result;
        } catch(\Exception $e) {
            return false;
        }
    }
    
}