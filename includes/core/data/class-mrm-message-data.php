<?php

namespace MRM\Data;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 11:56:54
 * @modify date 2022-08-17 11:56:54
 * @desc [Responsible for managing and maintaining a message object]
 */

class MRM_Message {

    /**
     * Email address
     * 
     * @var string
     * @since 1.0.0
     */
    private $email_address;

    /**
     * Email subject
     * 
     * @var string
     * @since 1.0.0
     */
    private $email_subject;

    /**
     * Email body
     * 
     * @var string
     * @since 1.0.0
     */
    private $email_body;


    /**
     * Message type
     * 
     * @var string
     * @since 1.0.0
     */
    private $type;


    public function __construct( $args )
    {
        $this->email_address    = isset( $args['email_address'] )   ? sanitize_text_field( $args['email_address'] )    : NULL;
        $this->email_subject    = isset( $args['email_subject'] )   ? sanitize_text_field( $args['email_subject'] )    : NULL;
        $this->email_body       = isset( $args['email_body'] )      ? sanitize_text_field( $args['email_body'] )       : NULL;
        $this->type             = isset( $args['type'] )            ? sanitize_text_field( $args['type'] )             : NULL;
    }


    /**
     * Return message receiver email address
     * 
     * @param void
     * @return string
     * @since 1.0.0
     */
    public function get_receiver_email()
    {
        return $this->email_address;
    }


    /**
     * Return email subject
     * 
     * @param void
     * @return string
     * @since 1.0.0
     */
    public function get_email_subject()
    {
        return $this->email_subject;
    }


    /**
     * Return email body
     * 
     * @param void
     * @return string
     * @since 1.0.0
     */
    public function get_email_body()
    {
        return $this->email_body;
    }


    /**
     * Return message type
     * 
     * @param void
     * @return string
     * @since 1.0.0
     */
    public function get_message_type()
    {
        return $this->type;
    }
}