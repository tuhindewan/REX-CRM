<?php

namespace MRM\Data;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 15:39:54
 * @modify date 2022-08-10 15:39:54
 * @desc [Responsible for maintaining a segment object]
 */


class MRM_Segment {
    
    /**
     * Segment title
     * 
     * @var string
     * @since 1.0.0
     */
    private $title;


    /**
     * Segment description and filters 
     * 
     * @var array
     * @since 1.0.0
     */
    private $data;


    public function __construct($args)
    {
        $this->title = $args['title'];
        $this->data = $args['data'];
    }


    /**
     * Return segment title
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_title()
    {
        return $this->title;
    }


    /**
     * Return segment data after serialization
     * 
     * @return array
     * @since 1.0.0
     */
    public function get_data()
    {
        if( !is_serialized( $this->data ) ) {
            return maybe_serialize($this->data);
        }
    }
}