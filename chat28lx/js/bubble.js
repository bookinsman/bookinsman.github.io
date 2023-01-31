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
    text: "Kadaise buvo du sparčiai augantys miestai, kuriuos skyrė vanduo. Pastaruosius 70 metų vienintelis būdas keliauti tarp šių dviejų miestų buvo labai lėtas, bet stilingas vandens keltas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nors daugelis žmonių pamėgo istorinius keltus, eilės į juos kasmet vis ilgėjo. Abiejų miestų urbanistai nusprendė susivienyti ir rasti šios problemos sprendimą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pirmoji jų pasiūlyta galimybė buvo nutiesti lynų keltuvų sistemą tarp dviejų miestų. Tai būtų greitas ir efektyvus keliavimo būdas, tačiau jis taip pat būtų brangus ir reikalautų infrastruktūros modernizavimo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Antroji galimybė buvo sukurti skraidyklę ant oro pagalvės, kuri judėtų virš vandens. Tai taip pat būtų greitas ir efektyvus keliavimo būdas, tačiau jis taip pat būtų brangus ir reikalautų daug technologijų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Trečioji galimybė - sukurti vandens taksi paslaugą, kuri įlaipintų ir išlaipintų keleivius įvairiose pakrantės vietose ir sujungtų abu miestus. Tai būtų lankstesnis ir efektyvesnis keliavimo būdas, tačiau jis taip pat būtų brangus, o jam eksploatuoti reikėtų daug laivų ir darbuotojų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ketvirtoji galimybė - patobulinti esamą keltų sistemą, įrengiant daugiau keltų, padidinant jų reisų dažnumą ir įdiegiant rezervavimo sistemą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai nebūtų toks greitas ir efektyvus būdas kaip kiti, tačiau jis būtų pigesnis ir nereikalautų tokios didelės infrastruktūros.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po ilgų diskusijų miesto planuotojai nusprendė rinktis kelis variantus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jie patobulins keltų sistemą, įdiegs vandens taksi paslaugą ir pradės lynų keltuvo arba laivo ant oro pagalvės sistemos statybas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip jie galėtų pasinaudoti kiekvienos galimybės privalumais ir sumažinti trūkumus. Jie žinojo, kad tai bus sudėtinga užduotis, tačiau buvo pasiryžę rasti abiejų miestų gyventojams geriausiai tinkantį sprendimą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ši istorija moko mus, kad, susidūrus su problema, svarbu mąstyti kūrybiškai ir apsvarstyti visas galimybes.",
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
    text: "Miesto planuotojai svarsto galimybę sukurti vandens taksi paslaugą, kuri sujungtų abu miestus. Jie nori sužinoti šios galimybės privalumus ir trūkumus. Parašykite 3 vandens taksi paslaugos kūrimo privalumų ir 3 trūkumų sąrašą.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Kitoje žinutėje bus galimybė pasitikrinti atsakymus",
    time: 1500,
  },
  {
    who: "Atsakymas. Privalumai:",
    type: "text",
    text: "1. Lankstumas: Vandens taksi paslauga gali įlaipinti ir išlaipinti keleivius įvairiose pakrantės vietose, todėl keleiviams suteikiama daugiau lankstumo.",
    time: 1500,
  },
  {
    who: "Atsakymas. Privalumai:",
    type: "text",
    text: "2. Efektyvumas: Vandens taksi paslauga gali plaukti vandeniu, išvengiant eismo keliuose, todėl kelionės yra greitesnės ir efektyvesnės.",
    time: 1500,
  },
  {
    who: "Atsakymas. Privalumai:",
    type: "text",
    text: "3. Ekonomiškas: Palyginti su kitomis galimybėmis, pavyzdžiui, tilto ar tunelio statyba, vandens taksi paslauga yra pigesnė ir reikalauja mažiau infrastruktūros.",
    time: 1500,
  },
  {
    who: "Atsakymas. Trūkumai:",
    type: "text",
    text: "1. Priklauso nuo oro sąlygų: Vandens taksi paslauga priklauso nuo oro sąlygų, todėl gali būti, kad ji negalės veikti blogomis oro sąlygomis.",
    time: 1500,
  },
  {
    who: "Atsakymas. Trūkumai:",
    type: "text",
    text: "2. Saugumo problemos: Vandens taksi paslaugos gali kelti saugumo problemų, pvz., apvirsti ar pasiklysti vandenyje.",
    time: 1500,
  },
  {
    who: "Atsakymas. Trūkumai:",
    type: "text",
    text: "3. Ribotas pajėgumas: Vandens taksi paslaugos pajėgumas yra ribotas, todėl vienu metu negali vežti didelio skaičiaus keleivių.",
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Jei tarp dviejų miestų nutiesta lynų keltuvų sistema ir kelionė į vieną pusę trunka 10 minučių, kiek laiko užtruks kelionė į abi puses? Be to, jei lynų keltuvas veikia 12 valandų per parą, kiek kelionių galima atlikti per dieną?",
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
    text: "Kelionė į abi puses užtruks 10 minučių + 10 minučių = 20 minučių. Lynų keltuvų sistema veikia 12 valandų per parą, o viena kelionė trunka 20 minučių. Taigi per 12 valandų kelionėms galima išnaudoti 60*12 = 720 minučių. Todėl per dieną galima atlikti 720/20 = 36 keliones.",
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
