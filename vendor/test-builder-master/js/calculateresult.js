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
var typeCounter = JSON.parse(localStorage.getItem('TypeCounter'));

//calculates the percent correct
function checkResult(userAnswers, typeCounter) {
  var proftype = "";
  var humanNature = 0;
  var humanEquipment = 0;
  var humanSignSystem = 0;
  var humanArtisticImage = 0;
  var humanHuman = 0;
  var type;

  for (var i = 0; i < userAnswers.length; i++) {
    type = typeCounter[i][userAnswers[i]];
    if (type === 'humanNature') {humanNature++}
    if (type === 'humanEquipment') {humanEquipment++}
    if (type === 'humanSignSystem') {humanSignSystem++}
    if (type === 'humanArtisticImage') {humanArtisticImage++}
    if (type === 'humanHuman') {humanHuman++}
  };

  if (humanNature >= humanEquipment && humanNature >= humanSignSystem && humanNature >= humanArtisticImage && humanNature >= humanHuman) {
    proftype = 'Человек-природа';
    type = humanNature;
  } else if(humanEquipment >=  humanNature && humanEquipment >= humanSignSystem && humanEquipment >= humanArtisticImage && humanEquipment >= humanHuman){
    proftype = 'Человек-техника';
    type = humanEquipment;
  } else if (humanSignSystem >= humanNature && humanSignSystem >= humanEquipment && humanSignSystem >= humanArtisticImage && humanSignSystem >= humanHuman){
    proftype = 'Человек-знаковая система';
    type = humanSignSystem;
  } else if(humanArtisticImage >= humanEquipment && humanArtisticImage >= humanSignSystem && humanArtisticImage >= humanNature && humanArtisticImage >= humanHuman){
    proftype = 'Человек-художественный образ';
    type = humanArtisticImage;
  } else {
    proftype = 'Человек-человек';
    type = humanHuman;
  }

  var score = ((type / (typeCounter.length)) * 100).toFixed();
  return [proftype, score, humanNature, humanEquipment, humanSignSystem, humanArtisticImage, humanHuman];
}

//display result in success page сюда
function displayResult() {
  var type = checkResult(userAnswers, typeCounter);
  var str = 'ЧП: '+type[2]+' ЧТ: '+type[3]+' ЧЗ: '+type[4]+' ЧХ: '+type[5]+' ЧЧ: '+ type[6];
  $('.result').html('Ваш тип '+ type[0] +', вы набрали в этой сфере <span class="displayPercent">' + type[1] + '</span>процентов по резултатам теста!');
  $('.result-text').text(str);
}
window.onload = displayResult;