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
    text: "Tėti, sakyk, ar svarbu, kad darbas teiktų malonumą, ar svarbiausia – pinigai?",
    time: 0,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Abu svarbūs.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O kas yra darbas?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Niekam neprilygstanti gremėzdiška statinė, elegantiškas laikrodis, belaidės ausinės, tokie skirtingi daiktai ir vis dėlto jie yra vienodi. Visi šie daiktai tapo realybe, prisilietus žmogui.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Darbas daro stebuklus.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Daugelį metų rūda gulėjo žemės gelmėse. Žmogus įdėjo daug darbo ir gavo plieno. Iš plieno buvo padarytas traktorius ir plūgas, traukinys ir bėgiai, plunksnos ir stygos.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Padėk darbą ant paprasto medžio ir jis pavirs namu ar baldais.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Pavyzdžiui, norėdamas pagaminti laikrodį, tau reikės daugiau darbo nei pagaminti statinę, todėl ir laikrodžių kaina yra didesnė.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Kai buvo keičiamasi prekėmis, žmonės nesąmoningai lygino, kiek darbo buvo įdėta į kiekvieno daikto gamybą. Jeigu tolygiai, tuomet prekės buvo keičiamos viena į kitą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O jeigu prekei pagaminta buvo skirta daugiau laiko ir darbo nei kitai?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Tada už vieną pirmos gabalėlį reikia duoti tris antrosios.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Bet kaip matuojamas darbo kiekis?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Jo trukmė, kitaip tariant darbo laikas. Tačiau žmonės dirba skirtingai. Vieni savo verslą išmano gerai, kiti prasčiau, vieni – greiti, kiti – lėti. Panašiems daiktams pagaminti gali prireikti nevienodai laiko.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Bet ar tai reiškia, kad tinginio siuvėjo per keturias dienas pasiūtas kostiumas yra brangesnis už tą patį kostiumą, pagamintą per dvi dienas?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Žinoma, kad ne!",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Kostiumo kainai nustatyti padeda skirtingų siuvėjų vidutinis darbo laikas. Anksčiau kostiumai buvo siuvami rankomis. Tai užtrukdavo ilgiau. Siuvimo mašinos labai paspartino ir palengvino darbą. Padidėjo darbo našumas, sumažėjo kostiumų kaina.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "O dabar sakyk, Rimai, kokį gyvenimą įsivaizduoji  po dešimties ar penkiolikos metų?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Norėčiau, žinoma, susirasti įdomų darbą, būti gerbiamas žmogus, turėti didelę šeimą. Norėčiau aplink matyti tik laimingus žmones.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Aš taip pat maniau, kai buvau tavo amžiaus. Kaip manai, ar man tai pavyko?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip!",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Ir taip, ir ne. Didelę šeimą sukūriau vėliau ir dažnai būdavo sunku, neužtekdavo pinigų. Šis butas, kuriame gyvename, buvo pirktas neapgalvotai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Manau, išlaikyti šeimą nėra lengva. Negalima skirti visų santaupų tik buto įsigijimui. Reikalingas automobilis, maistas, kitos prekės. Vadinasi, reikia aukotis?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Niekas neturi kentėti ar aukotis. Jaunystėje padariau daug klaidų. Mes galėsime šiandien pasimokyti ekonomikos. Nors vyresnėse klasėse jūsų to mokys, bet aš manau kuo anksčiau pradedi suprasti pinigų vertę, tuo paprasčiau susiklosto gyvenimas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai iki trisdešimties galėsiu visą tai turėti? Nagi, pasakyk man!",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Ar prisimeni, kaip vaikystėje siūliau pačiam apsipirkti parduotuvėje, kad įgautum pirmąją savo patirtį parduotuvėje?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, buvo smagu.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "O ar norėtum dabar pabandyt…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ką? Sutaupyti naujam būstui?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Nekilnojamas turtas bus vėliau.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Pirmiausia, sutvarkykime savo šeimos finansus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar gerai suprantu, kad turi galvoje mūsų šeimos biudžetą?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Tikrai taip. Jau tiek žinai, nebus sunku.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Žinoma, ir jei ką – internetas man padės. Pavyzdžiui… Žiūrėk, įvedu į paieškos langelį žodį „biudžetas“. „Biudžetas“ yra žodis, reiškiantis pajamų ir išlaidų schemą. Žodis kilęs iš Prancūziško „baguette“, reiškiantis „odinis krepšys, piniginė“.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Taip, - eikime toliau! Taigi, biudžetas, sakyčiau, pajamos ir išlaidos. Visgi, pirmiausia reikia užsidirbti pinigų, o tik tada juos išleisti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Dėl išlaidų, siūlau pakeisti automobilį. Mūsų automobiliui jau 4 metai, neseniai pasirodė naujas modelis, naujo dizaino, su LED žibintais…",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Kodėl turėtume keisti automobilį?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nes tuoj visi iš mūsų juoksis!",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Supratau, tai tau svarbiau kitų nuomonė ir tai, kaip atrodai kitų žmonių akyse?  Net jei nėra ko valgyti?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kodėl nėra ko valgyti?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Nes tu peršokai svarbiausius poreikius!",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tėtis priėjo spintą, išsiėmė enciklopediją, kelias sekundes kažko ieškojęs atsivertė knygos vidurį.",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Žiūrėk štai čia. Buvo toks amerikiečių psichologas vardu Abraomas Maslow, jis sugalvojo žmogaus poreikių piramidę, kuri dažniausiai tenka mūsų išlaidoms.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Maslovas tikėjo, kad tol, kol žmogus nepatenkins tų poreikių, kurie yra pačiame šios piramidės dugne, jam nereikės aukštesniųjų poreikių.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai kas?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Na, sakei, kad tau reikia naujos mašinos. Pelnytum kitų žmonių pagarbą, bet tai piramidės viršuje.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tai nori pasakyti, kad, pirmiausia, turime planuoti išlaidas „fiziologiniams poreikiams“? T. y. maistui?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Ir ne tik tai.  Pirmiausia, žmogus turi būti sotus ir apsirengęs, kad būtų šilta ir patogu. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Sutinku.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po kelių minučių...",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Atrodo dabar tinkamai sudėliojai prioritetus, tačiau naujas automobilis man vis tiek nepatinka.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Bet aš viską dariau pagal Maslow piramidę, tenkinu fiziologinius poreikius…",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Tu labai nori atnaujinti automobilį. O kaip dėl savaitgalių su šeima, kavinės, arbatpinigiai, dovanos?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Aš myliu savo šeimą!",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Bet ar užteks tau pinigų tam?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Mums reikia suskaičiuot, kokį gauname atlyginimą, teisingai?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, vienas iš mūsų šeimos atlyginimas 1500eurų, o kitas 950 eurų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Rimas paėmė popieriaus lapą, ant viršaus užrašė „pajamos“ ir pradėjo užrašinėti tėčio vardijamus skaičius.  Vėliau “išlaidos”. Sąraše atsidūrė: kuras, servisas, baudos, draudimas, buitinės prekės, maistas, apranga ir t.t",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nemaniau, kad išlaikyti automobilį yra taip brangu…",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Viskas gerai, mes dar mokomės. Užduosiu porą klausimų, norėčiau pažiūrėti, koks tavo finansinio raštingumo lygis, jeigu ko nežinosi galėsi rasti šitoje knygoje.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Na, tikiuosi, kad nebus sunkūs….",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Pradėkime..",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "1. Kuri iš ekonomikos teorijos mokyklų istoriškai buvo pirmoji:",
    time: 1500,
  }, 
  {
    who: "Tėtis",
    type: "text",
    text: "A) Marksizmas B) Merkantilizmas; C) Keinsizmas D) Marginalizmas; E) Klasikinė politinė ekonomija.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Knygoje radau, jog atsakymas B. Merkantilizmas ",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Teisingai, beja ši ekonomikos teorija, įsigalėjusi XVII a. Anglijoje. Merkantilistai teigė, kad svarbiausia valstybės klestėjimo sąlyga – aktyvus prekių pardavimas mainais į auksą. Kuo šalis turėjo daugiau aukso ir sidabro, tuo ji buvo laikoma turtingesne.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Skaičiavimo užduotis:",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Pilietis vardu Nojus paima banko paskolą 200 tūkstančių eurų dviems metams, metinė palūkanų norma 25%.",
    time: 1500,
  },

  createQuiz("Kiek jis sumokės bankui pasibaigus nurodytam terminui?:"
  , ['<div><input type="radio" name="q1" id="opt1"><label for="opt1">Ar tai bus - 200 tūkstančių eurų</label></div>',
      '<div><input type="radio" name="q2" id="opt2"><label for="opt2">Ar tai bus - 250 tūkstančių eurų</label></div>',
      '<div><input type="radio" name="q3" id="opt3"><label for="opt3">Ar tai bus - 300 tūkstančių eurų</div>',
      '<div><input type="radio" name="q4" id="opt4"><label for="opt4">Ar tai bus - 400 tūkstančių eurų</label></div>'], "Teisingai ", "Pro šalį, teisingas atsakymas: 300 tūkstančių eurų", "opt3"),


  {
    who: "Tėtis",
    type: "text",
    text: "...",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Na?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Atsakymas 300 tūkstančių eurų?",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Taip!",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Paskutinis, kurį tikrai atsakysi.",
    time: 1500,
  },
  createQuiz("Amerikiečių psichologas ir ekonomistas, sukūręs poreikių klasifikavimo pagrindą:"
  , ['<div><input type="radio" name="q1" id="opt1"><label for="opt1">Ar tai bus - A. Smitas</label></div>',
      '<div><input type="radio" name="q1" id="opt2"><label for="opt2">Ar tai bus - K. Marksas</label></div>',
      '<div><input type="radio" name="q1" id="opt3"><label for="opt3">Ar tai bus - A. Maslow</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas: A. Maslow ", "opt3"),


  {
    who: "Tėtis",
    type: "text",
    text: "...",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Nuostabu iš mūsų pokalbio šiandieninio jau atsimeni.",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Beliko paskaityti knygas apie ekonomiką ir finansus. Būsi tikras ekspertas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O ką daryti, jeigu norėsiu nupirkti daiktą, kuris nebus reikalingas?",
    time: 1500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Visada stebėk pajamų ir išlaidų biudžetą. Apgalvok, ar jis subalansuotas ir ar bus patenkinti pagrindiniai žmogaus poreikiai: fiziologiniai, saugumo ir meilės poreikis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O kaip suprast – meilės?",
    time: 3500,
  },
  {
    who: "Tėtis",
    type: "text",
    text: "Šeimoje meilė, supratimas ir palaikymas yra svarbiausios vertybės. Šeimoje reikia paisyti visų šeimos narių interesų. Negalima įsigyti brangaus automobilio, nes to nori tu. Šeimoje reikalinga pusiausvyra.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Supratau, nuo šiol stengsiuosi daugiau skaičiuoti pinigus, man prireiks kompiuterio ir naršyklės, o ten įvesiu “finansinis raštingumas”...",
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
