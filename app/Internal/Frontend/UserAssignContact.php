<?php

namespace Mint\MRM\Internal\Admin;

use Mint\MRM\Admin\API\Controllers\MessageController;
use Mint\MRM\Admin\API\Controllers\TagController;
use Mint\MRM\DataBase\Models\ContactModel;
use Mint\MRM\DataStores\ContactData;

class UserAssignContact {

	/**
	 * Class instance.
	 *
	 * @var AdminAssets instance
	 */
	protected static $instance = null;

	/**
	 * Get class instance.
	 */
	public static function get_instance()
	{
		if (!self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}


	/**
	 * Wordpress Hook Constractor.
	 *
	 * @since 1.0.0
	 */
	public function __construct()
	{
		add_action('user_register', array($this, 'assign_signup_user_in_contact'),10,2 );
		add_action('comment_post', array($this, 'assign_comment_post_user_in_contact'),10,3 );
	}

	/**
	 * assign User in Mint mail contact
	 * @param $user_id
	 * @param $user_data
	 *
	 * @return void
	 */
	public function assign_signup_user_in_contact ( $user_id , $user_data) {

		$get_options = get_option('_mrm_general_user_signup');

		if (isset($get_options['enable']) && $get_options['enable']){
			if(isset($get_options['list_mapping']) && is_array($get_options['list_mapping'])){
				foreach ($get_options['list_mapping'] as $lists){
					$user_role = $this->user_has_role($user_id,$lists['role']);
					$user_email = isset($user_data['user_email']) ?  $user_data['user_email'] : '';
					$exist_email    = ContactModel::is_contact_exist( $user_email );
					if($user_role && !$exist_email) {
						$contact        = new ContactData( $user_email,$parms = [] );
						$contact_id     = ContactModel::insert( $contact );
						if ($contact_id){
							$get_double_optin = get_option('_mrm_optin_settings');
							$is_double_optin = isset($get_double_optin['enable']) ? $get_double_optin['enable'] : false;
							if($is_double_optin){
								MessageController::get_instance()->send_double_opt_in( $contact_id );
							}
							$ids = isset($lists['list']) ? $lists['list'] : [];
							TagController::set_tags_to_contact($ids,$contact_id);
						}
					}
				}
			}
		}
	}

	/**
	 * Assign Commer User to Mint Email
	 * @param $comment_ID
	 * @param $comment_approved
	 * @param $commentdata
	 *
	 * @return void
	 */
	public function assign_comment_post_user_in_contact(  $comment_ID, $comment_approved, $commentdata ) {

		$get_options = get_option('_mrm_general_comment_form_subscription');
		if (isset($get_options['enable']) && $get_options['enable']){
			$user_email = isset($commentdata['comment_author_email']) ? $commentdata['comment_author_email'] : '';
			if ('' != $user_email ){
				$exist_email    = ContactModel::is_contact_exist( $user_email );
				if(!$exist_email) {
					$contact        = new ContactData( $user_email,$parms = [] );
					$contact_id     = ContactModel::insert( $contact );
					if ($contact_id){
						$get_double_optin = get_option('_mrm_optin_settings');
						error_log(print_r($get_double_optin,1));
						$is_double_optin = isset($get_double_optin['enable']) ? $get_double_optin['enable'] : false;
						if($is_double_optin){
							MessageController::get_instance()->send_double_opt_in( $contact_id );
						}
						$group_tag = isset($get_options['tags']) ? $get_options['tags'] : [];
						$group_list = isset($get_options['lists']) ? $get_options['lists'] : [];
						$group_data = array_merge($group_tag,$group_list);
						$ids = [];
						foreach ($group_data as $id){
							$ids[] = $id;
						}
						TagController::set_tags_to_contact($ids,$contact_id);
					}
				}
			}
		}

	}

	/**
	 * Herlper function for user role
	 * @param $user_id
	 * @param $role_name
	 *
	 * @return bool
	 */
	public function user_has_role( $user_id, $role_name ) {
		$user_meta = get_userdata($user_id);
		$user_roles = $user_meta->roles;
		return in_array($role_name, $user_roles);
	}
}
