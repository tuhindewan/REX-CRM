<?php
namespace MRM\DB;

use MRM\Activation\Handler\MRM_Activation_Handler;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle database table creation processes after plugin has been activated]
 */


class MRM_DB_Activation_Handler implements MRM_Activation_Handler {

    /**
     * Handle API services after plugin activation
     * 
     * @return void
     */
    public static function handle(){
        MRM_Database_Core::get_instance()->init();
    }
    
}