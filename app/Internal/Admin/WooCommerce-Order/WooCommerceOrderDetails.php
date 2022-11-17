<?php
namespace Mint\MRM\Internal\Admin;

use Mint\Mrm\Internal\Traits\Singleton;

class WooCommerceOrderDetails {

	use Singleton;

	/**
	 * @desc Initialize actions
	 * @return void
	 * @since 1.0.0
	 */
	public function init() {
		add_action( 'woocommerce_admin_order_data_after_order_details', [ $this, 'render_subscription_consent_message' ] );
	}

	/**
     * @desc Add subscription consent message in order details page
	 * @param $order
	 * @return void
     * @since 1.0.0
	 */
	public function render_subscription_consent_message( $order ) {
		$consent_message = get_post_meta( $order->get_id(), '_mrm_newsletter_subscription', true );
		if ( $consent_message ):
		?>
		<p class="form-field form-field-wide">
            <p class="order_note"><strong><?php esc_html_e( 'Newsletter subscription:', 'mrm' ) ?></strong> <?php esc_html_e( $consent_message, 'mrm' );?></p>
		</p>
        <?php
        endif;
	}
}