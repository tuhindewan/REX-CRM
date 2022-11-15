<?php

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
 
        // Initiating the REST API.
        parent::setUp();
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

    // public function test_register_route() {
	// 	$routes = $this->server->get_routes();
	// 	$this->assertArrayHasKey( $this->namespaced_route, $routes );
	// }

    // public function test_endpoints() {
	// 	$the_route = $this->namespaced_route;
	// 	$routes = $this->server->get_routes();
	// 	foreach( $routes as $route => $route_config ) {
	// 		if( 0 === strpos( $the_route, $route ) ) {
	// 			$this->assertTrue( is_array( $route_config ) );
	// 			foreach( $route_config as $i => $endpoint ) {
	// 				$this->assertArrayHasKey( 'callback', $endpoint );
	// 				$this->assertArrayHasKey( 0, $endpoint[ 'callback' ], get_class( $this ) );
	// 				$this->assertArrayHasKey( 1, $endpoint[ 'callback' ], get_class( $this ) );
	// 				$this->assertTrue( is_callable( array( $endpoint[ 'callback' ][0], $endpoint[ 'callback' ][1] ) ) );
	// 			}
	// 		}
	// 	}
	// }

    public function test_name_route() {
		$request  = new WP_REST_Request( 'GET', '/api/v2/name' );
		$response = $this->server->dispatch( $request );
        error_log(print_r($response, 1));
		$this->assertEquals( 200, $response->get_status() );
		$data = $response->get_data();
		$this->assertArrayHasKey( 'name', $data );
		$this->assertEquals( 'shawn', $data[ 'name' ] );
	}


}