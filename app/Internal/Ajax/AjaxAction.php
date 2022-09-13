<?php

namespace Mint\MRM\Internal\Ajax;


use Mint\MRM\DataBase\Models\ContactModel;
use Mint\MRM\DataStores\ContactData;
use Mint\Mrm\Internal\Traits\Singleton;

class AjaxAction {

    use Singleton;


    private function __construct() {
        add_action('wp_ajax_set_form', array($this, 'save_form'));
        add_action('wp_ajax_nopriv_set_form', array($this, 'save_form'));
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

}