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
    text: "Siunčiu savo brangiems skaitytojams.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Mes tęsiame mūsų draugišką pokalbį, kur kiekvienas gali priimti sprendimus. Šiame pokalbyje esi lygiateisis pašnekovas, ginčų svarstymų ir abejonių dalyvis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau aš turiu abejonių, ar išėjęs į pasaulį, mokėtum pagrįsti susidariusią nuomonę?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar neprarastum savarankiško ir kritinio mąstymo?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Norėdamas būti išsilavinusiu, reikia gebėti savarankiškai orientuotis žinių sraute. To reikalauja pats gyvenimas, tavo asmeninio augimo ir tobulėjimo interesai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš tikiu, kad mes tai galime padaryti. Tai nėra greitas kelias į sėkmę, tai nėra lengvas kelias. Tai kelias, kuris ugdo tavo asmenybę, formuoja mąstymą ir ryžtą. Tai kelias, kuris nuves Tave į sėkmę.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kažkokių egzistuojančių formulių, kaip gerai gyventi, mokytis ir dirbti nėra. Jų negali gauti nei iš gerų pažįstamu, nei iš tėvų, netgi negali nusipirkti jų knygyne. Jas reikia susidaryti pačiam.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Savarankiškas mokymasis yra pats sudėtingiausias kelias. Prisimink mokyklą. Ten nėra nei nuobodu, nei liūdna, nes mokymasis vyksta grupėje.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O grupėse visada lengviau. Tu matai, kad visi kažką daro, kažką sprendžia ir tu nenori likti vienas, taigi darai tą su visais kartu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Grupėse visi mes galime pasiekti didelių darbo ir mokslo laimėjimų. Bet žmogus didžiąją laiko dalį lieka pats su savimi, kai jam niekas nepadeda.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O tada kyla klausimas, iš kur semtis motyvacijos, kuri nugali tinginystę? Kuri žadina įkvėpimą daryti gerus darbus?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ta galia vadinama protinio tobulėjimo troškimu. Ši jėga reiškiasi Tavo darbais, santykiu su pačiu savimi ir kitais žmonėmis, kasdieniniais poelgiais, turiningu laisvalaikiu.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Reikia nuolat tyrinėti save, grūdinti valią, protą, charakterį, jausmus. Tai, žinoma,  nėra lengva.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kažkas netenka pasitikėjimo savo jėgomis ir sugebėjimais, pavargsta, gali pasijusti vienišas, net nusivylęs. Bet ar tai reiškia, kad negalime nugalėti savęs?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žinoma, kad ne.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O ar yra ryšys tarp savęs pažinimo ir išsilavinimo? ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Manau, kad jau pats atsakei į šį klausimą. Žinoma, kad taip.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kuo žmogus turi daugiau žinių, yra išprusęs, tuo dažniau ieško būdų, kaip save tobulinti dar labiau, savirealizuoti save kitoje srityje.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Todėl, jeigu nori toliau tobulėti, turi tai daryti nuolat. Neįmanoma turėti tvirto dvasinio pagrindo, jeigu nesi atviras naujovėms. Kiekvieną dieną turime mokytis ko nors naujo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jei pats nemąstysi, o tikiesi, kad tavo problemas spręs kiti – klysti. Tai tik sulėtins tavo progresą, augimą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Reikia mokytis, kad galėtum tuo dalintis su kitais.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kuo daugiau turi žinių, tuo efektyviau sugebi savarankiškai spręsti problemas. Kitų pagalba tau bus nereikalinga.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Mokslo dėka įgyji pasitikėjimo savimi, kas leidžia tau pasiekti savo tikslų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Išmokęs dirbti ir kurti, gebėsi kitiems pasiūlyti ką nors naudingo.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Paliksi pėdsaką žemėje. Tavo patirtis bus ramstis ir atspirtis kitiems žmonėms, kurie tavimi pasitikės, seks Tavo pavyzdžiu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O ką galima padaryti, kad tai virstų realybe?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Reikia turėti bendrą supratimą apie svarbiausias mokslo šakas: matematiką, pedagogiką, psichologiją ir filosofiją. Šias disciplinas reikia įsisavinti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Bus sunku ir neįprasta pasirinkti vieną temą ir ją analizuoti. Jau nuo pat pradžių mes norime suprasti viską. Neįdėję pastangų norime viską suvokti iš karto.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taigi net dažnai persodinamas augalas nesustiprės. Žmogus, kuris mokosi apie viską daug, žino mažiau, nei tas, kuris mokosi vieno dalyko ir žino apie jį viską.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kodėl viso to reikia?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Dėl labai paprastos priežasties: turi gebėti suprasti savo paties mąstymo ir interesų, valios ir charakterio vystymosi dėsningumus.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nori tobulėti?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Dažniau domėkis, kodėl tam tikras žmogus daug pasiekė darbe, kaip jam tai pavyko padaryti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Reikia išmokti laiku suprasti, kad gyvenimas yra sudėtingas, kad kiekvienas gali padaryti klaidų net ir tada, kai siekia kilnaus tikslo, daug metų elgdamasis tinkamai, lavindamas savo protą, valią, charakterį.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Matai, mano jaunasis bičiuli, skaitytojau, pašnekove, kaip netikėtai pakrypo pokalbis apie gerą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tikslą esame iškėlė visi, bet visi skirtingą. Vienų tikslas gali būti vertingas, kilnus, doras, o kitų – nereikšmingas, tamsus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pagalvok minutę, kiek daug gero savyje turi. Pamąstyk, kiek tuo gėriu gali džiaugtis ir dalintis su kitais laisvalaikio metu.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Laisvą laiką reikia ir būtina išnaudoti tinkamai. Mes laukiame naujo filmo, kuris tuoj turi prasidėti, laukiame draugų, kurie turi tuoj ateiti. Tačiau, taip ir neateina laiku.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O kiek gi galima būtų nuveikti, jeigu žodis „laukimas“, būtų paverstas „veikimu“.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tikriausiai kiekvienas pats atsakys į šį klausimą, kiek ir ko galėtų pasiekti, jeigu tinkamai išnaudotų laisvą laiką.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šis pasakojimas baigtas, sekantis bus kitą dieną!",
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
