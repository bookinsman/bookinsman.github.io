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
    text: "Pasigrožėjusi savimi veidrodyje Gabriela pabučiavo mamą ir išėjo iš namų. Kelias į mokyklą truko ne ilgiau nei 15 minučių, kurias mergina įveikė lengvu bėgimu.  Pamačiusi  bendraklasį kramtant mėsainį, paklausė:",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Dovydai, kada tu jau būsi sotus?",
    time: 1500,
  },
  {
    who: "Dovydas",
    type: "text",
    text: "Visų pirma, labas! Antra, ne aš, o mano kūnas reikalauja kalorijų. Trečia, sutarėme, kad būsi mano trenerė ir padėsi sulieknėti visais įmanomais būdais.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O pažiūrėk į Tomą! Vėjas tuoj jį nupūs.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tomai, paimk pavyzdį iš Dovydo, jis jau valgo pirmąjį mėsainį.",
    time: 1500,
  },
  {
    who: "Tomas",
    type: "text",
    text: "Kiek kartų žadėjai man sudaryti sporto programą!?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tradicinė diena mokykloje. Po paskutinės pamokos Gabriela aplink save subūrė bendraklasius, pasakojo, kaip išlaikyti formą ir kovoti su antsvoriu. Dovydas baigė valgyti trečią mėsainį, o Tomas sėdėjo šone ir snūduriavo apsimesdamas, kad klausosi.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Lažinamės, kad po mėnesio jie atrodys, kaip šitie vyrai ant viršelio... .",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš padarysiu iš jų raumenų kalnus, juokauju, ne raumenų, bet gražią figūrą. Tarė Gabriela Martai, linktelėjusi Dovydui ir Tomui.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Marta buvo mokyklos gražuolė, populiari tarp jaunimo ir buvo laikoma vyriško grožio žinove. Dovydas ir Tomas nė kartą rodė jai dėmesio ženklus. Tačiau Marta nereagavo.",
    time: 1500,
  },
  {
    who: "Marta",
    type: "text",
    text: "Juos abu, kurie į mus žiūri?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Marta skeptiškai nusišypsojo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar lažinamės, kad taip?",
    time: 1500,
  },
  {
    who: "Marta",
    type: "text",
    text: "Žinoma, lažinamės…",
    time: 1500,
  },
  {
    who: "Marta",
    type: "text",
    text: "Ei tu, storas ir lieknas! Gražuolė kreipėsi į bendraklasius.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kišdamas paskutinį mėsainio gabalėlį į burną Dovydas pastūmė Tomą, kad jie prieitų prie merginų ir fiksuotų lažybas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po minutės atsisveikindami klasės draugai išsiskirstė namo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Na, tavo svajonė išsipildė, Dovydai ir Tomai. Pirmoji treniruotė šį vakarą.",
    time: 1500,
  },
  {
    who: "Dovydas",
    type: "text",
    text: "Ne, pradėsime pirmadienį, aš dabar labai tingiu, esu pavargęs man reikia miego.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jokių pirmadienių, mano reputacija yra svarbesnė! Aš susilažinau ir nesiruošiu pralaimėti dėl jūsų tinginystės!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Išsigandę bendraklasiai tylėdami žiūrėjo vienas į kitą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar nenusibodo tau rodyti dėmesį Martai, kuri į tave visiškai nekreipia dėmesio dėl tavo pilvo. Matei, kokie aplink ją pasitempę vaikinai vaikšto?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O tu, Tomai, ko juokiesi, rašai jai, poeziją deklamuoji, bet esi plonas kaip šakalys. Nuolat susikūprinęs vaikštai, jokio pasitikėjimo savimi, net kai jai eilėraštį deklamuoji žiūri į žemę, o ne į akis…",
    time: 1500,
  },
  {
    who: "Tomas",
    type: "text",
    text: "Na… na… na…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kas? Ar nenorite tapti patraukliais ir savimi pasitikinčiais?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš turiu ir kitų svarbių reikalų. Geriau dirbsiu savo darbus, nei švaistysiu laiką dviem svajotojams, kurie mano, jog nereikia įdėti niekur pastangų, o viskas išeina savaime.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žvelgdami vienas į kitą jaunuoliai tiesiogine prasme griebė Gabrielos rankas.",
    time: 1500,
  },
  {
    who: "Vaikinai",
    type: "text",
    text: "Mes sutinkame!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šiandien 19:00 susitinkame mokyklos stadione ir nevėluokite…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Vakare Gabriela prabėgo porą ratų stadione. Įdomu, ar vaikinai pasirodys. O jeigu neatvyks, įdomu, kokius pasiaiškinimus sugalvos.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Viena viltis dėl Martos patrauklumo. Vien dėl jos dėmesio daugelis idiotų sutinka su viskuo. Ir šie du – ne išimtis. Lygiai 19 valandą Dovydas pasirodė stadione su tradiciniu mėsainiu, o kitoje stadiono pusėje – liesa Tomo figūra.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Dovydai, tau likus valandai iki treniruotes nieko nereikia valgyt, o tau Tomai atvirkščiai…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tiek to. Pradedame nuo apšilimo. Kartojame viską, ką darysiu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po šitų žodžių mergina pradėjo mojuot rankomis, pasviro į vieną pusę, paskui į kitą, pritūpė paskui pašoko, nekreipdama dėmesio į neapsukrius jaunuolių veiksmus.",
    time: 1500,
  },
  {
    who: "Dovydas",
    type: "text",
    text: "Aš taip negaliu! Mano kūnas ne toks ištreniruotas…",
    time: 1500,
  },
  {
    who: "Tomas",
    type: "text",
    text: "Man reikia prigulti, nes tuoj nualpsiu..",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ką jūs galvojote? Treniruotė nėra pasivaikščiojimas parke su saldžiaisiais gėrimais. Po apšilimo bus bėgimas. Nebūkite tingūs!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po šitų žodžių ji paglostė Dovydui per petį ir padėjo Tomui atsikelti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Gabriela bėgo atsisukusi į juos, nugara į priekį, ir kalbėjo apie naują gyvenimą, kuris jų laukia, kai jie taps patraukliais, atletiškais vaikinais. Kalba apie Martą vaikinus motyvavo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Treniruotė baigėsi po dviejų valandų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar žinojai, kad „išbėgiojai“ tik pusę mėsainio?",
    time: 1500,
  },
  {
    who: "Dovydas",
    type: "text",
    text: "Tik?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, tad nenoriu daugiau tavęs matyti su mėsainiu, ar supratai?",
    time: 1500,
  },
  {
    who: "Dovydas",
    type: "text",
    text: "Taip…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O Tu, Tomai, nuo šiol valgai griežtai laikydamasis mitybos plano. Supratai?",
    time: 1500,
  },
  {
    who: "Tomas",
    type: "text",
    text: "Tomas linktelėjo atsakydamas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kita treniruotė poryt 6:30 val.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Rytinė treniruotė buvo trumpa, ją sudarė intensyvus apšilimas ir išsamios mitybos bei gyvenimo būdo instrukcijos.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jaunuoliai į mokyklą atėjo pavargę, bet pakylėti. Net Marta pastebėjo pirmą kartą Dovydą be mėsainio.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Vakarinės treniruotės tapo reguliarios. Kaskart Gabriela didino tempą, o vaikinai stengėsi neatsilikti nuo jos. Po savaitės ji pirmą kartą atvedė vaikinus į sporto salę.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pats laikas pradėti auginti raumenų masę. Nuo kitos dienos valgome ir treniruojamės griežtai laikydamiesi plano.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Gabrielė sukūrė mitybos planą pagal svorį, ūgį, treniruočių intensyvumą, kiek kam reikia suvalgyt baltymų, angliavandenių ir riebalų, be to nepamiršdama skaičiuoti kalorijas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Praėjo jau keletą savaičių..",
    time: 1500,
  },
  {
    who: "Marta",
    type: "text",
    text: "Pažiūrėkite, kaip Tomas atrodo, lyg koks teniso žaidėjas Djokovičius, dar tas naujas kirpimas…",
    time: 1500,
  },
  {
    who: "Bendraklasė",
    type: "text",
    text: "Bet ir Dovydas neatsilieka, išmainė mėsainį į proteininį kokteilį. Net raumenukai matosi pro marškinius…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "„Djokovičius“ prie lentos – išgirdusi merginų dialogą pasakė mokytoja, turėdama galvoje Tomą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tik neapsimetinėk, kad nesupratai, kad su tavimi kalba.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Klasės draugai kikeno.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Daug laiko kartu praleidę Gabriela, Dovydas ir Tomas susidraugavo. Mergina nuolat drąsino jaunus žmones, gyrė už rezultatus ir priekaištavo, kai šie tingėjo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mėnuo prabėgo kaip viena diena. Vaikai nesiskirstė, laukė, kol išsispręs Gabrielos ir Martos ginčas.",
    time: 1500,
  },
  {
    who: "Marta",
    type: "text",
    text: "Na, drauge. Tu laimėjai!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Prisipažino Marta, laikydama Tomą už rankos…",
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
