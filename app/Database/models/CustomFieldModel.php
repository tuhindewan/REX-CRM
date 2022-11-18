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

class CustomFieldModel {

	use Singleton;

	/**
	 * Insert fields information to database
	 *
	 * @param $field        Field object
	 *
	 * @return int|bool
	 * @since 1.0.0
	 */
	public static function insert( $field ) {
		global $wpdb;
		$fields_table = $wpdb->prefix . CustomFieldSchema::$table_name;

		try {
			$wpdb->insert(
				$fields_table,
				array(
					'title'      => $field->get_title(),
					'slug'       => $field->get_slug(),
					'type'       => $field->get_type(),
					'meta'       => $field->get_meta(),
					'created_at' => current_time( 'mysql' ),
				)
			);
			return $wpdb->insert_id;
		} catch ( \Exception $e ) {
			return false;
		}
	}


	/**
	 * Update fields information to database
	 *
	 * @param object $args         Field object
	 * @param int    $id            Field ID
	 * @return bool
	 * @since 1.0.0
	 */
	public static function update( $field, $id ) {
		global $wpdb;
		$fields_table = $wpdb->prefix . CustomFieldSchema::$table_name;

		try {
			$wpdb->update(
				$fields_table,
				array(
					'title'      => $field->get_title(),
					'slug'       => $field->get_slug(),
					'type'       => $field->get_type(),
					'meta'       => $field->get_meta(),
					'updated_at' => current_time( 'mysql' ),
				),
				array( 'id' => $id )
			);
			return true;
		} catch ( \Exception $e ) {
			return false;
		}
	}


	/**
	 * Run SQL query to get fields from database
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public static function get_all( $offset = 0, $limit = 20, $search = '', $order_by = 'id', $order_type = 'DESC' ) {
		global $wpdb;
		$fields_table = $wpdb->prefix . CustomFieldSchema::$table_name;

		$search_terms = null;
		if ( ! empty( $search ) ) {
			$search       = $wpdb->esc_like( $search );
			$search_terms = "WHERE `title` LIKE '%%$search%%'";
		}
		// Return field froups for list view
		$select_query = $wpdb->prepare( "SELECT * FROM $fields_table {$search_terms} ORDER BY %s %s  LIMIT %d, %d", $order_by, $order_type, $offset, $limit );
		$results      = $wpdb->get_results( $select_query, ARRAY_A );
		return array(
			'data' => $results,
		);
	}




	/**
	 * Delete a field from the database
	 *
	 * @param mixed $id      Field ID
	 *
	 * @return bool
	 * @since 1.0.0
	 */
	public static function destroy( $id ) {
		global $wpdb;
		$fields_table = $wpdb->prefix . CustomFieldSchema::$table_name;

		try {
			$wpdb->delete( $fields_table, array( 'id' => $id ), array( '%d' ) );
			return true;
		} catch ( \Exception $e ) {
			return false;
		}
	}


	/**
	 * Run SQL query to get a single field
	 *
	 * @param int $id   Field ID
	 *
	 * @return object an object of results if successfull, NULL otherwise
	 * @since 1.0.0
	 */
	public static function get( $id ) {
		global $wpdb;
		$fields_table = $wpdb->prefix . CustomFieldSchema::$table_name;

		try {
			$select_query  = $wpdb->prepare( "SELECT * FROM $fields_table WHERE id = %d", array( $id ) );
			$select_result = $wpdb->get_row( $select_query );
			return $select_result;
		} catch ( \Exception $e ) {
			return false;
		}
	}


	/**
	 * Check existing custom fields
	 *
	 * @param mixed $slug
	 *
	 * @return bool
	 * @since 1.0.0
	 */
	public static function is_field_exist( $slug ) {
		global $wpdb;
		$fields_table = $wpdb->prefix . CustomFieldSchema::$table_name;

		$select_query  = $wpdb->prepare( "SELECT * FROM $fields_table WHERE slug = %s", array( $slug ) );
		$select_result = $wpdb->get_results( $select_query );
		if ( $select_result ) {
			return true;
		}
		return false;
	}

}
