<?php


/**
 * Class SampleTest
 *
 * @package Mrm
 */

/**
 * Sample test case.
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
        global $wp_rest_server;
        $this->server = $wp_rest_server = new \WP_REST_Server;
        do_action( 'rest_api_init' );
 
        $this->user_id = $this->factory->user->create( array(
            'display_name' => 'test_author',
        ) );
 
        $this->post_id = $this->factory->post->create( [
            'post_title' => 'Hello World',
            'post_content' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'post_status' => 'publish',
            'post_author' => $this->user_id
        ] );
    }
 
    /**
    * Delete the user and post after the test.
    */
    public function tearDown() {
        wp_delete_user( $this->user_id );
        wp_delete_post( $this->post_id );
    }

	/**
	 * Segment create test.
	 */
	public function test_segment_create() {

        $request  = new WP_REST_Request( 'POST', '/mrm/v1/segment/' );
        $response = $this->server->dispatch( $request );
        $data     = $response->get_data();
 
        $this->assertCount( 3, $data );


	}
}
