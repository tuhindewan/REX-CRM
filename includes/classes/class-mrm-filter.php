<?php

namespace MRM\Helpers\Filter;


/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-19 10:36:13
 * @modify date 2022-08-19 10:36:13
 * @desc [Helper class for manage filter functionalities]
 */

class MRM_Filter {


	/** Contacts Filters */
	public static $contact_filters = array(
		'email',
		'first_name',
		'last_name',
		'phone',
		'company_name',
		'contact_owner',
		'status',
        'stage',
        'last_activity',
        'date_of_birth',
        'timezone',
        'address_line_1',
        'address_line_2',
        'postal_code',
        'city',
        'state',
        'country',
		'tags',
		'lists'
	);

	public static $custom_filters = array();

    /**
	 * Returns all WordPress core user roles 
	 *
     * @param void
	 * @return array
     * @since 1.0.0
	 */
	public static function normalize_filter_collection( $filters ) 
    {
        foreach ( $filters as $filter => $filter_value ) {
            
			$filter = self::normalize_single_filter( $filter );
			if ( empty( $filter ) || ! is_array( $filter ) ) {
				continue;
			}

			// if ( self::$TYPE_DATE === $filter['type'] || self::$TYPE_DATE_RELATIVE === $filter['type'] ) {
			// 	$filter_value = self::_handle_date_filter_value( $filter, $filter_value );
			// }

			// $filter['value'] = is_array( $filter_value ) ? array_map( 'trim', $filter_value ) : trim( $filter_value );
			// $filter_category = $filter['category'];
			// unset( $filter['category'] );

			// $normalized_filters[ $filter_category ][] = $filter;
		}
	}


    public static function normalize_single_filter($filter)
    {
        /** Contact Filters */
        foreach ( self::$contact_filters as $filter_key ) {
            if ( substr( (string) $filter, 0, strlen( $filter_key ) ) === $filter_key ) {

                $filter = explode( $filter_key . '_', $filter );

                // return array(
                //     'key'      => self::get_alternate_filter_key( $filter_key ),
                //     'category' => 'c',
                //     'rule'     => count( $filter ) > 1 ? $filter[1] : '',
                //     'type'     => self::get_type_by_wp_filters( $filter_key ),
                // );
            }
        }

        return false;
    }

}