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
    text: "Kartą mažame miestelyje gyveno smalsi mergaitė vardu Mija. Mija mėgo tyrinėti ir atrasti naujus dalykus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Vieną dieną, vaikštinėdama po miestelio turgų, ji pamatė stendą, ant kurio kabėjo užrašas, kad čia parduodami drabužiai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žiūrėdama į eksponuojamus drabužius, ji pastebėjo, kad visi jie pasiūti iš tų pačių audinių ir spalvų, ir ėmė svarstyti, kodėl taip yra.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nusprendusi sužinoti daugiau, Mija nusprendė pati atlikti tyrimą. Ji nuvyko į vietinį tekstilės fabriką, kur stebėjo, kaip darbininkai gamina įvairių audinių ir spalvų drabužius. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji taip pat apsilankė įvairiose drabužių parduotuvėse ir pastebėjo, kad visi jų parduodami drabužiai buvo pagaminti iš tų pačių rūšių audinių ir spalvų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Analizuodama surinktus duomenis Mia suprato, kad fabrikas ir parduotuvės gamino ir pardavinėjo tik tuos drabužius, kurie turėjo didelę paklausą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji taip pat pastebėjo, kad fabrikas audiniams gaminti naudoja daug vandens, energijos ir cheminių medžiagų, o tai ne tik kenkia aplinkai, bet ir brangiai kainuoja.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mia suprato, kad nori keisti šią tvarką. Ji nusprendė ištirti kitų rūšių audinius, iš kurių būtų galima pasiūti ne tik stilingus, bet ir aplinkai nekenksmingus drabužius.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji atrado, kad tokie audiniai kaip organinė medvilnė, bambukas ir linas yra tvarios tradicinių audinių alternatyvos, o jų gamybai galima sunaudoti mažiau vandens ir energijos.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mia pasidalijo savo atradimais su gamyklos ir parduotuvių darbuotojais, kurie buvo sužavėti jos smalsumu, pastabumu ir įžvalgomis. ", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jie nusprendė įtraukti tvarius audinius į savo gamybą ir pardavimus, o tai ne tik padėjo aplinkai, bet drabužiai tapo unikalūs ir madingi.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mijos ryžtas ir loginis mąstymas ne tik padėjo aplinkai, bet ir prisidėjo prie mados pramonės naujovių diegimo jos mieste.", 
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taigi galima daryti išvadą, kad net ir maži veiksmai gali lemti didelius pokyčius.", 
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
    text: "Tekstilės fabrike 1 metrui tradicinio audinio pagaminti sunaudojama 100 litrų vandens. Jei fabrikas per dieną pagamina 1000 metrų audinio, kiek vandens iš viso sunaudojama per dieną?", 
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Kitoje žinutėje, bus galimybė pasitikrinti atsakymus.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Norėdami sužinoti, kiek vandens iš viso sunaudojama per dieną, padauginkite vienam audinio metrui sunaudoto vandens kiekį (100 litrų) iš per dieną pagaminto audinio kiekio (1000 metrų).", 
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "100 x 1000 = 100 000 litrų",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Taigi, tradiciniam audiniui gaminti fabrikas per dieną sunaudoja 100 000 litrų vandens.",
    time: 1500,
  },
  {
    who: "Užduotis 2",
    type: "text",
    text: "Jei fabrikas pradės naudoti ekologišką medvilnę kaip tvaraus audinio alternatyvą, 1 metrui audinio pagaminti bus sunaudojama 50 litrų vandens. Jei fabrikas ir toliau gamins 1000 metrų audinio per dieną, kiek vandens bus sutaupyta per dieną naudojant ekologišką medvilnę?",
    time: 1500,
  },
  {
    who: "Užduotis:",
    type: "text",
    text: "Kitoje žinutėje, bus galimybė pasitikrinti atsakymus.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Tradiciniam audiniui sunaudojama 100 litrų vandens vienam metrui, o ekologiškos medvilnės audiniui - 50 litrų vandens vienam metrui, taigi skirtumas yra 100-50 = 50 litrų vandens vienam metrui.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Per dieną fabrikas pagamina 1000 metrų audinio, todėl naudodamas ekologišką medvilnę fabrikas sutaupys 1000 x 50 = 50 000 litrų vandens per dieną.",
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
