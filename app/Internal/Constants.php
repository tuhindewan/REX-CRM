<?php

namespace Mint\MRM\Internal;

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
        $this->define( 'MRM_ADMIN_CSS_FOLDER', 'assets/admin/dist/css/' );
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
}