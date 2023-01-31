function copyLink(id, element) {
    var copiedText = document.getElementById(id);
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(copiedText.href).select();
    document.execCommand("copy"); //Copy function
    $temp.remove();
    
    overwriteBtn(element, copiedText.textContent);  //Overwrite text
}

function overwriteBtn (element, text) {
  console.log("Link to " + text + " Nukopijuota!");
    $(element).text('Nukopijuota!');
    setTimeout(function () { $(element).text('Kopijuoti'); }, 3000);
}


// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});






const textElement = document.getElementById("text");
const copyButton = document.getElementById("copy");

const copyText = (e) => {
  window.getSelection().selectAllChildren(textElement);
  document.execCommand("copy");
  e.target.setAttribute("tooltip", "Nukopijuota! ✅");
};

const resetTooltip = (e) => {
  e.target.setAttribute("tooltip", "Nukopijuoti nuorodą");
};

copyButton.addEventListener("click", (e) => copyText(e));
copyButton.addEventListener("mouseover", (e) => resetTooltip(e));