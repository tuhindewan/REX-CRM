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
            <div id="mrm-<?php echo $form_position ?>" class="mrm-form-wrapper <?php echo isset($this->attributes['class']) ? $this->attributes['class'] : '' ; echo 'mrm-'.$form_position?>">
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
                    outline: none;
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

        </div>
        <?php
        $output .= ob_get_clean();

        return $output;
    }
}