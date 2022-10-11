<?php

namespace Mint\MRM\Internal\ShortCode;

use Mint\Mrm\Internal\Traits\Singleton;

class ShortCode {

    use Singleton;


    public static function init() {
        $shortcodes = array(
            'mrm_form' => __CLASS__ . '::render_contact_form'
        );

        foreach ( $shortcodes as $shortcode => $function ) {
            add_shortcode( $shortcode, $function );
        }
    }



    public static function render_contact_form( $atts ) {
        $shortcode	= new ContactForm( (array) $atts );
        return $shortcode->get_content();
    }
}