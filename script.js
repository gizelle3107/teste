const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset-button");
let currentPlayer = "X";
let board = ["","","","","","","","",""];
let gameActive = true;

const condicoesVitoria = [
    [0,1,2],[3,4,5,],[6,7,8], //l
    [0,3,6],[1,4,7],[2,5,8],  //c
    [0,4,8],[2,4,6]          //d
];
function handCellClick(event){
    const cell = event.target;
    const index = cell.getAttribute("data-index");

    if (board[index] !== "" || !gameActive) return;
     board[index]=currentPlayer;
     cell.textContent = currentPlayer;
     cell.classList.add("taken");

     

     if (board.every);
     
}