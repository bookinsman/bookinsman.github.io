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
    who: "Senelė",
    type: "text",
    text: "Ar esi nepatenkintas, kad atvažiavai pas močiutę į svečius?",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Man patinka, tik maniau bus senelis.",
    time: 1500,
  },
  {
    who: "Senelė",
    type: "text",
    text: "Jis turi jau greitai grįžti.",
    time: 1500,
  },
  {
    who: "Senelė",
    type: "text",
    text: "Kur tu bėgi?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš turiu išspręsti užduotį, kol senelis negrįžo.",
    time: 1500,
  },
  {
    who: "Senelė",
    type: "text",
    text: "Ką tokią?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Užduotį, senelis man seniai buvo davęs užduotį, tačiau jis nusimins, kad aš apie ją pamiršau..",
    time: 3500,
  },
  {
    who: "Senelė",
    type: "text",
    text: "Jokių užduočių Valentai. Pirma reikia atlikti savo pareigas. Pirmoji tavo užduotis – suvaryti avis į tvartą. Su savimi jokių sąsiuvinių! Suvarysi avis, galėsi spręsti senelio užduotis. Ar supratai?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Valentas atsiduso ir nuėjo prie tvarto. Sumanus vaikinas paslėpė sąsiuvinį kelnėse. Sėdėjo prie kelmo ir sprendė senelio užduotis. Nepastebėjo, kaip prabėgo kelios valandos.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Viskas, viskas!",
    time: 1500,
  },
  {
    who: "Senelė",
    type: "text",
    text: "Kas nutiko, vaikeli, ar tau kas skauda, kodėl atbėgai šūkaudamas?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Išsprendžiau!",
    time: 1500,
  },
  {
    who: "Senelė",
    type: "text",
    text: "O kaip gi avys???",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Avys... Apie jas visai pamiršau. Bet išsprendžiau senelio užduotį!",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Senelė norėjo nubausti Valentą už nepaklusnumą, tačiau kaip tik pro duris įžengė senelis.",
    time: 1500,
  },
  {
    who: "Senelė",
    type: "text",
    text: "Norbertai, na ką su juo daryti? Aš paprašiau suvaryti avis, o jis su tomis užduotimis… Visai kaip tu jaunystėje.",
    time: 1500,
  },
  {
    who: "Norbertas",
    type: "text",
    text: "Viskas gerai, mieloji, paprašiau, kad Linas suvarytų avis. O Valentui reikia mokytis, jis turi įstoti į prestižinę mokyklą, jam nėra laiko, kada tas avis ganyti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Seneli, seneli, aš išsprendžiau!",
    time: 1500,
  },
  {
    who: "Norbertas",
    type: "text",
    text: "Tai primink užduotį ir pasakyk teisingą atsakymą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Miestas A nuo miesto B yra nutolęs 300 km. Du dviratininkai vienu metu išvažiuoja iš šių miestų vienas kito kryptimi ir nesustodami lekia 50 km/h greičiu. Tačiau kartu su pirmuoju dviratininku iš miesto A skrenda musė, lėkdama 100 km per valandą greičiu. Musė lenkia pirmą dviratininką, skrenda link antrojo, kuris paliko B miestą. Sutikusi jį, iškart grįžta pas dviratininką A. Sutikusi jį vėl skrenda atgal link dviratininko B ir taip tęsė skrydžius pirmyn ir atgal, kol dviratininkai susitiko. Tuomet musė nurimo ir nutūpė ant vieno iš dviratininkų kepurės.",
    time: 3500,
  },
  createQuiz("Kiek kilometrų skrido musė?"
  , ['<div><input type="radio" name="q1" id="opt1"><label for="opt1">50 kilometrų</label></div>',
      '<div><input type="radio" name="q1" id="opt2"><label for="opt2">300 kilometrų</label></div>',
      '<div><input type="radio" name="q1" id="opt2"><label for="opt2">75 kilometrai</label></div>',
      '<div><input type="radio" name="q1" id="opt3"><label for="opt3">100 kilometrų</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas 300km.", "opt2"),
  {
    who: "",
    type: "text",
    text: "",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Labai dažnai spręsdami šią užduotį, žmonės imasi įvairių „subtilių“ ir sudėtingų skaičiavimų bei svarstymų, negebėdami suprasti, kad musė be sustojimo skrido lygiai 3 valandas, taigi nuskrido 300 kilometrų",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Mano nuomone, mokytis reikia visur ir visada. Nėra nieko blogiau gyvenime, už neišsimokslinusį asmenį. O dabar sėskis, papasakosiu vieną istoriją.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Papasakosiu tau Valentai įvykį, prieš daugelį metų nutikusį viename iš Pietų Uralo kaimų. Daugelis namų gyventojų pradėjo girdėti iš požemių sklindančius garsus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Buvo žmonių, kurie buvo įsitikinę, kad čia piktųjų dvasių darbas. Sklinda pasakojimai apie pogrindžio dvasias ir apie nusidėjėlių, kurie neranda ramybės žemėje, sielas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Dauguma juokėsi iš šių pasakų, tačiau niekas negalėjo paaiškinti, kas vyksta po žeme. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Geologai rado atsakymą. Kruopščiai išstudijavę požeminę kaimo geografiją, jie atrado, kad po žeme teka upė, kuri tęsiasi du kilometrus nuo žmonių namų.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tokie požeminiai srautai dažnai sudaro tuštumas žemės gelmėse – ten, kur daug vandens, uoliena lengvai tirpsta.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Upė tekėdama po žeme ardė uolas, sukeldama griuvėsius, tempdama su savimi didelius akmenis.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O tuo tarpu žemės paviršiuje buvo girdėti vandens garsai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Turi prisimint svarbią pamoką, kad silpnumą gali įveikti tikėjimas stebuklais. Daug lengviau tikėti stebuklu nei patikėti mokslu.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kartais reikia nueiti šiek tiek toliau už horizonto linijos, kurioje sustoja žmogus, atidžiau pažvelgti į reiškinio prigimtį ir dings visa paslaptis, atsiskleis žemiškos priežastys ir „stebuklo“ esmė...",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Mūsų pažinimo kelias nesikeičia: šiandien žinome daugiau nei vakar, rytoj žinosime tai, ko šiandien dar nežinome.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Bet turbūt niekada negalėsime pasakyti, kad žinome viską.",
    time: 3500,
  },
  {
    who: "Valentas",
    type: "text",
    text: "Seneli, ar viską galime pagrįsti mokslu?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ne, bet ir aklai tikėti stebuklais mes irgi negalime, kartais paaiškinimui reikia daugiau laiko ir resursų.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pabandyk tau nežinomiems reiškiniams rasti paaiškinimą.",
    time: 1500,
  },
  {
    who: "Valentas",
    type: "text",
    text: "Bet ar tai lengva?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ne. Tačiau paieška yra verta mūsų laiko.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Paieškos labai praturtins Tavo žinias. Jos išmokys Tave akademinio ir loginio mąstymo. Rasi turtingiausią žinių lobyną, kurį žmonija gauna iš gamtos. Tavo smalsumas bus dosniai apdovanotas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš tavo kambaryje palikau keletą knygų, kurias, manau, tau bus įdomu skaityti. Knygose rasi įdomių mokslinių straipsnių, enciklopedijos ištraukų ir, žinoma, terminologijos žodyną. Na, o dabar lėk į virtuvę, močiutė ruošia mums pietus. ",
    time: 3500,
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
