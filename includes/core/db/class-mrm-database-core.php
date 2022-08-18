<?php

namespace MRM\DB;

use MRM\Traits\Singleton;

/**
 * @author [MRM Team]
 * @email [support@rextheme.com]
 * @create date 2022-08-09 15:23:35
 * @modify date 2022-08-09 15:23:35
 * @desc [Manage database table creation classes]
 */


class MRM_Database_Core {

    use Singleton;


    /**
     * Initilize all database table classes
     * 
     * @since 1.0.0
     */
    public function init()
    {
       $this->load_db_classes();
    }


    /**
     * Load all database table classes
     * 
     * @return void
     * @since 1.0.0
     */
    protected function load_db_classes()
    {
        foreach ($this->get_db_namespaces() as $namespace => $tables) {
            foreach ($tables as $table_name => $table_class) {
                $table_class_name = "MRM\\DB\\Tables\\".$table_class;
                $this->routes[ $namespace ][ $table_name ] = new $table_class_name();
                $this->routes[ $namespace ][ $table_name ]->create();
            }
        }
    }


    /**
     * Get database table namespaces - new namespaces should be registered here.
     *
     * @return array List of Namespaces and Main table classes.
     * @since 1.0.0
     */
    protected function get_db_namespaces()
    {
        return [
            'mrm/v1' => $this->get_tables(),
        ];
    }

    /**
     * List of table in the MRM namespace.
     *
     * @return array
     * @since 1.0.0
     */
    protected function get_tables()
    {
        return apply_filters( 'mrm/database_tables', array(
			'categories'            => 'MRM_Contact_Groups_Table',
            'contacts'              => 'MRM_Contacts_Table',
            'contact_meta'          => 'MRM_Contact_Meta_Table',
            'contact_note'          => 'MRM_Contact_Note_Table',
            'contact_group_pivot'   => 'MRM_Contact_Group_Pivot_Table',
            'interactions'          => 'MRM_Interactions_Table',
            'emails'                => 'MRM_Messages_Table'  
		));
    }

}