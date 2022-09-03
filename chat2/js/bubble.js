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
    text: "Kai atsimerkiau, tylėjau dar keletą minučių. Nežinau, ar kas manimi patikės, bet esu vandenyje. Grupė vandens vėžlių laiko mane. Stipri vandens srovė tempia mane į priekį.",
    time: 0,
  },
  {
    who: "Vėžlys",
    type: "text",
    text: "Ar Tu naujokas? Niekada nesu Tavęs matęs šalia mūsų, nors pažįstu daug vėžlių.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Dabar jau suprantu vėžlių kalbą, tai kas toliau?",
    time: 1500,
  },
  {
    who: "Vėžlys",
    type: "text",
    text: "Drauguži, ką ten kalbi sau po nosimi, nieko negirdžiu. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kokio atsakymo tikiesi?",
    time: 1500,
  },
  {
    who: "Vėžlys",
    type: "text",
    text: "Norėčiau išgirsti tikslų atsakymą.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Aš nesu vėžlys, esu žmogus. Tiesiog šiuo metu esu įstrigęs šiame kūne.",
    time: 1500,
  },
  {
    who: "Vėžlys",
    type: "text",
    text: "Ej, Darvinai, dar vienas perdozavo ungurio elektros ir kalba niekus.",
    time: 3500,
  },
  {
    who: "Vėžlys",
    type: "text",
    text: "Nepergyvenk, viskas bus gerai už kelių valandų, tiesiog venk tų lipnių ir pavojingų gyvių. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Oh, kaip aš norėčiau, jog tai būtų taip paprasta.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O kur mes plaukiame?",
    time: 3500,
  },
  {
    who: "Vėžlys",
    type: "text",
    text: "Visi mes ieškome kelio į jūrą. Tikimės, kad ten bus švarus ir tinkamas mums gyventi vanduo.",
    time: 1500,
  },
  {
    who: "Vėžlys",
    type: "text",
    text: "Leidžiamės nešami srovės per įdomias uolas, plaukiame be navigacijos, kaip laivai be kapitono. Nardome tarp pavojingų tarpeklių ir kalnų. ",
    time: 3500,
  },
  {
    who: "Vėžlys",
    type: "text",
    text: "Pasigrožime koralų spalvomis: blyškiai mėlyna su rausvomis dėmėmis arba balta su žalsvais taškelių pėdsakais, o kartais pavyksta rasti ugningos oranžinės spalvos koralus. ",
    time: 1500,
  },
  {
    who: "Vėžlys",
    type: "text",
    text: "Prisiartiname prie paplūdimio ir klausomės, kaip bangos švelniai daužosi į uolas. Vėliau bangos virsta putomis, o jūra vagia kriauklytes į savo glėbį.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Atrodo pasakiškai nuostabu, tačiau aš maniau, kad mes dabar esame jūroje. ",
    time: 3500,
  },
  {
    who: "Vėžlys",
    type: "text",
    text: "Ne, mielas kolega. Tai tik mūsų svajonės. Mes esame akvariume ir už kelių minučių prasidės pats įdomumas, ateik arčiau stiklo. ",
    time: 1500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/c-CkqFPbVoqsZQEadCFRb9pPIehTU4hXx_2xXZtdUtHITQrXDBLU4mf-CIUAj6yWHwAXiz_Y-VTO2wrg2id3XlKCKj7XPSLfPWUrsbec3DLnm0_-5GmaJ8c7yFquAgSf4gG0G_dK2Q=w2400",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Patalpos lyg ir matytos, pažįstamos...",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, čia juk mokytojo klasė, nejaugi aš dabar esu ten!?",
    time: 1500,
  },
  {
    who: "Vėžlys",
    type: "text",
    text: "Na, jau būk tyliai, paklausyk, pradeda kalbėti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Štai ir atėjo nauja diena, tikiuosi turite daug energijos ir galite ja dalintis su kitais. Tačiau būkite atsargūs. Jus turbūt jau mokė, kad su nepažįstamaisiais reikia būti apdairiems. Kad ir kaip gražiai atrodytų, kad ir kaip skaniai kvepėtų – dovanas nuo kitų reikia tikrinti, tikrini ir dar kartą tikrinti.",
    time: 1500,
  },
  {
    who: "Giedrė",
    type: "text",
    text: "Mokytojau, Jūsų paskutinis sakinys skambėjo kaip sugedusi plokštelė.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Atsiprašau dėl to, tiesiog mes įsisaviname dalykus geriau, kai juos kartojame.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taigi jeigu norite turėti tik gerus įpročius, kartokite gerus darbus, o blogus – stenkitės pakeisti gerais. ",
    time: 1500,
  },
  {
    who: "Audrius",
    type: "text",
    text: "Girdėjau, kad įsisavintume naują įprotį, reikia jį kartoti bent 30 dienų, ar tai tiesa?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Audriau, tikriausiai tai yra tiesa, bet žmonės labai skirtingi ir jų suvokimas irgi skirtingas. Vieniems reikia savaitės, kitiems poros mėnesių, bet kad reikia daryti kažką nuolat ir nesustoti, tai tikrai tiesa!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Skaičius 30, palyginus kiek mes metuose turime dienų, nėra labai didelis. Kiek metuose yra dienų?",
    time: 3500,
  },
  {
    who: "Veronika",
    type: "text",
    text: "365 dienos.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Teisingai.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taigi 30 dienų metuose nėra daug.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Turiu jums paruošęs palyginimą. Įsivaizduokite, kad prieš Jus sėdi senelis, pas kurį auga vos 5 plaukai. Greičiausiai jūs pasakysite, kad tai labai mažai. Dabar pamąstykite, jeigu jūs rastumėte 5 plaukus sriuboje. Manau, būtumėte pikti.",
    time: 3500,
  },
  {
    who: "Klasė",
    type: "text",
    text: "Fuj plaukai sriuboje!",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Būtent. Ypač jei sėdite restorane. Padavėjas atneš gražius įrankius, paties servetėlę ant kelių, įpils mėgstamo gėrimo. Juk tokią situaciją, žinoma, turėsite. Tačiau tuomet, kai baigsite studijas ir turėsite gerą išsilavinimą, tuomet, kai tapsite savo srities specialistais. Tokioje vietoje pietausite kasdien, ten ir šeimą savo kviesite. Gėda nebus, nes prabangiame restorane plaukų nerasite.",
    time: 3500,
  },
  {
    who: "Dainius",
    type: "text",
    text: "O ko mums reikia, kad taptume profesionalais savo srityje?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Hmmm įdomus klausimas….",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Galbūt Aistė atsakys?",
    time: 1500,
  },
  {
    who: "Aistė",
    type: "text",
    text: "Tikriausiai žinių?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Na ko taip nedrąsiai? Žinios, skaitymas, disciplina, saviugda ir nuolatinis mokymasis padarys jus profesionalais.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Bet žinote, galima visus tuos dalykus daryti teisingai ir neteisingai. Manau visi norėtų tai daryti teisingai, nes nežinia, kokios pasekmės gali laukti, jei išvardintus dalykus darytume ne pagal sistemą, ne pagal planą ar paskirtį.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pavyzdžiui, architektai, kurie projektuoja tiltus, turi išplanavimą, žino ir apmąsto kiekvieną detalę iki smulkmenų. Kai nuo pradžių viskas kruopščiai apskaičiuojama, nepadaroma lemtingų klaidų, tai tiltą pastačius, belieka žiūrėti ir džiaugtis tokiu grožiu ir jo nauda.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O kas bus su klaidingu išplanavimu?",
    time: 1500,
  },
  {
    who: "Vygintas",
    type: "text",
    text: "Tikriausiai viskas sugrius.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, prastas mokymasis, kaip prastai sukonstruotas tiltas, gali tiesiog sugriūti. Įsivaizduokite, kiek žalos gali padaryti tiltas...",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jums, mieli mokiniai, vienareikšmiškai gyvenime teks susidurti ir su geromis knygomis, gerais mokytojais, gerais žmonėmis, bet taip pat ir su netinkamomis knygomis, bjauriais mokytojais ir piktais žmonėmis.",
    time: 3500,
  },
  {
    who: "Gediminas",
    type: "text",
    text: "Girdėjau, kad per didelis krūvis, per dažnas mokymasis, gali būti žalingas?",
    time: 3500,
  },
  {
    who: "Ana",
    type: "text",
    text: "Mano brolis skaito daug knygų ir po to blogai jaučiasi…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Na, kartais per didelis krūvis gali sukelti neurozę…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Žinau, keistas žodis „neurozė“. Lyg kažkas iš kitos planetos atskrido ir prisistatė tokiu vardu, o mes tai dabar vadiname galvos skausmu.",
    time: 3500,
  },
  {
    who: "Natalija",
    type: "text",
    text: "Tai neurozė yra galvos skausmas?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, sukelti neurozė – tai pabloginti sveikatą. Nuo per didelio krūvio sutrinka mūsų gebėjimas mąstyti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nors ir kalbama, kad mes savo smegenų neišnaudojam visu 100 procentu, tačiau informaciją mes apdorojame lėtai. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tad nesijaudinkite, jei iš karto negalite atsimint eilėraščio arba pamirštate svarbią datą, kurią perskaitėte prieš kelias minutes. Jums reikia žinoti, kad kiekvienas turi savo mokymosi tempą.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ir negalima tyčiotis iš kitų, kuriems prasčiau sekasi. Visada tam yra priežastis.",
    time: 3500,
  },
  {
    who: "Benediktas",
    type: "text",
    text: "Skaičiau tėvo bibliotekoje, kad tokie žmonės, neturi jokios harmoningos pasaulėžiūros, tai yra rezultatas prasto mokymosi ir etiketo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Benediktai, matau, kad esi apsiskaitęs. Pagirk savo tėvą, kad atrenka tau geras knygas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tikiuosi, kad jūs netapsite tokie žmonės, kuriuos apkalba. Tam, kad tokie nebūtume mums padės kitos dienos pamoka. Mes, manau, šiandien praleidome dieną produktyviai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Viktorija, ar galėtum pamaitinti mūsų vėžliukus akvariume? Nes tuoj pabėgs ieškoti maisto kitur.",
    time: 3500,
  },
  {
    who: "Viktorija",
    type: "text",
    text: "Su mielu noru tą padarysiu.",
    time: 3500,
  },
  {
    who: "Viktorija",
    type: "text",
    text: "Šitas vėžliukas labai mielas, nesu jo prieš tai mačiusi, jo tokios gyvos akys…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Suskamba skambutis į pertrauką. Viktorija padėjo vėžliuką atgal į akvariumą. Klasės durys užsidarė. Pamoka šiandien pasibaigė.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kita tema kitą dieną.",
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
