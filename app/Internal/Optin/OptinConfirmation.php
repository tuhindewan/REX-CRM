<?php


namespace Mint\MRM\Internal\Optin;

use Mint\MRM\DataBase\Models\ContactModel;
use Mint\MRM\DataBase\Models\NoteModel;
use Mint\MRM\DataStores\NoteData;

class OptinConfirmation
{

    /**
     * Class instance.
     *
     * @var OptinConfirmation instance
     */
    protected static $instance = null;

    /**
     * Get class instance.
     */
    public static function get_instance()
    {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }


    /**
     * OptinConfirmation constructor.
     *
     * @since 1.0.0
     */
    public function __construct()
    {
        add_action('init', array($this, 'double_optin_confirmation'), 9999);
    }


    /**
	 * Double optin confirmation by the contact
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function double_optin_confirmation()
	{
		if( isset( $_GET['mrm'] ) && isset( $_GET['route'] ) && $_GET['route'] == 'confirmation' )  {
			$contact_id = $_GET['contact_id'];
			$hash 		= $_GET['hash'];

			$contact = ContactModel::get( $contact_id );
			
			if( $hash == $contact['hash'] ){
				$args = array(
					'contact_id' => $contact_id,
					'status'	=> 'subscribed'
				);

				// Update contact status from pending to subscribed
				ContactModel::update( $args, $contact_id );
				
				// Create a note for the contact subscription
				$notes = array(
					'title' 		=> __('Subscriber double opt-in confirmed', 'mrm'),
					'description'   => __('Subscriber confirmed double opt-in', 'mrm'),
					'type' 			=> 'subscription',
					'is_public' 	=> 1,
					'status' 		=> 1,
					'created_by' 	=> 1
				);

				$note = new NoteData( $notes );

				NoteModel::insert( $note, $contact_id );

			}
            require_once(MRM_DIR_PATH. 'app/Resources/public/confirmation.php');
			die();
	   	}

		// require_once(plugin_dir_path(__FILE__). 'templates/confirmation.php');
		//  error_log(print_r(plugin_dir_path(__FILE__). 'templates/confirmation.php', 1));
		
	}


}