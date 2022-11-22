<?php
namespace Mint\MRM\Internal\Admin;

use Mint\Mrm\Internal\Traits\Singleton;

/**
 * @desc This class is responsible to secure sensitive
 * data as in password, api keys, secret keys etc.
 * @since 1.0.0
 */
class MRMSecurity {
	use Singleton;

	/**
	 * @var $ciphering
	 * @since 1.0.0
	 */
	private $ciphering;
	/**
	 * @var $iv_length
	 * @since 1.0.0
	 */
	private $iv_length;
	/**
	 * @var $options
	 * @since 1.0.0
	 */
	private $options;
	/**
	 * @var $encryption_iv
	 * @since 1.0.0
	 */
	private $encryption_iv;
	/**
	 * @var $encryption_key
	 * @since 1.0.0
	 */
	private $encryption_key;

	/**
	 * @desc Initialize the class and set its properties.
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->ciphering = 'AES-128-CTR';
		$this->iv_length = openssl_cipher_iv_length( $this->ciphering );
		$this->options = 0;
		$this->encryption_iv = '2767360247209320';
		$this->encryption_key = defined( 'MRM_ITEM_ID' ) ? MRM_ITEM_ID : 124124;
	}

	/**
	 * @desc Encrypting given string key(s)
	 *
	 * @param $key
	 * @return false|string
	 * @since 1.0.0
	 */
	public function encrypt( $key ) {
		return openssl_encrypt( $key, $this->ciphering, $this->encryption_key, $this->options, $this->encryption_iv );
	}

	/**
	 * @desc Decrypting given string key(s)
	 *
	 * @param $key
	 * @return false|string
	 * @since 1.0.0
	 */
	public function decrypt( $key ) {
		return openssl_decrypt( $key, $this->ciphering, $this->encryption_key, $this->options, $this->encryption_iv );
	}
}