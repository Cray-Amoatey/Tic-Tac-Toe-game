

// gameMenu
const gameMenu = document.getElementById("gameMenu");
const cpuBtn = document.getElementById("cpuBtn");
const playerBtn = document.getElementById("playerBtn");

// gameBoard
const gameBoard = document.getElementById("gameBoard");
const playerTurnIndicator = document.getElementById("playerturnIndicator");
const restartGameBtn = document.querySelector(".restartGameBtn");
const cellWrapper = document.getElementById("cellWrapper");
const cell = document.querySelectorAll('.cell')



// modal display
const modal = document.getElementById("modal");
const endGameModal = document.getElementById('endGameModal')
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

let firstPlayer = "";

let playersContainer = document.getElementById("players-container");

playersContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    firstPlayer = e.target;
    console.log(firstPlayer);
  }
});

let playerBtnContainer = document.getElementById("playerBtnContainer");

playerBtnContainer.addEventListener("click", (e) => {
  if (typeof firstPlayer === "string") {
    alert("please select a player to continue");
    //   console.log("hello world");
  } else if (typeof firstPlayer === "object") {
    gameMenu.style.display = "none";
    gameBoard.style.display = "block";
  }   
});


const PLAYER_X = document.createElement('img')
const PLAYER_O = document.createElement('img')

// const PLAYER_X = cell.querySelectorAll('img')
// const PLAYER_O = cell.querySelectorAll('img')

PLAYER_X.setAttribute('src', 'assets/icon-x.svg')
PLAYER_O.setAttribute('src', 'assets/icon-o.svg')

document.querySelector('.cell').appendChild(PLAYER_X)
document.querySelector('.cell').appendChild(PLAYER_O)
// let PLAYER_X = document.createElement('img')
// PLAYER_X.src = 'assets/icon-x.svg';
// cell.appendChild(PLAYER_X)
// PLAYER_X = "X"
// PLAYER_O = "O"

let turn = PLAYER_X;

const boardState = Array(cell.length);
boardState.fill(null);

 cell.forEach((cell) => cell.addEventListener('click', cellClick))


 function setHoverImage() {
  // remove all hover text
  cell.forEach((cell)=> {
    cell.classList.remove('PLAYER_X')
    cell.classList.remove('PLAYER_O')
  });

  cell.forEach((cell) => {
    if (cell.querySelector ('PLAYER_X' || 
    "PLAYER_O") == ""){
      cell.classList.add(hoverClass)
    }
  })
}

 



//     cell.forEach((cell => {
//       if (cell.querySelector == ""){
//         cell.classList.add(hoveClass);
//       }
//     })
//   });
 
//   setHoverImage();



 
  
 


 function cellClick(event) {
  if(endGameModal.classList.contains('visible')){
    return;
  }

  const cell = event.target;
  const cellNumber = cell.dataset.index;
  if(cell.querySelector('img') != ""){
    return;
  } 

  if(turn === PLAYER_X){
    cell.querySelector('img') = PLAYER_X; 
    boardState[cellNumber] = PLAYER_X;
    turn = PLAYER_O; 
  }
  else{
    cell.querySelector('img') = PLAYER_O;
    boardState[cellNumber]=PLAYER_O;
    turn = PLAYER_X;  
  }
 
 }













//    console.log(firstPlayer.Value);

// cells_container.addEventListener("mouseover" , (e)=>{
//    console.log(firstPlayer.value);
//        let item = e.target;
//        if(firstPlayer.value == "X"){
//        item.style.backgroundImage = 'url("assets/icon-x-outline.svg")';
//        item.style.backgroundPosition = "12px 14px";
//        item.style.backgroundRepeat = "no-repeat";
//        }else if (firstPlayer.value == "O") {
//          item.style.backgroundImage = 'url("assets/icon-o-outline.svg")';
//          item.style.backgroundPosition = "12px 14px";
//          item.style.backgroundRepeat = "no-repeat";
//        }

//     }
// )
