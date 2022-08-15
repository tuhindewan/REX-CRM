<?php

namespace MRM\Data;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage representation of Tag object]
 */

class MRM_Tag {

    /**
     * Tag title
     * 
     * @var string
     * @since 1.0.0
     */
    private $title;

    /**
     * Tag description
     * 
     * @var array
     * @since 1.0.0
     */
    private $data;


    public function __construct( $args )
    {
        $this->title = $args['title'];
        $this->data = $args['data'];
    }

 
    /**
     * Return tag title
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_title()
    {
        return $this->title;
    }


    /**
     * Return tag data after serialization
     * 
     * @return array
     * @since 1.0.0
     */
    public function get_data()
    {
        if( !is_serialized( $this->data ) ) {
            return maybe_serialize( $this->data );
        }
    }
}