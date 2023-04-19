const tds = document.querySelectorAll(".table__item");
const btn = document.getElementById("btn");
const title = document.querySelector(".title");

isX = true;
isWin = false;

tds.forEach((i) => {
  i.addEventListener("click", foo);
});

btn.addEventListener("click", () => {
  tds.forEach((i) => {
    i.addEventListener("click", foo);
    i.innerHTML = "";
    title.innerHTML = "Игра крестики-нолики";
    isX = true;
    isWin = false;
  });
});

function foo() {
  if (this.innerHTML == "") {
    isX
      ? ((this.innerHTML = "X"), (isX = !isX))
      : ((this.innerHTML = "0"), (isX = !isX));
  }
  checkVert();
  checkGor();
  checkDeg();
  draw();
  checkWin();
}

function checkVert() {
  for (let i = 0; i < 3; i++) {
    if (
      tds[i].innerHTML == tds[i + 3].innerHTML &&
      tds[i].innerHTML == tds[i + 6].innerHTML &&
      tds[i].innerHTML != ""
    ) {
      isX
        ? (title.innerHTML = "Победили Нолики")
        : (title.innerHTML = "Победили Крестики");
      return (isWin = true);
    }
  }
}

function checkGor() {
  for (let i = 0; i <= 6; i += 3) {
    if (
      tds[i].innerHTML == tds[i + 1].innerHTML &&
      tds[i].innerHTML == tds[i + 2].innerHTML &&
      tds[i].innerHTML != ""
    ) {
      isX
        ? (title.innerHTML = "Победили Нолики")
        : (title.innerHTML = "Победили Крестики");
      return (isWin = true);
    }
  }
}

function checkDeg() {
  if (
    (tds[0].innerHTML == tds[4].innerHTML &&
      tds[0].innerHTML == tds[8].innerHTML &&
      tds[0].innerHTML != "") ||
    (tds[2].innerHTML == tds[4].innerHTML &&
      tds[2].innerHTML == tds[6].innerHTML &&
      tds[2].innerHTML != "")
  ) {
    isX
      ? (title.innerHTML = "Победили Нолики")
      : (title.innerHTML = "Победили Крестики");
    return (isWin = true);
  }
}

function draw() {
  for (let i = 0; i < tds.length; i++) {
    if (tds[i].innerHTML == "") {
      return;
    }
  }
  if (!isWin) {
    title.innerHTML = "Ничья";
  }
}

function checkWin() {
  if (isWin) {
    tds.forEach((i) => {
      i.removeEventListener("click", foo);
    });
  }
}
