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
    text: "Sveiki.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Ar mane kas girdi?",
    time: 1500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Sveiki, taip, puikiai jus girdžiu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Labai gerai, bandžiau su jumis susisiekti jau kelias valandas, tačiau taip ir nepavyko.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Esu Lukas. Aš astronautas kosminio laivo įguloje pavadinimu „Dariano“.",
    time: 1500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Tuoj patikrinsiu, palaukite minutėlę. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ne, prašau, nepadėkite ragelio. Ilgai laukiau, kol atsiliepsite.",
    time: 3500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Tuoj minutėlę, man reikia tik patikrinti…",
    time: 1500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Taigi Jūs esate įgulos narys kosminio laivo „Dariano“, kuris turėjo nugabenti krovinį į mėnulį, taip?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tikrai taip.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mes patekamo į kosminę turbulencinę zoną. Mano kajutės durys uždarytos, čia beveik nėra šviesos, o per raciją niekas neatsako.",
    time: 3500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/SuU0mbdKhYbpVzOXC6KIVWYQoswTJ4DBcXFEyNdARqyWATd6_4yEKMCEQqDdiK3Rm6y3r_7-I33rHjfdmunx2L2LPYf2bxRmkXub4GlDPj9n60d7pwEj0SCVWiAhAguODEMrm_y2wQ=w2400",
    time: 1500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Ar galėtumėte patikslinti savo vardą?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Lukas… Lukas Gornas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pradėjo cypsėti daviklis.",
    time: 3500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Lukai, kas čia taip cypsi?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai yra mano kosminio kostiumo daviklis. Kai kostiumas pakrautas, deguonies užtenka 5 valandoms. Kostiumo slėgis matuojamas paskaliais (Pa). Kai kostiumas pilnai pakrautas rodo 200 Pa, šiuo metu likę 17 procentų.",
    time: 1500,
  },

  createQuiz("Man liko..."
  , ['<div><input type="radio" name="q1" id="opt1"><label for="opt1">51 minutė</label></div>',
      '<div><input type="radio" name="q1" id="opt2"><label for="opt2">34 minutės</label></div>',
      '<div><input type="radio" name="q1" id="opt3"><label for="opt3">17 minučių</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas,34 minutės", "opt2"),
      {
        who: "",
        type: "text",
        text: "...",
        time: 3500,
      },  {
        who: "",
        type: "text",
        text: "...",
        time: 3500,
      },
  {
  who: "Operatorius",
  type: "text",
  text: "34 minutės",
  time: 3500,
  },    
  {
    who: "",
    type: "text",
    text: "Tiesa.",
    time: 3500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Supratau, Lukai, turime tau pranešti vieną žinią.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kokią dar žinią? Esu įstrigęs dideliame kosminiame laive. Galėčiau apsieiti ir be naujienų.",
    time: 1500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Noriu pranešti, kad Tavo laivas laikomas dingusiu jau septynerius metus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Atsiprašau, išgirdau sakant, kad esu įstrigęs čia 7 metus. Gal patikslinsite – ne metus, o valandas, taip, operatoriau?",
    time: 1500,
  },
  {
    who: "Operatorius",
    type: "text",
    text: "Deja, bet tai yra tiesa. Šiuo metu dirba daug žmonių, kad galėtume suprasti, kas vyksta, kur jūs esate ir kaip galėtume jums padėti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Septyneri metai? Jūs tikriausiai juokaujate... Man reikia kuo greičiau iš čia ištrūkti….",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po kelių valandų prie operatoriaus atskrido specialiosios operacijos įgula.",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Lukai, sveiki, kapitonas Jurgenas trukdo",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kapitone, Jūsų balsas man labai girdėtas. Ar galėjau Jus kur nors girdėti? Mažai ką prisimenu iš savo praeities. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ar mane vis dar girdite?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ką toliau turiu daryti?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Minutės tyla eteryje.",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Lukai Gornai, negaliu patikėti, kad tai Jūs. Aš esu jūsų vadas žemėje. Prieš daug metų subūriau komandą iš 4 žmonių kelionei į kosmosą. Sakykite, ar kiti įgulos nariai kartu su jumis?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Atsiprašau, pone. Aš kajutėje ir negaliu atidaryt durų, nes reikia kodo, kurio neprisimenu. Sugebėjau tik susisiekti su operatoriumi.",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Taip, Jūsų įgula turėjo paimti ypatingą materiją, kuri susiformavo mėnulyje. Tačiau keliaudami į mėnulį patekote į juodąją duobę, kurios nefiksavo jokie rodikliai.",
    time: 1500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Šiuo metu mūsų davikliai Tavęs nemato. Išeik iš kajutės ir ant kapitono valdymo panelės paspausk radijo sekiklį, kuris greičiausiai yra išjungtas. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Supratau, Kapitone.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Šiuo metu esu prie durų.",
    time: 1500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/M9HXx-ASqEbChw5fIo1KluNbg6EZK6otlt1vVsaYtSy2h2knsJzmopJXiIxBMQgdmw1ENQf-2rjbkf9h9jsagR2GhIXdcbsi4ZvHGA64i6soLy2j3VSaJN6h4m9aUd6FXSjAjn4z4w=w2400",
    time: 1500,
  },

  createQuiz("Būtinas kodas:"
  , ['<div><input type="radio" name="q2" id="opt4"><label for="opt4">Kodas - A</label></div>',
      '<div><input type="radio" name="q2" id="opt5"><label for="opt5">Kodas - B</label></div>',
      '<div><input type="radio" name="q2" id="opt6"><label for="opt6">Kodas - C</label></div>',
      '<div><input type="radio" name="q2" id="opt7"><label for="opt7">Kodas - D</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas - kodas - A", "opt4"),
      {
        who: "",
        type: "text",
        text: "...",
        time: 3500,
      },
      {
        who: "",
        type: "text",
        text: "...",
        time: 3500,
      },
      {
        who: "",
        type: "text",
        text: "...",
        time: 3500,
      },
  {
    who: "",
    type: "text",
    text: "Taip, man pavyko. Turiu šiek tiek pailsėti, nes deguonies lygis krenta.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Lukas praėjęs erdvėlaivį nieko neaptiko. Dabar jis stovėjo priešais kapitono langą, pro kurį atsivėrė neregėtas vaizdas….",
    time: 1500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Lukai, ar mane girdite, čia kapitonas.",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Ką Jūs matote?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, girdžiu ir matau…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Matau raudonai geltonos spalvos sieną, kuri nuolatos keičiasi, šviečia labai ryškiai. Daugiau nieko, pone.",
    time: 3500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/vjKDKB8SagXqj9JLoLV6IjvL-Z5jgdSwJ_H5jFsN5lcCnso8OaUItiyBH9CIpyKqYrix47F70lwDw3hUudvL7RYCskBtvzBdZyQbj2VwxhrLrEqm8fVqtLnH_OZk3zz66HtEIDb0Qw=w2400",
    time: 1500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Supratau.",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Pabandykite paspaust GPS mygtuką, galbūt tai padės mums atsekti jūsų buvimo vietą.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tuojau",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Čia trūksta energijos skysčio, kad įsijungtų GPS. Pamenu, kad į bakelį reikia įpilti lygiai 4 litrus, o matavimo skalė sulaužyta. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Lukas apieškojo laivą ir surado du skirtingus indelius. Vienas trijų litrų ir penkių litrų.",
    time: 3500,
  },

  createQuiz("Ar jam pavyktų įpilti vieną litrą turint 20 litrų skysčio?"
  , ['<div><input type="radio" name="q3" id="opt8"><label for="opt8">Taip</label></div>',
      '<div><input type="radio" name="q3" id="opt9"><label for="opt9">Ne</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas, taip. Pirmiausia užpildykite 5 litrų bakelį ir iš jo supilkite 3 litrus į 3 litrų bakelį. Dabar 5 litrų bakelis turite 2 litrus. Ištuštinkite 3 litrų bakelį. Supilkite 2 litrus į tuščią 3 litrų bakelį. Tada pripildykite 5 litrų bakelį ir iš jo supilkite 1 litrą į 3 litrų bakelį, kad užpildytumėte šią talpą. Galiausiai, didesniame bakelyje dabar yra lygiai 4 litrai!", "opt8"),
  {
    who: "",
    type: "...",
    text: "Tuojau",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "...",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "...",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, man pavyko, ar Jūs mane matote?",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Drauguži, mes Tave aptikome….",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Kažkodėl rodo, kad Tavo laivas yra 20 kilometrų po žeme. Tai, ką Tu vadinai ryškia šviesa, yra magma, kuri Tavo laivą skandina vis giliau į žemės branduolį.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O ką turiu daryti toliau? Man liko 2 minutės deguonies. Prašau, padėkite. ",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Tau tereikia išgirst balsą.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ką?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kokį balsą?",
    time: 3500,
  },
  {
    who: "Jurgenas",
    type: "text",
    text: "Tau tereikia atsibusti. Ar girdi, kaip Tave kviečia?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pabusk, Pabusk.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ir Lukas pabudo. Tai buvo jo šešerių metų dukros balsas. Dukrytė norėjo pusryčių. Žadino tėvą astronautą, kuris vos už kelių mėnesių turi išskristi į mėnulį.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Gabriele, nepatikėsi kokį aš sapną Tau dabar papasakosiu…",
    time: 3500,
  },
  {
    who: "Gabrielė",
    type: "text",
    text: "Manau bus labai įdomus, bet aš noriu valgyti!",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pavalgę jiedu atsisėdo ant patogios sofos ir Lukas nupasakojo dukrytei savo sapną. Mąstė, ką gi galima nuveikti tokį gražų rytą...",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O žinai ką?",
    time: 3500,
  },
  {
    who: "Gabrielė",
    type: "text",
    text: "Ką?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Išspręskime kartu užduotį.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Įsivaizduok, kad mes esame mėnulyje. Ir staiga mūsų laivas sudužo.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Priverstinai leidomės tamsiojoje Mėnulio pusėje. Kitoje mėnulio pusėje mūsų laukia tinkamas naudoti raketinis lėktuvas be įgulos. Jam pasiekti reikia 250 kilometrų. Pusė kelio yra tamsiojoje mėnulio pusėje, pusė – šviesiojoje. Reaktyviniame lėktuve įrengtas radijo imtuvas. Mes su tavim visiškai nenukentėjome.",
    time: 3500,
  },
  {
    who: "Gabrielė",
    type: "text",
    text: "Ačiū dievui, o ką dabar mums daryt?",
    time: 3500,
  },
  {
    who: "Gabrielė",
    type: "text",
    text: "Juk čia taip tamsu…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nesijaudink, laive visada būna sąrašas reikalingiausių daiktų;",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tau, Gabriele, šiuo metu reikia prie kiekvieno daikto parašyti skaičių, kuris būtų naudingas kelyje.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Prie svarbiausio dalyko parašyk skaičių 1, skaičių 2 – į antrą pagal svarbą ir taip iki keturiolikos. 14 žymi mažiausiai svarbų dalyką.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "1. Degtukų dėžutė. 2. Maisto papildai. 3. 20 m. nailono laidas 4. Šilkinio kupolo parašiutas. 5. Nešiojamas saulės šildytuvas. 6. Dėžutė pieno miltelių. 7. Deguonies balionai 2 vnt. po 50 kg. 8. Dangaus žvaigždžių žemėlapis. 9. Savaime prisipučianti gelbėjimo valtis. 10. Magnetinis kompasas. 11. 25 litrai vandens. 12. Signalinės raketos. 13. Pirmosios pagalbos rinkinys. 14. Saulės baterijomis varomas siųstuvas-imtuvas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nepamiršk svarbiausio, kad šioje situacijoje svarbūs yra tie daiktai, kurie reikalingi gyvybei palaikyti. Tai deguonies bakai ir vanduo.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kiti svarbūs dalykai yra navigacijos priemonės. Mėnulyje važiuojant tamsiąja puse gali praversti tik žvaigždžių diagrama, nes tamsoje orientuotis sudėtinga, o šviesiojoje mėnulio pusėje – radijo švyturiui sekti – saulės energija varomas siųstuvas-imtuvas. Kelionė turėtų trukti mažiausiai 5 dienas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kadangi kelionė ilga, tam bus reikalingos jėgos, energija. Kitas dalykas, apie kurį turime pagalvoti, būtų maistas: maisto koncentratai ir pieno milteliai.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Po kelių minučių užduotis buvo atlikta.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tuoj pažiūrėsiu ar teisingai.",
    time: 3500,
  },,
  {
    who: "",
    type: "text",
    text: "1. Deguonies balionai 2 vnt. 50 kg. Būtinas kvėpavimui.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "2. 25 litrai vandens. Troškuliui malšinti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "3. Mėnulio dangaus žvaigždžių žemėlapis. Reikalingas orientuotis tamsiojoje mėnulio pusėje.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "4. Saulės energija varomas siųstuvas-imtuvas. Būtinas norint orientuotis šviesiojoje mėnulio pusėje.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "5. Maisto papildai. Būtinas norint pasiekti tikslą.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "6. 20 m. nailono laidas. Juo gali gabenti krovinius.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "7. Pirmosios pagalbos vaistinėlė. Reikalinga padėti susižeidus, stimuliuoti širdies veiklą ir kt.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "8. Šilkinio kupolo parašiutas. Neįmanoma naudoti pagal paskirtį, tačiau stropus galime surišti ir naudoti vietoj virvės. Pavyzdžiui, jeigu reikėtų kur nors nusileisti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "9. Savaime prisipučianti gelbėjimo valtis. Mėnulyje juo galima gabenti krovinius ar sužeistą žmogų. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "10. Dėžutė pieno miltelių. Jis gali tarnauti kaip maisto papildas, tačiau tai nėra pagrindinis maistas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "11. Nešiojamas saulės šildytuvas.  Kelionei tai nėra pats svarbiausias daiktas. Nes tamsiojoje mėnulio pusėje šis prietaisas neveikia, o šviesiojoje pusėje temperatūra pakyla iki 200°C.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "12. Signalinės raketos. Mėnulio sąlygomis jie yra nenaudingi, nes be oro raketa nepakils.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "13. Magnetinis kompasas. Mėnulis neturi magnetinio lauko. Kompasas neveiks.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "14. Dėžutė degtukų. Be oro jie nedegs",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip tu atlikai viską teisingai, o dabar einame ledų!!!",
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
