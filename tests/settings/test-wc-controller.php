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
class Test_WC_Controller extends WP_UnitTestCase {
    private static $instance;
    private static $reflector;

    /**
     * @throws ReflectionException
     */
    public function setUp(): void {
        self::$instance = \Mint\MRM\Admin\API\Controllers\WCSettingController::get_instance();
    }

    /**
     * @desc Test case for create_or_update function
     * in WCSettingController class
     * @test
     * @return void
     * @since 1.0.0
     */
    public function create_or_update() {
        $request = new WP_REST_Request( 'POST', '/mrm/v1/wc/' );
        $body = [
            'enable'         => false,
            'checkbox_label' => 'Please put a checkbox label.',
            'lists'          => [],
            'tags'           => [],
            'double_optin'   => true
        ];
        $request->set_body( json_encode( $body ) );
        $response = self::$instance->create_or_update( $request );
        $this->assertTrue( 200 === $response->get_status() || 400 === $response->get_status() );
    }

    /**
     * @desc Test case for get() function
     * in WCSettingController class
     * @test
     * @return void
     * @since 1.0.0
     */
    public function get() {
        $body = [
            'enable'         => false,
            'checkbox_label' => 'Please put a checkbox label.',
            'lists'          => [],
            'tags'           => [],
            'double_optin'   => true
        ];
        update_option( '_mrm_woocommerce_settings', $body );
        $response = self::$instance->get();
        $this->assertTrue( 200 === $response->get_status() );
    }

}