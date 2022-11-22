<?php

namespace Mint\MRM\Internal\Admin;

use Mint\Mrm\Internal\Traits\Singleton;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

/**
 * @desc Modify WordPress core mailing function wp_mail
 * @since 1.0.0
 */

class WPSmtp {

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
	 * @desc From email variable
	 * @var $from_email
	 * @since 1.0.0
	 */
	protected $from_email;

	/**
	 * @desc From email name variable
	 * @var $from_email_name
	 * @since 1.0.0
	 */
	protected $from_email_name;

	/**
	 * @desc To email variable
	 * @var $to_email
	 * @since 1.0.0
	 */
	protected $to_email;

	/**
	 * @desc To email name variable
	 * @var $to_email_name
	 * @since 1.0.0
	 */
	protected $to_email_name;

	/**
	 * @desc Email subject variable
	 * @var $email_subject
	 * @since 1.0.0
	 */
	protected $email_subject;

	/**
	 * @desc Email content variable
	 * @var $email_content
	 * @since 1.0.0
	 */
	protected $email_content;

	/**
	 * @desc Email headers variable
	 * @var $email_headers
	 * @since 1.0.0
	 */
	protected $email_headers;

	/**
	 * @desc Email attachments variable
	 * @var $email_attachments
	 * @since 1.0.0
	 */
	protected $email_attachments;

	/**
	 * @desc Initialize actions
	 * @return void
	 * @since 1.0.0
	 */
	public function init() {
		$this->smtp_configs = get_option( '_mrm_smtp_settings', [
			'method'   => 'web_server',
			'settings' => [
				'frequency' => [
					'type' => 'recommended',
					'interval' => '5'
				],
			],
		] );
		if ( is_array( $this->smtp_configs ) && !empty( is_array( $this->smtp_configs ) ) ) {
			$this->smtp_method   = isset( $this->smtp_configs[ 'method' ] ) ? $this->smtp_configs[ 'method' ] : 'web-server';
			$this->smtp_settings = isset( $this->smtp_configs[ 'settings' ] ) ? $this->smtp_configs[ 'settings' ] : [];
		}

		if ( 'smtp' === $this->smtp_method ) {
			add_action( 'phpmailer_init', [ $this, 'configure_' . $this->smtp_method ] );
		}
		elseif ( 'sendgrid' === $this->smtp_method || 'amazonses' === $this->smtp_method ) {
			add_filter( 'pre_wp_mail', [ $this, 'configure_' . $this->smtp_method ], 10, 2 );
		}
	}

	/**
	 * @desc Configure custom SMTP server
	 * @param $phpmailer
	 * @return void
	 * @since 1.0.0
	 */
	public function configure_smtp( $phpmailer ) {
		if ( ($phpmailer instanceof PHPMailer) ) {
			$host     = isset( $this->smtp_settings[ 'host' ] ) ? $this->smtp_settings[ 'host' ] : false;
			$port     = isset( $this->smtp_settings[ 'port' ] ) ? $this->smtp_settings[ 'port' ] : false;
			$secure   = isset( $this->smtp_settings[ 'secure' ] ) && 'no' !== $this->smtp_settings[ 'secure' ] ? $this->smtp_settings[ 'secure' ] : false;
			$login    = isset( $this->smtp_settings[ 'login' ] ) ? $this->smtp_settings[ 'login' ] : '';
			$password = isset( $this->smtp_settings[ 'password' ] ) ? MRMSecurity::get_instance()->decrypt( $this->smtp_settings[ 'password' ] ) : '';

			if ( $host && $port ) {
				try {
					$phpmailer->isSMTP();
					$phpmailer->Host     = trim( $host );
					$phpmailer->SMTPAuth = true;
					$phpmailer->Username = trim( $login );
					$phpmailer->Password = trim( $password );
					$phpmailer->Port     = (int) trim( $port );

					if ( 'tls' === $secure ) {
						$phpmailer->SMTPSecure  = PHPMailer::ENCRYPTION_STARTTLS;
						$phpmailer->SMTPAutoTLS = true;
					} elseif ( 'ssl' === $secure ) {
						$phpmailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
					} else {
						$phpmailer->SMTPSecure  = false;
						$phpmailer->SMTPAutoTLS = false;
					}
				}
				catch( Exception $e ) {
					print_r( $e->getMessage(),1 );
				}
			}
		}
	}

	/**
	 * @desc Configure Sendgrid API
	 * @param $null
	 * @param $attributes
	 * @return bool
	 * @since 1.0.0
	 */
	public function configure_sendgrid( $null, $attributes ) {
		$this->set_email_attributes( $attributes );
		$sendgrid_api = isset( $this->smtp_settings[ 'api_key' ] ) && '' !== $this->smtp_settings[ 'api_key' ] ? MRMSecurity::get_instance()->decrypt( $this->smtp_settings[ 'api_key' ] ) : false;

		if ( $sendgrid_api && $this->to_email && $this->from_email && $this->email_content ) {
			$email = new \SendGrid\Mail\Mail();
			$email->setFrom( $this->from_email, $this->from_email_name );
			$email->setSubject( $this->email_subject );
			$email->addTo( $this->to_email, "" );
			$email->addContent( $this->email_content );
			$email->addHeaders( $this->email_headers );
			$sendgrid = new \SendGrid( $sendgrid_api );

			try {
				$response = $sendgrid->send( $email );
				return 401 !== $response->statusCode();
			}
			catch( Exception $e ) {
				echo 'Caught exception: ' . $e->getMessage() . "\n";
			}
		}
		return false;
	}

	/**
	 * @desc Configure Amazon SES API
	 * @param $null
	 * @param $attributes
	 * @return bool
	 * @since 1.0.0
	 */
	public function configure_amazonses( $null, $attributes ) {
		$this->set_email_attributes( $attributes );
		$region     = isset( $this->smtp_settings[ 'region' ] ) && '' !== $this->smtp_settings[ 'region' ] ? $this->smtp_settings[ 'region' ] : false;
		$access_key = isset( $this->smtp_settings[ 'access_key' ] ) && '' !== $this->smtp_settings[ 'access_key' ] ? $this->smtp_settings[ 'access_key' ] : false;
		$secret_key = isset( $this->smtp_settings[ 'secret_key' ] ) && '' !== $this->smtp_settings[ 'secret_key' ] ? MRMSecurity::get_instance()->decrypt( $this->smtp_settings[ 'secret_key' ] ) : false;

		if ( $region && $access_key && $secret_key && $this->to_email && $this->from_email && $this->email_content ) {
			// Create an SesClient. Change the value of the region parameter if you're
			// using an AWS Region other than US West (Oregon). Change the value of the
			// profile parameter if you want to use a profile in your credentials file
			// other than the default.
			$SesClient = new \Aws\Ses\SesClient( [
				'version'     => 'latest',
				'region'      => $region,
				'credentials' => [
					'key'    => $access_key,
					'secret' => $secret_key
				]
			] );

			// Replace sender@example.com with your "From" address.
			// This address must be verified with Amazon SES.
			$sender_email = $this->from_email;

			// Replace these sample addresses with the addresses of your recipients. If
			// your account is still in the sandbox, these addresses must be verified.
			$recipient_emails = [ $this->to_email ];

			// Specify a configuration set. If you do not want to use a configuration
			// set, comment the following variable, and the
			// 'ConfigurationSetName' => $configuration_set argument below.
			$configuration_set = $this->email_headers;

			$subject        = $this->email_subject;
			$plaintext_body = $this->email_content;
			$html_body      = $this->email_content;
			$char_set       = 'UTF-8';

			try {
				$response    = $SesClient->sendEmail( [
					'Destination'          => [
						'ToAddresses' => $recipient_emails,
					],
					'ReplyToAddresses'     => [ $sender_email ],
					'Source'               => $sender_email,
					'Message'              => [
						'Body'    => [
							'Html' => [
								'Charset' => $char_set,
								'Data'    => $html_body,
							],
							'Text' => [
								'Charset' => $char_set,
								'Data'    => $plaintext_body,
							],
						],
						'Subject' => [
							'Charset' => $char_set,
							'Data'    => $subject,
						],
					],
					// If you aren't using a configuration set, comment or delete the
					// following line
					'ConfigurationSetName' => $configuration_set,
				] );
				$messageId = $response[ 'MessageId' ];
				echo( "Email sent! Message ID: $messageId" . "\n" );
			}
			catch( \Aws\Exception\AwsException $e ) {
				// output error message if fails
				echo $e->getMessage();
				echo( "The email was not sent. Error message: " . $e->getAwsErrorMessage() . "\n" );
				echo "\n";
			}
		}
		return true;
	}

	/**
	 * @desc Set the email variables
	 * @param $attributes
	 * @return void
	 * @since 1.0.0
	 */
	private function set_email_attributes( $attributes ) {
		$this->from_email        = isset( $attributes[ 'from' ] ) && '' !== $attributes[ 'from' ] ? sanitize_email( $attributes[ 'from' ] ) : sanitize_email( get_option( 'admin_email', false ) );
		$this->to_email          = isset( $attributes[ 'to' ] ) && '' !== $attributes[ 'to' ] ? sanitize_email( $attributes[ 'to' ] ) : false;
		$this->email_subject     = isset( $attributes[ 'subject' ] ) && '' !== $attributes[ 'subject' ] ? sanitize_text_field( $attributes[ 'subject' ] ) : '';
		$this->email_content     = isset( $attributes[ 'message' ] ) && '' !== $attributes[ 'message' ] ? $attributes[ 'subject' ] : false;
		$this->email_attachments = isset( $attributes[ 'attachments' ] ) && '' !== $attributes[ 'attachments' ] ? $attributes[ 'headers' ] : [];
		$this->from_email_name   = $this->from_email ? get_user_by( 'email', $this->from_email )->display_name : '';

		$this->email_headers = [];
		if ( isset( $attributes[ 'headers' ] ) && '' !== $attributes[ 'headers' ] ) {
			foreach ( $attributes[ 'headers' ] as $header ) {
				$temp_header = explode( ': ', $header );
				if ( isset( $temp_header[ 0 ], $temp_header[ 1 ] ) && 'MIME-Version' === $temp_header[ 0 ] || 'Content-type' === $temp_header[ 0 ] ) {
					$this->email_headers[ $temp_header[ 0 ] ] = $temp_header[ 1 ];
				}
			}
		}
	}
}