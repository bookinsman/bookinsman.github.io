let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let page3 = document.getElementById("page3");
let currentPage = 1;

function nextPage() {
  switch(currentPage) {
    case 1:
      page1.style.display = "none";
      page2.style.display = "block";
      currentPage = 2;
      break;
    case 2:
      page2.style.display = "none";
      page3.style.display = "block";
      currentPage = 3;
      break;
    case 3:
      page3.style.display = "none";
      page1.style.display = "block";
      currentPage = 1;
      break;
  }
}