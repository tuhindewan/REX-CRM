<?php
namespace MRM\Traits;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:19:34
 * @modify date 2022-08-09 11:19:34
 * @desc [Trait to follow Singleton design pattern]
 */

trait Singleton {
    /**
     * Singleton Instance
     *
     * @var Singleton
     */
    private static $instance;

    /**
     * Private Constructor
     *
     * We can't use the constructor to create an instance of the class
     *
     * @return void
     */
    private function __construct()
    {
        // Don't do anything, we don't want to be initialized
    }

    /**
     * Get the singleton instance
     *
     * @return Singleton
     */
    public static function get_instance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * Private clone method to prevent cloning of the instance of the
     * Singleton instance.
     *
     * @return void
     */
    private function __clone()
    {
        // Don't do anything, we don't want to be cloned
    }

    /**
     * Private unserialize method to prevent unserializing of the Singleton
     * instance.
     *
     * @return void
     */
    public function __wakeup()
    {
        // Don't do anything, we don't want to be unserialized
    }
}