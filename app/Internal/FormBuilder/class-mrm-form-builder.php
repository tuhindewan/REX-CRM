<?php

namespace Mint\MRM\Internal\FormBuilder;


use MRM\Common\MRM_Common;
use WP_REST_Request;

Class FormBuilderHelper {
    public function __construct()
    {
        new GetMRM_Block_Manager;
        new MRM_Subscribe_form;
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
        $version = isset( $script_asset['version'] ) ? $script_asset['version'] : "";
        wp_enqueue_script( $script_handle, $script_url, $script_asset['dependencies'], $version );

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
       $theme_color = $this->get_palette_theme_color();
        $settings = array(
            'disableCustomColors'    => get_theme_support( 'disable-custom-colors' ),
            'disableCustomFontSizes' => get_theme_support( 'disable-custom-font-sizes' ),
            'isRTL'                  => is_rtl(),
            '__experimentalBlockPatterns'       => [],
            '__experimentalFeatures'            => [
                'appearanceTools' => true,
                'border'          => [
                    'color'  => false,
                    'radius' => true,
                    'style'  => false,
                    'width'  => false
                ],
                'color'           => [
                    'background'       => true,
                    'customDuotone'    => false,
                    'defaultGradients' => false,
                    'defaultPalette'   => false,
                    'duotone'          => [],
                    'gradients'        => [],
                    'link'             => false,
                    'palette'          => [
                        'theme' => $theme_color['colors']
                    ],
                    'text'             => true
                ],
                'spacing'         => [
                    'blockGap' => null,
                    'margin'   => true
                ],
                'typography'      => [
                    'dropCap'        => false,
                    'fontStyle'      => true,
                    'fontWeight'     => true,
                    'letterSpacing'  => true,
                    'textDecoration' => true,
                    'textTransform'  => true,
                    'fontSize'       => true
                ],
                'blocks'          => [
                    'core/button' => [
                        'border'     => [
                            'radius' => true,
                            "style"  => true,
                            "width"  => true
                        ],
                        'typography' => [
                            'fontSizes' => []
                        ]
                    ]
                ]
            ],
//            '__experimentalSetIsInserterOpened' => true,
            'disableCustomGradients'            => true,
            'enableCustomLineHeight'            => get_theme_support('custom-line-height'),
            'enableCustomSpacing'               => get_theme_support('custom-spacing'),
            'enableCustomUnits'                 => false,
            'keepCaretInsideBlock'              => true,
        );
       $color_palette = current((array)get_theme_support('editor-color-palette'));
       if (false !== $color_palette) {
           $settings['colors'] = $color_palette;
       } else {
           $settings['colors'] = [];
       }

       if ($theme_color['font_sizes']) {
           $settings['fontSizes'] = $theme_color['font_sizes'];
       } else {
           $settings['fontSizes'] = [];
       }

       return $settings;
    }


    public static function get_palette_theme_color()
    {
        static $color;
        if (!$color) {
            list($color_palette) = get_theme_support('editor-color-palette');

            if (empty($color_palette) || !is_array($color_palette) || count($color_palette) < 2) {
                $color_palette = [
                    [
                        "name"  => __("Black", "fluent-crm"),
                        "slug"  => "black",
                        "color" => "#000000"
                    ],
                    [
                        "name"  => __("Cyan bluish gray", "fluent-crm"),
                        "slug"  => "cyan-bluish-gray",
                        "color" => "#abb8c3"
                    ],
                    [
                        "name"  => __("White", "fluent-crm"),
                        "slug"  => "white",
                        "color" => "#ffffff"
                    ],
                    [
                        "name"  => __("Pale pink", "fluent-crm"),
                        "slug"  => "pale-pink",
                        "color" => "#f78da7"
                    ],
                    [
                        "name"  => __("Luminous vivid orange", "fluent-crm"),
                        "slug"  => "luminous-vivid-orange",
                        "color" => "#ff6900"
                    ],
                    [
                        "name"  => __("Luminous vivid amber", "fluent-crm"),
                        "slug"  => "luminous-vivid-amber",
                        "color" => "#fcb900"
                    ],
                    [
                        "name"  => __("Light green cyan", "fluent-crm"),
                        "slug"  => "light-green-cyan",
                        "color" => "#7bdcb5"
                    ],
                    [
                        "name"  => __("Vivid green cyan", "fluent-crm"),
                        "slug"  => "vivid-green-cyan",
                        "color" => "#00d084"
                    ],
                    [
                        "name"  => __("Pale cyan blue", "fluent-crm"),
                        "slug"  => "pale-cyan-blue",
                        "color" => "#8ed1fc"
                    ],
                    [
                        "name"  => __("Vivid cyan blue", "fluent-crm"),
                        "slug"  => "vivid-cyan-blue",
                        "color" => "#0693e3"
                    ],
                    [
                        "name"  => __("Vivid purple", "fluent-crm"),
                        "slug"  => "vivid-purple",
                        "color" => "#9b51e0"
                    ]
                ];
            }

            list($font_sizes) = (array)get_theme_support('editor-font-sizes');

            if (empty($font_sizes)) {
                $font_sizes = [
                    [
                        'name'      => __('Small', 'fluent-crm'),
                        'shortName' => 'S',
                        'size'      => 14,
                        'slug'      => 'small'
                    ],
                    [
                        'name'      => __('Medium', 'fluent-crm'),
                        'shortName' => 'M',
                        'size'      => 18,
                        'slug'      => 'medium'
                    ],
                    [
                        'name'      => __('Large', 'fluent-crm'),
                        'shortName' => 'L',
                        'size'      => 24,
                        'slug'      => 'large'
                    ],
                    [
                        'name'      => __('Larger', 'fluent-crm'),
                        'shortName' => 'XL',
                        'size'      => 32,
                        'slug'      => 'larger'
                    ]
                ];
            }

            $color = apply_filters('mrm/theme_plate_color', [
                'colors'     => (array)$color_palette,
                'font_sizes' => (array)$font_sizes
            ]);
        }

        return $color;

    }



}