<?php

namespace MRM\Data;
/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle representation of a single List]
 */

class MRM_Note {
    /**
     * Note_type
     * 
     * @var int
     * @since 1.0.0
     */
    private $note_type;

    /**
     * Note Title
     * 
     * @var string
     * @since 1.0.0
     */
    private $note_title;

    

    /**
     * Note Description
     * 
     * @var string
     * @since 1.0.0
     */
    private $note_description;

    /**
     * Note Created By
     * 
     * @var string
     * @since 1.0.0
     */
    private $note_created_by;

    /**
     * Contact status
     * 
     * @var int
     * @since 1.0.0
     */
    private $note_status;

     /**
     * Access check
     * 
     * @var int
     * @since 1.0.0
     */
    private $note_is_public;


    public function __construct($args)
    {
        $this->note_type         = $args['type'];
        $this->note_title        = $args['title'];
        $this->note_description  = $args['description'];
        $this->note_status       = $args['status'];
        $this->note_is_public    = $args['is_public'];
    }


    /**
     * Return note type
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_note_type()
    {
        return $this->note_type;
    }

    /**
     * Return note title
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_note_title()
    {
        return $this->note_title;
    }

    /**
     * Return note description
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_note_description()
    {
        return $this->note_description;
    }

    /**
     * Return note created by
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_note_created_by()
    {
        if ( is_user_logged_in() ) {
            $this->note_created_by = get_current_user_id();
        } else {
            $this->note_created_by = 1;
        }
        return $this->note_created_by;
    }

    /**
     * Return note status
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_note_status()
    {
        return $this->note_status;
    }

    /**
     * Return note access
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_note_is_public()
    {
        return $this->note_is_public;
    }


}