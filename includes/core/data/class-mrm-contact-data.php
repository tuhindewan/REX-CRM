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
     * Contact date of birth
     * 
     * @var string
     * @since 1.0.0
     */
    private $date_of_birth;

    /**
     * Contact timezone
     * 
     * @var string
     * @since 1.0.0
     */
    private $timezone;

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

    /**
     * Contact postal code
     * 
     * @var string
     * @since 1.0.0
     */
    private $postal_code;

    /**
     * Contact company name
     * 
     * @var string
     * @since 1.0.0
     */
    private $company_name;




    public function __construct( $email, $args )
    {
        $this->email            =  $email;
        $this->first_name       =  isset($args['first_name'])       ? $args['first_name']       : '';
        $this->last_name        =  isset($args['last_name'])        ? $args['last_name']        : '';
        $this->phone            =  isset($args['phone'])            ? $args['phone']            : '';
        $this->status           =  isset($args['status'])           ? $args['status']           : '';
        $this->source           =  isset($args['source'])           ? $args['source']           : '';
        $this->date_of_birth    =  isset($args['date_of_birth'])    ? $args['date_of_birth']    : '';
        $this->timezone         =  isset($args['timezone'])         ? $args['timezone']         : '';
        $this->address_line_1   =  isset($args['address_line_1'])   ? $args['address_line_1']   : '';
        $this->address_line_2   =  isset($args['address_line_2'])   ? $args['address_line_2']   : '';
        $this->city             =  isset($args['city'])             ? $args['city']             : '';
        $this->state            =  isset($args['state'])            ? $args['state']            : '';
        $this->country          =  isset($args['country'])          ? $args['country']          : '';
        $this->postal_code      =  isset($args['postal_code'])      ? $args['postal_code']      : '';
        $this->company_name     =  isset($args['company_name'])     ? $args['company_name']      : '';
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
     * Return contact date of birth
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_date_of_birth()
    {
        return $this->date_of_birth;
    }


    /**
     * Return contact timezone
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_timezone()
    {
        return $this->timezone;
    }


    /**
     * Return contact address line 1
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_address_line_1()
    {
        return $this->address_line_1;
    }


    /**
     * Return contact address line 2
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_address_line_2()
    {
        return $this->address_line_2;
    }


    /**
     * Return contact city
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_city()
    {
        return $this->city;
    }


    /**
     * Return contact state
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_state()
    {
        return $this->state;
    }


    /**
     * Return contact country
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_country()
    {
        return $this->country;
    }


    /**
     * Return contact postal_code
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_postal_code()
    {
        return $this->postal_code;
    }


    /**
     * Return contact company_name
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_company_name()
    {
        return $this->company_name;
    }

}