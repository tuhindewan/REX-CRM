<?php

namespace MRM\Helpers\Importer;

use WP_User_Query;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-19 10:36:13
 * @modify date 2022-08-19 10:36:13
 * @desc [Helper class for manage Import functionalities]
 */

class MRM_Importer {

    /**
	 * Returns all WordPress core user roles 
	 *
     * @param void
	 * @return array
     * @since 1.0.0
	 */
	public static function get_wp_roles() 
    {
		if ( ! function_exists( 'get_editable_roles' ) ) {
			require_once ABSPATH . 'wp-admin/includes/user.php';
		}

        // Get and formatting editable roles  
		$editable_roles = get_editable_roles();
		
        if ( ! is_array( $editable_roles ) || empty( $editable_roles ) ) {
			return __( 'WordPress user roles not found', 'mrm' );
		}
		
		$roles = array();
		foreach ( $editable_roles as $slug => $role ) {
			$roles[ $slug ] = isset( $role['name'] ) ? $role['name'] : $slug;
		}
        return $roles;
	}


    /**
     * Import WP users information from users and users metadata table
     * 
     * @param array $roles
     * @return array
     * @since 1.0.0
     */
    public static function get_wp_users( $roles = array() )
    {
        $users = get_users(
            array('role_in'    => $roles,
                'orderby' => 'ID',
                'order'   => 'ASC'
            )
        );

        return array_map( function($user ){
            
          $user->usermeta =  array_map(function($user_data){
            return reset($user_data);
          }, get_user_meta( $user->ID ) );

          return $user;
        }, $users); 

    }
}