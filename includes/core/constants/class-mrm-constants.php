<?php

namespace MRM\Constants;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Shared global constants for use in other classes]
 */

class MRM_Constants{

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
     * Contact attrs available for mapping
     */
    public static $primary_contact_fields = array(
        "first_name",		
        "last_name",
        "email",
        "postal_code",
        "scores",	
        "source",
        "status",
        "stage",
        "last_activity"
    );

    /*
    * maichimp api key for testing
    */
    public static $mailchimp_key = "11b321614d43814ca7d8406041bb3839-us8";
}