<?php

namespace Mint\MRM\Internal\Admin\Page;

use Mint\Mrm\Internal\Traits\Singleton;

class PageController {

	use Singleton;

	public function __construct() {
		// Init home screen
		HomeScreen::get_instance();
	}
}
