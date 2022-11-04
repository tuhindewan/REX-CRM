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
        if (0 == $form_id){
            return __('No form added','mrm');
        }
        $form_data = FormModel::get($form_id);
        $form_status = isset($form_data['status']) ? $form_data['status'] : 0 ;
        if (empty($form_data)){
            return __('Form ID is not valid','mrm');
        }elseif(!$form_status){
            return __('This form is not active. Please check','mrm');
        }
        $get_setting        = FormModel::get_meta($form_id);
        $form_setting       = isset($get_setting['meta_fields']['settings']) ? $get_setting['meta_fields']['settings'] :  (object)[];
        $form_setting       = json_decode($form_setting);
        $form_placement     = !empty($form_setting->settings->form_layout->form_position) ? $form_setting->settings->form_layout->form_position: '';
        $form_animation     = '';
        if($form_placement != 'default' ){
            $form_animation     =  !empty($form_setting->settings->form_layout->form_animation) ? $form_setting->settings->form_layout->form_animation: '';
        }

        $form_close_button_color     = !empty($form_setting->settings->form_layout->close_button_color) ? $form_setting->settings->form_layout->close_button_color: '#fff';
        $form_close_background_color = !empty($form_setting->settings->form_layout->close_background_color) ? $form_setting->settings->form_layout->close_background_color: '#000';

        $blocks = parse_blocks( $form_data['form_body'] );
        $output = '';
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

        

	    $block_html = '';
        $class      = '';
        foreach( $blocks as $block ) {

            if($block['blockName'] == 'core/columns'){
                if(isset($block['attrs']['style']['color']['background'])){

                    $class = 'custom-background';
                }
            }
            if($block['blockName'] == 'core/group'){
                if(isset($block['attrs']['style']['color']['background'])){
                    $class = 'custom-background';
                }
            }

            $block_html .= render_block( $block );
        }
        if($show){
            ob_start();?>
            <div class="mintmrm" >
                <div id="mrm-<?php echo $form_placement ?>" class="mrm-form-wrapper mrm-<?php echo $form_animation ?> <?php echo isset($this->attributes['class']) ? $this->attributes['class'] : '' ; echo 'mrm-'.$form_placement?>">
                    <div class="mrm-form-wrapper-inner <?php echo $class ?>">

                    <?php if('default' != $form_placement){ ?>
                        <span style="background:<?php echo $form_close_background_color;?>" class="mrm-form-close">
                            <svg width="10" height="11" fill="none" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><path stroke="<?php echo $form_close_button_color;?>" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.5 1l-11 11m0-11l11 11"/></svg>
                        </span>
                        <?php } ?>

                        <div class="mrm-form-overflow">
                            <form method="post" id="mrm-form">
                                <input hidden name="form_id" value="<?php echo isset($form_data['id']) ? $form_data['id'] : 0 ?>" />
                                <?php

                               echo  $block_html;
                                ?>
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
}