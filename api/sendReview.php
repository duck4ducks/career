<?php

$name = $_POST['name'];
$email = $_POST['email'];
$review = $_POST['review'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$review = htmlspecialchars($review);
$name = trim($name);
$email = trim($email);
$review = trim($review);

$settings = json_decode(file_get_contents("./settings.json"), true);

if (mail($settings["email"], "Отзыв от " . $name . ". Сайт профориентации CARE.ER", $review, 'From: ' . $email)) {
    header('Location: /');
};

$review = array(
    'reviewer' => $name,
    'email' => $email,
    'review' => $review
);

$log = date('Y-m-d H:i:s') . ' ' . print_r($review, true);
file_put_contents(__DIR__ . '/reviews.txt', $log . PHP_EOL, FILE_APPEND);

