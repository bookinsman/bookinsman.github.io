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
    text: "Šiandien pamokoje toliau kalbėsime apie A. P. Čechovo kūrybą. Namuose perskaitėte apsakymą „Chirurgija“, dabar rašysite reklaminę esė remdamiesi perskaitytu kūriniu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pirmas dalykas, kas yra reklama?",
    time: 1500,
  },

  {
    who: "Studentai",
    type: "text",
    text: "Reklama yra tai, kas erzina mūsų mamas, kai jos žiūri serialą. Reklama tai primygtinis būdas įpiršti žmogui daiktą, nesvarbu, reikalingas jam tas daiktas ar ne.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Paprašykime vaikinų, kurie dirbo namuose su žodynu, tiksliai išaiškinti šį žodį.",
    time: 1500,
  },
  {
    who: "Vaikinai",
    type: "text",
    text: "Reklama – informacija apie vartotojiškas prekių savybes ir paslaugų rūšis, siekiant jas parduoti ir sukurti joms paklausą; literatūros, meno kūrinių populiarinimas (enciklopedinis žodynas).",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Į ką mes atkreipiame dėmesį?",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Iššaukiantys pavadinimai, trumpas tekstas, ryškūs piešiniai, skirtingi šriftai.",
    time: 1500,
  },

  {
    who: "",
    type: "text",
    text: "Jūs visiškai teisūs. Dar kartą perskaitykime reklamos apibrėžimą. Kaip matome, reklama gali būti padaryta ir grožinės literatūros kūriniui. Informacijos apie knygą galime gauti skaitydami recenziją, anotaciją, apžvalgą ir reklamuodami ją.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Visi šie žanrai turi būti atskirti. Prieš jus du tekstai, perskaitykite ir atsakykite į klausimą: kuris iš jų yra reklama, o kuris – anotacija? Prisiminkite anotacijos ypatybes, pateikite apibrėžimą.",
    time: 1500,
  },
  {
    who: "Studentas",
    type: "text",
    text: "Anotacija – tai trumpas kūrinio ar rankraščio turinio aprašymas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Skaitomi Pamelos Travers knygos „Merė Popins Vyšnių gatvėje“ tekstas ir A.S.Puškino apsakymo „Kapitono dukra“ tekstas.",
    time: 1500,
  },

  {
    who: "",
    type: "text",
    text: "(Pamela Travers Mary Poppins Cherry Tree gatvėje)",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Ši knyga papasakos apie įdomius, o kartais ir visiškai neįtikėtinus Merės Popins ir jos draugų nuotykius, apie tai, kas vyksta parke Joninių naktį. Taip pat apie tai, kokios yra mėgstamiausios Oriono ir Dvynių žvaigždynų gėlės. Galbūt jūs sutiksite jau pažįstamus personažus – parko prižiūrėtoją, piršlį, poną ir ponią Topsy – ir susipažinsite su naujais žmonėmis.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Tikėjimas gėrio galia, teisingumas, draugystė, meilė artimiesiems – tai bruožai, kurie traukia skaitytojų širdis prie istorijos.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "A.S.Puškino apsakymo „Kapitono dukra“.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Istorijos mylėtojai!",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Didysis maištininkas puikaus poeto akimis. Knygoje gausu svarbiausių šimtmečio istorinių įvykių. Žiaurus ir gailestingas, grubus ir meilus, teisingumo čempionas, kas jis, Emelyanas Pugačiovas? Atsakymą į šį klausimą rasite A. S. Puškino „Kapitono dukroje“. Nepraleiskite progos praplėsti akiratį. Knygą galite įsigyti knygyne adresu: Kayerkanas, šv. Statybos, kanceliarinių prekių parduotuvė.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Pamelos Travers knyga „Mary Poppins on Cherry Tree Street“ buvo anotacija, nes šis tekstas turėtų sudominti ir pritraukti skaitytoją.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Buvo parašyta reklama A.S.Puškino knygai „Kapitono dukra“.",
    time: 1500,
  },

  {
    who: "",
    type: "text",
    text: "Kokios reklamos savybės buvo pastebėtos?",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Mažesnės apimties.",
    time: 1500,
  },

  {
    who: "Studentai",
    type: "text",
    text: "Nurodytas adresas, kuriame galite nusipirkti",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Skambus tekstas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kaip apibrėžėte reklamos stilių? Pagrįskite savo atsakymą.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Skelbimai trumpi. Klausimai užduodami, bet atsakymų nėra.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kokia veiksmažodžių forma vartojama dažniausia?",
    time: 1500,
  },

  {
    who: "Studentai",
    type: "text",
    text: "2-ojo asmens veiksmažodžiai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Koks tai stilius?",
    time: 1500,
  },
  {
    who: "Studentas",
    type: "text",
    text: "Publicistinis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Teisingai įvardijote skirtumą tarp reklamos ir anotacijos, o dabar įvardinkime pagrindinius reklamos sudarymo reikalavimus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Reklamos reikalavimai.",
    time: 1500,
  },

  {
    who: "Studentai",
    type: "text",
    text: "Patrauklus pavadinimas, kuris traukia dėmesį.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Neįprastas informacijos pateikimas.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Turinio trumpumas.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Suinteresuota šalis.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Adresas.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Stilius – publicistinis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Išklausykite tekstą ir naudodamiesi atmintine nustatykite, ar tai reklama.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "„Europos tautų pasakojimai“.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Viename rinkinyje sujungiamos vokiečių, prancūzų, anglų, ispanų liaudies pasakos ir kitų Europos šalių folkloras. Itin meniškas leidimas, kietu viršeliu, 416 puslapių, išleistas tarptautinės knygų mylėtojų bendruomenės.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Ne, tai ne reklama. Čia nėra skambaus pavadinimo, nėra neįprasto informacijos pateikimo, nėra adreso, kur būtų galima įsigyti šį kūrinį.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Išanalizavome visas reklamos sudarymo ypatybes. Pabandykime padaryti reklamą A.P.Čechovo istorijai „Chirurgija“.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nuo ko pradėti?",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Nuo patrauklaus pavadinimo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pagalvokite, kokią antraštę galite parinkti?",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "„Niekai“, „Chirurgija yra smulkmenos“, „Ar lengva išplėšti dantį?“, „Vienas iešmas“, „Neįmanoma be praktikos“.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Koks pavadinimas tinkamiausias? Kodėl?",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "„Neįmanoma be praktikos“. Visų pirma, tai paslaptinga. Antra, tai atitinka turinį, nes sanitaras Kuriatinas nemoka šalinti dantų, manydamas, kad „operacija yra niekas.“ Dėl Kuriatino neatsargumo nukentėjo Sekstonas Vonmiglasovas, kuriam sanitaras sulaužė dantį ir paliko šaknis dantenoje.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Pagalvokite, kokią antraštę galite sugalvoti reklamuodami šį darbą.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Vonmiglasovas ryte nesivalo dantų.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Diakonui skauda dantį, skruostas ištinęs, tačiau vizitą pas gydytoją atideda iki paskutinės akimirkos.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Paramedikas Kuriatinas mano, kad viską žino, gali viską.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Pasirinkite instrumentą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Visa tai teisinga, tačiau informacija turėtų būti pateikiama reklamos forma. Pabandykite suformuluoti jo turinį.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "1 variantas",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Čechovo apsakyme „Chirurgija“ sužinosite, kodėl būtina laikytis burnos higienos. Kaip tu gali atsidurti tokių nelaimingų sanitarų rankose. Kodėl jie nesijaučia kalti? Perskaitykite šį Čechovo veikalą. Jums patiks.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "2 variantas",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Jei domina, kodėl kreipiamės į išmanančius odontologus. Atidėliojate susitikimą su daktaru? Nerimaujate dėl savo sveikatos, reikia paskaityti A.P.Čechovo apsakymą „Chirurgija“.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kiekviename skelbime turi būti nurodytas adresas ir suinteresuotas asmuo. Kas yra šis veidas?",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Kiekvienas iš mūsų",
    time: 1500,
  },

  {
    who: "",
    type: "text",
    text: "Kur galite rasti šią istoriją.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "A. P. Čechovo apsakymų rinkinyje, leidykla „Vaikų literatūra“, 1987 m., galite nusipirkti knygyne arba pasiimti iš mokyklos bibliotekos.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Parašykite galutinį skelbimo variantą.",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Ar domitės, dėl ko skauda dantis, ir į kokius specialistus reikėtų kreiptis? Ar nerimaujate, kaip atskirti profesionalą? Norite sužinoti, ar Diakonui buvo pašalintas dantis? Prie ko veda nežinojimas, kai „be praktikos neįmanoma“? Perskaitykite A. P. Čechovo istoriją „Chirurgija“, kurią galite pasiimti mokyklos bibliotekoje: adresu liejyklos 15, priešais raudoną namą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Gerai, o dabar užduotys: pasiskirstysime į dvi kūrybines grupes, kiekviena grupė turės atskirą užduotį (stiprūs mokiniai – padaryti reklamą bibliotekai, silpni mokiniai – tėveliams).",
    time: 1500,
  },

  {
    who: "",
    type: "text",
    text: "1 grupė",
    time: 1500,
  },
  {
    who: "Grupė -1",
    type: "text",
    text: "Mieli bibliotekininkai, knygnešiai!",
    time: 1500,
  },
  {
    who: "Grupė -1",
    type: "text",
    text: "Paskubėkite įsigyti A.P.Čechovo apsakymą „Chirurgija“ į savo bibliotekos fondą. Tegul jūsų mieli skaitytojai įsitikina, kad Čechovas gali trumpai parašyti apie kasdienę tiesą.",
    time: 1500,
  },
  {
    who: "Grupė -1",
    type: "text",
    text: "Kiekvienas žodis juokiasi iš veikėjų, o dialogas yra priemonė apibūdinti tarnautoją Vonmiglasovą ir felčerį Kuriatiną. Susisiekite su raštinės reikmenų parduotuve adresu Statybininkų r. Kayerkanas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar tenkinami žanro reikalavimai?",
    time: 1500,
  },
  {
    who: "Studentai",
    type: "text",
    text: "Taip. Trumpi sakiniai, ypatinga intonacija, patrauklumas konkrečiam žmogui. Adresas nurodytas.",
    time: 1500,
  },
  {
    who: "Grupė -2",
    type: "text",
    text: "Dabar klausomės 2 grupės.",
    time: 1500,
  },
  {
    who: "Grupė -2",
    type: "text",
    text: "Mieli tėvai!",
    time: 1500,
  },
  {
    who: "Grupė -2",
    type: "text",
    text: "Juk nenorite, kad jūsų vaikai atsidurtų „specialisto“ Kuriatino rankose atsidūrusio Čechovo istorijos „Chirurgija“ herojaus pozicijoje. Ar norite apsaugoti save ir savo vaikus nuo bėdų? Šią knygą galite įsigyti artimiausioje parduotuvėje. Adresas: g. Statybos, kanceliarinių prekių parduotuvė.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Vaikinai, ar turite papildymų, komentarų?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Yra tenkinami pagrindiniai reikalavimai reklamai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Skambutis į pertrauką…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Namų darbas: parašykite savo mėgstamos knygos reklamą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kitas pasakojimas kitą dieną, sėkmės!",
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
