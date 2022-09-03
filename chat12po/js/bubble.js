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
    who: "Tadas",
    type: "text",
    text: "Ar girdėjai?",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Ką?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kiek dabar valandų?",
    time: 1500,
  },
  {
    who: "Tadas",
    type: "text",
    text: "Laikas keltis, šiandien ypatinga diena!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ką? Jau šiandien? ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ko tu tyli, reikėjo mane anksčiau pažadinti…",
    time: 1500,
  },
  {
    who: "Tadas",
    type: "text",
    text: "Aš jau pasiruošęs, visa šeima tavęs laukia. Buvo sakyta, kad nežiūrėtum iki vidurnakčio televizoriaus, dabar nori miegoti ir sunku keltis…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Palaukite manęs, aš greitai apsirengiu ir lėkiu!",
    time: 1500,
  },
  {
    who: "Mama",
    type: "text",
    text: "O dantis ar išsivalei, jaunuoli?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Na, tam nėra laiko, mama, greičiau važiuojame, paskui reikės ilgai stovėti eilėje.",
    time: 1500,
  },
  {
    who: "Mama",
    type: "text",
    text: "Ne, ponaiti, kol neišsivalysi dantų, mes į tavo ypatingą vietą nevažiuosime.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Bet aš jos laukiau visus metus…",
    time: 3500,
  },
  {
    who: "Mama",
    type: "text",
    text: "Todėl paskubėk!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Gerai…",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Benai, sakyk, kas toji ypatingoji vieta.",
    time: 1500,
  }, 
  {
    who: "",
    type: "text",
    text: "Šiandien yra vieno išradėjo pristatymas. Jis gyvena Šveicarijoje, tačiau atvyko į mūsų miestelį. Pristatys sukurtą mažą robotą, kuris gali atsakyti į bet kurį klausimą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš taip noriu jį pamatyti!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Atvažiavusi į parodą, šeima nustebo pamačiusi kiek naujų dalykų žmonės atrado. Tokių išradimų niekas nėra matęs.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Aš jau jį matau. Prie jo ilgiausia eilė.",
    time: 1500,
  },  
  {
    who: "",
    type: "text",
    text: "Štai, už poros minučių aš jums pristatysiu kai ką ypatingo, kai ką, ko jūs taip laukėte, ko dar nei vienas žmogus nebuvo matęs ar sukūręs. Ar jūs pasirengę?!",
    time: 3500,
  },
  {
    who: "Minia",
    type: "text",
    text: "TAAAAAAIPPP",
    time: 1500,
  },
  {
    who: "Benas",
    type: "text",
    text: "Tėti, aš nieko nematau!",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tėvas pakėlė Beną ir pasisodino ant pečių.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Sūneli, ar geriau matai?",
    time: 3500,
  },
  {
    who: "Benas",
    type: "text",
    text: "Taip, viskas gerai, tik pasistenk nejudinti galvos ir stovėk ramiai!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Prieš atidengiant skraistę norėčiau papasakoti, kas apskritai mūsų laukia ateity, kokios naujos technologijos ateis į mūsų gyvenimą, kam turime ruoštis..",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "1. Kompiuteriniai simuliatoriai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žmonės daro daug klaidų dirbdami savo darbą. Todėl reikia ieškoti sprendimo būdų, kaip galėtume išvengti klaidų. Užsidėję virtualius akinius, jūs jau mokykloje arba universitete, galėsite mokytis dirbti tam tikro amato, galėsite išbandyti įvairias profesijas, fiziškai nebūdami tam skirtoje vietoje.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "2. Ateities maistas pagal ląstelių technologijas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žemėje vis daugiau atsiranda žmonių ir maistas brangsta. Jau net dabar mėsą galima išauginti ne tik iš gyvūnų ląstelių. Yra mokslininkų, kurie iš augalų pagamina į mėsą panašius baltymus. Šių produktų savybės atitinka tradicinės mėsos skonį.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "3. Į odą transplantuoti mikro čipai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tobulėjant technologijoms, įrenginiai tampa vis mažesni. Taigi implantuoto luisto pagalba greitoji, neprarasdama laiko, galės gauti svarbią informaciją apie pacientą – sveikatos draudimo polisą, geriamų vaistų rūšis, žinos paciento alergines reakcijas, kraujo grupę ir kt.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ateityje netgi bus galima stebėti gyvybines organizmo funkcijas ir gauti tikslius duomenis realiu laiku. Mikro čipai jau šiuo metu leidžia valdyti banko sąskaitą ir išmanųjį telefoną, atsiskaityti už pirkinius ir keliauti transportu, reguliuoti durų atidarymą biure ar namuose, pridėti sporto salės ar parduotuvės lojalumo korteles. O jų sprendžiamų kasdienių užduočių skaičius tik daugės.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "4. 3D biospausdinimas",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tai regeneracinės medicinos kryptis, kai audiniai ir organai kaip konstruktorius surenkami iš ląstelių konglomerato. Jie statomi sluoksniais pagal trimatį skaitmeninį modelį ant biospausdintuvų. Su jų pagalba jie jau išmoko gaminti kaulus ir kremzles.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ir tai tik maža dalis, kurią papasakojau. Jeigu norite turėti gerą profesiją, domėkitės ateitimi, bet nepamirškite ir praeities, o dabar…..",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Štai mano kūrinys.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Jis gal ir neatrodo didelis ar stiprus, tačiau atlieka savo darbą gerai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Turime jį išbandyti. Klauskite bet ko ir robotas jums atsakys, pradėkite.",
    time: 3500,
  },
  {
    who: "Žmogus",
    type: "text",
    text: "Kieno tai eilėraštis?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš atvirom akim pasauly gyvenau,",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jo paslaptis, mįsles spėliojau, gvildenau,",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Septynias dešimtis dvejus metus galvojau -",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ir supratau: žinau, kad nieko nežinau.",
    time: 3500,
  },

  createQuiz("Koks teisingas atsakymas?"
  , ['<div><input type="radio" name="q1" id="opt1"><label for="opt1">Omaras Chajamas</label></div>',
      '<div><input type="radio" name="q1" id="opt2"><label for="opt2">Vincas Mykolaitis Putinas</label></div>',
      '<div><input type="radio" name="q1" id="opt3"><label for="opt3">Henri Deividas Toro</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas, Omaras Chajamas", "opt1"),

  {
    who: "",
    type: "text",
    text: "...",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "...",
    time: 1500,
  },
  {
    who: "Žmogus",
    type: "text",
    text: "Įdomus atsakymas.",
    time: 1500,
  },
  {
    who: "Žmogus",
    type: "text",
    text: "Norėčiau užduotį dar vieną klausimą, susijusį su mano profesija:",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "14 - 2",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "3 - 1",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "452 - 3",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "56 - 2",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "4750 - ?",
    time: 3500,
  },

  createQuiz("Gerai robotai, koks skaičius turėtu būti kitas?"
  , ['<div><input type="radio" name="q4" id="opt11"><label for="opt11">Ar tai bus - 4</label></div>',
      '<div><input type="radio" name="q4" id="opt12"><label for="opt12">Ar tai bus - 1</label></div>',
      '<div><input type="radio" name="q4" id="opt13"><label for="opt13">Ar tai bus - 8</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas, ( 4 ), dešinėje pusėje nurodoma, kiek vienetų skaičiaus yra kairėje pusėje.", "opt11"),
      {
        who: "",
        type: "text",
        text: "...",
        time: 1500,
      },
      {
        who: "",
        type: "text",
        text: "...",
        time: 3500,
      },

  {
    who: "Žmogus",
    type: "text",
    text: "Gerai.",
    time: 3500,
  },
  {
    who: "Minia",
    type: "text",
    text: "Jis protingesnis už mus!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kitas klausimas:",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Teniso raketė ir kamuolys kartu kainuoja 1 eurą 10 centų. Teniso raketė 1 euru brangesnė už kamuolį",
    time: 3500,
  },

  createQuiz("Kiek vertas kamuolys?"
  , ['<div><input type="radio" name="q5" id="opt14"><label for="opt14">Ar tai bus - 1 euras</label></div>',
      '<div><input type="radio" name="q5" id="opt15"><label for="opt15">Ar tai bus - 10 centų</label></div>',
      '<div><input type="radio" name="q5" id="opt16"><label for="opt16">Ar tai bus - 5 centai</label></div>',
      '<div><input type="radio" name="q5" id="opt17"><label for="opt17">Ar tai bus - 25 centai</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas, 5 centai. Tarkime, kamuoliukas kainuoja X eurų. Jei lazda euru brangesnė, vadinasi ji kainuoja X + 1 eurų. Taigi, lazda plius kamuoliukas, t. y. X + (X + 1) = 1,1 euro. 2X + 1 = 1,1 (2X = 0,1. Vadinasi, X = 0,05 euro)", "opt16"),

  {
    who: "",
    type: "text",
    text: "...",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "...",
    time: 1500,
  },
  {
    who: "",
    type: "Žmogus",
    text: "Labai gerai.",
    time: 3500,
  },
  {
    who: "Moteris",
    type: "text",
    text: "Man atrodo šitas robotas tiesiog neįveikiamas...",
    time: 1500,
  },
  {
    who: "Minia",
    type: "text",
    text: "Žmonės džiūgavo ir plojo!",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Benai tu taip norėjai, užduoti klausimą, šauk kokią nors užduotį iš mokyklos, Tavo šansas!",
    time: 1500,
  },
  {
    who: "Benas",
    type: "text",
    text: "Aš norėčiau vieną užduoti klausimą..",
    time: 3500,
  },
  {
    who: "Profesorius",
    type: "text",
    text: "Taip, žinoma jaunuoli, manau gali užduoti paskutinį klausimą ir mes keliausime toliau",
    time: 1500,
  },
  {
    who: "Benas",
    type: "text",
    text: "Tvenkinyje auga vandens lelijos. Jos dauginasi gana greitai, kasdien padvigubina pasiskirstymo plotą. Po 48 dienų tvenkinys bus visiškai padengtas vandens lelijomis.",
    time: 3500,
  },

  createQuiz("Po kiek dienų vandens lelijos uždengs pusę tvenkinio?"
  , ['<div><input type="radio" name="q7" id="opt22"><label for="opt22">Ar tai bus - 47 dienos</label></div>',
      '<div><input type="radio" name="q7" id="opt23"><label for="opt23">Ar tai bus - 24 dienos</label></div>',
      '<div><input type="radio" name="q7" id="opt24"><label for="opt24">Ar tai bus - 48 dienos</label></div>',
      '<div><input type="radio" name="q7" id="opt25"><label for="opt25">Ar tai bus - 94 dienos</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas: 47 dienos. Jei kasdien lapų dengiamas plotas padvigubėja, vadinasi, prieš dieną jis buvo dvigubai mažesnis. Taigi, 47-ąją dieną pusė ežero turėjo būti aptraukta lapais. ", "opt22"),

      {
        who: "",
        type: "text",
        text: "...",
        time: 3500,
      },
      {
        who: "",
        type: "text",
        text: "...",
        time: 3500,
      },
  {
    who: "Benas",
    type: "text",
    text: "Wow, labai puiku.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Na ką, mano pasirodymas jau į pabaigą, tikiuosi, kad buvo įdomu. Klausimai buvo iš tiesų nelengvi, kitais metais reikės pasiruošti dar geriau. Taigi iki kito karto, draugai!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kitas pasakojimas kitą dieną, sėkmės!",
    time: 3500,
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
