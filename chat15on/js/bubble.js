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
    text: "Pradėjęs dirbti telegrafe operatoriumi, Edisonas iškart pateko į tikrąjį išradėjo kelią. Išstudijavęs telegrafo aparatus, jis pradėjo juos tobulinti, kad būtų lengviau su jais dirbti.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau Edisonui nepavyko ilgai išdirbti vieno darbo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Telegrafas Amerikoje buvo privačių savininkų rankose; jie reikalavo iš Edisono vieno – sunkaus darbo. Jie bijojo dėl savo prietaisų. Pastebėję, kad Edisonas patyliukais kažką su jais daro, kolega pranešė apie įvykį ir Edisoną atleido iš darbo.",
    time: 1500,
  },

  {
    who: "Darbdavys",
    type: "text",
    text: "„Mums nereikia telegrafo operatorių, kuris neatlieka jam paskirto darbo“.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tada Edisonas pėsčiomis nuėjo į kitą miestą ieškoti darbo.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Edisonas valkataudamas klajojo iš vienos vietos į kitą, dažnai neturėdamas pinigų nusipirkti duonai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Vienu metu jis įsidarbino didelėje telegrafo įmonėje, kuriai buvo pavaldūs keli biurai. Vieno iš šių biurų vadovas buvo labai griežtas. Jis privertė budintį telegrafą kas pusvalandį telegrafuoti jam sąlyginį numerį: „šeši“. Tai reiškė, kad telegrafas nemiegojo ir buvo savo poste.",
    time: 1500,
  },

  {
    who: "",
    type: "text",
    text: "Edisonas nusprendė atsikratyti šios nemalonios pareigos. Jis prie telegrafo aparato pritvirtino paprasto laikrodžio mechanizmą taip, kad kas pusvalandį pats aparatas bakstelėdavo skaičių „šeši“.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Edisonas dabar galėjo laisvai imtis savo reikalų. Kas pusvalandį griežtam viršininkui skrisdavo telegramos:",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "…Šeši… Šeši… Šeši…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau netrukus biuras apie tai sužinojo ir Edisonas buvo atleistas iš darbo.",
    time: 1500,
  },

  {
    who: "",
    type: "text",
    text: "Vėliau šį išradimą telegrafas panaudojo kitam tikslui.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kitame biure, kur vėliau įsidarbino Edisonas, jam irgi nepatiko.",
    time: 1500,
  },
  {
    who: "Vadovas",
    type: "text",
    text: "Jūs lėtai rašote telegramas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Edisonas pasiūlė išbandyti savo meną. Ypatingu jo sugalvotu būdu jis akimirksniu užpildė lapą iš aparato gautomis telegramomis.",
    time: 1500,
  },

  {
    who: "",
    type: "text",
    text: "Vadovas stebėjosi įrašo greičiu, bet nenorėjo to rodyti.",
    time: 1500,
  },
  {
    who: "Vadovas",
    type: "text",
    text: "Telegrama parašyta per smulkiai, argi nematai, neįmanoma suprasti, kas parašyta.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Edisonas supyko ir priimdamas kitas telegramas, kiekviename lape didžiulėmis raidėmis uždėjo tik vieną žodį. Dvidešimties žodžių telegrama buvo parašyta ant dvidešimties lapų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Edisonas ir vėl nedelsiant atleistas.",
    time: 1500,
  },

  {
    who: "",
    type: "text",
    text: "Istorija, kuri gali nutikti kiekvienam.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žinoma, daugelis žino aplinkybes, supranta, kas yra kas. Bet to neužtenka, reikia ne tik suvokti, bet ir pasiryžti pakeisti aplinkybes.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O tai padaryti sunku, reikia valios. Ir čia kyla klausimas: ar mano sąmonė pajėgi išsiveržti iš minios sąmonės liūno?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Manau, taip.",
    time: 1500,
  },

  {
    who: "",
    type: "text",
    text: "Ar jauti nepasitenkinimą gyvenimu, nesi tikras dėl ateities, jauti baimę likti be darbo, esi įsitempęs darbe, mokykloje, tave apima beprasmybė neproduktyviai išnaudojant savo laisvą laiką?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Esu tikras, kad ne.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tad nesustok viename darbe, ateitis šiais laikais miglota, būk universalus, mokėk adaptuotis, skirk laiko kitoms veikloms.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Išmok mokytis, daug bendrauk, jei nežinai atsakymų, klausk kitų žmonių, stebėk jų patirtį, jų klaidas. ",
    time: 1500,
  },

  {
    who: "",
    type: "text",
    text: "Karjeros siekimas tai ilgas procesas. Kad pasiektume karjeros viršūnes, reikia pereiti per sunkumus ir nemalonumus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aukštas pareigas einantis žmogus yra lyderis savo profesinėje aplinkoje. Taigi ką jie turi:",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Puiki profesinė patirtis, papildomas verslo išsilavinimas, pasitikėjimas savimi, ryžtas – visa tai, žinoma, svarbu sėkmingai vadovo karjerai. Tačiau gebėjimas suprasti darbuotojo poreikius, įvertinti žmogaus motyvaciją padaro vadovą lyderiu.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Lyderis yra žmogus, kuris žino, kaip efektyviai valdyti komandą. Emocinė lyderystė apima labai daug komponentų:",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tai gebėjimas išgirsti, suprasti žmones, gebėti tiksliai motyvuoti. Svarbu mokėti sudėti esminius akcentus ir išsikelti tokias užduotis, kokios būtų įveikiamos darbuotojams. Dar svarbiau yra kontroliuoti savo emocijas, nepasiduoti negatyvui..",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kitas svarbus lyderystės aspektas – gebėjimas suformuluoti ir realizuoti bendrą tikslą bei nuosekliai vesti savo komandą laimėjimo link. Jei visa komanda tokio supratimo neturės, tai kiekvienas atliks tik jam priklausančias funkcijas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Darbuotojai neturės bendrų verslo tikslų – nuo ​​metinio plano įgyvendinimo iki strateginio lyderiavimo rinkoje. Taikant šį metodą, prarandama bendrosios sąveikos sinergija, o tai visada pavojinga.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Sėkmingas vadovas  – tai žmogus, užsiimantis vidine ir išorine vykstančių įvykių analize. Kad ir kas atsitiktų, kad ir kokios užduotys būtų siunčiamos, pirmiausia, jis turi užduotį išsikelti sau: kodėl tokia situacija vyksta dabar ir kokias išvadas turėčiau padaryti? Kas mane atvedė į šį laiko ir erdvės tašką? Kuris iš mano sprendimų lėmė susiklosčiusią situaciją?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šiame lygmenyje turite būti nepaprastai sąžiningi ir atskirti išorines priežastis, kurioms mes neturime įtakos, ir vidines priežastis, kurias mes kontroliuojame ir beatodairiškai analizuoti pastarąsias.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Klysti yra gerai. Kiekvienas turi teisę klysti, todėl svarbu atleisti sau už savo klaidas ir leisti žmonėms padaryti savo. Dažnai patirdamas nesekmes, pavyzdžiui, nesuprasdamas verslo struktūros ar priešindamasis iškeltoms užduotims, pavaldinys įgis svarbios patirties ir taps komandos dalimi.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ne kiekvienas vadovas suvokia, kad klaida yra natūralus ir dažnai neišvengiamas žingsnis siekiant suprasti verslo tikslus ir suprasti savo vaidmenį komandoje.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Vadovo užduotis – tobulėti, kelti sau naujas užduotis. Sėkmingo vadovo užduotis taip pat yra ugdyti savo pavaldinius, kelti jiems naujas užduotis, perkelti į naujus lygius.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Peržengti savo ribas. Vadovo įtaka darbo procese viršija jo fizines galimybes. Tikro lyderio ištarti žodžiai išlieka svarbūs ir už darbovietės sienų.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pasitikėk žmonėmis. Leisk jiems dirbti laisvai. Tai vienintelis būdas ugdyti darbuotojų atsakomybę. Tai tas pats, kas vaikystės kelias į mokyklą. Niekada jo nebūtume įsiminę, jeigu mama vieną dieną mūsų nebūtų išleidusi vienų. Tik klausimas, kaip laiku tai daroma.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Spręsk gyvenimo problemas, padėk žmonėms ir pasaulis bus proporcingai geras tau.",
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
