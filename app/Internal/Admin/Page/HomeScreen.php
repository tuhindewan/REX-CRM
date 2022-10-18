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
        add_submenu_page(self::MENU_SLUG, __( 'Contacts', 'mrm'), __( 'Contacts', 'mrm'), 'manage_options', 'admin.php?page=mrm-admin#/contacts/');
        add_submenu_page(self::MENU_SLUG, __( 'Campaigns', 'mrm'), __( 'Campaigns', 'mrm'), 'manage_options', 'admin.php?page=mrm-admin#/campaigns/');
        add_submenu_page(self::MENU_SLUG, __( 'Forms', 'mrm'), __( 'Forms', 'mrm'), 'manage_options', 'admin.php?page=mrm-admin#/form/');
        add_submenu_page(self::MENU_SLUG, __( 'Settings', 'mrm'), __( 'Settings', 'mrm'), 'manage_options', 'admin.php?page=mrm-admin#/settings/');
    }


    public function load_wrapper() {
        ?>
        <div class="crm-app-wrapper" style="display: block; ">
            <div id="crm-app"></div>
            <div id="crm-portal"></div>
        </div>
        <?php
    }
}