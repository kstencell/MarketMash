<?php
    // echo "hello from php";
    error_reporting(E_ALL);
    ini_set('display_error', 1);

    // Headers

    Header('Access-Control-Allow-Origin: *');
    Header('Content-Type: application/json');
    Header('Access-Control-Allow-Method: GET');

    include_once('../config/Database.php');
    include_once('../models/Companies.php');

    $database = new Database();
    $conn = $database->connect();

    $companies = new Companies($conn);
    $stmt = $companies->GetTwoRandomCompanies();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);

?>