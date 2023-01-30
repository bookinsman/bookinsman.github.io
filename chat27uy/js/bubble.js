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
    text: "2050 metais, eismas keliuose tapo sudėtingas. Žmonės valandų valandas praleisdavo įstrigę spūstyse, o tai darė neigiamą poveikį jų gyvenimui ir aplinkai. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Grupė jaunų inžinierių ir transporto sektoriaus ekspertų nusprendė imtis veiksmų ir sukurti požeminį kelią. Jie tikėjo, kad taip bus išspręsta eismo problema.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pirmoji problema, su kuria jie susidūrė, buvo požeminio kelio kasimas. Jie svarstė galimybę naudoti tradicinius kasimo metodus, tačiau jie buvo lėti, brangūs bei trukdė ir taip sudėtingam eismui.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Vėliau jie sugalvojo, požeminiam keliui kasti, naudoti tunelių kasimo mašinas (TBM). Šios mašinos buvo greitesnės, efektyvesnės ir mažiau trikdė darbą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Antroji problema, su kuria jie susidūrė - kaip užtikrinti, kad požeminis kelias būtų saugus. Jie svarstė galimybę naudoti tradicinius statybos metodus, tačiau jie buvo brangūs ir užėmė daug laiko.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jie nusprendė naudoti surenkamus tunelio segmentus, kurie būtų montuojami po žeme, taip jie galėjo užtikrinti, kad požeminis kelias bus saugus, o taip pat greičiau pastatytas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Trečioji problema, su kuria jie susidūrė, buvo vanduo, kuris galėjo atsirasti kasimo metu. Jie svarstė galimybę vandenį išpumpuoti siurbliais, tačiau tai būtų brangu ir užimtų daug laiko.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nuspręsta naudoti vadinamąjį grunto įšaldymo metodą, kuris įšaldytų gruntą ir neleistų vandeniui patekti į kasimo vietą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ketvirtoji problema, su kuria jie susidūrė, buvo ventiliacija. Jie svarstė galimybę naudoti tradicines vėdinimo sistemas, tačiau jos buvo brangios ir reikalavo daug priežiūros.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nuspręsta naudoti oro šachtų sistemą, kuri leistų šviežiam orui cirkuliuoti visame požeminiame kelyje.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jaunų inžinierių ir transporto sektoriaus specialistų grupei pavyko įveikti šiuos sunkumus ir užbaigti požeminį kelią, kuris padėjo sumažinti eismo spūstis ir pagerinti žmonių gyvenimo kokybę.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ši istorija moko mus, kad susidūrus su problema svarbu mąstyti kūrybiškai ir apsvarstyti visas galimybes. ",
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Galite sustoti ir išspręsti užduotis paimdami sąsiūvinį",
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Kas yra tunelių kasimo mašina (TBM) ir kokie yra jos privalumai kasant požeminį kelią?",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Kitoje žinutėje bus galimybė pasitikrinti atsakymus",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Tuneliavimo mašina (TBM) - tai mašina, naudojama apskrito skerspjūvio tuneliams per įvairius dirvožemio ir uolienų sluoksnius kasti. Jos yra greitesnės, efektyvesnės ir sukelia mažiau trikdžių nei tradiciniai kasimo būdai. Be to, ji gali tuo pačiu metu kasti ir įrengti tunelio paklotą, todėl sutaupoma laiko ir pinigų.",
    time: 1500,
  },
  {
    who: "Užduotis 2:",
    type: "text",
    text: "Kas yra 'grunto įšaldymas' ir kodėl jis naudojamas tiesiant požeminį kelią?",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Kitoje žinutėje bus galimybė pasitikrinti atsakymus",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Grunto įšaldymas - tai grunto ir uolienų stabilizavimo metodas, taikomas įšaldant gruntą aplink kasimo vietą. Tai neleidžia vandeniui patekti į kasimo vietą ir palengvina požeminio kelio kasimą. Be to, tai saugesnis ir ekonomiškesnis metodas, palyginus su vandens išpumpavimu.",
    time: 1500,
  },
  {
    who: "Užduotis 3:",
    type: "text",
    text: "Kas yra oro šachtų sistema ir kodėl ji naudojama požeminiuose keliuose?",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Kitoje žinutėje bus galimybė pasitikrinti atsakymus",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Oro šachta - tai žemės paviršiuje esanti anga, per kurią šviežias oras cirkuliuoja visame požeminiame kelyje. Ji naudojama siekiant užtikrinti pakankamą požeminio kelio ventiliaciją. Oro šachtos naudojamos kaip alternatyva tradicinėms vėdinimo sistemoms, kurios yra brangios ir reikalauja daug priežiūros. Jos yra ekonomiškas ir veiksmingas būdas užtikrinti požeminiu keliu besinaudojančių žmonių saugumą ir komfortą.",
    time: 1500,
  },
  {
    who: "Užduotis 4:",
    type: "text",
    text: "Požeminio kelio ilgis - 10 km, o tunelio kasimo mašina kasa vidutiniškai 20 metrų per dieną. Kiek dienų reikės visam požeminiam keliui iškasti?",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Kitoje žinutėje bus galimybė pasitikrinti atsakymus",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Požeminis kelias yra 10 km ilgio, o TBM kasa 20 metrų per dieną. Norėdami kilometrus paversti metrais, turime padauginti iš 1000. Taigi 10 km = 10*1000 = 10000 metrų. Norėdami sužinoti, kiek dienų reikės visam požeminiam keliui iškasti, turime visą kelio ilgį padalyti iš TBM greičio.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Todėl 10 000 metrų / 20 metrų per dieną = 500 dienų.",
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
