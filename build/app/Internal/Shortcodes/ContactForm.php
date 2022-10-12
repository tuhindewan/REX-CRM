<?php

namespace Mint\MRM\Internal\ShortCode;

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
        $output = '';
        ob_start();?>

        <div class="success_msg" style="display: none; color:green">Please check your inbox to confirm your subscription</div>

        <div class="error_msg" style="display: none; color:red">Email address is not valid</div>
        <form action="<?php esc_url($_SERVER['REQUEST_URI']);
        ?>" method="post" class="ajax">
            <p>Your First Name (required)<br />
                <input type="text" name="first_name" class="first_name" pattern="[a-zA-Z0-9 ]+" required value="<?php isset($_POST['first_name']) ? esc_attr($_POST['first_name']) : '';
                ?>" size="40" />
            </p>
            <p>Your Last Name (required)<br />
                <input type="text" name="last_name" class="last_name" pattern="[a-zA-Z0-9 ]+" required value="<?php isset($_POST['last_name']) ? esc_attr($_POST['last_name']) : '';
                ?>" size="40" />
            </p>
            <p>Your Email (required)<br />
                <input type="email" name="email" class="email" required value="<?php isset($_POST['email']) ? esc_attr($_POST['email']) : '';
                ?>" size="40" />
            </p>
            <p><input type="submit" name="submit" value="Submit"/></p>


        </form>
        <?php
        $output = ob_get_clean();

        return $output;
    }
}