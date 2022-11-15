<?php

use MRM\Common\MRM_Common;

class DoubleOptinSettingTest extends WP_UnitTestCase {
    /**
     * Holds the WP REST Server object
     *
     * @var WP_REST_Server
     */
    private $server;

    private $administrator;

    protected $namespaced_route = 'settings/optin';

	/**
    * mrm_campaigns table create for testing
    */
    public function setUp() {
        parent::setUp();

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';

        global $wpdb;

        $charsetCollate = $wpdb->get_charset_collate();

        $table = $wpdb->prefix . 'options';

        if ($wpdb->get_var("SHOW TABLES LIKE '$table'") != $table) {
            $sql = "CREATE TABLE IF NOT EXISTS {$table} (
                `option_id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
                `option_name` VARCHAR(192) NULL,
                `option_value` LONGTEXT,
                `autoload` VARCHAR(20) DEFAULT 'yes'
             ) $charsetCollate;";

            dbDelta($sql);
        }
 
        // Initiating the REST API.
		/** @var WP_REST_Server $wp_rest_server */
		global $wp_rest_server;
        $this->administrator = $this->factory->user->create(
            array(
                'role' => 'administrator',
            )
        );
        wp_set_current_user( $this->administrator );
		$this->server = $wp_rest_server = new \WP_REST_Server;
		do_action( 'rest_api_init' );
    }


    /**
    * Delete the server after the test.
    */
    public function tearDown() {
        parent::tearDown();

        global $wp_rest_server;
        $wp_rest_server = null;
        $this->server = null;

        wp_set_current_user( [] );
    }

    /**
     * Optin create or update POST request response test
     */
    public function test_create_update_route() {
		$request = new WP_REST_Request( 'POST', '/mrm/v1/settings/optin' );
        $response = $this->server->dispatch( $request );
        $request->set_body_params(
            []
        );
		$this->assertEquals( 200, $response->get_status() );

	}

    /**
     * Optin setting post request api params key check
     */
    public function test_create_or_update( )
    {
        $request = new WP_REST_Request( 'POST', '/mrm/v1/settings/optin' );
        $response = $this->server->dispatch( $request );
        $request->set_body_params(
            [
                "optin" => [
                    "enable"                => true,
                    "email_subject"         => "Double opt-in confirmation email",
                    "email_body"            => "<p>Hi Tuhin,</p>\n<p>This is just an hello</p>",
                    "confirmation_type"     => "message",
                    "confirmation_message"  => "Your subscription to our list has been confirmed."
                ]
            ]
        );

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        // optin key check on api param values
        $this->assertArrayHasKey("optin", $params);
        $setting_value = isset( $params['optin'] ) ? $params['optin'] : [];

        // Insert on wp_options table
        $success = update_option('_mrm_optin_settings',  $setting_value);
        $this->assertTrue($success);
    }


}