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
    text: "Aš tikrai žinau, kad ta vieta turi būti kažkur netoli...",
    time: 0,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Bet mes jau einame visą valandą. Ką pasakys mūsų būrio kapitonas, kad jo neklausom, pavogėme iš jo žemėlapį ir išėjome visai vieni.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai tu nori grįžt? ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Maniau tu manęs nepaliksi, Sandra?",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Taip, nepaliksiu.",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Tik nemaniau, kad nakvoti reikės miške, čia baisu…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nebijok, pameni, ką sakė vadas, čia nėra plėšrių gyvūnų. Duok savo kuprinę, aš išsitrauksiu miegmaišį, matau turime tik vieną.",
    time: 3500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "O gal tai ir buvo tavo planas, kad kartu galėtume miegoti viename miegmaišyje? Nes jeigu tai tiesa, mūsų draugystė nutrūks.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Baik nusikalbėt. Laikas užkurti laužą kol visai dar nesutemo.",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Kaip matau, tau visai nepavyksta laužo užkurti. Tik pažiūrėk, koks stiprus vėjas ir kokie tamsūs debesys! Ką tik pajaučiau lietaus lašus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, tu teisi, ugnies mes čia neužkursime.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Porą kartų stipriai sužaibavo ir prasidėjo tikra liūtis, dangus aptemo.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Bėgam, bėgam, greičiau, Sandra!",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Giedriau, nepaleisk mano rankos, aš nieko nematau, toks stiprus vėjas!",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Matau uolą, bėgame į vidų.",
    time: 1500,
  }, 
  {
    who: "Sandra",
    type: "text",
    text: "Ar ten tikrai saugu?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Na, tokioje situacijoje šis klausimas netinkamas. Mums reikia kuo greičiau ten pasislėpti. Vanduo nuo olos ritasi žemyn. Tuoj mus pasiglemš purvas, susimaišęs su vandeniu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Giedrius ir Sandra iš visų jėgų stengėsi pasiekti uolą. Šoko per medžių šakas, bėgo prieš vėją. Pasiekę uolą jautėsi labai pavargę. Užmigo vienas kito glėbyje.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Rytas, saulės spinduliai palieti Giedriaus veidą. Jis prabudo. Pasisuko į šoną ir pastebėjo, kaip saldžiai miega Sandra. Nenorėdamas jos žadinti tyliai atsikėlė, bet netyčia užkliuvo už šakos, kuri sudrumstė Sandros miegą.",
    time: 1500,
  },  
  {
    who: "Sandra",
    type: "text",
    text: "Ką, kur mes?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Na, mes esame sveiki, gyvi ir šiandien teks ieškoti kelio namo, manau, dabar būrio vadas tikrai nebus patenkintas, tu buvai teisi – nereikėjo mums eiti vieniems.",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Taip, tačiau mes tą jau padarėme. Eime, pažiūrėsime kas liko po audros.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Saulė jau buvo pakilus ir savo spinduliais šildė viską, kas buvo gyvą. Sandra ir Giedrius nustebo pamatę nedidelį žmogų prieš juos. Jis intensyviai mojavo savo rankute ir šokinėjo nenustygdamas vietoje.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kas Tu toks būsi?",
    time: 3500,
  },
  {
    who: "Gardas",
    type: "text",
    text: "Aš saugau šitą vietą. Ar tik nebūsite pasiklydę? Čia retai kas užsuka.",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Taip, prasidėjo audra ir teko slėptis uoloje. Bėgdami nepastebėjome, kad čia toks gražus, išpuoselėtas ir prižiūrėtas sodas.",
    time: 3500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Kokie saldūs atrodo ir prinokę obuoliai, o aš tokia alkana, ar galima būtų paragauti?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai žinoma, kodėl gi ne. Pirmiausia, nusiskinkite obuolį nuo obels.",
    time: 3500,
  },
  {
    who: "Giedrius",
    type: "text",
    text: "Kopėčių nematau. Į viršų užlipti nepavyks.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Teisingai. Šiame sode galioja viena taisyklė.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Obuoliai patys nukris ant žemės,  tereikia išspręsti jums 3 pateiktus uždavinius.",
    time: 3500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Jeigu jau kitos išeities nėra vadinasi teks spręsti užduotis, o galėsite gal parodyt kelią namo?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Žinoma, kad taip, šitas miškas yra mano namai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Na ką, galime pradėti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taigi, yra dvi dėžutės obuolių, kiekvienoje po 10 obuoliukų. Iš pirmos dėžutės kažkas paėmė kelis obuolius, o iš antrosios – tiek, kiek liko pirmoje.",
    time: 1500,
  },

  createQuiz("Kiek obuolių liko abiejose dėžutėse?"
  , ['<div><input type="radio" name="q1" id="opt1"><label for="opt1">Ar tai bus - 12 obuolių</label></div>',
      '<div><input type="radio" name="q1" id="opt2"><label for="opt2">Ar tai bus - 10 obuolių</label></div>',
      '<div><input type="radio" name="q1" id="opt3"><label for="opt3">Ar tai bus - 8 obuoliai</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas: 10 obuolių. Dviejose dėžutėse yra po 10 obuolių, iš viso 20. Jei iš vienos dėžutės paimtumėme 5 obuolius. Iš antros taip pat imsime 5. Iš viso 20-(5+5)=10.", "opt2"),

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
    type: "text",
    text: "Sandra ir Giedrius pasiemė pagaliukus nuo žemės ir pradėjo braižyt schemas, tai atimdavo obuolius tai pridėdavo.",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Atsakymas – 10.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Matau mėgstate užduotis su skaičiais, kita užduotis bus šiek tiek sunkesnė.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pagalvokite ir tikrai ją išspręsite.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: " Štai yra skaičių seka: 12, 11, 13, 12, 14, 13…",
    time: 1500,
  },

  createQuiz("Koks būtų kitas skaičius?"
  , ['<div><input type="radio" name="q4" id="opt11"><label for="opt11">Ar tai bus - 10</label></div>',
      '<div><input type="radio" name="q4" id="opt12"><label for="opt12">Ar tai bus - 16</label></div>',
      '<div><input type="radio" name="q4" id="opt13"><label for="opt13">Ar tai bus - 15</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas:15. Iš pirmo skaičiaus atimame 1, kitam pridedame  2. Tai 12-1=11, 11+2=13, 13-1-12, 12+2=14 14-1=13 13+2=15.(15)", "opt13"),
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
    who: "",
    type: "text",
    text: "Esate šaunuoliai. Štai jums paskutinioji užduotis.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kitam kartui reikės sudėtingesnias užduotis paruošti, vaikai dabar tampa vis protingesni",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Mums tiesiog patinka mokytis.",
    time: 1500,
  },
  {
    who: "Giedrius",
    type: "text",
    text: "Aš ir jau nekantriai laukiu...",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kuriam mokslininkui sėdint prie medžio nukrito obuolys ant galvos?",
    time: 3500,
  },


  createQuiz("Atsakymo variantai:"
  , ['<div><input type="radio" name="q5" id="opt14"><label for="opt14">Ar tai bus - Izaokas Niutonas</label></div>',
      '<div><input type="radio" name="q5" id="opt15"><label for="opt15">Ar tai bus - Tomas Edisonas</label></div>',
      '<div><input type="radio" name="q5" id="opt16"><label for="opt16">Ar tai bus - Einšteinas</label></div>',
      '<div><input type="radio" name="q5" id="opt17"><label for="opt17">Ar tai bus - Loanardas Da Vinči</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas, A. Niutonui.", "opt14"),

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
    who: "Giedrius",
    type: "text",
    text: "Šitas lengvas klausimas! Žinoma, kad variantas A. Niutonui.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Visiškai teisingai. Jis sėdėjo po šituo medžiu ir....",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "„Po pietų oras maloniai sušilo, tad mes išėjome į sodą ir gėrėme arbatą po obels metamu šešėliu. Niutonas man pasakė, jog ir toliau yra toje pačioje vietoje, kaip ir anksčiau – gravitacija vis dar nepalieka minčių ramybėje. Jis buvo giliai susimąstęs, kuomet staiga nuo šakos nukrito obuolys. „Kodėl obuoliai visada krenta statmenai į žemę“ – pagalvojo jis“.",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Norite pasakyt, kad Jūs pažinojote Niutoną?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš, vaikeli, daug ką pažinojau ir daug ką regėjau. Žiūrėkite, nuo obels nukrito jūsų obuoliukai, jie nepaprasti, tai išminties obuoliukai, valgykite juos ir tapsite protingi.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Giedrius ir Sandra daugiau nieko nespėjo sužinoti, jų draugas Gardas paliko juos mėgautis obuoliais.",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Kokie skanūs obuoliai!",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Labai! O kur mūsų draugas? Kaip mes rasime kelią namo?",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Jis mus apgavo? O jeigu ir obuolių valgyti negalima?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Man jau skauda pilvą, turbūt karščiuoju.",
    time: 3500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Aš taip pat. Bet gal pilvą skauda, nes nuo vakar nieko nevalgėm?",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Bandysime patys rasti kelią namo. Prisiminsime vado pamokas. Paduok žemėlapį.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kaip gerai, kad pavyko jį išsaugoti!",
    time: 3500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Matau, kad mums reikia keliauti į šiaurę. Reikia rasti štai čia pavaizduotą upelį, kuris veda tiesiai į mūsų stovyklavietę.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, bet kaip sužinoti į kurią pusę dabar eiti?",
    time: 3500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Prisimink mokymus. Mums aiškino, kad daugelio medžių žievė šiaurinėje pusėje stambesnė.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Atrodo, kad visi medžiai vienodi.",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Panašu, kaip taip. Nematau nei samanų, nei skruzdėlyno, kuris padėtų mus susiorientuoji.",
    time: 3500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Giedriau, o kas gi ant rankos?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Laikrodis, ir ką? ",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Nusiimk ir padėk jį ant lygaus paviršiaus, o rodyklę, rodančią valandas, nukreipk į Saulę. Centras, tarp valandinės rodyklės ir 12 valandos, žymės mums šiaurės-pietų skryptį.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Vadinasi, mums eit ten.",
    time: 1500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Tikrai taip.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Štai ir priėjome upelį, nurodytą žemėlapyje.",
    time: 3500,
  },
  {
    who: "Sandra",
    type: "text",
    text: "Žiūrėk, ar matai trobelę ir dūmus?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Argi ten ne mūsų stovykla?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Sandra pakštelėjo į Giedriaus skruostą ir jiedu džiaugsmingai nubėgo į stovyklavietę.",
    time: 3500,
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
