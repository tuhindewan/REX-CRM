<?php

namespace Mint\MRM\Admin\API\Controllers;

use Mint\MRM\DataBase\Models\ContactModel;
use Mint\MRM\DataBase\Models\MessageModel;
use Mint\MRM\DataStores\MessageData;
use Mint\Mrm\Internal\Traits\Singleton;
use MRM\Common\MRM_Common;
use MRM\Data\MRM_Message;
use WP_REST_Request;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-17 10:28:03
 * @modify date 2022-08-17 10:28:03
 * @desc [Manage message related API request and responses]
 */


class MessageController extends BaseController {


    use Singleton;

    /**
     * API values after sanitization
     * 
     * @var array
     * @since 1.0.0
     */
    private $args  = array();


    /**
     * Send an email to contact 
     * Stores email information to database
     * 
     * @param WP_REST_Request $request
     * @return bool|WP_REST_Response
     * @since 1.0.0
     */
    public function create_or_update( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );
        $this->args = array(
            'email_address'     => isset( $params['email_address'] )   ? sanitize_text_field( $params['email_address'] )    : NULL,
            'email_subject'     => isset( $params['email_subject'] )   ? sanitize_text_field( $params['email_subject'] )    : NULL,
            'email_body'        => isset( $params['email_body'] )      ? $params['email_body']                              : NULL,
            'contact_id'        => isset( $params['contact_id'] )      ? sanitize_text_field( $params['contact_id'] )       : NULL,
            'sender_id'         => isset( $params['sender_id'] )       ? sanitize_text_field( $params['sender_id'] )        : NULL
        );

        // Email address valiation
        if ( empty( $this->args['email_address'] ) ) {

			return $this->get_error_response( __( 'Email address is mandatory', 'mrm' ), 200 );
		}

        // Email subject validation
        if ( empty( $this->args['email_subject'] ) ) {

			return $this->get_error_response( __( 'Email subject is mandatory', 'mrm' ), 200 );
		}

        // Email body validation
		if ( empty( $this->args['email_body'] ) ) {

			return $this->get_error_response( __( 'Email body is mandatory', 'mrm' ), 200 );
		}

        // Prepare message data
        $message = new MessageData( $this->args );

        MessageModel::insert( $message );

        $sent = $this->send_message( $message );

        $messages = isset( $params['contact_id'] ) ? MessageModel::get_messages( $params['contact_id'] ) : [];
        $messages = end($messages );
        $message_id = is_array( $messages ) && isset( $messages[ 'id' ] ) ? $messages[ 'id' ] : false;

        if( $sent ){
            if( $message_id ) {
                MessageModel::update( $message_id, 'status', 'sent' );
            }
            return $this->get_success_response( __( 'Email has been sent successfully.', 'mrm' ), 201 );
        }
        if( $message_id ) {
            MessageModel::update( $message_id, 'status', 'failed' );
        }
        return $this->get_error_response(__( 'Email sending failed', 'mrm' ), 200);
    }

    /**
     * Get all emails for a contact
     * 
     * @param WP_REST_Request
     * @return WP_RESR_Response
     * 
     * @since 1.0.0
     * 
     */
    public function get_all_emails(WP_REST_Request $request){
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =   isset($params['page']) ? $params['page'] : 1;
        $perPage    =   isset($params['per-page']) ? $params['per-page'] : 25;
        $offset     =   ($page - 1) * $perPage;

        // Note Search keyword
        $search = isset($params['search']) ? sanitize_text_field($params['search']) : '';

        $emails = MessageModel::get_emails_to_contact($offset, $perPage, $search, $params['contact_id']);

        if(isset($emails)) {
            return $this->get_success_response(__( 'Query Successfull', 'mrm' ), 200, $emails);
        }
        return $this->get_error_response(__( 'Failed to get data', 'mrm' ), 400);
    }



    /**
     * Send a message to contact
     * TODO: Here we have static values, it will be dynamic after finishig up the Settings module
     * @param mixed $message
     * @return bool|WP_REST_response
     * @since 1.0.0
     */
    public function send_message( $message )
    {
        $to      = $message->get_receiver_email();

        $subject = $message->get_email_subject();

        $body    = $message->get_email_body();

        $headers = array(
			'MIME-Version: 1.0',
			'Content-type: text/html;charset=UTF-8'
		);
		$from    = '';
        $from = 'From: Mint CRM';
        $headers[] = $from . ' <' . 'mrm@coderex.co'. '>';
        $headers[] = 'Reply-To:  ' . 'mrm@coderex.co';

        try {
            return wp_mail( $to, $subject, $body, $headers );
        } catch(\Exception $e) {
            return false;
        }
    }


    /**
     * Get all emails from the database to a contact or entire users
     * 
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     * @since 1.0.0
     */
    public function get_all( WP_REST_Request $request )
    {
        // Get values from API
        $params = MRM_Common::get_api_params_values( $request );

        $page       =  isset( $params['page'] ) ? $params['page'] : 1;
        $perPage    =  isset( $params['per-page'] ) ? $params['per-page'] : 25;
        $offset     =  ($page - 1) * $perPage;

        // Contact Search keyword
        $search     = isset( $params['search'] )        ? sanitize_text_field( $params['search'] )     : '';
        $contact_id = isset( $params['contact_id'] )    ? sanitize_text_field( $params['contact_id'] ) : NULL;

        $emails = MessageModel::get_emails_to_contact( $offset, $perPage, $search, $contact_id );
        if(isset($emails)) {
            return $this->get_success_response( __( 'Query Successfull', 'mrm' ), 200, $emails );
        }
        return $this->get_error_response( __( 'Failed to get data', 'mrm' ), 400 );

    }


    /**
     * TODO: use this function to get single email
     * 
     * @param WP_REST_Request $request
     * 
     * @return [type]
     */
    public function get_single(WP_REST_Request $request)
    {
        
    }


    /**
     * TODO: use this function to delete multiple emails
     * 
     * @param WP_REST_Request $request
     * 
     * @return [type]
     */
    public function delete_all(WP_REST_Request $request)
    {
        
    }


    /**
     * TODO: use this function to delete single email
     * 
     * @param WP_REST_Request $request
     * 
     * @return [type]
     */
    public function delete_single(WP_REST_Request $request)
    {
        
    }


    /**
     * Send double optin email
     * 
     * @param mixed $contact_id
     * 
     * @return bool
     * @since 1.0.0
     */
    public function send_double_opt_in( $contact_id)
    {
        $contact    = ContactModel::get( $contact_id );
        $default    = [
                        "enable"                => true,
                        "email_subject"         => "Please Confirm Subscription.",
                        "email_body"            => "Please Confirm Subscription. {{subscribe_link}}. <br> If you receive this email by mistake, simply delete it.",
                        "confirmation_type"     => "message",
                        "confirmation_message"  => "Subscription Confirmed. Thank you."
                    ];

        $settings   = get_option( "_mrm_optin_settings", $default );
        $enable     = isset( $settings['enable'] ) ? $settings['enable'] : "";
        
        if( $enable ){
            $to       = isset( $contact['email'] ) ? $contact['email'] : "";
        $hash     = isset( $contact['hash'] ) ? $contact['hash'] : "";

        $subject = "Please Confirm Subscription";

        $server = isset( $_SERVER['SERVER_PROTOCOL'] ) ? $_SERVER['SERVER_PROTOCOL'] : "";
        $protocol = strpos(strtolower( $server ), 'https') === FALSE ? 'http' : 'https';
        $domainLink = $protocol . '://' . $_SERVER['HTTP_HOST'];


        $body = "
        <!DOCTYPE html>
            <html lang='en-US'>
            <head>
            <meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
    <!--[if gte mso 15]>
    <xml>
    <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='profile' href='https://gmpg.org/xfn/11'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        







<style type='text/css'>@media only screen and (max-width: 480px) {
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: none !important;
        }
        #bodyCell {
            padding: 0px !important;
        }
        .fcTextBlockInner {
            padding-top: 0px !important;
        }
        .mcnTextBlockOuter .fc_email_body {
            padding-top: 10px !important;
            padding-right: 10px !important;
            padding-bottom: 10px !important;
            padding-left: 10px !important;
        }
        .fc_column_content {
            padding: 0;
        }
        table.fc_media_table {
            width: 100% !important;
            display: block;
        }
        table.fc_media_text {
            width: 100% !important;
            display: block;
        }
        .wp-block-media-text__media {
            background-image: none !important;
        }
        .wp-block-media-text__media img {
            opacity: 1 !important;
        }
        table.fce_buttons_row {
            margin-bottom: 10px;
        }
        table.fce_buttons_row .fce_column {
            margin-bottom: 10px;
            margin-top: 10px;
            text-align: center;
        }
    }@media only screen and (max-width: 480px) {
        body {
            width: 100% !important;
            min-width: 100% !important;
        }
    }@media only screen and (max-width: 480px) {
        .fcTextContentContainer {
            max-width: 100% !important;
            width: 100% !important;
        }
    }@media only screen and (max-width: 480px) {
        h2 {
            font-size: 20px !important;
            line-height: 125% !important;
        }
    }</style>
</head>
<body style='background: none no-repeat center/cover; background-color: #FAFAFA; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: Helvetica; height: 100%; margin: 0; padding: 0; width: 100%; background-image: none; background-repeat: no-repeat; background-position: center; background-size: cover;'>
<center>
    <table id='templateWrapper' align='center' border='0' cellpadding='0' cellspacing='0' height='100%' width='100%' style='border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #FAFAFA; background-color: #FAFAFA; height: 100%; margin: 0; padding: 0; width: 100%; background-image: none; background-repeat: no-repeat; background-position: center; background-size: cover; color: inherit;'>
        <tr>
            <td align='center' valign='top' id='bodyCell' style='mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 10px; border-top: 0; height: 100%; margin: 0; width: 100%;'>
                <!-- BEGIN TEMPLATE // -->
                <!--[if (gte mso 9)|(IE)]>
                <table align='center' border='0' cellspacing='0' cellpadding='0' width='600' style='width:600px;color:inherit;'>
                <tr>
                    <td align='center' valign='top' width='600' style='width:600px;'>
                <![endif]-->
                <table border='0' cellpadding='0' cellspacing='0' width='100%' class='templateContainer' style='border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; max-width: 700px; border: 0; color: inherit;'>
                    <tr>
                        <td valign='top' id='templateBody' style='mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-top: 0; border-bottom: 0;'><table border='0' cellpadding='0' cellspacing='0' width='100%' class='fcTextBlock' style='border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; min-width: 100%; color: inherit;'>
                                <tbody class='fcTextBlockOuter'>
                                <tr>
                                    <td valign='top' class='fcTextBlockInner' style='mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 9px;'>
                                        <!--[if mso]>
                                        <table align='left' border='0' cellspacing='0' cellpadding='0' width='100%' style='width:100%;color:inherit;'>
                                        <tr>
                                        <![endif]-->

                                        <!--[if mso]>
                                        <td valign='top' width='600' style='width:600px;'>
                                        <![endif]-->
                                        <table align='left' border='0' cellpadding='0' cellspacing='0' width='100%' class='fcTextContentContainer' style='border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; max-width: 100%; min-width: 100%; color: inherit;'>
                                            <tbody>
                                            <tr>
                                                <td valign='top' class='fcTextContentBody' style='mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #FFFFFF none no-repeat center/cover; background-color: #FFFFFF; color: #202020; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; background-image: none; background-repeat: no-repeat; background-position: center; background-size: cover; border-top: 0; padding-top: 0; padding-bottom: 9px;'>
                                                    <table align='left' border='0' cellpadding='0' cellspacing='0' width='100%' class='fcTextContentContainer' style='border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; max-width: 100%; min-width: 100%; color: inherit;'>
                                                        <tbody class='mcnTextBlockOuter'>
                                                        <tr>
                                                            <td class='fc_email_body' align='left' valign='top' style='mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; padding-right: 20px; padding-bottom: 10px; padding-left: 20px; word-break: break-word; font-size: 16px; line-height: 180%; text-align: left;'>
                                                                <h2 style='display: block; margin: 15px 0px; padding: 0; font-size: 22px; font-style: normal; line-height: 140%; letter-spacing: normal; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; color: #202020;'>Please Confirm Subscription</h2>
<p style='margin: 10px 0; padding: 0; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'><a href='". $domainLink ."/?mrm=1&amp;route=confirmation&amp;contact_id=".$contact_id."&amp;hash=".$hash."' style='mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #ffffff; background-color: #454545; font-size: 16px; border-radius: 5px; text-decoration: none; font-weight: normal; font-style: normal; padding: 0.8rem 1rem; border-color: #0072ff;'>Yes, subscribe me to the mailing list</a></p>
<p style='margin: 10px 0; padding: 0; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'> </p>
<p style='margin: 10px 0; padding: 0; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'>If you received this email by mistake, simply delete it. You won't be subscribed if you don't click the confirmation link above.</p>
<p style='margin: 10px 0; padding: 0; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'>For questions about this list, please contact:<br></p>                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
</table>
                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->
                                        <!--[if mso]>
                                        </tr>
                                        </table>
                                        <![endif]-->
                                    </td>
                                </tr>
                                </tbody>
                            </table></td>
                    </tr>
                                    </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
                <!-- // END TEMPLATE -->
            </td>
        </tr>
    </table>
    <a href='". $domainLink ."/?mrm=1&amp;route=unsubscribe&amp;contact_id=".$contact_id."&amp;hash=".$hash."'>Unsubcribe</a>
</center>
</body>
</html>
        ";

        $headers = array(
			'MIME-Version: 1.0',
			'Content-type: text/html;charset=UTF-8'
		);
		$from    = '';
        $from = 'From: Mint CRM';
        $headers[] = $from . ' <' . 'mrm@coderex.co' . '>';
        $headers[] = 'Reply-To: mrm@coderex.co';

        try {
            $result = wp_mail( $to, $subject, $body, $headers );
            return $result;

        } catch(\Exception $e) {
            return false;
        }
        }
    }
}