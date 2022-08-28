<?php

namespace Mint\MRM\Internal\Admin;


class AdminAssets {

    /**
     * Class instance.
     *
     * @var AdminAssets instance
     */
    protected static $instance = null;

    /**
     * Get class instance.
     */
    public static function get_instance() {
        if ( ! self::$instance ) {
            self::$instance = new self();
        }
        return self::$instance;
    }


    /**
     * AdminAssets constructor.
     *
     * @since 1.0.0
     */
    public function __construct() {
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles' ) );
    }


    /**
     * Load plugin main js file
     *
     * @param $hook
     * @since 1.0.0
     */
    public function enqueue_scripts($hook) {
        if ( !$this->maybe_mrm_page($hook) ) {
            return false;
        }
        wp_enqueue_script(
            MRM_PLUGIN_NAME,
            self::get_url('main', 'js'),
            array(),
            MRM_VERSION,
            true
        );
    }


    /**
     * Load plugin main css file
     *
     * @param $hook
     * @since 1.0.0
     */
    public function enqueue_styles($hook) {
        if ( !$this->maybe_mrm_page($hook) ) {
            return false;
        }
        wp_enqueue_style(
            MRM_PLUGIN_NAME,
            self::get_url('admin', 'css')
        );
    }


    /**
     * Get assets URL
     *
     * @param $file
     * @param $ext
     * @return string
     * @since 1.0.0
     */
    public static function get_url( $file, $ext ) {
        $suffix = '';
        // Potentially enqueue minified JavaScript.
        if ( 'js' === $ext ) {
            $script_debug = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG;
            $suffix       = self::should_use_minified_file( $script_debug ) ? '' : '.min';
        }
        return plugins_url( self::get_path( $ext ) . $file . $suffix . '.' . $ext, MRM_FILE );
    }


    /**
     * Get the Asset path
     *
     * @param  string
     * @return string
     * @since 1.0.0
     */
    public static function get_path( $ext ) {
        return ( 'css' === $ext ) ? MRM_ADMIN_CSS_FOLDER : MRM_ADMIN_DIST_JS_FOLDER;
    }


    /**
     * Determine if minified file is served
     *
     * @param $script_debug
     * @return bool
     * @since 1.0.0
     */
    public static function should_use_minified_file($script_debug) {
        return !$script_debug;
    }


    /**
     * Check if the current page is CRM page or not
     *
     * @param $hook
     * @return bool
     * @since 1.0.0
     */
    private function maybe_mrm_page( $hook ) {
        return  'toplevel_page_mrm-admin' === $hook;
    }
}