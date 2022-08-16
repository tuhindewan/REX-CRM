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


    /**
     * Contact source
     * 
     * @var string
     * @since 1.0.0
     */
    private $source;

    /**
     * Contact address line 1
     * 
     * @var string
     * @since 1.0.0
     */
    private $address_line_1;


    /**
     * Contact address line 2
     * 
     * @var string
     * @since 1.0.0
     */
    private $address_line_2;

    /**
     * Contact city
     * 
     * @var string
     * @since 1.0.0
     */
    private $city;

    /**
     * Contact state
     * 
     * @var string
     * @since 1.0.0
     */
    private $state;

    /**
     * Contact country
     * 
     * @var string
     * @since 1.0.0
     */
    private $country;




    public function __construct($email, $args)
    {
        $this->email = $email;
        if(isset($args['first_name']))
            $this->first_name = $args['first_name'];
        if(isset($args['last_name']))
            $this->last_name = $args['last_name'];
        if(isset($args['phone']))
            $this->phone = $args['phone'];
        if(isset($args['status']))
            $this->status = $args['status'];
            if(isset($args['first_name']))
        if(isset($args['source']))
            $this->source = $args['source'];
        if(isset($args['address_line_1']))
            $this->address_line_1 = $args['address_line_1'];
        if(isset($args['address_line_2']))
            $this->address_line_2 = $args['address_line_2'];
        if(isset($args['city']))
            $this->city = $args['city'];
        if(isset($args['state']))
            $this->state = $args['state'];
        if(isset($args['country']))
            $this->country = $args['country'];
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
     * Return Contact source
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_source()
    {
        return $this->source;
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