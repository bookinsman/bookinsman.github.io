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
    text: "Kaip komandos, kuriai pavesta pastatyti vaikų žaidimų aikštelę, vadovui, jums pavesta sukurti kažką išties novatoriško ir unikalaus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tikslas - pabrėžti kūrybiškumą ir mokymąsi sukuriant žaidimų aikštelę su interaktyviais edukaciniais eksponatais, kuriuose daugiausia dėmesio skiriama mokslo, technologijų, inžinerijos ir matematikos žinių gilinimui.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jūs ir jūsų komanda pradedate svarstyti keletą žaidimų aikštelės variantų. Pirmasis variantas - sukurti fizikos ir mechanikos eksponatus, pavyzdžiui, skriemulius ir svertus, su kuriais vaikai galėtų eksperimentuoti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šis variantas suteiktų vaikams galimybę praktiškai mokytis fizikos ir mechanikos, tačiau jis gali būti vizualiai ne toks patrauklus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Antroji galimybė - įrengti biologijos ir ekologijos ekspozicijas, pavyzdžiui, mini sodą, kuriame vaikai galėtų susipažinti su augalais ir vabzdžiais.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šis variantas suteiktų vaikams galimybę mokytis apie gamtos pasaulį ir aplinką, tačiau jam gali prireikti daugiau priežiūros ir išteklių nei kitiems variantams.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Trečioji galimybė - kurti eksponatus, kuriuose daugiausia dėmesio skiriama technologijoms ir kodavimui, pavyzdžiui, interaktyvūs kompiuteriniai žaidimai, kuriuose vaikai mokomi pagrindinių kodavimo sąvokų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ši galimybė suteiktų vaikams mokytis apie technologijas ir progromavimą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ketvirtoji galimybė - sukurti eksponatus, kuriuose daugiausia dėmesio skiriama inžinerijai ir architektūrai, pavyzdžiui, kaladėles ir konstrukcijos, kurias vaikai galėtų projektuoti ir konstruoti. Ši galimybė suteiktų vaikams mokytis apie inžineriją ir architektūrą.",
    time: 1500,
  },  
  {
    who: "",
    type: "text",
    text: "Kaip komandos vadovui svarbu pasverti kiekvienos galimybės privalumus ir trūkumus, atsižvelgti į biudžetą, vaikų interesus, aplinką, vietovę ir galimybes naudotis šiomis idėjomis neįgaliems vaikams.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Turite rasti būdą, kaip subalansuoti kūrybiškumui ir mokymuisi skiriamą erdvę, ir sukurti žaidimų aikštelę, kur vaikams būtų smagu.",
    time: 1500,
  },
  {
    who: "Užduotis 1",
    type: "text",
    text: "Galite sustoti ir išspręsti užduotis paimdami sąsiūvinį",
    time: 1500,
  },
  {
    who: "Užduotis 1:",
    type: "text",
    text: "Jei aikštelės plotas yra 2000 kvadratinių metrų ir komanda nori 40 % ploto skirti fizikos ir mechanikos eksponatams, 30 % - biologijos ir ekologijos eksponatams, 20 % - technologijų ir kodavimo eksponatams ir 10 % - inžinerijos ir architektūros eksponatams, kiek kvadratinių metrų skiriama kiekvienam eksponatui?",
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
    text: "Fizikos ir mechanikos eksponatai: 2000 kv. m x 40 % = 800 kv. m",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Biologijos ir ekologijos eksponatai: 2000 kv. m x 30 % = 600 kv. m",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Technologijų ir kodavimo eksponatai: 2000 kv. m x 20 % = 400 kv. m",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Inžinerijos ir architektūros eksponatai: 2000 kv. m x 10 % = 200 kv. m",
    time: 1500,
  },
  {
    who: "Užduotis 2:",
    type: "text",
    text: "Jei kiekvieno eksponato pastatymas kainuoja 1000 JAV dolerių, o biudžetas yra 100 000 JAV dolerių, kiek eksponatų iš viso komanda gali sau leisti pastatyti?",
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
    text: "100 000 USD / 1 000 USD = 100 eksponatų",
    time: 1500,
  },
  {
    who: "Užduotis 3:",
    type: "text",
    text: "Jei kiekvieno eksponato sukūrimas kainuoja 2000 JAV dolerių, o biudžetas yra 180 000 JAV dolerių, kiek eksponatų iš viso komanda gali sau leisti sukurti?",
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
    text: "180 000 USD / 2 000 USD = 90 eksponatų",
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
