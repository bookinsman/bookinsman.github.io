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
    text: "Kartą mažame miestelyje gyveno įdomus detektyvas Aleksas. Aleksą visada žavėjo, kaip žmonės naudojasi technologijomis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Vieną dieną vaikštinėdamas po miestą, jis pastebėjo, kad beveik visi nuolat žiūri į savo išmaniuosius telefonus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Stebėdamas aplinkinius žmones, jis suprato, kad pernelyg dažnas naudojimasis išmaniaisiais telefonais daro neigiamą poveikį jų gyvenimui.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jie buvo nuolat išsiblaškę, nepastebėjo juos supančio pasaulio grožio ir net apleido savo draugus ir šeimą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nusprendęs išsiaiškinti daugiau, Aleksas atliko tyrimą. Jis apklausė įvairaus amžiaus ir profesijų žmones bei stebėjo, kaip jie kasdien naudojasi išmaniaisiais telefonais. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jis taip pat perskaitė naujausius tyrimus apie pernelyg intensyvaus išmaniųjų telefonų naudojimo poveikį psichinei ir fizinei sveikatai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Analizuodamas surinktus duomenis Aleksas suprato, kad problema susijusi ne tik su tuo, kiek laiko žmonės praleidžia naudodamiesi išmaniaisiais telefonais, bet ir su tuo, kaip žmonės naudojasi telefonais.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jis atrado, kad žmonės naudojo išmaniuosius telefonus tam, kad atitrauktų dėmesį nuo problemų, atidėliotų darbus ir vengtų bendravimo.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aleksas nusprendė ištirti būdus, kaip padėti žmonėms naudotis išmaniaisiais telefonais darniau ir sveikiau. Jis padarė išvadą, kad žmonėms gali padėti laiko ribojimas naudojantis išmaniojo telefono aplikacijomis.  ", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip pat telefoną galima panaudoti kur kas vertingesniems dalykams, pvz., knygų skaitymas, pasivaikščiojimas, piešimas, naujos kalbos mokimasis.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aleksas dalijosi savo atradimais su žmonėmis, kuriuos apklausė, bendruomene, kurioje jis gyveno.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žmonės buvo sužavėti jo detektyviniais gebėjimais ir atradimais. Jie nusprendė įgyvendinti jo duotus patarimus, kurie padėjo jiems darniau naudotis išmaniaisiais telefonais ir labiau mėgautis juos supančiu pasauliu.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Istorijos išvada: pasitelkus loginį mąstymą ir atidų žvilgsnį į detales, net ir nedideli veiksmai gali lemti didelius pokyčius technologijų naudojimo srityje ir pagerinti mūsų kasdienį gyvenimą.", 
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Galite sustoti ir išspręsti užduotis paimdami sąsiūvinį.",
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Vidutiniškai vienas žmogus išmaniuoju telefonu praleidžia 4 valandas per dieną. Jei žmogus nori 50 proc. sumažinti kasdienį naudojimąsi išmaniuoju telefonu, kiek valandų jis turėtų praleisti prie savo išmaniojo telefono?", 
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Kitoje žinutėje bus galimybė pasitikrinti atsakymus.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Norėdamas 50 proc. sumažinti naudojimą, asmuo turėtų stengtis praleisti 50 proc. mažiau nei 4 valandas, t. y. 4 x 0,5 = 2 valandos.",
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Asmens tikslas - sumažinti kasdienį naudojimąsi išmaniuoju telefonu nuo 4 iki 2 valandų. Jei šiuo metu jis 30 minučių praleidžia socialinėje žiniasklaidoje, 1 valandą žaidimams ir 2,5 valandos kitai veiklai, kokią veiklą jis turėtų sumažinti arba atsisakyti, kad pasiektų savo tikslą?", 
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Kitoje žinutėje bus galimybė pasitikrinti atsakymus.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Šiuo metu žmogus išmaniuoju telefonu praleidžia 30 + 60 + 150 = 240 minučių. Norėdamas sumažinti naudojimą iki 2 valandų (120 minučių), jis turėtų sumažinti arba panaikinti 120-240 = -120 minučių.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Tai reiškia, kad asmuo turėtų sumažinti arba atsisakyti 120/60 = 2 val. kitos veiklos, kurią atlieka naudodamasis išmaniuoju telefonu.",
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
