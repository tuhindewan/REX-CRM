<?php
/**
 * Class  CustomFieldsControllerTest
 *
 * @package Mrm
 */

use MRM\Common\MRM_Common;

/**
 * Message controller test case.
 */
class CustomFieldsControllerTest extends WP_UnitTestCase {

	 /**
     * Holds the WP REST Server object
     *
     * @var WP_REST_Server
     */
    private $server;

	/**
    * mrm_messages table create for testing
    */
    public function setUp() {
        parent::setUp();

        // Database table create
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';

        global $wpdb;

        $charsetCollate = $wpdb->get_charset_collate();

        $table = $wpdb->prefix . 'mrm_custom_fields';

        if ($wpdb->get_var("SHOW TABLES LIKE '$table'") != $table) {
            $sql = "CREATE TABLE IF NOT EXISTS {$table} (
                `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
                `title` VARCHAR(255) NOT NULL,
                `slug` VARCHAR(255) NOT NULL,
                `type` VARCHAR(192) NOT NULL COMMENT 'text-input, text-number, text-area, dropdown, radio-button, checkbox date',
                `meta` TEXT NOT NULL,
                `created_at` TIMESTAMP,
                `updated_at` TIMESTAMP
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
	 * API endpoint reuqest check
	 */
	public function test_post_reuqest() {
		$request = new \WP_REST_Request( 'POST', '/mrm/v1/custom-fields/');

        $request->set_body_params(
            [
                "title"             => "Code Rex",
                "slug"              => "coderex",
                "type"              => "checkbox",
                "options"           => [
                                        "Backend",
                                        "Frontend",
                                        "Design"
                                    ]
            ]
        );

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
        
        // email subject check
        $this->assertArrayHasKey("title", $params);

        // email body check
        $this->assertArrayHasKey("slug", $params);

        // email address check
        $this->assertArrayHasKey("type", $params);

        
    }

}
