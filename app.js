let quoteArray = [];
let index = 0;
let textPosition = 0;
let flag = true;
let destination = document.getElementById("typedtext");

window.addEventListener("load", writeText);
function quoteLoad() {
  const url = "https://api.quotable.io/random";
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.status);
      }
    })
    .then((data) => {
      quoteArray[index] = data.content;
    });
}

function writeText() {
  if (flag) {
    quoteLoad();
    quoteArray[index] += " ";
    flag = false;
  }
  destination.innerHTML =
    quoteArray[index].substring(0, textPosition) + "<span>  </span>";
  if (textPosition++ != quoteArray[index].length) {
    setTimeout("writeText()", 100);
  } else {
    setTimeout("writeText()", 3000);
    textPosition = 0;
    flag = true;
  }
}
