<?php

namespace MRM\Models\Tags;

use Exception;
use MRM\Traits\Singleton;
use MRM\DB\Tables\MRM_Contact_Groups_Table;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle List Module related API callbacks]
 */

class MRM_Tag_Model {

    use Singleton;

   
    /**
     * SQL query to create a new tag
     * 
     * @param object
     * @return void
     * @since 1.0.0
     */
    public function insert_tag($body){
        global $wpdb;
        
        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $now = date('Y-m-d H:i:s');

        $data  = array(
            'title'       => $body['title'],
            'type'        => 1,
            'data'        => $body['data'],
            'created_at'  => $body['created_at'],
            'updated_at'  => $now
        );
        try {
            $wpdb->insert($table,$data);
        } catch(Exception $e) {
            error_log(print_r($e, 1));
        }

        return $data;
    }


    /**
     * SQL query to update a tag
     * 
     * @param int, object
     * @return JSON
     * @since 1.0.0
     */
    public function update_tag($id, $body){
        global $wpdb;

        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;
        $now = date('Y-m-d H:i:s');
        
        $data  = array(
            'title'       => $body['title'],
            'type'        => 1,
            'data'        => $body['data'],
            'created_at'  => $body['created_at'],
            'updated_at'  => $now
        );
        $where = array(
            'id'     =>  $id
        );
        $wpdb->update( $table , $data, $where );
    }

    /**
     * SQL query to delete a tag
     * 
     * @param int, object
     * @return JSON
     * @since 1.0.0
     */
    public function delete_tag($id, $body){
        global $wpdb;

        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        $wpdb->delete( $table, array( 'id' => $id ) );
    }

    /**
     * SQL query to get all tags with pagination
     * 
     * @param object
     * @return JSON
     * @since 1.0.0
     */
    public function get_all_tags($request){
        global $wpdb;
        $items_per_page = $request['items_per_page'];
        $page = isset( $_GET['cpage'] ) ? abs( (int) $_GET['cpage'] ) : 1;
        $offset = ( $page * $items_per_page ) - $items_per_page;

        $table = $wpdb->prefix . MRM_Contact_Groups_Table::$mrm_table;

        $query = 'SELECT * FROM '.$table;

        $total_query = "SELECT COUNT(1) FROM (${query}) AS combined_table";
        $total = $wpdb->get_var( $total_query );

        $results = $wpdb->get_results( $query.' ORDER BY id DESC LIMIT '. $offset.', '. $items_per_page, OBJECT );


        paginate_links( array(
            'base' => add_query_arg( 'cpage', '%#%' ),
            'format' => '',
            'prev_text' => __('&laquo;'),
            'next_text' => __('&raquo;'),
            'total' => ceil($total / $items_per_page),
            'current' => $page
        ));

        return $results;
    }

}