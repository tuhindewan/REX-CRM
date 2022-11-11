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


    public static function get_country_name()
    {
        return [
                [
                    'code'  => 'AF',
                    'title' => __('Afghanistan', 'mint-crm')
                ],
                [
                    'code'  => 'AX',
                    'title' => __('Åland Islands', 'mint-crm')
                ],
                [
                    'code'  => 'AL',
                    'title' => __('Albania', 'mint-crm')
                ],
                [
                    'code'  => 'DZ',
                    'title' => __('Algeria', 'mint-crm')
                ],
                [
                    'code'  => 'AS',
                    'title' => __('American Samoa', 'mint-crm')
                ],
                [
                    'code'  => 'AD',
                    'title' => __('Andorra', 'mint-crm')
                ],
                [
                    'code'  => 'AO',
                    'title' => __('Angola', 'mint-crm')
                ],
                [
                    'code'  => 'AI',
                    'title' => __('Anguilla', 'mint-crm')
                ],
                [
                    'code'  => 'AQ',
                    'title' => __('Antarctica', 'mint-crm')
                ],
                [
                    'code'  => 'AG',
                    'title' => __('Antigua and Barbuda', 'mint-crm')
                ],
                [
                    'code'  => 'AR',
                    'title' => __('Argentina', 'mint-crm')
                ],
                [
                    'code'  => 'AM',
                    'title' => __('Armenia', 'mint-crm')
                ],
                [
                    'code'  => 'AW',
                    'title' => __('Aruba', 'mint-crm')
                ],
                [
                    'code'  => 'AU',
                    'title' => __('Australia', 'mint-crm')
                ],
                [
                    'code'  => 'AT',
                    'title' => __('Austria', 'mint-crm')
                ],
                [
                    'code'  => 'AZ',
                    'title' => __('Azerbaijan', 'mint-crm')
                ],
                [
                    'code'  => 'BS',
                    'title' => __('Bahamas', 'mint-crm')
                ],
                [
                    'code'  => 'BH',
                    'title' => __('Bahrain', 'mint-crm')
                ],
                [
                    'code'  => 'BD',
                    'title' => __('Bangladesh', 'mint-crm')
                ],
                [
                    'code'  => 'BB',
                    'title' => __('Barbados', 'mint-crm')
                ],
                [
                    'code'  => 'BY',
                    'title' => __('Belarus', 'mint-crm')
                ],
                [
                    'code'  => 'BE',
                    'title' => __('Belgium', 'mint-crm')
                ],
                [
                    'code'  => 'PW',
                    'title' => __('Belau', 'mint-crm')
                ],
                [
                    'code'  => 'BZ',
                    'title' => __('Belize', 'mint-crm')
                ],
                [
                    'code'  => 'BJ',
                    'title' => __('Benin', 'mint-crm')
                ],
                [
                    'code'  => 'BM',
                    'title' => __('Bermuda', 'mint-crm')
                ],
                [
                    'code'  => 'BT',
                    'title' => __('Bhutan', 'mint-crm')
                ],
                [
                    'code'  => 'BO',
                    'title' => __('Bolivia', 'mint-crm')
                ],
                [
                    'code'  => 'BQ',
                    'title' => __('Bonaire, Saint Eustatius and Saba', 'mint-crm')
                ],
                [
                    'code'  => 'BA',
                    'title' => __('Bosnia and Herzegovina', 'mint-crm')
                ],
                [
                    'code'  => 'BW',
                    'title' => __('Botswana', 'mint-crm')
                ],
                [
                    'code'  => 'BV',
                    'title' => __('Bouvet Island', 'mint-crm')
                ],
                [
                    'code'  => 'BR',
                    'title' => __('Brazil', 'mint-crm')
                ],
                [
                    'code'  => 'IO',
                    'title' => __('British Indian Ocean Territory', 'mint-crm')
                ],
                [
                    'code'  => 'BN',
                    'title' => __('Brunei', 'mint-crm')
                ],
                [
                    'code'  => 'BG',
                    'title' => __('Bulgaria', 'mint-crm')
                ],
                [
                    'code'  => 'BF',
                    'title' => __('Burkina Faso', 'mint-crm')
                ],
                [
                    'code'  => 'BI',
                    'title' => __('Burundi', 'mint-crm')
                ],
                [
                    'code'  => 'KH',
                    'title' => __('Cambodia', 'mint-crm')
                ],
                [
                    'code'  => 'CM',
                    'title' => __('Cameroon', 'mint-crm')
                ],
                [
                    'code'  => 'CA',
                    'title' => __('Canada', 'mint-crm')
                ],
                [
                    'code'  => 'CV',
                    'title' => __('Cape Verde', 'mint-crm')
                ],
                [
                    'code'  => 'KY',
                    'title' => __('Cayman Islands', 'mint-crm')
                ],
                [
                    'code'  => 'CF',
                    'title' => __('Central African Republic', 'mint-crm')
                ],
                [
                    'code'  => 'TD',
                    'title' => __('Chad', 'mint-crm')
                ],
                [
                    'code'  => 'CL',
                    'title' => __('Chile', 'mint-crm')
                ],
                [
                    'code'  => 'CN',
                    'title' => __('China', 'mint-crm')
                ],
                [
                    'code'  => 'CX',
                    'title' => __('Christmas Island', 'mint-crm')
                ],
                [
                    'code'  => 'CC',
                    'title' => __('Cocos (Keeling) Islands', 'mint-crm')
                ],
                [
                    'code'  => 'CO',
                    'title' => __('Colombia', 'mint-crm')
                ],
                [
                    'code'  => 'KM',
                    'title' => __('Comoros', 'mint-crm')
                ],
                [
                    'code'  => 'CG',
                    'title' => __('Congo (Brazzaville)', 'mint-crm')
                ],
                [
                    'code'  => 'CD',
                    'title' => __('Congo (Kinshasa)', 'mint-crm')
                ],
                [
                    'code'  => 'CK',
                    'title' => __('Cook Islands', 'mint-crm')
                ],
                [
                    'code'  => 'CR',
                    'title' => __('Costa Rica', 'mint-crm')
                ],
                [
                    'code'  => 'HR',
                    'title' => __('Croatia', 'mint-crm')
                ],
                [
                    'code'  => 'CU',
                    'title' => __('Cuba', 'mint-crm')
                ],
                [
                    'code'  => 'CW',
                    'title' => __('Cura&ccedil;ao', 'mint-crm')
                ],
                [
                    'code'  => 'CY',
                    'title' => __('Cyprus', 'mint-crm')
                ],
                [
                    'code'  => 'CZ',
                    'title' => __('Czechia (Czech Republic)', 'mint-crm')
                ],
                [
                    'code'  => 'DK',
                    'title' => __('Denmark', 'mint-crm')
                ],
                [
                    'code'  => 'DJ',
                    'title' => __('Djibouti', 'mint-crm')
                ],
                [
                    'code'  => 'DM',
                    'title' => __('Dominica', 'mint-crm')
                ],
                [
                    'code'  => 'DO',
                    'title' => __('Dominican Republic', 'mint-crm')
                ],
                [
                    'code'  => 'EC',
                    'title' => __('Ecuador', 'mint-crm')
                ],
                [
                    'code'  => 'EG',
                    'title' => __('Egypt', 'mint-crm')
                ],
                [
                    'code'  => 'SV',
                    'title' => __('El Salvador', 'mint-crm')
                ],
                [
                    'code'  => 'GQ',
                    'title' => __('Equatorial Guinea', 'mint-crm')
                ],
                [
                    'code'  => 'ER',
                    'title' => __('Eritrea', 'mint-crm')
                ],
                [
                    'code'  => 'EE',
                    'title' => __('Estonia', 'mint-crm')
                ],
                [
                    'code'  => 'ET',
                    'title' => __('Ethiopia', 'mint-crm')
                ],
                [
                    'code'  => 'FK',
                    'title' => __('Falkland Islands', 'mint-crm')
                ],
                [
                    'code'  => 'FO',
                    'title' => __('Faroe Islands', 'mint-crm')
                ],
                [
                    'code'  => 'FJ',
                    'title' => __('Fiji', 'mint-crm')
                ],
                [
                    'code'  => 'FI',
                    'title' => __('Finland', 'mint-crm')
                ],
                [
                    'code'  => 'FR',
                    'title' => __('France', 'mint-crm')
                ],
                [
                    'code'  => 'GF',
                    'title' => __('French Guiana', 'mint-crm')
                ],
                [
                    'code'  => 'PF',
                    'title' => __('French Polynesia', 'mint-crm')
                ],
                [
                    'code'  => 'TF',
                    'title' => __('French Southern Territories', 'mint-crm')
                ],
                [
                    'code'  => 'GA',
                    'title' => __('Gabon', 'mint-crm')
                ],
                [
                    'code'  => 'GM',
                    'title' => __('Gambia', 'mint-crm')
                ],
                [
                    'code'  => 'GE',
                    'title' => __('Georgia', 'mint-crm')
                ],
                [
                    'code'  => 'DE',
                    'title' => __('Germany', 'mint-crm')
                ],
                [
                    'code'  => 'GH',
                    'title' => __('Ghana', 'mint-crm')
                ],
                [
                    'code'  => 'GI',
                    'title' => __('Gibraltar', 'mint-crm')
                ],
                [
                    'code'  => 'GR',
                    'title' => __('Greece', 'mint-crm')
                ],
                [
                    'code'  => 'GL',
                    'title' => __('Greenland', 'mint-crm')
                ],
                [
                    'code'  => 'GD',
                    'title' => __('Grenada', 'mint-crm')
                ],
                [
                    'code'  => 'GP',
                    'title' => __('Guadeloupe', 'mint-crm')
                ],
                [
                    'code'  => 'GU',
                    'title' => __('Guam', 'mint-crm')
                ],
                [
                    'code'  => 'GT',
                    'title' => __('Guatemala', 'mint-crm')
                ],
                [
                    'code'  => 'GG',
                    'title' => __('Guernsey', 'mint-crm')
                ],
                [
                    'code'  => 'GN',
                    'title' => __('Guinea', 'mint-crm')
                ],
                [
                    'code'  => 'GW',
                    'title' => __('Guinea-Bissau', 'mint-crm')
                ],
                [
                    'code'  => 'GY',
                    'title' => __('Guyana', 'mint-crm')
                ],
                [
                    'code'  => 'HT',
                    'title' => __('Haiti', 'mint-crm')
                ],
                [
                    'code'  => 'HM',
                    'title' => __('Heard Island and McDonald Islands', 'mint-crm')
                ],
                [
                    'code'  => 'HN',
                    'title' => __('Honduras', 'mint-crm')
                ],
                [
                    'code'  => 'HK',
                    'title' => __('Hong Kong', 'mint-crm')
                ],
                [
                    'code'  => 'HU',
                    'title' => __('Hungary', 'mint-crm')
                ],
                [
                    'code'  => 'IS',
                    'title' => __('Iceland', 'mint-crm')
                ],
                [
                    'code'  => 'IN',
                    'title' => __('India', 'mint-crm')
                ],
                [
                    'code'  => 'ID',
                    'title' => __('Indonesia', 'mint-crm')
                ],
                [
                    'code'  => 'IR',
                    'title' => __('Iran', 'mint-crm')
                ],
                [
                    'code'  => 'IQ',
                    'title' => __('Iraq', 'mint-crm')
                ],
                [
                    'code'  => 'IE',
                    'title' => __('Ireland', 'mint-crm')
                ],
                [
                    'code'  => 'IM',
                    'title' => __('Isle of Man', 'mint-crm')
                ],
                [
                    'code'  => 'IL',
                    'title' => __('Israel', 'mint-crm')
                ],
                [
                    'code'  => 'IT',
                    'title' => __('Italy', 'mint-crm')
                ],
                [
                    'code'  => 'CI',
                    'title' => __('Ivory Coast', 'mint-crm')
                ],
                [
                    'code'  => 'JM',
                    'title' => __('Jamaica', 'mint-crm')
                ],
                [
                    'code'  => 'JP',
                    'title' => __('Japan', 'mint-crm')
                ],
                [
                    'code'  => 'JE',
                    'title' => __('Jersey', 'mint-crm')
                ],
                [
                    'code'  => 'JO',
                    'title' => __('Jordan', 'mint-crm')
                ],
                [
                    'code'  => 'KZ',
                    'title' => __('Kazakhstan', 'mint-crm')
                ],
                [
                    'code'  => 'KE',
                    'title' => __('Kenya', 'mint-crm')
                ],
                [
                    'code'  => 'KI',
                    'title' => __('Kiribati', 'mint-crm')
                ],
                [
                    'code'  => 'KW',
                    'title' => __('Kuwait', 'mint-crm')
                ],
                [
                    'code'  => 'XK',
                    'title' => __('Kosovo', 'mint-crm')
                ],
                [
                    'code'  => 'KG',
                    'title' => __('Kyrgyzstan', 'mint-crm')
                ],
                [
                    'code'  => 'LA',
                    'title' => __('Laos', 'mint-crm')
                ],
                [
                    'code'  => 'LV',
                    'title' => __('Latvia', 'mint-crm')
                ],
                [
                    'code'  => 'LB',
                    'title' => __('Lebanon', 'mint-crm')
                ],
                [
                    'code'  => 'LS',
                    'title' => __('Lesotho', 'mint-crm')
                ],
                [
                    'code'  => 'LR',
                    'title' => __('Liberia', 'mint-crm')
                ],
                [
                    'code'  => 'LY',
                    'title' => __('Libya', 'mint-crm')
                ],
                [
                    'code'  => 'LI',
                    'title' => __('Liechtenstein', 'mint-crm')
                ],
                [
                    'code'  => 'LT',
                    'title' => __('Lithuania', 'mint-crm')
                ],
                [
                    'code'  => 'LU',
                    'title' => __('Luxembourg', 'mint-crm')
                ],
                [
                    'code'  => 'MO',
                    'title' => __('Macao', 'mint-crm')
                ],
                [
                    'code'  => 'MK',
                    'title' => __('North Macedonia', 'mint-crm')
                ],
                [
                    'code'  => 'MG',
                    'title' => __('Madagascar', 'mint-crm')
                ],
                [
                    'code'  => 'MW',
                    'title' => __('Malawi', 'mint-crm')
                ],
                [
                    'code'  => 'MY',
                    'title' => __('Malaysia', 'mint-crm')
                ],
                [
                    'code'  => 'MV',
                    'title' => __('Maldives', 'mint-crm')
                ],
                [
                    'code'  => 'ML',
                    'title' => __('Mali', 'mint-crm')
                ],
                [
                    'code'  => 'MT',
                    'title' => __('Malta', 'mint-crm')
                ],
                [
                    'code'  => 'MH',
                    'title' => __('Marshall Islands', 'mint-crm')
                ],
                [
                    'code'  => 'MQ',
                    'title' => __('Martinique', 'mint-crm')
                ],
                [
                    'code'  => 'MR',
                    'title' => __('Mauritania', 'mint-crm')
                ],
                [
                    'code'  => 'MU',
                    'title' => __('Mauritius', 'mint-crm')
                ],
                [
                    'code'  => 'YT',
                    'title' => __('Mayotte', 'mint-crm')
                ],
                [
                    'code'  => 'MX',
                    'title' => __('Mexico', 'mint-crm')
                ],
                [
                    'code'  => 'FM',
                    'title' => __('Micronesia', 'mint-crm')
                ],
                [
                    'code'  => 'MD',
                    'title' => __('Moldova', 'mint-crm')
                ],
                [
                    'code'  => 'MC',
                    'title' => __('Monaco', 'mint-crm')
                ],
                [
                    'code'  => 'MN',
                    'title' => __('Mongolia', 'mint-crm')
                ],
                [
                    'code'  => 'ME',
                    'title' => __('Montenegro', 'mint-crm')
                ],
                [
                    'code'  => 'MS',
                    'title' => __('Montserrat', 'mint-crm')
                ],
                [
                    'code'  => 'MA',
                    'title' => __('Morocco', 'mint-crm')
                ],
                [
                    'code'  => 'MZ',
                    'title' => __('Mozambique', 'mint-crm')
                ],
                [
                    'code'  => 'MM',
                    'title' => __('Myanmar', 'mint-crm')
                ],
                [
                    'code'  => 'NA',
                    'title' => __('Namibia', 'mint-crm')
                ],
                [
                    'code'  => 'NR',
                    'title' => __('Nauru', 'mint-crm')
                ],
                [
                    'code'  => 'NP',
                    'title' => __('Nepal', 'mint-crm')
                ],
                [
                    'code'  => 'NL',
                    'title' => __('Netherlands', 'mint-crm')
                ],
                [
                    'code'  => 'NC',
                    'title' => __('New Caledonia', 'mint-crm')
                ],
                [
                    'code'  => 'NZ',
                    'title' => __('New Zealand', 'mint-crm')
                ],
                [
                    'code'  => 'NI',
                    'title' => __('Nicaragua', 'mint-crm')
                ],
                [
                    'code'  => 'NE',
                    'title' => __('Niger', 'mint-crm')
                ],
                [
                    'code'  => 'NG',
                    'title' => __('Nigeria', 'mint-crm')
                ],
                [
                    'code'  => 'NU',
                    'title' => __('Niue', 'mint-crm')
                ],
                [
                    'code'  => 'NF',
                    'title' => __('Norfolk Island', 'mint-crm')
                ],
                [
                    'code'  => 'MP',
                    'title' => __('Northern Mariana Islands', 'mint-crm')
                ],
                [
                    'code'  => 'KP',
                    'title' => __('North Korea', 'mint-crm')
                ],
                [
                    'code'  => 'NO',
                    'title' => __('Norway', 'mint-crm')
                ],
                [
                    'code'  => 'OM',
                    'title' => __('Oman', 'mint-crm')
                ],
                [
                    'code'  => 'PK',
                    'title' => __('Pakistan', 'mint-crm')
                ],
                [
                    'code'  => 'PS',
                    'title' => __('Palestinian Territory', 'mint-crm')
                ],
                [
                    'code'  => 'PA',
                    'title' => __('Panama', 'mint-crm')
                ],
                [
                    'code'  => 'PG',
                    'title' => __('Papua New Guinea', 'mint-crm')
                ],
                [
                    'code'  => 'PY',
                    'title' => __('Paraguay', 'mint-crm')
                ],
                [
                    'code'  => 'PE',
                    'title' => __('Peru', 'mint-crm')
                ],
                [
                    'code'  => 'PH',
                    'title' => __('Philippines', 'mint-crm')
                ],
                [
                    'code'  => 'PN',
                    'title' => __('Pitcairn', 'mint-crm')
                ],
                [
                    'code'  => 'PL',
                    'title' => __('Poland', 'mint-crm')
                ],
                [
                    'code'  => 'PT',
                    'title' => __('Portugal', 'mint-crm')
                ],
                [
                    'code'  => 'PR',
                    'title' => __('Puerto Rico', 'mint-crm')
                ],
                [
                    'code'  => 'QA',
                    'title' => __('Qatar', 'mint-crm')
                ],
                [
                    'code'  => 'RE',
                    'title' => __('Reunion', 'mint-crm')
                ],
                [
                    'code'  => 'RO',
                    'title' => __('Romania', 'mint-crm')
                ],
                [
                    'code'  => 'RU',
                    'title' => __('Russia', 'mint-crm')
                ],
                [
                    'code'  => 'RW',
                    'title' => __('Rwanda', 'mint-crm')
                ],
                [
                    'code'  => 'BL',
                    'title' => __('Saint Barth&eacute;lemy', 'mint-crm')
                ],
                [
                    'code'  => 'SH',
                    'title' => __('Saint Helena', 'mint-crm')
                ],
                [
                    'code'  => 'KN',
                    'title' => __('Saint Kitts and Nevis', 'mint-crm')
                ],
                [
                    'code'  => 'LC',
                    'title' => __('Saint Lucia', 'mint-crm')
                ],
                [
                    'code'  => 'MF',
                    'title' => __('Saint Martin (French part)', 'mint-crm')
                ],
                [
                    'code'  => 'SX',
                    'title' => __('Saint Martin (Dutch part)', 'mint-crm')
                ],
                [
                    'code'  => 'PM',
                    'title' => __('Saint Pierre and Miquelon', 'mint-crm')
                ],
                [
                    'code'  => 'VC',
                    'title' => __('Saint Vincent and the Grenadines', 'mint-crm')
                ],
                [
                    'code'  => 'SM',
                    'title' => __('San Marino', 'mint-crm')
                ],
                [
                    'code'  => 'ST',
                    'title' => __('S&atilde;o Tom&eacute; and Pr&iacute;ncipe', 'mint-crm')
                ],
                [
                    'code'  => 'SA',
                    'title' => __('Saudi Arabia', 'mint-crm')
                ],
                [
                    'code'  => 'SN',
                    'title' => __('Senegal', 'mint-crm')
                ],
                [
                    'code'  => 'RS',
                    'title' => __('Serbia', 'mint-crm')
                ],
                [
                    'code'  => 'SC',
                    'title' => __('Seychelles', 'mint-crm')
                ],
                [
                    'code'  => 'SL',
                    'title' => __('Sierra Leone', 'mint-crm')
                ],
                [
                    'code'  => 'SG',
                    'title' => __('Singapore', 'mint-crm')
                ],
                [
                    'code'  => 'SK',
                    'title' => __('Slovakia', 'mint-crm')
                ],
                [
                    'code'  => 'SI',
                    'title' => __('Slovenia', 'mint-crm')
                ],
                [
                    'code'  => 'SB',
                    'title' => __('Solomon Islands', 'mint-crm')
                ],
                [
                    'code'  => 'SO',
                    'title' => __('Somalia', 'mint-crm')
                ],
                [
                    'code'  => 'ZA',
                    'title' => __('South Africa', 'mint-crm')
                ],
                [
                    'code'  => 'GS',
                    'title' => __('South Georgia/Sandwich Islands', 'mint-crm')
                ],
                [
                    'code'  => 'KR',
                    'title' => __('South Korea', 'mint-crm')
                ],
                [
                    'code'  => 'SS',
                    'title' => __('South Sudan', 'mint-crm')
                ],
                [
                    'code'  => 'ES',
                    'title' => __('Spain', 'mint-crm')
                ],
                [
                    'code'  => 'LK',
                    'title' => __('Sri Lanka', 'mint-crm')
                ],
                [
                    'code'  => 'SD',
                    'title' => __('Sudan', 'mint-crm')
                ],
                [
                    'code'  => 'SR',
                    'title' => __('Suriname', 'mint-crm')
                ],
                [
                    'code'  => 'SJ',
                    'title' => __('Svalbard and Jan Mayen', 'mint-crm')
                ],
                [
                    'code'  => 'SZ',
                    'title' => __('Swaziland', 'mint-crm')
                ],
                [
                    'code'  => 'SE',
                    'title' => __('Sweden', 'mint-crm')
                ],
                [
                    'code'  => 'CH',
                    'title' => __('Switzerland', 'mint-crm')
                ],
                [
                    'code'  => 'SY',
                    'title' => __('Syria', 'mint-crm')
                ],
                [
                    'code'  => 'TW',
                    'title' => __('Taiwan', 'mint-crm')
                ],
                [
                    'code'  => 'TJ',
                    'title' => __('Tajikistan', 'mint-crm')
                ],
                [
                    'code'  => 'TZ',
                    'title' => __('Tanzania', 'mint-crm')
                ],
                [
                    'code'  => 'TH',
                    'title' => __('Thailand', 'mint-crm')
                ],
                [
                    'code'  => 'TL',
                    'title' => __('Timor-Leste', 'mint-crm')
                ],
                [
                    'code'  => 'TG',
                    'title' => __('Togo', 'mint-crm')
                ],
                [
                    'code'  => 'TK',
                    'title' => __('Tokelau', 'mint-crm')
                ],
                [
                    'code'  => 'TO',
                    'title' => __('Tonga', 'mint-crm')
                ],
                [
                    'code'  => 'TT',
                    'title' => __('Trinidad and Tobago', 'mint-crm')
                ],
                [
                    'code'  => 'TN',
                    'title' => __('Tunisia', 'mint-crm')
                ],
                [
                    'code'  => 'TR',
                    'title' => __('Turkey', 'mint-crm')
                ],
                [
                    'code'  => 'TM',
                    'title' => __('Turkmenistan', 'mint-crm')
                ],
                [
                    'code'  => 'TC',
                    'title' => __('Turks and Caicos Islands', 'mint-crm')
                ],
                [
                    'code'  => 'TV',
                    'title' => __('Tuvalu', 'mint-crm')
                ],
                [
                    'code'  => 'UG',
                    'title' => __('Uganda', 'mint-crm')
                ],
                [
                    'code'  => 'UA',
                    'title' => __('Ukraine', 'mint-crm')
                ],
                [
                    'code'  => 'AE',
                    'title' => __('United Arab Emirates', 'mint-crm')
                ],
                [
                    'code'  => 'GB',
                    'title' => __('United Kingdom (UK)', 'mint-crm')
                ],
                [
                    'code'  => 'US',
                    'title' => __('United States (US)', 'mint-crm')
                ],
                [
                    'code'  => 'UM',
                    'title' => __('United States (US) Minor Outlying Islands', 'mint-crm')
                ],
                [
                    'code'  => 'UY',
                    'title' => __('Uruguay', 'mint-crm')
                ],
                [
                    'code'  => 'UZ',
                    'title' => __('Uzbekistan', 'mint-crm')
                ],
                [
                    'code'  => 'VU',
                    'title' => __('Vanuatu', 'mint-crm')
                ],
                [
                    'code'  => 'VA',
                    'title' => __('Vatican', 'mint-crm')
                ],
                [
                    'code'      => 'VE',
                    'title' => __('Venezuela', 'mint-crm')
                ],
                [
                    'code'  => 'VN',
                    'title' => __('Vietnam', 'mint-crm')
                ],
                [
                    'code'  => 'VG',
                    'title' => __('Virgin Islands (British)', 'mint-crm')
                ],
                [
                    'code'  => 'VI',
                    'title' => __('Virgin Islands (US)', 'mint-crm')
                ],
                [
                    'code'  => 'WF',
                    'title' => __('Wallis and Futuna', 'mint-crm')
                ],
                [
                    'code'  => 'EH',
                    'title' => __('Western Sahara', 'mint-crm')
                ],
                [
                    'code'  => 'WS',
                    'title' => __('Samoa', 'mint-crm')
                ],
                [
                    'code'  => 'YE',
                    'title' => __('Yemen', 'mint-crm')
                ],
                [
                    'code'  => 'ZM',
                    'title' => __('Zambia', 'mint-crm')
                ],
                [
                    'code'  => 'ZW',
                    'title' => __('Zimbabwe', 'mint-crm')
                ],
            ];
    }


    /**
     * Return state list
     * 
     * @return array
     * @since 1.0.0
     */
    public static function get_country_state()
    {
        return array(
            'AF' => array(),
            'AL' => array( // Albanian states.
                'AL-01' => __( 'Berat', 'mintmrm' ),
                'AL-09' => __( 'Dibër', 'mintmrm' ),
                'AL-02' => __( 'Durrës', 'mintmrm' ),
                'AL-03' => __( 'Elbasan', 'mintmrm' ),
                'AL-04' => __( 'Fier', 'mintmrm' ),
                'AL-05' => __( 'Gjirokastër', 'mintmrm' ),
                'AL-06' => __( 'Korçë', 'mintmrm' ),
                'AL-07' => __( 'Kukës', 'mintmrm' ),
                'AL-08' => __( 'Lezhë', 'mintmrm' ),
                'AL-10' => __( 'Shkodër', 'mintmrm' ),
                'AL-11' => __( 'Tirana', 'mintmrm' ),
                'AL-12' => __( 'Vlorë', 'mintmrm' ),
            ),
            'AO' => array( // Angolan states.
                'BGO' => __( 'Bengo', 'mintmrm' ),
                'BLU' => __( 'Benguela', 'mintmrm' ),
                'BIE' => __( 'Bié', 'mintmrm' ),
                'CAB' => __( 'Cabinda', 'mintmrm' ),
                'CNN' => __( 'Cunene', 'mintmrm' ),
                'HUA' => __( 'Huambo', 'mintmrm' ),
                'HUI' => __( 'Huíla', 'mintmrm' ),
                'CCU' => __( 'Kuando Kubango', 'mintmrm' ),
                'CNO' => __( 'Kwanza-Norte', 'mintmrm' ),
                'CUS' => __( 'Kwanza-Sul', 'mintmrm' ),
                'LUA' => __( 'Luanda', 'mintmrm' ),
                'LNO' => __( 'Lunda-Norte', 'mintmrm' ),
                'LSU' => __( 'Lunda-Sul', 'mintmrm' ),
                'MAL' => __( 'Malanje', 'mintmrm' ),
                'MOX' => __( 'Moxico', 'mintmrm' ),
                'NAM' => __( 'Namibe', 'mintmrm' ),
                'UIG' => __( 'Uíge', 'mintmrm' ),
                'ZAI' => __( 'Zaire', 'mintmrm' ),
            ),
            'AR' => array( // Argentinian provinces.
                'C' => __( 'Ciudad Autónoma de Buenos Aires', 'mintmrm' ),
                'B' => __( 'Buenos Aires', 'mintmrm' ),
                'K' => __( 'Catamarca', 'mintmrm' ),
                'H' => __( 'Chaco', 'mintmrm' ),
                'U' => __( 'Chubut', 'mintmrm' ),
                'X' => __( 'Córdoba', 'mintmrm' ),
                'W' => __( 'Corrientes', 'mintmrm' ),
                'E' => __( 'Entre Ríos', 'mintmrm' ),
                'P' => __( 'Formosa', 'mintmrm' ),
                'Y' => __( 'Jujuy', 'mintmrm' ),
                'L' => __( 'La Pampa', 'mintmrm' ),
                'F' => __( 'La Rioja', 'mintmrm' ),
                'M' => __( 'Mendoza', 'mintmrm' ),
                'N' => __( 'Misiones', 'mintmrm' ),
                'Q' => __( 'Neuquén', 'mintmrm' ),
                'R' => __( 'Río Negro', 'mintmrm' ),
                'A' => __( 'Salta', 'mintmrm' ),
                'J' => __( 'San Juan', 'mintmrm' ),
                'D' => __( 'San Luis', 'mintmrm' ),
                'Z' => __( 'Santa Cruz', 'mintmrm' ),
                'S' => __( 'Santa Fe', 'mintmrm' ),
                'G' => __( 'Santiago del Estero', 'mintmrm' ),
                'V' => __( 'Tierra del Fuego', 'mintmrm' ),
                'T' => __( 'Tucumán', 'mintmrm' ),
            ),
            'AT' => array(),
            'AU' => array( // Australian states.
                'ACT' => __( 'Australian Capital Territory', 'mintmrm' ),
                'NSW' => __( 'New South Wales', 'mintmrm' ),
                'NT'  => __( 'Northern Territory', 'mintmrm' ),
                'QLD' => __( 'Queensland', 'mintmrm' ),
                'SA'  => __( 'South Australia', 'mintmrm' ),
                'TAS' => __( 'Tasmania', 'mintmrm' ),
                'VIC' => __( 'Victoria', 'mintmrm' ),
                'WA'  => __( 'Western Australia', 'mintmrm' ),
            ),
            'AX' => array(),
            'BD' => array( // Bangladeshi districts.
                'BD-05' => __( 'Bagerhat', 'mintmrm' ),
                'BD-01' => __( 'Bandarban', 'mintmrm' ),
                'BD-02' => __( 'Barguna', 'mintmrm' ),
                'BD-06' => __( 'Barishal', 'mintmrm' ),
                'BD-07' => __( 'Bhola', 'mintmrm' ),
                'BD-03' => __( 'Bogura', 'mintmrm' ),
                'BD-04' => __( 'Brahmanbaria', 'mintmrm' ),
                'BD-09' => __( 'Chandpur', 'mintmrm' ),
                'BD-10' => __( 'Chattogram', 'mintmrm' ),
                'BD-12' => __( 'Chuadanga', 'mintmrm' ),
                'BD-11' => __( "Cox's Bazar", 'mintmrm' ),
                'BD-08' => __( 'Cumilla', 'mintmrm' ),
                'BD-13' => __( 'Dhaka', 'mintmrm' ),
                'BD-14' => __( 'Dinajpur', 'mintmrm' ),
                'BD-15' => __( 'Faridpur ', 'mintmrm' ),
                'BD-16' => __( 'Feni', 'mintmrm' ),
                'BD-19' => __( 'Gaibandha', 'mintmrm' ),
                'BD-18' => __( 'Gazipur', 'mintmrm' ),
                'BD-17' => __( 'Gopalganj', 'mintmrm' ),
                'BD-20' => __( 'Habiganj', 'mintmrm' ),
                'BD-21' => __( 'Jamalpur', 'mintmrm' ),
                'BD-22' => __( 'Jashore', 'mintmrm' ),
                'BD-25' => __( 'Jhalokati', 'mintmrm' ),
                'BD-23' => __( 'Jhenaidah', 'mintmrm' ),
                'BD-24' => __( 'Joypurhat', 'mintmrm' ),
                'BD-29' => __( 'Khagrachhari', 'mintmrm' ),
                'BD-27' => __( 'Khulna', 'mintmrm' ),
                'BD-26' => __( 'Kishoreganj', 'mintmrm' ),
                'BD-28' => __( 'Kurigram', 'mintmrm' ),
                'BD-30' => __( 'Kushtia', 'mintmrm' ),
                'BD-31' => __( 'Lakshmipur', 'mintmrm' ),
                'BD-32' => __( 'Lalmonirhat', 'mintmrm' ),
                'BD-36' => __( 'Madaripur', 'mintmrm' ),
                'BD-37' => __( 'Magura', 'mintmrm' ),
                'BD-33' => __( 'Manikganj ', 'mintmrm' ),
                'BD-39' => __( 'Meherpur', 'mintmrm' ),
                'BD-38' => __( 'Moulvibazar', 'mintmrm' ),
                'BD-35' => __( 'Munshiganj', 'mintmrm' ),
                'BD-34' => __( 'Mymensingh', 'mintmrm' ),
                'BD-48' => __( 'Naogaon', 'mintmrm' ),
                'BD-43' => __( 'Narail', 'mintmrm' ),
                'BD-40' => __( 'Narayanganj', 'mintmrm' ),
                'BD-42' => __( 'Narsingdi', 'mintmrm' ),
                'BD-44' => __( 'Natore', 'mintmrm' ),
                'BD-45' => __( 'Nawabganj', 'mintmrm' ),
                'BD-41' => __( 'Netrakona', 'mintmrm' ),
                'BD-46' => __( 'Nilphamari', 'mintmrm' ),
                'BD-47' => __( 'Noakhali', 'mintmrm' ),
                'BD-49' => __( 'Pabna', 'mintmrm' ),
                'BD-52' => __( 'Panchagarh', 'mintmrm' ),
                'BD-51' => __( 'Patuakhali', 'mintmrm' ),
                'BD-50' => __( 'Pirojpur', 'mintmrm' ),
                'BD-53' => __( 'Rajbari', 'mintmrm' ),
                'BD-54' => __( 'Rajshahi', 'mintmrm' ),
                'BD-56' => __( 'Rangamati', 'mintmrm' ),
                'BD-55' => __( 'Rangpur', 'mintmrm' ),
                'BD-58' => __( 'Satkhira', 'mintmrm' ),
                'BD-62' => __( 'Shariatpur', 'mintmrm' ),
                'BD-57' => __( 'Sherpur', 'mintmrm' ),
                'BD-59' => __( 'Sirajganj', 'mintmrm' ),
                'BD-61' => __( 'Sunamganj', 'mintmrm' ),
                'BD-60' => __( 'Sylhet', 'mintmrm' ),
                'BD-63' => __( 'Tangail', 'mintmrm' ),
                'BD-64' => __( 'Thakurgaon', 'mintmrm' ),
            ),
            'BE' => array(),
            'BG' => array( // Bulgarian states.
                'BG-01' => __( 'Blagoevgrad', 'mintmrm' ),
                'BG-02' => __( 'Burgas', 'mintmrm' ),
                'BG-08' => __( 'Dobrich', 'mintmrm' ),
                'BG-07' => __( 'Gabrovo', 'mintmrm' ),
                'BG-26' => __( 'Haskovo', 'mintmrm' ),
                'BG-09' => __( 'Kardzhali', 'mintmrm' ),
                'BG-10' => __( 'Kyustendil', 'mintmrm' ),
                'BG-11' => __( 'Lovech', 'mintmrm' ),
                'BG-12' => __( 'Montana', 'mintmrm' ),
                'BG-13' => __( 'Pazardzhik', 'mintmrm' ),
                'BG-14' => __( 'Pernik', 'mintmrm' ),
                'BG-15' => __( 'Pleven', 'mintmrm' ),
                'BG-16' => __( 'Plovdiv', 'mintmrm' ),
                'BG-17' => __( 'Razgrad', 'mintmrm' ),
                'BG-18' => __( 'Ruse', 'mintmrm' ),
                'BG-27' => __( 'Shumen', 'mintmrm' ),
                'BG-19' => __( 'Silistra', 'mintmrm' ),
                'BG-20' => __( 'Sliven', 'mintmrm' ),
                'BG-21' => __( 'Smolyan', 'mintmrm' ),
                'BG-23' => __( 'Sofia District', 'mintmrm' ),
                'BG-22' => __( 'Sofia', 'mintmrm' ),
                'BG-24' => __( 'Stara Zagora', 'mintmrm' ),
                'BG-25' => __( 'Targovishte', 'mintmrm' ),
                'BG-03' => __( 'Varna', 'mintmrm' ),
                'BG-04' => __( 'Veliko Tarnovo', 'mintmrm' ),
                'BG-05' => __( 'Vidin', 'mintmrm' ),
                'BG-06' => __( 'Vratsa', 'mintmrm' ),
                'BG-28' => __( 'Yambol', 'mintmrm' ),
            ),
            'BH' => array(),
            'BI' => array(),
            'BJ' => array( // Beninese states.
                'AL' => __( 'Alibori', 'mintmrm' ),
                'AK' => __( 'Atakora', 'mintmrm' ),
                'AQ' => __( 'Atlantique', 'mintmrm' ),
                'BO' => __( 'Borgou', 'mintmrm' ),
                'CO' => __( 'Collines', 'mintmrm' ),
                'KO' => __( 'Kouffo', 'mintmrm' ),
                'DO' => __( 'Donga', 'mintmrm' ),
                'LI' => __( 'Littoral', 'mintmrm' ),
                'MO' => __( 'Mono', 'mintmrm' ),
                'OU' => __( 'Ouémé', 'mintmrm' ),
                'PL' => __( 'Plateau', 'mintmrm' ),
                'ZO' => __( 'Zou', 'mintmrm' ),
            ),
            'BO' => array( // Bolivian states.
                'BO-B' => __( 'Beni', 'mintmrm' ),
                'BO-H' => __( 'Chuquisaca', 'mintmrm' ),
                'BO-C' => __( 'Cochabamba', 'mintmrm' ),
                'BO-L' => __( 'La Paz', 'mintmrm' ),
                'BO-O' => __( 'Oruro', 'mintmrm' ),
                'BO-N' => __( 'Pando', 'mintmrm' ),
                'BO-P' => __( 'Potosí', 'mintmrm' ),
                'BO-S' => __( 'Santa Cruz', 'mintmrm' ),
                'BO-T' => __( 'Tarija', 'mintmrm' ),
            ),
            'BR' => array( // Brazilian states.
                'AC' => __( 'Acre', 'mintmrm' ),
                'AL' => __( 'Alagoas', 'mintmrm' ),
                'AP' => __( 'Amapá', 'mintmrm' ),
                'AM' => __( 'Amazonas', 'mintmrm' ),
                'BA' => __( 'Bahia', 'mintmrm' ),
                'CE' => __( 'Ceará', 'mintmrm' ),
                'DF' => __( 'Distrito Federal', 'mintmrm' ),
                'ES' => __( 'Espírito Santo', 'mintmrm' ),
                'GO' => __( 'Goiás', 'mintmrm' ),
                'MA' => __( 'Maranhão', 'mintmrm' ),
                'MT' => __( 'Mato Grosso', 'mintmrm' ),
                'MS' => __( 'Mato Grosso do Sul', 'mintmrm' ),
                'MG' => __( 'Minas Gerais', 'mintmrm' ),
                'PA' => __( 'Pará', 'mintmrm' ),
                'PB' => __( 'Paraíba', 'mintmrm' ),
                'PR' => __( 'Paraná', 'mintmrm' ),
                'PE' => __( 'Pernambuco', 'mintmrm' ),
                'PI' => __( 'Piauí', 'mintmrm' ),
                'RJ' => __( 'Rio de Janeiro', 'mintmrm' ),
                'RN' => __( 'Rio Grande do Norte', 'mintmrm' ),
                'RS' => __( 'Rio Grande do Sul', 'mintmrm' ),
                'RO' => __( 'Rondônia', 'mintmrm' ),
                'RR' => __( 'Roraima', 'mintmrm' ),
                'SC' => __( 'Santa Catarina', 'mintmrm' ),
                'SP' => __( 'São Paulo', 'mintmrm' ),
                'SE' => __( 'Sergipe', 'mintmrm' ),
                'TO' => __( 'Tocantins', 'mintmrm' ),
            ),
            'CA' => array( // Canadian states.
                'AB' => __( 'Alberta', 'mintmrm' ),
                'BC' => __( 'British Columbia', 'mintmrm' ),
                'MB' => __( 'Manitoba', 'mintmrm' ),
                'NB' => __( 'New Brunswick', 'mintmrm' ),
                'NL' => __( 'Newfoundland and Labrador', 'mintmrm' ),
                'NT' => __( 'Northwest Territories', 'mintmrm' ),
                'NS' => __( 'Nova Scotia', 'mintmrm' ),
                'NU' => __( 'Nunavut', 'mintmrm' ),
                'ON' => __( 'Ontario', 'mintmrm' ),
                'PE' => __( 'Prince Edward Island', 'mintmrm' ),
                'QC' => __( 'Quebec', 'mintmrm' ),
                'SK' => __( 'Saskatchewan', 'mintmrm' ),
                'YT' => __( 'Yukon Territory', 'mintmrm' ),
            ),
            'CH' => array( // Swiss cantons.
                'AG' => __( 'Aargau', 'mintmrm' ),
                'AR' => __( 'Appenzell Ausserrhoden', 'mintmrm' ),
                'AI' => __( 'Appenzell Innerrhoden', 'mintmrm' ),
                'BL' => __( 'Basel-Landschaft', 'mintmrm' ),
                'BS' => __( 'Basel-Stadt', 'mintmrm' ),
                'BE' => __( 'Bern', 'mintmrm' ),
                'FR' => __( 'Fribourg', 'mintmrm' ),
                'GE' => __( 'Geneva', 'mintmrm' ),
                'GL' => __( 'Glarus', 'mintmrm' ),
                'GR' => __( 'Graubünden', 'mintmrm' ),
                'JU' => __( 'Jura', 'mintmrm' ),
                'LU' => __( 'Luzern', 'mintmrm' ),
                'NE' => __( 'Neuchâtel', 'mintmrm' ),
                'NW' => __( 'Nidwalden', 'mintmrm' ),
                'OW' => __( 'Obwalden', 'mintmrm' ),
                'SH' => __( 'Schaffhausen', 'mintmrm' ),
                'SZ' => __( 'Schwyz', 'mintmrm' ),
                'SO' => __( 'Solothurn', 'mintmrm' ),
                'SG' => __( 'St. Gallen', 'mintmrm' ),
                'TG' => __( 'Thurgau', 'mintmrm' ),
                'TI' => __( 'Ticino', 'mintmrm' ),
                'UR' => __( 'Uri', 'mintmrm' ),
                'VS' => __( 'Valais', 'mintmrm' ),
                'VD' => __( 'Vaud', 'mintmrm' ),
                'ZG' => __( 'Zug', 'mintmrm' ),
                'ZH' => __( 'Zürich', 'mintmrm' ),
            ),
            'CL' => array( // Chilean states.
                'CL-AI' => __( 'Aisén del General Carlos Ibañez del Campo', 'mintmrm' ),
                'CL-AN' => __( 'Antofagasta', 'mintmrm' ),
                'CL-AP' => __( 'Arica y Parinacota', 'mintmrm' ),
                'CL-AR' => __( 'La Araucanía', 'mintmrm' ),
                'CL-AT' => __( 'Atacama', 'mintmrm' ),
                'CL-BI' => __( 'Biobío', 'mintmrm' ),
                'CL-CO' => __( 'Coquimbo', 'mintmrm' ),
                'CL-LI' => __( 'Libertador General Bernardo O\'Higgins', 'mintmrm' ),
                'CL-LL' => __( 'Los Lagos', 'mintmrm' ),
                'CL-LR' => __( 'Los Ríos', 'mintmrm' ),
                'CL-MA' => __( 'Magallanes', 'mintmrm' ),
                'CL-ML' => __( 'Maule', 'mintmrm' ),
                'CL-NB' => __( 'Ñuble', 'mintmrm' ),
                'CL-RM' => __( 'Región Metropolitana de Santiago', 'mintmrm' ),
                'CL-TA' => __( 'Tarapacá', 'mintmrm' ),
                'CL-VS' => __( 'Valparaíso', 'mintmrm' ),
            ),
            'CN' => array( // Chinese states.
                'CN1'  => __( 'Yunnan / 云南', 'mintmrm' ),
                'CN2'  => __( 'Beijing / 北京', 'mintmrm' ),
                'CN3'  => __( 'Tianjin / 天津', 'mintmrm' ),
                'CN4'  => __( 'Hebei / 河北', 'mintmrm' ),
                'CN5'  => __( 'Shanxi / 山西', 'mintmrm' ),
                'CN6'  => __( 'Inner Mongolia / 內蒙古', 'mintmrm' ),
                'CN7'  => __( 'Liaoning / 辽宁', 'mintmrm' ),
                'CN8'  => __( 'Jilin / 吉林', 'mintmrm' ),
                'CN9'  => __( 'Heilongjiang / 黑龙江', 'mintmrm' ),
                'CN10' => __( 'Shanghai / 上海', 'mintmrm' ),
                'CN11' => __( 'Jiangsu / 江苏', 'mintmrm' ),
                'CN12' => __( 'Zhejiang / 浙江', 'mintmrm' ),
                'CN13' => __( 'Anhui / 安徽', 'mintmrm' ),
                'CN14' => __( 'Fujian / 福建', 'mintmrm' ),
                'CN15' => __( 'Jiangxi / 江西', 'mintmrm' ),
                'CN16' => __( 'Shandong / 山东', 'mintmrm' ),
                'CN17' => __( 'Henan / 河南', 'mintmrm' ),
                'CN18' => __( 'Hubei / 湖北', 'mintmrm' ),
                'CN19' => __( 'Hunan / 湖南', 'mintmrm' ),
                'CN20' => __( 'Guangdong / 广东', 'mintmrm' ),
                'CN21' => __( 'Guangxi Zhuang / 广西壮族', 'mintmrm' ),
                'CN22' => __( 'Hainan / 海南', 'mintmrm' ),
                'CN23' => __( 'Chongqing / 重庆', 'mintmrm' ),
                'CN24' => __( 'Sichuan / 四川', 'mintmrm' ),
                'CN25' => __( 'Guizhou / 贵州', 'mintmrm' ),
                'CN26' => __( 'Shaanxi / 陕西', 'mintmrm' ),
                'CN27' => __( 'Gansu / 甘肃', 'mintmrm' ),
                'CN28' => __( 'Qinghai / 青海', 'mintmrm' ),
                'CN29' => __( 'Ningxia Hui / 宁夏', 'mintmrm' ),
                'CN30' => __( 'Macao / 澳门', 'mintmrm' ),
                'CN31' => __( 'Tibet / 西藏', 'mintmrm' ),
                'CN32' => __( 'Xinjiang / 新疆', 'mintmrm' ),
            ),
            'CO' => array( // Colombian states.
                'CO-AMA' => __( 'Amazonas', 'mintmrm' ),
                'CO-ANT' => __( 'Antioquia', 'mintmrm' ),
                'CO-ARA' => __( 'Arauca', 'mintmrm' ),
                'CO-ATL' => __( 'Atlántico', 'mintmrm' ),
                'CO-BOL' => __( 'Bolívar', 'mintmrm' ),
                'CO-BOY' => __( 'Boyacá', 'mintmrm' ),
                'CO-CAL' => __( 'Caldas', 'mintmrm' ),
                'CO-CAQ' => __( 'Caquetá', 'mintmrm' ),
                'CO-CAS' => __( 'Casanare', 'mintmrm' ),
                'CO-CAU' => __( 'Cauca', 'mintmrm' ),
                'CO-CES' => __( 'Cesar', 'mintmrm' ),
                'CO-CHO' => __( 'Chocó', 'mintmrm' ),
                'CO-COR' => __( 'Córdoba', 'mintmrm' ),
                'CO-CUN' => __( 'Cundinamarca', 'mintmrm' ),
                'CO-DC' => __( 'Capital District', 'mintmrm' ),
                'CO-GUA' => __( 'Guainía', 'mintmrm' ),
                'CO-GUV' => __( 'Guaviare', 'mintmrm' ),
                'CO-HUI' => __( 'Huila', 'mintmrm' ),
                'CO-LAG' => __( 'La Guajira', 'mintmrm' ),
                'CO-MAG' => __( 'Magdalena', 'mintmrm' ),
                'CO-MET' => __( 'Meta', 'mintmrm' ),
                'CO-NAR' => __( 'Nariño', 'mintmrm' ),
                'CO-NSA' => __( 'Norte de Santander', 'mintmrm' ),
                'CO-PUT' => __( 'Putumayo', 'mintmrm' ),
                'CO-QUI' => __( 'Quindío', 'mintmrm' ),
                'CO-RIS' => __( 'Risaralda', 'mintmrm' ),
                'CO-SAN' => __( 'Santander', 'mintmrm' ),
                'CO-SAP' => __( 'San Andrés & Providencia', 'mintmrm' ),
                'CO-SUC' => __( 'Sucre', 'mintmrm' ),
                'CO-TOL' => __( 'Tolima', 'mintmrm' ),
                'CO-VAC' => __( 'Valle del Cauca', 'mintmrm' ),
                'CO-VAU' => __( 'Vaupés', 'mintmrm' ),
                'CO-VID' => __( 'Vichada', 'mintmrm' ),
            ),
            'CR' => array( // Costa Rican states.
                'CR-A' => __( 'Alajuela', 'mintmrm' ),
                'CR-C' => __( 'Cartago', 'mintmrm' ),
                'CR-G' => __( 'Guanacaste', 'mintmrm' ),
                'CR-H' => __( 'Heredia', 'mintmrm' ),
                'CR-L' => __( 'Limón', 'mintmrm' ),
                'CR-P' => __( 'Puntarenas', 'mintmrm' ),
                'CR-SJ' => __( 'San José', 'mintmrm' ),
            ),
            'CZ' => array(),
            'DE' => array( // German states.
                'DE-BW' => __( 'Baden-Württemberg', 'mintmrm' ),
                'DE-BY' => __( 'Bavaria', 'mintmrm' ),
                'DE-BE' => __( 'Berlin', 'mintmrm' ),
                'DE-BB' => __( 'Brandenburg', 'mintmrm' ),
                'DE-HB' => __( 'Bremen', 'mintmrm' ),
                'DE-HH' => __( 'Hamburg', 'mintmrm' ),
                'DE-HE' => __( 'Hesse', 'mintmrm' ),
                'DE-MV' => __( 'Mecklenburg-Vorpommern', 'mintmrm' ),
                'DE-NI' => __( 'Lower Saxony', 'mintmrm' ),
                'DE-NW' => __( 'North Rhine-Westphalia', 'mintmrm' ),
                'DE-RP' => __( 'Rhineland-Palatinate', 'mintmrm' ),
                'DE-SL' => __( 'Saarland', 'mintmrm' ),
                'DE-SN' => __( 'Saxony', 'mintmrm' ),
                'DE-ST' => __( 'Saxony-Anhalt', 'mintmrm' ),
                'DE-SH' => __( 'Schleswig-Holstein', 'mintmrm' ),
                'DE-TH' => __( 'Thuringia', 'mintmrm' ),
            ),
            'DK' => array(),
            'DO' => array( // Dominican states.
                'DO-01' => __( 'Distrito Nacional', 'mintmrm' ),
                'DO-02' => __( 'Azua', 'mintmrm' ),
                'DO-03' => __( 'Baoruco', 'mintmrm' ),
                'DO-04' => __( 'Barahona', 'mintmrm' ),
                'DO-33' => __( 'Cibao Nordeste', 'mintmrm' ),
                'DO-34' => __( 'Cibao Noroeste', 'mintmrm' ),
                'DO-35' => __( 'Cibao Norte', 'mintmrm' ),
                'DO-36' => __( 'Cibao Sur', 'mintmrm' ),
                'DO-05' => __( 'Dajabón', 'mintmrm' ),
                'DO-06' => __( 'Duarte', 'mintmrm' ),
                'DO-08' => __( 'El Seibo', 'mintmrm' ),
                'DO-37' => __( 'El Valle', 'mintmrm' ),
                'DO-07' => __( 'Elías Piña', 'mintmrm' ),
                'DO-38' => __( 'Enriquillo', 'mintmrm' ),
                'DO-09' => __( 'Espaillat', 'mintmrm' ),
                'DO-30' => __( 'Hato Mayor', 'mintmrm' ),
                'DO-19' => __( 'Hermanas Mirabal', 'mintmrm' ),
                'DO-39' => __( 'Higüamo', 'mintmrm' ),
                'DO-10' => __( 'Independencia', 'mintmrm' ),
                'DO-11' => __( 'La Altagracia', 'mintmrm' ),
                'DO-12' => __( 'La Romana', 'mintmrm' ),
                'DO-13' => __( 'La Vega', 'mintmrm' ),
                'DO-14' => __( 'María Trinidad Sánchez', 'mintmrm' ),
                'DO-28' => __( 'Monseñor Nouel', 'mintmrm' ),
                'DO-15' => __( 'Monte Cristi', 'mintmrm' ),
                'DO-29' => __( 'Monte Plata', 'mintmrm' ),
                'DO-40' => __( 'Ozama', 'mintmrm' ),
                'DO-16' => __( 'Pedernales', 'mintmrm' ),
                'DO-17' => __( 'Peravia', 'mintmrm' ),
                'DO-18' => __( 'Puerto Plata', 'mintmrm' ),
                'DO-20' => __( 'Samaná', 'mintmrm' ),
                'DO-21' => __( 'San Cristóbal', 'mintmrm' ),
                'DO-31' => __( 'San José de Ocoa', 'mintmrm' ),
                'DO-22' => __( 'San Juan', 'mintmrm' ),
                'DO-23' => __( 'San Pedro de Macorís', 'mintmrm' ),
                'DO-24' => __( 'Sánchez Ramírez', 'mintmrm' ),
                'DO-25' => __( 'Santiago', 'mintmrm' ),
                'DO-26' => __( 'Santiago Rodríguez', 'mintmrm' ),
                'DO-32' => __( 'Santo Domingo', 'mintmrm' ),
                'DO-41' => __( 'Valdesia', 'mintmrm' ),
                'DO-27' => __( 'Valverde', 'mintmrm' ),
                'DO-42' => __( 'Yuma', 'mintmrm' ),
            ),
            'DZ' => array( // Algerian states.
                'DZ-01' => __( 'Adrar', 'mintmrm' ),
                'DZ-02' => __( 'Chlef', 'mintmrm' ),
                'DZ-03' => __( 'Laghouat', 'mintmrm' ),
                'DZ-04' => __( 'Oum El Bouaghi', 'mintmrm' ),
                'DZ-05' => __( 'Batna', 'mintmrm' ),
                'DZ-06' => __( 'Béjaïa', 'mintmrm' ),
                'DZ-07' => __( 'Biskra', 'mintmrm' ),
                'DZ-08' => __( 'Béchar', 'mintmrm' ),
                'DZ-09' => __( 'Blida', 'mintmrm' ),
                'DZ-10' => __( 'Bouira', 'mintmrm' ),
                'DZ-11' => __( 'Tamanghasset', 'mintmrm' ),
                'DZ-12' => __( 'Tébessa', 'mintmrm' ),
                'DZ-13' => __( 'Tlemcen', 'mintmrm' ),
                'DZ-14' => __( 'Tiaret', 'mintmrm' ),
                'DZ-15' => __( 'Tizi Ouzou', 'mintmrm' ),
                'DZ-16' => __( 'Algiers', 'mintmrm' ),
                'DZ-17' => __( 'Djelfa', 'mintmrm' ),
                'DZ-18' => __( 'Jijel', 'mintmrm' ),
                'DZ-19' => __( 'Sétif', 'mintmrm' ),
                'DZ-20' => __( 'Saïda', 'mintmrm' ),
                'DZ-21' => __( 'Skikda', 'mintmrm' ),
                'DZ-22' => __( 'Sidi Bel Abbès', 'mintmrm' ),
                'DZ-23' => __( 'Annaba', 'mintmrm' ),
                'DZ-24' => __( 'Guelma', 'mintmrm' ),
                'DZ-25' => __( 'Constantine', 'mintmrm' ),
                'DZ-26' => __( 'Médéa', 'mintmrm' ),
                'DZ-27' => __( 'Mostaganem', 'mintmrm' ),
                'DZ-28' => __( 'M’Sila', 'mintmrm' ),
                'DZ-29' => __( 'Mascara', 'mintmrm' ),
                'DZ-30' => __( 'Ouargla', 'mintmrm' ),
                'DZ-31' => __( 'Oran', 'mintmrm' ),
                'DZ-32' => __( 'El Bayadh', 'mintmrm' ),
                'DZ-33' => __( 'Illizi', 'mintmrm' ),
                'DZ-34' => __( 'Bordj Bou Arréridj', 'mintmrm' ),
                'DZ-35' => __( 'Boumerdès', 'mintmrm' ),
                'DZ-36' => __( 'El Tarf', 'mintmrm' ),
                'DZ-37' => __( 'Tindouf', 'mintmrm' ),
                'DZ-38' => __( 'Tissemsilt', 'mintmrm' ),
                'DZ-39' => __( 'El Oued', 'mintmrm' ),
                'DZ-40' => __( 'Khenchela', 'mintmrm' ),
                'DZ-41' => __( 'Souk Ahras', 'mintmrm' ),
                'DZ-42' => __( 'Tipasa', 'mintmrm' ),
                'DZ-43' => __( 'Mila', 'mintmrm' ),
                'DZ-44' => __( 'Aïn Defla', 'mintmrm' ),
                'DZ-45' => __( 'Naama', 'mintmrm' ),
                'DZ-46' => __( 'Aïn Témouchent', 'mintmrm' ),
                'DZ-47' => __( 'Ghardaïa', 'mintmrm' ),
                'DZ-48' => __( 'Relizane', 'mintmrm' ),
            ),
            'EE' => array(),
            'EC' => array( // Ecuadorian states.
                'EC-A' => __( 'Azuay', 'mintmrm' ),
                'EC-B' => __( 'Bolívar', 'mintmrm' ),
                'EC-F' => __( 'Cañar', 'mintmrm' ),
                'EC-C' => __( 'Carchi', 'mintmrm' ),
                'EC-H' => __( 'Chimborazo', 'mintmrm' ),
                'EC-X' => __( 'Cotopaxi', 'mintmrm' ),
                'EC-O' => __( 'El Oro', 'mintmrm' ),
                'EC-E' => __( 'Esmeraldas', 'mintmrm' ),
                'EC-W' => __( 'Galápagos', 'mintmrm' ),
                'EC-G' => __( 'Guayas', 'mintmrm' ),
                'EC-I' => __( 'Imbabura', 'mintmrm' ),
                'EC-L' => __( 'Loja', 'mintmrm' ),
                'EC-R' => __( 'Los Ríos', 'mintmrm' ),
                'EC-M' => __( 'Manabí', 'mintmrm' ),
                'EC-S' => __( 'Morona-Santiago', 'mintmrm' ),
                'EC-N' => __( 'Napo', 'mintmrm' ),
                'EC-D' => __( 'Orellana', 'mintmrm' ),
                'EC-Y' => __( 'Pastaza', 'mintmrm' ),
                'EC-P' => __( 'Pichincha', 'mintmrm' ),
                'EC-SE' => __( 'Santa Elena', 'mintmrm' ),
                'EC-SD' => __( 'Santo Domingo de los Tsáchilas', 'mintmrm' ),
                'EC-U' => __( 'Sucumbíos', 'mintmrm' ),
                'EC-T' => __( 'Tungurahua', 'mintmrm' ),
                'EC-Z' => __( 'Zamora-Chinchipe', 'mintmrm' ),
            ),
            'EG' => array( // Egyptian states.
                'EGALX' => __( 'Alexandria', 'mintmrm' ),
                'EGASN' => __( 'Aswan', 'mintmrm' ),
                'EGAST' => __( 'Asyut', 'mintmrm' ),
                'EGBA'  => __( 'Red Sea', 'mintmrm' ),
                'EGBH'  => __( 'Beheira', 'mintmrm' ),
                'EGBNS' => __( 'Beni Suef', 'mintmrm' ),
                'EGC'   => __( 'Cairo', 'mintmrm' ),
                'EGDK'  => __( 'Dakahlia', 'mintmrm' ),
                'EGDT'  => __( 'Damietta', 'mintmrm' ),
                'EGFYM' => __( 'Faiyum', 'mintmrm' ),
                'EGGH'  => __( 'Gharbia', 'mintmrm' ),
                'EGGZ'  => __( 'Giza', 'mintmrm' ),
                'EGIS'  => __( 'Ismailia', 'mintmrm' ),
                'EGJS'  => __( 'South Sinai', 'mintmrm' ),
                'EGKB'  => __( 'Qalyubia', 'mintmrm' ),
                'EGKFS' => __( 'Kafr el-Sheikh', 'mintmrm' ),
                'EGKN'  => __( 'Qena', 'mintmrm' ),
                'EGLX'  => __( 'Luxor', 'mintmrm' ),
                'EGMN'  => __( 'Minya', 'mintmrm' ),
                'EGMNF' => __( 'Monufia', 'mintmrm' ),
                'EGMT'  => __( 'Matrouh', 'mintmrm' ),
                'EGPTS' => __( 'Port Said', 'mintmrm' ),
                'EGSHG' => __( 'Sohag', 'mintmrm' ),
                'EGSHR' => __( 'Al Sharqia', 'mintmrm' ),
                'EGSIN' => __( 'North Sinai', 'mintmrm' ),
                'EGSUZ' => __( 'Suez', 'mintmrm' ),
                'EGWAD' => __( 'New Valley', 'mintmrm' ),
            ),
            'ES' => array( // Spanish states.
                'C'  => __( 'A Coruña', 'mintmrm' ),
                'VI' => __( 'Araba/Álava', 'mintmrm' ),
                'AB' => __( 'Albacete', 'mintmrm' ),
                'A'  => __( 'Alicante', 'mintmrm' ),
                'AL' => __( 'Almería', 'mintmrm' ),
                'O'  => __( 'Asturias', 'mintmrm' ),
                'AV' => __( 'Ávila', 'mintmrm' ),
                'BA' => __( 'Badajoz', 'mintmrm' ),
                'PM' => __( 'Baleares', 'mintmrm' ),
                'B'  => __( 'Barcelona', 'mintmrm' ),
                'BU' => __( 'Burgos', 'mintmrm' ),
                'CC' => __( 'Cáceres', 'mintmrm' ),
                'CA' => __( 'Cádiz', 'mintmrm' ),
                'S'  => __( 'Cantabria', 'mintmrm' ),
                'CS' => __( 'Castellón', 'mintmrm' ),
                'CE' => __( 'Ceuta', 'mintmrm' ),
                'CR' => __( 'Ciudad Real', 'mintmrm' ),
                'CO' => __( 'Córdoba', 'mintmrm' ),
                'CU' => __( 'Cuenca', 'mintmrm' ),
                'GI' => __( 'Girona', 'mintmrm' ),
                'GR' => __( 'Granada', 'mintmrm' ),
                'GU' => __( 'Guadalajara', 'mintmrm' ),
                'SS' => __( 'Gipuzkoa', 'mintmrm' ),
                'H'  => __( 'Huelva', 'mintmrm' ),
                'HU' => __( 'Huesca', 'mintmrm' ),
                'J'  => __( 'Jaén', 'mintmrm' ),
                'LO' => __( 'La Rioja', 'mintmrm' ),
                'GC' => __( 'Las Palmas', 'mintmrm' ),
                'LE' => __( 'León', 'mintmrm' ),
                'L'  => __( 'Lleida', 'mintmrm' ),
                'LU' => __( 'Lugo', 'mintmrm' ),
                'M'  => __( 'Madrid', 'mintmrm' ),
                'MA' => __( 'Málaga', 'mintmrm' ),
                'ML' => __( 'Melilla', 'mintmrm' ),
                'MU' => __( 'Murcia', 'mintmrm' ),
                'NA' => __( 'Navarra', 'mintmrm' ),
                'OR' => __( 'Ourense', 'mintmrm' ),
                'P'  => __( 'Palencia', 'mintmrm' ),
                'PO' => __( 'Pontevedra', 'mintmrm' ),
                'SA' => __( 'Salamanca', 'mintmrm' ),
                'TF' => __( 'Santa Cruz de Tenerife', 'mintmrm' ),
                'SG' => __( 'Segovia', 'mintmrm' ),
                'SE' => __( 'Sevilla', 'mintmrm' ),
                'SO' => __( 'Soria', 'mintmrm' ),
                'T'  => __( 'Tarragona', 'mintmrm' ),
                'TE' => __( 'Teruel', 'mintmrm' ),
                'TO' => __( 'Toledo', 'mintmrm' ),
                'V'  => __( 'Valencia', 'mintmrm' ),
                'VA' => __( 'Valladolid', 'mintmrm' ),
                'BI' => __( 'Biscay', 'mintmrm' ),
                'ZA' => __( 'Zamora', 'mintmrm' ),
                'Z'  => __( 'Zaragoza', 'mintmrm' ),
            ),
            'FI' => array(),
            'FR' => array(),
            'GF' => array(),
            'GH' => array( // Ghanaian regions.
                'AF' => __( 'Ahafo', 'mintmrm' ),
                'AH' => __( 'Ashanti', 'mintmrm' ),
                'BA' => __( 'Brong-Ahafo', 'mintmrm' ),
                'BO' => __( 'Bono', 'mintmrm' ),
                'BE' => __( 'Bono East', 'mintmrm' ),
                'CP' => __( 'Central', 'mintmrm' ),
                'EP' => __( 'Eastern', 'mintmrm' ),
                'AA' => __( 'Greater Accra', 'mintmrm' ),
                'NE' => __( 'North East', 'mintmrm' ),
                'NP' => __( 'Northern', 'mintmrm' ),
                'OT' => __( 'Oti', 'mintmrm' ),
                'SV' => __( 'Savannah', 'mintmrm' ),
                'UE' => __( 'Upper East', 'mintmrm' ),
                'UW' => __( 'Upper West', 'mintmrm' ),
                'TV' => __( 'Volta', 'mintmrm' ),
                'WP' => __( 'Western', 'mintmrm' ),
                'WN' => __( 'Western North', 'mintmrm' ),
            ),
            'GP' => array(),
            'GR' => array( // Greek regions.
                'I' => __( 'Attica', 'mintmrm' ),
                'A' => __( 'East Macedonia and Thrace', 'mintmrm' ),
                'B' => __( 'Central Macedonia', 'mintmrm' ),
                'C' => __( 'West Macedonia', 'mintmrm' ),
                'D' => __( 'Epirus', 'mintmrm' ),
                'E' => __( 'Thessaly', 'mintmrm' ),
                'F' => __( 'Ionian Islands', 'mintmrm' ),
                'G' => __( 'West Greece', 'mintmrm' ),
                'H' => __( 'Central Greece', 'mintmrm' ),
                'J' => __( 'Peloponnese', 'mintmrm' ),
                'K' => __( 'North Aegean', 'mintmrm' ),
                'L' => __( 'South Aegean', 'mintmrm' ),
                'M' => __( 'Crete', 'mintmrm' ),
            ),
            'GT' => array( // Guatemalan states.
                'GT-AV' => __( 'Alta Verapaz', 'mintmrm' ),
                'GT-BV' => __( 'Baja Verapaz', 'mintmrm' ),
                'GT-CM' => __( 'Chimaltenango', 'mintmrm' ),
                'GT-CQ' => __( 'Chiquimula', 'mintmrm' ),
                'GT-PR' => __( 'El Progreso', 'mintmrm' ),
                'GT-ES' => __( 'Escuintla', 'mintmrm' ),
                'GT-GU' => __( 'Guatemala', 'mintmrm' ),
                'GT-HU' => __( 'Huehuetenango', 'mintmrm' ),
                'GT-IZ' => __( 'Izabal', 'mintmrm' ),
                'GT-JA' => __( 'Jalapa', 'mintmrm' ),
                'GT-JU' => __( 'Jutiapa', 'mintmrm' ),
                'GT-PE' => __( 'Petén', 'mintmrm' ),
                'GT-QZ' => __( 'Quetzaltenango', 'mintmrm' ),
                'GT-QC' => __( 'Quiché', 'mintmrm' ),
                'GT-RE' => __( 'Retalhuleu', 'mintmrm' ),
                'GT-SA' => __( 'Sacatepéquez', 'mintmrm' ),
                'GT-SM' => __( 'San Marcos', 'mintmrm' ),
                'GT-SR' => __( 'Santa Rosa', 'mintmrm' ),
                'GT-SO' => __( 'Sololá', 'mintmrm' ),
                'GT-SU' => __( 'Suchitepéquez', 'mintmrm' ),
                'GT-TO' => __( 'Totonicapán', 'mintmrm' ),
                'GT-ZA' => __( 'Zacapa', 'mintmrm' ),
            ),
            'HK' => array( // Hong Kong states.
                'HONG KONG'       => __( 'Hong Kong Island', 'mintmrm' ),
                'KOWLOON'         => __( 'Kowloon', 'mintmrm' ),
                'NEW TERRITORIES' => __( 'New Territories', 'mintmrm' ),
            ),
            'HN' => array( // Honduran states.
                'HN-AT' => __( 'Atlántida', 'mintmrm' ),
                'HN-IB' => __( 'Bay Islands', 'mintmrm' ),
                'HN-CH' => __( 'Choluteca', 'mintmrm' ),
                'HN-CL' => __( 'Colón', 'mintmrm' ),
                'HN-CM' => __( 'Comayagua', 'mintmrm' ),
                'HN-CP' => __( 'Copán', 'mintmrm' ),
                'HN-CR' => __( 'Cortés', 'mintmrm' ),
                'HN-EP' => __( 'El Paraíso', 'mintmrm' ),
                'HN-FM' => __( 'Francisco Morazán', 'mintmrm' ),
                'HN-GD' => __( 'Gracias a Dios', 'mintmrm' ),
                'HN-IN' => __( 'Intibucá', 'mintmrm' ),
                'HN-LE' => __( 'Lempira', 'mintmrm' ),
                'HN-LP' => __( 'La Paz', 'mintmrm' ),
                'HN-OC' => __( 'Ocotepeque', 'mintmrm' ),
                'HN-OL' => __( 'Olancho', 'mintmrm' ),
                'HN-SB' => __( 'Santa Bárbara', 'mintmrm' ),
                'HN-VA' => __( 'Valle', 'mintmrm' ),
                'HN-YO' => __( 'Yoro', 'mintmrm' ),
            ),
            'HU' => array( // Hungarian states.
                'BK' => __( 'Bács-Kiskun', 'mintmrm' ),
                'BE' => __( 'Békés', 'mintmrm' ),
                'BA' => __( 'Baranya', 'mintmrm' ),
                'BZ' => __( 'Borsod-Abaúj-Zemplén', 'mintmrm' ),
                'BU' => __( 'Budapest', 'mintmrm' ),
                'CS' => __( 'Csongrád-Csanád', 'mintmrm' ),
                'FE' => __( 'Fejér', 'mintmrm' ),
                'GS' => __( 'Győr-Moson-Sopron', 'mintmrm' ),
                'HB' => __( 'Hajdú-Bihar', 'mintmrm' ),
                'HE' => __( 'Heves', 'mintmrm' ),
                'JN' => __( 'Jász-Nagykun-Szolnok', 'mintmrm' ),
                'KE' => __( 'Komárom-Esztergom', 'mintmrm' ),
                'NO' => __( 'Nógrád', 'mintmrm' ),
                'PE' => __( 'Pest', 'mintmrm' ),
                'SO' => __( 'Somogy', 'mintmrm' ),
                'SZ' => __( 'Szabolcs-Szatmár-Bereg', 'mintmrm' ),
                'TO' => __( 'Tolna', 'mintmrm' ),
                'VA' => __( 'Vas', 'mintmrm' ),
                'VE' => __( 'Veszprém', 'mintmrm' ),
                'ZA' => __( 'Zala', 'mintmrm' ),
            ),
            'ID' => array( // Indonesian provinces.
                'AC' => __( 'Daerah Istimewa Aceh', 'mintmrm' ),
                'SU' => __( 'Sumatera Utara', 'mintmrm' ),
                'SB' => __( 'Sumatera Barat', 'mintmrm' ),
                'RI' => __( 'Riau', 'mintmrm' ),
                'KR' => __( 'Kepulauan Riau', 'mintmrm' ),
                'JA' => __( 'Jambi', 'mintmrm' ),
                'SS' => __( 'Sumatera Selatan', 'mintmrm' ),
                'BB' => __( 'Bangka Belitung', 'mintmrm' ),
                'BE' => __( 'Bengkulu', 'mintmrm' ),
                'LA' => __( 'Lampung', 'mintmrm' ),
                'JK' => __( 'DKI Jakarta', 'mintmrm' ),
                'JB' => __( 'Jawa Barat', 'mintmrm' ),
                'BT' => __( 'Banten', 'mintmrm' ),
                'JT' => __( 'Jawa Tengah', 'mintmrm' ),
                'JI' => __( 'Jawa Timur', 'mintmrm' ),
                'YO' => __( 'Daerah Istimewa Yogyakarta', 'mintmrm' ),
                'BA' => __( 'Bali', 'mintmrm' ),
                'NB' => __( 'Nusa Tenggara Barat', 'mintmrm' ),
                'NT' => __( 'Nusa Tenggara Timur', 'mintmrm' ),
                'KB' => __( 'Kalimantan Barat', 'mintmrm' ),
                'KT' => __( 'Kalimantan Tengah', 'mintmrm' ),
                'KI' => __( 'Kalimantan Timur', 'mintmrm' ),
                'KS' => __( 'Kalimantan Selatan', 'mintmrm' ),
                'KU' => __( 'Kalimantan Utara', 'mintmrm' ),
                'SA' => __( 'Sulawesi Utara', 'mintmrm' ),
                'ST' => __( 'Sulawesi Tengah', 'mintmrm' ),
                'SG' => __( 'Sulawesi Tenggara', 'mintmrm' ),
                'SR' => __( 'Sulawesi Barat', 'mintmrm' ),
                'SN' => __( 'Sulawesi Selatan', 'mintmrm' ),
                'GO' => __( 'Gorontalo', 'mintmrm' ),
                'MA' => __( 'Maluku', 'mintmrm' ),
                'MU' => __( 'Maluku Utara', 'mintmrm' ),
                'PA' => __( 'Papua', 'mintmrm' ),
                'PB' => __( 'Papua Barat', 'mintmrm' ),
            ),
            'IE' => array( // Irish states.
                'CW' => __( 'Carlow', 'mintmrm' ),
                'CN' => __( 'Cavan', 'mintmrm' ),
                'CE' => __( 'Clare', 'mintmrm' ),
                'CO' => __( 'Cork', 'mintmrm' ),
                'DL' => __( 'Donegal', 'mintmrm' ),
                'D'  => __( 'Dublin', 'mintmrm' ),
                'G'  => __( 'Galway', 'mintmrm' ),
                'KY' => __( 'Kerry', 'mintmrm' ),
                'KE' => __( 'Kildare', 'mintmrm' ),
                'KK' => __( 'Kilkenny', 'mintmrm' ),
                'LS' => __( 'Laois', 'mintmrm' ),
                'LM' => __( 'Leitrim', 'mintmrm' ),
                'LK' => __( 'Limerick', 'mintmrm' ),
                'LD' => __( 'Longford', 'mintmrm' ),
                'LH' => __( 'Louth', 'mintmrm' ),
                'MO' => __( 'Mayo', 'mintmrm' ),
                'MH' => __( 'Meath', 'mintmrm' ),
                'MN' => __( 'Monaghan', 'mintmrm' ),
                'OY' => __( 'Offaly', 'mintmrm' ),
                'RN' => __( 'Roscommon', 'mintmrm' ),
                'SO' => __( 'Sligo', 'mintmrm' ),
                'TA' => __( 'Tipperary', 'mintmrm' ),
                'WD' => __( 'Waterford', 'mintmrm' ),
                'WH' => __( 'Westmeath', 'mintmrm' ),
                'WX' => __( 'Wexford', 'mintmrm' ),
                'WW' => __( 'Wicklow', 'mintmrm' ),
            ),
            'IN' => array( // Indian states.
                'AP' => __( 'Andhra Pradesh', 'mintmrm' ),
                'AR' => __( 'Arunachal Pradesh', 'mintmrm' ),
                'AS' => __( 'Assam', 'mintmrm' ),
                'BR' => __( 'Bihar', 'mintmrm' ),
                'CT' => __( 'Chhattisgarh', 'mintmrm' ),
                'GA' => __( 'Goa', 'mintmrm' ),
                'GJ' => __( 'Gujarat', 'mintmrm' ),
                'HR' => __( 'Haryana', 'mintmrm' ),
                'HP' => __( 'Himachal Pradesh', 'mintmrm' ),
                'JK' => __( 'Jammu and Kashmir', 'mintmrm' ),
                'JH' => __( 'Jharkhand', 'mintmrm' ),
                'KA' => __( 'Karnataka', 'mintmrm' ),
                'KL' => __( 'Kerala', 'mintmrm' ),
                'LA' => __( 'Ladakh', 'mintmrm' ),
                'MP' => __( 'Madhya Pradesh', 'mintmrm' ),
                'MH' => __( 'Maharashtra', 'mintmrm' ),
                'MN' => __( 'Manipur', 'mintmrm' ),
                'ML' => __( 'Meghalaya', 'mintmrm' ),
                'MZ' => __( 'Mizoram', 'mintmrm' ),
                'NL' => __( 'Nagaland', 'mintmrm' ),
                'OR' => __( 'Odisha', 'mintmrm' ),
                'PB' => __( 'Punjab', 'mintmrm' ),
                'RJ' => __( 'Rajasthan', 'mintmrm' ),
                'SK' => __( 'Sikkim', 'mintmrm' ),
                'TN' => __( 'Tamil Nadu', 'mintmrm' ),
                'TS' => __( 'Telangana', 'mintmrm' ),
                'TR' => __( 'Tripura', 'mintmrm' ),
                'UK' => __( 'Uttarakhand', 'mintmrm' ),
                'UP' => __( 'Uttar Pradesh', 'mintmrm' ),
                'WB' => __( 'West Bengal', 'mintmrm' ),
                'AN' => __( 'Andaman and Nicobar Islands', 'mintmrm' ),
                'CH' => __( 'Chandigarh', 'mintmrm' ),
                'DN' => __( 'Dadra and Nagar Haveli', 'mintmrm' ),
                'DD' => __( 'Daman and Diu', 'mintmrm' ),
                'DL' => __( 'Delhi', 'mintmrm' ),
                'LD' => __( 'Lakshadeep', 'mintmrm' ),
                'PY' => __( 'Pondicherry (Puducherry)', 'mintmrm' ),
            ),
            'IR' => array( // Irania states.
                'KHZ' => __( 'Khuzestan (خوزستان)', 'mintmrm' ),
                'THR' => __( 'Tehran (تهران)', 'mintmrm' ),
                'ILM' => __( 'Ilaam (ایلام)', 'mintmrm' ),
                'BHR' => __( 'Bushehr (بوشهر)', 'mintmrm' ),
                'ADL' => __( 'Ardabil (اردبیل)', 'mintmrm' ),
                'ESF' => __( 'Isfahan (اصفهان)', 'mintmrm' ),
                'YZD' => __( 'Yazd (یزد)', 'mintmrm' ),
                'KRH' => __( 'Kermanshah (کرمانشاه)', 'mintmrm' ),
                'KRN' => __( 'Kerman (کرمان)', 'mintmrm' ),
                'HDN' => __( 'Hamadan (همدان)', 'mintmrm' ),
                'GZN' => __( 'Ghazvin (قزوین)', 'mintmrm' ),
                'ZJN' => __( 'Zanjan (زنجان)', 'mintmrm' ),
                'LRS' => __( 'Luristan (لرستان)', 'mintmrm' ),
                'ABZ' => __( 'Alborz (البرز)', 'mintmrm' ),
                'EAZ' => __( 'East Azarbaijan (آذربایجان شرقی)', 'mintmrm' ),
                'WAZ' => __( 'West Azarbaijan (آذربایجان غربی)', 'mintmrm' ),
                'CHB' => __( 'Chaharmahal and Bakhtiari (چهارمحال و بختیاری)', 'mintmrm' ),
                'SKH' => __( 'South Khorasan (خراسان جنوبی)', 'mintmrm' ),
                'RKH' => __( 'Razavi Khorasan (خراسان رضوی)', 'mintmrm' ),
                'NKH' => __( 'North Khorasan (خراسان شمالی)', 'mintmrm' ),
                'SMN' => __( 'Semnan (سمنان)', 'mintmrm' ),
                'FRS' => __( 'Fars (فارس)', 'mintmrm' ),
                'QHM' => __( 'Qom (قم)', 'mintmrm' ),
                'KRD' => __( 'Kurdistan / کردستان)', 'mintmrm' ),
                'KBD' => __( 'Kohgiluyeh and BoyerAhmad (کهگیلوییه و بویراحمد)', 'mintmrm' ),
                'GLS' => __( 'Golestan (گلستان)', 'mintmrm' ),
                'GIL' => __( 'Gilan (گیلان)', 'mintmrm' ),
                'MZN' => __( 'Mazandaran (مازندران)', 'mintmrm' ),
                'MKZ' => __( 'Markazi (مرکزی)', 'mintmrm' ),
                'HRZ' => __( 'Hormozgan (هرمزگان)', 'mintmrm' ),
                'SBN' => __( 'Sistan and Baluchestan (سیستان و بلوچستان)', 'mintmrm' ),
            ),
            'IS' => array(),
            'IT' => array( // Italian provinces.
                'AG' => __( 'Agrigento', 'mintmrm' ),
                'AL' => __( 'Alessandria', 'mintmrm' ),
                'AN' => __( 'Ancona', 'mintmrm' ),
                'AO' => __( 'Aosta', 'mintmrm' ),
                'AR' => __( 'Arezzo', 'mintmrm' ),
                'AP' => __( 'Ascoli Piceno', 'mintmrm' ),
                'AT' => __( 'Asti', 'mintmrm' ),
                'AV' => __( 'Avellino', 'mintmrm' ),
                'BA' => __( 'Bari', 'mintmrm' ),
                'BT' => __( 'Barletta-Andria-Trani', 'mintmrm' ),
                'BL' => __( 'Belluno', 'mintmrm' ),
                'BN' => __( 'Benevento', 'mintmrm' ),
                'BG' => __( 'Bergamo', 'mintmrm' ),
                'BI' => __( 'Biella', 'mintmrm' ),
                'BO' => __( 'Bologna', 'mintmrm' ),
                'BZ' => __( 'Bolzano', 'mintmrm' ),
                'BS' => __( 'Brescia', 'mintmrm' ),
                'BR' => __( 'Brindisi', 'mintmrm' ),
                'CA' => __( 'Cagliari', 'mintmrm' ),
                'CL' => __( 'Caltanissetta', 'mintmrm' ),
                'CB' => __( 'Campobasso', 'mintmrm' ),
                'CE' => __( 'Caserta', 'mintmrm' ),
                'CT' => __( 'Catania', 'mintmrm' ),
                'CZ' => __( 'Catanzaro', 'mintmrm' ),
                'CH' => __( 'Chieti', 'mintmrm' ),
                'CO' => __( 'Como', 'mintmrm' ),
                'CS' => __( 'Cosenza', 'mintmrm' ),
                'CR' => __( 'Cremona', 'mintmrm' ),
                'KR' => __( 'Crotone', 'mintmrm' ),
                'CN' => __( 'Cuneo', 'mintmrm' ),
                'EN' => __( 'Enna', 'mintmrm' ),
                'FM' => __( 'Fermo', 'mintmrm' ),
                'FE' => __( 'Ferrara', 'mintmrm' ),
                'FI' => __( 'Firenze', 'mintmrm' ),
                'FG' => __( 'Foggia', 'mintmrm' ),
                'FC' => __( 'Forlì-Cesena', 'mintmrm' ),
                'FR' => __( 'Frosinone', 'mintmrm' ),
                'GE' => __( 'Genova', 'mintmrm' ),
                'GO' => __( 'Gorizia', 'mintmrm' ),
                'GR' => __( 'Grosseto', 'mintmrm' ),
                'IM' => __( 'Imperia', 'mintmrm' ),
                'IS' => __( 'Isernia', 'mintmrm' ),
                'SP' => __( 'La Spezia', 'mintmrm' ),
                'AQ' => __( "L'Aquila", 'mintmrm' ),
                'LT' => __( 'Latina', 'mintmrm' ),
                'LE' => __( 'Lecce', 'mintmrm' ),
                'LC' => __( 'Lecco', 'mintmrm' ),
                'LI' => __( 'Livorno', 'mintmrm' ),
                'LO' => __( 'Lodi', 'mintmrm' ),
                'LU' => __( 'Lucca', 'mintmrm' ),
                'MC' => __( 'Macerata', 'mintmrm' ),
                'MN' => __( 'Mantova', 'mintmrm' ),
                'MS' => __( 'Massa-Carrara', 'mintmrm' ),
                'MT' => __( 'Matera', 'mintmrm' ),
                'ME' => __( 'Messina', 'mintmrm' ),
                'MI' => __( 'Milano', 'mintmrm' ),
                'MO' => __( 'Modena', 'mintmrm' ),
                'MB' => __( 'Monza e della Brianza', 'mintmrm' ),
                'NA' => __( 'Napoli', 'mintmrm' ),
                'NO' => __( 'Novara', 'mintmrm' ),
                'NU' => __( 'Nuoro', 'mintmrm' ),
                'OR' => __( 'Oristano', 'mintmrm' ),
                'PD' => __( 'Padova', 'mintmrm' ),
                'PA' => __( 'Palermo', 'mintmrm' ),
                'PR' => __( 'Parma', 'mintmrm' ),
                'PV' => __( 'Pavia', 'mintmrm' ),
                'PG' => __( 'Perugia', 'mintmrm' ),
                'PU' => __( 'Pesaro e Urbino', 'mintmrm' ),
                'PE' => __( 'Pescara', 'mintmrm' ),
                'PC' => __( 'Piacenza', 'mintmrm' ),
                'PI' => __( 'Pisa', 'mintmrm' ),
                'PT' => __( 'Pistoia', 'mintmrm' ),
                'PN' => __( 'Pordenone', 'mintmrm' ),
                'PZ' => __( 'Potenza', 'mintmrm' ),
                'PO' => __( 'Prato', 'mintmrm' ),
                'RG' => __( 'Ragusa', 'mintmrm' ),
                'RA' => __( 'Ravenna', 'mintmrm' ),
                'RC' => __( 'Reggio Calabria', 'mintmrm' ),
                'RE' => __( 'Reggio Emilia', 'mintmrm' ),
                'RI' => __( 'Rieti', 'mintmrm' ),
                'RN' => __( 'Rimini', 'mintmrm' ),
                'RM' => __( 'Roma', 'mintmrm' ),
                'RO' => __( 'Rovigo', 'mintmrm' ),
                'SA' => __( 'Salerno', 'mintmrm' ),
                'SS' => __( 'Sassari', 'mintmrm' ),
                'SV' => __( 'Savona', 'mintmrm' ),
                'SI' => __( 'Siena', 'mintmrm' ),
                'SR' => __( 'Siracusa', 'mintmrm' ),
                'SO' => __( 'Sondrio', 'mintmrm' ),
                'SU' => __( 'Sud Sardegna', 'mintmrm' ),
                'TA' => __( 'Taranto', 'mintmrm' ),
                'TE' => __( 'Teramo', 'mintmrm' ),
                'TR' => __( 'Terni', 'mintmrm' ),
                'TO' => __( 'Torino', 'mintmrm' ),
                'TP' => __( 'Trapani', 'mintmrm' ),
                'TN' => __( 'Trento', 'mintmrm' ),
                'TV' => __( 'Treviso', 'mintmrm' ),
                'TS' => __( 'Trieste', 'mintmrm' ),
                'UD' => __( 'Udine', 'mintmrm' ),
                'VA' => __( 'Varese', 'mintmrm' ),
                'VE' => __( 'Venezia', 'mintmrm' ),
                'VB' => __( 'Verbano-Cusio-Ossola', 'mintmrm' ),
                'VC' => __( 'Vercelli', 'mintmrm' ),
                'VR' => __( 'Verona', 'mintmrm' ),
                'VV' => __( 'Vibo Valentia', 'mintmrm' ),
                'VI' => __( 'Vicenza', 'mintmrm' ),
                'VT' => __( 'Viterbo', 'mintmrm' ),
            ),
            'IL' => array(),
            'IM' => array(),
            'JM' => array( // Jamaican parishes.
                'JM-01' => __( 'Kingston', 'mintmrm' ),
                'JM-02' => __( 'Saint Andrew', 'mintmrm' ),
                'JM-03' => __( 'Saint Thomas', 'mintmrm' ),
                'JM-04' => __( 'Portland', 'mintmrm' ),
                'JM-05' => __( 'Saint Mary', 'mintmrm' ),
                'JM-06' => __( 'Saint Ann', 'mintmrm' ),
                'JM-07' => __( 'Trelawny', 'mintmrm' ),
                'JM-08' => __( 'Saint James', 'mintmrm' ),
                'JM-09' => __( 'Hanover', 'mintmrm' ),
                'JM-10' => __( 'Westmoreland', 'mintmrm' ),
                'JM-11' => __( 'Saint Elizabeth', 'mintmrm' ),
                'JM-12' => __( 'Manchester', 'mintmrm' ),
                'JM-13' => __( 'Clarendon', 'mintmrm' ),
                'JM-14' => __( 'Saint Catherine', 'mintmrm' ),
            ),
        
            /**
             * Japanese states.
             *
             * English notation of prefectures conform to the notation of Japan Post.
             * The suffix corresponds with the Japanese translation file.
             */
            'JP' => array(
                'JP01' => __( 'Hokkaido', 'mintmrm' ),
                'JP02' => __( 'Aomori', 'mintmrm' ),
                'JP03' => __( 'Iwate', 'mintmrm' ),
                'JP04' => __( 'Miyagi', 'mintmrm' ),
                'JP05' => __( 'Akita', 'mintmrm' ),
                'JP06' => __( 'Yamagata', 'mintmrm' ),
                'JP07' => __( 'Fukushima', 'mintmrm' ),
                'JP08' => __( 'Ibaraki', 'mintmrm' ),
                'JP09' => __( 'Tochigi', 'mintmrm' ),
                'JP10' => __( 'Gunma', 'mintmrm' ),
                'JP11' => __( 'Saitama', 'mintmrm' ),
                'JP12' => __( 'Chiba', 'mintmrm' ),
                'JP13' => __( 'Tokyo', 'mintmrm' ),
                'JP14' => __( 'Kanagawa', 'mintmrm' ),
                'JP15' => __( 'Niigata', 'mintmrm' ),
                'JP16' => __( 'Toyama', 'mintmrm' ),
                'JP17' => __( 'Ishikawa', 'mintmrm' ),
                'JP18' => __( 'Fukui', 'mintmrm' ),
                'JP19' => __( 'Yamanashi', 'mintmrm' ),
                'JP20' => __( 'Nagano', 'mintmrm' ),
                'JP21' => __( 'Gifu', 'mintmrm' ),
                'JP22' => __( 'Shizuoka', 'mintmrm' ),
                'JP23' => __( 'Aichi', 'mintmrm' ),
                'JP24' => __( 'Mie', 'mintmrm' ),
                'JP25' => __( 'Shiga', 'mintmrm' ),
                'JP26' => __( 'Kyoto', 'mintmrm' ),
                'JP27' => __( 'Osaka', 'mintmrm' ),
                'JP28' => __( 'Hyogo', 'mintmrm' ),
                'JP29' => __( 'Nara', 'mintmrm' ),
                'JP30' => __( 'Wakayama', 'mintmrm' ),
                'JP31' => __( 'Tottori', 'mintmrm' ),
                'JP32' => __( 'Shimane', 'mintmrm' ),
                'JP33' => __( 'Okayama', 'mintmrm' ),
                'JP34' => __( 'Hiroshima', 'mintmrm' ),
                'JP35' => __( 'Yamaguchi', 'mintmrm' ),
                'JP36' => __( 'Tokushima', 'mintmrm' ),
                'JP37' => __( 'Kagawa', 'mintmrm' ),
                'JP38' => __( 'Ehime', 'mintmrm' ),
                'JP39' => __( 'Kochi', 'mintmrm' ),
                'JP40' => __( 'Fukuoka', 'mintmrm' ),
                'JP41' => __( 'Saga', 'mintmrm' ),
                'JP42' => __( 'Nagasaki', 'mintmrm' ),
                'JP43' => __( 'Kumamoto', 'mintmrm' ),
                'JP44' => __( 'Oita', 'mintmrm' ),
                'JP45' => __( 'Miyazaki', 'mintmrm' ),
                'JP46' => __( 'Kagoshima', 'mintmrm' ),
                'JP47' => __( 'Okinawa', 'mintmrm' ),
            ),
            'KE' => array( // Kenyan counties.
                'KE01' => __( 'Baringo', 'mintmrm' ),
                'KE02' => __( 'Bomet', 'mintmrm' ),
                'KE03' => __( 'Bungoma', 'mintmrm' ),
                'KE04' => __( 'Busia', 'mintmrm' ),
                'KE05' => __( 'Elgeyo-Marakwet', 'mintmrm' ),
                'KE06' => __( 'Embu', 'mintmrm' ),
                'KE07' => __( 'Garissa', 'mintmrm' ),
                'KE08' => __( 'Homa Bay', 'mintmrm' ),
                'KE09' => __( 'Isiolo', 'mintmrm' ),
                'KE10' => __( 'Kajiado', 'mintmrm' ),
                'KE11' => __( 'Kakamega', 'mintmrm' ),
                'KE12' => __( 'Kericho', 'mintmrm' ),
                'KE13' => __( 'Kiambu', 'mintmrm' ),
                'KE14' => __( 'Kilifi', 'mintmrm' ),
                'KE15' => __( 'Kirinyaga', 'mintmrm' ),
                'KE16' => __( 'Kisii', 'mintmrm' ),
                'KE17' => __( 'Kisumu', 'mintmrm' ),
                'KE18' => __( 'Kitui', 'mintmrm' ),
                'KE19' => __( 'Kwale', 'mintmrm' ),
                'KE20' => __( 'Laikipia', 'mintmrm' ),
                'KE21' => __( 'Lamu', 'mintmrm' ),
                'KE22' => __( 'Machakos', 'mintmrm' ),
                'KE23' => __( 'Makueni', 'mintmrm' ),
                'KE24' => __( 'Mandera', 'mintmrm' ),
                'KE25' => __( 'Marsabit', 'mintmrm' ),
                'KE26' => __( 'Meru', 'mintmrm' ),
                'KE27' => __( 'Migori', 'mintmrm' ),
                'KE28' => __( 'Mombasa', 'mintmrm' ),
                'KE29' => __( 'Murang’a', 'mintmrm' ),
                'KE30' => __( 'Nairobi County', 'mintmrm' ),
                'KE31' => __( 'Nakuru', 'mintmrm' ),
                'KE32' => __( 'Nandi', 'mintmrm' ),
                'KE33' => __( 'Narok', 'mintmrm' ),
                'KE34' => __( 'Nyamira', 'mintmrm' ),
                'KE35' => __( 'Nyandarua', 'mintmrm' ),
                'KE36' => __( 'Nyeri', 'mintmrm' ),
                'KE37' => __( 'Samburu', 'mintmrm' ),
                'KE38' => __( 'Siaya', 'mintmrm' ),
                'KE39' => __( 'Taita-Taveta', 'mintmrm' ),
                'KE40' => __( 'Tana River', 'mintmrm' ),
                'KE41' => __( 'Tharaka-Nithi', 'mintmrm' ),
                'KE42' => __( 'Trans Nzoia', 'mintmrm' ),
                'KE43' => __( 'Turkana', 'mintmrm' ),
                'KE44' => __( 'Uasin Gishu', 'mintmrm' ),
                'KE45' => __( 'Vihiga', 'mintmrm' ),
                'KE46' => __( 'Wajir', 'mintmrm' ),
                'KE47' => __( 'West Pokot', 'mintmrm' ),
            ),
            'KR' => array(),
            'KW' => array(),
            'LA' => array( // Laotian provinces.
                'AT' => __( 'Attapeu', 'mintmrm' ),
                'BK' => __( 'Bokeo', 'mintmrm' ),
                'BL' => __( 'Bolikhamsai', 'mintmrm' ),
                'CH' => __( 'Champasak', 'mintmrm' ),
                'HO' => __( 'Houaphanh', 'mintmrm' ),
                'KH' => __( 'Khammouane', 'mintmrm' ),
                'LM' => __( 'Luang Namtha', 'mintmrm' ),
                'LP' => __( 'Luang Prabang', 'mintmrm' ),
                'OU' => __( 'Oudomxay', 'mintmrm' ),
                'PH' => __( 'Phongsaly', 'mintmrm' ),
                'SL' => __( 'Salavan', 'mintmrm' ),
                'SV' => __( 'Savannakhet', 'mintmrm' ),
                'VI' => __( 'Vientiane Province', 'mintmrm' ),
                'VT' => __( 'Vientiane', 'mintmrm' ),
                'XA' => __( 'Sainyabuli', 'mintmrm' ),
                'XE' => __( 'Sekong', 'mintmrm' ),
                'XI' => __( 'Xiangkhouang', 'mintmrm' ),
                'XS' => __( 'Xaisomboun', 'mintmrm' ),
            ),
            'LB' => array(),
            'LI' => array(),
            'LR' => array( // Liberian provinces.
                'BM' => __( 'Bomi', 'mintmrm' ),
                'BN' => __( 'Bong', 'mintmrm' ),
                'GA' => __( 'Gbarpolu', 'mintmrm' ),
                'GB' => __( 'Grand Bassa', 'mintmrm' ),
                'GC' => __( 'Grand Cape Mount', 'mintmrm' ),
                'GG' => __( 'Grand Gedeh', 'mintmrm' ),
                'GK' => __( 'Grand Kru', 'mintmrm' ),
                'LO' => __( 'Lofa', 'mintmrm' ),
                'MA' => __( 'Margibi', 'mintmrm' ),
                'MY' => __( 'Maryland', 'mintmrm' ),
                'MO' => __( 'Montserrado', 'mintmrm' ),
                'NM' => __( 'Nimba', 'mintmrm' ),
                'RV' => __( 'Rivercess', 'mintmrm' ),
                'RG' => __( 'River Gee', 'mintmrm' ),
                'SN' => __( 'Sinoe', 'mintmrm' ),
            ),
            'LU' => array(),
            'MD' => array( // Moldovan states.
                'C'  => __( 'Chișinău', 'mintmrm' ),
                'BL' => __( 'Bălți', 'mintmrm' ),
                'AN' => __( 'Anenii Noi', 'mintmrm' ),
                'BS' => __( 'Basarabeasca', 'mintmrm' ),
                'BR' => __( 'Briceni', 'mintmrm' ),
                'CH' => __( 'Cahul', 'mintmrm' ),
                'CT' => __( 'Cantemir', 'mintmrm' ),
                'CL' => __( 'Călărași', 'mintmrm' ),
                'CS' => __( 'Căușeni', 'mintmrm' ),
                'CM' => __( 'Cimișlia', 'mintmrm' ),
                'CR' => __( 'Criuleni', 'mintmrm' ),
                'DN' => __( 'Dondușeni', 'mintmrm' ),
                'DR' => __( 'Drochia', 'mintmrm' ),
                'DB' => __( 'Dubăsari', 'mintmrm' ),
                'ED' => __( 'Edineț', 'mintmrm' ),
                'FL' => __( 'Fălești', 'mintmrm' ),
                'FR' => __( 'Florești', 'mintmrm' ),
                'GE' => __( 'UTA Găgăuzia', 'mintmrm' ),
                'GL' => __( 'Glodeni', 'mintmrm' ),
                'HN' => __( 'Hîncești', 'mintmrm' ),
                'IL' => __( 'Ialoveni', 'mintmrm' ),
                'LV' => __( 'Leova', 'mintmrm' ),
                'NS' => __( 'Nisporeni', 'mintmrm' ),
                'OC' => __( 'Ocnița', 'mintmrm' ),
                'OR' => __( 'Orhei', 'mintmrm' ),
                'RZ' => __( 'Rezina', 'mintmrm' ),
                'RS' => __( 'Rîșcani', 'mintmrm' ),
                'SG' => __( 'Sîngerei', 'mintmrm' ),
                'SR' => __( 'Soroca', 'mintmrm' ),
                'ST' => __( 'Strășeni', 'mintmrm' ),
                'SD' => __( 'Șoldănești', 'mintmrm' ),
                'SV' => __( 'Ștefan Vodă', 'mintmrm' ),
                'TR' => __( 'Taraclia', 'mintmrm' ),
                'TL' => __( 'Telenești', 'mintmrm' ),
                'UN' => __( 'Ungheni', 'mintmrm' ),
            ),
            'MF' => array(),
            'MQ' => array(),
            'MT' => array(),
            'MX' => array( // Mexican states.
                'DF' => __( 'Ciudad de México', 'mintmrm' ),
                'JA' => __( 'Jalisco', 'mintmrm' ),
                'NL' => __( 'Nuevo León', 'mintmrm' ),
                'AG' => __( 'Aguascalientes', 'mintmrm' ),
                'BC' => __( 'Baja California', 'mintmrm' ),
                'BS' => __( 'Baja California Sur', 'mintmrm' ),
                'CM' => __( 'Campeche', 'mintmrm' ),
                'CS' => __( 'Chiapas', 'mintmrm' ),
                'CH' => __( 'Chihuahua', 'mintmrm' ),
                'CO' => __( 'Coahuila', 'mintmrm' ),
                'CL' => __( 'Colima', 'mintmrm' ),
                'DG' => __( 'Durango', 'mintmrm' ),
                'GT' => __( 'Guanajuato', 'mintmrm' ),
                'GR' => __( 'Guerrero', 'mintmrm' ),
                'HG' => __( 'Hidalgo', 'mintmrm' ),
                'MX' => __( 'Estado de México', 'mintmrm' ),
                'MI' => __( 'Michoacán', 'mintmrm' ),
                'MO' => __( 'Morelos', 'mintmrm' ),
                'NA' => __( 'Nayarit', 'mintmrm' ),
                'OA' => __( 'Oaxaca', 'mintmrm' ),
                'PU' => __( 'Puebla', 'mintmrm' ),
                'QT' => __( 'Querétaro', 'mintmrm' ),
                'QR' => __( 'Quintana Roo', 'mintmrm' ),
                'SL' => __( 'San Luis Potosí', 'mintmrm' ),
                'SI' => __( 'Sinaloa', 'mintmrm' ),
                'SO' => __( 'Sonora', 'mintmrm' ),
                'TB' => __( 'Tabasco', 'mintmrm' ),
                'TM' => __( 'Tamaulipas', 'mintmrm' ),
                'TL' => __( 'Tlaxcala', 'mintmrm' ),
                'VE' => __( 'Veracruz', 'mintmrm' ),
                'YU' => __( 'Yucatán', 'mintmrm' ),
                'ZA' => __( 'Zacatecas', 'mintmrm' ),
            ),
            'MY' => array( // Malaysian states.
                'JHR' => __( 'Johor', 'mintmrm' ),
                'KDH' => __( 'Kedah', 'mintmrm' ),
                'KTN' => __( 'Kelantan', 'mintmrm' ),
                'LBN' => __( 'Labuan', 'mintmrm' ),
                'MLK' => __( 'Malacca (Melaka)', 'mintmrm' ),
                'NSN' => __( 'Negeri Sembilan', 'mintmrm' ),
                'PHG' => __( 'Pahang', 'mintmrm' ),
                'PNG' => __( 'Penang (Pulau Pinang)', 'mintmrm' ),
                'PRK' => __( 'Perak', 'mintmrm' ),
                'PLS' => __( 'Perlis', 'mintmrm' ),
                'SBH' => __( 'Sabah', 'mintmrm' ),
                'SWK' => __( 'Sarawak', 'mintmrm' ),
                'SGR' => __( 'Selangor', 'mintmrm' ),
                'TRG' => __( 'Terengganu', 'mintmrm' ),
                'PJY' => __( 'Putrajaya', 'mintmrm' ),
                'KUL' => __( 'Kuala Lumpur', 'mintmrm' ),
            ),
            'MZ' => array( // Mozambican provinces.
                'MZP'   => __( 'Cabo Delgado', 'mintmrm' ),
                'MZG'   => __( 'Gaza', 'mintmrm' ),
                'MZI'   => __( 'Inhambane', 'mintmrm' ),
                'MZB'   => __( 'Manica', 'mintmrm' ),
                'MZL'   => __( 'Maputo Province', 'mintmrm' ),
                'MZMPM' => __( 'Maputo', 'mintmrm' ),
                'MZN'   => __( 'Nampula', 'mintmrm' ),
                'MZA'   => __( 'Niassa', 'mintmrm' ),
                'MZS'   => __( 'Sofala', 'mintmrm' ),
                'MZT'   => __( 'Tete', 'mintmrm' ),
                'MZQ'   => __( 'Zambézia', 'mintmrm' ),
            ),
            'NA' => array( // Namibian regions.
                'ER' => __( 'Erongo', 'mintmrm' ),
                'HA' => __( 'Hardap', 'mintmrm' ),
                'KA' => __( 'Karas', 'mintmrm' ),
                'KE' => __( 'Kavango East', 'mintmrm' ),
                'KW' => __( 'Kavango West', 'mintmrm' ),
                'KH' => __( 'Khomas', 'mintmrm' ),
                'KU' => __( 'Kunene', 'mintmrm' ),
                'OW' => __( 'Ohangwena', 'mintmrm' ),
                'OH' => __( 'Omaheke', 'mintmrm' ),
                'OS' => __( 'Omusati', 'mintmrm' ),
                'ON' => __( 'Oshana', 'mintmrm' ),
                'OT' => __( 'Oshikoto', 'mintmrm' ),
                'OD' => __( 'Otjozondjupa', 'mintmrm' ),
                'CA' => __( 'Zambezi', 'mintmrm' ),
            ),
            'NG' => array( // Nigerian provinces.
                'AB' => __( 'Abia', 'mintmrm' ),
                'FC' => __( 'Abuja', 'mintmrm' ),
                'AD' => __( 'Adamawa', 'mintmrm' ),
                'AK' => __( 'Akwa Ibom', 'mintmrm' ),
                'AN' => __( 'Anambra', 'mintmrm' ),
                'BA' => __( 'Bauchi', 'mintmrm' ),
                'BY' => __( 'Bayelsa', 'mintmrm' ),
                'BE' => __( 'Benue', 'mintmrm' ),
                'BO' => __( 'Borno', 'mintmrm' ),
                'CR' => __( 'Cross River', 'mintmrm' ),
                'DE' => __( 'Delta', 'mintmrm' ),
                'EB' => __( 'Ebonyi', 'mintmrm' ),
                'ED' => __( 'Edo', 'mintmrm' ),
                'EK' => __( 'Ekiti', 'mintmrm' ),
                'EN' => __( 'Enugu', 'mintmrm' ),
                'GO' => __( 'Gombe', 'mintmrm' ),
                'IM' => __( 'Imo', 'mintmrm' ),
                'JI' => __( 'Jigawa', 'mintmrm' ),
                'KD' => __( 'Kaduna', 'mintmrm' ),
                'KN' => __( 'Kano', 'mintmrm' ),
                'KT' => __( 'Katsina', 'mintmrm' ),
                'KE' => __( 'Kebbi', 'mintmrm' ),
                'KO' => __( 'Kogi', 'mintmrm' ),
                'KW' => __( 'Kwara', 'mintmrm' ),
                'LA' => __( 'Lagos', 'mintmrm' ),
                'NA' => __( 'Nasarawa', 'mintmrm' ),
                'NI' => __( 'Niger', 'mintmrm' ),
                'OG' => __( 'Ogun', 'mintmrm' ),
                'ON' => __( 'Ondo', 'mintmrm' ),
                'OS' => __( 'Osun', 'mintmrm' ),
                'OY' => __( 'Oyo', 'mintmrm' ),
                'PL' => __( 'Plateau', 'mintmrm' ),
                'RI' => __( 'Rivers', 'mintmrm' ),
                'SO' => __( 'Sokoto', 'mintmrm' ),
                'TA' => __( 'Taraba', 'mintmrm' ),
                'YO' => __( 'Yobe', 'mintmrm' ),
                'ZA' => __( 'Zamfara', 'mintmrm' ),
            ),
            'NL' => array(),
            'NO' => array(),
            'NP' => array( // Nepalese zones.
                'BAG' => __( 'Bagmati', 'mintmrm' ),
                'BHE' => __( 'Bheri', 'mintmrm' ),
                'DHA' => __( 'Dhaulagiri', 'mintmrm' ),
                'GAN' => __( 'Gandaki', 'mintmrm' ),
                'JAN' => __( 'Janakpur', 'mintmrm' ),
                'KAR' => __( 'Karnali', 'mintmrm' ),
                'KOS' => __( 'Koshi', 'mintmrm' ),
                'LUM' => __( 'Lumbini', 'mintmrm' ),
                'MAH' => __( 'Mahakali', 'mintmrm' ),
                'MEC' => __( 'Mechi', 'mintmrm' ),
                'NAR' => __( 'Narayani', 'mintmrm' ),
                'RAP' => __( 'Rapti', 'mintmrm' ),
                'SAG' => __( 'Sagarmatha', 'mintmrm' ),
                'SET' => __( 'Seti', 'mintmrm' ),
            ),
            'NI' => array( // Nicaraguan states.
                'NI-AN' => __( 'Atlántico Norte', 'mintmrm' ),
                'NI-AS' => __( 'Atlántico Sur', 'mintmrm' ),
                'NI-BO' => __( 'Boaco', 'mintmrm' ),
                'NI-CA' => __( 'Carazo', 'mintmrm' ),
                'NI-CI' => __( 'Chinandega', 'mintmrm' ),
                'NI-CO' => __( 'Chontales', 'mintmrm' ),
                'NI-ES' => __( 'Estelí', 'mintmrm' ),
                'NI-GR' => __( 'Granada', 'mintmrm' ),
                'NI-JI' => __( 'Jinotega', 'mintmrm' ),
                'NI-LE' => __( 'León', 'mintmrm' ),
                'NI-MD' => __( 'Madriz', 'mintmrm' ),
                'NI-MN' => __( 'Managua', 'mintmrm' ),
                'NI-MS' => __( 'Masaya', 'mintmrm' ),
                'NI-MT' => __( 'Matagalpa', 'mintmrm' ),
                'NI-NS' => __( 'Nueva Segovia', 'mintmrm' ),
                'NI-RI' => __( 'Rivas', 'mintmrm' ),
                'NI-SJ' => __( 'Río San Juan', 'mintmrm' ),
            ),
            'NZ' => array( // New Zealand states.
                'NTL' => __( 'Northland', 'mintmrm' ),
                'AUK' => __( 'Auckland', 'mintmrm' ),
                'WKO' => __( 'Waikato', 'mintmrm' ),
                'BOP' => __( 'Bay of Plenty', 'mintmrm' ),
                'TKI' => __( 'Taranaki', 'mintmrm' ),
                'GIS' => __( 'Gisborne', 'mintmrm' ),
                'HKB' => __( 'Hawke’s Bay', 'mintmrm' ),
                'MWT' => __( 'Manawatu-Wanganui', 'mintmrm' ),
                'WGN' => __( 'Wellington', 'mintmrm' ),
                'NSN' => __( 'Nelson', 'mintmrm' ),
                'MBH' => __( 'Marlborough', 'mintmrm' ),
                'TAS' => __( 'Tasman', 'mintmrm' ),
                'WTC' => __( 'West Coast', 'mintmrm' ),
                'CAN' => __( 'Canterbury', 'mintmrm' ),
                'OTA' => __( 'Otago', 'mintmrm' ),
                'STL' => __( 'Southland', 'mintmrm' ),
            ),
            'PA' => array( // Panamanian states.
                'PA-1' => __( 'Bocas del Toro', 'mintmrm' ),
                'PA-2' => __( 'Coclé', 'mintmrm' ),
                'PA-3' => __( 'Colón', 'mintmrm' ),
                'PA-4' => __( 'Chiriquí', 'mintmrm' ),
                'PA-5' => __( 'Darién', 'mintmrm' ),
                'PA-6' => __( 'Herrera', 'mintmrm' ),
                'PA-7' => __( 'Los Santos', 'mintmrm' ),
                'PA-8' => __( 'Panamá', 'mintmrm' ),
                'PA-9' => __( 'Veraguas', 'mintmrm' ),
                'PA-10' => __( 'West Panamá', 'mintmrm' ),
                'PA-EM' => __( 'Emberá', 'mintmrm' ),
                'PA-KY' => __( 'Guna Yala', 'mintmrm' ),
                'PA-NB' => __( 'Ngöbe-Buglé', 'mintmrm' ),
            ),
            'PE' => array( // Peruvian states.
                'CAL' => __( 'El Callao', 'mintmrm' ),
                'LMA' => __( 'Municipalidad Metropolitana de Lima', 'mintmrm' ),
                'AMA' => __( 'Amazonas', 'mintmrm' ),
                'ANC' => __( 'Ancash', 'mintmrm' ),
                'APU' => __( 'Apurímac', 'mintmrm' ),
                'ARE' => __( 'Arequipa', 'mintmrm' ),
                'AYA' => __( 'Ayacucho', 'mintmrm' ),
                'CAJ' => __( 'Cajamarca', 'mintmrm' ),
                'CUS' => __( 'Cusco', 'mintmrm' ),
                'HUV' => __( 'Huancavelica', 'mintmrm' ),
                'HUC' => __( 'Huánuco', 'mintmrm' ),
                'ICA' => __( 'Ica', 'mintmrm' ),
                'JUN' => __( 'Junín', 'mintmrm' ),
                'LAL' => __( 'La Libertad', 'mintmrm' ),
                'LAM' => __( 'Lambayeque', 'mintmrm' ),
                'LIM' => __( 'Lima', 'mintmrm' ),
                'LOR' => __( 'Loreto', 'mintmrm' ),
                'MDD' => __( 'Madre de Dios', 'mintmrm' ),
                'MOQ' => __( 'Moquegua', 'mintmrm' ),
                'PAS' => __( 'Pasco', 'mintmrm' ),
                'PIU' => __( 'Piura', 'mintmrm' ),
                'PUN' => __( 'Puno', 'mintmrm' ),
                'SAM' => __( 'San Martín', 'mintmrm' ),
                'TAC' => __( 'Tacna', 'mintmrm' ),
                'TUM' => __( 'Tumbes', 'mintmrm' ),
                'UCA' => __( 'Ucayali', 'mintmrm' ),
            ),
            'PH' => array( // Philippine provinces.
                'ABR' => __( 'Abra', 'mintmrm' ),
                'AGN' => __( 'Agusan del Norte', 'mintmrm' ),
                'AGS' => __( 'Agusan del Sur', 'mintmrm' ),
                'AKL' => __( 'Aklan', 'mintmrm' ),
                'ALB' => __( 'Albay', 'mintmrm' ),
                'ANT' => __( 'Antique', 'mintmrm' ),
                'APA' => __( 'Apayao', 'mintmrm' ),
                'AUR' => __( 'Aurora', 'mintmrm' ),
                'BAS' => __( 'Basilan', 'mintmrm' ),
                'BAN' => __( 'Bataan', 'mintmrm' ),
                'BTN' => __( 'Batanes', 'mintmrm' ),
                'BTG' => __( 'Batangas', 'mintmrm' ),
                'BEN' => __( 'Benguet', 'mintmrm' ),
                'BIL' => __( 'Biliran', 'mintmrm' ),
                'BOH' => __( 'Bohol', 'mintmrm' ),
                'BUK' => __( 'Bukidnon', 'mintmrm' ),
                'BUL' => __( 'Bulacan', 'mintmrm' ),
                'CAG' => __( 'Cagayan', 'mintmrm' ),
                'CAN' => __( 'Camarines Norte', 'mintmrm' ),
                'CAS' => __( 'Camarines Sur', 'mintmrm' ),
                'CAM' => __( 'Camiguin', 'mintmrm' ),
                'CAP' => __( 'Capiz', 'mintmrm' ),
                'CAT' => __( 'Catanduanes', 'mintmrm' ),
                'CAV' => __( 'Cavite', 'mintmrm' ),
                'CEB' => __( 'Cebu', 'mintmrm' ),
                'COM' => __( 'Compostela Valley', 'mintmrm' ),
                'NCO' => __( 'Cotabato', 'mintmrm' ),
                'DAV' => __( 'Davao del Norte', 'mintmrm' ),
                'DAS' => __( 'Davao del Sur', 'mintmrm' ),
                'DAC' => __( 'Davao Occidental', 'mintmrm' ),
                'DAO' => __( 'Davao Oriental', 'mintmrm' ),
                'DIN' => __( 'Dinagat Islands', 'mintmrm' ),
                'EAS' => __( 'Eastern Samar', 'mintmrm' ),
                'GUI' => __( 'Guimaras', 'mintmrm' ),
                'IFU' => __( 'Ifugao', 'mintmrm' ),
                'ILN' => __( 'Ilocos Norte', 'mintmrm' ),
                'ILS' => __( 'Ilocos Sur', 'mintmrm' ),
                'ILI' => __( 'Iloilo', 'mintmrm' ),
                'ISA' => __( 'Isabela', 'mintmrm' ),
                'KAL' => __( 'Kalinga', 'mintmrm' ),
                'LUN' => __( 'La Union', 'mintmrm' ),
                'LAG' => __( 'Laguna', 'mintmrm' ),
                'LAN' => __( 'Lanao del Norte', 'mintmrm' ),
                'LAS' => __( 'Lanao del Sur', 'mintmrm' ),
                'LEY' => __( 'Leyte', 'mintmrm' ),
                'MAG' => __( 'Maguindanao', 'mintmrm' ),
                'MAD' => __( 'Marinduque', 'mintmrm' ),
                'MAS' => __( 'Masbate', 'mintmrm' ),
                'MSC' => __( 'Misamis Occidental', 'mintmrm' ),
                'MSR' => __( 'Misamis Oriental', 'mintmrm' ),
                'MOU' => __( 'Mountain Province', 'mintmrm' ),
                'NEC' => __( 'Negros Occidental', 'mintmrm' ),
                'NER' => __( 'Negros Oriental', 'mintmrm' ),
                'NSA' => __( 'Northern Samar', 'mintmrm' ),
                'NUE' => __( 'Nueva Ecija', 'mintmrm' ),
                'NUV' => __( 'Nueva Vizcaya', 'mintmrm' ),
                'MDC' => __( 'Occidental Mindoro', 'mintmrm' ),
                'MDR' => __( 'Oriental Mindoro', 'mintmrm' ),
                'PLW' => __( 'Palawan', 'mintmrm' ),
                'PAM' => __( 'Pampanga', 'mintmrm' ),
                'PAN' => __( 'Pangasinan', 'mintmrm' ),
                'QUE' => __( 'Quezon', 'mintmrm' ),
                'QUI' => __( 'Quirino', 'mintmrm' ),
                'RIZ' => __( 'Rizal', 'mintmrm' ),
                'ROM' => __( 'Romblon', 'mintmrm' ),
                'WSA' => __( 'Samar', 'mintmrm' ),
                'SAR' => __( 'Sarangani', 'mintmrm' ),
                'SIQ' => __( 'Siquijor', 'mintmrm' ),
                'SOR' => __( 'Sorsogon', 'mintmrm' ),
                'SCO' => __( 'South Cotabato', 'mintmrm' ),
                'SLE' => __( 'Southern Leyte', 'mintmrm' ),
                'SUK' => __( 'Sultan Kudarat', 'mintmrm' ),
                'SLU' => __( 'Sulu', 'mintmrm' ),
                'SUN' => __( 'Surigao del Norte', 'mintmrm' ),
                'SUR' => __( 'Surigao del Sur', 'mintmrm' ),
                'TAR' => __( 'Tarlac', 'mintmrm' ),
                'TAW' => __( 'Tawi-Tawi', 'mintmrm' ),
                'ZMB' => __( 'Zambales', 'mintmrm' ),
                'ZAN' => __( 'Zamboanga del Norte', 'mintmrm' ),
                'ZAS' => __( 'Zamboanga del Sur', 'mintmrm' ),
                'ZSI' => __( 'Zamboanga Sibugay', 'mintmrm' ),
                '00'  => __( 'Metro Manila', 'mintmrm' ),
            ),
            'PK' => array( // Pakistani states.
                'JK' => __( 'Azad Kashmir', 'mintmrm' ),
                'BA' => __( 'Balochistan', 'mintmrm' ),
                'TA' => __( 'FATA', 'mintmrm' ),
                'GB' => __( 'Gilgit Baltistan', 'mintmrm' ),
                'IS' => __( 'Islamabad Capital Territory', 'mintmrm' ),
                'KP' => __( 'Khyber Pakhtunkhwa', 'mintmrm' ),
                'PB' => __( 'Punjab', 'mintmrm' ),
                'SD' => __( 'Sindh', 'mintmrm' ),
            ),
            'PL' => array(),
            'PR' => array(),
            'PT' => array(),
            'PY' => array( // Paraguayan states.
                'PY-ASU' => __( 'Asunción', 'mintmrm' ),
                'PY-1'   => __( 'Concepción', 'mintmrm' ),
                'PY-2'   => __( 'San Pedro', 'mintmrm' ),
                'PY-3'   => __( 'Cordillera', 'mintmrm' ),
                'PY-4'   => __( 'Guairá', 'mintmrm' ),
                'PY-5'   => __( 'Caaguazú', 'mintmrm' ),
                'PY-6'   => __( 'Caazapá', 'mintmrm' ),
                'PY-7'   => __( 'Itapúa', 'mintmrm' ),
                'PY-8'   => __( 'Misiones', 'mintmrm' ),
                'PY-9'   => __( 'Paraguarí', 'mintmrm' ),
                'PY-10'  => __( 'Alto Paraná', 'mintmrm' ),
                'PY-11'  => __( 'Central', 'mintmrm' ),
                'PY-12'  => __( 'Ñeembucú', 'mintmrm' ),
                'PY-13'  => __( 'Amambay', 'mintmrm' ),
                'PY-14'  => __( 'Canindeyú', 'mintmrm' ),
                'PY-15'  => __( 'Presidente Hayes', 'mintmrm' ),
                'PY-16'  => __( 'Alto Paraguay', 'mintmrm' ),
                'PY-17'  => __( 'Boquerón', 'mintmrm' ),
            ),
            'RE' => array(),
            'RO' => array( // Romanian states.
                'AB' => __( 'Alba', 'mintmrm' ),
                'AR' => __( 'Arad', 'mintmrm' ),
                'AG' => __( 'Argeș', 'mintmrm' ),
                'BC' => __( 'Bacău', 'mintmrm' ),
                'BH' => __( 'Bihor', 'mintmrm' ),
                'BN' => __( 'Bistrița-Năsăud', 'mintmrm' ),
                'BT' => __( 'Botoșani', 'mintmrm' ),
                'BR' => __( 'Brăila', 'mintmrm' ),
                'BV' => __( 'Brașov', 'mintmrm' ),
                'B'  => __( 'București', 'mintmrm' ),
                'BZ' => __( 'Buzău', 'mintmrm' ),
                'CL' => __( 'Călărași', 'mintmrm' ),
                'CS' => __( 'Caraș-Severin', 'mintmrm' ),
                'CJ' => __( 'Cluj', 'mintmrm' ),
                'CT' => __( 'Constanța', 'mintmrm' ),
                'CV' => __( 'Covasna', 'mintmrm' ),
                'DB' => __( 'Dâmbovița', 'mintmrm' ),
                'DJ' => __( 'Dolj', 'mintmrm' ),
                'GL' => __( 'Galați', 'mintmrm' ),
                'GR' => __( 'Giurgiu', 'mintmrm' ),
                'GJ' => __( 'Gorj', 'mintmrm' ),
                'HR' => __( 'Harghita', 'mintmrm' ),
                'HD' => __( 'Hunedoara', 'mintmrm' ),
                'IL' => __( 'Ialomița', 'mintmrm' ),
                'IS' => __( 'Iași', 'mintmrm' ),
                'IF' => __( 'Ilfov', 'mintmrm' ),
                'MM' => __( 'Maramureș', 'mintmrm' ),
                'MH' => __( 'Mehedinți', 'mintmrm' ),
                'MS' => __( 'Mureș', 'mintmrm' ),
                'NT' => __( 'Neamț', 'mintmrm' ),
                'OT' => __( 'Olt', 'mintmrm' ),
                'PH' => __( 'Prahova', 'mintmrm' ),
                'SJ' => __( 'Sălaj', 'mintmrm' ),
                'SM' => __( 'Satu Mare', 'mintmrm' ),
                'SB' => __( 'Sibiu', 'mintmrm' ),
                'SV' => __( 'Suceava', 'mintmrm' ),
                'TR' => __( 'Teleorman', 'mintmrm' ),
                'TM' => __( 'Timiș', 'mintmrm' ),
                'TL' => __( 'Tulcea', 'mintmrm' ),
                'VL' => __( 'Vâlcea', 'mintmrm' ),
                'VS' => __( 'Vaslui', 'mintmrm' ),
                'VN' => __( 'Vrancea', 'mintmrm' ),
            ),
            'SG' => array(),
            'SK' => array(),
            'SI' => array(),
            'SV' => array( // Salvadoran states.
                'SV-AH' => __( 'Ahuachapán', 'mintmrm' ),
                'SV-CA' => __( 'Cabañas', 'mintmrm' ),
                'SV-CH' => __( 'Chalatenango', 'mintmrm' ),
                'SV-CU' => __( 'Cuscatlán', 'mintmrm' ),
                'SV-LI' => __( 'La Libertad', 'mintmrm' ),
                'SV-MO' => __( 'Morazán', 'mintmrm' ),
                'SV-PA' => __( 'La Paz', 'mintmrm' ),
                'SV-SA' => __( 'Santa Ana', 'mintmrm' ),
                'SV-SM' => __( 'San Miguel', 'mintmrm' ),
                'SV-SO' => __( 'Sonsonate', 'mintmrm' ),
                'SV-SS' => __( 'San Salvador', 'mintmrm' ),
                'SV-SV' => __( 'San Vicente', 'mintmrm' ),
                'SV-UN' => __( 'La Unión', 'mintmrm' ),
                'SV-US' => __( 'Usulután', 'mintmrm' ),
            ),
            'TH' => array( // Thai states.
                'TH-37' => __( 'Amnat Charoen', 'mintmrm' ),
                'TH-15' => __( 'Ang Thong', 'mintmrm' ),
                'TH-14' => __( 'Ayutthaya', 'mintmrm' ),
                'TH-10' => __( 'Bangkok', 'mintmrm' ),
                'TH-38' => __( 'Bueng Kan', 'mintmrm' ),
                'TH-31' => __( 'Buri Ram', 'mintmrm' ),
                'TH-24' => __( 'Chachoengsao', 'mintmrm' ),
                'TH-18' => __( 'Chai Nat', 'mintmrm' ),
                'TH-36' => __( 'Chaiyaphum', 'mintmrm' ),
                'TH-22' => __( 'Chanthaburi', 'mintmrm' ),
                'TH-50' => __( 'Chiang Mai', 'mintmrm' ),
                'TH-57' => __( 'Chiang Rai', 'mintmrm' ),
                'TH-20' => __( 'Chonburi', 'mintmrm' ),
                'TH-86' => __( 'Chumphon', 'mintmrm' ),
                'TH-46' => __( 'Kalasin', 'mintmrm' ),
                'TH-62' => __( 'Kamphaeng Phet', 'mintmrm' ),
                'TH-71' => __( 'Kanchanaburi', 'mintmrm' ),
                'TH-40' => __( 'Khon Kaen', 'mintmrm' ),
                'TH-81' => __( 'Krabi', 'mintmrm' ),
                'TH-52' => __( 'Lampang', 'mintmrm' ),
                'TH-51' => __( 'Lamphun', 'mintmrm' ),
                'TH-42' => __( 'Loei', 'mintmrm' ),
                'TH-16' => __( 'Lopburi', 'mintmrm' ),
                'TH-58' => __( 'Mae Hong Son', 'mintmrm' ),
                'TH-44' => __( 'Maha Sarakham', 'mintmrm' ),
                'TH-49' => __( 'Mukdahan', 'mintmrm' ),
                'TH-26' => __( 'Nakhon Nayok', 'mintmrm' ),
                'TH-73' => __( 'Nakhon Pathom', 'mintmrm' ),
                'TH-48' => __( 'Nakhon Phanom', 'mintmrm' ),
                'TH-30' => __( 'Nakhon Ratchasima', 'mintmrm' ),
                'TH-60' => __( 'Nakhon Sawan', 'mintmrm' ),
                'TH-80' => __( 'Nakhon Si Thammarat', 'mintmrm' ),
                'TH-55' => __( 'Nan', 'mintmrm' ),
                'TH-96' => __( 'Narathiwat', 'mintmrm' ),
                'TH-39' => __( 'Nong Bua Lam Phu', 'mintmrm' ),
                'TH-43' => __( 'Nong Khai', 'mintmrm' ),
                'TH-12' => __( 'Nonthaburi', 'mintmrm' ),
                'TH-13' => __( 'Pathum Thani', 'mintmrm' ),
                'TH-94' => __( 'Pattani', 'mintmrm' ),
                'TH-82' => __( 'Phang Nga', 'mintmrm' ),
                'TH-93' => __( 'Phatthalung', 'mintmrm' ),
                'TH-56' => __( 'Phayao', 'mintmrm' ),
                'TH-67' => __( 'Phetchabun', 'mintmrm' ),
                'TH-76' => __( 'Phetchaburi', 'mintmrm' ),
                'TH-66' => __( 'Phichit', 'mintmrm' ),
                'TH-65' => __( 'Phitsanulok', 'mintmrm' ),
                'TH-54' => __( 'Phrae', 'mintmrm' ),
                'TH-83' => __( 'Phuket', 'mintmrm' ),
                'TH-25' => __( 'Prachin Buri', 'mintmrm' ),
                'TH-77' => __( 'Prachuap Khiri Khan', 'mintmrm' ),
                'TH-85' => __( 'Ranong', 'mintmrm' ),
                'TH-70' => __( 'Ratchaburi', 'mintmrm' ),
                'TH-21' => __( 'Rayong', 'mintmrm' ),
                'TH-45' => __( 'Roi Et', 'mintmrm' ),
                'TH-27' => __( 'Sa Kaeo', 'mintmrm' ),
                'TH-47' => __( 'Sakon Nakhon', 'mintmrm' ),
                'TH-11' => __( 'Samut Prakan', 'mintmrm' ),
                'TH-74' => __( 'Samut Sakhon', 'mintmrm' ),
                'TH-75' => __( 'Samut Songkhram', 'mintmrm' ),
                'TH-19' => __( 'Saraburi', 'mintmrm' ),
                'TH-91' => __( 'Satun', 'mintmrm' ),
                'TH-17' => __( 'Sing Buri', 'mintmrm' ),
                'TH-33' => __( 'Sisaket', 'mintmrm' ),
                'TH-90' => __( 'Songkhla', 'mintmrm' ),
                'TH-64' => __( 'Sukhothai', 'mintmrm' ),
                'TH-72' => __( 'Suphan Buri', 'mintmrm' ),
                'TH-84' => __( 'Surat Thani', 'mintmrm' ),
                'TH-32' => __( 'Surin', 'mintmrm' ),
                'TH-63' => __( 'Tak', 'mintmrm' ),
                'TH-92' => __( 'Trang', 'mintmrm' ),
                'TH-23' => __( 'Trat', 'mintmrm' ),
                'TH-34' => __( 'Ubon Ratchathani', 'mintmrm' ),
                'TH-41' => __( 'Udon Thani', 'mintmrm' ),
                'TH-61' => __( 'Uthai Thani', 'mintmrm' ),
                'TH-53' => __( 'Uttaradit', 'mintmrm' ),
                'TH-95' => __( 'Yala', 'mintmrm' ),
                'TH-35' => __( 'Yasothon', 'mintmrm' ),
            ),
            'TR' => array( // Turkish states.
                'TR01' => __( 'Adana', 'mintmrm' ),
                'TR02' => __( 'Adıyaman', 'mintmrm' ),
                'TR03' => __( 'Afyon', 'mintmrm' ),
                'TR04' => __( 'Ağrı', 'mintmrm' ),
                'TR05' => __( 'Amasya', 'mintmrm' ),
                'TR06' => __( 'Ankara', 'mintmrm' ),
                'TR07' => __( 'Antalya', 'mintmrm' ),
                'TR08' => __( 'Artvin', 'mintmrm' ),
                'TR09' => __( 'Aydın', 'mintmrm' ),
                'TR10' => __( 'Balıkesir', 'mintmrm' ),
                'TR11' => __( 'Bilecik', 'mintmrm' ),
                'TR12' => __( 'Bingöl', 'mintmrm' ),
                'TR13' => __( 'Bitlis', 'mintmrm' ),
                'TR14' => __( 'Bolu', 'mintmrm' ),
                'TR15' => __( 'Burdur', 'mintmrm' ),
                'TR16' => __( 'Bursa', 'mintmrm' ),
                'TR17' => __( 'Çanakkale', 'mintmrm' ),
                'TR18' => __( 'Çankırı', 'mintmrm' ),
                'TR19' => __( 'Çorum', 'mintmrm' ),
                'TR20' => __( 'Denizli', 'mintmrm' ),
                'TR21' => __( 'Diyarbakır', 'mintmrm' ),
                'TR22' => __( 'Edirne', 'mintmrm' ),
                'TR23' => __( 'Elazığ', 'mintmrm' ),
                'TR24' => __( 'Erzincan', 'mintmrm' ),
                'TR25' => __( 'Erzurum', 'mintmrm' ),
                'TR26' => __( 'Eskişehir', 'mintmrm' ),
                'TR27' => __( 'Gaziantep', 'mintmrm' ),
                'TR28' => __( 'Giresun', 'mintmrm' ),
                'TR29' => __( 'Gümüşhane', 'mintmrm' ),
                'TR30' => __( 'Hakkari', 'mintmrm' ),
                'TR31' => __( 'Hatay', 'mintmrm' ),
                'TR32' => __( 'Isparta', 'mintmrm' ),
                'TR33' => __( 'İçel', 'mintmrm' ),
                'TR34' => __( 'İstanbul', 'mintmrm' ),
                'TR35' => __( 'İzmir', 'mintmrm' ),
                'TR36' => __( 'Kars', 'mintmrm' ),
                'TR37' => __( 'Kastamonu', 'mintmrm' ),
                'TR38' => __( 'Kayseri', 'mintmrm' ),
                'TR39' => __( 'Kırklareli', 'mintmrm' ),
                'TR40' => __( 'Kırşehir', 'mintmrm' ),
                'TR41' => __( 'Kocaeli', 'mintmrm' ),
                'TR42' => __( 'Konya', 'mintmrm' ),
                'TR43' => __( 'Kütahya', 'mintmrm' ),
                'TR44' => __( 'Malatya', 'mintmrm' ),
                'TR45' => __( 'Manisa', 'mintmrm' ),
                'TR46' => __( 'Kahramanmaraş', 'mintmrm' ),
                'TR47' => __( 'Mardin', 'mintmrm' ),
                'TR48' => __( 'Muğla', 'mintmrm' ),
                'TR49' => __( 'Muş', 'mintmrm' ),
                'TR50' => __( 'Nevşehir', 'mintmrm' ),
                'TR51' => __( 'Niğde', 'mintmrm' ),
                'TR52' => __( 'Ordu', 'mintmrm' ),
                'TR53' => __( 'Rize', 'mintmrm' ),
                'TR54' => __( 'Sakarya', 'mintmrm' ),
                'TR55' => __( 'Samsun', 'mintmrm' ),
                'TR56' => __( 'Siirt', 'mintmrm' ),
                'TR57' => __( 'Sinop', 'mintmrm' ),
                'TR58' => __( 'Sivas', 'mintmrm' ),
                'TR59' => __( 'Tekirdağ', 'mintmrm' ),
                'TR60' => __( 'Tokat', 'mintmrm' ),
                'TR61' => __( 'Trabzon', 'mintmrm' ),
                'TR62' => __( 'Tunceli', 'mintmrm' ),
                'TR63' => __( 'Şanlıurfa', 'mintmrm' ),
                'TR64' => __( 'Uşak', 'mintmrm' ),
                'TR65' => __( 'Van', 'mintmrm' ),
                'TR66' => __( 'Yozgat', 'mintmrm' ),
                'TR67' => __( 'Zonguldak', 'mintmrm' ),
                'TR68' => __( 'Aksaray', 'mintmrm' ),
                'TR69' => __( 'Bayburt', 'mintmrm' ),
                'TR70' => __( 'Karaman', 'mintmrm' ),
                'TR71' => __( 'Kırıkkale', 'mintmrm' ),
                'TR72' => __( 'Batman', 'mintmrm' ),
                'TR73' => __( 'Şırnak', 'mintmrm' ),
                'TR74' => __( 'Bartın', 'mintmrm' ),
                'TR75' => __( 'Ardahan', 'mintmrm' ),
                'TR76' => __( 'Iğdır', 'mintmrm' ),
                'TR77' => __( 'Yalova', 'mintmrm' ),
                'TR78' => __( 'Karabük', 'mintmrm' ),
                'TR79' => __( 'Kilis', 'mintmrm' ),
                'TR80' => __( 'Osmaniye', 'mintmrm' ),
                'TR81' => __( 'Düzce', 'mintmrm' ),
            ),
            'TZ' => array( // Tanzanian states.
                'TZ01' => __( 'Arusha', 'mintmrm' ),
                'TZ02' => __( 'Dar es Salaam', 'mintmrm' ),
                'TZ03' => __( 'Dodoma', 'mintmrm' ),
                'TZ04' => __( 'Iringa', 'mintmrm' ),
                'TZ05' => __( 'Kagera', 'mintmrm' ),
                'TZ06' => __( 'Pemba North', 'mintmrm' ),
                'TZ07' => __( 'Zanzibar North', 'mintmrm' ),
                'TZ08' => __( 'Kigoma', 'mintmrm' ),
                'TZ09' => __( 'Kilimanjaro', 'mintmrm' ),
                'TZ10' => __( 'Pemba South', 'mintmrm' ),
                'TZ11' => __( 'Zanzibar South', 'mintmrm' ),
                'TZ12' => __( 'Lindi', 'mintmrm' ),
                'TZ13' => __( 'Mara', 'mintmrm' ),
                'TZ14' => __( 'Mbeya', 'mintmrm' ),
                'TZ15' => __( 'Zanzibar West', 'mintmrm' ),
                'TZ16' => __( 'Morogoro', 'mintmrm' ),
                'TZ17' => __( 'Mtwara', 'mintmrm' ),
                'TZ18' => __( 'Mwanza', 'mintmrm' ),
                'TZ19' => __( 'Coast', 'mintmrm' ),
                'TZ20' => __( 'Rukwa', 'mintmrm' ),
                'TZ21' => __( 'Ruvuma', 'mintmrm' ),
                'TZ22' => __( 'Shinyanga', 'mintmrm' ),
                'TZ23' => __( 'Singida', 'mintmrm' ),
                'TZ24' => __( 'Tabora', 'mintmrm' ),
                'TZ25' => __( 'Tanga', 'mintmrm' ),
                'TZ26' => __( 'Manyara', 'mintmrm' ),
                'TZ27' => __( 'Geita', 'mintmrm' ),
                'TZ28' => __( 'Katavi', 'mintmrm' ),
                'TZ29' => __( 'Njombe', 'mintmrm' ),
                'TZ30' => __( 'Simiyu', 'mintmrm' ),
            ),
            'LK' => array(),
            'RS' => array( // Serbian districts.
                'RS00' => _x( 'Belgrade', 'district', 'mintmrm' ),
                'RS14' => _x( 'Bor', 'district', 'mintmrm' ),
                'RS11' => _x( 'Braničevo', 'district', 'mintmrm' ),
                'RS02' => _x( 'Central Banat', 'district', 'mintmrm' ),
                'RS10' => _x( 'Danube', 'district', 'mintmrm' ),
                'RS23' => _x( 'Jablanica', 'district', 'mintmrm' ),
                'RS09' => _x( 'Kolubara', 'district', 'mintmrm' ),
                'RS08' => _x( 'Mačva', 'district', 'mintmrm' ),
                'RS17' => _x( 'Morava', 'district', 'mintmrm' ),
                'RS20' => _x( 'Nišava', 'district', 'mintmrm' ),
                'RS01' => _x( 'North Bačka', 'district', 'mintmrm' ),
                'RS03' => _x( 'North Banat', 'district', 'mintmrm' ),
                'RS24' => _x( 'Pčinja', 'district', 'mintmrm' ),
                'RS22' => _x( 'Pirot', 'district', 'mintmrm' ),
                'RS13' => _x( 'Pomoravlje', 'district', 'mintmrm' ),
                'RS19' => _x( 'Rasina', 'district', 'mintmrm' ),
                'RS18' => _x( 'Raška', 'district', 'mintmrm' ),
                'RS06' => _x( 'South Bačka', 'district', 'mintmrm' ),
                'RS04' => _x( 'South Banat', 'district', 'mintmrm' ),
                'RS07' => _x( 'Srem', 'district', 'mintmrm' ),
                'RS12' => _x( 'Šumadija', 'district', 'mintmrm' ),
                'RS21' => _x( 'Toplica', 'district', 'mintmrm' ),
                'RS05' => _x( 'West Bačka', 'district', 'mintmrm' ),
                'RS15' => _x( 'Zaječar', 'district', 'mintmrm' ),
                'RS16' => _x( 'Zlatibor', 'district', 'mintmrm' ),
                'RS25' => _x( 'Kosovo', 'district', 'mintmrm' ),
                'RS26' => _x( 'Peć', 'district', 'mintmrm' ),
                'RS27' => _x( 'Prizren', 'district', 'mintmrm' ),
                'RS28' => _x( 'Kosovska Mitrovica', 'district', 'mintmrm' ),
                'RS29' => _x( 'Kosovo-Pomoravlje', 'district', 'mintmrm' ),
                'RSKM' => _x( 'Kosovo-Metohija', 'district', 'mintmrm' ),
                'RSVO' => _x( 'Vojvodina', 'district', 'mintmrm' ),
            ),
            'SE' => array(),
            'UA' => array( // Ukrainian oblasts.
                'VN' => __( 'Vinnytsia Oblast', 'mintmrm' ),
                'VL' => __( 'Volyn Oblast', 'mintmrm' ),
                'DP' => __( 'Dnipropetrovsk Oblast', 'mintmrm' ),
                'DT' => __( 'Donetsk Oblast', 'mintmrm' ),
                'ZT' => __( 'Zhytomyr Oblast', 'mintmrm' ),
                'ZK' => __( 'Zakarpattia Oblast', 'mintmrm' ),
                'ZP' => __( 'Zaporizhzhia Oblast', 'mintmrm' ),
                'IF' => __( 'Ivano-Frankivsk Oblast', 'mintmrm' ),
                'KV' => __( 'Kyiv Oblast', 'mintmrm' ),
                'KH' => __( 'Kirovohrad Oblast', 'mintmrm' ),
                'LH' => __( 'Luhansk Oblast', 'mintmrm' ),
                'LV' => __( 'Lviv Oblast', 'mintmrm' ),
                'MY' => __( 'Mykolaiv Oblast', 'mintmrm' ),
                'OD' => __( 'Odessa Oblast', 'mintmrm' ),
                'PL' => __( 'Poltava Oblast', 'mintmrm' ),
                'RV' => __( 'Rivne Oblast', 'mintmrm' ),
                'SM' => __( 'Sumy Oblast', 'mintmrm' ),
                'TP' => __( 'Ternopil Oblast', 'mintmrm' ),
                'KK' => __( 'Kharkiv Oblast', 'mintmrm' ),
                'KS' => __( 'Kherson Oblast', 'mintmrm' ),
                'KM' => __( 'Khmelnytskyi Oblast', 'mintmrm' ),
                'CK' => __( 'Cherkasy Oblast', 'mintmrm' ),
                'CH' => __( 'Chernihiv Oblast', 'mintmrm' ),
                'CV' => __( 'Chernivtsi Oblast', 'mintmrm' ),
            ),
            'UG' => array( // Ugandan districts.
                'UG314' => __( 'Abim', 'mintmrm' ),
                'UG301' => __( 'Adjumani', 'mintmrm' ),
                'UG322' => __( 'Agago', 'mintmrm' ),
                'UG323' => __( 'Alebtong', 'mintmrm' ),
                'UG315' => __( 'Amolatar', 'mintmrm' ),
                'UG324' => __( 'Amudat', 'mintmrm' ),
                'UG216' => __( 'Amuria', 'mintmrm' ),
                'UG316' => __( 'Amuru', 'mintmrm' ),
                'UG302' => __( 'Apac', 'mintmrm' ),
                'UG303' => __( 'Arua', 'mintmrm' ),
                'UG217' => __( 'Budaka', 'mintmrm' ),
                'UG218' => __( 'Bududa', 'mintmrm' ),
                'UG201' => __( 'Bugiri', 'mintmrm' ),
                'UG235' => __( 'Bugweri', 'mintmrm' ),
                'UG420' => __( 'Buhweju', 'mintmrm' ),
                'UG117' => __( 'Buikwe', 'mintmrm' ),
                'UG219' => __( 'Bukedea', 'mintmrm' ),
                'UG118' => __( 'Bukomansimbi', 'mintmrm' ),
                'UG220' => __( 'Bukwa', 'mintmrm' ),
                'UG225' => __( 'Bulambuli', 'mintmrm' ),
                'UG416' => __( 'Buliisa', 'mintmrm' ),
                'UG401' => __( 'Bundibugyo', 'mintmrm' ),
                'UG430' => __( 'Bunyangabu', 'mintmrm' ),
                'UG402' => __( 'Bushenyi', 'mintmrm' ),
                'UG202' => __( 'Busia', 'mintmrm' ),
                'UG221' => __( 'Butaleja', 'mintmrm' ),
                'UG119' => __( 'Butambala', 'mintmrm' ),
                'UG233' => __( 'Butebo', 'mintmrm' ),
                'UG120' => __( 'Buvuma', 'mintmrm' ),
                'UG226' => __( 'Buyende', 'mintmrm' ),
                'UG317' => __( 'Dokolo', 'mintmrm' ),
                'UG121' => __( 'Gomba', 'mintmrm' ),
                'UG304' => __( 'Gulu', 'mintmrm' ),
                'UG403' => __( 'Hoima', 'mintmrm' ),
                'UG417' => __( 'Ibanda', 'mintmrm' ),
                'UG203' => __( 'Iganga', 'mintmrm' ),
                'UG418' => __( 'Isingiro', 'mintmrm' ),
                'UG204' => __( 'Jinja', 'mintmrm' ),
                'UG318' => __( 'Kaabong', 'mintmrm' ),
                'UG404' => __( 'Kabale', 'mintmrm' ),
                'UG405' => __( 'Kabarole', 'mintmrm' ),
                'UG213' => __( 'Kaberamaido', 'mintmrm' ),
                'UG427' => __( 'Kagadi', 'mintmrm' ),
                'UG428' => __( 'Kakumiro', 'mintmrm' ),
                'UG101' => __( 'Kalangala', 'mintmrm' ),
                'UG222' => __( 'Kaliro', 'mintmrm' ),
                'UG122' => __( 'Kalungu', 'mintmrm' ),
                'UG102' => __( 'Kampala', 'mintmrm' ),
                'UG205' => __( 'Kamuli', 'mintmrm' ),
                'UG413' => __( 'Kamwenge', 'mintmrm' ),
                'UG414' => __( 'Kanungu', 'mintmrm' ),
                'UG206' => __( 'Kapchorwa', 'mintmrm' ),
                'UG236' => __( 'Kapelebyong', 'mintmrm' ),
                'UG126' => __( 'Kasanda', 'mintmrm' ),
                'UG406' => __( 'Kasese', 'mintmrm' ),
                'UG207' => __( 'Katakwi', 'mintmrm' ),
                'UG112' => __( 'Kayunga', 'mintmrm' ),
                'UG407' => __( 'Kibaale', 'mintmrm' ),
                'UG103' => __( 'Kiboga', 'mintmrm' ),
                'UG227' => __( 'Kibuku', 'mintmrm' ),
                'UG432' => __( 'Kikuube', 'mintmrm' ),
                'UG419' => __( 'Kiruhura', 'mintmrm' ),
                'UG421' => __( 'Kiryandongo', 'mintmrm' ),
                'UG408' => __( 'Kisoro', 'mintmrm' ),
                'UG305' => __( 'Kitgum', 'mintmrm' ),
                'UG319' => __( 'Koboko', 'mintmrm' ),
                'UG325' => __( 'Kole', 'mintmrm' ),
                'UG306' => __( 'Kotido', 'mintmrm' ),
                'UG208' => __( 'Kumi', 'mintmrm' ),
                'UG333' => __( 'Kwania', 'mintmrm' ),
                'UG228' => __( 'Kween', 'mintmrm' ),
                'UG123' => __( 'Kyankwanzi', 'mintmrm' ),
                'UG422' => __( 'Kyegegwa', 'mintmrm' ),
                'UG415' => __( 'Kyenjojo', 'mintmrm' ),
                'UG125' => __( 'Kyotera', 'mintmrm' ),
                'UG326' => __( 'Lamwo', 'mintmrm' ),
                'UG307' => __( 'Lira', 'mintmrm' ),
                'UG229' => __( 'Luuka', 'mintmrm' ),
                'UG104' => __( 'Luwero', 'mintmrm' ),
                'UG124' => __( 'Lwengo', 'mintmrm' ),
                'UG114' => __( 'Lyantonde', 'mintmrm' ),
                'UG223' => __( 'Manafwa', 'mintmrm' ),
                'UG320' => __( 'Maracha', 'mintmrm' ),
                'UG105' => __( 'Masaka', 'mintmrm' ),
                'UG409' => __( 'Masindi', 'mintmrm' ),
                'UG214' => __( 'Mayuge', 'mintmrm' ),
                'UG209' => __( 'Mbale', 'mintmrm' ),
                'UG410' => __( 'Mbarara', 'mintmrm' ),
                'UG423' => __( 'Mitooma', 'mintmrm' ),
                'UG115' => __( 'Mityana', 'mintmrm' ),
                'UG308' => __( 'Moroto', 'mintmrm' ),
                'UG309' => __( 'Moyo', 'mintmrm' ),
                'UG106' => __( 'Mpigi', 'mintmrm' ),
                'UG107' => __( 'Mubende', 'mintmrm' ),
                'UG108' => __( 'Mukono', 'mintmrm' ),
                'UG334' => __( 'Nabilatuk', 'mintmrm' ),
                'UG311' => __( 'Nakapiripirit', 'mintmrm' ),
                'UG116' => __( 'Nakaseke', 'mintmrm' ),
                'UG109' => __( 'Nakasongola', 'mintmrm' ),
                'UG230' => __( 'Namayingo', 'mintmrm' ),
                'UG234' => __( 'Namisindwa', 'mintmrm' ),
                'UG224' => __( 'Namutumba', 'mintmrm' ),
                'UG327' => __( 'Napak', 'mintmrm' ),
                'UG310' => __( 'Nebbi', 'mintmrm' ),
                'UG231' => __( 'Ngora', 'mintmrm' ),
                'UG424' => __( 'Ntoroko', 'mintmrm' ),
                'UG411' => __( 'Ntungamo', 'mintmrm' ),
                'UG328' => __( 'Nwoya', 'mintmrm' ),
                'UG331' => __( 'Omoro', 'mintmrm' ),
                'UG329' => __( 'Otuke', 'mintmrm' ),
                'UG321' => __( 'Oyam', 'mintmrm' ),
                'UG312' => __( 'Pader', 'mintmrm' ),
                'UG332' => __( 'Pakwach', 'mintmrm' ),
                'UG210' => __( 'Pallisa', 'mintmrm' ),
                'UG110' => __( 'Rakai', 'mintmrm' ),
                'UG429' => __( 'Rubanda', 'mintmrm' ),
                'UG425' => __( 'Rubirizi', 'mintmrm' ),
                'UG431' => __( 'Rukiga', 'mintmrm' ),
                'UG412' => __( 'Rukungiri', 'mintmrm' ),
                'UG111' => __( 'Sembabule', 'mintmrm' ),
                'UG232' => __( 'Serere', 'mintmrm' ),
                'UG426' => __( 'Sheema', 'mintmrm' ),
                'UG215' => __( 'Sironko', 'mintmrm' ),
                'UG211' => __( 'Soroti', 'mintmrm' ),
                'UG212' => __( 'Tororo', 'mintmrm' ),
                'UG113' => __( 'Wakiso', 'mintmrm' ),
                'UG313' => __( 'Yumbe', 'mintmrm' ),
                'UG330' => __( 'Zombo', 'mintmrm' ),
            ),
            'UM' => array(
                '81' => __( 'Baker Island', 'mintmrm' ),
                '84' => __( 'Howland Island', 'mintmrm' ),
                '86' => __( 'Jarvis Island', 'mintmrm' ),
                '67' => __( 'Johnston Atoll', 'mintmrm' ),
                '89' => __( 'Kingman Reef', 'mintmrm' ),
                '71' => __( 'Midway Atoll', 'mintmrm' ),
                '76' => __( 'Navassa Island', 'mintmrm' ),
                '95' => __( 'Palmyra Atoll', 'mintmrm' ),
                '79' => __( 'Wake Island', 'mintmrm' ),
            ),
            'US' => array( // U.S. states.
                'AL' => __( 'Alabama', 'mintmrm' ),
                'AK' => __( 'Alaska', 'mintmrm' ),
                'AZ' => __( 'Arizona', 'mintmrm' ),
                'AR' => __( 'Arkansas', 'mintmrm' ),
                'CA' => __( 'California', 'mintmrm' ),
                'CO' => __( 'Colorado', 'mintmrm' ),
                'CT' => __( 'Connecticut', 'mintmrm' ),
                'DE' => __( 'Delaware', 'mintmrm' ),
                'DC' => __( 'District Of Columbia', 'mintmrm' ),
                'FL' => __( 'Florida', 'mintmrm' ),
                'GA' => _x( 'Georgia', 'US state of Georgia', 'mintmrm' ),
                'HI' => __( 'Hawaii', 'mintmrm' ),
                'ID' => __( 'Idaho', 'mintmrm' ),
                'IL' => __( 'Illinois', 'mintmrm' ),
                'IN' => __( 'Indiana', 'mintmrm' ),
                'IA' => __( 'Iowa', 'mintmrm' ),
                'KS' => __( 'Kansas', 'mintmrm' ),
                'KY' => __( 'Kentucky', 'mintmrm' ),
                'LA' => __( 'Louisiana', 'mintmrm' ),
                'ME' => __( 'Maine', 'mintmrm' ),
                'MD' => __( 'Maryland', 'mintmrm' ),
                'MA' => __( 'Massachusetts', 'mintmrm' ),
                'MI' => __( 'Michigan', 'mintmrm' ),
                'MN' => __( 'Minnesota', 'mintmrm' ),
                'MS' => __( 'Mississippi', 'mintmrm' ),
                'MO' => __( 'Missouri', 'mintmrm' ),
                'MT' => __( 'Montana', 'mintmrm' ),
                'NE' => __( 'Nebraska', 'mintmrm' ),
                'NV' => __( 'Nevada', 'mintmrm' ),
                'NH' => __( 'New Hampshire', 'mintmrm' ),
                'NJ' => __( 'New Jersey', 'mintmrm' ),
                'NM' => __( 'New Mexico', 'mintmrm' ),
                'NY' => __( 'New York', 'mintmrm' ),
                'NC' => __( 'North Carolina', 'mintmrm' ),
                'ND' => __( 'North Dakota', 'mintmrm' ),
                'OH' => __( 'Ohio', 'mintmrm' ),
                'OK' => __( 'Oklahoma', 'mintmrm' ),
                'OR' => __( 'Oregon', 'mintmrm' ),
                'PA' => __( 'Pennsylvania', 'mintmrm' ),
                'RI' => __( 'Rhode Island', 'mintmrm' ),
                'SC' => __( 'South Carolina', 'mintmrm' ),
                'SD' => __( 'South Dakota', 'mintmrm' ),
                'TN' => __( 'Tennessee', 'mintmrm' ),
                'TX' => __( 'Texas', 'mintmrm' ),
                'UT' => __( 'Utah', 'mintmrm' ),
                'VT' => __( 'Vermont', 'mintmrm' ),
                'VA' => __( 'Virginia', 'mintmrm' ),
                'WA' => __( 'Washington', 'mintmrm' ),
                'WV' => __( 'West Virginia', 'mintmrm' ),
                'WI' => __( 'Wisconsin', 'mintmrm' ),
                'WY' => __( 'Wyoming', 'mintmrm' ),
                'AA' => __( 'Armed Forces (AA)', 'mintmrm' ),
                'AE' => __( 'Armed Forces (AE)', 'mintmrm' ),
                'AP' => __( 'Armed Forces (AP)', 'mintmrm' ),
            ),
            'UY' => array( // Uruguayan states.
                'UY-AR' => __( 'Artigas', 'mintmrm' ),
                'UY-CA' => __( 'Canelones', 'mintmrm' ),
                'UY-CL' => __( 'Cerro Largo', 'mintmrm' ),
                'UY-CO' => __( 'Colonia', 'mintmrm' ),
                'UY-DU' => __( 'Durazno', 'mintmrm' ),
                'UY-FS' => __( 'Flores', 'mintmrm' ),
                'UY-FD' => __( 'Florida', 'mintmrm' ),
                'UY-LA' => __( 'Lavalleja', 'mintmrm' ),
                'UY-MA' => __( 'Maldonado', 'mintmrm' ),
                'UY-MO' => __( 'Montevideo', 'mintmrm' ),
                'UY-PA' => __( 'Paysandú', 'mintmrm' ),
                'UY-RN' => __( 'Río Negro', 'mintmrm' ),
                'UY-RV' => __( 'Rivera', 'mintmrm' ),
                'UY-RO' => __( 'Rocha', 'mintmrm' ),
                'UY-SA' => __( 'Salto', 'mintmrm' ),
                'UY-SJ' => __( 'San José', 'mintmrm' ),
                'UY-SO' => __( 'Soriano', 'mintmrm' ),
                'UY-TA' => __( 'Tacuarembó', 'mintmrm' ),
                'UY-TT' => __( 'Treinta y Tres', 'mintmrm' ),
            ),
            'VE' => array( // Venezuelan states.
                'VE-A' => __( 'Capital', 'mintmrm' ),
                'VE-B' => __( 'Anzoátegui', 'mintmrm' ),
                'VE-C' => __( 'Apure', 'mintmrm' ),
                'VE-D' => __( 'Aragua', 'mintmrm' ),
                'VE-E' => __( 'Barinas', 'mintmrm' ),
                'VE-F' => __( 'Bolívar', 'mintmrm' ),
                'VE-G' => __( 'Carabobo', 'mintmrm' ),
                'VE-H' => __( 'Cojedes', 'mintmrm' ),
                'VE-I' => __( 'Falcón', 'mintmrm' ),
                'VE-J' => __( 'Guárico', 'mintmrm' ),
                'VE-K' => __( 'Lara', 'mintmrm' ),
                'VE-L' => __( 'Mérida', 'mintmrm' ),
                'VE-M' => __( 'Miranda', 'mintmrm' ),
                'VE-N' => __( 'Monagas', 'mintmrm' ),
                'VE-O' => __( 'Nueva Esparta', 'mintmrm' ),
                'VE-P' => __( 'Portuguesa', 'mintmrm' ),
                'VE-R' => __( 'Sucre', 'mintmrm' ),
                'VE-S' => __( 'Táchira', 'mintmrm' ),
                'VE-T' => __( 'Trujillo', 'mintmrm' ),
                'VE-U' => __( 'Yaracuy', 'mintmrm' ),
                'VE-V' => __( 'Zulia', 'mintmrm' ),
                'VE-W' => __( 'Federal Dependencies', 'mintmrm' ),
                'VE-X' => __( 'La Guaira (Vargas)', 'mintmrm' ),
                'VE-Y' => __( 'Delta Amacuro', 'mintmrm' ),
                'VE-Z' => __( 'Amazonas', 'mintmrm' ),
            ),
            'VN' => array(),
            'YT' => array(),
            'ZA' => array( // South African states.
                'EC'  => __( 'Eastern Cape', 'mintmrm' ),
                'FS'  => __( 'Free State', 'mintmrm' ),
                'GP'  => __( 'Gauteng', 'mintmrm' ),
                'KZN' => __( 'KwaZulu-Natal', 'mintmrm' ),
                'LP'  => __( 'Limpopo', 'mintmrm' ),
                'MP'  => __( 'Mpumalanga', 'mintmrm' ),
                'NC'  => __( 'Northern Cape', 'mintmrm' ),
                'NW'  => __( 'North West', 'mintmrm' ),
                'WC'  => __( 'Western Cape', 'mintmrm' ),
            ),
            'ZM' => array( // Zambian provinces.
                'ZM-01' => __( 'Western', 'mintmrm' ),
                'ZM-02' => __( 'Central', 'mintmrm' ),
                'ZM-03' => __( 'Eastern', 'mintmrm' ),
                'ZM-04' => __( 'Luapula', 'mintmrm' ),
                'ZM-05' => __( 'Northern', 'mintmrm' ),
                'ZM-06' => __( 'North-Western', 'mintmrm' ),
                'ZM-07' => __( 'Southern', 'mintmrm' ),
                'ZM-08' => __( 'Copperbelt', 'mintmrm' ),
                'ZM-09' => __( 'Lusaka', 'mintmrm' ),
                'ZM-10' => __( 'Muchinga', 'mintmrm' ),
            ),
        );
    }
}