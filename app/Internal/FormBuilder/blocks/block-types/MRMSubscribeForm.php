<?php


use Mint\MRM\DataBase\Models\FormModel;

class MRMForm_MRMSubscribeForm extends GetMRM_AbstractBlock {

    protected $defaults = array(

    );

    /**
     * Block name.
     *
     * @var string
     */
    protected $block_name = 'mrm-subscribe-form';

    public function __construct( $block_name = '' )
    {
        parent::__construct($block_name);
        add_action('wp_ajax_show_form_markup', [$this, 'show_form_markup']);
    }

    public function show_form_markup()
    {
        if( isset($_POST['post_id']) && !empty($_POST['post_id'])){
            $form_id = $_POST['post_id'];

            $get_form_data_by_id = FormModel::get($form_id);
            $form_status = isset($get_form_data_by_id['status']) ? $get_form_data_by_id['status'] : 0 ;
            if (!$form_status){
                echo __('This form is not active. Please check');
                die();
            }
            $blocks = parse_blocks( $get_form_data_by_id["form_body"] );
            ob_start();
            $output = '';
            foreach( $blocks as $block ) {
                $output .= render_block( $block );
            }
            $output .=  ob_get_clean();
            echo $output;
            die();
        }
        echo __("Please Select a Form ","mrm");
        die();
    }
    /**
     * Render the Featured Product block.
     *
     * @param array  $attributes Block attributes.
     * @param string $content    Block content.
     * @return string Rendered block type output.
     */
    protected function render( $attributes, $content ) {
        $attributes = wp_parse_args( $attributes, $this->defaults );
        $dynamic_css = $this->generate_assets($attributes);
        $new_content = "<style>$dynamic_css</style>".$content;


        return $this->inject_html_data_attributes( $new_content, $attributes );
    }


    /**
     * get generated dynamic styles from $attributes
     *
     * @param $attributes
     * @param $post
     * @return array|string
     */
    protected function get_generated_dynamic_styles( $attributes, $post ) {
        $selectors = array(

        );
        return $this->generate_css($selectors);
    }


    /**
     * Get the styles for the wrapper element (background image, color).
     *
     * @param array       $attributes Block attributes. Default empty array.
     * @return string
     */
    public function get_styles( $attributes ) {
        $style      = '';
        return $style;
    }


    /**
     * Get class names for the block container.
     *
     * @param array $attributes Block attributes. Default empty array.
     * @return string
     */
    public function get_classes( $attributes ) {
        $classes = array( 'getwpf-block-' . $this->block_name );
        return implode( ' ', $classes );
    }


    /**
     * Extra data passed through from server to client for block.
     *
     * @param array $attributes  Any attributes that currently are available from the block.
     *                           Note, this will be empty in the editor context when the block is
     *                           not in the post content on editor load.
     */
    protected function enqueue_data( array $attributes = [] ) {
        parent::enqueue_data( $attributes );
    }


    /**
     * Get the frontend script handle for this block type.
     *
     * @see $this->register_block_type()
     * @param string $key Data to get, or default to everything.
     * @return array|string
     */
    protected function get_block_type_script( $key = null ) {
        $script = [
            'handle'       => 'getwpf-pricing-block-frontend',
            'path'         => $this->get_block_asset_build_path( 'pricing-block-frontend' ),
            'dependencies' => [],
        ];
        return $key ? $script[ $key ] : $script;
    }
}