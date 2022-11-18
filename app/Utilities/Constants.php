<?php

namespace Mint\MRM;

use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Shared global constants for use in other classes]
 */

class Constants {

	use Singleton;

	/**
	 * Contact attrs available for mapping
	 */
	public static $contacts_attrs = array(
		array(
			'name' => 'Email',
			'slug' => 'email',
		),
		array(
			'name' => 'First Name',
			'slug' => 'first_name',
		),
		array(
			'name' => 'Last Name',
			'slug' => 'last_name',
		),
		array(
			'name' => 'Date of Birth',
			'slug' => 'date_of_birth',
		),
		array(
			'name' => 'Company Name',
			'slug' => 'company',
		),
		array(
			'name' => 'Address Line 1',
			'slug' => 'address',
		),
		array(
			'name' => 'Address Line 2',
			'slug' => 'address_line_2',
		),
		array(
			'name' => 'Postal Code',
			'slug' => 'postal_code',
		),
		array(
			'name' => 'City',
			'slug' => 'city',
		),
		array(
			'name' => 'State',
			'slug' => 'state',
		),
		array(
			'name' => 'Country',
			'slug' => 'country',
		),
		array(
			'name' => 'Phone',
			'slug' => 'phone_number',
		),
	);

	/**
	 * Contact attrs available for mapping
	 */
	public static $primary_contact_fields = array(
		'first_name',
		'last_name',
		'email',
		'postal_code',
		'scores',
		'source',
		'status',
		'stage',
		'last_activity',
	);

	/**
	 * fields slugs array for custom fields validation
	 */
	public static $primary_fields = array(
		'first-name',
		'last-name',
		'email',
		'postal-code',
		'last-activity',
		'date-of-birth',
		'company',
		'address-line-1',
		'address-line-2',
		'city',
		'state',
		'country',
		'phone-number',
		'gender',
		'timezone',
		'designation',
	);

	/*
	* maichimp api key for testing
	*/
	public static $mailchimp_key = '11b321614d43814ca7d8406041bb3839-us8';
}
