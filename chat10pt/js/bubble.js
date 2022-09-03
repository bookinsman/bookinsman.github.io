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
    text: "Mes važiuojame jau kelias valandas. Tėtis vairavo automobilį ramiai, žiūrėdamas tai į kelią, tai į automobilio veidrodėlius. Kelyje buvo daug sunkvežimių.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Tėti, iš kur tiek mašinų?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Perveža prekes. Čia labai menkai išvystyta regioninio kelio infrastruktūra, o logistika labai priklauso nuo krovininio transporto judėjimo pagrindiniais greitkeliais.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Tu tik nesijaudink, mums liko važiuot ne taip ir ilgai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O kas yra toji logistika?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Tai sūnau yra materialinių medžiagų srauto valdymas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Gal galima lengviau paaiškinti?",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Kaip greičiau ir pigiau pervežti krovinius iš vieno taško į kitą.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Pavyzdžiui, seniau kaip ir dabar, logistika buvo svarbi karo mokslo dalis, nes reikėjo pervežti daug žmonių ir prekių dideliais atstumais.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Ar per istorijos pamokas, nagrinėjote Aleksandro Makedoniečio žygius?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, pamenu tokį.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Pagalvok, kiek jo kariuomenė turėjo neštis krovinio su savimi, kai jie žygiavo iš Graikijos į Persiją?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Kariams reikia maisto, juos reikia sušildyti, duoti ginklus ir dar daug visko. Kuo didesnė kariuomenė, tuo didesnis konvojus, kuris prižiūri visą tai.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tėti, pasakyk, o iš kur tu tiek daug žinai? Kad ir kokį klausimą užduosiu, vis randi į jį atsakymą...",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Vaikystėje ir paauglystėje, kai bendraamžiai žaisdavo futbolą, sėdėdavau namuose ir mokiausi.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ką, o kaip gi draugai, filmai, kompiuteriniai žaidimai?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Turėjau savo kompiuterį pavadinimu “Didysis enciklopedinis žinynas”. Stora knyga, joje yra apie tūkstantis puslapių ir kiekviename yra daug įdomios informacijos, kuri išspausdinta mažu šriftu.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Galėdavau dienų dienas skaityti ir nagrinėti giliausias mintis, įdomiausius faktus. Tavo amžiuje žinojau beveik visas graikiškas ir lotyniškas šaknis, iš kurių formuojama mokslinė žodžių terminologiją.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar tai taip svarbu?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Nelabai svarbu, bet padeda. Be to užsienio kalbų mokymasis labai gerai lavina smegenis.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tu jau tai sakei nė kartą. Pasakyk geriau, ką man daryt, kad pranokčiau tave žiniomis ir įgūdžiais?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Tau dabar gyvenime daug lengviau. Seki mano pėdomis, svarbiausia mokytis iš manęs ir kitų gabių žmonių.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Mokytis iš žmonių patirties, tai ne skaityti „Vikipediją“, o nuolat diskutuoti ir eksperimentuoti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tėti, ar įmanoma paveldėti žinias?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tėvas nusijuokė ir pasakė kažką nesuprantamo apie Darviną ir Lamarką. Darviną prisiminiau iš biologijos pamokų, o kas buvo Lamarkas, visai nežinojau. Kaip suprantu, sukauptos informacijos paveldėjimas neįmanomas, nes įgytos žinios turi būti kažkaip užkoduotos genuose, o genai tam nėra skirti. Vėliau tėtis įsivėlė į labai neaiškią diskusiją apie prokariotus ir jų Lamarko paveldėjimo galimybę. Pamečiau samprotavimo giją, todėl nebeklausiau, o tiesiog žiūrėjau pro langą.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Na, jau gali nusiimti šalmą.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ką? Kur mes?",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Tau turėtų svaigti galva. Tu buvai panėręs į prisiminimus.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kaip tu tai padarei?",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Prisimink kiek kartų buvai laboratorijoje mano darbe, kiek kartų sakiau, kad kuriame šalmą, galintį perduoti mintis arba nukelti mus į prisiminimus.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, bet buvau mažas, ne viską pamenu. Kaip kuriate prisiminimus?",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Iš galvos perkeliame prisiminimus į įrenginį, o tada įkeliame kitam žmogui. Tai kaip perkelti failus iš USB atminties, iš vieno kompiuterio į kitą.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Bet kaip tu galėjai mane įvelt į tokį eksperimentą? O jei kažkas nutiktų, ar tai nepavojinga?",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Na, su manim gi viskas buvo gerai, tiesa?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tai kieno aš prisiminimuose buvau? Viskas buvo taip tikroviška.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Tu buvai kito vaiko kūne. Matai, praėjo tik keletas sekundžių, o tu jau nemažai žinai apie logistiką. Šios žinios taip ir liks tavo atmintyje.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Palauk. Sakai, kad galima perkelti žinias?",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Būtent. Šis metodas puikiai tinka perkelti į smegenis nemažus kiekius informacijos.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pirmiausia tu išbandei tai su savo smegenimis?",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Pirmiausia, žinoma, žiurkės pagalba, o vėliau jau bandžiau pats. O kaip kitaip mes galėtume patikrinti įrenginio tinkamumą?",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Ateityje žmonėms nereikės tiek daug mokytis. Žinoma, šis įrenginys bus pasiekiamas ne visiems. Vis dėlto žmonės galės pirkti informacijos sistemos įdiegimą. Gyvenime, kaip jau žinai, nieko nemokamo nėra. Bet, kad galėtum valdyti tik reikiamas žinias, reikia pasirengti ir gebėti tinkamai atrinkti, ko tau tikrai reikia. Kolkas nežinome, kaip pašalinti nereikalingą informaciją. Nes prisijungęs prie įrenginio gauni visą srautą žinių, kurios įsidiegė.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Jau visai greitai galima bus perkelti mintis į kitą pasaulį, dar vadina „meta“, kurioje susijungia smegenų neutronai su kompiuteriu.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Tiesa, pirmasis ir garsiausias meta subjektas yra Aristotelio metafizika. Išvertus iš senovės graikų kalbos metafizika reiškia „tai, kas yra po fizikos“, o šį pavadinimą įvedė ne pats Aristotelis, o Andronikas iš Rodo, rinkęs mokslininko darbus.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Mes turime jo originalius darbus ir jis ne tik rašė apie metafiziką, iš jo darbų mes ir padarėme tokį šalmą…",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Neužilgo veikiantį šalmą išleisime į prekybą, pasaulis, sūnau, nebebus jau toks, koks buvo anksčiau. Tad nepamiršk, kad norėdamas išlikt ateity žmogumi, turėsi atskirti savo mintis nuo tau įdiegtų…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Šiandien jau veikia metaversas – nuolat veikianti virtuali erdvė, kurioje žmonės gali bendrauti vieni su kitais ir su skaitmeniniais objektais. Bendraudami turi dėvėti avatarus. Sąveika gali vykti pasitelkus įvairius technologinius įrenginius: tiek tradicinių asmeninių kompiuterių pagalba, tiek virtualios bei papildytos realybės rinkiniais. Kol kas toks šalmas tai fantazijos, bet niekas nežino, kas bus rytoj…",
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
