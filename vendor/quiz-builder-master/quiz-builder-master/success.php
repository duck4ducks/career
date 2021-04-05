<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="../../../../img/favicon.png">
  <title>CARE ER | Тест</title>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
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
      </div>
    </div>

    <div class="row resultsBtns">
      <div>
      <div class="col-sm-offset-0 col-sm-4 col-xs-offset-1 col-xs-10">
        <a class="btn btn-lg btn-primary btnRetake" href="index.html">Пройти тест ещё раз <i class="fa fa-repeat" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>

          <?php
          if(!isset($_POST['name']) and !isset($_POST['email'])){
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
                      <input id="specialty" type="hidden" name="specialty" value="">
                      <input id="result" type="hidden" name="result" value="">
                      <input type="submit" value="Отправить">
                  </div>
              </form>
      </section>
              <?php
          } else {
              $name = $_POST['name'];
              $email = $_POST['email'];
              $specialty = $_POST['specialty'];
              $result = $_POST['result'];
              $name = htmlspecialchars($name);
              $email = htmlspecialchars($email);
              $specialty = htmlspecialchars($specialty);
              $result = htmlspecialchars($result);
              $name = urldecode($name);
              $email = urldecode($email);
              $specialty = urldecode($specialty);
              $result = urldecode($result);
              $name = trim($name);
              $email = trim($email);
              $specialty = trim($specialty);
              $result = trim($result);

              $message = file_get_contents('message');
              $message = str_replace(['{specialty}', '{result}'], [$specialty, $result], $message);

              if (mail($email, "Профориентация МРК", $message, 'From: yourwebarchive@yandex.by')){
                  echo "Сообщение успешно отправлено";
              } else {
                  echo "При отправке сообщения возникли ошибки";
              }
          }
          ?>
    <script src="js/script.js" type="text/javascript"></script>
    <script src="js/calculateresult.js?v=1" type="text/javascript"></script>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</body>

</html>
