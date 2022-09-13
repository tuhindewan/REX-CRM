<?php

namespace Mint\MRM\DataStores;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage representation of Tag object]
 */

class TagData {

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

    /**
     * Tag slug
     * 
     * @var string
     * @since 1.0.0
     */
    private $slug;


    public function __construct( $args )
    {
        $this->title = isset($args['title']) ? $args['title'] : NULL;
        $this->slug  = isset($args['slug'])  ? $args['slug']  : NULL;
        $this->data  = isset($args['data'])  ? $args['data']  : NULL;
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
     * Return tag slug
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_slug()
    {
        return $this->slug;
    }


    /**
     * Return tag data after serialization
     * 
     * @return longtext
     * @since 1.0.0
     */
    public function get_data()
    {
        if( !is_serialized( $this->data ) ) {
            return maybe_serialize( $this->data );
        }
    }
}