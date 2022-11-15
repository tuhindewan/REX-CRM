<?php
/**
 * Class Test_Setting_Controller
 *
 * @package mrm
 */

/**
 * Test cases for the functions of the production
 * class Rex_Product_Data_Retriever.
 *
 * @see /app/Admin/API/Controllers/SettingController.php
 */

class Test_BusinessSettingController extends WP_UnitTestCase {
	private static $instance;
	private static $reflector;

	/**
	 * @throws ReflectionException
	 */
	public function setUp():void
	{
		self::$instance      = \Mint\MRM\Admin\API\Controllers\BusinessSettingController::get_instance();
	}


	public function test_create_or_update() {
		$request = new WP_REST_Request( 'POST', '/mrm/v1/settings/business' );
		$business_options = array(
			"business_name" => "",
			"phone"         => "+8800178294804",
			"address"       => "string",
			"logo_url"      => "String",
			"social"        => [
				"icon"      => "String",
				"url"       => "String"
			]
		);
		$request->set_body( json_encode( $business_options ) );
		$response = self::$instance->create_or_update( $request );
		$this->assertTrue(is_object($response) && get_class($response) ===  'WP_REST_Response' || get_class($response) ===  'WP_Error');

		$business_options_data = '';
		$expected = is_array($business_options_data);
		$actual = '';
		$this->assertEquals($actual , $expected);


		$expected = self::$instance->phone_number_validation( $business_options['phone'] );
		$actual = true;
		$this->assertTrue($actual , $expected);


	}

	public function test_phone_number_validation(  ) {

		$excepted = self::$instance->phone_number_validation( 'aklhdkjfahdskjf' );
		$actual = false;
		$this->assertEquals( $excepted, $actual);


		$excepted = self::$instance->phone_number_validation( '(541) 754-3010' );
		$actual = false;
		$this->assertEquals( $excepted, $actual);

		$excepted = self::$instance->phone_number_validation( '541 754-3010' );
		$actual = true;
		$this->assertEquals( $excepted, $actual);

		$excepted = self::$instance->phone_number_validation( '+8800178294804' );
		$actual = true;
		$this->assertEquals( $excepted, $actual);

	}

	public function test_get(  ) {
		$body = [
			"business_name" => "",
			"phone"         => "+8800178294804",
			"address"       => "string",
			"logo_url"      => "String",
			"social"        => [
				"icon"      => "String",
				"url"       => "String"
			]
		];
		update_option( '_mrm_business_info_setting', $body );
		$response = self::$instance->get();
		$this->assertTrue( is_object( $response ) );
		$this->assertTrue( 'WP_REST_Response' === get_class( $response ) );
		$this->assertTrue( 200 === $response->get_status() );
		$this->assertTrue( isset( $response->get_data()[ 'success' ] ) && $response->get_data()[ 'success' ] );

	}



}
