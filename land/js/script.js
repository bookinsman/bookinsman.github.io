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