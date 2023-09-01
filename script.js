let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let UserDisp = document.getElementById("userGame");
let compDisp = document.getElementById("computerGame");
let resultDev = document.getElementById("result");
rock.addEventListener("click", () => {
  resultDev.innerHTML = "";
  UserDisp.innerHTML = "";
  compDisp.innerHTML = "";
  let userChoice = "rock";
  Computergame();
  display(userChoice, computerChoice);
  gameplay(userChoice, computerChoice);
});
paper.addEventListener("click", () => {
  resultDev.innerHTML = "";
  UserDisp.innerHTML = "";
  compDisp.innerHTML = "";
  let userChoice = "paper";
  Computergame();
  display(userChoice, computerChoice);
  gameplay(userChoice, computerChoice);
});
scissors.addEventListener("click", () => {
  resultDev.innerHTML = "";
  UserDisp.innerHTML = "";
  compDisp.innerHTML = "";
  let userChoice = "scissors";
  Computergame();
  display(userChoice, computerChoice);
  gameplay(userChoice, computerChoice);
});

function Computergame() {
  let randomChoice = Math.floor(Math.random() * 3);
  let arr = [
    { game: "paper", index: 0 },
    { game: "scissors", index: 1 },
    { game: "rock", index: 2 },
  ];
  arr.forEach((e) => {
    if (randomChoice == parseInt(e.index)) {
      computerChoice = e.game;
    }
  });
}
function gameplay(userChoice, computerChoice) {
  let verif = false;
  if (userChoice === computerChoice) {
    let Tieelem = document.createElement("span");
    Tieelem.innerHTML = "Tie!";
    resultDev.appendChild(Tieelem);
    verif = true;
  }
  if (
    (userChoice === "paper" && computerChoice == "scissors") ||
    (userChoice === "rock" && computerChoice == "paper") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    let SpanComp = document.getElementById("ComputerScore");
    SpanComp.innerHTML = parseInt(SpanComp.innerHTML) + 1;
    let Tieelem = document.createElement("span");
    Tieelem.innerHTML = "You Lose!";
    resultDev.appendChild(Tieelem);
    verif = true;
  }
  if (verif == false) {
    let SpanUser = document.getElementById("yourScore");
    SpanUser.innerHTML = parseInt(SpanUser.innerHTML) + 1;
    let Tieelem = document.createElement("span");
    Tieelem.innerHTML = "You Win!";
    resultDev.appendChild(Tieelem);
  }
}
function display(userChoice, computerChoice) {
  let gamContainer = [
    { name: "paper", obj: "🖐" },
    { name: "rock", obj: "✊" },
    { name: "scissors", obj: "✂️" },
  ];
  gamContainer.forEach((e) => {
    if (e.name == userChoice) {
      let newdiv = document.createElement("div");
      newdiv.innerHTML = e.obj;
      UserDisp.appendChild(newdiv);
    }
    if (e.name == computerChoice) {
      let newdiv = document.createElement("div");
      newdiv.innerHTML = e.obj;
      compDisp.appendChild(newdiv);
    }
  });
}
