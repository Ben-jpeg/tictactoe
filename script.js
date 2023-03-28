const cells = document.querySelectorAll('[data-cell]');
const gameStatuts = document.getElementById('gameStatuts');
const endgameStatuts = document.getElementById('endGameStatuts');

const playerOne = 'X';
const PlayerTwo = 'O';

let playerTurn = playerOne;

cells.forEach(cell => {
    cell.addEventListener('click', playGame, {once:true});
});

function playGame(e) {
    e.target.innerHTML = playerTurn;

    updateGameStatuts(playerTurn);

    playerTurn == playerOne ? playerTurn = PlayerTwo : playerTurn = playerOne;
};

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


