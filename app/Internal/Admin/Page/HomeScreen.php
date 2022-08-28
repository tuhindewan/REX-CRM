<?php

namespace Mint\MRM\Internal\Admin\Page;


use Mint\Mrm\Internal\Traits\Singleton;

class HomeScreen {

    use Singleton;

    const MENU_SLUG = 'mrm-admin';

    public function __construct() {
        add_action( 'admin_menu', array( $this, 'register_page' ) );
    }


    public function register_page() {
        add_menu_page(
            __( 'MRM', 'mrm'),
            __( 'MRM', 'mrm'),
            'manage_options',
            self::MENU_SLUG,
            array($this, 'load_wrapper'),
            'dashicons-admin-post',
            '20'
        );
    }


    public function load_wrapper() {
        ?>
        <div class="wrap">
            <div id="crm-app"></div>
        </div>
        <?php
    }
}