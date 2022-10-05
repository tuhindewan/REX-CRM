<?php

namespace Mint\MRM\DataStores;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 11:56:54
 * @modify date 2022-08-17 11:56:54
 * @desc [Responsible for managing and maintaining a message object]
 */

class MessageData {

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


    /**
     * Contact ID 
     * 
     * @var string
     * @since 1.0.0
     */
    private $contact_id;


    /**
     * Sender ID 
     * 
     * @var string
     * @since 1.0.0
     */
    private $sender_id;


    public function __construct( $args )
    {
        $this->email_address    = $args['email_address'];
        $this->email_subject    = $args['email_subject'];
        $this->email_body       = $args['email_body'];
        $this->contact_id        = $args['contact_id'];
        $this->sender_id        = $args['sender_id'];
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


    /**
     * Return receiver ID
     * 
     * @param void
     * @return int
     * @since 1.0.0
     */
    public function get_receiver_id()
    {
        return $this->contact_id;
    }


    /**
     * Return sender ID
     * 
     * @param void
     * @return int
     * @since 1.0.0
     */
    public function get_sender_id()
    {
        return $this->sender_id;
    }
}