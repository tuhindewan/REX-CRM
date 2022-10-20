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
        $form_setting       = isset($get_setting['meta_fields']['settings']) ? $get_setting['meta_fields']['settings'] :  [];
        $form_setting       = json_decode($form_setting);
        $form_placement      = !empty($form_setting->settings->form_layout) ? $form_setting->settings->form_layout : '';
        $html .= '<div class="mintmrm">
            <div id="mrm-'.$form_placement.'" class="mrm-form-wrapper mrm-'.$form_placement.'">
                <form method="post" id="mrm-form">
                    <input hidden name="form_id" value="'.$attributes['form_id'].'" />
                    '.$attributes['render_block'].'
                </form>
                <div class="response"></div>
            </div>

            <style>
                .mintmrm label, 
                .mintmrm .label {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 18px;
                    color: #344054;
                    box-sizing: border-box;
                }

                .mintmrm input[type=date], 
                .mintmrm input[type=email], 
                .mintmrm input[type=text], 
                .mintmrm textarea, 
                .mintmrm select {
                    font-size: 14px;
                    line-height: 1.3;
                    color: #7a8b9a;
                    padding: 9px 15px;
                    width: 100%;
                    border-radius: 6px;
                    display: block;
                    border: 1px solid #e4e6eb;
                    min-height: 30px;
                    box-sizing: border-box;
                    outline: none;
                    box-shadow: none;
                    max-width: 100%;
                }
                .mintmrm input[type=date]:focus, 
                .mintmrm input[type=email]:focus, 
                .mintmrm input[type=text]:focus, 
                .mintmrm textarea:focus, 
                .mintmrm select:focus {
                    border-color: #e4e6eb;
                    color: #7a8b9a;
                    box-shadow: none;
                }
                .mintmrm .mintmrm-btn {
                    display: inline-block;
                    border: 1px solid transparent;
                    color: #fff;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 17px;
                    letter-spacing: -0.01em;
                    padding: 11px 15px;
                    cursor: pointer;
                    text-align: center;
                    border-radius: 6px;
                    text-transform: capitalize;
                    background-color: #573BFF;
                }
                .mintmrm .mintmrm-btn:hover {
                    background-color: #4C25A5;
                    color: #fff;
                }

                /*----checkbox style---- */
                .mintmrm-checkbox input[type="checkbox"] {
                    display: none;
                }
                .mintmrm-checkbox.no-title label {
                    min-height: 20px;
                }
                .mintmrm-checkbox label {
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 1;
                    letter-spacing: -0.01em;
                    color: #344054;
                    position: relative;
                    padding-left: 29px;
                    display: inline-block;
                    text-transform: capitalize;
                    cursor: pointer;
                }
                .mintmrm-checkbox label:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: -2px;
                    width: 20px;
                    height: 20px;
                    border-radius: 4px;
                    border: 1px solid #bdc7eb;
                    background-color: #f6f6f8;
                    transition: all 0.3s ease;
                    box-sizing: border-box;
                }
                .mintmrm-checkbox label:after {
                    content: "";
                    position: absolute;
                    left: 6px;
                    top: 4px;
                    width: 9px;
                    height: 5px;
                    transform: rotate(-45deg);
                    border-bottom: 2px solid #fff;
                    border-left: 2px solid #fff;
                    transition: all 0.3s ease;
                    opacity: 0;
                    visibility: hidden;
                    box-sizing: border-box;
                }
                .mintmrm-checkbox input[type="checkbox"]:checked + label::before {
                    background-color: #573bff;
                    border-color: #573bff;
                }
                .mintmrm-checkbox input[type="checkbox"]:checked + label::after {
                    opacity: 1;
                    visibility: visible;
                }

                /*----radio btn style---- */
                .mintmrm-radiobtn input[type="radio"] {
                    display: none;
                }
                .mintmrm-radiobtn.no-title label {
                    height: 16px;
                }
                .mintmrm-radiobtn label {
                    font-size: 15px;
                    line-height: 14px;
                    font-weight: 500;
                    color: #7a8b9a;
                    position: relative;
                    padding-left: 29px;
                    display: inline-block;
                    text-transform: capitalize;
                    cursor: pointer;
                }
                .mintmrm-radiobtn label::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: -3px;
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    background: #f7f7fa;
                    border: 1px solid #bdc7eb;
                    transition: all 0.3s ease;
                    box-sizing: border-box;
                }
                .mintmrm-radiobtn label::after {
                    content: "";
                    position: absolute;
                    left: 5px;
                    top: 2px;
                    width: 10px;
                    height: 10px;
                    border-radius: 100%;
                    background: #573bff;
                    transform: scale(0);
                    transition: all 0.3s ease;
                }
                .mintmrm-radiobtn input[type="radio"]:checked + label::before {
                    border-color: #573bff;
                }
                .mintmrm-radiobtn input[type="radio"]:checked + label::after {
                    transform: scale(1);
                }
            </style>

        </div>';

        return $html;
    }
}