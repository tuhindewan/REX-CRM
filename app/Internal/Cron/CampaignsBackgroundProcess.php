<?php
namespace Mint\MRM\Internal\Cron;

use Mint\Mrm\Internal\Traits\Singleton;

class CampaignsBackgroundProcess
{
    use Singleton;

    /**
     * @desc Initialize cron functionalities
     * @since 1.0.0
     * @return void
     */
    public function init() {
        add_filter( 'cron_schedules', [ $this, 'add_five_mins_cron_hook' ] );
        add_action( 'admin_init', [ $this, 'register_cron_schedule' ] );
        add_action( 'mrm_schedule_emails', [ $this, 'process_scheduled_emails' ] );
    }

    /**
     * @desc Add five minutes cron in core schedules
     * @param $schedules
     * @return mixed
     * @since 1.0.0
     */
    public function add_five_mins_cron_hook( $schedules ) {
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
    public function register_cron_schedule() {
        if( ! wp_next_scheduled( 'mrm_schedule_emails' ) ) {
            wp_schedule_event( time(), 'every_five_minutes', 'mrm_schedule_emails', [], true );
        }
    }

    /**
     * @desc Configure campaign emails
     * before initiating sending email process
     * @since 1.0.0
     * @return void
     */
    public function process_scheduled_emails() {
        error_log(print_r('processing-fucntion', 1));
    }
}