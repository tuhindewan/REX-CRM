<?php

namespace MRM\Controllers;

use MRM\Data\MRM_Contact;
use MRM\Traits\Singleton;
use WP_REST_Request;
use Exception;
use MRM\Models\MRM_Contact_Model;
use MRM\Models\MRM_Tag_Model;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-11 11:58:47
 * @modify date 2022-08-11 11:58:47
 * @desc [Handle Contatc Module related API callbacks]
 */


class MRM_Contact_Controller extends MRM_Base_Controller {

    use Singleton;

    /**
     * MRM_Segment_Model class object
     * 
     * @var object
     * @since 1.0.0
     */
    public $model;


    /**
     * Contact object arguments
     * 
     * @var object
     * @since 1.0.0
     */
    public $contact_args;


    /**
     * Create a new contact or update a existing contact
     * 
     * @param WP_REST_Request $request
     * 
     * @return array
     * @since 1.0.0
     */
    public function create_or_update_contact(WP_REST_Request $request)
    {
        $this->model = MRM_Contact_Model::get_instance();

        // Get values from API
        $query_params   =   $request->get_query_params();
        $request_params =   $request->get_params();
        $params         =   array_replace( $query_params, $request_params );

        // Email address validation
        $email = isset($params['email']) ? sanitize_text_field($params['email']) : '';

        if ( empty( $email ) ) {
			$response = __( 'Email address is mandatory', 'mrm' );

			return $this->get_error_response( $response,  400);
		}

        $this->contact_args = array(
			'first_name'    =>  isset( $params['first_name'] ) ? sanitize_text_field($params['first_name']) : '',
            'last_name'     =>  isset( $params['last_name'] ) ? sanitize_text_field($params['last_name']) : '',
            'phone'         =>  isset( $params['phone'] ) ? sanitize_text_field($params['phone']) : '',
            'status'        =>  isset( $params['status'] ) ? sanitize_text_field($params['status']) : '',
		);

        // Contact object create and insert or update to database
        try {
            $contact = new MRM_Contact($email, $this->contact_args);
            $contact_id = $this->model->insert($contact);
        
            if(isset($params['tags'])){
                $this->set_tags( $params['tags'], $contact_id );
            }

            if($contact_id) {
                return $this->get_success_response(__( 'Insertion successfull', 'mrm' ), 201);
            } else {
                return $this->get_error_response(__( 'Insertion Failed', 'mrm' ), 400);
            }
        } catch(Exception $e) {
                return $this->get_error_response(__( 'Segment is not valid', 'mrm' ), 400);
        }
    }


    public function set_tags( $tags, $contact_id )
    {
        $tag_ids = array_map(function ($tag) use($contact_id) {
            // if( 0 == $tag['id'] ){
            //     $new_tag_id = MRM_Tag_Model::get_instance()->insert($tag['title']);
            // }

            // $new_tag = array(
            //     'tag_id'    => $new_tag_id,
            //     'contact_id'    => $contact_id
            // );

            $old_tag = array(
                'tag_id'    => $tag['id'],
                'contact_id'    => $contact_id
            );
            return $old_tag;

        }, $tags);      
    }
}