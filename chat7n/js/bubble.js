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
    text: "Sveiki.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Ar mane kas girdi?",
    time: 1500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Sveiki, taip, puikiai jus girdžiu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Labai gerai, bandžiau su jumis susisiekti jau kelias valandas, tačiau taip ir nepavyko.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Esu Lukas. Aš astronautas kosminio laivo įguloje pavadinimu „Dariano“.",
    time: 1500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Tuoj patikrinsiu, palaukite minutėlę. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ne, prašau, nepadėkite ragelio. Ilgai laukiau, kol atsiliepsite.",
    time: 3500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Tuoj minutėlę, man reikia tik patikrinti…",
    time: 1500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Taigi Jūs esate įgulos narys kosminio laivo „Dariano“, kuris turėjo nugabenti krovinį į mėnulį, taip?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tikrai taip.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mes patekamo į kosminę turbulencinę zoną. Mano kajutės durys uždarytos, čia beveik nėra šviesos, o per raciją niekas neatsako.",
    time: 3500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Ar galėtumėte patikslinti savo vardą?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Lukas… Lukas Gornas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pradėjo cypsėti daviklis.",
    time: 3500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Lukai, kas čia taip cypsi?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai yra mano kosminio kostiumo daviklis. Kai kostiumas pakrautas, deguonies užtenka 5 valandoms. Kostiumo slėgis matuojamas paskaliais (Pa). Kai kostiumas pilnai pakrautas rodo 200 Pa, šiuo metu likę 17 procentų.",
    time: 1500,
  },

  createQuiz("Tai Tau liko..."
  , ['<div><input type="radio" name="q1" id="opt1"><label for="opt1">34 minutės</label></div>',
      '<div><input type="radio" name="q1" id="opt2"><label for="opt2">51 minutė</label></div>',
      '<div><input type="radio" name="q1" id="opt3"><label for="opt3">17 minučių</label></div>'], "teisingai", "pro šalį", "opt1"),
  {
    who: "",
    type: "text",
    text: "Tiesa.",
    time: 3500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Supratau, Lukai, turime tau pranešti vieną žinią.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kokią dar žinią? Esu įstrigęs dideliame kosminiame laive. Galėčiau apsieiti ir be naujienų.",
    time: 1500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Noriu pranešti, kad Tavo laivas laikomas dingusiu jau septynerius metus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Atsiprašau, išgirdau sakant, kad esu įstrigęs čia 7 metus. Gal patikslinsite – ne metus, o valandas, taip, operatoriau?",
    time: 1500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Deja, bet tai yra tiesa. Šiuo metu dirba daug žmonių, kad galėtume suprasti, kas vyksta, kur jūs esate ir kaip galėtume jums padėti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Septyneri metai? Jūs tikriausiai juokaujate... Man reikia kuo greičiau iš čia ištrūkti….",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po kelių valandų prie operatoriaus atskrido specialiosios operacijos įgula.",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Lukai, sveiki, kapitonas Jurgenas trukdo",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kapitone, Jūsų balsas man labai girdėtas. Ar galėjau Jus kur nors girdėti? Mažai ką prisimenu iš savo praeities. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ar mane vis dar girdite?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ką toliau turiu daryti?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Minutės tyla eteryje.",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Lukai Gornai, negaliu patikėti, kad tai Jūs. Aš esu jūsų vadas žemėje. Prieš daug metų subūriau komandą iš 4 žmonių kelionei į kosmosą. Sakykite, ar kiti įgulos nariai kartu su jumis?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Atsiprašau, pone. Aš kajutėje ir negaliu atidaryt durų, nes reikia kodo, kurio neprisimenu. Sugebėjau tik susisiekti su operatoriumi.",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Taip, Jūsų įgula turėjo paimti ypatingą materiją, kuri susiformavo mėnulyje. Tačiau keliaudami į mėnulį patekote į juodąją duobę, kurios nefiksavo jokie rodikliai.",
    time: 1500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Šiuo metu mūsų davikliai Tavęs nemato. Išeik iš kajutės ir ant kapitono valdymo panelės paspausk radijo sekiklį, kuris greičiausiai yra išjungtas. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Supratau, Kapitone.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Šiuo metu esu prie durų, reikia surinkti tam tikrą kodą:",
    time: 1500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/M9HXx-ASqEbChw5fIo1KluNbg6EZK6otlt1vVsaYtSy2h2knsJzmopJXiIxBMQgdmw1ENQf-2rjbkf9h9jsagR2GhIXdcbsi4ZvHGA64i6soLy2j3VSaJN6h4m9aUd6FXSjAjn4z4w=w2400",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pagalvok minutę, kiek daug gero savyje turi. Pamąstyk, kiek tuo gėriu gali džiaugtis ir dalintis su kitais laisvalaikio metu.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Laisvą laiką reikia ir būtina išnaudoti tinkamai. Mes laukiame naujo filmo, kuris tuoj turi prasidėti, laukiame draugų, kurie turi tuoj ateiti. Tačiau, taip ir neateina laiku.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O kiek gi galima būtų nuveikti, jeigu žodis „laukimas“, būtų paverstas „veikimu“.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tikriausiai kiekvienas pats atsakys į šį klausimą, kiek ir ko galėtų pasiekti, jeigu tinkamai išnaudotų laisvą laiką.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šis pasakojimas baigtas, sekantis bus kitą dieną!",
    time: 3500,
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
