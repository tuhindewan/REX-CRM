<?php

use MRM\REST\MRM_API_Activation_Handler;
use MRM\DB\MRM_DB_Activation_Handler;
/**
 * Fired during plugin activation
 *
 * @link       http://rextheme.com/
 * @since      1.0.0
 *
 * @package    Mrm
 * @subpackage Mrm/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Mrm
 * @subpackage Mrm/includes
 * @author     RexTheme <support@rextheme.com>
 */
class Mrm_Activator {

	/**
	 * Process all activation tasks
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		MRM_API_Activation_Handler::handle();
		MRM_DB_Activation_Handler::handle();
	}

}
