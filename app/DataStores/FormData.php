<?php

namespace Mint\MRM\DataStores;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-07-10 11:03:17
 * @modify date 2022-07-10 11:03:17
 * @desc [Manage representation of a single Form]
 */

class FormData {

    /**
     * Form title
     * 
     * @var string
     * @since 1.0.0
     */
    private $title;

    /**
     * Form body
     * 
     * @var array
     * @since 1.0.0
     */
    private $form_body;


    /**
     * Form position
     * 
     * @var array
     * @since 1.0.0
     */
    private $form_position;

    /**
     * Form status
     * 
     * @var array
     * @since 1.0.0
     */
    private $status;

    /**
     * Form group_ids
     * 
     * @var array
     * @since 1.0.0
     */
    private $group_ids;

    /**
     * Form template id
     * 
     * @var array
     * @since 1.0.0
     */
    private $template_id;


    public function __construct( $args )
    {
        $this->title = isset($args['title']) ? $args['title'] : NULL;
        $this->form_body  = isset($args['form_body'])  ? $args['form_body']  : NULL;
        $this->form_position  = isset($args['form_position'])  ? $args['form_position']  : NULL;
        $this->status  = isset($args['status'])  ? $args['status']  : NULL;
        $this->group_ids  = isset($args['group_ids'])  ? $args['group_ids']  : NULL;
        $this->template_id  = isset($args['template_id'])  ? $args['template_id']  : NULL;
    }


    /**
     * Getter Function title
     * @return string title of the list
     * @since 1.0.0 
     */
    public function get_title() {

        return $this->title;

    }


    /**
     * Return form body
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_form_body()
    {
        if( !is_serialized( $this->form_body ) ) {
            return maybe_serialize( $this->form_body );
        }
    }

    /**
     * Return form position
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_form_position()
    {
        return $this->form_position;
    }

    /**
     * Return form status
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_status()
    {
        return $this->status;
    }

    /**
     * Return form group ids
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_group_ids()
    {
        if( !is_serialized( $this->group_ids ) ) {
            return maybe_serialize( $this->group_ids );
        }
    }


    /**
     * Return creator ID
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_created_by()
    {
        return $this->created_by;
    }

    /**
     * Return template id
     * 
     * @return string
     * @since 1.0.0
     */
    public function get_template_id()
    {
        return $this->template_id;
    }

}