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
    text: "Kadaise vienas žmogus sugalvojo, kad energiją galima gauti iš sniego. Jis įsivaizdavo sniego elektrinę, kurioje sniegas būtų renkamas ir kaupiamas dideliame baseine. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tada sniegas būtų užšaldomas, o virš baseino esančius vamzdynus kaitintų saulė. Tirpstant sniegui, vanduo tekėtų vamzdynais ir gamintų elektros energiją.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žmogus džiaugėsi savo išradimu, tačiau netrukus suprato, kad reikia spręsti tam tikrus uždavinius.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pirmasis iššūkis buvo, kaip surinkti ir nugabenti didelį kiekį sniego į baseiną.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jis svarstė galimybę naudoti specialias sniego mašinas arba samdyti žmones sniegui valyti, tačiau abu variantai buvo brangūs ir reikalavo daug laiko.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tuomet žmogui kilo mintis, kodėl gi nepanaudojus dronų, kurie galėtų pakelti sniegą nuo žemės ir nugabenti jį į reikiamą vietą. Tai būtų veiksmingiau ir ekonomiškiau.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Antrasis iššūkis - kaip išlaikyti baseine užšaldytą sniegą. Buvo svarstoma galimybė naudoti izoliacines medžiagas, tačiau jos buvo brangios ir reikalaujančios daug priežiūros. Tada jis nusprendė naudoti atspindinčią medžiagą, kuri atspindėtų saulės spindulius ir išlaikytų sniegą užšaldytą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Trečiasis iššūkis - kaip šildyti vamzdynus nenaudojant iškastinio kuro. Buvo svarstoma galimybė naudoti saulės baterijas, tačiau jos buvo brangios ir užėmė daug vietos. Todėl nuspręsta naudoti parabolinius lovius, kurie koncentruotų saulės spindulius ir šildytų vamzdynus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Sunkus žmogaus darbas atsipirko ir jo sniego elektros stotelė buvo sėkminga.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji aprūpino bendruomenę švaria ir atsinaujinančia energija ir padėjo sumažinti priklausomybę nuo iškastinio kuro.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Asmens novatoriška idėja ir problemų sprendimo įgūdžiai padarė teigiamą poveikį pasauliui.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ši istorija moko mus, kad susidūrus su problema svarbu mąstyti kūrybiškai ir apsvarstyti visas galimybes. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pasitelkus loginį mąstymą, kritinę analizę ir problemų sprendimo įgūdžius, įmanoma įveikti iššūkius ir novatorišką idėją paversti realybe.",
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Galite sustoti ir išspręsti užduotis paimdami sąsiūvinį",
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Sniego elektrinei stočiai reikia surinkti ir į ją nugabenti 10 000 kubinių metrų sniego. Kiekvienas dronas per valandą gali pervežti 100 kubinių metrų sniego. Kiek valandų prireiks visam sniegui nugabenti į stotį?",
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
    text: "Iš viso reikia pervežti 10 000 kubinių metrų sniego, o kiekvienas dronas gali pervežti 100 kubinių metrų per valandą. Taigi visam sniegui nugabenti į stotį prireiks 10 000 / 100 = 100 valandų.",
    time: 1500,
  },
  {
    who: "Užduotis 2:",
    type: "text",
    text: "Sniego elektrinė stotis iš viso turi šildyti 100 metrų vamzdynų. Kiekvienas parabolinis lovys per valandą gali apšildyti 10 metrų vamzdyno. Kiek parabolinių lovių reikia vamzdynams šildyti?",
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
    text: "Iš viso reikia pašildyti 100 metrų vamzdyno, o kiekvienas parabolinis lovys per valandą gali pašildyti 10 metrų. Taigi vamzdynams šildyti reikia 100 / 10 = 10 parabolinių lovių.",
    time: 1500,
  },
  {
    who: "Užduotis 3:",
    type: "text",
    text: "Sniego elektrinei stočiai reikia surinkti ir į stotį nugabenti 10 000 kubinių metrų sniego. Stotis turi 4 dronus, kurie gali transportuoti sniegą. Kiekvieno drono talpa - 200 kubinių metrų, o dronas gali skraidyti 10 valandų per dieną. Kiek dienų prireiks visam sniegui į stotį nugabenti?",
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
    text: "Iš viso reikia pervežti 10 000 kubinių metrų sniego, o kiekvieno drono talpa - 200 kubinių metrų. Taigi, dronai per dieną gali pervežti 4 * 200 = 800 kubinių metrų. Norint pervežti 10 000 kubinių metrų sniego, prireiks 10 000/800 = 12,5 dienos.",
    time: 1500,
  },
  {
    who: "Užduotis 4:",
    type: "text",
    text: "Sniego elektrinėje stotyje yra 50 000 kubinių metrų talpos baseinas, kurį reikia užpildyti sniegu. Stotis gali surinkti 1000 kubinių metrų sniego per dieną. Stotis turi užpildyti baseiną per 15 dienų. Kiek sniego stotis turi surinkti kiekvieną dieną, kad pasiektų šį tikslą?",
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
    text: "Baseino tūris - 50 000 kubinių metrų, o stotis jį turi pripildyti per 15 dienų. Taigi per dieną stotis turi surinkti 50 000 / 15 = 3 333,33 kubinių metrų sniego. Kad pasiektų šį tikslą, stotis turi surinkti daugiau sniego, nei surenka dabar, t. y. 1000 kubinių metrų per dieną. Taigi jiems reikia surinkti 3 333,33 - 1000 = 2 333,33 kubinių metrų per dieną.",
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
