<?php
namespace MRM\REST;

use MRM\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 11:03:17
 * @modify date 2022-08-09 11:03:17
 * @desc [Register REST API routes after plugin has been activated]
 */


class MRM_API_Register {

    /**
     * REST API namespaces and endpoints.
     *
     * @var array
     * @since 1.0.0
     */
    protected $routes = [];

    use Singleton;

    /**
     * Hook into WordPress ready to init the REST API as needed.
     * 
     * @since 1.0.0
     */
    public function init()
    {
        add_action('rest_api_init', [ $this, 'register_rest_routes' ], 10);
    }

    /**
     * Register REST API after plugin activation
     * 
     * @return void
     * @since 1.0.0
     */
    public function register_rest_routes()
    {
        foreach ($this->get_rest_namespaces() as $namespace => $controllers) {
            foreach ($controllers as $controller_name => $route_class) {
                $route_class_name = "MRM\\REST\\Routes\\".$route_class;
                $this->routes[ $namespace ][ $controller_name ] = new $route_class_name();
                $this->routes[ $namespace ][ $controller_name ]->register_routes();
            }
        }
    }


    /**
     * Get API namespaces - new namespaces should be registered here.
     *
     * @return array List of Namespaces and Main controller classes.
     * @since 1.0.0
     */
    protected function get_rest_namespaces()
    {
        return [
            'mrm/v1' => $this->get_routes(),
        ];
    }

    /**
     * List of controllers in the mrm/v1 namespace.
     *
     * @return array
     * @since 1.0.0
     */
    protected function get_routes()
    {
        return apply_filters( 'mrm/rest_api_routes', array(
			'lists'         =>  'MRM_List_API_Route',
            'segments'      =>  'MRM_Segment_API_Route',
            'tags'          =>  'MRM_Tag_API_Route'
		));
    }
    
}