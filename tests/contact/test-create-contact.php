<?php
/**
 * Class  CreateCreateTest
 *
 * @package Mrm
 */

/**
 * Contact create test case.
 */
class CreateCreateTest extends WP_UnitTestCase {

	 /**
     * Holds the WP REST Server object
     *
     * @var WP_REST_Server
     */
    private $server;

	/**
    * Create a user and a post for our test.
    */
    public function setUp() {
        parent::setUp();

        // Database table create
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';

        global $wpdb;

        $charsetCollate = $wpdb->get_charset_collate();

        $table = $wpdb->prefix . 'mrm_contacts';

        if ($wpdb->get_var("SHOW TABLES LIKE '$table'") != $table) {
            $sql = "CREATE TABLE {$table} (
                `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
                `wp_user_id` BIGINT UNSIGNED NULL,
                `hash` VARCHAR(90) NULL,
                `email` VARCHAR(190) NOT NULL UNIQUE,
                `first_name` VARCHAR(192) NULL,
                `last_name` VARCHAR(192) NULL,
                `phone` VARCHAR(50) NULL,
                `company_name` VARCHAR(192) NULL,
                `contact_owner` BIGINT UNSIGNED NULL,
                `scores` INT UNSIGNED NOT NULL DEFAULT 0,
                `source` VARCHAR(50) NULL,
                `status` VARCHAR(50) NOT NULL DEFAULT 'subscribed' COMMENT 'SUBSCRIBED, UNSUBSCRIBED, PENDING, BOUNCED',
                `stage` VARCHAR(50) DEFAULT 'lead' COMMENT 'LEAD, MQL, SQL, CUSTOMERS',
                `last_activity` TIMESTAMP NULL,
                `date_of_birth` DATE NULL,
                `timezone` VARCHAR(192) NULL,
                `address_line_1` VARCHAR(192) NULL,
                `address_line_2` VARCHAR(192) NULL,
                `postal_code` VARCHAR(192) NULL,
                `city` VARCHAR(192) NULL,
                `state` VARCHAR(192) NULL,
                `country` VARCHAR(192) NULL,
                `created_at` TIMESTAMP NULL,
                `updated_at` TIMESTAMP NULL,
                 INDEX `contact_wp_user_id_index` (`wp_user_id` ASC),
                 INDEX `contact_status_index` (`status` ASC)
             ) $charsetCollate;";

            dbDelta($sql);
        }
 
        // Initiating the REST API.
        global $wp_rest_server;
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
    }


    /**
	 * Empty email address check.
	 */
	public function test_email_mandatory() {
		$request = new \WP_REST_Request( 'POST', '/mrm/v1/contacts');
        $response = $this->server->dispatch( $request );
        $this->assertEquals( 400, $response->get_status() );
	}

	/**
	 * Contact create test.
	 */
	public function test_create_contact() {
        $expected_message = 'Contact has been saved successfully';
		$request = new \WP_REST_Request( 'POST', '/mrm/v1/contacts');
        $request->set_body_params(
            [
                'email' => 'Tuhin@gmail.com'
            ]
        );
        
        $response = $this->server->dispatch( $request );
        
        $this->assertEquals( 200, $response->get_status() );
        $this->assertEquals( $response->data['message'], $expected_message );
	}
}
