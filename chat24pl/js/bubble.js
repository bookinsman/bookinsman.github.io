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
    text: "Kartą gyveno jauna mergaitė vardu Sandra. Sandra naudojo makiažo priemones natūraliam grožiui pabrėžti ir pasitikėjimui savimi padidinti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau laikui bėgant ji pastebėjo, kad jos oda vis labiau sausėja ir darosi spuoguota.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji išbandė įvairias odos priežiūros priemones ir procedūras, tačiau niekas nepadėjo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jausdamasi įsitempusi ir nusivylusi, Sandra nusprendė atidžiau pažvelgti į savo naudojamas makiažo priemones. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji perskaitė ant etikečių nurodytas sudedamąsias dalis ir internete pasidomėjo apie galimas spuogų atsiradimo priežastis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Atlikusi tam tikrą tyrimą Sandra nustatė, kad kai kurios makiažo priemonių sudedamosios dalys užkemša poras, sukelia uždegimą ir skatina spuogų atsiradimą. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šis atradimas ją sukrėtė ir nuliūdino, nes ji visada tikėjo, kad makiažas turi padėti jai geriau jaustis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Norėdama rasti sprendimą, Sandra pradėjo eksperimentuoti su įvairiomis makiažo priemonėmis, kuriose nėra poras užkemšančių ingredientų. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Be to, ji pradėjo daugiau dėmesio kreipti į makiažo naudojimo rutiną. Sandra pradėjo vakare kruopščiai valyti makiažą ir reguliariai šveisti odą.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jos nuostabai, oda pagerėjo, o spuogai ėmė nykti.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Sandra jautėsi pakylėta, nes žinojo, kad, pasitelkusi savo kritinį mąstymą ir pastabumą, rado problemos sprendimą.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nuo tos dienos Ji atidžiau rinkosi makiažo priemones ir visada stengėsi perskaityti etiketes.", 
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
    text: "Sandra iš viso naudoja 15 makiažo priemonių ir nori 50 % sumažinti spuogus sukeliančių priemonių skaičių. Jei kiekvienas produktas tarnauja 3 mėnesius, kol jį reikės pakeisti, kiek mėnesių jai prireiks, kad pakeistų visus spuogus sukeliančius produktus?",
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
    text: "Norėdama 50 % sumažinti spuogus sukeliančių produktų skaičių, Sandra iš savo kolekcijos turi pašalinti 7 * 0,50 = 3,5 produkto. Kadangi neįmanoma pašalinti dalies produkto, ji turėtų iš savo kolekcijos pašalinti 4 produktus. Jei kiekvienas produktas tarnauja 3 mėnesius, kol jį reikės pakeisti kitu, jai prireiks 4 * 3 = 12 mėnesių, kad pakeistų visus spuogus sukeliančius produktus.",
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
