<?php

class CheckIfPluginIsActivatedCest
{
    public function _before(AcceptanceTester $I)
    {
        $I->loginAsAdmin();
    }

    // tests
    public function tryToTest(AcceptanceTester $I)
    {
        $I->amOnPluginsPage();
        $I->seePluginInstalled('mrm-latest');
        $I->activatePlugin('mrm-latest');
        $I->seePluginActivated('mrm-latest');
    }
}
