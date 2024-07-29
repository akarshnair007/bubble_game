var timer = 60;
var value = 0;
var hitNum = 0;

function scoreIncrement() {
  value += 10;
  document.querySelector("#score").textContent = value;
}

function getNewHit() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitNum;
}

function makeBubble() {
  var bubAdd = "";
  for (var i = 1; i <= 208; i++) {
    var randomNum = Math.floor(Math.random() * 10);

    bubAdd += `<div class="bubble">${randomNum}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = bubAdd;
}

function timeInterval() {
  var intervalCount = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(intervalCount);
      document.querySelector(
        ".pbtm"
      ).innerHTML = `<h1>Game Over: Your Score is: ${value}</h1>`;
    }
  }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", function (details) {
  var clickNum = Number(details.target.textContent);
  if (hitNum === clickNum) {
    scoreIncrement();
    getNewHit();
    makeBubble();
  }
  if (value === 100) {
    document.querySelector(
      ".pbtm"
    ).innerHTML = `<h1>Fhuiyooo!!! You won the game 🥳</h1>`;
  }
});

getNewHit();
makeBubble();
timeInterval();
