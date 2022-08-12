<?php
/**
 * Class MRM_List_Test
 *
 * @package Mrm
 */

use MRM\DB\MRM_Database_Core;

/**
 * Test Class for List Module
 */
class MRM_List_Test extends WP_UnitTestCase {
  /**
	 * Test REST Server
	 *
	 * @var WP_REST_Server
	 */
	protected $server;
	protected $namespaced_route = 'mrm/v1';

  public function setUp() {
		parent::setUp();
		/** @var WP_REST_Server $wp_rest_server */
		global $wp_rest_server;
		$this->server = $wp_rest_server = new \WP_REST_Server;
    MRM_Database_Core::get_instance()->init();
		do_action( 'rest_api_init' );
	}

  public function test_register_route() {
		$routes = $this->server->get_routes();
		$this->assertArrayHasKey( $this->namespaced_route, $routes );
	}

  public function test_endpoints() {
		$the_route = $this->namespaced_route;
		$routes = $this->server->get_routes();
		foreach( $routes as $route => $route_config ) {
			if( 0 === strpos( $the_route, $route ) ) {
				$this->assertTrue( is_array( $route_config ) );
				foreach( $route_config as $i => $endpoint ) {
					$this->assertArrayHasKey( 'callback', $endpoint );
					$this->assertArrayHasKey( 0, $endpoint[ 'callback' ], get_class( $this ) );
					$this->assertArrayHasKey( 1, $endpoint[ 'callback' ], get_class( $this ) );
					$this->assertTrue( is_callable( array( $endpoint[ 'callback' ][0], $endpoint[ 'callback' ][1] ) ) );
				}
			}
		}
	}

  public function test_get_lists() {
		// All 3 posts
		$request = new WP_REST_Request( 'GET', '/mrm/v1/lists' );
		$response = $this->server->dispatch( $request );
    echo $response;
		// $this->assertEquals( 200, $response->get_status() );
		// $this->assertEquals( 3, count( $response->get_data() ) );
		// // 2 of 3 posts
		// $request = new WP_REST_Request( 'GET', '/wp/v2/posts' );
		// $request->set_param( 'author', array( $this->editor_id, $this->author_id ) );
		// $response = $this->server->dispatch( $request );
		// $this->assertEquals( 200, $response->get_status() );
		// $data = $response->get_data();
		// $this->assertEquals( 2, count( $data ) );
		// $this->assertEqualSets( array( $this->editor_id, $this->author_id ), wp_list_pluck( $data, 'author' ) );
		// // 1 of 3 posts
		// $request = new WP_REST_Request( 'GET', '/wp/v2/posts' );
		// $request->set_param( 'author', $this->editor_id );
		// $response = $this->server->dispatch( $request );
		// $this->assertEquals( 200, $response->get_status() );
		// $data = $response->get_data();
		// $this->assertEquals( 1, count( $data ) );
		// $this->assertEquals( $this->editor_id, $data[0]['author'] );
	}
}
