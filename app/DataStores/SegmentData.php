<?php

namespace Mint\MRM\DataStores;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 15:39:54
 * @modify date 2022-08-10 15:39:54
 * @desc [Responsible for maintaining a segment object]
 */


class SegmentData {
    
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

    /**
     * Segment slug
     * 
     * @var array
     * @since 1.0.0
     */
    private $slug;


    public function __construct($args)
    {
        $this->title = isset( $args['title'] ) ? $args['title'] : NULL;
        $this->slug  = isset( $args['slug'] )  ? $args['slug']  : NULL;
        $this->data =  isset( $args['data'] )  ? $args['data']  : NULL;
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
     * Return segment slug
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_slug()
    {
        return $this->slug;
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