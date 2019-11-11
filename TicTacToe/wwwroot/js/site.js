// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var turn = "X";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn";
}

function setWinner() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + " wins!";
}
//check horizontal cells
function checkForWin() {
    var cells = document.getElementsByClassName("square");
    for (var i = 0; i < 3; i+=3) {
        if (cells[i].innerText && cells[0+i].innerText === cells[1+i].innerText && cells[1+i].innerText === cells[2+i].innerText) {
            setWinner(cells[i]);
            return true;
        }
    }
//check vertical cells
    for (var j = 0; j < 9; j+=3)
    if (cells[i].innerText && cells[0+j].innerText === cells[3+j].innerText && cells[3+j].innerText === cells[6+j].innerText) {
        setWinner(cells[j.innerText]);
        return true;
        }
    //check for diagonal
    if (ells[0].innerText && cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText || ells[2].innerText && cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText) {
        setWinner(cells[4]);
        return true;
    }
    return false;
}


function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "X") turn = "O";
        else {
            turn = "X"
        }
        if (!checkForWin()){
            setTurn();
        }
    }
}
var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; ++i) {
    cells[i].addEventListener("click", onClick);
}

setTurn();