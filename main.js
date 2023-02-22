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
PLAYER_O.setAttribute('src', './assets/icon-o.svg')
document.body.appendChild(PLAYER_X)
document.querySelector('.cell').appendChild(PLAYER_O)





// const boardState = Array(cell.length);
// boardState.fill(null);

let humanPlayer;
let cpuPlayer;


const win_pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


// singlePlayerButton
  cpuBtn.addEventListener("click", () => {
    gameMenu.style.display = "none";
    gameBoard.style.display = "initial";
    if (XradioBtn.checked === true ) { 
      humanPlayer = PLAYER_X
      cpuPlayer = PLAYER_O 
      scoreX.textContent = "X (You)";  
      scoreO.textContent = "O (CPU)"
    }
    else if (OradioBtn.checked === true){ 
      humanPlayer = PLAYER_O
      cpuPlayer = PLAYER_X
      scoreX.textContent = "X (CPU)"
      scoreO.textContent = "O (You)"
    }
  });

 cpuBtn.setAttribute("data-value", "active");
 playerBtn.setAttribute("data-value", "");

 playerBtn.addEventListener('click' , () =>{
  gameMenu.style.display = "none"
  gameBoard.style.display = "initial";
  scoreX.textContent = "X (P1)"
  scoreO.textContent = "O (P2)"
  playerBtn.setAttribute("data-value" , "active")
  cpuBtn.setAttribute("data-value" , "")
 })

 
 function boardState(cell) {
  let selectedCell = document.querySelector(`[data-index = "${cell}"]`)
  let img = document.createElement('img');



 }





 
 


 