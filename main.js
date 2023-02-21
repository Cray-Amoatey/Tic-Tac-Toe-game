// gameMenu
const cpuBtn = document.getElementById("cpuBtn");
const playerBtn = document.getElementById("playerBtn");
const gameMenu = document.getElementById("gameMenu");

// playerBtns
const XradioBtn = document.getElementById("X-mark")
const OradioBtn = document.getElementById("O-mark")


// gameBoard
const gameBoard = document.getElementById("gameBoard");
const playerTurnIndicator = document.getElementById("playerturnIndicator");
const turnIndicator = document.getElementById("turnIndicator")
const restartGameBtn = document.querySelector(".restartGameBtn");
const cellWrapper = document.getElementById("cellWrapper");
const cell = document.querySelectorAll(".cell");

// modal display
const modal = document.getElementById("modal");
const endGameModal = document.getElementById("endGameModal");
const quitBtn = document.querySelector(".quitBtn");
const nextroundBtn = document.querySelector(".nextBtn");

// restart modal
const restartgameModal = document.getElementById("restartgameModal");
const cancelBtn = document.querySelector(".cancelBtn");
const restartBtn = document.querySelector(".restartBtn");

// score board
const scoreX = document.getElementById("player1Name");
const draw = document.getElementById("draw");
const scoreO = document.getElementById("player2Name");

let PLAYER_X = document.createElement('img')
let PLAYER_O = document.createElement('img')
PLAYER_X.setAttribute('src', './assets/icon-x.svg')
PLAYER_O.setAttribute('src', './assets/icon/-o.svg')
// document.getElementsByClassName('cell').appendChild("PLAYER_X")


// let PLAYER_X = '<img src= "assets/icon-x.svg">';
// let PLAYER_O = '<img src="assets/icon-o.svg">';

let humanPlayer
let cpuPlayer

const boardState = Array(cell.length);
boardState.fill(null);



  cpuBtn.addEventListener("click", () => {
    gameMenu.style.display = "none";
    gameBoard.style.display = "initial";
    if (XradioBtn.checked === true ) { 
      scoreX.textContent = "JIGGYCRAY"; 
      humanPlayer.img = PLAYER_X
      cpuPlayer.img = PLAYER_O
    }
    else if (OradioBtn.checked === true){ 
      humanPlayer = PLAYER_O
      cpuPlayer = PLAYER_X
      scoreO.textContent = "MOON"
    }

  });

  let turn = PLAYER_X
cell.forEach((cell) => cell.addEventListener("click", cellClick));


 

 if (XradioBtn.checked === true){
  cell.innerText = PLAYER_X;
  boardState[cellNumber] = PLAYER_X 
  turn = PLAYER_O;

 }
console.log("data")

