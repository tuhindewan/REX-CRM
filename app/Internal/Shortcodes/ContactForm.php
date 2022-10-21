<?php

namespace Mint\MRM\Internal\ShortCode;

use Mint\MRM\DataBase\Models\FormModel;

class ContactForm {

    /**
     * Attributes
     *
     * @var array
     */
    protected $attributes = array();


    /**
     * ContactForm constructor.
     * @param array $attributes
     */
    public function __construct( $attributes = array() ) {
        $this->attributes = $this->parse_attributes( $attributes );
    }


    /**
     * Get shortcode attributes.
     *
     * @since  3.2.0
     * @return array
     */
    public function get_attributes() {
        return $this->attributes;
    }


    /**
     * parse attributes
     *
     * @param $attributes
     * @return array
     */
    protected function parse_attributes( $attributes ) {
        $attributes = shortcode_atts(
            array(
                'id' 					    => 0,
                'class'					    => ''
            ),
            $attributes
        );
        return $attributes;
    }


    /**
     * get wrapper classes
     *
     * @return array
     */
    protected function get_wrapper_classes() {
        $classes = array();
        return $classes;
    }


    /**
     * content of optin form
     *
     * @return string
     */
    public function get_content() {
        $form_id = isset($this->attributes['id']) ? $this->attributes['id'] : 0 ;
        $form_data = FormModel::get($form_id);
        $form_status = isset($form_data['status']) ? $form_data['status'] : 0 ;
        if (empty($form_data)){
            return __('Form ID is not valid','mrm');
        }elseif(!$form_status){
            return __('This form is not active. Please check');
        }

        $get_setting        = FormModel::get_meta($form_id);
        $form_setting       = isset($get_setting['meta_fields']['settings']) ? $get_setting['meta_fields']['settings'] :  [];
        $form_setting       = json_decode($form_setting);
        $form_position      = !empty($form_setting->settings->form_layout) ? $form_setting->settings->form_layout : '';
        $output = '';
        ob_start();?>
        <div class="mintmrm" >
            <div id="mrm-<?php echo $form_position ?>" class="mrm-form-wrapper mrm-slide-in-up <?php echo isset($this->attributes['class']) ? $this->attributes['class'] : '' ; echo 'mrm-'.$form_position?>">
                <div class="mrm-form-wrapper-inner">

                    <?php if('below-pages' != $form_placement){ ?>
                        <span class="mrm-form-close">
                            <svg width="10" height="11" fill="none" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.5 1l-11 11m0-11l11 11"/></svg>
                        </span>
                    <?php } ?>

                    <div class="mrm-form-overflow">
                        <form method="post" id="mrm-form">
                            <input hidden name="form_id" value="<?php echo isset($form_data['id']) ? $form_data['id'] : 0 ?>" />
                            <?php echo  $form_data['form_body'] ?>
                        </form>
                        
                        <div class="response"></div>
                    </div>

                </div>
            </div>

        </div>
        <?php
        $output .= ob_get_clean();

        return $output;
    }
}