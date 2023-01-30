var me = {};
me.avatar =
  "https://lh6.googleusercontent.com/-lr2nyjhhjXw/AAAAAAAAAAI/AAAAAAAARmE/MdtfUmC0M4s/photo.jpg?sz=48";

var you = {};
you.avatar =
  "https://a11.t26.net/taringa/avatares/9/1/2/F/7/8/Demon_King1/48x48_5C5.jpg";

var isQuiz = false;
var numberOfMessages = 0;
var maxMessageCount = 5;

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

//-- No use time. It is a javaScript effect.
function insertChat(who, type, text, time) {
  if (time === undefined) {
    time = 0;
  }
  var control = "";
  var date = formatAMPM(new Date());

  if (who == "") {
    control =
      //'<li style="width:100%">' +

      `<div class="main msg-container">
      			<div id="spinner" class="speech-wrapper">
                      <div class="bubble">
                          <div class="txt">
                              <p class="name">${who}</p>
                              ${
                                type == "text"
                                  ? `<p class="message">${text}</p>`
                                  : `<img src="${text}" width={250} />`
                              }
                              <span class="timestamp">${date}</span>
                          </div>
                          <div class="bubble-arrow"></div>
                  	</div>
      			</div>`;

    //'<div class="msj macro">' +
    //'<div class="avatar"><img class="img-circle" style="width:100%;" src="' + me.avatar + '" /></div>' +
    //'<div class="text text-l">' +
    //'<p>' + text + '</p>' +
    //'<p><small>' + date + '</small></p>' +
    //'</div>' +
    //'</div>' +
    //'</li>'
  } else {
    control =
      //'<li style="width:100%;">' +

      `<div class="main msg-container">
      			<div id="spinner" class="speech-wrapper me">
              		<div class="bubble">
              			<div class="txt">
              				<p class="name alt">${who}</p>
              				${
                        type == "text"
                          ? `<p class="message">${text}</p>`
                          : `<img src="${text}" />`
                      }
                              <span class="timestamp">${date}</span>
              			</div>
              			<div class="bubble-arrow alt"></div>
              		</div>
      			</div>
      		</div>`;

    //'<div class="msj-rta macro">' +
    //'<div class="text text-r">' +
    //'<p>' + text + '</p>' +
    //'<p><small>' + date + '</small></p>' +
    //'</div>' +
    //'<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
    //'</li>'
  }
  //setTimeout(
  //  function () {
  $("#story").append(control).scrollTop($("#story").prop("scrollHeight"));

  isQuiz = false;
}

function insertQuiz(
  question,
  options,
  message_correct,
  message_wrong,
  answer_id
) {
  var q_option = "";
  for (var i = 0; i < options.length; i++) {
    q_option += options[i];
  }

  quiz_body = `<div class="quiz msg-container" >
                    <div id="question">${question}</div>
                    ${q_option}
                    <input type="submit" name="submit" class="btn_asnwer" value="Atsakyti" 
                    onClick="
                      var msg = '';
                      if (document.getElementById('${answer_id}').checked)
                      { msg = '${message_correct}'; }
                      else { msg = '${message_wrong}';}
                      alert(msg);
                      isQuiz = false;
                    ">
                    </div>`;

  $("#story").append(quiz_body).scrollTop($("#story").prop("scrollHeight"));

  isQuiz = true;
}

function resetChat() {
  $("#story").empty();
}

$(".mytext").on("keydown", function (e) {
  if (e.which == 13) {
    var text = $(this).val();
    if (text !== "") {
      insertChat("me", text);
      $(this).val("");
    }
  }
});

// function createMessage(who, type, text, time) {
//   var message = {
//     who,
//     type,
//     text,
//     time,
//   };
//   // message.who = who;
//   // message.text = text;
//   // message.time = time;

//   return message;
// }

function createQuiz(
  question,
  options,
  message_correct,
  message_wrong,
  answer_id
) {
  var quiz = {};
  quiz.question = question;
  quiz.options = options;
  quiz.message_correct = message_correct;
  quiz.message_wrong = message_wrong;
  quiz.answer_id = answer_id;

  return quiz;
}

let messages = [
  {
    who: "",
    type: "text",
    text: "Buvo 2070-ieji metai, o pasaulis susidūrė su nauja krize – klimato kaita.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Dėl klimato kaitos tradicinis ūkininkavimas tapo vis sudėtingesnis, o gyventojų perteklius sukėlė rimtą maisto krizę: kainos sparčiai kilo, o gero maisto vis labiau trūko.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Didžioji dauguma žmonių galėjo sau leisti valgyti tik perdirbtą maistą, o maistas iš ūkių be jokių papildomų priedų buvo prieinamas tik labai turtingiems.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mokslininkai susibūrė į grupę, kad išspręsti sparčiai augančią problemą. Jie žinojo, kad turi mąstyti nestandartiškai ir siūlyti naujoviškus sprendimus, jei nori užtikrinti, kad visi galėtų gauti sveiko ir nebrangaus maisto.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pirmoji grupės idėja buvo investuoti į vertikalųjį ūkininkavimą. Augindami augalus patalpose sluoksniais, jie galėtų padidinti derlių iš vieno kvadratinio pėdos metro žemės ir taip sumažinti didelių ir brangių ūkių poreikį.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip pat būtų galima kontroliuoti klimatą ir apšvietimą, užtikrinant, kad augalus būtų galima auginti ištisus metus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Antroji idėja - investuoti į laboratorijoje užaugintą mėsą. Naudodami ląstelių modifikaciją mėsai auginti laboratorijoje, jie galėtų atsisakyti didelio masto gyvulininkystės, kuri labiausiai prisideda prie klimato kaitos ir miškų naikinimo bei didelio vandens kiekio suvartojimo. Taip mėsa taptų įperkamesnė ir prieinamesnė visiems.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Trečioji idėja buvo investuoti į akvaponiką. Šis ūkininkavimo būdas sujungia žuvų ir augalų auginimą uždaro ciklo sistemoje, kurioje žuvų atliekos naudojamos augalams tręšti, o augalai valo vandenį žuvims.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šis ūkininkavimo būdas yra daug efektyvesnis nei tradiciniai ūkininkavimo metodai ir leidžia pagaminti daugiau maisto mažesnėje erdvėje.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ketvirtoji idėja - investuoti į biotechnologijas, pavyzdžiui, genetiškai modifikuotus organizmus (GMO), kad būtų sukurti augalai, galintys išgyventi atšiauriomis sąlygomis, atsparūs kenkėjams ir greičiau augantys.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai padėtų pagaminti daugiau maisto mažesnėje teritorijoje ir padaryti jį prieinamesnį žmonėms.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Remdamasi šiomis idėjomis grupė tikėjo, kad gali išspręsti maisto krizę ir užtikrinti, kad kiekvienas galėtų gauti sveiko ir nebrangaus maisto.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar galite sugalvoti sprendimą, kuris išspręstų šį galvosūkį? Ar galite pasiūlyti penktą variantą, kurio mokslininkai nesvarstė?",
    time: 1500,
  },
  {
    who: "Užduotis 1",
    type: "text",
    text: "Galite sustoti ir išspręsti užduotis paimdami sąsiūvinį",
    time: 1500,
  },
  {
    who: "Užduotis 1:",
    type: "text",
    text: "Vertikaliame ūkyje viename kvadratiniame metre galima išauginti 10 kartų daugiau augalų nei tradiciniame ūkyje. Jei tradiciniame ūkyje galima išauginti 500 kilogramų derliaus viename hektare, kiek kilogramų derliaus viename hektare gali išauginti vertikalusis ūkis?",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Kitoje žinutėje bus galimybė pasitikrinti atsakymus",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "500 kilogramų už hektarą x 10 = 5000 kilogramų už hektarą.",
    time: 1500,
  },
  {
    who: "Užduotis 2:",
    type: "text",
    text: "Akvaponiniame ūkyje 3x3 metro plote per metus galima užauginti 150 kilogramų žuvies ir 300 kilogramų daržovių, o tradicinėje žemdirbystėje užauginama apie 40 kilogramų žuvies ir 50 kilogramų daržovių. Kiek daugiau žuvies ir daržovių galima užauginti viename kvadratiniame metre akvaponiniame ūkyje, palyginti su tradicine žemdirbyste?",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Kitoje žinutėje bus galimybė pasitikrinti atsakymus",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Akvaponiniame ūkyje  150 kilogramų žuvies + 300 kilogramų daržovių = 450 kilogramų.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Tradicinėje žemdirbystėje užauginama 40 kilogramų žuvies + 50 kilogramų daržovių = 90 kilogramų.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Vadinsi 450(kg) - 90(kg) = 360 kilogramų akvaponiniame ūkyje galima užaugint daugiau.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pamokėlės pabaiga.",
    time: 1500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/Bl3SsRpE-YPgd9--N3b68Mmb7z71DjYJ-cy_dr2Rg054hnocxKi7BwszLqsSG7iPfrSu38hv-fP9nMikme4aux695s_sKh5C8WvpGo5zTIP_nRprop_OYWg5ejBlsZwk1PTK7k923w=w2400",
    time: 1500,
  },
];

let totalMessages = messages.length;
let showedMessages = 0;
let percentage = 0;

$("body").click(function () {
  if (totalMessages != showedMessages) {
    let msg = messages.shift();
    document.getElementById("welcome").style.display = "none";
    if (!isQuiz) {
      // if (numberOfMessages > maxMessageCount)
      //   elem = $(".msg-container:first").first().remove();
      if (msg.hasOwnProperty("who")) {
        insertChat(msg.who, msg.type, msg.text, msg.time);
      } else {
        insertQuiz(
          msg.question,
          msg.options,
          msg.message_correct,
          msg.message_wrong,
          msg.answer_id
        );
      }
      numberOfMessages += 1;
    }
    showedMessages += 1;
    // fm.setPercentage((showedMessages / totalMessages) * 100);
    console.log(document.getElementById("progress"));
    document.getElementById("progress").value =
      (showedMessages / totalMessages) * 100;
  }
});

console.log("messages==>", messages);

$("body > div > div > div:nth-child(2) > span").click(function () {
  $(".mytext").trigger({ type: "keydown", which: 13, keyCode: 13 });
});

//-- Clear Chat
resetChat();

//-- Print Messages

//insertChat("me", "Hello Vlad...", 0);
//insertChat("you", "Hi, Pablo", 1500);
//insertChat("me", "What would you like to talk about today?", 3500);
//insertChat("you", "Tell me a joke", 7000);
//insertChat("me", "Spaceman: Computer! Computer! Do we bring battery?!", 9500);
//insertChat("you", "LOL", 12000);

//-- NOTE: No use time on insertChat.
