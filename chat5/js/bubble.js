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
    who: "Mama",
    type: "text",
    text: "Na ko čia miegi, Lorenai, žiurėk esi visas išsitepęs.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Ką?? Girdžiu mamos balsą?",
    time: 1500,
  },
  {
    who: "Mama",
    type: "text",
    text: "Kaip tu sugebėjai visą rašalą išpilti? Ar kaltinsi savo katiną, kuris tiek pėdsakų paliko.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mama, mamytė!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Apkabinau ją labai stipriai.",
    time: 1500,
  },
  {
    who: "Mama",
    type: "text",
    text: "Ar jau perskaitei naujos knygos pasakojimus apie saviugdą?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Rankose laikiau nedidelę knygelę pavadinimu “Mokytojo pasakojimai kitų akimis”.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai visą tą laiką aš tiesiog sapnavau?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Geras, o sapnas buvo toks realus.",
    time: 1500,
  },
  {
    who: "Mama",
    type: "text",
    text: "Šiandien šios knygos autorius atvažiuoja pas mus į miestą, jeigu greitai apsirengsi dar spėsime pasiklausyti, ką jis turi papasakoti, ar nori?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, žinoma.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po 20 minučių, jie jau sėdėjo nedidelėje patalpoje, kurioje buvo daug kėdžių, o salės priekyje stovėjo mikrofonas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ar kada matėte ryškiai oranžinį krokodilą, stovinti ant televizijos bokšto?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Sutinku, keistas reiškinys, bet nors jo nematėte, o Jūsų vaizduotė jau dirba savo darbą. Jūs mintyse jau matote šį paveikslą. Tik reikėjo įsiklausyti į žodžius.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šiandien norėčiau paskaityti porą ištraukų iš savo knygos, o jei kils klausimų, prašom, klauskite, nesidrovėkite.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Vaizduotė keičia mūsų pačių patirtį. Net ir tie, kurie daug keliavo, daug patyrė, daug matė – jų patirtis labai ribota.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Vaizduotė lavinasi, kai mes skaitome, ji suteikia mums galimybę pamatyti pasaulį kitų akimis. Dažnai netgi geriau suprasti pasaulį, įžvelgti tai, ko nesame matę, patirti tai, ko nesame patyrę. Skaitydami dalinamės kitų žmonių patirtimi, o tai yra labai svarbu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kuo daugiau skaitote, tuo daugiau prikaupsite kitų žmonių patirties ir kai ateis sunkus metas arba ištiks bėda, žinosite, kaip ją galima išspręsti arba bent jau kokios pasekmės gali laukti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Argi ne puiku matyti ateitį?",
    time: 1500,
  },
  {
    who: "Žmonės",
    type: "text",
    text: "Žinoma, kad gerai.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kas trukdo semtis naujos patirties?",
    time: 1500,
  },
  {
    who: "Moteris",
    type: "text",
    text: "Tikriausiai draugai, kurie sako: „einam į lauką, pažaisime kamuoliu“ arba ką tik išleistas naujas kompiuterinis žaidimas...",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Deja, tai mūsų pačių tinginystė…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kad ir kaip skamba banaliai, kad ir kaip skamba paprastai, bet šitas žodis kaip magnetas. Gyvenime jis tiesiog bus prilipęs prie Jūsų ir teks kažkaip su juo palaikyt glaudų ryšį.",
    time: 3500,
  },
  {
    who: "Vaikinas",
    type: "text",
    text: "Gal galite pateikti pavyzdį?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žinoma. Nusišypsosi, kai išgirsi ir sakysi, kad „tikrai, tai į mane labai panašu“.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Sakykim, pagaliau išsirinkai knygą, pradėjai skaityti, priėjai aprašymo skyrių. Autorius nori nuosekliai nupasakoti žodžiais, kas pavaizduota, vadinasi, jam šita dalis yra svarbi, kitaip jis jos neįtrauktų.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O mes ką darom?",
    time: 1500,
  },
  {
    who: "Vaikinas",
    type: "text",
    text: "Aš dažniausiai praleidžiu tokias dalis.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, nes reikia pastangų suprasti tai, kas mums neįdomu.",
    time: 1500,
  },
  {
    who: "Mergina",
    type: "text",
    text: "Norite pasakyti, kad negalima praleisti skyrių?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Galima, bet nerekomenduojama, nes autoriai nori pateikti savo požiūrį į tam tikrus dalykus. Tam, kad jį suprastume, turime knygą skaityti nuo pradžios iki pabaigos.",
    time: 3500,
  },
  {
    who: "Vaikinas",
    type: "text",
    text: "Gal yra kokių patarimų, kaip tai daryti?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kovoti su tinginiu. Tai yra didžiausias mūsų priešas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Perskaitęs įdomią mintį, sustok, apmąstyk, ką autorius turėjo galvoje. Pagalvok, kokias emocijas ir jausmus sukelia ši mintis. Įsiklausyk į savo mintis, iškelk sau rūpimus klausimus.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nepalik knygos neperskaitytos be rimtos priežasties.",
    time: 3500,
  },
  {
    who: "Vaikinas",
    type: "text",
    text: "Bet aš pavargstu, kai ilgai ir daug skaitau. Ką tokiu atveju daryti?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Reikia skaityti kokybiškai, o ne kiekybiškai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ir jei Tavęs kas nors paklaus, kodėl tiek per vasarą perskaitei mažai knygų?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tu jam iškart gali atsakyt, kad perskaitei vieną, bet išanalizavai ją: perskaitei kitų autorių kritiką, užsirašei dešimtis citatų ir naujų minčių, perskaitei autoriaus biografiją, gali iš karto rasti įdomiausias vietas. O tuomet paklausk pašnekovo: o, Tu, ar atsimeni iš savo perskaitytų knygų bent vieną autorių?",
    time: 1500,
  },
  {
    who: "Vyras",
    type: "text",
    text: "Girdėjau, kad kai kas pataria: „neimk knygos, kuri tau neįdomi“.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Manau tai klaida. Ar knyga įdomi, ar ne – antraeilis klausimas. Pirmas klausimas – ar to reikia, ar ne.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Suprasti knygą dažnai nėra taip paprasta, kaip atrodo. Čia pavojingiausia yra „supratimo iliuzija“: atrodo, kad supratai, bet gal neteisingai. Teko grįžti aiškintis iš naujo ir jau viskas susipainiojo.",
    time: 1500,
  },
  {
    who: "Mergaitė",
    type: "text",
    text: "O jei suvoki, kad nieko skaitydamas nesupranti, ar toliau tęsti?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nepergyvenk, jeigu daug dirbsi – suprasi.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Rask žmogų, kuris aprūpins Tave knygomis ir žiniomis, kad negaištum laiko ieškodama naudingų dalykų.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Asmenį, kuris parodys, ką turi daryti, kad gautum tai, ko nori.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Mentoriaus, kuris padės rasti savo kelią ir juo eiti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Energingą asmenybę, kuri dalinsis energija su Tavimi.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Mokytoją, kuris užsirašo, kuo žavisi ir kam pritaria, kuris nuoširdžiai nori padėti gyventi geriau, nekritikuoja, o įkvepia.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Jis teisingai ir sąžiningai išsako savo mintis. Suteikia galimybę būti užimtam ir nesijausti tuščiam. Kas Tave mokys, kol neišmoksi viską daryti pati.",
    time: 3500,
  },
  {
    who: "Mergaitė",
    type: "text",
    text: "Bet tokių žmonių labai reta ir jie nuolat yra užimti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip. Tokie žmonės nešvaisto laiko veltui, net aukoja dalį miego, nes žino sėkmės ir pralaimėjimo kainą. Prieš miegą jie skaito, kad protas miego metu būtų nuolat atviras naujoms idėjoms.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Jie atsiriboja nuo žmonių, norėdami ištirti jų silpnybes ir poreikius. Ir tada duoda jiems vaistų, kurie gydo. Jaunimui parodo teisingą kelią, suaugusiems primena jį.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Jų sėkmė neatsitiktinė, nes jie išnaudoja laiką tinkamai.  Jie supranta, kuo galingesnė praeitis, tuo galingesnė dabartis. Kuo galingesnė dabartis, tuo stipresnė ateitis. Kai esi jaunas ir neturi praeities, negali kurti savo ateities. Kai neturi dabarties ir ateities, negali kurti savo gyvenimo.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nėra žmonių, kurie nieko negali pasiekti. Yra žmonių, kurie nenori tam įdėti pastangų. Pastangos yra energija, daugelis bijo ją prarasti ir laiko savyje dėl vienos priežasties, nes neišmoko jos papildyti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Išmokite atidaryti stebuklingą žinių skrynią. Kurkite kliūtis ir patys jas įveikite. Priimkite sprendimą tapti „veiksmo žmogumi“. Tapkite kariu, o ne auka. Karys yra tas, kuris nugali pats save.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Štai kas yra mokymasis, tai – menas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kas dabar man pakartos skaitytojo įsakymus?",
    time: 3500,
  },
  {
    who: "Lorenas",
    type: "text",
    text: "Aš galiu pabandyt.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Prašom, koks Tavo vardas?",
    time: 1500,
  },
  {
    who: "Lorenas",
    type: "text",
    text: "Lorenas.",
    time: 3500,
  },
  {
    who: "Lorenas",
    type: "text",
    text: "Neskaitykite visų knygų vienodai. Skaitymo būdas turi atitikti skaitymo tikslą. Atsimink, kad skaitymas yra vienas svarbiausių, reikalingiausių ir rimčiausių darbų.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Regis, mano knygą mintinai žinai, o tai labai puiku.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Na ką, šiandien giliai įkvėpkite ir prisiminkite, ką darote tokio, kas Jus nuolat džiugina. Tai leis Jums užbaigti savo dieną plačia šypsena, nereikės ieškoti priežasties būti laimingu.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O dabar, kas nori – palikite savo el. pašto adresą, aš jums atsiųsiu pora skyrių, kurie nepateko į knygą. Tačiau manau, kad jie yra naudingi. Jei turėsite klausimų, galėsite man parašyti, aš pasistengsiu atsakyti į juos visus. Iki greito, draugužiai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šiandien tema baigta, kita tema bus kitą dieną!",
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
