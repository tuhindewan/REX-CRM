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
	 * Segment create test.
	 */
	public function test_segment_create() {

        $request = new WP_REST_Request( 'POST', '/mrm/v1/tags/', array('titile' => 'tuhin') );
        $response = $this->server->dispatch( $request );

        $this->assertEquals( 404, $response->get_status() );


	}
}
