<?php

namespace Mint\MRM\Internal\Admin;


use Mint\MRM\DataBase\Models\ContactGroupModel;
use Mint\MRM\DataBase\Models\ContactModel;
use phpseclib\Crypt\Hash;

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

	/**
	 * Check Preference Setting and Page
	 * @return void
	 */

	public function mrm_preference_setting(  ) {
		if(isset($_GET['route']) && isset($_GET['mrm']) && isset($_GET['hash'])){
			if ($_GET['route'] == 'preference' && $_GET['mrm'] && !empty($_GET['hash'])){
				$settings = get_option('_mrm_general_preference');
				$hash = isset($_GET['hash']) ? $_GET['hash'] : '';
				$get_no_contact_manage = '';
				$get_assign_list = '';
				$get_all_manage = '';
				if (isset($settings['enable']) && $settings['enable']){
					switch ($settings['preference']) {
						case "no-contact-manage":
							$get_no_contact_manage = $this->no_contact_manage( $settings,$hash );
							break;
						case "contact-manage-following":
							$get_assign_list = $this->contact_manage_following( $settings, $hash);
							break;
						case "contact-manage":
							$get_all_manage = $this->contact_manage($settings ,$hash);
							break;
						default:
							$get_no_contact_manage = $this->no_contact_manage( $settings,$hash );
					}
				}
				require_once MRM_DIR_PATH . 'app/Resources/public/preference.php';
				die();
			}
		}

	}

	/**
	 * Contact can not  manage list
	 * @param $settings
	 * @param $hash
	 *
	 * @return string
	 */
	public function no_contact_manage( $settings ,$hash) {
		$html = '';
		$fields = isset($settings['primary_fields']) ?$settings['primary_fields'] : [];
		if (!empty($fields) && '' != $hash){
			$html = '';
			$html .= $this->form_group_primary_filed($fields, $hash,$html);
			$html .= '<button type="submit">Submit</button>';
		}
		return $html;
	}

	/**
	 * Contact can manage specific lists
	 * @param $settings
	 * @param $hash
	 *
	 * @return string|void
	 */
	public function contact_manage_following( $settings ,$hash) {
		$primary_fields = isset($settings['primary_fields']) ?$settings['primary_fields'] : [];
		$fields = isset($settings['lists']) ? $settings['lists'] : [];
			if (!empty($fields) && '' != $hash){
				$html  = '';
				$html_list  = '';
				$html .= $this->form_group_primary_filed( $primary_fields, $hash ,$html );

				$html .= $this->contact_assign_list($fields, $hash ,$html_list);
				$html .= '<button type="submit">Submit</button></div>';
				return $html;
			}
	}

	/**
	 * Contact can manage all Lists
	 * @param $settings
	 * @param $hash
	 *
	 * @return string|void
	 */
	public function contact_manage( $settings ,$hash) {
		$primary_fields = isset($settings['primary_fields']) ?$settings['primary_fields'] : [];
			if ( '' != $hash){
				$html = '';
				$html_list  = '';
				$html .= $this->form_group_primary_filed( $primary_fields, $hash ,$html );

				$html .= $this->contact_all_list($hash ,$html_list);
				$html .= '<button type="submit">Submit</button></div>';

				return $html;
			}
	}

	/**
	 * Render Primery Fields
	 * @param $fields
	 * @param $hash
	 * @param $html
	 *
	 * @return mixed|string
	 */
	public function form_group_primary_filed( $fields, $hash ,$html ) {
		$get_user_info = ContactModel::get_by_hash($hash);
		$first_name = isset($get_user_info['first_name']) ?  $get_user_info['first_name'] : '';
		$last_name = isset($get_user_info['last_name']) ?  $get_user_info['last_name'] : '';
		$status = isset($get_user_info['status']) ?  $get_user_info['status'] : '';
		foreach ($fields as $key =>  $field){
			if($field){
				if($key == 'first_name'){
					$html .= '<div class="mrm-form-group">
								<label for="">First Name</label>
                                <input type="text" name="first_name" value="'.$first_name.'">
            				  </div>';
				}
				if($key == 'last_name'){
					$html .= '<div class="mrm-form-group">
									<label for="">Last Name</label>
            						<input type="text" name="last_name" value="'.$last_name.'">
            				</div>';
				}
				if($key == 'status'){
					$html .= '<div class="mrm-form-group">
									<label for="">Status</label>
            						<select name="status" id="">
						                <option value="pending">Pending</option>
						                <option value="subscribe">Subscribe</option>
						                <option value="unsubscribe">Unsubscribe</option>
						            </select>
						      </div>';
				}
			}
		}
		return $html;
	}

	/**
	 * render list
	 * @param $fields
	 * @param $hash
	 * @param $html
	 *
	 * @return mixed|string
	 */
	public function contact_assign_list( $fields, $hash ,$html ) {
		foreach ($fields as $field){
			$html .= '
			<div class="mrm-form-group">
					<input type="checkbox" id="mrm_field-'.$field['id'].'" name="mrm_list[]" value="'.$field['id'].'">
                    <label for="mrm_field-'.$field['id'].'">'.$field['title'].'</label><br>
  			</div>';
		}

		return $html;
	}

	/**
	 * Render All list
	 * @param $hash
	 * @param $html
	 *
	 * @return mixed|string
	 */

	public function contact_all_list($hash, $html ) {
		$get_all_list = ContactGroupModel::get_all_to_custom_select('lists');
		$fields = isset($get_all_list['data']) ? $get_all_list['data'] : [];
		if(!empty($fields)){
			foreach ($fields as $field){
				$html .= '
			<div class="mrm-form-group">
					<input type="checkbox" id="mrm_field-'.$field['id'].'" name="mrm_list[]" value="'.$field['id'].'">
                    <label for="mrm_field-'.$field['id'].'">'.$field['title'].'</label><br>
  			</div>';
			}
		}
		return $html;
	}
}