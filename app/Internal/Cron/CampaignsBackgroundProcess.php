<?php
namespace Mint\MRM\Internal\Cron;

use Mint\MRM\DataBase\Models\CampaignEmailBuilderModel;
use Mint\MRM\DataBase\Models\CampaignModel as ModelsCampaign;
use Mint\Mrm\Internal\Traits\Singleton;
use Mint\MRM\Admin\API\Controllers\CampaignController;

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
        $campaign_id = 1;
        $recipients_emails = CampaignController::get_reciepents_email( $campaign_id );
        $recipients_emails = array_column( array_values( array_filter( $recipients_emails ) ), 'email' );
        $this->send_emails( $recipients_emails, $campaign_id );
    }

    private function send_emails( array $email_addresses, $campaign_id ) {
        $emails = ModelsCampaign::get_campaign_email( $campaign_id );
        $first_email = isset($emails[0]) ? $emails[0] : [];

        $email_builder = CampaignEmailBuilderModel::get($first_email['id']);
        $sender_email   = isset( $first_email['sender_email'] )     ? $first_email['sender_email'] : "";
        $sender_name    = isset( $first_email['sender_name'] )      ? $first_email['sender_name'] : "";
        $email_subject  = isset( $first_email['email_subject'] )    ? $first_email['email_subject'] : "";
        $email_body     = $email_builder["email_body"];

        $headers = array(
            'MIME-Version: 1.0',
            'Content-type: text/html;charset=UTF-8'
        );

        $from = 'From: '. $sender_name;
        $headers[] = $from . ' <' . $sender_email . '>';
        $headers[] = 'Reply-To:  ' . $sender_email;

        try {
            foreach( $email_addresses as $recipient ){
                wp_mail( $recipient, $email_subject, $email_body, $headers );
            }

        } catch(\Exception $e) {
            error_log(print_r( $e->getMessage(), 1 ));
        }
    }
}