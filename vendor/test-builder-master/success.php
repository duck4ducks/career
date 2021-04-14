<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="../../../../img/favicon.png">
    <title>CARE ER | Тест</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"
            integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,700,700i" rel="stylesheet">
    <link rel="stylesheet" href="styles.css" type="text/css">
</head>

<body>
<div class="quizBG"></div>
<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <h1 class="quizTitle">Результаты тестирования</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <h2 class="result"></h2>
            <p class="text-muted result-text"></p>
            <p class="result-specialty"></p>
            <table class="table">
                <tbody>
                <tr>
                    <th>Система</th>
                    <th>Уровень соответствия</th>
                </tr>
                <tr id="humanNature">
                    <td class="">Человек-природа</td>
                    <td class="line">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0"
                                 aria-valuemin="0" aria-valuemax="100">0%
                            </div>
                        </div>
                    </td>
<!--                    <td>-->
<!--                        <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" data-placement="left" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>-->
<!--                    </td>-->
                </tr>
                <tr id="humanEquipment">
                    <td class="">Человек-техника</td>
                    <td class="line">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0"
                                 aria-valuemin="0" aria-valuemax="100">0%
                            </div>
                        </div>
                    </td>
                </tr>
                <tr id="humanHuman">
                    <td class="">Человек-человек</td>
                    <td class="line">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0"
                                 aria-valuemin="0" aria-valuemax="100">0%
                            </div>
                        </div>
                    </td>
                </tr>
                <tr id="humanSignSystem">
                    <td class="">Человек-знаковая система</td>
                    <td class="line">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0"
                                 aria-valuemin="0" aria-valuemax="100">0%
                            </div>
                        </div>
                    </td>
                </tr>
                <tr id="humanArtisticImage">
                    <td class="">Человек-художественный образ</td>
                    <td class="line">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0"
                                 aria-valuemin="0" aria-valuemax="100">0%
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>



    <div class="row resultsBtns">
        <div>
            <div class="col-sm-offset-0 col-xs-offset-1 resultsButtons">
                <a class="btn btn-lg col-sm-4 btn-primary btnRetake" href="index.html">Пройти тест ещё раз <i
                            class="fa fa-repeat" aria-hidden="true"></i></a>
                <a class="btn btn-lg col-sm-4 btn-primary btnRetake" href="https://www.mrk-bsuir.by/ru">Перейти на сайт колледжа<i
                            class="fa fa-repeat" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>

    <?php
    if (!isset($_POST['name']) and !isset($_POST['email'])) {
        ?>
        <section class="mailform">
            <form class="decor" method="post">
                <div class="form-left-decoration"></div>
                <div class="form-right-decoration"></div>
                <div class="circle"></div>
                <div class="form-inner">
                    <h3>Отправить результаты</h3>
                    <input type="text" name="name" placeholder="Имя">
                    <input type="text" name="email" placeholder="Email">
                    <input id="test" type="hidden" name="test" value="">
                    <input id="result" type="hidden" name="result" value="">
                    <input type="submit" value="Отправить">
                </div>
            </form>
        </section>
        <?php
    } else {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $test = $_POST['test'];
        $result = $_POST['result'];
        $name = htmlspecialchars($name);
        $email = htmlspecialchars($email);
        $test = htmlspecialchars($test);
        $result = htmlspecialchars($result);
        $name = urldecode($name);
        $email = urldecode($email);
        $test = urldecode($test);
        $result = urldecode($result);
        $name = trim($name);
        $email = trim($email);
        $test = trim($test);
        $result = trim($result);

        $message = file_get_contents('message');
        $message = str_replace(['{specialty}', '{result}'], [$test, $result], $message);

        if (mail($email, "Профориентация МРК", $message)) {
            echo "Сообщение успешно отправлено";
        } else {
            echo "При отправке сообщения возникли ошибки";
        }
    }
    ?>
    <script src="js/script.js" type="text/javascript"></script>
    <script src="js/calculateresult.js?v=1" type="text/javascript"></script>

    <style>
        td.line {
            width: 50%;
        }

        @media (min-width: 768px) {
            td.line {
                width: 70%;
            }
        }

        td.line div {
            width: 100%;
            background: #f1f1f1;
            height: 20px
        }

        td.line div div {
            height: 20px;
            background: #FACF47
        }
    </style>
</body>

</html>
