<?php
namespace MRM\Activation\Handler;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle all the processes after plugin has been activated]
 */


interface MRM_Activation_Handler {

    /**
     * Handle services after plugin activation
     * 
     * @return void
     */
    public static function handle();
    
}