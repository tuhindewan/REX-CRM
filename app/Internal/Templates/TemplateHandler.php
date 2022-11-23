<?php


namespace Mint\MRM\Internal\Templates;


class TemplateHandler {


	/**
	 * Class instance.
	 *
	 * @var TemplateHandler instance
	 */
	protected static $instance = null;

	/**
	 * Get class instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}


	/**
	 * TemplateHandler constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_filter( 'theme_page_templates', array( $this, 'register_mrm_templates' ), 10, 3 );
        $this->mrm_page_template_array();
	}

    
	/**
	 * Page template array
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function mrm_page_template_array() {
		$templates = [];

		$templates['template-preference-page.php'] 	= 'Preference Page';
		$templates['template-subscribe-page.php'] 	= 'Subscribe Page';
		$templates['template-unsubscribe-page.php'] = 'Unsubscribe Page';
        
		return $templates;

	}
	
    /**
	 * Register templates on theme with existing page templates
     * 
	 * @return array
	 * @since 1.0.0
	 */
	public function register_mrm_templates( $page_templates, $theme, $post ){
		$templates = $this->mrm_page_template_array();
        error_log(print_r('test', 1));

		foreach( $templates as $key => $templates ){
			$page_templates[$key] = $templates;
		}

		return $page_templates;
	}
	





}
