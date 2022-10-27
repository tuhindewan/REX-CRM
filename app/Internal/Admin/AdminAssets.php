<?php

namespace Mint\MRM\Internal\Admin;

use Mint\MRM\Internal\Constants;

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
            MRM_PLUGIN_NAME.'-select2',
            self::get_url('select2', 'js', 'external'),
            array('jquery'),
            MRM_VERSION,
            true
        );
        wp_enqueue_script(
            MRM_PLUGIN_NAME.'-easy-email',
            MRM_DIR_URL.'/assets/admin/dist/chunks/packages_easy-email-extensions_lib_index3_js.min.js',
            array(),
            MRM_VERSION,
            true
        );
//        wp_enqueue_script(
//            MRM_PLUGIN_NAME.'-easy-email',
//            MRM_DIR_URL.'/assets/admin/dist/chunks/573.min.js',
//            array(),
//            MRM_VERSION,
//            true
//        );
        wp_enqueue_script(
            MRM_PLUGIN_NAME,
            self::get_url('main', 'js'),
            array('jquery', MRM_PLUGIN_NAME.'-easy-email' ),
            MRM_VERSION,
            true
        );
        wp_localize_script(
            MRM_PLUGIN_NAME,
            'MRM_Vars',
            array(
                'ajaxurl' 			    => admin_url( 'admin-ajax.php' ),
                'api_base_url' 		    => get_rest_url(),
                'nonce' 			    => wp_create_nonce('wp_rest'),
                'current_userID'        => get_current_user_id(),
                'editor_data_source'    => $this->get_editor_source(),
                'timezone_list'         => Constants::get_timezone_list(),
                'countries'             => Constants::get_country_name()
            )
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
            MRM_PLUGIN_NAME.'-select2',
            self::get_url('select2', 'css', 'external' )
        );
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
     * @param string $type
     * @return string
     * @since 1.0.0
     */
    public static function get_url( $file, $ext, $type = 'dist' ) {
        $suffix = '';
        // Potentially enqueue minified JavaScript.
        if ( 'js' === $ext ) {
            $script_debug = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG;
            $suffix       = self::should_use_minified_file( $script_debug ) ? '' : '.min';
            $suffix       = '.min';
        }
        return plugins_url( self::get_path( $ext, $type ) . $file . $suffix . '.' . $ext, MRM_FILE );
    }


    /**
     * Get the Asset path
     *
     * @param $ext
     * @param string $type
     * @return mixed
     * @since 1.0.0
     */
    public static function get_path( $ext, $type = 'dist' ) {
        if ('external' === $type ) {
            return ( 'css' === $ext ) ? MRM_ADMIN_EXTERNAL_CSS_FOLDER : MRM_ADMIN_EXTERNAL_JS_FOLDER;
        }
        return ( 'css' === $ext ) ? MRM_ADMIN_DIST_CSS_FOLDER : MRM_ADMIN_DIST_JS_FOLDER;
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


    /**
     * get editor source data
     *
     * @since 1.0.0
     * @return array
     */
    private function get_editor_source() {
        //get product categories for email builder
        $categories = $this->get_formatted_wc_categories();
        return apply_filters('plugin_hook_name', array(
            'product_categories' => $categories
        ));
    }


    /**
     * Get the WooCommerce product categories
     *
     * @return array
     * @since 1.0.0
     */
    private function get_formatted_wc_categories() {
        $taxonomy     = 'product_cat';
        $orderby      = 'name';
        $show_count   = 0;
        $pad_counts   = 0;
        $hierarchical = 1;
        $title        = '';
        $empty        = 0;

        $args = array(
            'taxonomy'     => $taxonomy,
            'orderby'      => $orderby,
            'show_count'   => $show_count,
            'pad_counts'   => $pad_counts,
            'hierarchical' => $hierarchical,
            'title_li'     => $title,
            'hide_empty'   => $empty
        );
        $product_categories = get_categories( $args );
        $wc_categories      = [];
        foreach ( $product_categories as $product_cat ) {
            $wc_categories[] = array(
                'value' => $product_cat->term_id,
                'label' => $product_cat->name
            );
        }
        return $wc_categories;
    }
}