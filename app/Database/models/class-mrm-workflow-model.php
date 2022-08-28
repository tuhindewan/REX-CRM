<?php

namespace MRM\Models;

use Mint\MRM\DataBase\Tables\WorkFlowSchema;
use Mint\Mrm\Internal\Traits\Singleton;
use MRM\DB\Tables\MRM_Workflows_Table;
use MRM\Data\MRM_Workflow;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 1:30:17
 * @modify date 2022-08-17 1:30:17
 * @desc [Handle Workflow Module database related operations]
 */

class MRM_Workflow_Model{


    use Singleton;


    /**
     * Check existing workflow on database
     * 
     * @param mixed $id workflow id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function is_workflow_exist( $id )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . WorkFlowSchema::$table_name;

        $sqlCount = $wpdb->prepare("SELECT COUNT(*) as total FROM {$table_name} WHERE id = %d",array($id));
        $sqlCountData = $wpdb->get_results($sqlCount);
        $sqlCountDataJson = json_decode(json_encode($sqlCountData), true);
        $count = (int) $sqlCountDataJson['0']['total'];
        if( $count ){
            return true;
        }
        return false;
    }


    /**
     * Insert workflow information to database
     * 
     * @param MRM_Workflow $workflow
     * 
     * @return bool|int
     * @since 1.0.0
     */
    public static function insert(MRM_Workflow $workflow)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . WorkFlowSchema::$table_name;

        try {
            $wpdb->insert($table_name, array(
                'title'            =>  $workflow->get_title(),
                'workflow_data'    =>  $workflow->get_workflow_data(),
                'global_state'     =>  $workflow->get_global_state(),
                'status'           =>  $workflow->get_status(),
                'last_step_id'     =>  $workflow->get_last_step_id()
            ));
        } catch(\Exception $e) {
            return false;
        }
        return $wpdb->insert_id;;
    }


     /**
     * SQL query to update a workflow
     * 
     * @param $object       Workflow object
     * @param $workflow_id      Workflow id
     * 
     * @return JSON
     * @since 1.0.0
     */
    public static function update( MRM_Workflow $workflow, $workflow_id){

        global $wpdb;
        $table = $wpdb->prefix . WorkFlowSchema::$table_name;
        
        try {
            $wpdb->update($table, array(
                'title'            =>  $workflow->get_title(),
                'workflow_data'    =>  $workflow->get_workflow_data(),
                'global_state'     =>  $workflow->get_global_state(),
                'status'           =>  $workflow->get_status(),
                'last_step_id'     =>  $workflow->get_last_step_id()),
                array(
                    'id' => $workflow_id
                )
            );
            return true;
        } catch(\Exception $e) {
            return false;
        }
        
    }


    /**
     * Delete a workflow
     * 
     * @param mixed $id workflow id
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy( $id )
    {
        global $wpdb;
        $table_name                     =   $wpdb->prefix . MRM_Workflows_Table::$mrm_table;

        try {
            $wpdb->delete($table_name, array('id' => $id));
        } catch(\Exception $e) {
            return false;
        }

        return true;
    }


    /**
     * Delete multiple workflows
     * 
     * @param array $workflow_ids
     * 
     * @return bool
     * @since 1.0.0
     */
    public static function destroy_all($workflow_ids)
    {
        global $wpdb;
        $table_name                     =   $wpdb->prefix . MRM_Workflows_Table::$mrm_table;

        try {
            $workflow_ids = implode( ',', array_map( 'absint', $workflow_ids ) );

            $wpdb->query( "DELETE FROM $table_name WHERE id IN($workflow_ids)" );
        } catch(\Exception $e) {
            return false;
        }
        return true;
    }


    /**
     * Run SQL query to get or search workflows from database
     *    
     * @param int $offset
     * @param int $limit
     * @param string $search
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_all( $offset = 0, $limit = 10, $search = '' )
    {
        global $wpdb;
        $table_name = $wpdb->prefix . WorkFlowSchema::$table_name;
        $search_terms = null;

        // Search workflows by name
		if ( ! empty( $search ) ) {
            $search_terms = "WHERE title LIKE '%".$search."%'";
		}

        // Prepare sql results for list view
        try {
            $select_query = "SELECT * FROM {$table_name} {$search_terms} ORDER BY id DESC LIMIT {$offset}, {$limit}";

            
            $query_results = $wpdb->get_results( $select_query );
            $results = json_decode(json_encode($query_results), true);

            $count_query = "SELECT COUNT(*) as total FROM {$table_name} {$search_terms}";
            $count_data = $wpdb->get_results($count_query);
            $count_array = json_decode(json_encode($count_data), true);
            
            $count = (int) $count_array['0']['total'];
            $totalPages = ceil(intdiv($count, $limit));
      
            return array(
                'data'=> $results,
                'total_pages' => $totalPages
            );
        } catch(\Exception $e) {
            return NULL;
        }
	
    }


    /**
     * Returns a single group data
     * 
     * @param int $id Workflow
     * 
     * @return array an array of results if successfull, NULL otherwise
     * @since 1.0.0 
     */
    public static function get( $id ){

        global $wpdb;
        $table_name = $wpdb->prefix . WorkFlowSchema::$table_name;

        try {
            $sql = $wpdb->prepare("SELECT * FROM {$table_name} WHERE id = %d",array($id));
            $data = $wpdb->get_results($sql);
            $dataJson = json_decode(json_encode($data));
            return $dataJson;
        } catch(\Exception $e) {
            return false;
        }
    }
    
}