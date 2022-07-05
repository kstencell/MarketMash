<?php

    error_reporting(E_ALL);
    ini_set('display_error', 1);

    include_once('../models/Company.php');

    class Companies
    {
        // Database Properties
        private $conn;

        public function __construct($conn)
        {
            $this->conn = $conn;
        }

        public function GetTwoRandomCompanies()
        {
            return $this->conn->query("CALL GetTwoRandomCompanies()");
        }
    }

?>