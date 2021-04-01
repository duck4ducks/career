<?php

$_POST = json_decode(file_get_contents('php://input'), true);
$specialty = $_POST["specialty"];

$file =  $_POST["specialty"] . '.json';

if ($file) {
    copy("../vendor/quiz-builder-master/tests/" . $file,
        "../vendor/quiz-builder-master/quiz-builder-master/quizdata.json");
    echo json_encode(array("info" => print_r($file)));
} else {
    header("HTTP/1.0 400 Bad Request");
}