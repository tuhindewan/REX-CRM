<?php

namespace Mint\MRM\DataStores;

interface DataStoreInterface {

    public function create_or_update( &$data );

    public function read();

    public function delete();

    public function read_meta();

    public function update_meta();

    public function delete_meta();

}