<?php

namespace MRM\Models\Tags;

use MRM\Traits\Singleton;

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
     * @return JSON
     * @since 1.0.0
     */
    public function insert_tag($request){
        global $wpdb;
        
        $table = $wpdb->prefix.'tags';
        $data = array(
            'id'          => $request->id,
            'title'       => $request->title,
            'slug'        => $request->slug
        );
        $format = array(
            '%d',
            '%s',
            '%s'
        );
        $wpdb->insert($table,$data,$format);
    }


    /**
     * SQL query to update a tag
     * 
     * @param object
     * @return JSON
     * @since 1.0.0
     */
    

}