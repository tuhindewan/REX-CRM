<?php

namespace MRM\Constants;

use MRM\DB\Tables\MRM_Contacts_Table;
use MRM\DB\Tables\MRM_Contact_Info_Table;
/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Shared global constants for use in other classes]
 */

class MRM_Constants{
    public static $contacts_attrs_table = MRM_Contacts_Table::$mrm_table;

    public static $contacts_attrs = array(
        "first_name",		
        "last_name",
        "email",
        "contact_owner",
        "scores",
        "source",
        "status",
        "stage",
        "last_activity",
        "date_of_birth"
    );
}