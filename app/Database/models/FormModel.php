<?php

namespace Mint\MRM\DataBase\Models;

use Exception;
use Mint\MRM\DataBase\Tables\FormSchema;
use Mint\MRM\DataBase\Tables\FormMetaSchema;
use Mint\MRM\DataStores\FormData;
use MRM\Common\MRM_Common;
use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-10-07 11:03:17
 * @modify date 2022-10-07 11:03:17
 * @desc [Manage contact form related databse operation]
 */

class FormModel {

    use Singleton;

    /**
     * Check existing form on database
     * 
     * @param mixed $id Form id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_form_exist( $id )
    {
        global $wpdb;
        $form_table = $wpdb->prefix . FormSchema::$table_name;

        $select_query = $wpdb->prepare("SELECT * FROM $form_table WHERE id = %d", array( $id ) );
        $results = $wpdb->get_results($select_query);

        if( $results ){
            return true;
        }
        return false;
    }

    /**
     * SQL query to create a new form
     * 
     * @param $form         FormData object
     * @return void
     * @since 1.0.0
     */
    public static function insert( FormData $form ){
        
        global $wpdb;
        $form_table = $wpdb->prefix . FormSchema::$table_name;

        try {
            $wpdb->insert($form_table, array(
                'title'         => $form->get_title(),
                'form_body'     => $form->get_form_body(),
                'form_position' => $form->get_form_position(),
                'status'        => $form->get_status(),
                'group_ids'     => $form->get_group_ids(),
                'created_by'    => $form->get_created_by(),
                'template_id'   => $form->get_template_id(),
                'created_at'    => current_time('mysql')
                )
            );

            $insert_id = !empty( $wpdb->insert_id ) ? $wpdb->insert_id : '';  

            if( !empty( $form->get_meta_fields() && !empty($insert_id))){
                $meta_fields['meta_fields'] = $form->get_meta_fields();
                self::update_meta_fields( $insert_id, $meta_fields );
            }
            
            return true;
        } catch(Exception $e) {
            return false;
        }
    }


    /**
     * SQL query to update a form
     * 
     * @param $object       Form object
     * @param $form_id      Form id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function update( FormData $form, $form_id ){

        global $wpdb;
        $form_table = $wpdb->prefix . FormSchema::$table_name;
        if( !empty( $args['meta_fields'] )){
            self::update_meta_fields($form_id, $args);
        }
        
        $args['updated_at'] = current_time('mysql');
        unset($args['meta_fields']);
        unset($args['form_id']);
        unset($args['created_time']);

        try {
            $wpdb->update( 
                $form_table, 
                $args, 
                array( 'ID' => $form_id )
            );
        }catch(\Exception $e){
            return false;
        }
        return true;
        
    }

    /**
     * Delete a form from the database
     * 
     * @param mixed $id Form id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy( $id )
    {
        global $wpdb;
        $form_table         = $wpdb->prefix . FormSchema::$table_name;
        $form_meta_table    = $wpdb->prefix .FormMetaSchema::$table_name;


        if (!self::is_form_exist($id)){
            return false;
        }

        try {
            $wpdb->delete($form_table, array('id' => $id) );
            $wpdb->delete($form_meta_table,array('form_id' => $id));
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Delete multiple forms
     * 
     * @param array $form_ids form id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy_all($form_ids)
    {
        global $wpdb;
        $form_table                 =   $wpdb->prefix . FormSchema::$table_name;
        $form_meta_table            =   $wpdb->prefix . FormMetaSchema::$table_name;
        if (is_array($form_ids) && count($form_ids) > 0)
        {
            try {
                $forms_ids = implode( ',', array_map( 'intval', $form_ids ) );

                $wpdb->query( "DELETE FROM $form_table WHERE id IN($forms_ids)" );
                $wpdb->query( "DELETE FROM $form_meta_table WHERE form_id IN($forms_ids)" );
                return true;
            } catch(\Exception $e) {
                return false;
            }
        }
        return false;
    }


    /**
     * Run SQL query to get or search forms from database
     * 
     * @param int $offset
     * @param int $limit
     * @param string $search
     * @param array $filters
     * @return array
     * @since 1.0.0
     */
    public static function get_all( $offset = 0, $limit = 10, $search = '' , $order_by = 'id', $order_type = 'DESC')
    {
        global $wpdb;
        $form_table = $wpdb->prefix . FormSchema::$table_name;
        $search_terms = null;

        // Search form by title
		if ( ! empty( $search ) ) {
            $search = $wpdb->esc_like($search);
            $search_terms = "WHERE title LIKE '%%$search%%'";
		}
        
        // Prepare sql results for list view
        try {
            
            // Return forms in list view
            $select_query = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $form_table {$search_terms} ORDER BY $order_by $order_type LIMIT %d, %d", array( $offset, $limit ) ), ARRAY_A );
            $count_query   = $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) as total FROM $form_table", array(  ) ) );
            
            $count = (int) $count_query;
            $total_pages = ceil($count / $limit);

            foreach( $select_query as $query_result ){
                $q_id = isset($query_result['id']) ? $query_result['id'] : "";
                $new_meta = self::get_meta( $q_id );
                $results[] = array_merge($query_result, $new_meta);
            }


            return array(
                'data'        => $results,
                'total_pages' => $total_pages,
                'count'       => $count
            );
        } catch(\Exception $e) {
            return NULL;
        }
    }


    /**
     * Run SQL query to get or search forms id and title only
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_all_id_title( )
    {
        global $wpdb;
        $form_table = $wpdb->prefix . FormSchema::$table_name;


        // Prepare sql results for list view
        try {        
            // Return forms for a contact in list view
            $select_query = $wpdb->get_results( $wpdb->prepare( "SELECT `id`,`title` FROM $form_table ORDER BY id DESC", array( ) ), ARRAY_A );

            return array(
                'data'        => $select_query
            );
        } catch(\Exception $e) {
            return NULL;
        }
	
    }

    /**
     * Run SQL Query to get a single form information
     * 
     * @param mixed $id Form ID
     * 
     * @return object
     * @since 1.0.0
     */
    public static function get( $id )
    {
        global $wpdb;
        $form_table = $wpdb->prefix . FormSchema::$table_name;

        try {
            $form_query     = $wpdb->prepare("SELECT * FROM $form_table WHERE id = %d",array( $id ));
            $form_result   = json_decode(json_encode($wpdb->get_results($form_query)), true);
            
            $new_meta = self::get_meta( $id );
            
            return array_merge($form_result[0], $new_meta);
        
        } catch(\Exception $e) {
            return false;
        }
    }

    /**
     * Update a form meta information
     * 
     * @param mixed $form_id        Form ID
     * @param mixed $fields         Entity and value to update
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function update_meta_fields( $form_id, $args )
    {
        global $wpdb;
        $form_meta_table = $wpdb->prefix . FormMetaSchema::$table_name;

        if (isset($args['meta_fields']))
        {
            foreach( $args['meta_fields'] as $key => $value ){
                if( self::is_form_meta_exist( $form_id, $key ) ){
                    $wpdb->update( $form_meta_table, array(
                        'meta_value'    => $value
                    ), array( 'meta_key' => $key , 'form_id' => $form_id ));
                }else{
                    $wpdb->insert( $form_meta_table, array(
                        'form_id'       => $form_id,
                        'meta_key'      => $key,
                        'meta_value'    => $value
                    ));
                    
                }
            
            }
        }
    }


    /**
     * Returns form meta data
     * 
     * @param int $id   Form ID
     * @return array
     * @since 1.0.0
     */
    public static function get_meta( $id )
    {
        global $wpdb;
        $forms_meta_table = $wpdb->prefix . FormMetaSchema::$table_name;

        $meta_query         = $wpdb->prepare("SELECT meta_key, meta_value FROM $forms_meta_table  WHERE form_id = %d",array( $id ));
        $meta_results       = json_decode(json_encode($wpdb->get_results($meta_query)), true);

        $new_meta['meta_fields'] = [];
        foreach($meta_results as $result){
            $new_meta['meta_fields'][$result['meta_key']] = $result['meta_value'];
        }

        return $new_meta;
    }


    /**
     * Check existing form meta
     * 
     * @param int $form_id 
     * @param string $meta_key 
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_form_meta_exist( $form_id, $key )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . FormMetaSchema::$table_name;

        try {
            $select_query = $wpdb->prepare("SELECT * FROM $table_name WHERE form_id = %d AND meta_key=%s", array( $form_id, $key ));
            $results = $wpdb->get_results($select_query);
            if( !empty($results) ){
                return true;
            }
        } catch (\Throwable $th) {
            return false;

        }
        
    }


    /**
     * Check existing from meta key
     * 
     * @param int $form_id
     * @param string $meta_key 
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_form_meta_key_exist( $form_id, $meta_key )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . FormMetaSchema::$table_name;

        try {
            $select_query = $wpdb->prepare("SELECT * FROM $table_name WHERE form_id = %d AND meta_key=%s", array( $form_od, $meta_key ));
            $results = $wpdb->get_results($select_query);
            if( !empty($results) ){
                return true;
            }
        } catch (\Throwable $th) {
            return false;

        }
        
    }
}