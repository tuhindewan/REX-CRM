<?php

namespace MRM\Data;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle representation of a single List]
 */

class MRM_List {

  /**
   * List title
   * @var string
   * 
   * @since 1.0.0
   */
  private $list_title;


  public function __construct( $title ) {

      $this->list_title = $title;

  }


    /**
     * Getter Function title
     * @return string title of the list
     * @since 1.0.0 
     */
    public function get_title() {

        return $this->list_title;

    }

    /**
     * Return segment data after serialization
     * 
     * @return array
     * @since 1.0.0
     */
    public function get_data()
    {
        return null;
    }
}