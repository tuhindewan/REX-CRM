<?php

namespace Mint\MRM\DataBase\Tables;

use Mint\MRM\Interfaces\Schema;

class CampaignScheduledEmailsSchema implements Schema {
    /**
     * @desc Table name for mrm_campaign_scheduled_emails
     * @var string
     * @since 1.0.0
     */
    public static $campaign_scheduled_emails_table = 'mrm_campaign_scheduled_emails';

    public function get_sql() {
        global $wpdb;
        $campaign_scheduled_emails_table = $wpdb->prefix . self::$campaign_scheduled_emails_table;

        return "CREATE TABLE IF NOT EXISTS {$campaign_scheduled_emails_table} (
            `id` BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            `campaign_id` VARCHAR(192) NULL,
            `email_id` BIGINT UNSIGNED NOT NULL,
            `contact_id` BIGINT(20) UNSIGNED NOT NULL,
            `email` VARCHAR(190) NOT NULL,
            `status` ENUM('scheduled', 'sent', 'failed'),
            `scheduled_at` TIMESTAMP NOT NULL,
            `updated_at` TIMESTAMP NOT NULL,
            INDEX `email_id_index` (`email_id` ASC),
            INDEX `campaign_id_index` (`campaign_id` ASC)
         )";
    }
}