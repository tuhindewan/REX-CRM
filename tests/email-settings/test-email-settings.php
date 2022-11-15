<?php

use Mint\MRM\Admin\API\Controllers\EmailSettingController;
use MRM\Common\MRM_Common;

class EmailSettings extends WP_UnitTestCase {
    /**
     * Holds the WP REST Server object
     *
     * @var WP_REST_Server
     */
    private $server;

    /**
     * MRM_Tag_Controller class object
     * 
     * @var object
     * @since 1.0.0
     */
    protected $controller;

    /**
    * Create a user and a post for our test.
    */
    public function setUp() {
        // Initiating the REST API.
        parent::setUp();

        global $wp_rest_server;
        $this->server = $wp_rest_server = new WP_REST_Server;
        do_action( 'rest_api_init' );
    }

    /**
    * Delete the user and post after the test.
    */
    public function tearDown() {
        parent::tearDown();

        global $wp_rest_server;
        $wp_rest_server = null;
    }
    
    /**
    * Test case to check bad request for email creatiion
    */
    public function test_create_email_settings_bad_request (){
        $this->controller = EmailSettingController::get_instance();

        $bad_request_both_wrong_email = new \WP_REST_Request( 'POST', '/mrm/v1/settings/email');

        $bad_request_both_wrong_email->set_body_params(
            [
                "from_name"        => "sfasdf",
                "from_email"       => "fdaslf",
                "reply_name"       => "fdsafsa",
                "reply_email"      => "fdsaf"
            ]
        );

        $response = $this->controller->create_or_update($bad_request_both_wrong_email);

        $this->assertEquals(0, $response['success'], 'Success code is Passed for Email Validation Bad Request!');
        $this->assertEquals('Enter a valid email address from where to send email', $response['message'], 'Message is Passed for Email Validation Bad Request!');

        $bad_request_reply_email = new \WP_REST_Request( 'POST', '/mrm/v1/settings/email');

        $bad_request_reply_email->set_body_params(
            [
                "from_name"        => "Coderex",
                "from_email"       => "support@coderex.co",
                "reply_name"       => "fdsafsa",
                "reply_email"      => "fdsaf"
            ]
        );

        $response = $this->controller->create_or_update($bad_request_reply_email);

        $this->assertEquals(0, $response['success'], 'Success code is Passed for Email Validation Bad Request!');
        $this->assertEquals('Enter a valid email address where to reply email', $response['message'], 'Message is Passed for Email Validation Bad Request!');
    }

    /**
    * Test case to check good request for email creatiion
    */
    public function test_create_email_settings_good_request (){
        $this->controller = EmailSettingController::get_instance();

        $bad_request = new \WP_REST_Request( 'POST', '/mrm/v1/settings/email');

        $bad_request->set_body_params(
            [
                "from_name"        => "Coderex",
                "from_email"       => "support@coderex.co",
                "reply_name"       => "Google",
                "reply_email"      => "support@google.com"
            ]
        );

        $response = $this->controller->create_or_update($bad_request);

        $this->assertEquals(1, $response['success']);
    }
}