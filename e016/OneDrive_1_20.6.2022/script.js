let amZug = "x";

let spielAn = true;

const FELDER = document.getElementsByClassName("Feld");

for (let i = 0; i < FELDER.length; i++) {
  FELDER[i].addEventListener("click", function() {
    if (FELDER[i].innerHTML.trim() == "" && spielAn) {
      FELDER[i].innerHTML = amZug;

      amZug = amZug == "x" ? "o" : "x";

      document.getElementById(
        "spieler"
      ).innerHTML = amZug.toUpperCase();

      if (
        FELDER[0].innerHTML == FELDER[1].innerHTML &&
        FELDER[1].innerHTML == FELDER[2].innerHTML &&
        FELDER[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 1, 2);
      } else if (
        FELDER[3].innerHTML == FELDER[4].innerHTML &&
        FELDER[4].innerHTML == FELDER[5].innerHTML &&
        FELDER[3].innerHTML.trim() != ""
      ) {
        showWinner(3, 4, 5);
      } else if (
        FELDER[6].innerHTML == FELDER[7].innerHTML &&
        FELDER[7].innerHTML == FELDER[8].innerHTML &&
        FELDER[6].innerHTML.trim() != ""
      ) {
        showWinner(6, 7, 8);
      } else if (
        FELDER[0].innerHTML == FELDER[3].innerHTML &&
        FELDER[3].innerHTML == FELDER[6].innerHTML &&
        FELDER[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 3, 6);
      } else if (
        FELDER[1].innerHTML == FELDER[4].innerHTML &&
        FELDER[4].innerHTML == FELDER[7].innerHTML &&
        FELDER[1].innerHTML.trim() != ""
      ) {
        showWinner(1, 4, 7);
      } else if (
        FELDER[2].innerHTML == FELDER[5].innerHTML &&
        FELDER[5].innerHTML == FELDER[8].innerHTML &&
        FELDER[2].innerHTML.trim() != ""
      ) {
        showWinner(2, 5, 8);
      } else if (
        FELDER[0].innerHTML == FELDER[4].innerHTML &&
        FELDER[4].innerHTML == FELDER[8].innerHTML &&
        FELDER[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 4, 8);
      } else if (
        FELDER[2].innerHTML == FELDER[4].innerHTML &&
        FELDER[4].innerHTML == FELDER[6].innerHTML &&
        FELDER[2].innerHTML.trim() != ""
      ) {
        showWinner(2, 4, 6);
      }
    }
  });
}

document.getElementById("reset").addEventListener("click", function() {
  for (let i = 0; i < FELDER.length; i++) {
    FELDER[i].innerHTML = "";
    FELDER[i].style.backgroundColor = "#dee9ec";
    FELDER[i].style.color = "black";
  }
  amZug = "x";
  document.getElementById("info").style.display = "none";
  document.getElementById("player").innerHTML = "X";
  spielAn = true;
});

function showWinner(x, y, z) {
  FELDER[x].style.background = "#0d8b70";
  FELDER[x].style.color = "white";
  FELDER[y].style.background = "#0d8b70";
  FELDER[y].style.color = "white";
  FELDER[z].style.background = "#0d8b70";
  FELDER[z].style.color = "white";
  document.getElementById("winner").innerHTML =
    amZug == "x" ? "O" : "X";
  document.getElementById("info").style.display = "block";
  spielAn = false;
}