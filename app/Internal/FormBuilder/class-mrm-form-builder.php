<?php

namespace Mint\MRM\Internal\FormBuilder;


Class FormBuilderHelper {
    public function __construct()
    {
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
            // 'imageSizes'             => $available_image_sizes,
            'isRTL'                  => is_rtl(),
            // 'maxUploadFileSize'      => $max_upload_size,
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



}