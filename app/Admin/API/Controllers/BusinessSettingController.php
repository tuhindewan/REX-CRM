<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\Mrm\Internal\Traits\Singleton;
use MRM\Common\MRM_Common;
use WP_REST_Request;


Class BusinessSettingController extends SettingBaseController{


	use Singleton;

	/**
	 * Setiings object arguments
	 *
	 * @var object
	 * @since 1.0.0
	 */
	public $args;

	protected $option_key = '_mrm_business_info_setting';

	/**
	 * Get and send response to create a new settings
	 * @param WP_REST_Request $request
	 *
	 * @return array|WP_REST_Response|\WP_Error
	 */
	public function create_or_update( WP_REST_Request $request ){

		$params = MRM_Common::get_api_params_values( $request );
		if(is_array($params)){
			if(!empty($params)){

				$business_name  = isset($params['business_name']) ? sanitize_text_field($params['business_name']) : '';
				$phone          = isset($params['phone']) ? sanitize_text_field($params['phone']) : '';
				$address        = isset($params['address']) ? sanitize_text_field($params['address']) : '';
				$logo_url       = isset($params['logo_url']) ? sanitize_text_field($params['logo_url']) : '';
				$social         = isset($params['social']) ? sanitize_text_field($params['social']) : [];
				if(!$this->phone_number_validation($phone))	{
					return $this->get_error_response(__( 'Phone number format is not correct', 'mrm' ));
				}
				$business_options = array(
					"business_name" => $business_name,
					"phone"         => $phone,
					"address"       => $address,
					"logo_url"      => $logo_url,
					"social"        => $social
				);

				update_option( $this->option_key,$business_options );
				return $this->get_success_response(__( 'Business information settings has been successfully saved.', 'mrm' ));
			}
		}

		return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);



	}


	/**
	 * Function used to handle a single get request
	 *
	 * @param WP_REST_Request
	 * @return WP_REST_Response
	 * @since 1.0.0
	 */
	public function get( WP_REST_Request $request ){

		$default = array(
			"business_name" => "",
			"phone"         => "",
			"address"       => "",
			"logo_url"      => "",
			"social"        => [
				"icon"      => "",
				"url"       => ""
			]
		);
		$settings = get_option( $this->option_key, $default );
		$settings = is_array( $settings ) && !empty( $settings ) ? $settings : $default;
		return $this->get_success_response_data(  $settings );


	}

	public function phone_number_validation( $number ) {
		$phone_number_validation_regex = "/^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$/";
		return preg_match($phone_number_validation_regex, $number);
	}

}