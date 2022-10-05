<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\MRM\DataBase\Models\CampaignEmailBuilderModel;
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
        $params     = MRM_Common::get_api_params_values( $request );
        $is_new     = CampaignEmailBuilderModel::is_new_email_template($params['email_id']) ? true : false;
        $response   = array(
            'success'   => true,
            'message'   => ''
        );
        if ( $is_new ) {
            CampaignEmailBuilderModel::insert(array(
                'email_id'  => $params['email_id'],
                'status'    => 'published',
                'email_body' => serialize($params['email_body'])
            ));
            $response['message'] = __( 'Data successfully inserted', 'mrm' );
        } else {
            CampaignEmailBuilderModel::update(
                $params['email_id'],
                array(
                    'status'    => 'published',
                    'email_body' => serialize($params['email_body'])
                )
            );
            $response['message'] = __( 'Data successfully updated', 'mrm' );
        }
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
        return CampaignEmailBuilderModel::get($params['email_id']);
    }

    /**
     * @inheritDoc
     */
    public function get_all(WP_REST_Request $request)
    {
        // TODO: Implement get_all() method.
    }
}