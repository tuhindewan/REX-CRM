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
 * @see /app/Admin/API/Controllers/GeneralSettingController.php
 */
class Test_General_Controller extends WP_UnitTestCase {
    private static $instance;

    /**
     * @desc Setup initial dependencies
     * @return void
     * @since 1.0.0
     */
    public function setUp(): void {
        self::$instance = \Mint\MRM\Admin\API\Controllers\GeneralSettingController::get_instance();
    }

    /**
     * @desc Test case for create_or_update() function
     * in GeneralSettingController class
     * @test
     * @return void
     * @since 1.0.0
     */
    public function create_or_update() {
        $request = new WP_REST_Request( 'POST', '/mrm/v1/general/' );
        $body = [
            'unsubscriber_settings' => [
                'confirmation_type'    => 'message',
                'page_id'              => 5,
                'url'                  => 'url',
                'confirmation_message' => 'String',
            ],
            'preference' => [],
            'user_signup' => [],
            'comment_form_subscription' => []
        ];
        $request->set_body( json_encode( $body ) );
        $response = self::$instance->create_or_update( $request );

        $this->assertTrue( is_object( $response ) );
        $this->assertTrue( 'WP_REST_Response' === get_class( $response ) || 'WP_Error' === get_class( $response ) );

        if( 'WP_REST_Response' === get_class( $response ) ) {
            $this->assertTrue( 200 === $response->get_status() );
            $this->assertTrue( isset( $response->get_data()[ 'success' ] ) && $response->get_data()[ 'success' ] );
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
        $response = self::$instance->get();
        $data = $response->get_data();

        $this->assertTrue( is_object( $response ) );
        $this->assertTrue( 'WP_REST_Response' === get_class( $response ) );
        $this->assertTrue( 200 === $response->get_status() );
        $this->assertTrue( isset( $data[ 'unsubscriber_settings' ] ) );
        $this->assertTrue( isset( $data[ 'unsubscriber_settings' ][ 'confirmation_type' ] ) );
        $this->assertTrue( isset( $data[ 'unsubscriber_settings' ][ 'page_id' ] ) );
        $this->assertTrue( isset( $data[ 'unsubscriber_settings' ][ 'url' ] ) );
        $this->assertTrue( isset( $data[ 'unsubscriber_settings' ][ 'confirmation_message' ] ) );
        $this->assertTrue( isset( $data[ 'preference' ] ) );
        $this->assertTrue( isset( $data[ 'user_signup' ] ) );
        $this->assertTrue( isset( $data[ 'comment_form_subscription' ] ) );
        $this->assertTrue( isset( $data[ 'success' ] ) && $data[ 'success' ] );
    }
}