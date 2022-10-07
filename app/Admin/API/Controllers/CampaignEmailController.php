<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\MRM\DataBase\Models\CampaignEmailBuilderModel;
use Mint\MRM\DataBase\Models\CampaignModel;
use Mint\Mrm\Internal\Traits\Singleton;
use WP_REST_Request;
use MRM\Common\MRM_Common;


/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Responsible for managing Campaign API callbacks]
 */

class CampaignEmailController extends BaseController {

    use Singleton;


    /**
     * Campaign object arguments
     *
     * @var object
     * @since 1.0.0
     */
    public $args = array();


    /**
     * Create or update email templates for each campaign
     *
     * @param WP_REST_Request
     * @return \WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request ) {
        $params = MRM_Common::get_api_params_values( $request );
        $response   = array(
            'success'   => true,
            'message'   => ''
        );
        
        $email = CampaignModel::get_email_by_index( $params['campaign_id'], $params['email_index'] );
        $is_new = true;
        if ( $email ) {
            $is_new   = false;
        }
        if ( !$is_new ) {

            // save the email first
            // $email_id = CampaignModel::insert_campaign_emails( $params['campaign_data'][$params['email_index'] ], $params['campaign_id'], $params['email_index'] );

            CampaignEmailBuilderModel::insert(array(
                'email_id'      => $email->id,
                'status'        => 'published',
                'email_body' => $params['email_body'],
                'json_data'  => serialize($params['json_data']),
            ));
            $response['message'] = __( 'Data successfully inserted', 'mrm' );
        } else {
            CampaignEmailBuilderModel::update(
                $email->id,
                array(
                    'status'    => 'published',
                    'email_body' => $params['email_body'],
                    'json_data'  => serialize($params['json_data']),
                )
            );
            $response['message'] = __( 'Data successfully updated', 'mrm' );
        }
        $response['campaign_id']    = $params['campaign_id'];
        return rest_ensure_response($response);
    }

    /**
     * @inheritDoc
     */
    public function delete_single(WP_REST_Request $request)
    {
        // TODO: Implement delete_single() method.
    }

    /**
     * @inheritDoc
     */
    public function delete_all(WP_REST_Request $request)
    {
        // TODO: Implement delete_all() method.
    }


    /**
     * @inheritDoc
     */
    public function get_single(WP_REST_Request $request) {
        $params     = MRM_Common::get_api_params_values( $request );
        $email      = CampaignModel::get_email_by_index($params['campaign_id'], $params['email_index']);
        $response   = array(
            'success'   => true,
            'message'   => ''
        );
        if ( !$email ) {
            $response   = array(
                'success'   => false,
                'message'   => 'No email data found!'
            );
            return rest_ensure_response($response);
        }
        $email_builder_data     = CampaignEmailBuilderModel::get($email->id);
        $response['email_data'] = $email_builder_data;
        return rest_ensure_response($response);
    }


    /**
     * @inheritDoc
     */
    public function get_all(WP_REST_Request $request)
    {
        // TODO: Implement get_all() method.
    }


    /**
     * We followed three steps to save a new email for a campaign.
     *
     *
     * @param WP_REST_Request $request
     * @return \WP_Error|\WP_REST_Response
     *
     * @since 1.0.0
     */
    public function create_email( WP_REST_Request $request ) {
        $params         = MRM_Common::get_api_params_values( $request );
        $email_index    = isset($params['email_index']) ? $params['email_index'] : null;
        $response   = array(
            'success'   => true,
            'message'   => ''
        );

        if (is_null($email_index)) {
            return rest_ensure_response(array(
                'success'   => false,
                'message'   => 'There is something wrong. Email index of this campaign not found. Try again.'
            ));
        }

        // Step #1
        if( isset( $params['campaign_data']['status'] ) && null == $params['campaign_data']['status'] ){
            $params['campaign_data']['status'] = "draft";
        }

        $campaign = CampaignModel::insert($params['campaign_data']);
        $campaign_id    = $campaign['id'];

        // Insert campaign recipients information
        $recipients = isset($params['campaign_data']['recipients']) ? maybe_serialize( $params['campaign_data']['recipients']) : "";
        CampaignModel::insert_campaign_recipients( $recipients, $campaign_id );

        $params['campaign_data'][$email_index]['campaign_id'] = $campaign_id;
        $emailData = isset($params['campaign_data']['emails'][0]) ? $params['campaign_data']['emails'][0] : "";
        // Step #2
        $email_id = CampaignModel::insert_campaign_emails( $emailData, $campaign_id, $email_index );


        // Step #3
        CampaignEmailBuilderModel::insert(array(
            'email_id'   => $email_id,
            'status'     => 'published',
            'email_body' => $params['email_body'],
            'json_data'  => serialize($params['json_data']),
        ));
        $response['message'] = __( 'Data successfully inserted', 'mrm' );
        $response['campaign_id']    = $campaign_id;
        return rest_ensure_response($response);
    }

}