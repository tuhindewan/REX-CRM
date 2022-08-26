<?php

namespace MRM\Email;
use MRM\DB\Tables\MRM_Contacts_Table;
use MRM\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Class to Send an Email]
 */
class MRM_Send_Email{

    use Singleton;

    public function send_email(\WP_REST_Request $request){

        // Get values from API
        $query_params   = $request->get_query_params();
        $request_params = $request->get_params();
        $params         = array_replace( $query_params, $request_params );



        global $wpdb;

        $table_name = $wpdb->prefix . MRM_Contacts_Table::$mrm_table;

        try {
            $sql = $wpdb->prepare( "SELECT `email` FROM {$table_name} WHERE id = %d", array($params['contact_id']));
            $data = $wpdb->get_results( $sql );
            $dataJson = json_decode(json_encode( $data , true));

            $to = $dataJson[0]->email;

            wp_mail($to, "Test Subject", "Test Body");

        }catch (\Exception $e){
        }
    }

}