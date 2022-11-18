<?php

namespace Mint\MRM\DataBase;

use Mint\Mrm\Internal\Traits\Singleton;

class Upgrade {

	use Singleton;


	private $version = null;


	/**
	 * Check if this is a new installation for MRM plugin,
	 * or upgrade the existing one or do nothing if versions are up to date
	 *
	 * @since 1.0.0
	 */
	public function maybe_upgrade() {
		if ( $this->requires_install() ) {

			// Fresh install
			$this->install();

			if ( ! get_option( 'mrm_version' ) ) {
				update_option( 'mrm_pending_installation', true );
			}
		}
	}


	/**
	 * Fresh install of MRM
	 *
	 * @since 1.0.0
	 */
	public function install() {
		$this->flush_versions();

		update_option( 'mrm_db_version', MRM_VERSION, false );
		update_option( 'mrm_version', MRM_VERSION, false );

		// Installing schema
		$this->upgrade_schema();

		/**
		 * Fires after MRM is fully installed
		 *
		 * @param int MRM_VERSION new version
		 * @since 1.0.0
		 */
		do_action( 'mrm_post_install', MRM_VERSION );
	}


	/**
	 * Sets up the tables for MRM
	 *
	 * @since 1.0.0
	 */
	public function upgrade_schema() {
		require_once ABSPATH . '/wp-admin/includes/upgrade.php';
		global $wpdb;
		$schema          = $this->get_db_schema();
		$charset_collate = $wpdb->get_charset_collate();

		foreach ( $schema as $table_name => $table_class ) {
			$table_class_name = 'Mint\\MRM\\DataBase\\Tables\\' . $table_class;
			$table            = new $table_class_name();
			$sql              = $table->get_sql() . $charset_collate;
			dbDelta( $sql );
		}
	}


	/**
	 * Get MRM DB schema
	 *
	 * @return mixed|void
	 * @since 1.0.0
	 */
	public function get_db_schema() {
		require_once MRM_DIR_PATH . 'app/Database/Model.php';
		return Model::get_tables();
	}


	/**
	 * Return true if MRM needs to be install
	 *
	 * @return bool
	 * @since 1.0.0
	 */
	private function requires_install() {
		return true;
		$versions = $this->get_versions();
		return mmempty( 'current_version', $versions );
	}


	/**
	 * Returns the current version of the codebase
	 *
	 * @return array|mixed
	 * @since 1.0.0
	 */
	private function get_versions() {
		if ( ! empty( $this->versions ) ) {
			return $this->versions;
		}

		$previous_db_version = get_option( 'mrm_previous_db_version' );

		require_once MRM_DIR_PATH . 'app/Database/Model.php';
		$this->versions = array(
			'version'             => MRM_VERSION,
			'current_version'     => get_option( 'mrm_version' ),
			'current_db_version'  => Model::get_database_version(),
			'previous_db_version' => empty( $previous_db_version ) ? '0' : $previous_db_version,
		);

		return $this->versions;
	}


	/**
	 * Flushed cached version
	 *
	 * @since 1.0.0
	 */
	public function flush_versions() {
		$this->versions = null;
		wp_cache_delete( 'mrm_db_version' );
		wp_cache_delete( 'mrm_version' );
	}
}
