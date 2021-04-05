// local storage method for user answers
var userAnswers = localStorage.getItem('userAnswers');
userAnswers = userAnswers.split(',');
// index 0 comes over as empty - remove it and shift elements
userAnswers.splice(0, 1);
// if no answer to one of the questions
for (i = 0; i < userAnswers.length; i++) {
  if (userAnswers[i] === '') {
    userAnswers.splice(i, 1, 'No answer');
  }
}
// local storage method for correct answers
var correctAnswers = localStorage.getItem('correctAnswers');
correctAnswers = correctAnswers.split(',');

//calculates the percent correct
function checkResult(userAnswers, correctAnswers) {
  var score = 0;
  for (var i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score++;
    }
  }
  score = ((score / correctAnswers.length) * 100).toFixed();
  return score;
}

//display result in success page сюда
function displayResult() {
  $.getJSON( "quizdata.json", function( data ) {
    $('#specialty').val(data.specialty);
  });
  var score = checkResult(userAnswers, correctAnswers);
  var str = "Вы неплохо справились!";
  $('.result').html('Ваш результат <span class="displayPercent">' + score + ' процентов</span> по резултатам теста!');
  if (score === 0){
    str = "Видимо, вам совсем не подходит эта специальность и профессия. А очень жаль! И компьютеру понятно, что вы талантливый человек! Ищите себя в наших тестах мобильном приложении";
  }
  if (score < 20){
    str = "Возможно, вас что-то заинтересовало в этой специальности, но вы сами еще даже не поняли, что именно. Ваши интересы не соответсвуют выбранной профессии. И хорошо, что вы это слышите до поступления";
  }
  if (score >= 20 && score < 50){
    str = "Кажется, у вас есть уже какие-то навыки и час чем-то заинтересовала эта сфера. Может, пройдете еще пару тестов? Будет интересно";
  }
  if (score >= 50 && score < 70){
    str = "Кажется, вы попалив сферу, которая вам нужна, но вы еще определяетесь с точным выбором. Не бойтесь пройти все тесты, мы обязательно отыщем лучший вариант!";
  }
  if (score >= 70 && score < 100){
    str = "Вау! Да вы нам просто нужны! Вся страна ждет, пока такие гении закатают рукава и возьмутся за разработку. В будущем вас ждет ослепительная карьера, хоть это и не сайт гадалка.ком. Интерес и предрасположенность - главные факторы успеха, а навыки найдут вас сами в нашем колледже!";
  }
  $('.result-text').text(str);
  $('#result').val(str);
}
window.onload = displayResult;