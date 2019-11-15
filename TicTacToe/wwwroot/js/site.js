// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var squares = document.getElementsByClassName("square");
var dragging;
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('dragenter', onDragEnter);
    squares[i].addEventListener('dragleave', onDragLeave);
    squares[i].addEventListener('dragstart', onDragStart);
    squares[i].addEventListener('dragend', onDragEnd);
}


function onDragEnter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("checker")) return
    if (event.target.classList.contains("red")) return
    event.preventDefault();
    event.target.style.backgroundColor = "purple";
}
function onDragStart(event) {
    console.log(event.target.dataset);
    dragging = {
        x: event.target.dataset-x,
        y: event.target.dataset-y
    }
    console.log(event);
}
function onDragEnd(event) {
    console.log(event);
}
function onDragLeave(event) {
    event.target.style.backgroundColor = null;
    console.log(event);
}

/*var cells = document.getElementsByClassName("cell");
for(var i=0; i< cells.length)

*/
/*
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
*/