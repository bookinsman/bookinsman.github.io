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
    text: "Sala ir pilis visiškai priklausė jiems. Apsikabinę jie ilgai stovėjo tylėdami nuo pilies sienų žvelgdami į ežerą. Liza akivaizdžiai jaudinosi ir laukė, kol pradėsiu kalbėti.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Tavo karštas troškimas pažinti save ir savo vertybes yra žavus. Tačiau nežinai nuo ko pradėti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tiesa?",
    time: 1500,
  },
  {
    who: "Liza",
    type: "text",
    text: "Teisingai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš tau padėsiu, mano drauge. Kažkada vadovavausi didžiojo Gėtės patarimu, kuris tikėjo, kad pažinti save galima tik ką nors darant, bet ne laukiant stebuklo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš daug dariau, kad sužinočiau, kas aš, kokia mano paskirtis, ką aš gebu ir ko reikia mokytis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar pasidalinti savo patirtimi?",
    time: 3500,
  },
  {
    who: "Liza",
    type: "text",
    text: "Tikrai taip.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O buvo taip, mano drauge….",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Menininkas turi plačią vaizduotę. Jo mintys nepažįsta ramybės. Dažniausiai naujos idėjos atsiranda netikėtai, nes yra terpė joms rastis. Galbūt tinkama aplinka, kuri įkvepia, galbūt tinkami šalia žmonės, kurie motyvuoja.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Platus pasaulis, beribis horizontas. Tyrinėdamas šią nežinomą erdvę supratau, kad mano gyvenimas yra nuolatinis savęs tobulinimas, amžinosios tiesos ieškojimas, savęs pažinimas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Skaitau senas knygas, kad galėčiau labiau suprasti žmogų, pasaulio dėsnius.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip atsirado mano mintys ir idėjos „virš“ viso to, kas buvo pasakyta ir parašyta apie Žmogų anksčiau.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ne todėl, kad buvo blogai išsireikšta ir parašyta, o todėl, kad norėjau apsieiti be tarpininkų. Jei anksčiau detaliai analizavau Žmogų kaip visumą, bendrą sąvoką, tai dabar matau savo paties moralinio ir estetinio pasirinkimo „apibrėžimą“.",
    time: 3500,
  },
  {
    who: "Liza",
    type: "text",
    text: "Įdomiai pasakyta.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pagal save esu išvedęs loginę schemą: namai - kelias - grįžimas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "„Namai“ visada yra gimtojo židinio simbolis. Tai kraujas, kuris mus vienija su mūsų protėvių žeme. Tiek socialinėje, tiek bet kokioje kitoje gyvenimo dalyje „namai“ užima svarbią vietą. Namus pamiršęs žmogus pavirsta griuvėsiais, netenka šaknų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "„Kelias“ – amžinas judėjimas, gėrio paieška ir išsiskyrimas, naujų namų radimas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ir aš grįžau į save, nors nebuvau pavargęs.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O gal manyje liko tikėjimas, kad gyvenimas sudėliotas pagal tam tikrą planą. Ir man tereikia jį suprasti, o tuomet galėsiu gyventi harmonijoje ir nebekeisti krypties.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Dabartis, mano nuomone, yra labai neapibrėžta. Ji susideda iš praeities ir ateities. Kartais atrodo, kad išgyvendamas akimirką negali apsisukti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tiesa ta, kad kažkada savo tiesos ieškoti išvykęs jaunuolis, namo grįžo jau žmogus, susiformavusi asmenybė. Žmogus suvokė, kad kiekvienas turi ieškoti atsakymus į iškeltus klausimus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kuo būti, į ką tikėti, kaip mąstyti teisingai?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar mano mintys, tai aš? Ar galiu valdyti savo norus, ar jie valdo mane?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ir ar esu laisvas?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tie klausimai mane visada domino, o dar įdomiau, ne tik rasti į juos atsakymus, bet pasinerti į ieškojimo procesą, kuris gali turėti dar daugiau naudos, nei pats atsakymas. Kol turi tikslą, tol jautiesi gyvas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kitas pasakojimas kitą dieną, sėkmės!",
    time: 3500,
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
