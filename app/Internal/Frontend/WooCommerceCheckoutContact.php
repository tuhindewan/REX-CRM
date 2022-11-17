<?php

namespace Mint\MRM\Internal\Frontend;

use Mint\MRM\Admin\API\Controllers\ListController;
use Mint\MRM\Admin\API\Controllers\MessageController;
use Mint\MRM\Admin\API\Controllers\TagController;
use Mint\MRM\DataBase\Models\ContactModel;
use Mint\MRM\DataStores\ContactData;
use Mint\Mrm\Internal\Traits\Singleton;

class WooCommerceCheckoutContact {

    use Singleton;

    protected $setting_options;

    /**
     * @desc Initialize actions
     * @return void
     * @since 1.0.0
     */
    public function init() {
        $this->setting_options = get_option( '_mrm_woocommerce_settings', [] );
        $checkbox_enabled      = isset( $this->setting_options[ 'enable' ] ) ? $this->setting_options[ 'enable' ] : false;
        if( $checkbox_enabled ) {
            add_action( 'woocommerce_checkout_after_terms_and_conditions', [ $this, 'add_consent_checkbox' ] );
            add_action( 'woocommerce_checkout_process', [ $this, 'register_user_as_contact' ] );
        }
    }

    /**
     * @desc Add consent checkbox to add contact after checkout [before checkout button]
     * @return void
     * @since 1.0.0
     */
    public function add_consent_checkbox() {
        $label = isset( $this->setting_options[ 'checkbox_label' ] ) ? $this->setting_options[ 'checkbox_label' ] : 'Register me as a contact after checkout.';
        ?>
        <div class="mintmrm-add-contact-consent-content">
            <input type="checkbox" id="mintmrm_add_contact_consent_checkbox"
                   name="mintmrm_add_contact_consent_checkbox">
            <label for="mintmrm_add_contact_consent_checkbox"> <?php
                _e( $label, 'mrm' ); ?> </label>
        </div>
        <?php
    }

    /**
     * @desc Register current user as Mint MRM contact
     * @return void
     * @since 1.0.0
     */
    public function register_user_as_contact() {
        $consent_accepted = WC()->checkout()->get_value( 'mintmrm_add_contact_consent_checkbox' );

        if( $consent_accepted ) {
            $user_email = WC()->checkout()->get_value( 'billing_email' );

            if( $user_email && !ContactModel::is_contact_exist( $user_email ) ) {
                $user_first_name = WC()->checkout()->get_value( 'billing_first_name' );
                $user_last_name  = WC()->checkout()->get_value( 'billing_last_name' );
                $double_optin    = get_option( '_mrm_optin_settings', [] );
                $double_optin    = isset( $double_optin[ 'enable' ] ) && $double_optin[ 'enable' ];
                $subscription_status = $double_optin ? 'pending' : 'subscribed';

                $setting_tags  = isset( $this->setting_options[ 'tags' ] ) ? $this->setting_options[ 'tags' ] : [];
                $setting_lists = isset( $this->setting_options[ 'lists' ] ) ? $this->setting_options[ 'lists' ] : [];

                $user_data = [
                    'email'      => $user_email,
                    'first_name' => $user_first_name,
                    'last_name'  => $user_last_name,
                    'status'     => [ $subscription_status ],
                    'lists'      => $setting_lists,
                    'tags'       => $setting_tags,
                ];

                $contact    = new ContactData( $user_email, $user_data );
                $contact_id = ContactModel::insert( $contact );

                if( !empty( $setting_tags ) ) {
                    TagController::set_tags_to_contact( $setting_tags, $contact_id );
                }

                if( !empty( $setting_lists ) ) {
                    ListController::set_lists_to_contact( $setting_lists, $contact_id );
                }

                if ( $double_optin && $contact_id ) {
                    MessageController::get_instance()->send_double_opt_in( $contact_id );
                }
            }
        }
    }
}