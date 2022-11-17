<?php
/**
 * Class Test_WC_Controller
 *
 * @package mrm
 */

/**
 * Test cases for the functions of the production
 * class Rex_Product_Data_Retriever.
 *
 * @see /app/Admin/API/Controllers/SMTPSettingController.php
 */
class Test_SMTP_Controller extends WP_UnitTestCase {
	private static $instance;

	/**
	 * @desc Setup initial dependencies
	 * @return void
	 * @since 1.0.0
	 */
	public function setUp(): void {
		self::$instance = \Mint\MRM\Admin\API\Controllers\SMTPSettingController::get_instance();
	}

	/**
	 * @desc Test case for create_or_update() function
	 * in GeneralSettingController class
	 * @test
	 * @return void
	 * @since 1.0.0
	 */
	public function create_or_update() {
		$request = new WP_REST_Request( 'POST', '/mrm/v1/smtp/' );
		$body = [
			'method'   => 'smtp',
			'settings' => [
				'host'     => '',
				'port'     => '',
				'login'    => '',
				'password' => '',
			],
		];
		$request->set_body( json_encode( $body ) );

		$this->assertTrue( method_exists( self::$instance, 'create_or_update' ) );
		$response = self::$instance->create_or_update( $request );

		$this->assertTrue( is_object( $response ) );
		$this->assertTrue( 'WP_REST_Response' === get_class( $response ) || 'WP_Error' === get_class( $response ) );

		if( 'WP_REST_Response' === get_class( $response ) ) {
			$this->assertTrue( 200 === $response->get_status() );
			$this->assertTrue( isset( $response->get_data()[ 'success' ] ) );
			$this->assertTrue( isset( $response->get_data()[ 'message' ] ) );
			$this->assertTrue( 'SMTP settings have been successfully saved.' === $response->get_data()[ 'message' ] || 'No changes have been made.' === $response->get_data()[ 'message' ] );
		}
		elseif( 'WP_Error' === get_class( $response ) ) {
			$this->assertTrue( 400 === $response->get_error_code() );
		}
	}

	/**
	 * @desc Test case for get() function
	 * in GeneralSettingController class
	 * @test
	 * @return void
	 * @since 1.0.0
	 */
	public function get() {
		$request = new WP_REST_Request( 'GET', '/mrm/v1/smtp/' );
		$this->assertTrue( method_exists( self::$instance, 'get' ) );
		$response = self::$instance->get( $request );
		$data = $response->get_data();

		$this->assertTrue( is_object( $response ) );
		$this->assertTrue( 'WP_REST_Response' === get_class( $response ) );
		$this->assertTrue( 200 === $response->get_status() );
		$this->assertTrue( isset( $data[ 'method' ] ) );
		$this->assertTrue( isset( $data[ 'settings' ] ) );
		$this->assertTrue( isset( $data[ 'settings' ][ 'host' ] ) );
		$this->assertTrue( isset( $data[ 'settings' ][ 'port' ] ) );
		$this->assertTrue( isset( $data[ 'settings' ][ 'login' ] ) );
		$this->assertTrue( isset( $data[ 'settings' ][ 'password' ] ) );
		$this->assertTrue( isset( $data[ 'success' ] ) );
	}
}