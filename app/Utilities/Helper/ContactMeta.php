<?php
namespace Mint\MRM\Utilites\Helper;

use Mint\MRM\DataBase\Tables\ContactMetaSchema;
use Mint\MRM\DataBase\Tables\ContactSchema;

class ContactData {

    public static function get_meta( $contact_id, $meta_key ) {
        global $wpdb;

        $meta_table_name = $wpdb->prefix . ContactMetaSchema::$table_name;

        $sql = "SELECT `meta_value` FROM {$meta_table_name} WHERE `contact_id` = %d AND `meta_key` = %s";
        $sql = $wpdb->prepare( $sql, $contact_id, $meta_key );

        return $wpdb->get_var( $sql );
    }

    public static function get_info( $contact_id, $key ) {
        global $wpdb;

        $table_name = $wpdb->prefix . ContactSchema::$table_name;

        $sql = "SELECT `{$key}` FROM {$table_name} WHERE `id` = %d";
        $sql = $wpdb->prepare( $sql, $contact_id );

        return $wpdb->get_var( $sql );
    }
}