<?php
namespace Mint\MRM\Utilites\Helper;

use Mint\MRM\DataBase\Tables\ContactMetaSchema;
use Mint\MRM\DataBase\Tables\ContactSchema;

class ContactData {

	/**
	 * @desc Get contact meta value from contact meta table
	 * @param $contact_id
	 * @param $meta_key
	 * @return string|null
	 * @since 1.0.0
	 */
	public static function get_meta( $contact_id, $meta_key ) {
		global $wpdb;

		$meta_table_name = $wpdb->prefix . ContactMetaSchema::$table_name;

		$sql = "SELECT `meta_value` FROM {$meta_table_name} WHERE `contact_id` = %d AND `meta_key` = %s";
		$sql = $wpdb->prepare( $sql, $contact_id, $meta_key );

		return $wpdb->get_var( $sql );
	}

	/**
	 * @desc Get contact info from contact table
	 * @param $contact_id
	 * @param $key
	 * @return string|null
	 * @since 1.0.0
	 */
	public static function get_info( $contact_id, $key ) {
		global $wpdb;

		$table_name = $wpdb->prefix . ContactSchema::$table_name;

		$sql = "SELECT `{$key}` FROM {$table_name} WHERE `id` = %d";
		$sql = $wpdb->prepare( $sql, $contact_id );

		return $wpdb->get_var( $sql );
	}
}
