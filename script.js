const cells = document.querySelectorAll('[data-cell]');
const gameStatuts = document.getElementById('gameStatuts');
const endgameStatuts = document.getElementById('endGameStatuts');

const playerOne = 'X';
const playerTwo = 'O';

let playerTurn = playerOne;


const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]



cells.forEach(cell => {
    cell.addEventListener('click', playGame, {once:true});
});

function playGame(e) {
    e.target.innerHTML = playerTurn;

    if(checkWin(playerTurn)) {
              updateGameStatuts("wins" + playerTurn);
        return endGame();

     } else if (checkDraw()) {
              updateGameStatuts ("draw");
        return endGame();
        }
    
    updateGameStatuts(playerTurn);

    playerTurn == playerOne ? playerTurn = playerTwo : playerTurn = playerOne;
};


function checkWin(playerTurn){
    return winningPatterns.some(combination=> {
        return combination.every(index => {
            return cells[index].innerHTML == playerTurn;
        });
    });
};

function checkDraw() {
    return [...cells].every(cell => {
        return cell.innerHTML == playerOne || cell.innerHTML == playerTwo;
    });
}



function updateGameStatuts(statuts) {
    let statutsText;

    switch (statuts) {
        case 'X': 
                 statutsText = "player 2 (O) go !";
        break;

        case 'O': 
                 statutsText = "player 1 (X) go !";
        break;

        case 'winsX': 
                 statutsText = "player 1 (X) wins ! ";
        break;

        case 'winsO': 
                 statutsText = "player 2 (O) wins !";
        break;

        case 'draw': 
                 statutsText = "Draw ! Egalité";
        break;

    }

    gameStatuts.innerHTML = statutsText;
    endGameStatuts.innerHTML = statutsText;
}

function endGame() {
document.getElementById("gameEnd").style.display = "block"
};

function reloadGame() {
window.location.reload();
};


