<?php

namespace MRM\Data;
/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle representation of a single List]
 */

class MRM_Tag {
  private $tag_title;
  public function __construct($title) {
    $this->tag_title = $title;
  }

  /**
   * Getter Function title
   * @return string title of the tag
   * @since 1.0.0 
   */
  public function get_title() {
    return $this->tag_title;
  }

  /**
     * Return tag data after serialization
     * 
     * @return array
     * @since 1.0.0
     */
    public function get_data()
    {
        return null;
    }
}