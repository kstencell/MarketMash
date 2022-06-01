<?php

    class Database {

        private $host = "db";
        private $db_name = "marketmash";
        private $username = "root";
        private $password = "JGXZ0Ds9jKCH2NAbnVHB";
        private $conn;

        public function connect() 
        {
            $this->conn = null;

            try {
                $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $e) {
                echo 'fuck';
                echo 'Connection error: ' . $e->getMessage();
            }

            return $this->conn;
        }
    }

?>