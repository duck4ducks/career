<?php

$_POST = json_decode(file_get_contents('php://input'), true);

$settings = json_decode(file_get_contents("./settings.json"), true);

echo json_encode(array(

    "review" => ($settings['reviews'][0]['review1'][0]['review']),
    "reviewerName" => ($settings['reviews'][0]['review1'][0]['name']),
    "reviewerGrade" => ($settings['reviews'][0]['review1'][0]['grade']),
    "src" => ($settings['reviews'][0]['review1'][0]['sex'] === 'male'? 'img/clientM.png' : 'img/clientW.png'),

    "review2" => ($settings['reviews'][0]['review2'][0]['review']),
    "reviewerName2" => ($settings['reviews'][0]['review2'][0]['name']),
    "reviewerGrade2" => ($settings['reviews'][0]['review2'][0]['grade']),
    "src2" => ($settings['reviews'][0]['review2'][0]['sex'] === 'male'? 'img/clientM.png' : 'img/clientW.png'),

    "review3" => ($settings['reviews'][0]['review3'][0]['review']),
    "reviewerName3" => ($settings['reviews'][0]['review3'][0]['name']),
    "reviewerGrade3" => ($settings['reviews'][0]['review3'][0]['grade']),
    "src3" => ($settings['reviews'][0]['review3'][0]['sex'] === 'male'? 'img/clientM.png' : 'img/clientW.png'),

    )
);