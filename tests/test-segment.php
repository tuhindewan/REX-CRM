<?php


/**
 * Class SegmentTest
 *
 * @package Mrm
 */


class SegmentTest extends WP_UnitTestCase {

    /**
     * Holds the WP REST Server object
     *
     * @var WP_REST_Server
     */
    private $server;
 
    /**
    * Holds user id.
    *
    * @var int
    */
    private $user_id;
 
    /**
    * Holds post id.
    *
    * @var int
    */
    private $post_id;
 
    /**
    * Create a user and a post for our test.
    */
    public function setUp() {
        // Initiating the REST API.
        parent::setUp();

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';

        global $wpdb;

        $charsetCollate = $wpdb->get_charset_collate();

        $table = $wpdb->prefix . 'mrm_contact_groups';

        if ($wpdb->get_var("SHOW TABLES LIKE '$table'") != $table) {
            $sql = "CREATE TABLE {$table} (
                `id` BIGINT(20) unsigned NOT NULL auto_increment,
                `title` VARCHAR(255) NOT NULL,
                `type` TINYINT(2) unsigned NOT NULL COMMENT '1 - TAG, 2 - LIST, 3 - SEGMENT',
                `slug` VARCHAR(255) NOT NULL,
                `data` longtext, 
                `created_at` TIMESTAMP,
                `updated_at` TIMESTAMP,
               PRIMARY KEY (`id`),
               KEY `type` (`type`)
             ) $charsetCollate;";

            dbDelta($sql);
        }
 
        global $wp_rest_server;
        $this->server = $wp_rest_server = new \WP_REST_Server;
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
	 * Segment create test.
	 */
	public function test_segment_create() {

        $request = new \WP_REST_Request( 'GET', '/mrm/v1/tags');
        $response = $this->server->dispatch( $request );
        $this->assertEquals( 200, $response->get_status() );


	}
}
