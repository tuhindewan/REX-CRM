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
        $output = '';
        ob_start();?>
        <div class="mintmrm" >
            <div id="mrm-<?php echo isset($form_data['form_position']) ? $form_data['form_position'] : '' ?>" class="mrm-form-wrapper <?php echo isset($this->attributes['class']) ? $this->attributes['class'] : '' ?>">
                <form method="post" id="mrm-form">
                    <input hidden name="form_id" value="<?php echo isset($form_data['id']) ? $form_data['id'] : 0 ?>" />
                    <?php echo  $form_data['form_body'] ?>
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
                .mintmrm input[type=search], 
                .mintmrm input[type=url], 
                .mintmrm input[type=tel], 
                .mintmrm input[type=number], 
                .mintmrm input[type=password], 
                .mintmrm input[type=email], 
                .mintmrm input[type=text], 
                .mintmrm textarea, 
                .mintmrm select {
                    font-size: 14px;
                    line-height: 1;
                    color: #7a8b9a;
                    padding: 9px 15px;
                    width: 100%;
                    border-radius: 6px;
                    display: block;
                    border: 1px solid #e4e6eb;
                    min-height: 30px;
                    box-sizing: border-box;
                }
            </style>

        </div>
        <?php
        $output .= ob_get_clean();

        return $output;
    }
}