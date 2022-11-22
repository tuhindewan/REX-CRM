<?php

namespace Mint\MRM\Internal\Admin;


class PreferencePageSetting {

	/**
	 * Class instance.
	 *
	 * @var AdminAssets instance
	 */
	protected static $instance = null;

	/**
	 * Get class instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}


	/**
	 * WordPress Hook Constractor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'mrm_preference_setting' ), 10, 2 );
	}


	public function mrm_preference_setting(  ) {
		if(isset($_GET['route']) && isset($_GET['mrm']) && isset($_GET['hash'])){
			if ($_GET['route'] == 'preference' && $_GET['mrm'] && !empty($_GET['hash'])){
				$settings = get_option('_mrm_general_preference');
				error_log(print_r($settings,1));
				if (isset($settings['enable']) && $settings['enable']){
					switch ($settings['preference']) {
						case "no-contact-manage":
							echo "Your favorite color is red!";
							break;
						case "contact-manage-following":
							echo "Your favorite color is blue!";
							break;
						case "contact-manage":
							echo "Your favorite color is green!";
							break;
						default:
							echo "Your favorite color is neither red, blue, nor green!";
					}
				}
				require_once MRM_DIR_PATH . 'app/Resources/public/preference.php';
				die();
			}
		}

	}
}