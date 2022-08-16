<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://rextheme.com/
 * @since             1.0.0
 * @package           Mrm
 *
 * @wordpress-plugin
 * Plugin Name:       MRM
 * Plugin URI:        https://rextheme.com/mrm/
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            RexTheme
 * Author URI:        http://rextheme.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       mrm
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'MRM_VERSION', '1.0.0' );


/**
 * Init Admin Page.
 *
 * @return void
 */
function mrm_admin_page() {
	require_once plugin_dir_path( __FILE__ ) . 'admin/templates/app.php';
}


/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-mrm-activator.php
 */
function activate_mrm() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-mrm-activator.php';
	Mrm_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-mrm-deactivator.php
 */
function deactivate_mrm() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-mrm-deactivator.php';
	Mrm_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_mrm' );
register_deactivation_hook( __FILE__, 'deactivate_mrm' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-mrm.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_mrm() {

	$plugin = new Mrm();
	$plugin->run();

}
run_mrm();
