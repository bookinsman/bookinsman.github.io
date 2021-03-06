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

function createMessage(who, type, text, time) {
  var message = {
    who,
    type,
    text,
    time,
  };
  // message.who = who;
  // message.text = text;
  // message.time = time;

  return message;
}

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
  createMessage(
    "",
    "text",
    "??lip??s ?? autobus??, radau m??gstamiausi?? laisv?? viet?? prie lango.",
    0
  ),
  createMessage(
    "",
    "img", "https://lh3.googleusercontent.com/EdHuRKLfm9CPFJmvwke0ilS42FDEqKkxRXR9RlDwIf_6cRsEsWek_KG7Vf5Fd227iFZbJE6fi7vxhOGAoUwLyvD08msAV3hUTgzfXhuW7bouHYAGhQ4Bc0Y01_sejUk_BBIvRkEmWw=w2400",
    1500
  ),
  createMessage("", "text", "Sekmadieniais ji vis??laik tu????ia.", 0),
  createMessage(
    "",
    "text",
    "I??vyka prie e??ero, kur jau??iuosi laisvas ir nepriklausomas, da??niausiai b??na trumpa.",
    0
  ),
  createMessage(
    "",
    "text",
    "Tod??l su savim tik sumu??tiniai, telefonas ir ??inoma gera nuotaika.",
    3500
  ),
  createMessage("Vairtuotojas", "text", "Na k??, va??iuojam!", 1500
  ),
  createMessage(
    "",
    "text",
    "Pro lang?? prad??jo skrieti vaizdai. Bet ??iandien langas, nebuvo mano d??mesio centre.",
    3500
  ),
  createMessage(
    "",
    "text",
    "Nugirdau visai ??alia sav??s, dviej??, arti vienas kito s??din??i?? ??moni?? pokalb??, tai buvo pora. ",
    3500
  ),
  createMessage(
    "",
    "text",
    "O tu paklausyk brangioji, kokia ??domi istorija su manimi nutiko.?? ",
    3500
  ),
  createMessage("Mergina", "text", "Kas gal??jo b??ti svarbiau u?? mane??? ", 3500),
  createMessage(
    "",
    "text",
    "U?? Tave? Tikrai niekas, bet Tu tik paklausyk. ",
    3500
  ),
  createMessage(
    "",
    "text",
    "Vakar dien??, atsitiktinai tapau liudininku ??domaus ??vykio.",
    3500
  ),
  createMessage("Mergina", "text", "A?? klausau???", 1500),
  createMessage(
    "",
    "text",
    "Atsid??riau erdvioje ir patogioje sal??je, o ten vis?? laik?? spind??jo damos. Kiekviename sal??s ta??ke jaut??si pozityvi energija, pasitik??jimas ir patikimumas. ",
    3500
  ),
  createMessage("Mergina", "text", "Damos?", 3500),
  createMessage(
    "",
    "text",
    "A?? pagalvojau, jog kas turi akis tegul mato! Kas turi ausis tegul klauso!",
    3500
  ),
  createMessage(
    "Mergina",
    "text",
    "Ir Tu tikriausiai visk?? matei ir visk?? klausei? ",
    1500
  ),
  createMessage("", "text", "Taip, tiesa.", 3500),
  createMessage(
    "",
    "text",
    "??inok keis??iausia, jog kaip ??aibas i?? giedro dangaus sal??s centre pama??iau j??.",
    3500
  ),
  createMessage(
    "",
    "text",
    "Mergina ??iek tiek pa??iurpo, jos veid?? persmelk?? nuostabos kibirk??tis. Ji stipriau suspaud?? vaikinui rank??. ",
    1500
  ),
  createMessage(
    "",
    "text",
    "Ji buvo nuostabi. Aplink j?? buriavosi ??mon??s. ",
    3500
  ),
  createMessage("", "text", "Tikra ledi, dama, karalien??. ", 3500),
  createMessage(
    "",
    "text",
    "Diplomati??kai ??simyl??jau i?? pirmo ??vilgsnio.",
    3500
  ),
  createMessage("Mergina", "text", "K??? Kas ji, greit sakyk! ", 3500),
  createMessage(
    "",
    "text",
    "Tai apie k?? dabar kalbu, vadinama knyga, mano brangioji.",
    3500
  ),
  createMessage("Mergina", "text", "Kaip, knyga?  ", 3500),
  createMessage(
    "",
    "text",
    "Taip, buvo renginys parduotuv??je knyg?? klubas, kai atidar?? praeivis duris, nesusilaikiau nuo to kvapo, naujos i??leistos knygos kvapo.",
    3500
  ),
  createMessage(
    "Mergina",
    "text",
    "Na taip, ka??kurie b??gioja paskui sijonus, o Tu pasirinkai knygas??? ",
    3500
  ),
  createMessage(
    "",
    "text",
    "Skaitai, jog tur????iau labiau dom??tis merginomis?",
    3500
  ),
  createMessage("Mergina", "text", "Ne! Tuoj a?? tau??? ", 3500),
  createMessage(
    "",
    "text",
    "A?? sustojau kitoje stotel??je, mane ka??kaip su??av??jo jaunuolio pasakojimas.",
    3500
  ),
  createMessage(
    "",
    "text",
    "Pagal koordinat??s, knyg?? klubas tur??tu b??ti visai ??alia, gaila a?? taip gerai nejau??iu knyg?? kvapo, kaip tas vaikinas.",
    3500
  ),
  createMessage(
    "",
    "img",
    "https://lh3.googleusercontent.com/Vod4sjqQUtxJIuunmdjX0_H92uLjp7CQ6i9fnLZz4HxAftpcybygNQUatNWYBv_lGPBL8DfOXgGwV3Ea6T7pDlkJsmagSWuWcIMvfRKeno1Ol2QYshDNnKY4HRkiU-gUL98NBqVnEw=w2400",
    1500
  ),
  createMessage(
    "Pardav??ja",
    "text",
    "Laba diena, pra??ome u??eiti, nesidrov??kite.",
    3500
  ),
  createMessage(
    "",
    "text",
    "Nor????iau ??sigyti ??iuo metu populiariausi?? knyg??.",
    3500
  ),
  createMessage(
    "Pardav??ja",
    "text",
    "Tai b??t??, ???Ten, kur gieda v????iai??? Delia Owens.",
    3500
  ),
  createMessage(
    "",
    "img",
    "https://lh3.googleusercontent.com/VFFUVkIQ4If2yBsmmKpRzahK2z6gzDf_G5Ow33PXZ2Yn_CBzRfdf58z0lMO8xiByEffzxj0niE1WDUuoADfB5oZaxJC_UzythbOnJKCMhKq0t1Et7IickGiGWgNnF01n0CW7O9XUyA=w2400",
    1500
  ),
  createMessage(
    "Pardav??ja",
    "text",
    "Pasakojimas apie apleist?? ir izoliuot?? nuo vis?? mergin??, vardu Kaja, kuri i??moksta pragyventi i?? to, k?? si??lo motina gamta.",
    3500
  ),
  createMessage("", "text", "Visai skamba ??domiai.", 3500),
  createMessage(
    "Pardav??ja",
    "text",
    "Taip, liko vos keli vienetai, j?? perka kaip i??prot??j??, jums ??d??ti ?? paprast?? mai??el?? ar tai b??t?? kam nors dovana?",
    3500
  ),
  createMessage("", "text", "Pra??au ?? paprast?? mai??el??.", 3500),
  createMessage("Pardav??ja", "text", "Geros Jums dienos ir skaitymo.", 3500),
  createMessage(
    "",
    "text",
    "Tikriausiai ??iandien i??vyka mano palauks, nelabai m??gstu skaityt knygas gamtoje, reikia gr????ti namo i??sijungti visas priemones, kurios trukdys.",
    3500
  ),
  createMessage("", "text", "Gero man skaitymo", 3500),
];

let totalMessages = messages.length;
let showedMessages = 0;
let percentage = 0;

$("body").click(function () {
  if (totalMessages != showedMessages) {
    let msg = messages.shift();
    document.getElementById("welcome").style.display = "none";
    if (!isQuiz) {
      if (numberOfMessages > maxMessageCount)
        elem = $(".msg-container:first").first().remove();
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
