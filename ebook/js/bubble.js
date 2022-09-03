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
    text: "Kas čia dabar?",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Mano galva, mano kūnas!",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Jie tokie lengvi it pūkas…",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Kodėl man neišeina kalbėti? Gal gali kas padėti...",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pagaliau galiu valdyti kūną, nuojauta sako, kad man reikia atsispirti ir šokti kuo toliau nuo čia.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nežinoma žemė, tačiau ji nėra kieta, reikia pažiūrėti iš ko ji sudaryta.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ką????",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Negaliu patikėti savo akimis.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Vienas..Du..Trys..Ket...",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, keturios kojos!!!!",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ar mano akys manęs neapgauna?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Štai kodėl man visą šį laiko nepavyko atsistoti kaip paprastam žmogui.",
    time: 3500,
  },
  {
    who: "Žmogus",
    type: "text",
    text: "Koks mielas gyvūnėlis! Ateik, aš Tave paglostysiu.",
    time: 1500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/2Jv_uPgcXuddkgwJlNclb7O4BKErWDAL23VnjVTqDBAzIn1vYCc8rxTSrhmWziZXApOYxExgMnzkuiI-NLLW8fcGbxwhYvn3mS8OXDNBP8RfVG-LVncM53GBrZUWHx_gvEHLyjhU_w=w2400",
    time: 1500,
  },
  {
    who: "Žmogus",
    type: "text",
    text: "Toks gražus ir prižiūrėtas. Keista, kad vaikštai vienas...",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš nežinau, kas atsitiko. Padėkite man, pone, prašau jūsų. ",
    time: 3500,
  },
  {
    who: "Žmogus",
    type: "text",
    text: "Aš surasiu tau namus, mažiuk.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Palaukite, man skauda, netempkite už ausies!",
    time: 3500,
  },
  {
    who: "Žmogus",
    type: "text",
    text: "Katinėli, nesipriešink, tavo kailis toks švelnus, kad...",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Dabar, manau, man pats laikas sprukti kiek kojos neša.",
    time: 3500,
  },
  {
    who: "Žmogus",
    type: "text",
    text: "Oj, iš kur tokie nagai? Tu man visą veidą sužalojai. Ateik čia, pamokysiu aš Tave!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kodėl aš toks greitas? Mokykloje visąlaik atbėgdavau priešpaskutinis, o dabar bėgant net vaizdas liejasi.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Reikia sustoti, manau, jau to keisto vyruko nebėra. Hmm... Įdomi gatvė, anksčiau čia tikrai nebuvau.",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Sveikas, drauguži, gal pasiklydai?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Palauk, Tu esi katinas, kuris gali kalbėti, ir aš Tave suprantu? ",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Aš katinas, Tu katinas. Mes suprantame vienas kitą.",
    time: 1500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Dar kartelį klausiu, pasiklydai?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, pasiklydau ir ne tik, o dar….",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Drauguži, daugiau nieko nesakyk, užtenka kalbų, einam, aš turiu kuo tave pavaišinti, tikriausiai alkanas esi?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Iš tiesų net labai.",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Rikai, koks Tu šaunuolis, atnešei mums maisto.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aš nesu maistas, man pasakė, kad mane pavaišins.",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Taip, žinoma, Tave pavaišins, tik po to, kai mes pavalgysime.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Katinų grupė pradėjo artintis. Netikėtai, be jokių aiškių priežasčių, vienas iš katinų gaujos tiesiog įkando Lorenui į kaklą. Situacija, kurioje atsidūrė Lorenas, darėsi labai įtempta. Jam įkando į uodegą ir staiga, prieš save pamatė, kaip katės skirstosi į skirtingas puses, nes įėjo daug stambesnis katinas. Šis prisiartino prie Loreno ir sustojo prieš jį.",
    time: 3500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/ApTFZjQgEt-gupqBNxLruZhiyjB9w5KLaMB54wvAceKfzyiCCXWxwBwtpDhiLm-mE_phPpM6VrbKViym6UvzC3zyXq1VLqN6Ulocs3G-GulLISNJtcLEJMmS3Jofyj_znYpIIf8CDg=w2400",
    time: 1500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Dabar manęs labai įdėmiai klausyk. Niekas Tavęs nevalgys, tu esi neskanus, bet jei dar kartelį užlipsi savo purvinom kojom į mūsų valdas….",
    time: 1500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Ar pakankamai aiškiai išsireiškiau?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, pone, aiškiau nebūna. ",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Dabar dink, kad Tavęs čia nematyčiau! Prisimink, kad esi skolingas, mes Tavęs pasigailėjome.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Bet mane pakvietė Rikas, kad …",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Aš sakau – dink!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Man daugiau kartoti nereikėjo, greitai pasileidau bėgti. Bėgau, kiek kojos nešė.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ar nuo to, kad greitai bėgau, ar nuo liūdesio, o gal nuo neapykantos skruostais riedėjo ašaros..",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Parke buvo tylu. Priėjęs prie fontano, pamačiau paukščiukus, tačiau šie greit išsisklaidė į skirtingas puses, sukeldami vibraciją vandeny.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Palaukęs kelias sekundes pažiūrėjau žemyn, į vandenį.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Negaliu patikėti, aš esu savo kačiuko kailyje!",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Numalšinęs troškulį, susisukau į kamuoliuką. Šioje pozicijoje jaučiausi saugiausiai, nes gyvybiškai svarbūs organai buvo paslėpti. Šiluma apėmė visą mano kūną, todėl mano akys pradėjo merktis. Aš užmigau.",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Labas, kelkis! Čia geriau negulėti, nes vėliau ateina valytojai ir šluodami vaiko katinus, o tai nėra labai malonus jausmas…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ką? ",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Tu, matau, čia naujokas. Mačiau vakar, jog lėkei, kaip pamišęs, kas tau nutiko?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Na, pasirodo, aš atsikėliau savo katino kūne ir dabar nežinau, kaip sugrįžt atgal į savo žmogiškąjį pavidalą.? ",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Na taip, nepavydėtina situacija.",
    time: 1500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "O ką Tu darei prieš tai, kai viskas įvyko?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Hmm... Dariau namų darbus ir buvau labai piktas, kad reikėjo skaityti. Nesuprantu, kam tai daryti. Trenkiau į stalą, katinas išsigando ir išpylė rašalą. Jis užšoko ant stalo, įlipo į išpiltą rašalą ir pritrepsėjo, paliko daug pėdsakų, o daugiau nepamenu…",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Tai, gal čia ženklas, kad tau reikia surasti atsakymą į savo klausimą? Ir galbūt tuomet atsibusi? ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Galbūt, tikrai nežinau. ",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Turiu vieną žmogų, kuris, manau, tau šiek tiek padės, eikime, supažindinsiu. ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jie kartu nupėdino iki mokyklos, atsigulė ant palangės ir laukė, kol prasidės pirma pamoka. Įėjo dėstytojas ir pamoka prasidėjo…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ar mokiniai geros nuotaikos po atostogų?",
    time: 3500,
  },
  {
    who: "",
    text: "https://lh3.googleusercontent.com/vL7UCgJexAXUCimn8r_cN2oJO8hoRuDb4MVmgsy13_1Lw8f9I0_TG4qi8S0gc3FTvPIeRedOOj92MLg2kd_bEOPqWJMpTdy8IQocZ6yNBwwfhJqwFjVbaSmz70_aHST25UvBvQFoBA=w2400",
    time: 1500,
  },
  {
    who: "Mokiniai",
    type: "text",
    text: "Taaaaaip! – atsakė visi choru.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pasistengsiu, kad pamokos jūsų nuotaikos negadintų. Nenoriu būti jūsų priešu. Aš jums neįsakinėsiu ir nepriekaištausiu. ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Būsiu jūsų draugu, kuris supažindins jus su mokslo įdomybėmis, mano pagalba įgysite žinių, įgūdžių, kurių jums gali gyvenime prireikti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Laikykite mane tiesiog informacijos šaltiniu. Aš jus motyvuosiu, nurodysiu teisingą kelią, įkvėpsiu jus. Tikriausiai turite daug naujų ir įdomių idėjų, taip? ",
    time: 3500,
  },
  {
    who: "Povilas",
    type: "text",
    text: "Deja, mokytojau, aš dabar tikrai jų neturiu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Visi klasėje pradėjo juoktis.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Na, Povilai, viskas gerai. Pirmiausia, reikia išsiaiškinti, iš kur atsiranda idėjos Tavo galvoje.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Gal tu manai, kad kol miegi sau ramiausiai naktį, tada ateina tam tikras idėjų specialistas ir įdiegia krūvą idėjų su specialiu laikmačiu, kad prausdamasis po dušu ar vedžiodamas šunį Tave aplankytų geniali mintis? ",
    time: 3500,
  },
  {
    who: "Povilas",
    type: "text",
    text: "Gal taip, o gal ir ne.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kad sužinotume bet kokią informaciją ar faktą, visų pirma reikia susirasti medžiagą ir ją perskaityti.",
    time: 3500,
  },
  {
    who: "Povilas",
    type: "text",
    text: "Mokytojau, na tai logiška, ar mes ir toliau kalbėsime pirmos klasės lygiu, ar vis dėlto norite pasakyti kažką svarbaus",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Idėjos atsiranda skaitant, ką nors darant ar galvojant.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ir šiandien aš norėčiau labiau įsigilinti į skaitymo svarbą. Taip pat noriu atkreipti dėmesį į informacijos patikimumą.",
    time: 3500,
  },
  {
    who: "Gabrielė",
    type: "text",
    text: "Man skaityti visiškai neįdomu, o skaitau tik todėl, nes liepia.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jeigu vis dar po mūsų diskusijos, skaityti tau bus neįdomu, Tu visada gali atidėti skaitymą, pasiimti ką nors skanaus ir pažiūrėti filmą. Tačiau aš Tau noriu atskleisti paslaptį, kad turi daug įdomesnį dalyką, net už filmą. Tu tai nešioji kasdien ant savo pečių. Tinkamai šį daiktą panaudojus, gali net pati filmą sukurti, o gal netgi nukeliauti į tokias vietas, kur dar niekas nebuvo. ",
    time: 3500,
  },
  {
    who: "Vincentas",
    type: "text",
    text: "Ar mes keliausime į paslaptingas vietas?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Čia jau nuo Jūsų priklauso. Gyvenime nemažai dalykų, su kuriais dar susidursite, priklausys tik nuo Jūsų poelgių ir sprendimų. Kaip išspręsite problemas, konfliktus, dilemas, su tokia sąžine ir gyvensite.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Dėl šios priežasties labai svarbu, kad Jūs kuo daugiau reikštumėte savo nuomonę. Tai reiškia, kad turite ne tik daryti tai, kas liepta, bet ir patys mąstyti, priimti sprendimus ir susidaryti savo asmeninę nuomonę tam tikrais klausimais.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Būtina save paruošti taip, kad niekas negalėtų manipuliuoti Jūsų protu.",
    time: 3500,
  },
  {
    who: "Vincentas",
    type: "text",
    text: "Visgi mokykla mus turi tam paruošti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tiesa, ji stengiasi kiek galėdama, bet ne visi mokytojai gali skirti dėmesio tiek, kiek reikia kiekvienam vaikui individualiai. Nepastebėtas talentingas mokinys gali pranykti minioje.",
    time: 3500,
  },
  {
    who: "Gabrielė",
    type: "text",
    text: "Vadinasi, reikia ir po mokyklos dirbti patiems?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Visiškai esi teisi. Tik nuo Tavęs priklauso, kaip Tu orientuojiesi aplinkoje, jeigu jos nekuri, vadinasi, ji kurs Tave. Tad geriau išsimokslinti, jog netektų kažkam priklausyti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taigi gal pradėsime nuo skaitymo, kaip manote? Jei turite pasiūlyti ką nors kito, aš būtinai išklausysiu jūsų pasiūlymus, tačiau manau, kad nuo skaitymo daug kas priklauso.",
    time: 3500,
  },
  {
    who: "Mokiniai",
    type: "text",
    text: "Taip, skaitymas! – visi sušuko vienu metu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nuo ko priklauso mūsų skaitymas, Gabriele?",
    time: 3500,
  },
  {
    who: "Gabrielė",
    type: "text",
    text: "Tikriausiai, kad nuo mūsų nuotaikos.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, dažniausiai. Jei pradedame skaityti po to, kai su kuo nors susiginčijame, dažniausiai puslapiuose pastebime tik neigiamus žodžius. O kam tas dvigubas pyktis?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Žinoma, jeigu paprašytume dvigubo šokoladinio sirupo užpilti ant ledų, tuomet mūsų pilvas labai džiaugtųsi. Tiksliau smegenys, nes jos vis dėlto atsako už mūsų pojūčius.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kol su Jumis kalbu, man atėjo mintis, kad net ir paprasčiausiam skaitymui, reikia įgūdžių ir žinių",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Yra talentingi žmonės. Daugelis sako: „Šitas tai jau turi talentą, jam mokytis nereikia“.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tokių žmonių yra, sutinku, tačiau labai maža dalis. Savo aplinkoje galiu suskaičiuoti tokius žmones tik ant vienos rankos pirštų.",
    time: 3500,
  },
  {
    who: "Vincentas",
    type: "text",
    text: "Aš girdėjau žmones kalbant, kad yra dainininkai, kurių balsas „gamtos duotas“. Niekada negalėjau suprasti, ką tai reiškia.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, itin retas atvejis. Balsas – pats sudėtingiausias muzikos instrumentas, kurį reikia mokytis valdyti. Taip pat būna žmonių, kurie intuityviai skaito taip, kaip reikia, bet tai irgi retas atvejis.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Aš vis dėlto manau, kad Jūs puikiai mokate skaityti ir klausytis.",
    time: 3500,
  },
  {
    who: "Dainius",
    type: "text",
    text: "Tai kam tada mums reikia mokytis iš naujo skaityti?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Puikus klausimas! Mes tik gerinsime įgūdžius ir tiek. Nei daugiau, nei mažiau.",
    time: 3500,
  },
  {
    who: "Gabrielė",
    type: "text",
    text: "Mokytojau, jau už penkių minučių baigsis pamoka. Kaip greitai…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Iš tiesų pamoka praėjo greitai. Pabaigai, norėčiau pasidalinti paslaptimi. Pateiksiu jums naudingą formulę, kaip teisingai priimti sprendimus, jeigu dvejotumėte. Na, pavyzdžiui, skaityti šią knygą ar ne, eiti į lauką, ar ne, atiduot rastus pinigus, ar ne.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Gyvenimo iššūkio vadovas:",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Iš pradžių:",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "1. Apibrėžkite problemą: Pavyzdžiui, mokinys gauna prastus pažymius.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "2. Galimų sprendimų generavimas;",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "- Daugiau praleisti laiko prie namų darbų; - Prašyti korepetitoriaus pagalbos; - Pakeisti mokymosi modelį;",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "3. Įvertinkite sprendimą:",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Pavyzdžiui, “Daugiau praleist laiko prie namų darbų”.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "4. Įgyvendinkite geriausią sprendimą:",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Norėdami gauti geresnius pažymius, būtina įsigyti knygų ir jas išsistudijuoti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "5. Įvertinkite rezultatą ir nuspręskite, ar sprendimas buvo sėkmingas:",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ar pažymiai pagerėjo? Taip? Ne? Jei ne, darykite viską iš naujo tik rinkitės kitą sprendimo būdą.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ačiū, kad praleidote šį laiką su manim, manęs klausėtės ir diskutavote nepaklausia tema – skaitymas. Tai iki kito karto.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Suskamba skambutis į pertrauką.",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Kaip jautiesi? Ar radai tinkamą atsakymą į savo klausimą?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Dar, žinok, ne, bet buvo įdomu.",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Tau tikriausiai reikėtų pamiegoti, o ryte jau atsibusi savo kailyje.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po tokių žodžių supratau, kad iš tiesų noriu miego. Dabar suprantu savo katiną, kuris dieną nuolat miega. Jo organizmas reikalauja poilsio.",
    time: 3500,
  },
  {
    who: "Katinas",
    type: "text",
    text: "Iki rytojaus, gal dar susitiksime.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Iki rytojaus, – tariau ir užsnūdau šalia palangės.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kita tema prasidės rytoj.",
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
