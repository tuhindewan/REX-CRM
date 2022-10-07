<?php

namespace Mint\MRM\DataBase;


use Mint\Mrm\Internal\Traits\Singleton;

class Model {

    use Singleton;


    /**
     * Return tables
     *
     * @return mixed|void
     * @since 1.0.0
     */
    public static function get_tables() {
        self::autoload_table_classes();
        return apply_filters( 'mrm/database_tables', array(
            'contact_group'         => 'ContactGroupSchema',
            'contact'               => 'ContactSchema',
            'contact_meta'          => 'ContactMetaSchema',
            'contact_note'          => 'ContactNoteSchema',
            'contact_group_pivot'   => 'ContactGroupPivotSchema',
            'interaction'           => 'InteractionSchema',
            'message'               => 'MessageSchema',
            'work_flow'             => 'WorkFlowSchema',
            'custom_fields'         => 'CustomFieldSchema',
            'campaign_schema'       => 'CampaignSchema',
            'form'                  => 'FormSchema'
        ));
    }


    /**
     * Autoload table classes
     *
     * @since 1.0.0
     */
    public static function autoload_table_classes() {
        foreach(glob(MRM_DIR_PATH . "/app/Database/Tables/*.php") as $file){
            require_once $file;
        }
    }


    /**
     * Returns the current Database version
     *
     * @return false|mixed|void
     * @since 1.0.0
     */
    public static function get_database_version() {
        static $db_version = array();
        $blog_id = get_current_blog_id();
        if ( empty( $db_version[ $blog_id ] ) ) {
            $db_version[ $blog_id ] = get_option( 'mrm_db_version' );
        }
        return $db_version[ $blog_id ];
    }

}