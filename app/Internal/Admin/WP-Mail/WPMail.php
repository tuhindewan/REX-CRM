<?php
namespace Mint\MRM\Internal\Admin;

use Mint\Mrm\Internal\Traits\Singleton;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

/**
 * @desc Modify Wordpress core mailing function wp_mail
 * @since 1.0.0
 */

class WPMail {

	use Singleton;

	/**
	 * @desc SMTP settings variable
	 * @var $smtp_configs
	 * @since 1.0.0
	 */
	protected $smtp_configs;

	/**
	 * @desc SMTP method variable
	 * @var $smtp_method
	 * @since 1.0.0
	 */
	protected $smtp_method;

	/**
	 * @desc SMTP method variable
	 * @var $smtp_settings
	 * @since 1.0.0
	 */
	protected $smtp_settings;

	/**
	 * @desc Initialize actions
	 * @return void
	 * @since 1.0.0
	 */
	public function init() {
		$this->smtp_configs = get_option( '_mrm_smtp_settings', [] );
		if ( is_array( $this->smtp_configs ) && !empty( is_array( $this->smtp_configs ) ) ) {
			$this->smtp_method   = isset( $this->smtp_configs[ 'method' ] ) ? $this->smtp_configs[ 'method' ] : 'web-server';
			$this->smtp_settings = isset( $this->smtp_configs[ 'settings' ] ) ? $this->smtp_configs[ 'settings' ] : [];
		}

		add_action( 'phpmailer_init', [ $this, 'configure_' . $this->smtp_method ] );
	}

	/**
	 * @desc Configure custom SMTP server
	 * @param $phpmailer
	 * @return void
	 * @since 1.0.0
	 */
	public function configure_smtp( $phpmailer ) {
		$host     = isset( $this->smtp_settings[ 'host' ] ) ? $this->smtp_settings[ 'host' ] : false;
		$port     = isset( $this->smtp_settings[ 'port' ] ) ? $this->smtp_settings[ 'port' ] : false;
		$secure   = isset( $this->smtp_settings[ 'secure' ] ) && 'no' !== $this->smtp_settings[ 'secure' ] ? $this->smtp_settings[ 'secure' ] : false;
		$login    = isset( $this->smtp_settings[ 'login' ] ) ? $this->smtp_settings[ 'login' ] : '';
		$password = isset( $this->smtp_settings[ 'password' ] ) ? $this->smtp_settings[ 'password' ] : '';

		if ( $host && $port ) {
			try {
				$phpmailer->isSMTP();
				$phpmailer->Host     = trim( $host );
				$phpmailer->SMTPAuth = true;
				$phpmailer->Username = trim( $login );
				$phpmailer->Password = trim( $password );
				$phpmailer->Port     = (int)trim( $port );

				if ( 'tls' === $secure ) {
					$phpmailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
					$phpmailer->SMTPAutoTLS = true;
				}
				elseif ( 'ssl' === $secure ) {
					$phpmailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
				}
				else {
					$phpmailer->SMTPSecure = false;
					$phpmailer->SMTPAutoTLS = false;
				}
			}
			catch( Exception $e ) {}
		}
	}

	/**
	 * @desc Configure Web server
	 * @param $phpmailer
	 * @return void
	 * @since 1.0.0
	 */
	public function configure_web_server( $phpmailer ) {

	}

	/**
	 * @desc Configure Sendgrid server
	 * @param $phpmailer
	 * @return void
	 * @since 1.0.0
	 */
	public function configure_sendgrid( $phpmailer ) {

	}

	/**
	 * @desc Configure Amazon SES server
	 * @param $phpmailer
	 * @return void
	 * @since 1.0.0
	 */
	public function configure_amazonses( $phpmailer ) {

	}
}