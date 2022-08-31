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
