<?php
namespace MRM\REST;

use MRM\Activation\Handler\MRM_Activation_Handler;
use MRM\REST\MRM_API_Register;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle API activation processes after plugin has been activated]
 */


class MRM_API_Activation_Handler implements MRM_Activation_Handler {

    /**
     * Handle API services after plugin activation
     * 
     * @return void
     */
    public static function handle(){
        MRM_API_Register::get_instance()->init();
    }
    
}