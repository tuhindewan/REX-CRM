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
                'form_placement' 			=> 'pop_up',
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
        $form_data = FormModel::get($this->attributes['id']);
        if (empty($form_data)){
            return __('Form ID is not valid','mrm');
        }
        $output = '';
        ob_start();?>
        <div>
            <div id="mrm-<?php echo $form_data['form_position'] ?>">
                <form method="post" id="mrm-form">
                    <input hidden name="form_id" value="<?php echo $form_data['id'] ?>" />
                    <?php echo  $form_data['form_body'] ?>
                </form>
            </div>

        </div>
        <?php
        $output .= ob_get_clean();

        return $output;
    }
}