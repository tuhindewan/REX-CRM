<?php

namespace Mint\MRM\DataStores;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Manage representation of Custom Field object]
 */

class CustomFieldData {

    /**
     * Field title
     * 
     * @var string
     * @since 1.0.0
     */
    private $title;

    /**
     * Field slug
     * 
     * @var string
     * @since 1.0.0
     */
    private $slug;

    /**
     * Field type
     * 
     * @var string
     * @since 1.0.0
     */
    private $type;


    /**
     * Field meta
     * 
     * @var string
     * @since 1.0.0
     */
    private $meta;


    public function __construct( $args )
    {
        $this->title    = $args['title'];
        $this->slug     = $args['slug'];
        $this->type     = $args['type'];
        $this->meta     = $args['meta'];
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


    /**
     * Return type
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_type()
    {
        return $this->type;
    }


    /**
     * Return slug
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_slug()
    {
        return $this->slug;
    }


    /**
     * Return meta
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_meta()
    {
        if( !is_serialized( $this->meta ) ) {
            return maybe_serialize($this->meta);
        }
        return $this->meta;
    }

}