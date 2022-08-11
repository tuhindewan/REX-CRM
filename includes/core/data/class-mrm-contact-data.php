<?php

namespace MRM\Data;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 15:39:54
 * @modify date 2022-08-10 15:39:54
 * @desc [Responsible for maintaining a contact object]
 */


class MRM_Contact {
    
    /**
     * Contact Email
     * 
     * @var string
     * @since 1.0.0
     */
    private $email;

    /**
     * Contact First name
     * 
     * @var string
     * @since 1.0.0
     */
    private $first_name;

    /**
     * Contact Last name
     * 
     * @var string
     * @since 1.0.0
     */
    private $last_name;

    /**
     * Contact Contact number
     * 
     * @var string
     * @since 1.0.0
     */
    private $phone;

    /**
     * Contact status
     * 
     * @var string
     * @since 1.0.0
     */
    private $status;


    public function __construct($args)
    {
        $this->email        = $args['email'];
        $this->first_name   = $args['first_name'];
        $this->last_name    = $args['last_name'];
        $this->phone        = $args['phone'];
        $this->status       = $args['status'];
    }


    /**
     * Return Contact email
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_email()
    {
        return $this->email;
    }


    /**
     * Return Contact first name
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_first_name()
    {
        return $this->first_name;
    }


    /**
     * Return Contact last name
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_last_name()
    {
        return $this->last_name;
    }


    /**
     * Return Contact phone
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_phone()
    {
        return $this->phone;
    }

    /**
     * Return Contact status
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_status()
    {
        return $this->status;
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