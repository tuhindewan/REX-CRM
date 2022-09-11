<?php

namespace Mint\MRM\DataStores;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage representation of Field Group object]
 */

class FieldGroup {

    /**
     * Group title
     * 
     * @var string
     * @since 1.0.0
     */
    private $title;


    public function __construct( $args )
    {
        $this->title = isset($args['title']) ? sanitize_text_field( $args['title'] ) : NULL;
    }

 
    /**
     * Return title
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_title()
    {
        return $this->title;
    }

}