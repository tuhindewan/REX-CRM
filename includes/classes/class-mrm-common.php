<?php

namespace MRM\Common;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-10 15:11:01
 * @modify date 2022-08-10 15:11:01
 * @desc [Manage MRM common functions]
 */

class MRM_Common {


    /**
	 * Returns alphanumeric hash
	 * 
     * @param mixed $len=32
     * 
     * @return string
	 * @since 1.0.0
     */
    public static function get_rand_hash($len=32)
	{
		return substr(md5(openssl_random_pseudo_bytes(20)),-$len);
	}

}

