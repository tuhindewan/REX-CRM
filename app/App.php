<?php

namespace Mint\MRM;

use Mint\MRM\Admin\API\Server;
use Mint\MRM\Internal\Admin\AdminAssets;
use Mint\MRM\Internal\Admin\FrontendAssets;
use Mint\MRM\Internal\Admin\Page\PageController;
use Mint\MRM\Internal\Ajax\AjaxAction;
use Mint\MRM\Internal\FormBuilder\FormBuilderHelper;
use Mint\MRM\Internal\FormBuilder\GetMRM_Block_Manager;
use Mint\MRM\Internal\Optin\OptinConfirmation;
use Mint\MRM\Internal\ShortCode\ShortCode;
use Mint\Mrm\Internal\Traits\Singleton;
use Mint\MRM\Internal\Cron\CampaignsBackgroundProcess;

class App {

    use Singleton;

    /**
     * Init the plugin
     *
     * @since 1.0.0
     */
    public function init() {
        if ( did_action( 'plugins_loaded' ) ) {
            self::on_plugins_loaded();
        } else {
            add_action( 'plugins_loaded', array( $this, 'on_plugins_loaded' ), 9 );
        }

        if( $this->is_request('admin') ) {
            // Load assets
            AdminAssets::get_instance();
        }
        // init form-builder
        new FormBuilderHelper;


        // init plugin shortcodes
        ShortCode::get_instance()->init();

        //init ajax
        AjaxAction::get_instance();

        if( $this->is_request('frontend') ) {
            // Load assets
            FrontendAssets::get_instance();
            // Opt-in 
            OptinConfirmation::get_instance();
        }

        CampaignsBackgroundProcess::get_instance()->init();
    }


    public function on_plugins_loaded() {
        $this->includes();
    }


    /**
     * Include required classes
     *
     * @since 1.0.0
     */
    private function includes() {

        // Initialize API.
        Server::get_instance();

        if( $this->is_request('admin') ) {

            // Initialize Page.
            PageController::get_instance();
        }
    }


    /**
     * Check the type of the request
     *
     * @param $type
     * @return bool
     * @since 1.0.0
     */
    private function is_request($type) {
        switch ( $type ) {
            case 'admin':
                return is_admin();
            case 'ajax':
                return defined( 'DOING_AJAX' );
            case 'cron':
                return defined( 'DOING_CRON' );
            case 'frontend':
                return ( ! is_admin() || defined( 'DOING_AJAX' ) ) && ! defined( 'DOING_CRON' );
        }
    }

}