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
    text: "Kadaise šurmuliuojančiame didmiestyje gyveno geniali išradėja Emilija. Emiliją visada žavėjo energijos galia ir būdai, kaip ją galima panaudoti žmonių gerovei.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau, apsižvalgiusi po savo miestą, ji pamatė, kad naudojami energijos šaltiniai daro žalą aplinkai ir nėra tvarūs ateityje.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nusprendusi rasti sprendimą, Emilija leidosi į kelionę, kad atrastų būdą, kaip ateityje atnaujinti miesto energijos šaltinius.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji lankėsi elektrinėse, kalbėjosi su ekspertais ir net keliavo į kitus miestus, kad pamatytų, kaip juose gaminama energija.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau kuo daugiau ji sužinojo, tuo labiau suprato, kad problema yra ne tik naujo energijos šaltinio paieška, bet ir tai, kaip esamus šaltinius padaryti švaresnius ir efektyvesnius.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji sužinojo, kad atsinaujinantys energijos šaltiniai, tokie kaip saulės, vėjo ir vandens energija, yra raktas į miesto energetikos problemų sprendimą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau buvo vienas neišspręstas klausimas - šių šaltinių diegimo išlaidos didelės, o miesto valdžia nenorėjo į juos investuoti. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Emilija žinojo, kad turi sugalvoti planą, kuris būtų ne tik naudingas aplinkai, bet ir finansiškai patrauklus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Emilija parengė planą, kuris leistų miestui palaipsniui atsisakyti iškastinio kuro ir ilgainiui pereiti prie atsinaujinančiųjų energijos šaltinių.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji pasiūlė ant viso miesto pastatų stogų įrengti nedideles saulės baterijas, kurios ne tik gamintų švarią energiją, bet ir padėtų pastatų savininkams sutaupyti pinigus už suvartojamą energiją.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji taip pat pasiūlė 'žaliųjų obligacijų' programą, pagal kurią piliečiai galėtų investuoti į perėjimą prie atsinaujinančiosios energijos ir gauti investicijų grąžą.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Miesto valdžią suintrigavo Emilijos planas ir valdantieji nusprendė planą išbandyti. Netrukus miestas sugebėjo sumažinti savo priklausomybę nuo iškastinio kuro, o gyventojai galėjo investuoti į tvarią ateitį.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Emilijos ryžtas, loginis mąstymas ir gebėjimas mąstyti nestandartiškai ne tik išgelbėjo miesto aplinką, bet ir padarė jį klestinčiu.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taigi galime daryti išvadą, kad kritinis mąstymas ir loginis požiūris gali padėti rasti novatoriškų sprendimų, net ir susidūrus su, atrodytų, neįveikiamomis problemomis.", 
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Šiuo metu miesto elektrinė, naudodama iškastinį kurą, per dieną pagamina 1000 megavatų elektros energijos. Emilijos planas - ant viso miesto pastatų stogų įrengti nedideles saulės baterijas, kurios per dieną pagamins vidutiniškai 100 megavatų elektros energijos vienam pastatui. Jei mieste iš viso yra 1000 pastatų, per kiek dienų miestas, naudodamas saulės energiją, pagamins tiek pat elektros energijos, kiek dabar gamina naudodamas iškastinį kurą?", 
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Galite sustoti ir išspręsti užduotis paimdami sąsiūvinį.",
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Kitoje žinutėje, bus galimybė pasitikrinti atsakymus.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Pirmiausia apskaičiuokite bendrą elektros energijos kiekį, kurį pagamins visų pastatų saulės kolektoriai, padaugindami vidutinį vieno pastato per dieną pagaminamos elektros energijos kiekį (100 megavatų) iš pastatų skaičiaus (1000).", 
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "100 x 1000 = 100 000 megavatų",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Tuomet padalykite bendrą iškastinį kurą naudojančios elektrinės per dieną pagamintos elektros energijos kiekį (1000 megavatų) iš bendro ant visų pastatų esančių saulės kolektorių per dieną pagamintos elektros energijos kiekio (100 000 megavatų).",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "1000/100 000 = 0,01 dienos",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Taigi miestui prireiks 0,01 dienos, kad naudodamas saulės energiją pagamintų tiek pat elektros energijos, kiek šiuo metu gamina naudodamas iškastinį kurą.",
    time: 1500,
  },
  {
    who: "Užduotis",
    type: "text",
    text: "Jei žaliųjų obligacijų programa bus sėkminga ir miestui pavyks surinkti 5 000 000 JAV dolerių iš gyventojų, kurie bus skirti investuoti į perėjimą prie atsinaujinančiosios energijos. Jei plano įgyvendinimo išlaidos sudaro 10 000 000 USD, o miesto valdžia ketina investuoti likusius 5 000 000 USD. Per kiek metų piliečiams atsipirks jų investicijos į žaliųjų obligacijų programą, jei miesto valdžia ketina jiems grąžinti 5 % investicijų per metus?",
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Kitoje žinutėje, bus galimybė pasitikrinti atsakymus.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Piliečių investicija yra 5 000 000 USD, o visa investicija yra 10 000 000 USD, taigi piliečių investicija yra 5 000 000/10 000 000 = 0,5 visos investicijos.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Jei piliečiai per metus atgaus 5 % savo investicijų, tai reiškia, kad jie uždirbs 0,05 x 5 000 000 = 250 000 JAV dolerių per metus.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Taigi piliečiams prireiks 5 000 000/250 000 = 20 metų, kad investicijos į žaliųjų obligacijų programą atsipirktų.",
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
