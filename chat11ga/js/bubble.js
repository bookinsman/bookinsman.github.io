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
    who: "Žurnalistas",
    type: "text",
    text: "Patekęs į psichoanalitiko kabinetą, žurnalistas aptiko viduryje kambario aukštą ir liekną siluetą giliomis akimis.",
    time: 0,
  },
  {
    who: "",
    type: "text",
    text: "Sutinku duoti jums interviu, bet ne publikavimui.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ar tiktu toks variantas?",
    time: 1500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Bet aš maniau, kad galėsiu…",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Na gerai, publikuoti galite, bet savo vardo paskelbti neleisiu. Psichoanalizė yra subtilus dalykas. Pacientams nepatinka, kai jų specialistas yra viešinamas.",
    time: 1500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Sutariam. O dabar norėčiau užduoti pirmą klausimą.",
    time: 1500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Matau kampe yra sofa. Ar čia guldote savo pacientus, profesoriau? Beje, ar privaloma – juos guldyti?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, tai būtina norint atsipalaiduoti. Žmogus visiškai atsipalaiduoja tik patogiai atsigulęs. Ir tik atsipalaidavęs jis yra linkęs į konfidencialų pokalbį. Pasitikėjimas mūsų darbe yra pagrindinis dalykas, be pasitikėjimo tarp gydytojo ir paciento sėkmingas gydymas neveiks.",
    time: 1500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Kaip žmogus pradeda pasitikėti?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Visų pirma, sąžiningumas. Kai pacientas pamato, kad aš nieko nuo jo neslepiu, jis taip pat pamažu atveria savo širdį. Tokiu būdu aš sužinau, kokia jo ligos priežastis. Kiekvienas individas turi savo sutrikimų. Išsiaiškinti, kodėl žmogui neramu yra pagrindinė mano užduotis.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Aiškindamas sutrikimų mechanizmą, profesorius kartais įsmeigdavo į žurnalistą neramų žvilgsnį. Tikriausiai bandė suprasti, ar pašnekovą kas nors neramina. Jie kalbėjo apie Zigmundą Froidą.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Na žinoma, nei vienas gydymas nepraeina be garsaus austro, psichoanalizės pradininko.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Visiškai pritariu Froido minčiai, kad bet kokia liga yra kažkokio potraukio slopinimo pasekmė. Priežastys gali būti įvairios: materialinės, moralinės ar seksualinės. Kad ir kaip būtų, bet koks ilgalaikis potraukių slopinimas neišvengiamai veda prie neurotinių būsenų atsiradimo, o vėliau ir prie nervinių ligų.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Kokia psichoanalizės žinomumo priežastis? ",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žinote, mes gyvename beprotiškame pasaulyje, tai banalu, bet tiesa. Mūsų visuomenė nebevaldoma žmogaus. Technika, kuri pažadėjo žmonėms rasti laisvę, sukūrė atvirkštinį variantą. Mes tapome nuo technikos priklausomi. Tapome jos kaliniais.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "„Namai“ visada yra gimtojo židinio simbolis. Tai kraujas, kuris mus vienija su mūsų protėvių žeme. Tiek socialinėje, tiek bet kokioje kitoje gyvenimo dalyje „namai“ užima svarbią vietą. Namus pamiršęs žmogus pavirsta griuvėsiais, netenka šaknų.",
    time: 1500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "O kaip dėl urbanizacijos, demografinių problemų, didėjančio nusikalstamumo?",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žmonija bando pažaboti stichijas, o stichijos iš žmonių tyčiojasi. Mes spaudžiame greičio pedalą, nuolat skubame, kad neatsiliktume nuo naujovių. Esame įsitempę, vis ieškome naujų problemų sprendimo būdų. Jų neradę tampame liūdni, įgyjame naujų ligų. Be to, nuo informacijos gausos visiems skauda galva.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žmogus skrenda į Mėnulį, Peru žemės drebėjimas, Indonezijoje potvynis, Miunchene gimė keistuolis su dviem galvomis, Keiptaune persodinama širdis, kažkur užgrobtas lėktuvas. Ši informacijos gausa sujungė skirtingus pasaulius į vieną. Kiekvienas iš mūsų įsitraukia į šiuos įvykius, jaučia ir išgyvena emocijas, kartu su tais žmonėmis. Mums tampa nuobodu.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Vienas ir tas pats autobusas ar automobilis ryte, tas pats biuras ar dirbtuvės, tos pačios parduotuvės ir tie patys veidai. Viena vertus, aplinkui viskas nuolat juda ir keičiasi, kita vertus, žmogus susispaudžia burbule ir gyvena nuobodų, monotonišką gyvenimą. Būtent ši priešprieša sukelia žmonėms emocijų alkį, kurių jie patys negali patenkinti.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Instinktų slopinimas, apie kurį kalbėjo Froidas, yra svarbus veiksnys. Šiais laikais niekas negali išvengti neurozės ir kaltės jausmo, kuris dažniausiai yra išorinis neurozės simptomas... ",
    time: 1500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Ne visai sutinku su jumis, pone profesoriau..",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Ką? Jūs nesutinkate su manimi... Tuo tarpu aš esu kategoriškas: kiekvienas individas jaučia kažkokią kaltę už save. Man labai svarbu, kaip jis pats tai interpretuoja. Aš, pavyzdžiui, esu įsitikinęs, kad šis jausmas jums nesvetimas.",
    time: 1500,
  },
  {
    who: "",
    type: "text",
    text: "Žurnalistas prisipažino, kad tikrai jaučiasi kaltas prieš gerbiamą žurnalo redaktorių.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Ar tu išsigandęs?",
    time: 1500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Taip… Jaučiu nerimą…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kaltės jausmas dažnai sukelia baimę, o baimė yra pirmoji ir pagrindinė bet kokios ligos priežastis.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Ne, profesoriau, aš nejaučiu baimės, bet pavydą – taip. Labai pavydžiu kolegoms žurnalistams, kurie rašo greitai ir lengvai. Ir jaučiuosi kaltas, kad negaliu atlikti darbą taip pat gerai. Tikriausiai profesinė neurozė. Gal galite patarti kaip galėčiau savo emocinę būklę pagerinti?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Šį kartą psichoterapeutas nusijuokė. Žurnalistas pajuto, kad nuo pat jų susitikimo pradžios buvusi įtampa atslūgo. Vėliau jų pokalbis tapo atviresnis. Profesorius palietė žurnalisto petį:",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Profesinė neurozė, sakote? Cha cha cha. Tu negali, mano drauge, išrašyti sau recepto. Bet koks savarankiškas gydymas yra pavojingas. Ir niekas taip nežeidžia psichikos, nesukelia tokių dvasinių kančių kaip savo paties abejonės. Prisiminkite ledi Makbet. Jos bėda buvo ta, kad ji neturėjo savo psichiatro. Psichoanalizės prasmė slypi būtent tame, kad objektyvus ir nesuinteresuotas žmogus, patikimas psichiatras, pasiūlo individui išeitį. Mes, psichiatrai, turime ieškoti nerimo priežasties, kuri dažniausiai slepiama nuo paciento.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Bet ar jūs, profesoriau, nemanote, kad tai leidžia klaidingai nustatyti ligą, kurios iš tikrųjų nėra?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Žinoma, tokia galimybė yra. O čia viskas priklauso nuo gydytojo kompetencijos ir sąžiningumo. Jis privalo rasti išeitį, vadovaudamasis savo profesinėmis žiniomis ir sąžine.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Kokia išeitis?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Tai priklauso nuo individualios pacientų būsenos. Kiekvienam pacientui reikalingas išskirtinis ryšys. Kartais tenka kalbėti sudėtingais mokslo terminais. Kuo paprastesni paaiškinimai, tuo labiau tavimi pasitiki…",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Na, o sunkesniais klinikiniais atvejais?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Atleiskite, pacientas man – ne „klinikinis atvejis“, o žmogus, turintis sielą ir kūną, bet, kartoju, jis nežino tiesos apie savo ligą. Šios tiesos ieškau pasąmonės gelmėse ir čia man labiau padeda net ne akademiniai vadovėliai, o Tolstojaus, Dostojevskio, Kierkegaardo, Prousto darbai…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Froidas rėmėsi tuo, kad asmuo gali nežinoti tikrųjų priežasčių, lemiančių jo elgesį.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Tačiau Froidas ir jūs, sekdami jo pavyzdžiu, perkeliate žmogų į svajonių, neracionalių impulsų karalystę.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Bet įsivaizduokite, profesoriau, kad į jus kreipiasi darbuotojas…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Turėjau jau tokį vieną pacientą.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "... Ir prašo jūsų jam padėti. Jį kamuoja psichinė įtampa, kurią sukelia baimė netekti darbo. Norint numalšinti įtampą, būtina patenkinti jo poreikį dirbti. Bet jūs nepajėgus to padaryti",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Nesiginčiju, daugelis poreikių nesutampa su realiu gyvenimu, reikia ieškoti būdų, kaip tą kompensuoti. Taigi, nugalėjus baimę ir išlaisvinus vaizduotę, galima patenkinti bet kokį konkretų poreikį. Beje, darbuotojas, apie kurį kalbėjau, skundėsi nuobodžiu darbu…",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Ir jūs?…",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Rekomendavau jam skaityti kriminalinius romanus ar klausytis lengvos muzikos. Tai dažnai man padeda atsipalaiduoti.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Bet atleiskite, tai, mano nuomone, melas, apgaulė. Švelniai tariant – iliuzija.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Na, o iliuzija irgi naudinga. Dažnai ji veikia kaip gynybinė psichikos reakcija. Mano užduotis yra ne saugoti ar keisti socialines struktūras, o koreguoti savo pacientų psichinę struktūrą. Jie man moka, kad atkurčiau jų fizinę sveikatą.",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Čia psichoterapeutas sustojo:",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Kalbate apie sukčiavimą, baltą melą? Ir jei taip? Ar žinojote, kad kasdien tūkstančiai žmonių pasaulyje nusižudo dėl nervinės depresijos. Pavyzdžiui, Šveicarija laikoma gana klestinčia ir ramia šalimi, o vis dėlto kas dešimtas šalies gydytojas yra psichiatras. Paklausa sukuria pasiūlą. Neurozės ir nervinės depresijos tapo pagrindine civilizacijos rykšte. Ir aš tikiu, kad norint išgelbėti civilizaciją, kartais galima paaukoti tiesą, ypač kai ji pati žmogų veikia destruktyviai. Beje, atkreipkite dėmesį į tai, kad jaunimas, protestuodamas prieš esamą tikrovę, ieško savirealizacijos kelių neokrikščionybėje, egzistencializme, vis dažniau atsigręžia į psichoanalizės idėjas.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Vadinasi, jis pats gydosi? Per brangu patekti pas psichoterapeutą? Jūsų pacientai – pasiturintys žmonės, ar ne?",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Dažniausiai taip. Nors yra pacientų ir iš viduriniosios klasės.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Bet kaip dėl tų, kurie negali sau leisti prabangos turėti savo psichiatrą? ",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Taip, psichoanalizė prieinama ne visiems. Didžioji dalis žmonių stresą malšina raminančiais vaistais ir tai tikra nelaimė. Arba jie kreipiasi į būrėją, ar net patys užsiima okultizmu. Rekomenduoju atkreipti į tai dėmesį, atrasite sensacingų ir skandalingų faktų...",
    time: 3500,
  },
  {
    who: "",
    type: "text",
    text: "Mano laikas jau į pabaigą, turiu priimti pacientą.",
    time: 3500,
  },
  {
    who: "Žurnalistas",
    type: "text",
    text: "Ačiū už suteiktą galimybę pažinti psichoanalizę, turėsiu įdomią antraštę laikraštyje…",
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
