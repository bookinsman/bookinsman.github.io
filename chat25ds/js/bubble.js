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
    text: "Viename miestelyje buvo pradinė mokykla, kuri jau gyvavo 90 metų. Ši mokykla buvo svarbi bendruomenės dalis, išugdžiusi ne vieną mokinių kartą. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau bėgant metams istorinis pastatas ėmė rodyti senėjimo požymius: stogas kiauras, sienose buvo skersvėjis, o elektros instaliacija pasenusi.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mokyklos taryba ir bendruomenė žinojo, kad reikia kažką daryti, bet nebuvo tikri, nuo ko būtų geriausia pradėti. Jie rengė susirinkimus ir iš jų atrinko optimalias keturias idėjas:",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "1. Atnaujinti esamą pastatą: Mokyklos valdyba galėtų pasamdyti rangovus, kurie suremontuotų ir atnaujintų esamą pastatą, išlaikydami jo istorinį žavesį, bet taip pat padarydami jį saugų ir funkcionalų mokiniams ir darbuotojams.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "2. Pastatyti naują mokyklą: Mokyklos taryba galėtų apsvarstyti galimybę statyti naują, modernią mokyklą kitoje vietoje - taip būtų išspręstos visos su dabartiniu pastatu susijusios problemos, tačiau taip pat tektų palikti ir istorinį pastatą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "3. Pertvarkykite pastatą į bendruomenės centrą: Mokyklos taryba galėtų apsvarstyti galimybę paversti pastatą bendruomenės centru, kuriame būtų galima rengti renginius, susitikimus ir kitą bendruomenės veiklą. Tokiu atveju pastatas būtų išsaugotas, bet nebetarnautų kaip mokykla.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "4. Mokyklą paversti hibridiniu modeliu: Mokyklos valdyba galėtų apsvarstyti mišraus modelio galimybę, kai mokykla būtų iš dalies renovuota, o kai kurie nauji pastatai būtų prijungi. Pavyzdžiui, mokykla galėtų būti išplėsta, įrengiant naujas klases, sporto salę ir biblioteką, o istorinis pastatas būtų išsaugotas ir naudojamas specialiems renginiams ir veiklai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mokyklos taryba ir bendruomenė aptarė kiekvienos idėjos privalumus ir trūkumus ir po ilgų diskusijų nusprendė pasirinkti ketvirtąjį variantą - mišrų modelį.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mokyklos taryba pasamdė architektus ir rangovus, pradėjo dirbti prie projekto ir netrukus mokykla virto moderniu ir funkcionaliu objektu, kuriame taip pat buvo gerbiama pastato istorija.", 
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
    text: "Mokyklos valdyba apskaičiavo, kad esamo pastato remontas kainuos 1 000 000 JAV dolerių, naujos mokyklos statyba - 5 000 000 JAV dolerių, o pastato pertvarkymas į bendruomenės centrą - 3 000 000 JAV dolerių. Jei mokyklos taryba nori apsvarstyti mišrų modelį, kiek kainuos visų trijų variantų derinimas?",
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
    text: "Bendra mišraus modelio kaina bus lygi esamo pastato renovacijos, naujos mokyklos statybos ir pastato pertvarkymo į bendruomenės centrą išlaidų sumai.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "$1,000,000 + $5,000,000 + $3,000,000 = $9,000,000",
    time: 1500,
  },
  {
    who: "Užduotis 2:",
    type: "text",
    text: "Mokyklos taryba apskaičiavo, kad hibridinio modelio kaina sieks 9 000 000 USD. Jei mokyklos taryba ketina surinkti 3 000 000 USD iš obligacijų programos, o likusius 6 000 000 USD finansuos valstybė, kiek mokyklos taryba turės mokėti per metus, kad per 15 metų grąžintų obligacijas?",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Obligacijos suma yra 3 000 000 USD, o obligacijos laikotarpis - 15 metų, todėl mokyklos taryba turi mokėti 3 000 000 USD/15 = 200 000 USD per metus.",
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
