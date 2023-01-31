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
    text: "Kadaise mažame kaimelyje, įsikūrusiame tankaus miško viduryje, gyveno jaunuolis vardu Džekas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Džekas buvo aistringas skaitytojas ir mėgo leisti dienas, paskendęs geros knygos puslapiuose. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau kaimui augant, didėjo ir knygų paklausa.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kad patenkintų paklausą, vienintelis kaimelio popieriaus fabrikas pradėjo kirsti vis daugiau medžių, iš kurių buvo gaminamas popierius knygoms. Džekas, kuris mylėjo mišką ir visus jo gyventojus, žinojo, kad tai nėra gerai, nes miškui gresia iškirtimo ir išnykimo pavojus. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taigi, jam reikėjo ką nors sugalvoti, kad medžiai būtų apsaugoti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ieškodamas sprendimo būdų Džekas leidosi į kelionę. Norėjo sužinoti, ar yra būdas pagaminti popierių nekertant tiek daug medžių.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jis lankėsi bibliotekose, kalbėjosi su ekspertais ir net keliavo į kitus kaimus pažiūrėti, kaip šie gamina popierių.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ir štai kokie buvo variantai:",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "1. Naujų žemės ūkio atliekų perdirbimo į plaušieną technologijų kūrimas: Vienas iš sprendimų, kaip sumažinti kertamų medžių kiekį, būtų kurti naujas žemės ūkio atliekas, tokias kaip šiaudai, žolė ir net bambukas, celiuliozės technologijas popieriui gaminti. Tai leistų įmonei sumažinti priklausomybę nuo medienos (pagrindinės popieriaus gamybos žaliavos).", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "2. Perdirbto popieriaus naudojimas: Kitas sprendimas - dažniau naudoti perdirbtą popierių. Tai leistų bendrovei sumažinti kertamų medžių kiekį, taip pat sumažinti taršą ir energijos suvartojimą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "3. Sodinti daugiau medžių: Įmonė taip pat galėtų investuoti į miškų atkūrimo projektus, kad galėtų pasodinti daugiau medžių nei iškirto. Tai leistų bendrovei išlaikyti tvarų popieriaus gamybos lygį ir padėtų išsaugoti aplinką.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "4. Investicijos į naujų medžiagų mokslinius tyrimus ir plėtrą: Įmonė taip pat galėtų investuoti į naujų medžiagų, kurios gali būti naudojamos kaip popieriaus pakaitalas, mokslinius tyrimus ir plėtrą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai galėtų būti bioplastikas, elektroninis popierius ir kitos pažangios medžiagos, kurios dar nėra sukurtos. Tai leistų bendrovei sumažinti priklausomybę nuo medienos.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šiuos sprendimus įmonė gali moksliškai išbandyti ir įgyvendinti, daugiausia dėmesio skirdama poveikio aplinkai mažinimui, tvarumo didinimui ir produkto kokybės išlaikymui.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip pat bendrovė gali įvertinti kiekvieno sprendimo įgyvendinamumą ir sąnaudas, kad rastų geriausią problemos sprendimo būdą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po kelių mėnesių trukusių tyrimų, Džekas galiausiai atrado naują popieriaus gamybos būdą. Galima buvo gaminti popierių iš žemės ūkio atliekų, pavyzdžiui, šiaudų ir žolės ar lapų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šia informacija jis pasidalijo su kaimo popieriaus gamykla ir įtikino, kad naujas būdas yra kur kas naudingesnis. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Džeko ryžto ir loginio mąstymo dėka kaimas galėjo ir toliau gaminti knygas nekenkdami miškui ir jo gyventojams. Nuo tos dienos kaimas buvo vadinamas 'Žaliuoju kaimu', o Džekas - didvyriu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Svarbiausia, kad kritinis mąstymas ir loginis požiūris gali padėti rasti tvarų sprendimą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Galite sustoti ir išspręsti užduotis paimdami sąsiūvinį.",
    time: 1500,
  },
  {
    who: "Užduotis",
    type: "text",
    text: "Mokinys nori nusipirkti knygą, kuri kainuoja 10 dolerių. Jei mokinys nori nusipirkti dvi knygas, kiek jos kainuos? Mokinys taip pat nori sužinoti, kiek pinigų jis sutaupys, jei knygos bus parduodamos su 20 % nuolaida.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kitoje žinutėje, bus galimybė pasitikrinti atsakymus.",
    time: 1500,
  },
  {
    who: "Atsakymai:",
    type: "text",
    text: "Dvi knygos kainuos 10 USD x 2 = 20 USD. Taikant 20 % nuolaidą, bendra knygų kaina bus 20 $ - (20 $ x 0,2) = 16 $. Mokinys sutaupys 20 $ - 16 $ = 4 $, jei knygos bus parduotos.",
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Mokinys turi 10 knygų su skirtingu puslapių skaičiumi. Kiekvienos knygos puslapių skaičius yra toks: 100, 120, 140, 150, 160, 170, 180, 190, 200, 220. Koks yra vidutinis puslapių skaičius vienoje knygoje?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kitoje žinutėje, bus galimybė pasitikrinti atsakymus.",
    time: 1500,
  },
  {
    who: "Atsakymai:",
    type: "text",
    text: "Vidutinis puslapių skaičius: (100 + 120 + 140 + 150 + 160 + 170 + 180 + 190 + 200 + 220) / 10 = 165 puslapiai knygoje.",
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
