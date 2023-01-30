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
    text: "Buvote ką tik paaukštintas pareigose. Tapote prekės ženklo vadovas ir gavote užduotį sukurti žinomo prekės ženklo reklaminę kampaniją.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau manėte, kad ši užduotis neatitinka jūsų kompetencijos, ir nežinojote, kaip elgtis toliau.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Svarstėte, kad vis dėlto paimtumėte kampanijai skirtus pinigus ir ją vykdytumėte, bet žinojote, kad jei kampanija bus atlikta neprofesionaliai, tai gali sužlugdyti jūsų karjerą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kita vertus, nepasinaudoti galimybe galėjo reikšti, kad praleidote progą įrodyti savo vertę ir pakilti karjeros laiptais.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po ilgų apmąstymų sudarėte privalumų ir trūkumų sąrašą, kuris padės jums apsispręsti: Naudojimosi galimybe privalumai:",
    time: 1500,
  },
  {
    who: "Privalumai:",
    type: "text",
    text: "1. Profesionalumas: Tai galimybė įrodyti savo, kaip prekės ženklo vadybininko, gebėjimus ir siekti karjeros aukštumų.",
    time: 1500,
  },
  {
    who: "Privalumai",
    type: "text",
    text: "2. Patirtis: Net jei kampanija nepavyks tobulai, įgysite vertingos patirties, kurią galėsite panaudoti ateityje.",
    time: 1500,
  },
  {
    who: "Privalumai",
    type: "text",
    text: "3. Finansinė nauda: Kampanija atneš įmonei finansinę naudą.",
    time: 1500,
  },
  {
    who: "Naudojimosi galimybe trūkumai:",
    type: "text",
    text: "1. Rizika karjerai: Jei kampanija bus vykdoma neprofesionaliai, tai gali sužlugdyti jūsų karjerą.",
    time: 1500,
  },
  {
    who: "Trūkumai:",
    type: "text",
    text: "2. Stresas ir nerimas: Kampanijos spaudimas gali sukelti stresą ir nerimą.",
    time: 1500,
  },
  {
    who: "Trūkumai:",
    type: "text",
    text: "3. Finansiniai nuostoliai: Jei kampanija nepasiseks, ji gali atnešti finansinių nuostolių.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Apsvarstę visas galimybes, nusprendėte, kad geriausia būtų kreiptis pagalbos ir patarimų į labiau patyrusius kolegas ir šios srities specialistus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Subūrėte ekspertų komandą, kuri padės jums vykdyti kampaniją, ir skyrėte laiko prekės ženklo ir tikslinės auditorijos tyrimams bei pažinimui.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Padedami šios komandos, sugebėjote sukurti sėkmingą kampaniją, kuri atnešė įmonei finansinės naudos ir padėjo pakilti jūsų karjeros laiptais.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ši istorija moko mus, kad susidūrus su problema, svarbu kritiškai mąstyti, pasverti visus 'už' ir 'prieš', o prireikus kreiptis pagalbos ir patarimų. Pasitelkus loginį mąstymą, įmanoma įveikti iššūkius ir sėkmingai veikti.",
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
    text: "Kampanijai skirtas 100 000 JAV dolerių biudžetas. Ištirkite ir sudarykite trijų galimų rinkodaros strategijų, kurias galėtumėte naudoti prekės ženklui reklamuoti, sąrašą ir pateikite kiekvienos strategijos išlaidų sąmatą.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Socialinės žiniasklaidos reklama: 25 000 JAV dolerių",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Įtakos turinčių asmenų rinkodara: 35 000 USD",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "TV reklama: 40 000 JAV dolerių",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Tai tik vienas iš būdų, jūsų duomenys galėjo skirtis.",
    time: 1500,
  },
  {
    who: "Užduotis 2:",
    type: "text",
    text: "Sudarykite trijų potencialių tikslinių prekės ženklo auditorijų sąrašą ir paaiškinkite, kodėl kiekviena grupė būtų tinkama kampanijai.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "1. Jaunieji specialistai: Tikėtina, kad jie turi laisvai disponuojamų pajamų ir domisi prekės ženklo produktais ir paslaugomis.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "2. Šeimos: Jie gali susidomėti prekės ženklo produktais ir paslaugomis, skirtomis jų vaikams, ir gali būti labiau linkę pirkti.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "3. Senjorai: Senjorai gali domėtis prekės ženklo produktais ir paslaugomis sau arba savo anūkams, be to, jie gali turėti daugiau disponuojamų pajamų, kurias gali išleisti.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Tai tik vienas iš būdų, jūsų duomenys galėjo skirtis.",
    time: 1500,
  },
  {
    who: "Užduotis 3:",
    type: "text",
    text: "Kampanijai skirtas 100 000 JAV dolerių biudžetas. Ištirkite ir sudarykite trijų galimų rinkodaros strategijų, kurias galėtumėte naudoti prekės ženklui reklamuoti, sąrašą ir pateikite kiekvienos strategijos išlaidų sąmatą.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Pardavimai: Tai padės įvertinti kampanijos veiksmingumą, t. y. įmonės finansinę naudą.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Prekės ženklo žinomumas: Tai padės įvertinti kampanijos veiksmingumą pagal tai, kaip gerai tikslinė auditorija žino ir atpažįsta prekės ženklą.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Klientų pasitenkinimas: Tai padės įvertinti kampanijos veiksmingumą pagal tai, kaip klientai yra patenkinti prekės ženklu ir savo patirtimi su juo.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Tai tik vienas iš būdų, jūsų duomenys galėjo skirtis.",
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
