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
    who: "Haris",
    type: "text",
    text: "Po dešimties minučių apeisime visą labirintą.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Labirinte jie sutiko grupę žmonių, kuri ten klajojo apie valandą ir norėtų rasti išėjimą.",
    time: 1500,
  },
  {
    who: "Haris",
    type: "text",
    text: "Sekite paskui mane, jei pasiklydote, aš čia viską žinau.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pakeliui prie jų prisijungdavo vis daugiau keliautojų, kol susirinko visa minia žmonių, vaikščiojanti labirintu. Žmonės, kurie jau buvo praradę viltį išeiti iš ten ir kada nors pamatyti šeimą bei draugus, apsidžiaugė pamatę Harisą ir prisijungė prie jo, laimindami jį.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Iš viso buvo apie dvidešimt žmonių, įskaitant moterį su vaiku, kuri visą rytą buvo labirinte ir dabar įsikibo į Hariso ranką, kad netyčia jo nepamestų. Hariso pažįstamas pastebėjo, kad labirintas atrodo labai didelis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šitas labirintas vienas didžiausių Europoje.",
    time: 1500,
  },
  {
    who: "Keliatojas",
    type: "text",
    text: "Tikiu, mes jau nuėjome gerus porą kilometrų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Haris vis dar buvo linksmas, kol aptiko ant žemės gulintį meduolio gabalėlį. Vienas iš grupės prisiekė matęs tą patį gabalėlį prieš septynias minutes.",
    time: 1500,
  },
  {
    who: "Haris",
    type: "text",
    text: "Negali to būti!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tačiau moteris su vaiku sakė, kad, priešingai, taip gali būti, nes ji pati numetė šį meduolį prieš susitikdama su Hariu. Su Hariu jai būtų geriau visai nesusitikti: viskas rodo, kad jis – apgavikas. Haris pasipiktino. Jis išsiėmė žemėlapį ir pradėjo įrodinėti, kad jie eina teisingu keliu.",
    time: 1500,
  },
  {
    who: "Palydovas",
    type: "text",
    text: "Žemėlapis būtų naudingas, – jei tik žinotume, kur esame…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Jis pasiūlė grįžti prie centro ir pradėti iš naujo. Visi puolė bėgti atgal. Po dešimties minučių kompanija atsidūrė labirinto centre.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Haris jau ruošėsi sakyti, tačiau minia nenorėjo jo klausyti. Bet kokiu atveju, turėjau kur nors eiti. Dabar jie žinojo, kur yra, vėl paėmė žemėlapį.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Po trijų minučių jie vėl buvo labirinto centre...",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Daug kartų jie bandė ištrūkti iš labirinto, bet nesėkmingai. Kur beeidavo, visada grįždavo į centrą.",
    time: 1500,
  },
  {
    who: "Vaikas",
    type: "text",
    text: "Aš nežinau ar naudinga, bet buvau radęs įdomią knygelę su užrašais ir žemėlapiu, tik kad parašyta man nesuprantama kalba…",
    time: 1500,
  },
  {
    who: "Vyras",
    type: "text",
    text: "Duok ją čia.",
    time: 1500,
  },
  {
    who: "Vyras",
    type: "text",
    text: "Tai senosios grupės užrašai, čia nurodyta, kur eiti. Ir tu tiek laiko tylėjai??",
    time: 1500,
  },
  {
    who: "Vaikas",
    type: "text",
    text: "Na, aš visai pamiršau apie tai, gulėjo kuprinėje, kol neužsimaniau atsigert ir prisiminiau..",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Iš dalies minia atslūgo, nes jau pradėjo skaityti ir apžiūrinėti knygutę..",
    time: 1500,
  },
  {
    who: "Lektorius",
    type: "text",
    text: "Žinai, vaike, aš kaip tik už poros dienų turėjau sakyt prezentaciją apie kalbų mokymąsi, kol jie nagrinėja, galiu papasakoti, man bus praktika ir tu sužinosi naudingos informacijos.",
    time: 1500,
  },
  {
    who: "Lektorius",
    type: "text",
    text: "Ar tinka?",
    time: 1500,
  },
  {
    who: "Vaikas",
    type: "text",
    text: "Taip, žinoma!",
    time: 1500,
  },
  {
    who: "Vaikas",
    type: "text",
    text: "Galite pradėti...",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mes priprantame prie savo gimtosios kalbos, nuo vaikystės. Klausydami mamos žodžių vaikas mokosi ne tik mąstyti, bet ir jausti; įvaldęs kalbą, jis pradeda ne tik kalbėti, bet ir patirti džiaugsmą ar liūdesį. Štai kodėl gimtoji kalba mums yra ne tik kalba, bet ir mintis, ir jausmas, ir veiksmo priežastis, ir visos žmonijos kultūros pažinimo priemonė.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žemėje yra daug skirtingų kalbų - jų yra apie tris tūkstančius. Tarp šios daugybės yra plačiai paplitusių kalbų, kuriomis kalba milijonai žmonių. Taip esama ir nykštukinių kalbų, tokių kaip bušmanų (Afrika) ar Urabunna (Australija), kuriomis kalba tik keli šimtai žmonių.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Vartojamoji kalba neatsiejama nuo minties.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aiškus ir ryškus mąstymas vyksta ne tik vaizdiniuose, bet ir vadinamuosiuose verbaliniuose vaizduose. Net miegodami ar galvodami žmonės dažnai judina lūpas. Taigi artikuliuota ne tik žmogaus kalba, bet ir mintis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mintis gali būti išreikšta ne tik garsais. Galite kalbėti rankų ir kūno judesiais, piešiniais, galite paaiškinti tam tikrus dalykus rodydami kokius nors daiktus. Pavyzdžiui, kurčnebyliai yra įpratę reikšti savo mintis rankų ir pirštų judesiais. Tačiau visais atvejais mūsų smegenų darbas yra glaudžiai susijęs su tam tikru būdu išoriškai išreikšti savo mintis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mokslininkai, nuo pat gimimo stebėję kurčnebylę ir aklą mergaitę, pastebėjo, kad ji miegodama ir toliau judina pirštus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Šiuolaikinio žmogaus smegenų darbas yra glaudžiai susijęs su kalbos gebėjimų. Tai patvirtina kurioziški smegenų ligų pavyzdžiai, kai pacientai pamiršta daiktavardžius, bet ir toliau taisyklingai taria kitus žodžius.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Didysis anglų gamtininkas Čarlzas Darvinas sakė, kad „ilga ir sudėtinga minčių gija negali išsivystyti be žodžių pagalbos, kaip ir ilgas skaičiavimas negali išsivystyti be formulių ir algebrinių ženklų naudojimo“.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Iš visų būdų, kaip žmonės bendrauja vieni su kitais, tik garsi kalba galėtų tapti visos visuomenės nuosavybe ir virsti galingu kultūros įrankiu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Manoma, kad žmogaus kalba pati yra aprengta garsų drabužiais. Mūsų gimtoji kalba yra mūsų sąmonė, įkūnyta garsais. Nuo minties iki kalbos – tik vienas žingsnis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "„Betarpiška minties tikrovė yra kalba“, - rašė Marksas ir Engelsas. Šiais žodžiais jie atskleisdė giliausią kalbos esmės supratimą. Kad ir kokia kalba žmogus kalbėtų, jis mąsto žodžiais.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kelių kalbų mokymosi privalumai:",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Plečia horizontus:",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kalba yra šalies, kultūros ir jos gyventojų mentaliteto atspindys. Studijuodami užsienio kalbą pradedame geriau suprasti jos kalbėtojus, sužinome, kaip užmezgami socialiniai kontaktai kitoje šalyje, išmokstame bendrauti su žmonėmis, kurių mąstymas ir pasaulio suvokimas skiriasi nuo mūsų.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mokantis kalbos būtinai reikia susipažinti su kitos šalies istorija, geografija, menu ir tradicijomis. Tai praplečia akiratį, daro žmogų lankstesnį, leidžia į pasaulį pažvelgti plačiau.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Smegenų vystymasis:",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Studijuojant užsienio kalbą smegenyse atsiranda naujų nervinių jungčių, didėja pilkosios medžiagos tūris, gerėja atmintis, dėmesys. Kuo daugiau kalbų žmogus išmoksta, tuo greičiau ir geriau sprendžia intelekto problemas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Išmok abi kalbas vienu metu. Pavyzdžiui, jei nagrinėji kokią nors temą anglų kalba, paskaityk ta pačia tema vokiečių kalba.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kai išmoksi naują žodį vokiečių kalba, prisimink, kaip jis skamba anglų kalboje. Gali sukurti „trigubą žodyną“: žodis viena kalba, kita kalba ir vertimas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kalbos mokymosi pradžioje neišvengsi supainiotų žodžių. Žmonės dažnai painioja žodžius, jungtukus, antroji kalba gali „sugadinti“ pirmosios kalbos tarimą. Daugelis žodžių anglų ir vokiečių kalbomis rašomi vienodai, bet tariami skirtingai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Yra žodžių, kurie rašomi vienodai, skaitomi taip pat, bet turi skirtingą reikšmę – vadinamieji netikri vertėjo draugai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pirmajai kalbai reikia skirti pakankamai laiko ir reguliariai mokytis antrosios, o „atsiskyrimas“ įvyks savaime.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Kasdien skirk bent 5–10 minučių naujai kalbai. Nereikia nuolat mokytis tik iš vadovėlių.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pakeisk kalbą savo išmaniajam telefone. Tai padeda įsiminti bendrus žodžius ir priprasti prie kalbos.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Rašyk dienoraštį dviem kalbomis. Pavyzdžiui, gali parašyti pirkinių sąrašą viena kalba, o receptus – kita.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Skaityk naujienas ar tinklaraščius antra kalba ir įsimink naujus žodžius. „Twitter“ puikiai tinka – jie skelbia trumpas žinutes aktualiomis temomis, kurios suprantamos lengviau nei ilgi tekstai.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Skaitydamas pabandyk suprasti žodžio reikšmę iš konteksto.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mokykis ne žodžių, o frazių, semantinių blokų. Naujų žodžių įsiminimas savaime ne visada padeda kurti frazes užsienio kalba.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Atkreipk dėmesį į gramatiką, ypač sudėtingus ir nesuprantamus dalykus.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nemėgink įsiminti gramatikos taisyklių, pirmiausia suprask principus, kuriais remiantis jos sukurtos.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nuo pirmųjų kalbos mokymosi dienų klausyk gimtakalbių kalbos, tai padeda įsiminti taisyklingą tarimą, plečia žodyną. Įsimink posakius, susipažink su įvairiomis tarmėmis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Naudok programas ir svetaines, kuriose gali bendraut tų žmonių gimtąja kalba.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Skaityk garsiai, tai ne tik padės įsimint frazes ir žodžius, bet ir pagerins kalbėjimą.",
    time: 1500,
  },
  {
    who: "Haris",
    type: "text",
    text: "Tuo tarpu Haris su žmonių pagalbą išsiaiškino kur reikia judėti.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "O žemėlapis buvo toks:",
    time: 1500,
  },

  {
    who: "",
    text: "https://lh3.googleusercontent.com/oRS-0UueIoBji3-IQQI4WG6_Ug6GHh_j39GAtfE_vUGdq3qnyrJNTA9uF5uTIooj_MkpSORXt4YDQrhzHJ0biAFA_fgFdtUz0CyolQ8jeXHLjXL_c6kZqptqazkXpr5Dx1Z5IrzeQw=w2400",
    time: 1500,
  },

  createQuiz("Koks atsakymas būtų teisingas:"
  , ['<div><input type="radio" name="q1" id="opt1"><label for="opt1">Labirintas - A -</label></div>',
      '<div><input type="radio" name="q1" id="opt2"><label for="opt2">Labirintas - B -</label></div>',
      '<div><input type="radio" name="q1" id="opt3"><label for="opt3">Labirintas - C -</label></div>'], "Teisingai", "Pro šalį, teisingas atsakymas - Labirintas - B.", "opt2"),

  {
    who: "",
    type: "text",
    text: "...",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "...",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Iš labirinto pavyko išeiti!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Susitvarkei su viskuom!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Štai ir baigėsi mūsų pokalbis, mano drauge. Šiandien rekomenduoju eiti savęs pažinimo keliu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nieko tokio, jei ir nesi visai pasirengęs šiai kelionei, jei dar daug kas kelia nerimą. Sunkumų turi visi, reikia mokėti juos nugalėti. Svarbiausia – pradėti eiti tuo keliu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nesidrovėk, jei draugai priekaištauja tau dėl nuolat kuriamų planų. Nenusimink pastebėjęs, kad turi nedaug žinių arba tave laiko „vidutinioku“.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Tau tikrai atsiras naujų interesų, reikalų, dvasinių poreikių, pamažu susidarys naujų esminių proto ir charakterio bruožų. O tai labai svarbu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Nepamiršk, kol kažkas miega, Tu gali mokytis, kol kažkas žaidžia, Tu gali lavinti save.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Pasiekei vieną – esi protingesnis.  Kad ir kaip sunku, žinok, jog pasirinkai tinkamą, vertą visų pastangų kelią. Esu įsitikinęs, kad niekada nenukrypsi nuo kelio. Laimingo kelio, gero vėjo, mano jaunasis drauge!",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Mokymosi pabaiga.",
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
