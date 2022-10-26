<?php

namespace Mint\MRM\Internal\Cron;

use Mint\MRM\DataBase\Models\CampaignEmailBuilderModel;
use Mint\MRM\DataBase\Models\CampaignModel;
use Mint\Mrm\Internal\Traits\Singleton;
use Mint\MRM\Admin\API\Controllers\CampaignController;
use Mint\MRM\DataBase\Tables\CampaignScheduledEmails;

class CampaignsBackgroundProcess
{
	use Singleton;

	/**
	 * @desc A private variable to save process [background]
	 * initialization time
	 * @since 1.0.0
	 * @var float $process_creation_time
	 */
	private float $process_creation_time;

	/**
	 * @desc Initialize cron functionalities
	 * @return void
	 * @since 1.0.0
	 */
	public function init()
	{
		add_filter( 'cron_schedules', [ $this, 'add_five_mins_cron_hook' ] );
		add_action( 'admin_init', [ $this, 'register_cron_schedule' ] );
		add_action( 'mrm_schedule_emails', [ $this, 'process_scheduled_campaign_emails' ] );
	}

	/**
	 * @desc Add five minutes cron in core schedules
	 * @param $schedules
	 * @return mixed
	 * @since 1.0.0
	 */
	public function add_five_mins_cron_hook( $schedules )
	{
		$schedules[ 'every_five_minutes' ] = [
			'interval' => 300,
			'display'  => __( 'Every 5 Minutes' ),
		];
		return $schedules;
	}

	/**
	 * @desc Register email scheduler on every five minutes
	 * @return void
	 * @since 1.0.0
	 */
	public function register_cron_schedule()
	{
		if ( !wp_next_scheduled( 'mrm_schedule_emails' ) ) {
			wp_schedule_event( time(), 'every_five_minutes', 'mrm_schedule_emails', [], true );
		}
	}


	/**
	 * @desc Configure campaign emails and insert
     * the recipient emails to mrm_campaign_scheduled_emails table
	 * @return void
	 * @since 1.0.0
	 */
	public function process_scheduled_campaign_emails()
	{
		if ( !$this->process_locked() ) {
			$this->lock_process();
            global $wpdb;
			$campaigns = CampaignController::get_instance()->get_publish_campaign_id();
			$campaign_ids = array_column( $campaigns, 'id' );
            $campaign_scheduled_emails_table = $wpdb->prefix . CampaignScheduledEmails::$campaign_scheduled_emails_table;

			foreach ( $campaign_ids as $campaign_id ) {
				$campaign_emails = CampaignModel::get_campaign_email_for_background( $campaign_id );
                if ( is_array( $campaign_emails ) && !empty( $campaign_emails ) ) {
                    foreach ( $campaign_emails as $campaign_email ) {
                        $campaign_email_id = isset( $campaign_email[ 'id' ] ) ? $campaign_email[ 'id' ] : '';

                        $offset = get_option( 'mrm_campaign_email_recipients_offset_' . $campaign_id . '_' . $campaign_email_id, 0 );
                        $per_batch = 10;
                        $recipients_emails = CampaignController::get_reciepents_email( $campaign_id, $offset, $per_batch );
                        $delay_count = isset( $campaign_email[ 'delay_count' ] ) ? $campaign_email[ 'delay_count' ] : 0;
                        $delay_val = isset( $campaign_email[ 'delay_value' ] ) ? $campaign_email[ 'delay_value' ] : '';
                        $delay_val = str_replace( 's', '', $delay_val );

                        if ( is_array( $recipients_emails ) && !empty( $recipients_emails ) ) {

                            foreach( $recipients_emails as $email ) {
                                if( isset( $email[ 'id' ], $email[ 'email' ] ) && $email[ 'id' ] && $email[ 'email' ] ) {
                                    $mysql_format = 'Y-m-d H:i:s';
                                    $scheduled_at = date( $mysql_format, strtotime( '+' . $delay_count . ' ' . $delay_val ) );
                                    $updated_at = date( $mysql_format );

                                    $wpdb->insert(
                                        $campaign_scheduled_emails_table,
                                        [
                                            'campaign_id' => $campaign_id,
                                            'email_id' => $campaign_email_id,
                                            'contact_id' => $email[ 'id' ],
                                            'email' => $email[ 'email' ],
                                            'status' => 'scheduled',
                                            'scheduled_at' => $scheduled_at,
                                            //'updated_at' => $updated_at
                                        ]
                                    );
                                }
                            }
                        }
                        else {
                            delete_option( 'mrm_campaign_email_recipients_offset_' . $campaign_id . '_' . $campaign_email_id );
                            //CampaignModel::update_campaign_email_status( $campaign_id, $campaign_email_id, 'sent' );
                        }
                        if ( $this->time_exceeded() || $this->memory_exceeded() ) {
                            break;
                        }
                    }
                }
				if ( $this->time_exceeded() || $this->memory_exceeded() ) {
					break;
				}
			}
			$this->unlock_process();
		}
	}

	/**
	 * @desc Send emails and handle time/memory limits
	 * @param array $email_addresses
	 * @param $campaign_id
	 * @param $offset
	 * @return void
	 * @since 1.0.0
	 */
	private function send_emails( array $email_addresses, $email_subject, $email_body, $headers, $campaign_id, $campaign_email_id, $offset )
	{
		foreach ( $email_addresses as $recipient ) {
			try {
				wp_mail( $recipient, $email_subject, $email_body, $headers );
				$offset++;
				update_option( 'mrm_campaign_email_recipients_offset_' . $campaign_id . '_' . $campaign_email_id, $offset );
				sleep( 0.5 );
			} catch ( \Exception $e ) {
				error_log( print_r( $e->getMessage(), 1 ) );
			}
			if ( $this->time_exceeded() || $this->memory_exceeded() ) {
				break;
			}
		}
	}

	/**
	 * @desc Check process status if
	 * its already running (locked) or not
	 * @return bool
	 * @since 1.0.0
	 */
	private function process_locked()
	{
		return 'locked' === get_option( 'mrm_process_lock_status', 'unlocked' );
	}

	/**
	 * @desc Lock the process before starting
	 * @return void
	 * @since 1.0.0
	 */
	private function lock_process()
	{
		$this->process_creation_time = microtime( true );
		update_option( 'mrm_process_lock_status', 'locked' );
	}

	/**
	 * @desc Unlock the process after
	 * finishing all tasks
	 * @return void
	 * @since 1.0.0
	 */
	private function unlock_process()
	{
		update_option( 'mrm_process_lock_status', 'unlocked' );
	}

	/**
	 * @desc Check if process time limits already exceeded
	 * @return mixed|null
	 * @since 1.0.0
	 */
	private function time_exceeded()
	{
		$execution_time = $this->get_execution_time();
		$max_execution_time = ini_get( 'max_execution_time' );
		$max_execution_time = $max_execution_time - ( apply_filters( 'ebp_exclude_safe_time_limits', 20 ) * $max_execution_time / 100 );
		$likely_to_be_exceeded = $execution_time > $max_execution_time;

		return apply_filters( 'ebp_max_execution_time_exceeded', $likely_to_be_exceeded, $execution_time, $max_execution_time );
	}

	/**
	 * @desc Calculate and get current process
	 * execution time by this time
	 * @return float|int|mixed
	 * @since 1.0.0
	 */
	private function get_execution_time()
	{
		$execution_time = microtime( true ) - $this->process_creation_time;

		// Get the CPU time if the hosting environment uses it rather than wall-clock time to calculate a process's execution time.
		if ( function_exists( 'getrusage' ) && apply_filters( 'ebp_cpu_execution_time', defined( 'PANTHEON_ENVIRONMENT' ) ) ) {
			$resource_usages = getrusage();

			if ( isset( $resource_usages[ 'ru_stime.tv_usec' ], $resource_usages[ 'ru_stime.tv_usec' ] ) ) {
				$execution_time = $resource_usages[ 'ru_stime.tv_sec' ] + ( $resource_usages[ 'ru_stime.tv_usec' ] / 1000000 );
			}
		}

		return $execution_time;
	}

	/**
	 * @desc Check if current process exceeded
	 * available memory limits
	 * @return mixed|null
	 * @since 1.0.0
	 */
	private function memory_exceeded()
	{
		$allowed_memory = apply_filters( 'ebp_max_allowed_memory_limit', 20 ) / 100;
		$memory_limit = $this->get_memory_limit() * $allowed_memory;
		$current_memory = memory_get_usage( true );
		$memory_exceeded = $current_memory >= $memory_limit;

		return apply_filters( 'ebp_memory_exceeded', $memory_exceeded, $this );
	}

	/**
	 * @desc Get php memory limits
	 * @return int|mixed
	 * @since 1.0.0
	 */
	private function get_memory_limit()
	{
		if ( function_exists( 'ini_get' ) ) {
			$memory_limit = ini_get( 'memory_limit' );
		}
		else {
			$memory_limit = '128M'; // Sensible default, and minimum required by WooCommerce
		}

		if ( !$memory_limit || -1 === $memory_limit || '-1' === $memory_limit ) {
			// Unlimited, set to 32GB.
			$memory_limit = '32G';
		}
		return $this->convert_hr_to_bytes( $memory_limit );
	}

	/**
	 * @desc Converts a shorthand byte value to an integer byte value
	 * @param $value
	 * @return int|mixed
	 * @since 1.0.0
	 */
	private function convert_hr_to_bytes( $value )
	{
		if ( function_exists( 'wp_convert_hr_to_bytes' ) ) {
			return wp_convert_hr_to_bytes( $value );
		}

		$value = strtolower( trim( $value ) );
		$bytes = (int)$value;

		if ( false !== strpos( $value, 'g' ) ) {
			$bytes *= GB_IN_BYTES;
		}
		elseif ( false !== strpos( $value, 'm' ) ) {
			$bytes *= MB_IN_BYTES;
		}
		elseif ( false !== strpos( $value, 'k' ) ) {
			$bytes *= KB_IN_BYTES;
		}

		// Deal with large (float) values which run into the maximum integer size.
		return min( $bytes, PHP_INT_MAX );
	}
}