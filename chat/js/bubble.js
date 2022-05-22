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
    "Įlipęs į autobusą, radau mėgstamiausią laisvą vietą prie lango.",
    0
  ),
  createMessage(
    "",
    "img", "https://lh3.googleusercontent.com/EdHuRKLfm9CPFJmvwke0ilS42FDEqKkxRXR9RlDwIf_6cRsEsWek_KG7Vf5Fd227iFZbJE6fi7vxhOGAoUwLyvD08msAV3hUTgzfXhuW7bouHYAGhQ4Bc0Y01_sejUk_BBIvRkEmWw=w2400",
    1500
  ),
  createMessage("", "text", "Sekmadieniais ji visąlaik tuščia.", 0),
  createMessage(
    "",
    "text",
    "Išvyka prie ežero, kur jaučiuosi laisvas ir nepriklausomas, dažniausiai būna trumpa.",
    0
  ),
  createMessage(
    "",
    "text",
    "Todėl su savim tik sumuštiniai, telefonas ir žinoma gera nuotaika.",
    3500
  ),
  createMessage("Vairtuotojas", "text", "Na ką, važiuojam!", 1500
  ),
  createMessage(
    "",
    "text",
    "Pro langą pradėjo skrieti vaizdai. Bet šiandien langas, nebuvo mano dėmesio centre.",
    3500
  ),
  createMessage(
    "",
    "text",
    "Nugirdau visai šalia savęs, dviejų, arti vienas kito sėdinčių žmonių pokalbį, tai buvo pora. ",
    3500
  ),
  createMessage(
    "",
    "text",
    "O tu paklausyk brangioji, kokia įdomi istorija su manimi nutiko.  ",
    3500
  ),
  createMessage("Mergina", "text", "Kas galėjo būti svarbiau už mane?  ", 3500),
  createMessage(
    "",
    "text",
    "Už Tave? Tikrai niekas, bet Tu tik paklausyk. ",
    3500
  ),
  createMessage(
    "",
    "text",
    "Vakar dieną, atsitiktinai tapau liudininku įdomaus įvykio.",
    3500
  ),
  createMessage("Mergina", "text", "Aš klausau…", 1500),
  createMessage(
    "",
    "text",
    "Atsidūriau erdvioje ir patogioje salėje, o ten visą laiką spindėjo damos. Kiekviename salės taške jautėsi pozityvi energija, pasitikėjimas ir patikimumas. ",
    3500
  ),
  createMessage("Mergina", "text", "Damos?", 3500),
  createMessage(
    "",
    "text",
    "Aš pagalvojau, jog kas turi akis tegul mato! Kas turi ausis tegul klauso!",
    3500
  ),
  createMessage(
    "Mergina",
    "text",
    "Ir Tu tikriausiai viską matei ir viską klausei? ",
    1500
  ),
  createMessage("", "text", "Taip, tiesa.", 3500),
  createMessage(
    "",
    "text",
    "Žinok keisčiausia, jog kaip žaibas iš giedro dangaus salės centre pamačiau ją.",
    3500
  ),
  createMessage(
    "",
    "text",
    "Mergina šiek tiek pašiurpo, jos veidą persmelkė nuostabos kibirkštis. Ji stipriau suspaudė vaikinui ranką. ",
    1500
  ),
  createMessage(
    "",
    "text",
    "Ji buvo nuostabi. Aplink ją buriavosi žmonės. ",
    3500
  ),
  createMessage("", "text", "Tikra ledi, dama, karalienė. ", 3500),
  createMessage(
    "",
    "text",
    "Diplomatiškai įsimylėjau iš pirmo žvilgsnio.",
    3500
  ),
  createMessage("Mergina", "text", "Ką? Kas ji, greit sakyk! ", 3500),
  createMessage(
    "",
    "text",
    "Tai apie ką dabar kalbu, vadinama knyga, mano brangioji.",
    3500
  ),
  createMessage("Mergina", "text", "Kaip, knyga?  ", 3500),
  createMessage(
    "",
    "text",
    "Taip, buvo renginys parduotuvėje knygų klubas, kai atidarė praeivis duris, nesusilaikiau nuo to kvapo, naujos išleistos knygos kvapo.",
    3500
  ),
  createMessage(
    "Mergina",
    "text",
    "Na taip, kažkurie bėgioja paskui sijonus, o Tu pasirinkai knygas… ",
    3500
  ),
  createMessage(
    "",
    "text",
    "Skaitai, jog turėčiau labiau domėtis merginomis?",
    3500
  ),
  createMessage("Mergina", "text", "Ne! Tuoj aš tau… ", 3500),
  createMessage(
    "",
    "text",
    "Aš sustojau kitoje stotelėje, mane kažkaip sužavėjo jaunuolio pasakojimas.",
    3500
  ),
  createMessage(
    "",
    "text",
    "Pagal koordinatės, knygų klubas turėtu būti visai šalia, gaila aš taip gerai nejaučiu knygų kvapo, kaip tas vaikinas.",
    3500
  ),
  createMessage(
    "",
    "img",
    "https://lh3.googleusercontent.com/Vod4sjqQUtxJIuunmdjX0_H92uLjp7CQ6i9fnLZz4HxAftpcybygNQUatNWYBv_lGPBL8DfOXgGwV3Ea6T7pDlkJsmagSWuWcIMvfRKeno1Ol2QYshDNnKY4HRkiU-gUL98NBqVnEw=w2400",
    1500
  ),
  createMessage(
    "Pardavėja",
    "text",
    "Laba diena, prašome užeiti, nesidrovėkite.",
    3500
  ),
  createMessage(
    "",
    "text",
    "Norėčiau įsigyti šiuo metu populiariausią knygą.",
    3500
  ),
  createMessage(
    "Pardavėja",
    "text",
    "Tai būtų, “Ten, kur gieda vėžiai” Delia Owens.",
    3500
  ),
  createMessage(
    "",
    "img",
    "https://lh3.googleusercontent.com/VFFUVkIQ4If2yBsmmKpRzahK2z6gzDf_G5Ow33PXZ2Yn_CBzRfdf58z0lMO8xiByEffzxj0niE1WDUuoADfB5oZaxJC_UzythbOnJKCMhKq0t1Et7IickGiGWgNnF01n0CW7O9XUyA=w2400",
    1500
  ),
  createMessage(
    "Pardavėja",
    "text",
    "Pasakojimas apie apleistą ir izoliuotą nuo visų merginą, vardu Kaja, kuri išmoksta pragyventi iš to, ką siūlo motina gamta.",
    3500
  ),
  createMessage("", "text", "Visai skamba įdomiai.", 3500),
  createMessage(
    "Pardavėja",
    "text",
    "Taip, liko vos keli vienetai, ją perka kaip išprotėję, jums įdėti į paprastą maišelį ar tai būtų kam nors dovana?",
    3500
  ),
  createMessage("", "text", "Prašau į paprastą maišelį.", 3500),
  createMessage("Pardavėja", "text", "Geros Jums dienos ir skaitymo.", 3500),
  createMessage(
    "",
    "text",
    "Tikriausiai šiandien išvyka mano palauks, nelabai mėgstu skaityt knygas gamtoje, reikia grįžti namo išsijungti visas priemones, kurios trukdys.",
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
