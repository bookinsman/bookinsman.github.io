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
    text: "Kartą astronautas vykdė misiją Mėnulyje.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jam renkant mėginius ir atliekant eksperimentus, į erdvėlaivį netikėtai nukrito meteoritų lietus ir smarkiai apgadino įrangą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Be to, labai sutriko energijos tiekimas ir jo deguonies kiekis. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Astronautas žinojo, kad norėdamas išgyventi, turi veikti greitai ir mąstyti kritiškai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kai astronauto komandai Žemėje buvo pranešta apie keblią jo padėtį, ji nedelsdama pradėjo planuoti gelbėjimo misiją.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Viena iš svarstomų galimybių buvo nusiųsti inžinierių būrį, kuris sutaisytų astronauto įrangą ir leistų jam užbaigti misiją bei saugiai sugrįžti į Žemę. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau šis variantas būtų pareikalavęs daug laiko ir išteklių, be to, nebuvo jokių garantijų, kad remontas bus sėkmingas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kitas variantas - pasiųsti kitą erdvėlaivį, kuris evakuotų astronautą ir pargabentų jį į Žemę. Tai būtų greičiausias sprendimas, tačiau tai taip pat reikštų, kad misija būtų nesėkminga ir būtų prarasti vertingi duomenys.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Gelbėtojų komanda taip pat svarstė galimybę avariniu būdu nuleisti atsargas ir aprūpinti astronautą deguonimi bei energija, kurios jam reikia, kad išgyventų, kol bus rastas galutinis sprendimas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šis variantas laimėtų komandai laiko ir būtų sąlyginai nebrangus, tačiau astronautas vis tiek liktų įstrigęs Mėnulyje.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Dar vienas variantas būtų naudoti autonominius robotus siunčiant juos į Mėnulį, kad jie atliktų remontą ir išgelbėtų astronautą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai būtų mažiau rizikinga nei siųsti žmones ir mažiau brangu nei siųsti erdvėlaivį.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Autonominiai robotai gali atlikti sudėtingus remontus ir taip pat turi pranašumą, nes jie gali dirbti nepertraukiamai ir nereikalauja deguonies ar kitų gyvybiškai svarbių komponentų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pasitarus buvo priimtas galutinis sprendimas, kad į mėnulį bus gabenamas autonominis robotas, kuris atliks visus reikiamus darbus.",
    time: 1500,
  },
  {
    who: "Užduotis",
    type: "text",
    text: "Galite sustoti ir išspręsti užduotis paimdami sąsiūvinį",
    time: 1500,
  },
  {
    who: "Užduotis",
    type: "text",
    text: "Erdvėlaivis turi 1000 vienetų elektros energijos ir 2000 vienetų deguonies atsargų. Dėl meteoritų lietaus dingo 20 % elektros energijos ir 30 % deguonies atsargų.",
    time: 1500,
  },
  {
    who: "Užduotis",
    type: "text",
    text: "1. Apskaičiuokite, kiek energijos liko po meteoritų lietaus padarytos žalos.",
    time: 1500,
  },
  {
    who: "Užduotis",
    type: "text",
    text: "2. Apskaičiuokite deguonies atsargas, likusias po meteoritų lietaus padarytos žalos.",
    time: 1500,
  },
  {
    who: "Užduotis",
    type: "text",
    text: "3. Jei astronautui per valandą reikia sunaudoti 25 vienetus energijos ir 50 vienetų deguonies, kiek valandų jis gali išgyventi su likusiomis energijos ir deguonies atsargomis?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kitoje žinutėje, bus galimybė pasitikrinti atsakymus.",
    time: 1500,
  },
  {
    who: "Atsakymai:",
    type: "text",
    text: "1. Likęs maitinimo šaltinis: (1000 vienetų x (1-0,2) = 800 vienetų). ",
    time: 1500,
  },
  {
    who: "Atsakymai:",
    type: "text",
    text: "2. Likusios deguonies atsargos: (2000 vienetų x (1-0,3) = 1400 vienetų). ",
    time: 1500,
  },
  {
    who: "Atsakymai:",
    type: "text",
    text: "3. Su likusia energija ir deguonimi astronautas gali išgyventi atitinkamai 32 valandas (800 vienetų / 25 vienetai per valandą = 32 valandos) ir 28 valandas (1400 vienetų / 50 vienetų per valandą = 28 valandos).",
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
