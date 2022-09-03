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
    text: "Brangusis, pusryčiai jau paruošti, kelkis.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "O ką valgysime? Noriu blynelių su šokoladiniu kremu ir karameliniu sirupu užpilu.",
    time: 1500,
  },
  {
    who: "Mama",
    type: "text",
    text: "Juk žinai, kad negalima dažnai valgyti saldumynus. Šiandien valgysime sveikuoliškus pusryčius. Omletas su ryte nuskintais pomidorais ir morkų griežinėliais.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tuomet nenoriu valgyti, tai ne tas, apie ką sapnavau visą naktį…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Mama, prašau, padaryk blynelius, vėliau suvalgysiu omletą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Sunkūs žingsniai laiptais artinosi tiesiai į kambarį. Durys atsidarė. Moteris ištraukė iš vaiko rankų telefoną, padėjo jį ant rašomojo stalo, aprengė jį ir jie abu laiptais leidosi žemyn jau be žodžių. Po kelių sekundžių įsivyravo mirtina tyla.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Norėjau atmerkti akis, bet viską, ką galėjau padaryti, tai jausti keistus jausmus. Net nežinau, ar apskritai turiu kūną. Na, jei aš mąstau, vadinasi turiu protą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar mane kas nors girdi?",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "O, Styvai! Tu pagaliau pabudai. Kokie Tavo planai?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jokio Styvo čia nėra. Keista situacija, kiekvieną dieną aš pabundu vis kitame kūne.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Gali pasakyti, kas aš esu dabar? Iki šiol negaliu pramerkt akių.",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Jeigu tai, ką sakai, yra tiesa, tada sveikas atvykęs į floros pasaulį.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Floros?",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Na taip, teisingai. Esi dabar augalas.",
    time: 1500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Ir ne paprastas, o augalas, augantis vazone.",
    time: 1500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/Wz83txj4NQqFPAUT6fom4dQ72wiSDXe7mAMgoLpkzP9pFGgvMLJfJUv6ZNpIGHXrCoIVnVn4hCJs8vGwrS5GK8-Ffnuw4UUe-PHZ3IHcYaOv0fvm26GOH_BB6CiAhA4X0Z3vXo92gg=w2400",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kodėl dabar juokiesi? Man visai nejuokinga.",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Garsiai niekada neteko šią frazę ištarti, todėl pasirodė juokinga.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ir kokios mūsų kasdienės pareigos…?",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Nenusimink, mes turime labai daug veiklos.",
    time: 1500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Turi augti lėtai ir padaryti taip, kad ši diena būtų geresnė nei vakar. Bet tau, kolega, dar reikia išgyventi, nes esi dvigubai didesnis už mane, tad ir saulės tau reikia dvigubai daugiau.",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Noriu pabrėžti, būti augalu – nėra jau taip blogai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ir kas gi čia gero?",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Turime begalę laiko galvoti apie gyvenimą ir jį supančias aplinkybes. Mums gerai, kai mumis žmonės rūpinasi. Žinoma, pasitaiko tokių, kurie nekreipia į mus dėmesio, bet mes gyvi organizmai ir iš karto tai jaučiame. Mums patinka atiduodi tiek, kiek kitiems patinka rūpintis mumis. Esame tam, kad palaikytume harmoniją kambaryje.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar galiu paklausti, kaip pramogaujate dieną?",
    time: 1500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Patikslink, kas yra pramogos. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ilgi pasivaikščiojimai, skanus maistas, žaidimai, pokalbis su šeima.",
    time: 1500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Gaunu malonumą, kai čiulba paukščiai. Tai ženklas man, kad jau laikas keltis ir ruoštis dienai.",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Mėgaujuosi tiesioginiais saulės spinduliais, kurie šildo mane.",
    time: 1500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Klausausi švelnaus moters balso, kai laisto mane ir kalbasi.",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Man patinka, kai viskas paskęsta tamsoje, tuomet girdžiu savo mintis. Jaučiu, kad šiandienos skyrius baigėsi ir laukiu, kada prasidės kitas. Toks laukimas mane jaudina.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ar kada nors galvojai būti kažkuo kitu, o ne augalu?",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Visai ne, man patinka būti augalu, nors daugelis dalykų nuo manęs nepriklauso. Galiu pasikliauti tik žmonių gerove, nes iš esmės esu nuo jų priklausomas.",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Jei dėl kokių nors priežasčių žmogus buvo auklėjamas netinkamai, tai nuo to aš kentėsiu, bet aš su tuo susitaikau, nes tai yra mano likimas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Vargu ar galėčiau gyventi, žinant, kad neturiu, kaip apsisaugoti.",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Nelabai mes ir skiriamės nuo žmonių. Taip pat mirštame, jei nėra pakankamai deguonies arba stipriai nudegame, jei per daug saulės, lygiai taip sau kenkiame, jeigu per daug vartojame vandens.",
    time: 1500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Įdomiausia yra tai, kad praleidžiate didžiąją savo gyvenimo dalį tarp sienų, nors Jūs, žmonės, esate laisvi.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kas čia taip skaudžiai man ką tik įgėlė??",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ir vėl.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ir vėl.",
    time: 1500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Pamiršau paminėti, kad tai – vabzdžiai, kurie minta mumis.",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Jie gyvi organizmai, kaip ir mes, visko, ko jie nori, tai – likti gyvi. Neišvengiamas procesas ekosistemoje, kažkas turi būti suvalgytas arba kentėti, kad kitas išliktų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ką tik įėjo moteris ir tyliai pasiėmė vazoninę gėlę.",
    time: 3500,
  },
  {
    who: "Augalas",
    type: "text",
    text: "Drauguži, Tavo maldos buvo išklausytos. Lik sveikas, bet sugrąžink man Styvą. Su juo daug linksmiau. Iki.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Štai, tau ant palangės pastovės šitas augalas, jam reikia daugiau šviesos, o Tavo kambaryje jos pakankamai.",
    time: 3500,
  },
  {
    who: "Mokytojas",
    type: "text",
    text: "Ačiū, brangioji, o dabar leisk aš pradėsiu nuotolinę pamoką.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taigi, vėl pakliuvau į mokytojo pamoką, o dabar esu visai šalia jo – jo namuose.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Sveiki! Atsiprašau, kad šiandien dirbame nuotoliniu būdu, šiek tiek sirguliuoju.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Greičiausiai ir jūs šiandien esate pavargę, o gal netgi ir liūdni. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Neversiu eiti medituoti, jei būnate išsiblaškę arba jaučiatės, kad visas pasaulis yra nusisukęs nuo Jūsų.",
    time: 3500,
  },
  {
    who: "Tomas",
    type: "text",
    text: "Ir ką daryti tuo metu, kai jautiesi vienišas ir nusiminęs?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Geriausia atsisėst ir atsipalaiduot, nebent geriau įsisavinate informacija stovint, tai kodėl gi ne? ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Aš manau, kad jeigu mokykloje arba darbe, mes dirbtume atsitraukę nuo kėdžių, mums geriau sektųsi.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Po pamokos galite pasiskaityti, kokie yra veiksmingiausi būdai, padedantys mokytis.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Jūsų šiandien tikrai neapkrausiu. O mes pasinersime į jau mums žinomą temą – „mokslas kaip menas“.",
    time: 1500,
  },
  {
    who: "Dainius",
    type: "text",
    text: "Skamba gražiai, o kad į ją pasinerti ar reikia specialios aprangos? ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nersime nelabai giliai, užteks drabužių, kuriuos velki, gal tik pabraidžiosime.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Silvija, ar buvo tau kada taip: skaitai, mokaisi ir staiga pradedi jausti, kad iš tokios veiklos mažai naudos?",
    time: 3500,
  },
  {
    who: "Silvija",
    type: "text",
    text: "Labai dažnai taip būna, vėliau nusibosta ir einu žaisti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Matai tu iš karto nuleidi rankas ir eini imtis kitos veiklos. Tačiau ar nesusimąstei, kad gal pasirinkai netinkamą būdą mokytis ar skaityti?",
    time: 1500,
  },
  {
    who: "Silvija",
    type: "text",
    text: "Žaisti galiu ilgas valandas, o mokytis neišeina…",
    time: 3500,
  },
  {
    who: "Silvija",
    type: "text",
    text: "Aš manau, kad tie, kurie gerai dirba arba turi gerus pažymius, turi su savimi stebuklingą raktą, kuris atidaro jų informacijos stalčių su reikiamomis žiniomis, vos tik paprašius.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Manau ir tu norėtum tokio rakto.",
    time: 1500,
  },
  {
    who: "Silvija",
    type: "text",
    text: "O kas tokio rakto nenorėtų? ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ir aš tokio rakto norėčiau. Pakabinčiau jį ant kaklo ir sakyčiau visiems: „klauskite manęs, aš jums viską atsakysiu“. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Bet žmonės net neįtaria, kokių pastangų ir kiek laiko reikia, norint išmokti visko, ką jie tame „stalčiuke“ turi susidėję.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Dailininkas gali nutapyt paveikslą vos per valandą, kurį seniau tapė visus metus, sportininkas laimi vis dažniau rungtynes ir tai yra jo sunkaus darbo atlygis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kai kuriems tikslams pasiekti reikia laiko ir pastangų, bet kai jau žinai, kaip tinkamai tą padaryti, Tu gali kartoti tai vis greičiau ir geriau.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Sumanūs žmonės, o mes tokie ir esame, turėtų iš mokslo paimti viską, ką mokslas mums gali duoti. Išspausti, įsisavinti iki galo visą tai, kas jame yra ir gali būti suteikta, sugerti kaip kempinė.",
    time: 1500,
  },
  {
    who: "Dainius",
    type: "text",
    text: "Bet kodėl tai reikia daryti būtent dabar, kai mes dar esame tokie jauni?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Yra tam priežasčių. Viena svarbiausių – greitai einantis laikas. Norėdami perskaityti mylimo autoriaus knygą, staiga pradedame suprasti, kad laiko tam nebėra.",
    time: 1500,
  },
  {
    who: "Tomas",
    type: "text",
    text: "Aš jau ir dabar neturiu laiko daryti tai, ką noriu…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tiesa. Pradžiai Jus pratina prie ritmo - keltis tam tikrą valandą, valgyti pietus tam tikrą valandą, eiti miegoti tam tikrą valandą. Ir tai tavo dienotvarkė, kurią tau sudaro.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O kai suaugame, dienotvarkės niekas nebesudaro už mus. Niekas nebeaiškina kelintą valandą ir ką reikia daryti. Vadinasi, jau turite sugaišti laiko vien planuodami savo dieną.",
    time: 1500,
  },
  {
    who: "Veronika",
    type: "text",
    text: "Taip, tiesa. Mano mama visada sako, kad ji visiškai neturi laiko ir stebisi, kur jis „dingsta“.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Todėl organizuoti laiką yra labai svarbu. Vienas autorius yra pasakęs, “suorganizavęs tinkamai minutę, laimėsi valandą gyvenime”. Manau tokiems žodžiams nėra ką ir pridurti.",
    time: 1500,
  },
  {
    who: "Saulius",
    type: "text",
    text: "O aš pridurčiau, dabar mokytojas vaišina mus ledais už mūsų paklusnumą!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Galbūt, tačiau šiuo metu tęsiame mūsų pradėtą temą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mokslas yra menas, o skaitymas – vienas iš pagrindinių įrankių tai pasiekti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tik trūkumas su skaitymu, kaip žinių įsisavinimu, yra tas, kad nesvarbu, kokia tai knyga, mes visi skaitome maždaug vienodai. Skirtumas nėra ypač didelis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tie, kurie įpratę skaityti greitai arba tiesiog peržvelgti tekstą, greičiausiai žinomas knygas, tokias kaip „Einšteino teoriją“, “Šerloką Holmsą”, “Trys Draugai”, perskaitys vienodai...",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ir apskritai, kai ateina laikas skaityti knygą, prisiverti išmokti ko nors naujo. Koks geras jausmas knygoje rasti atsakymą į klausimą, kurio tu taip ilgai ieškojai...",
    time: 1500,
  },
  {
    who: "Silvestras",
    type: "text",
    text: "Prieš pradėdamas skaityti, aš apžiūriu knygą. Jeigu ji per didelės apimties, yra tikimybė, kad nepabaigsiu jos skaityti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Labai gerai pasakyta. Dažnai mes nenorime švaistyti savo brangaus laiko, kad sužinotume, ar ji gali mums padėti, ar ne. Padedame knygą į šalį, ir tikimės, kad prie jos dar sugrįšime.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Monika, aš tau nusiunčiau tekstą, perskaityk porą garsaus autoriaus frazių, prašau.",
    time: 1500,
  },
  {
    who: "Monika",
    type: "text",
    text: "Knyga nėra tik tekstas. Knyga yra būsena. Jei jos negauni, vadinasi, knyga tau nebuvo skirta. Tai būsena, kurią gauni, kai knyga atveria Tau naują pasaulį. Pasauliai, kurie atviri tik tau.",
    time: 1500,
  },
  {
    who: "Monika",
    type: "text",
    text: "Knygos, kurias skaitai, esi tu pats. Tu, kuris atėjai į šį pasaulį, kad suprastum save. Tai yra knygų esmė. Juose yra atsakymai į Tavo klausimus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Labai gerai, ačiū.",
    time: 1500,
  },
  {
    who: "Benediktas",
    type: "text",
    text: "Mano tėtis sakė, jog  yra knygų, kurias skaitome ne todėl, kad jos suteikia naujų žinių, o todėl, kad jos motyvuoja, džiugina, sužadina naujas mintis, nuteikia mus žygdarbiams.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Teisingai, skaitymas nėra tik pramoga, tai svarbi ir būtina priemonė plėsti akiratį ir gilinti patirtį, išsigryninti mintis, patirti jausmus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kitaip tariant, skaitymo menas yra labai svarbus mūsų gyvenime, nes tai yra vienas iš pagrindinių įrankių, kuris leidžia mums išmokti mąstyti, suvokti, analizuoti ir gilinti savo žinias.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šiandien Jums linkiu, kad taptumėte geriausiu, kuo galite būti, iki rytojaus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pajutau, jog nuo kompiuterio sklindanti vibracija užgeso, užsidarė langas, nusileido užuolaidos, mokytojo figūra paliko kambarį, aš likau visai vienas tamsoje…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tema pasibaigė, kita bus kitą dieną",
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
