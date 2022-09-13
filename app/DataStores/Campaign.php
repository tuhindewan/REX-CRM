<?php

namespace Mint\MRM\DataStores;

class Campaign {

    protected $campaign_id;

    public function __construct( $campaign_id ) {
        $this->campaign_id = $campaign_id;
    }


    /**
     * Get the campaign by campaign id
     *
     * @param string $status
     * @return array|object|\stdClass|void|null
     */
    private function get_the_campaign($status = 'processing') {
        global $wpdb;
        $table_name = $wpdb->prefix.'mrm_campaigns';
        $sql        = $wpdb->prepare("SELECT * FROM {$table_name} WHERE id=%s and status = %s", $this->campaign_id, $status );
        return $wpdb->get_row($sql);
    }


    /**
     * @param int $per_batch
     * @return false
     */
    public function trigger_email( $per_batch = 500 ) {
        $campaign = $this->get_the_campaign();
        if ( !$campaign ) {
            return false;
        }
        $settings   = $campaign->settings;
        $offset     = $campaign->total_recipients ? $campaign->total_recipients : 0;
        $contacts   = $this->get_contacts( $settings, $per_batch, $offset );
        $result     = $this->prepare_campaign_email_lists( $contacts, $settings );
        $should_run = !!$result;

        while ( $should_run && !mrm_memory_exceed() ) {
            $should_run = !!$result;
            if ( $should_run ) {
                $campaign   = $this->get_the_campaign();
                $settings   = $campaign->settings;
                $contacts   = $this->get_contacts( $settings, $per_batch, $campaign->total_recipients );
                $result     = $this->prepare_campaign_email_lists( $contacts, $settings );
            }
        }

        // all email is ready to be sent
        if ( !$result ) {
            mrm_update_campaign( array(
                'id'        => $this->campaign_id,
                'status'    => 'processed'
            ));
        }

        return $campaign;
    }


    /**
     * @param $contacts
     * @param $settings
     * @return array
     */
    private function prepare_campaign_email_lists( $contacts, $settings ) {

        if ( !$contacts ) {
            return false;
        }
        global $wpdb;
        $table          = $wpdb->prefix.'mrm_campaign_emails';
        $time           = current_time('mysql');
        $inserted_ids   = [];
        foreach ( $contacts as $contact ) {
            $campaign_email = array(
                'campaign_id'   => $this->campaign_id,
                'contact_id'    => $contact->id,
                'status'        => 'scheduled',
                'created_at'    => $time,
                'updated_at'    => $time
            );

            $inserted_id = $wpdb->insert(
                $table,
                $campaign_email
            );
            $inserted_ids[] = $inserted_id;
        }

        // update recipient count
        mrm_update_campaign( array(
            'id'                    => $this->campaign_id,
            'total_recipients'      => count($inserted_ids)
        ));

        return $inserted_ids;
    }


    /**
     * @param $settings
     * @param $per_batch
     * @param int $offset
     * @return array|false|object|\stdClass[]
     */
    private function get_contacts( $settings, $per_batch, $offset = 0 ) {

        if ( !$settings ) {
            return false;
        }

        $settings   = unserialize($settings);

        if ( !$settings ) {
            return false;
        }

        global $wpdb;
        $table              = $wpdb->prefix.'mrm_contacts';
        $group_pivot_table  = $wpdb->prefix.'mrm_contact_group_pivot';

        $where_group        = array();
        $skip_where_query   = false;
        $where_query        = " WHERE status = 'subscribed'";
        $include_conditions = $settings['contact'];
        $sql = "SELECT distinct(c.id) FROM {$table} as c INNER JOIN $group_pivot_table as p ON c.id=p.contact_id ";
        foreach ( $include_conditions as $condition ) {
            $list_id    = is_array($condition['lists']) ?  'all' : $condition['lists'];
            $tag_id     = is_array($condition['tags']) ?  'all' : $condition['tags'];

            if ( !$list_id || !$tag_id ) {
                continue;
            }

            if ( 'all' === $list_id && 'all' === $tag_id ) {
                $skip_where_query = true;
                $sql = "SELECT distinct(id) FROM {$table}";
            } elseif ( 'all' === $list_id ) {
                $where_group[] = $tag_id;
            } elseif ( 'all' === $tag_id ) {
                $where_group[] = $list_id;
            } else {
                $where_group[] = $list_id;
                $where_group[] = $tag_id;
            }
        }

        if ( !$skip_where_query ) {
            $where_query = " AND p.group_id IN (". implode(', ', $where_group ) . ")";
        }

        $results = $wpdb->get_results( $sql."{$where_query} LIMIT {$per_batch} OFFSET {$offset}" );
        if ($results) {
            return $results;
        }
        return false;
    }


    /**
     * @return string
     */
    private function get_offset() {
        return mrm_get_campaign_meta( $this->campaign_id, '_last_processed_contact_id', 0 );
    }

}