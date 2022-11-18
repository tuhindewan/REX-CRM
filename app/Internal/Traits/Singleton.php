<?php
namespace Mint\Mrm\Internal\Traits;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:19:34
 * @modify date 2022-08-09 11:19:34
 * @desc [Trait to follow Singleton design pattern]
 */

trait Singleton {
	/**
	 * Singleton Instance
	 *
	 * @var Singleton
	 */
	private static $instance;

	/**
	 * Private Constructor
	 *
	 * We can't use the constructor to create an instance of the class
	 *
	 * @return void
	 */
	private function __construct() {
		// Don't do anything, we don't want to be initialized
	}

	/**
	 * Get the singleton instance
	 *
	 * @return Singleton
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Cloning is forbidden.
	 *
	 * @since 2.1
	 */
	public function __clone() {
		wc_doing_it_wrong( __FUNCTION__, __( 'Cloning is forbidden.', 'woocommerce' ), '2.1' );
	}

	/**
	 * Unserializing instances of this class is forbidden.
	 *
	 * @since 2.1
	 */
	public function __wakeup() {
		wc_doing_it_wrong( __FUNCTION__, __( 'Unserializing instances of this class is forbidden.', 'woocommerce' ), '2.1' );
	}

	/**
	 * Auto-load in-accessible properties on demand.
	 *
	 * @param mixed $key Key name.
	 * @return mixed
	 */
	public function __get( $key ) {
		if ( in_array( $key, array( 'payment_gateways', 'shipping', 'mailer', 'checkout' ), true ) ) {
			return $this->$key();
		}
	}
}
