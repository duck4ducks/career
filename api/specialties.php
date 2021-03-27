<?php

$_POST = json_decode(file_get_contents('php://input'), true);
$specialty = $_POST["specialty"];

if ($specialty) {
    $settings = json_decode(file_get_contents("./settings.json"), true);
    //if (in_array($specialty, $settings)) {
    //    echo json_encode(array("info" => $settings[$specialty]));
    //} else {
    //    echo json_encode(array("info" => $settings[$specialty]));
    //}
    echo htmlspecialchars_decode(json_encode(array("info" => ($settings[$specialty]))));
} else {
    header("HTTP/1.0 400 Bad Request");
}