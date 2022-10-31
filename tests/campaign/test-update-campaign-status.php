<?php

use Mint\MRM\DataBase\Models\CampaignModel;
use MRM\Common\MRM_Common;

class UpdateCampaignStatusTest extends WP_UnitTestCase {
    /**
     * Holds the WP REST Server object
     *
     * @var WP_REST_Server
     */
    private $server;

	/**
    * mrm_campaigns table create for testing
    */
    public function setUp() {
        parent::setUp();

        // Database table create
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';

        global $wpdb;

        $charsetCollate = $wpdb->get_charset_collate();

        $table = $wpdb->prefix . 'mrm_campaigns';

        if ($wpdb->get_var("SHOW TABLES LIKE '$table'") != $table) {
            $sql = "CREATE TABLE IF NOT EXISTS {$table} (
                `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
                `title` VARCHAR(192) NULL,
                `status` ENUM('draft', 'active', 'archived', 'suspended'),
                `type` ENUM('regular', 'sequence'),
                `scheduled_at` TIMESTAMP NULL,
                `created_by` bigint(20) unsigned NULL,
                `created_at` TIMESTAMP NULL,
                `updated_at` TIMESTAMP NULL
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

    public function test_prepare_request()
    {
        $request = new \WP_REST_Request( 'PUT', '/mrm/v1/campaigns/4/status-update');
        $request->set_body_params(
            [
                "status"        => "suspended",
                "campaign_id"   => 4
            ]
        );

        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
        $this->assertArrayHasKey("status", $params);
        $this->assertArrayHasKey("campaign_id", $params);

        $campaign_id = isset( $params['campaign_id'] ) ? $params['campaign_id'] : "";
        $status     = isset( $params['status'] ) ? $params['status'] : "";

        $this->assertEquals($campaign_id, 4);

        $update = CampaignModel::update_campaign_status( $campaign_id, $status );
        $this->assertEquals($update, 0);
    }

}