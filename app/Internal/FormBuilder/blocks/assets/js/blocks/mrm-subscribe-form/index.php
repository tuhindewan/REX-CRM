<?php
/**
 * BLOCK: MRM Subscribe Form
 */
namespace Mint\MRM\Internal\FormBuilder;

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
        $form_placement = get_post_meta($attributes['form_id'],'mrm_form_replace_position',true);
        $html .= '<div>
        <div id="mrm-'.$form_placement.'">
                <form data-id="'.$attributes['form_id'].'" method="post">
                '.$attributes['render_block'].'
                </form>
    </div>

</div>';
        return $html;
    }
}