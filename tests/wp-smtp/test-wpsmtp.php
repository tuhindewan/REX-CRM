<?php
/**
 * Class Test_WP_SMTP
 *
 * @package Mrm
 */

class Test_WP_SMTP extends WP_UnitTestCase {

	/**
	 * @desc Instance variable for Mint\MRM\Internal\Admin\WPSmtp class
	 * @var $instance
	 * @since 1.0.0
	 */
	private static $instance;

	/**
	 * @desc Reflection variable for Mint\MRM\Internal\Admin\WPSmtp class
	 * @var $reflector
	 * @since 1.0.0
	 */
	private static $reflector;

	/**
	 * @desc Setup initial dependencies
	 * @return void
	 * @since 1.0.0
	 */
	public function setUp(): void {
		self::$instance  = Mint\MRM\Internal\Admin\WPSmtp::get_instance();
	}

	/**
	 * @desc Function for Mint\MRM\Internal\Admin\WPSmtp::init() function
	 * @return void
	 * @since 1.0.0
	 */
	public function test_class_exists() {
		$this->assertIsObject( self::$instance );
		$this->assertTrue( self::$instance instanceof Mint\MRM\Internal\Admin\WPSmtp );
	}

	/**
	 * @desc Test function for Mint\MRM\Internal\Admin\WPSmtp::init() function
	 * @return void
	 * @since 1.0.0
	 */
	public function test_init() {
		if ( is_object( self::$instance ) && self::$instance instanceof Mint\MRM\Internal\Admin\WPSmtp ) {
			$this->assertTrue( method_exists( self::$instance, 'init' ) );
			self::$instance->init();
			$smtp_configs = $this->readAttribute( self::$instance, 'smtp_configs' );
			$this->assertIsArray( $smtp_configs );
			$smtp_method = $this->readAttribute( self::$instance, 'smtp_method' );
			$this->assertSame( $smtp_method, 'web_server' );
			$smtp_settings = $this->readAttribute( self::$instance, 'smtp_settings' );
			$this->assertIsArray( $smtp_settings );
			$this->assertTrue( isset( $smtp_configs['method'] ) );
			$this->assertTrue( isset( $smtp_configs['settings'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency']['type'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency']['interval'] ) );
		}
	}

	/**
	 * @desc Test function for Mint\MRM\Internal\Admin\WPSmtp::configure_smtp() function
	 * @return void
	 * @since 1.0.0
	 */
	public function test_configure_smtp() {
		if ( is_object( self::$instance ) && self::$instance instanceof Mint\MRM\Internal\Admin\WPSmtp ) {
			$this->assertTrue( method_exists( self::$instance, 'configure_smtp' ) );
			update_option( '_mrm_smtp_settings', [
				'method'   => 'smtp',
				'settings' => [
					'frequency'      => [
						'type'     => 'recommended',
						'interval' => '5'
					],
					'host'           => '',
					'port'           => '',
					'secure'         => '',
					'login'          => '',
					'password'       => '',
					'authentication' => ''
				],
			] );
			self::$instance->init();
			$smtp_configs = $this->readAttribute( self::$instance, 'smtp_configs' );
			$this->assertIsArray( $smtp_configs );
			$smtp_method = $this->readAttribute( self::$instance, 'smtp_method' );
			$this->assertSame( $smtp_method, 'smtp' );
			$smtp_settings = $this->readAttribute( self::$instance, 'smtp_settings' );
			$this->assertIsArray( $smtp_settings );
			$this->assertTrue( isset( $smtp_configs['method'] ) );
			$this->assertTrue( isset( $smtp_configs['settings'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency']['type'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency']['interval'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['host'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['port'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['login'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['password'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['authentication'] ) );
		}
	}

	/**
	 * @desc Test function for Mint\MRM\Internal\Admin\WPSmtp::configure_sendgrid() function
	 * @return void
	 * @since 1.0.0
	 */
	public function test_configure_sendgrid() {
		if ( is_object( self::$instance ) && self::$instance instanceof Mint\MRM\Internal\Admin\WPSmtp ) {
			$this->assertTrue( method_exists( self::$instance, 'configure_sendgrid' ) );
			update_option( '_mrm_smtp_settings', [
				'method'   => 'sendgrid',
				'settings' => [
					'frequency' => [
						'type'     => 'recommended',
						'interval' => '5'
					],
					'api_key'   => ''
				],
			] );
			self::$instance->init();
			$smtp_configs = $this->readAttribute( self::$instance, 'smtp_configs' );
			$this->assertIsArray( $smtp_configs );
			$smtp_method = $this->readAttribute( self::$instance, 'smtp_method' );
			$this->assertSame( $smtp_method, 'sendgrid' );
			$smtp_settings = $this->readAttribute( self::$instance, 'smtp_settings' );
			$this->assertIsArray( $smtp_settings );
			$this->assertTrue( isset( $smtp_configs['method'] ) );
			$this->assertTrue( isset( $smtp_configs['settings'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency']['type'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency']['interval'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['api_key'] ) );
		}
	}

	/**
	 * @desc Test function for Mint\MRM\Internal\Admin\WPSmtp::configure_amazonses() function
	 * @return void
	 * @since 1.0.0
	 */
	public function test_configure_amazonses() {
		if ( is_object( self::$instance ) && self::$instance instanceof Mint\MRM\Internal\Admin\WPSmtp ) {
			$this->assertTrue( method_exists( self::$instance, 'configure_sendgrid' ) );
			update_option( '_mrm_smtp_settings', [
				'method'   => 'amazonses',
				'settings' => [
					'frequency'  => [
						'type'     => 'recommended',
						'interval' => '5'
					],
					'region'     => '',
					'access_key' => '',
					'secret_key' => ''
				],
			] );
			self::$instance->init();
			$smtp_configs = $this->readAttribute( self::$instance, 'smtp_configs' );
			$this->assertIsArray( $smtp_configs );
			$smtp_method = $this->readAttribute( self::$instance, 'smtp_method' );
			$this->assertSame( $smtp_method, 'amazonses' );
			$smtp_settings = $this->readAttribute( self::$instance, 'smtp_settings' );
			$this->assertIsArray( $smtp_settings );
			$this->assertTrue( isset( $smtp_configs['method'] ) );
			$this->assertTrue( isset( $smtp_configs['settings'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency']['type'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['frequency']['interval'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['region'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['access_key'] ) );
			$this->assertTrue( isset( $smtp_configs['settings']['secret_key'] ) );
		}
	}
}
