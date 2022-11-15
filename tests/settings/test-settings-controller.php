<?php
/**
 * Class Test_Setting_Controller
 *
 * @package mrm
 */

/**
 * Test cases for the functions of the production
 * class Rex_Product_Data_Retriever.
 *
 * @see /app/Admin/API/Controllers/SettingController.php
 */

class Test_Setting_Controller extends WP_UnitTestCase {
    private static $instance;
    private static $reflector;

    /**
     * @throws ReflectionException
     */
    public function setUp():void
    {
        self::$instance      = $this->getMockBuilder( 'SettingController' )
                                    ->disableOriginalConstructor()
                                    ->getMock();

        self::$reflector     = new ReflectionClass( self::$instance );
    }

}