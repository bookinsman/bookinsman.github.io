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
    text: "Kadaise gyveno jauna meno kolekcininkė Sara, kuri neseniai iš senelio paveldėjo didelę pinigų sumą. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji buvo pasiryžusi panaudoti naujai įgytus turtus ir sukurti meno kolekciją, kuri prilygtų prestižiškiausių pasaulio muziejų kolekcijoms.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji ištisus mėnesius tyrinėjo įvairius menininkus bei meno kūrinius ir buvo pasiryžusi surasti vertingiausius ir paklausiausius kūrinius.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Gilindamasi į meno pasaulį, Sara pastebėjo, kad vieni meno kūriniai kainuoja daug brangiau nei kiti, net jei jų stilius ir kokybė yra panašūs.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji buvo sutrikusi ir nusprendė pasikonsultuoti su meno ekspertais, kad suprastų, kodėl vieni meno kūriniai yra brangūs ir gerai žinomi, o kiti - ne.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji ištyrė, kad meno vertę ir populiarumą lemia keletas veiksnių: kūrinio retumas, kokybė, kilmė, menininko populiarumas, kultūrinė reikšmė, rinkodara ir reklamą. Sara suprato, kad norėdama sukurti tikrai vertingą ir įspūdingą meno kolekciją turės atsižvelgti į visus šiuos veiksnius.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Sara taip pat sužinojo, kad kai kurie garsūs meno kūriniai nebūtinai yra geriausios kokybės, tačiau jie laikomi vertingais dėl juose užfiksuotų istorijų ir emocijų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nusprendusi sukurti vertingą ir reikšmingą kolekciją, Sara ėmė ieškoti retų ir aukštos kokybės meno kūrinių, turinčių istorinę kilmę ir kultūrinę reikšmę.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ji taip pat stengėsi paįvairinti savo kolekciją, įtraukdama į ją tiek gerai žinomų, tiek mažiau žinomų menininkų kūrinius, ir ieškojo interaktyvių ir įtraukiančių eksponatų, kurie būtų patrauklūs įvairiems lankytojams.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pasitelkusi kritinį mąstymą, loginio problemų sprendimo įgūdžius ir meno rinkos išmanymą, Sara sugebėjo sukurti ne tik vertingą, bet ir prasmingą bei įdomią kolekciją.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ši istorija moko mus, kad susidūrus su problema, svarbu kritiškai mąstyti, analizuoti situaciją ir kreiptis į specialistus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Turint loginio mąstymo ir problemų sprendimo įgūdžių, galima priimti pagrįstus sprendimus ir pasiekti savo tikslų.",
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
    text: "Sara turi 500 000 dolerių biudžetą, kurį gali išleisti savo meno kolekcijai. Ji nori įsigyti du paveikslus: vieną garsaus dailininko ir vieną mažiau žinomo menininko. Garsus paveikslas kainuoja 350 000 JAV dolerių, o mažiau žinomas - 50 000 JAV dolerių. Kiek lėšų Sara gali skirti kitiems meno kūriniams įsigyti?",
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
    text: "500 000 JAV dolerių (bendras biudžetas) - 350 000 JAV dolerių (garsaus paveikslo kaina) - 50 000 JAV dolerių (mažiau žinomo paveikslo kaina) = 100 000 JAV dolerių (likęs biudžetas).",
    time: 1500,
  },
  {
    who: "Užduotis 2:",
    type: "text",
    text: "Sara turi 500 000 dolerių, kuriuos gali išleisti savo meno kolekcijai. Ji jau nusipirko skulptūrą už 20 000 dolerių ir fotografiją už 5 000 dolerių. Per ateinančius dvejus metus ji nori įsigyti dar tris meno kūrinius. Kiek pinigų Sara gali išleisti kiekvienam naujam meno kūriniui?",
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
    text: "Sara jau išleido 20 000 $ + 5 000 $ = 25 000 $.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Sarai liko 500 000 $ - 25 000 $ = 475 000 $.",
    time: 1500,
  },
  {
    who: "Atsakymas:",
    type: "text",
    text: "Sara nori nusipirkti dar 3 meno kūrinius, todėl kiekvienam kūriniui ji gali išleisti 475 000 USD / 3 = 158 333,33 USD.",
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
