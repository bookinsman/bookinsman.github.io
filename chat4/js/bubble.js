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
    who: "Skruzdė",
    type: "text",
    text: "Visi kas girdite, būkite atsargūs. Matau dar vienas krenta!",
    time: 0,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Judam",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Judam",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Judam",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Turim apsaugoti būsimą lėliukių koloniją.",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Greitai, greitai – jūs gi to buvote mokyti!",
    time: 3500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Ej, tu! Kodėl stovi kaip įbestas? Uždenk lėliukes savo kūnų nuo krintančių lašų!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš?",
    time: 3500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Tu, tavo kolega, visi jūs, greičiau neškite lėliukes. Turime surasti naujus namus, kol užtvindyti seni.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kodėl mano rankose gleivėtas baltas padaras ir aš turiu dar jį nešti kažkur.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Palauk, viskas taip smulku. Aš skruzdėlė!?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ej, skruzdėle, ką mes čia veikiame?",
    time: 3500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Darbas, darbas, darbas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ar ilgai mes nešime šituos gleivėtus padarus?",
    time: 1500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/xFmC3VM0A83JyWncotDwYUet5cncqEoQuG5DIC_A7U-3pFEgsPdUVU97KOIn_YtzIfw48TyVde15tCfqhzYGm8O-fIuiZcyfvf7HR73r0XCdoWekeO7GR_wisdnYUrLzV7FcE6hSwg=w2400",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Darbas, darbas, darbas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kol aš bandžiau rasti atsakymą, mane sužavėjo, kad toks mažas padaras galėjo pakelt dvidešimt kartų už save sunkesnį svorį.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nepastebėjau, kai įžengiau į didžiulį labirintą. Kaip čia viskas organizuota: sienos, oro vedinimas, maistas, – viskas savo vietose.",
    time: 1500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/q_SU9lfAvEajU9ATebilSX8oGABlACtZzWB_aZngL711Rn4ET30Wp9ZDNucewaIF9mnSYLeEJaYmaT23Bb8Ts6yPQAhC3pE9DtzIsa-g0TUq6AzP-DsrwzGXGGs1yijxIyNyl8AZGQ=w2400",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O čia dabar kas? Kodėl visi sustojo?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Po kelių minučių vėl viskas pradėjo judėti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Atsiprašau, pone, ar galite paaiškinti, kodėl čia visi buvo sustoję?",
    time: 3500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Keista, jog tokio paprasto dalyko nežinai, bet mes labai daug dirbam ir greitai pavargstam, todėl į dieną darom šimtai mažų pertraukų.",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Ir tau nederėtų su manim kalbėti, greitai eik dirbti!",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Dirbti aš tikrai nesiruošiau, nes mane patraukė kažkoks saldus kvapas. Pajaučiau saldų takelį, kuriuo pradėjau keliauti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Praėjus minutei, stovėjau priešais šitą keistą augalą ir jaučiau vis stiprėjantį kvapą, nuo kurio negalėjau atsitraukti nė žingsnio.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pradėjau lipti, labai įdomus jausmas turėti lipnias kojytes, su kuriomis galima įkopti bet kur. ",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Jei būčiau Tavo vietoje, tikrai nerizikuočiau gyvybe.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kodėl?",
    time: 3500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Žinau tą viliojantį kvapą, bet šitie į kolbą panašūs augalai kaupia savyje nuodingą skystį ir tai yra mirtini spąstai mums. Šis skystis nuodija vabzdžius.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tikriausiai juokauji...",
    time: 3500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/ir19MVTd_xoKf5uTXQce_pLr0xuGEExoqdGLrqRa2cncdLXD6iesT38vRZHs5CAcrVV2vDtZp_7HaNHBRCcI1Xg6wn9zy_jBzfvTPnepeR_s3zYkmrW5Xq-y_k1N0cTHCqmEe8XUhQ=w2400",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Ir tai dar ne viskas. Viduje ne tik skystis, bet laukia ir kai kurie vabzdžiai, kurie atsparūs šiam skysčiui. Jie turi imunitetą. Tačiau jeigu tu ten patenki, tavo priešai pradės tave valgyti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ką? Galiu tapti maistu savo rūšies broliams?",
    time: 3500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Tikrai taip. Silpni čia neišgyvena.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Dėkui, kad išgelbėjai gyvybę.",
    time: 3500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Dirbame išvien, būtum tą patį padaręs ir dėl manęs.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O kodėl Tu nedirbi su kitais?",
    time: 3500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Ugnis…. Prieš kelias savaites numestas stiklo butelis uždegė mūsų visą namą, nuo karšto vėjo nudegė man svarbūs jutiminiai organai. Tad su grupe daugiau negaliu keliauti, visada pasimetu, neatnešu maisto ir kovose esu silpnas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Užjaučiu Tave.",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Viskas gerai, aš gavau laisvę, kitos negali tiek pasidžiaugti kiek aš, nes viską, ką jie daro, tai tik dirba.",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Už Tavęs jau kaupiasi sekantis lietaus ciklonas, pažiūrėk į dangų, verčiau pradėk bėgti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "O į kurią pusę man bėgti.",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Va ten.",
    time: 1500,
  },
  {
    who: "Skruzdė",
    type: "text",
    text: "Ten galėsi užlipti aukštai, bus ir stogas.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pradėjau bėgti, kaip patarė draugas. Griaudėjo ir kaupėsi lietaus lašai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aptikau prieš save kažkokį pailgą, spalvotą, iš plastmasės padarytą daiktą. Ant jo ir užlipau.",
    time: 3500,
  },
  {
    who: "Mantas",
    type: "text",
    text: "Štai kur mano dangtelis nuo tušinuko, o aš jo vis ieškojau.",
    time: 1500,
  },
  {
    who: "Silvija",
    type: "text",
    text: "Mantai, greičiau, tuoj vėl lietus prasidės, o be to, jau vėluojame į pamoką.",
    time: 3500,
  },
  {
    who: "Silvija",
    type: "text",
    text: "Ir nuvalyk tą dangtelį, ten gali būti pilną vabalų…",
    time: 3500,
  },
  {
    who: "Mantas",
    type: "text",
    text: "Greičiau bėkim, nėra ten jokių vabalų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Skambutis į pamoką.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Štai atėjo mūsų ketvirta diena. Šiandien noriu palinkėti, kad toliau tęstumėte ir būtumėte užsispyrę atlikdami savo darbus.",
    time: 3500,
  },
  {
    who: "Klasė",
    type: "text",
    text: "Taip, mokytojau.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Šis jausmas labai stiprus, iš karto atskirsite žmogų, kuris nėra užsiėmęs savo veikla.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kiekvienas iš jūsų domitės vis kažkuo nauju. Atrandate, kas suteikia malonumo, o kas nepatinka.",
    time: 3500,
  },
  {
    who: "Silvija",
    type: "text",
    text: "Aš nepatinkančių dalykų stengiuosi išvengti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ir labai gerai elgiesi. Noriu pasakyt, kad bet kuriame gyvenimo etape nesustokite uždavinėti klausimus.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kartais atrodo, kad užduotas klausimas gali sugėdinti mus arba sudaryti nuomonę, jog esate ne itin protingi kitų atžvilgiu. Bet dėl šito tikrai nereikia jaudintis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jūs kuriate savo atskirą gyvenimą, kai kurių žmonių niekada daugiau nesutiksite, tad neleiskite, kad jų nuomonė apie Jus trukdytų siekti pasirinktų tikslų.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Turite klausimą? Norite gauti atsakymą? Eikite ir pasiimkite jį, tai vienintelis būdas ir aš tikiu, kad Jūs taip ir elgsitės.",
    time: 1500,
  },
  {
    who: "Bernardas",
    type: "text",
    text: "Tada aš turiu klausimą.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip?",
    time: 3500,
  },
  {
    who: "Bernardas",
    type: "text",
    text: "Iš kur žinoti ar klausimas užduotas teisingai? ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kaip ir koks bus užduotas klausimas, atitinkamai toks bus ir atsakymas. Jei jis išsprendžia tavo problemą, reiškia ir klausimas, ir atsakymas buvo tinkami.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Visada prieš užduodant klausimą, turi įsitikinti, ar tikrai negali pats rasti atsakymo.",
    time: 3500,
  },
  {
    who: "Bernardas",
    type: "text",
    text: "Bet tai užima labai daug laiko. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, bus daug nereikšmingos informacijos, bet toks savaiminis paieškos būdas gali apmokyti tave ir paruošti reikiamam atsakymui, kurio gal nerasi pats, bet tavo loginis mąstymas Tave prives prie teisingo atsakymo.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Reikia žinoti, kad ieškojimas atsakymų arba skaitymas būna paviršutinis arba ne.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Įsivaizduok vandens statinę. Tebūnie ji būna šilta, nors tai reikšmės visiškai neturi. Jei lazdos galą įkišime į vandenį ir pradėsime sukti ratu, vanduo pradės judėti prie paviršiaus, bet ne giliau. O dabar nuleiskime mūsų lazdą iki pat dugno ir pradėkime sukti ratais. Visas vanduo pamažu pradeda judėti.",
    time: 1500,
  },
  {
    who: "Silvija",
    type: "text",
    text: "Tai šis palyginimas iliustruoja skirtumą tarp negilaus mokymosi ir gilaus?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Visiškai teisingai, kartais atsitinka taip, kad, perskaityta ir apmąstyta knyga arba gilus pokalbis su nepažįstamu, nulemia visą žmogaus gyvenimą!",
    time: 1500,
  },
  {
    who: "Valdas",
    type: "text",
    text: "Bet aš taip tingiu domėtis kažkuo, ypač gilintis ir knygą apmąstyti. Perskaitau ir užtenka.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tai labai paprasta paaiškinti. Paviršutinišką būdą lydi labai minimalus protinis darbas, nes smegenys tingi ieškot ir dirbti, jos kitaip tariant prieš mus, tad reikia surast valios ir jėgų, kad priversti paklusti mums.",
    time: 3500,
  },
  {
    who: "Dainius",
    type: "text",
    text: "Mano reakcija būna negatyvi, kai man kažką liepia padaryti sunkesnio, tiesiog protas nenori tuo užsiimti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš atskleisiu paslaptį. Yra normalu tingėti skaityt, mokytis, reik tik rasti būdą, kaip save motyvuoti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mus gali veikti žinių troškimas ar poreikis plėsti pasaulėžiūrą. Gali atrodyti, kad be išsilavinimo neįmanoma suprasti šiuolaikinio gyvenimo ir toji baimė veiks kaip motyvacija.",
    time: 1500,
  },
  {
    who: "Emilija",
    type: "text",
    text: "O galite, mokytojau, atsakyt – ar taip jau skiriasi išsilavinęs žmogus nuo neišsilavinusio?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Išsilavinęs nuo neišsilavinusio labiausiai skiriasi ne informacijos kiekiu. Žinomas anglų mąstytojas pasakė, kad jei žmogus perskaitys ir išmoks mintinai visas Britų muziejaus (viešosios bibliotekos) knygas, jis dar netaps išsilavinęs.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mums reikia ne tik informacijos, o mokėjimo tą informaciją panaudoti tinkamu metu ir tinkamoje vietoje. Turime gebėti valdyti savo sukauptas žinias.",
    time: 1500,
  },
  {
    who: "Tomas",
    type: "text",
    text: "O tai ką reikia daryti, kad gautume ne tik daug informacijos, bet ir žinių, kurios padės gyvenime?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O gi reikia saviugdos, o ji reikalauja saviveiklos.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Būtina lavinti savo protinius gebėjimus, kaip ugdome fizinius. Saviugdoje darbas su savimi turėtų būti pats rimčiausias, atkakliausias, sunkiausias ir dažnai labai ilgas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Geras skaitymas paprastai sukelia daugybę kitokio pobūdžio klausimų ir minčių.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Vertiname autoriaus mintis, sutinkame arba nesutinkame. Jei sutinkame, tada lyginame jas su savomis, darome išvadas, keliame klausimus. Jei nesutinkame, kritikuojame, bandome paneigti ir panašiai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar dabar galėtų Laurynas apibendrinti mūsų temą?",
    time: 1500,
  },
  {
    who: "Laurynas",
    type: "text",
    text: "Jeigu norime įsisavinti informaciją, reikia sutelkti dėmesį į tai, ką skaitai. Išgryninti svarbiausius aspektus; suprasti autoriaus mintį. Tai padės ugdyti savo minčių aiškumą. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Oho, Laurynai, labai taikliai pasakyta.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Visi iš pradžių būname išsiblaškę, bet turite susikoncentruoti ir išlaikyti dėmesį. Tie, kurie pasiduoda, niekada negaus prieigos prie įdomiausių minčių, kurios slepiasi giliai knygos dugne.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tad nesustokite ir ieškokite, o atsakymą tikrai surasite.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Dėkui, kad buvote šiandien su manim, o mes dabar pasimatysime kitą dieną, iki.",
    time: 1500,
  },
  {
    who: "Dainius",
    type: "text",
    text: "Kas čia dabar po mano ranką landžioja??",
    time: 1500,
  },
  {
    who: "Dainius",
    type: "text",
    text: "Skruzdė! Padėsiu tave ant palangės, eik, surask savo draugus…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šiandien tema baigta, kita tema bus kitą dieną!",
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
