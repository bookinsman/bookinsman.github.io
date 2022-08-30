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
    text: "Įlipęs į autobusą, radau mėgstamiausią laisvą vietą prie lango.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Sekmadieniais ji visąlaik tuščia.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Išvyka prie ežero, kur jaučiuosi laisvas ir nepriklausomas, dažniausiai būna trumpa.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Todėl su savim tik sumuštiniai, telefonas ir žinoma gera nuotaika.",
    time: 3500,
  },
  { who: "Vairtuotojas", type: "text", text: "Na ką, važiuojam!", time: 1500 },
  {
    who: "Vairtuotojas",
    type: "img",
    text: "https://i.pinimg.com/originals/11/03/fc/1103fc76b82d5b29e66fddffbab6a84c.jpg",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pro langą pradėjo skrieti vaizdai. Bet šiandien langas, nebuvo mano dėmesio centre.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nugirdau visai šalia savęs, dviejų, arti vienas kito sėdinčių žmonių pokalbį, tai buvo pora. ",
    time: 3500,
  },
  {
    who: "",
    type: "img",
    text: "https://media1.popsugar-assets.com/files/thumbor/dLc8-rDFJRbZYlhpqH29Qh2mgw4/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/25/699/n/1922283/06adea33772b2923_MCDONUP_EC176/i/Once-Upon-Time-Hollywood-Movie-Posters.jpg",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O tu paklausyk brangioji, kokia įdomi istorija su manimi nutiko.  ",
    time: 3500,
  },
  {
    who: "Mergina",
    type: "text",
    text: "Kas galėjo būti svarbiau už mane?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Už Tave? Tikrai niekas, bet Tu tik paklausyk. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Vakar dieną, atsitiktinai tapau liudininku įdomaus įvykio.",
    time: 3500,
  },
  {
    who: "Mergina",
    type: "text",
    text: "Aš klausau…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Atsidūriau erdvioje ir patogioje salėje, o ten visą laiką spindėjo damos. Kiekviename salės taške jautėsi pozityvi energija, pasitikėjimas ir patikimumas. ",
    time: 3500,
  },
  {
    who: "Mergina",
    type: "text",
    text: "Damos?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Aš pagalvojau, jog kas turi akis tegul mato! Kas turi ausis tegul klauso!",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ir Tu tikriausiai viską matei ir viską klausei? ",
    time: 1500,
  },
  { who: "", type: "text", text: "Taip, tiesa.", time: 3500 },
  {
    who: "",
    type: "text",
    text: "Žinok keisčiausia, jog kaip žaibas iš giedro dangaus salės centre pamačiau ją.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Mergina šiek tiek pašiurpo, jos veidą persmelkė nuostabos kibirkštis. Ji stipriau suspaudė vaikinui ranką. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji buvo nuostabi. Aplink ją buriavosi žmonės. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tikra ledi, dama, karalienė. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Diplomatiškai įsimylėjau iš pirmo žvilgsnio.",
    time: 3500,
  },
  {
    who: "Mergina",
    type: "text",
    text: "Ką? Kas ji, greit sakyk! ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tai apie ką dabar kalbu, vadinama knyga, mano brangioji.",
    time: 3500,
  },
  {
    who: "Mergina",
    type: "text",
    text: "Kaip, knyga?  ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, buvo renginys parduotuvėje knygų klubas, kai atidarė praeivis duris, nesusilaikiau nuo to kvapo, naujos išleistos knygos kvapo.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Na taip, kažkurie bėgioja paskui sijonus, o Tu pasirinkai knygas… ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Skaitai, jog turėčiau labiau domėtis merginomis?",
    time: 3500,
  },
  {
    who: "Mergina",
    type: "text",
    text: "Ne! Tuoj aš tau… ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Aš sustojau kitoje stotelėje, mane kažkaip sužavėjo jaunuolio pasakojimas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pagal koordinatės, knygų klubas turėtu būti visai šalia, gaila aš taip gerai nejaučiu knygų kvapo, kaip tas vaikinas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Laba diena, prašome užeiti, nesidrovėkite.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Norėčiau įsigyti šiuo metu populiariausią knygą.",
    time: 3500,
  },
  {
    who: "Pardavėja",
    type: "text",
    text: "Tai būtų, “Ten, kur gieda vėžiai” Delia Owens.",
    time: 3500,
  },
  {
    who: "Pardavėja",
    type: "text",
    text: "Pasakojimas apie apleistą ir izoliuotą nuo visų merginą, vardu Kaja, kuri išmoksta pragyventi iš to, ką siūlo motina gamta.",
    time: 3500,
  },
  { who: "", type: "text", text: "Visai skamba įdomiai.", time: 3500 },
  {
    who: "Pardavėja",
    type: "text",
    text: "Taip, liko vos keli vienetai, ją perka kaip išprotėję, jums įdėti į paprastą maišelį ar tai būtų kam nors dovana?",
    time: 3500,
  },
  { who: "", type: "text", text: "Prašau į paprastą maišelį.", time: 3500 },
  {
    who: "Pardavėja",
    type: "text",
    text: "Geros Jums dienos ir skaitymo.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tikriausiai šiandien išvyka mano palauks, nelabai mėgstu skaityt knygas gamtoje, reikia grįžti namo išsijungti visas priemones, kurios trukdys.",
    time: 3500,
  },
  { who: "", type: "text", text: "Gero man skaitymo", time: 3500 },
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
