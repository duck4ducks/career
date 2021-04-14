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

$(function () {
  $('[data-toggle="popover"]').popover();
  $('.table').popover({
    container: 'td'
  })
})

//calculates the percent correct
function checkResult(userAnswers, typeCounter) {
  var proftype = "";
  var humanNature = 0;
  var humanEquipment = 0;
  var humanSignSystem = 0;
  var humanArtisticImage = 0;
  var humanHuman = 0;
  var type;
  var proftype_name;

  for (var i = 0; i < userAnswers.length; i++) {
    type = typeCounter[i][userAnswers[i]];
    if (type === 'humanNature') {humanNature++}
    if (type === 'humanEquipment') {humanEquipment++}
    if (type === 'humanSignSystem') {humanSignSystem++}
    if (type === 'humanArtisticImage') {humanArtisticImage++}
    if (type === 'humanHuman') {humanHuman++}
  };

  humanNature = ((humanNature / 8) * 100).toFixed();
  humanEquipment = ((humanEquipment / 8) * 100).toFixed();
  humanSignSystem = ((humanSignSystem / 8) * 100).toFixed();
  humanArtisticImage = ((humanArtisticImage / 8) * 100).toFixed();
  humanHuman = ((humanHuman / 8) * 100).toFixed();

  if (humanNature >= humanEquipment && humanNature >= humanSignSystem && humanNature >= humanArtisticImage && humanNature >= humanHuman) {
    proftype = 'Человек-природа';
    type = humanNature;
    proftype_name = 'humanNature';
  } else if(humanEquipment >=  humanNature && humanEquipment >= humanSignSystem && humanEquipment >= humanArtisticImage && humanEquipment >= humanHuman){
    proftype = 'Человек-техника';
    type = humanEquipment;
    proftype_name = 'humanEquipment';
  } else if (humanSignSystem >= humanNature && humanSignSystem >= humanEquipment && humanSignSystem >= humanArtisticImage && humanSignSystem >= humanHuman){
    proftype = 'Человек-знаковая система';
    type = humanSignSystem;
    proftype_name = 'humanSignSystem';
  } else if(humanArtisticImage >= humanEquipment && humanArtisticImage >= humanSignSystem && humanArtisticImage >= humanNature && humanArtisticImage >= humanHuman){
    proftype = 'Человек-художественный образ';
    type = humanArtisticImage;
    proftype_name = 'humanArtisticImage';
  } else {
    proftype = 'Человек-человек';
    type = humanHuman;
    proftype_name = 'humanHuman';
  }

  var score = type;
  return [proftype, score, humanNature, humanEquipment, humanSignSystem, humanArtisticImage, humanHuman, proftype_name];
}

//display result in success page сюда
function displayResult() {
  var type = checkResult(userAnswers, typeCounter);
  $('.result').html('Ваш тип '+ type[0] +', вы набрали в этой сфере <span class="displayPercent">' + type[1] + '</span>процентов по результатам теста!');
  $('#humanNature .progress-bar').attr("aria-valuenow", type[2]).css({'width' : type[2]+'%'}).text(type[2] + '%');
  $('#humanEquipment .progress-bar').attr("aria-valuenow", type[3]).css({'width' : type[3]+'%'}).text(type[3] + '%');
  $('#humanSignSystem .progress-bar').attr("aria-valuenow", type[4]).css({'width' : type[4]+'%'}).text(type[4] + '%');
  $('#humanArtisticImage .progress-bar').attr("aria-valuenow", type[5]).css({'width' : type[5]+'%'}).text(type[5] + '%');
  $('#humanHuman .progress-bar').attr("aria-valuenow", type[6]).css({'width' : type[6]+'%'}).text(type[6] + '%');
  $('#' + type[7]).addClass('bg-warning');

  var results_texts = [
    [ 'humanNature', 'Это профессии, в которых человек работает с живой и неживой природой. Это может быть ученый-исследователь физических, химических и биологических процессов природы. Это может быть технолог, создающий в лаборатории новые лекарства, новые материалы, новые живые организмы (как селекционер и генный инженер). Это может быть и медик который ставит диагноз и лечит человека. Это может быть и геолог, и океанолог, и эколог, и почвовед, и энолог, агроном, а также кинолог, растениевод, зоолог, и даже логопед и дефектолог. Главное - объект труда данного специалиста - какое-либо природное явление или объект природы.',
    'Специальность Минского радиотехнического колледжа, которая тесно связана с изучением природных явлений, это Микро- и нанотехнологии и системы, где изучаются тесно взаимосвязанные химические свойства и физические явления'],
    [ 'humanEquipment', 'Это профессии, в которых человек работает с техникой. Он технику разрабатывает, чинит, обслуживает, эксплуатирует. Это может быть инженер любого рода: энергетик, робототехник, самолётостроитель, автомобилестроитель, строитель поездов, лифтов, холодильников, станков, трубопроводов, медицинской техники, звукотехники и видеотехники, компьютерной техники… Все эти виды техники можно не только создавать, но и обслуживать (сервисный инженер, наладчик), а также эксплуатировать её. Учителя, врачи, продавцы тоже используют технику на своей работе - но она для них не объект труда, а инструмент. Например, все они пользуются компьютером. Поэтому их нельзя отнести к категории человек - техника.',
    'К типажу человек-техника относятся почти все учащиейся Минского радиотехнического колледжа. Разработкой занимаются на специальности ПиПРЭС, изучают экспуатирование и ремонт учащиеся специальности ТЭРЭС, на специальностях ЭВС и ПМС проектируются программно-аппаратные средства, а учащиесся специальности МиНТИС уже на выходе из колледжа могут спокойно называть себя инженерами. Подробнее о каждой специаьности можно узнать на сайте колледжа'],
    [ 'humanSignSystem', 'Это профессии, в которых человек работает с числами, таблицами, графиками, схемами, буквами, шифрами. Сюда относятся бухгалтеры, экономисты, финансовые брокеры, математики, проектировщики оборудования и зданий, архитекторы, конструкторы одежды, корректоры, редакторы, звукорежиссеры, картографы, кадастровые инженеры, шифровальщики и все остальные работники чисел, таблиц, схем, графиков и букв.',
    'Проектированием, а именно рассчетами, подбором элементной базы, экономикой, занимаются в Минском радиотехническом колледже учащиеся специальностей, связанных с проектированием, а именно учащиеся МиНТиС, ПиПРЭС, ЭВС. Проектирование программных средств происходит на специальностях ПМС и ПОИТ. Что же выбрать? Изучите подробности на сайте колледжа.'],
    [ 'humanArtisticImage', 'Это профессии, в которых человек работает с художественными образами, создавая их визуальное изображение, звуковой образ, литературный образ. Это такие профессионалы: дизайнеры, художники, иллюстраторы, композиторы, саунд-дизайнеры, звукорежиссеры, поэты, сценаристы, писатели, парикмахеры, стилисты, визажисты, гримеры, тату-мастера… Относятся ли к этой группе искусствоведы, литературоведы? Да, если они глубоко изучают произведение литературы и искусства, созданной другими людьми.',
    'Хорошей основой для будущего диджитал-художника или 3D-модельера в IT-сфере будет изучение программирования, физики этих создаваемых образов. Один из лучших "трамплинов" в мир IT в Минском радиотехническом колледже это специальность ПОИТ, но если вы все же сомневаетесь в своих способностях, вы можете просто пройти интересный для вас курсв нашей IT-школе. Подробности на официальном сайте колледжа.'],
    [ 'humanHuman', 'Это профессии, в которых человек работает с человеком или несколькими людьми. Он может работать как с телом человека, так и с его душой, сознанием, поведением. Он может лечить людей, обучать их, продавать им что-то, управлять ими, выступать перед ними, судить их, помогать им, выслушивать, проповедовать им, изучать их, развлекать их и т. д. К этой группе относятся врачи, медсестры, массажисты, учителя, воспитатели, социологи, психологи, логопеды, политики, продавцы, менеджеры (пиар, HR, event, mice, отельеры, рестораторы и т.п.), парикмахеры, гиды-экскурсоводы, журналисты и прочие люди, которые напрямую общаются с людьми на работе и этим зарабатывают.',
    'Человек типа Человек-человек является настоящей находкой для компаний, которые продвигают свой продукт или свои услуги. Хорошим толчком в IT-сферу станут специальности ПОИТ и ПМС в Минском радиотехническом колледже'],

  ];
  for (var i = 0; i < results_texts.length; i++) {
    if (results_texts[i][0] === type[7]) {
      var result_text = results_texts[i][1];
      var result_specialty = results_texts[i][2];
    }
  }
  $('.result-text').text(result_text);
  $('.result-specialty').text(result_specialty);
  $('#test').val('Тест по методике Е.А.Климова, результат: ' + type[0]);
  $('#result').val(result_specialty);

}
window.onload = displayResult;