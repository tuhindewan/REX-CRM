<?php

namespace Mint\MRM\Internal\Ajax;


use Mint\MRM\Admin\API\Controllers\TagController;
use Mint\MRM\DataBase\Models\ContactModel;
use Mint\MRM\DataBase\Models\CustomFieldModel;
use Mint\MRM\DataBase\Models\FormModel;
use Mint\MRM\DataStores\ContactData;
use Mint\MRM\DataStores\CustomFieldData;
use Mint\Mrm\Internal\Traits\Singleton;
use MRM\Common\MRM_Common;

class AjaxAction {

    use Singleton;


    private function __construct() {
        add_action('wp_ajax_set_form', array($this, 'save_form'));
        add_action('wp_ajax_nopriv_set_form', array($this, 'save_form'));

        add_action('wp_ajax_mrm_submit_form', array($this, 'mrm_submit_form'));
        add_action('wp_ajax_nopriv_mrm_submit_form', array($this, 'mrm_submit_form'));
    }



    public function save_form() {
        $first_name = $_POST['first_name'];
        $email = $_POST['email'];
        $last_name = $_POST['last_name'];
        $request['first_name'] = $first_name;
        $request['email'] = $email;
        $request['last_name'] = $last_name;
        $request['status']  = 'pending';
        $request['source']  = 'form';
        $contact    = new ContactData( $email, $request );
        ContactModel::insert( $contact );
        $admin =get_option('admin_email');
        // wp_mail($email,$name,$message);  main sent to admin and the user
        if($contact )
        {
            echo "mail sent";
        } else {
            echo "mail not sent";
        }
        die();
    }

    /**
     * MRM Form Submit
     */

    public function mrm_submit_form()
    {
        check_ajax_referer( 'wp_mrm_submit_form', 'security' );
        $params     = $_POST;
        $response   = array(
            'status' => 'failed',
            'message' => 'Form is not valid'
        );
        if (isset($params['action']) &&  'mrm_submit_form' == $params['action'] ){
            $postData 	= isset($_POST['post_data']) ? $_POST['post_data'] : '';
            parse_str($postData, $post_data);
            $form_data  = array();
            $form_data['meta_fields'] = [];
            if ($post_data) {
                foreach ( $post_data as $key => $value ) {
                    if ('email' === $key) {
                        $form_data['email'] = $value;
                    } elseif( 'last_name' === $key ) {
                        $form_data['last_name'] = $value;
                    } elseif ( 'first_name' === $key ) {
                        $form_data['first_name'] = $value;
                    }elseif ( 'form_id' === $key ) {
                        $form_data['form_id'] = $value;
                    }else{
                        $form_data['meta_fields'][$key] = $value;
                    }
                }
            }
            $form_id = isset($form_data['form_id']) ? $form_data['form_id']: 0;
            $parms = array(
                'first_name'    => isset($form_data['first_name']) ? $form_data['first_name'] : '' ,
                'last_name'     => isset($form_data['last_name']) ? $form_data['last_name'] : ''
              );
            $contact        = new ContactData( $form_data['email'],$parms );
            $exist_email    = ContactModel::is_contact_exist( $form_data['email'] );
            if($exist_email){
                $response['status']  = 'success';
                $response['message'] = __( 'Email address already assigned to another contact.', 'mrm' );
                echo json_encode($response, true);
                die();
            }
            do_action('mrm/before_form_submit',$contact);
            $contact_id         = ContactModel::insert( $contact );
            if ( $contact_id ){
                do_action('mrm/after_form_submit',$contact_id,$contact);

                $sign_up        = FormModel::get_meta($form_id);
                $sign_up_count  = isset($sign_up['meta_fields']['sign_up']) ? $sign_up['meta_fields']['sign_up'] : 0;

                $args['meta_fields'] = array(
                    'sign_up' => $sign_up_count + 1
                );
                FormModel::update_meta_fields($form_id,$args);

                $group_id = ['1','2','3','4','5'];

                TagController::set_tags_to_contact($group_id,$contact_id);

                $meta_fields['meta_fields'] = isset($form_data['meta_fields']) ? $form_data['meta_fields'] : [];
                ContactModel::update_meta_fields( $contact_id, $meta_fields );
                $response['status']  = 'success';
                $response['message'] =  __( 'Form Submitted Successfully.', 'mrm' );
                echo json_encode($response, true);
                die();
            }
        }
        echo json_encode($response, true);
        die();
    }

}