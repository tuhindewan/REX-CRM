<?php

namespace Mint\MRM\Internal\Ajax;


use Mint\MRM\DataBase\Models\ContactModel;
use Mint\MRM\DataStores\ContactData;
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

    public function mrm_submit_form()
    {
        $params = $_POST;
        if (isset($params['action']) &&  'mrm_submit_form' == $params['action'] ){
            $email          = '';
            $first_name     = '';
            $last_name      = '';
            $postData 	= isset($_POST['post_data']) ? $_POST['post_data'] : '';
            parse_str($postData, $post_data);
            $form_data = array();
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
//                        array_push($form_data['meta_fields'],$meta_data);
                    }
                }
            }
            error_log(print_r($form_data,1));
            $parms          = [
                                'first_name'    => isset($form_data['first_name']) ? $form_data['first_name'] : '' ,
                                'last_name'     => isset($form_data['first_name']) ? $form_data['first_name'] : ''
                              ];
            $contact        = new ContactData( $form_data['email'],$parms );
            $contact_id     = ContactModel::insert( $contact );
            $meta_fields['meta_fields'] = $form_data['meta_fields'];
            ContactModel::update_meta_fields( $contact_id, $meta_fields );





        }
    }

}