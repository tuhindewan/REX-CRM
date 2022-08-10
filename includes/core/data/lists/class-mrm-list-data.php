<?php

namespace MRM\Data\Lists;
/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Handle representation of a single List]
 */

class MRM_List_Data {
  public $list_title;
  public function __construct($title) {
    $this->list_title = $title;
  }
}