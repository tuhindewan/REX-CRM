<?php

namespace Mint\MRM\Internal\FormBuilder;


Class FormBuilderHelper {
    public function __construct()
    {
        add_action( 'admin_enqueue_scripts', array($this,'mrm_block_editor_init') );     
    }

    function mrm_block_editor_init( $hook ) {
        global $current_screen;

        //error_log(print_r($current_screen,1));

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
     
        // Inline the Editor Settings.
        //$settings = getdave_sbe_get_block_editor_settings();
        //wp_add_inline_script( $script_handle, 'window.getdaveSbeSettings = ' . wp_json_encode( $settings ) . ';' );
     
        // Preload server-registered block schemas.
        wp_add_inline_script(
           'wp-blocks',
           'wp.blocks.unstable__bootstrapServerSideBlockDefinitions(' . wp_json_encode( get_block_editor_server_block_settings() ) . ');'
        );
     
        // Editor default styles.
     
        wp_enqueue_script( 'wp-format-library' );
        wp_enqueue_style( 'wp-format-library' );
     
        // Styles.
        wp_enqueue_style(
           'mrm-form-builder-styles', // Handle.
           plugins_url( 'build/index.css', __FILE__ ), // Block editor CSS.
           array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
        );
     }
     
     
}