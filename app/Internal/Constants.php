<?php

namespace Mint\MRM\Internal;

use DateTime;
use DateTimeZone;
use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Shared global constants for use in other classes]
 */

class Constants{

    use Singleton;

    /**
     * Contact attrs available for mapping
     */
    public static $contacts_attrs = array(
        "first_name",
        "last_name",
        "email",
        "date_of_birth",
        "company_name",
        "address_line_1",
        "address_line_2",
        "postal_code",
        "city",
        "state",
        "country",
        "phone"
    );

    /**
     * Contact list columns available for hide/show
     */
    public static $contact_list_columns = array(
        [
            "id"    => "last_activity",
            "value" => "Last Activity"
        ],
        [
            "id"    => "phone_number",
            "value" => "Phone Number"
        ],
        [
            "id"    => "sources",
            "value" => "Source"
        ],
        [
            "id"    => "gender",
            "value" => "Gender"
        ],
        [
            "id"    => "timezone",
            "value" => "Timezone"
        ],
        [
            "id"    => "company",
            "value" => "Company Name"
        ],
        [
            "id"    => "designation",
            "value" => "Designation"
        ],
        [
            "id"    => "date_of_birth",
            "value" => "Date of Birth"
        ],
        [
            "id"    => "addresses",
            "value" => "Address"
        ],
        // [
        //     "id"    => "address_line_2",
        //     "value" => "Address Line 2"
        // ],
        // [
        //     "id"    => "postal_code",
        //     "value" => "Postal Code"
        // ],
        // [
        //     "id"    => "city",
        //     "value" => "City"
        // ],
        // [
        //     "id"    => "state",
        //     "value" => "State"
        // ],
        // [
        //     "id"    => "country",
        //     "value" => "Country"
        // ]
    );

    /*
    * maichimp api key for testing
    */
    public static $mailchimp_key = "11b321614d43814ca7d8406041bb3839-us8";


    /**
     * Define plugin constants
     *
     * @since 1.0.0
     */
    public function define_constants() {
        $this->define( 'MRM_ADMIN_ASSETS_FOLDER', MRM_DIR_PATH.'assets/admin/' );
        $this->define( 'MRM_ADMIN_DIST_JS_FOLDER', 'assets/admin/dist/' );
        $this->define( 'MRM_ADMIN_DIST_CSS_FOLDER', 'assets/admin/dist/css/' );
        $this->define( 'MRM_ADMIN_EXTERNAL_JS_FOLDER', 'assets/admin/js/' );
        $this->define( 'MRM_ADMIN_EXTERNAL_CSS_FOLDER', 'assets/admin/css/' );
    }


    /**
     * Define constant variable if not define
     *
     * @param $name
     * @param $value
     * @since 1.0.0
     */
    protected function define( $name, $value ) {
        if ( ! defined( $name ) ) {
            define( $name, $value );
        }
    }


    /**
     * Return timezone list
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_timezone_list() {
		static $regions = array(
			DateTimeZone::AFRICA,
			DateTimeZone::AMERICA,
			DateTimeZone::ANTARCTICA,
			DateTimeZone::ASIA,
			DateTimeZone::ATLANTIC,
			DateTimeZone::AUSTRALIA,
			DateTimeZone::EUROPE,
			DateTimeZone::INDIAN,
			DateTimeZone::PACIFIC,
		);

		$timezones = array();
		foreach ( $regions as $region ) {
			$timezones = array_merge( $timezones, DateTimeZone::listIdentifiers( $region ) );
		}

		$timezone_offsets = array();
		foreach ( $timezones as $timezone ) {
			$tz                            = new DateTimeZone( $timezone );
			$timezone_offsets[ $timezone ] = $tz->getOffset( new DateTime() );
		}

		asort( $timezone_offsets );

		$timezone_list = array();
		foreach ( $timezone_offsets as $timezone => $offset ) {
			$offset_prefix    = $offset < 0 ? '-' : '+';
			$offset_formatted = gmdate( 'H:i', abs( $offset ) );

			$pretty_offset = "UTC${offset_prefix}${offset_formatted}";

            $timezone_list[] = [
                'id'    => $timezone,
                'value' => "(${pretty_offset}) $timezone"
            ];
		}
		return $timezone_list;
	}
}