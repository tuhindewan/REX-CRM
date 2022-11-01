<?php
/**
 * BLOCK: MRM Subscribe Form
 */
namespace Mint\MRM\Internal\FormBuilder;

use Mint\MRM\DataBase\Models\FormModel;

class MRM_Subscribe_form
{
    public function __construct()
    {
        add_action('init', [ $this, 'mrm_subscribe_form_block' ]);
        add_action('enqueue_block_editor_assets', [ $this, 'mrm_subscribe_form_block_editor_assets' ]);
    }

    /**
     * Block declaration
     */
    public function mrm_subscribe_form_block()
    {

        if (function_exists('register_block_type')) {
            register_block_type('mrmformfield/mrm-form-subscribe-form', array(
                'attributes'      => array(
                    'form_id' => array(
                        'type' => 'string',
                        'default' => '0',
                    ),
                    'form_list_data' => array(
                        'type' => 'array',
                        'default' => array(
                            'value' => 0,
                            'label' => 'Select MRM Form',
                        ),
                    ),
                    'render_block' => array(
                        'type' => 'string',
                        'default' => '',
                    ),
                ),
                'editor_script' => 'getwpf-mrm-subscribe-form',
                'render_callback' => [ $this, 'mrm_subscribe_block_render' ],
            ));
        }
    }

    /**
     * Block editor assets
     */
    public function mrm_subscribe_form_block_editor_assets()
    {
        wp_enqueue_script(
            'getwpf-mrm-subscribe-form',
            MRM_DIR_URL.'/app/Internal/FormBuilder/blocks/assets/dist/getwpf-mrm-subscribe-form.js',
            array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-api-fetch', ),
        );
        wp_enqueue_style(
            'getwpf-mrm-subscribe-form',
            MRM_DIR_URL.'/app/Internal/FormBuilder/blocks/assets/js/blocks/mrm-subscribe-form/editor.scss',
            array( 'wp-edit-blocks' ),
        );
    }

    /**
     * Block php renderer for Form
     *
     * @since 1.0.0
     */
    public function mrm_subscribe_block_render($attributes)
    {
        $html = '';
        $form_id = isset($attributes['form_id']) ? $attributes['form_id'] : 0;
        $get_setting        = FormModel::get_meta($form_id);
        $form_setting       = isset($get_setting['meta_fields']['settings']) ? $get_setting['meta_fields']['settings'] :  '';
        $form_setting       = json_decode($form_setting);
        $form_placement     = !empty($form_setting->settings->form_layout->form_position) ? $form_setting->settings->form_layout->form_position: '';
        $form_animation     = '';
        if($form_placement != 'default' ){
            $form_animation     =  !empty($form_setting->settings->form_layout->form_animation) ? $form_setting->settings->form_layout->form_animation: '';
        }
        $form_close_button_color     = !empty($form_setting->settings->form_layout->close_button_color) ? $form_setting->settings->form_layout->close_button_color: '#fff';
        $form_close_background_color = !empty($form_setting->settings->form_layout->close_background_color) ? $form_setting->settings->form_layout->close_background_color: '#000';

        $form_data = FormModel::get($form_id);
        $form_status = isset($form_data['status']) ? $form_data['status'] : 0 ;

        if (empty($form_data)){
            return __('Form ID is not valid','mrm');
        }elseif(!$form_status){
            return __('This form is not active. Please check','mrm');
        }
        $cookies = isset($_COOKIE['mrm_form_dismissed']) ? $_COOKIE['mrm_form_dismissed'] : '';
        $cookies = json_decode(stripslashes($cookies));
        $show = true;
        if(!empty($cookies->expire)){
            $expire  = $cookies->expire;

            $today = strtotime('today UTC');

            if ($today < $expire) {
                $show = false;
            }
        }
        $blocks = parse_blocks( $attributes['render_block'] );
        if( 0 == $form_id ){
            $html = '<div class="mintmrm">
                        <p>No form added</p>
                    </div>';
        }else{
            if($show){
                $html .= '<div class="mintmrm">
            <div id="mrm-'.$form_placement.'" class="mrm-form-wrapper mrm-'.$form_animation.' mrm-'.$form_placement.'">
                <div class="mrm-form-wrapper-inner">';
                if('default' != $form_placement){
                    $html .= '<span style="background:'.$form_close_background_color.'" class="mrm-form-close" >
                        <svg width="10" height="11" fill="none" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><path stroke="'.$form_close_button_color.'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.5 1l-11 11m0-11l11 11"/></svg>
                    </span>';
                }

                $html .= '
                    <div class="mrm-form-overflow">
                        <form method="post" id="mrm-form">
                            <input hidden name="form_id" value="'.$attributes['form_id'].'" />';
                foreach( $blocks as $block ) {
                    $html .= render_block( $block );
                }
                $html .=   '</form>
                             <div class="response"></div>
                        </div>
                    </div>
                </div>
    
            </div>';
            }

        }


        return $html;
    }
}