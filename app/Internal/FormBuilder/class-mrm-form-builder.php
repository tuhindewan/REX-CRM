<?php

namespace Mint\MRM\Internal\FormBuilder;


use MRM\Common\MRM_Common;
use WP_REST_Request;

Class FormBuilderHelper {
    public function __construct()
    {
        new GetMRM_Block_Manager;
        new MRM_Subscribe_form;
        add_action('rest_api_init', [$this,'mrm_rest_data_route']);
        add_action( 'admin_enqueue_scripts', array($this,'mrm_block_editor_init') );
    }

    public function mrm_block_editor_init( $hook ) {
        global $current_screen;


        if ( 'toplevel_page_mrm-admin' !== $hook ) {
           return;
        }
     
        $current_screen->is_block_editor( true );
     
        $script_handle     = 'mrm-form-builder-scripts';
        $script_path       = 'build/index.js';
        $script_asset_path = dirname( __FILE__ ) . '/build/index.asset.php';

        
        $script_asset      = file_exists( $script_asset_path )
           ? require $script_asset_path
           : array(
              'dependencies' => array(),
           );
        $script_url        = plugins_url( $script_path, __FILE__ );
     
        wp_enqueue_script( $script_handle, $script_url, $script_asset['dependencies'], $script_asset['version'] );

        $settings = $this->get_block_editor_settings();
        wp_add_inline_script( $script_handle, 'window.getmrmsetting = ' . wp_json_encode( $settings ) . ';' );
     
        wp_add_inline_script(
           'wp-blocks',
           'wp.blocks.unstable__bootstrapServerSideBlockDefinitions(' . wp_json_encode( get_block_editor_server_block_settings() ) . ');'
        );
     

        wp_enqueue_script( 'wp-format-library' );
        wp_enqueue_style( 'wp-format-library' );
     
        wp_enqueue_style(
           'mrm-form-builder-styles', // Handle.
           plugins_url( 'build/index.css', __FILE__ ), // Block editor CSS.
           array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
        );
     }

   public function get_block_editor_settings() {
        $settings = array(
            'disableCustomColors'    => get_theme_support( 'disable-custom-colors' ),
            'disableCustomFontSizes' => get_theme_support( 'disable-custom-font-sizes' ),
            'isRTL'                  => is_rtl(),
            '__experimentalBlockPatterns' => []
        );
        list( $color_palette, ) = (array) get_theme_support( 'editor-color-palette' );
        list( $font_sizes, )    = (array) get_theme_support( 'editor-font-sizes' );
        if ( false !== $color_palette ) {
            $settings['colors'] = $color_palette;
        }
        if ( false !== $font_sizes ) {
            $settings['fontSizes'] = $font_sizes;
        }

        return $settings;
    }
    /**
     * Form Save API Route
     */
    public function mrm_rest_data_route()
    {
        register_rest_route('mrm/v1', '/save-mrm-form/', array(
            'methods' => 'POST',
            'callback' => [$this,'mrm_form_rest_data_set'],
            'permission_callback' => [$this,'mrm_rest_route_permission']
        ));
    }

    /**
     * MRM rest route permission
     * @return bool
     */
    public function mrm_rest_route_permission()
    {
        return true;
    }

    public function mrm_form_rest_data_set(WP_REST_Request $request)
    {
        $params = MRM_Common::get_api_params_values( $request );

        update_option('_mrm_form_data',$params);
    }




}