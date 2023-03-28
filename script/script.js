//Sélection des éléments nécéssaires dans le fichier HTML
const cells = document.querySelectorAll('[data-cell]');
const gameStatuts = document.getElementById('gameStatuts');
const endgameStatuts = document.getElementById('endGameStatuts');

//On se fait des constantes pour ce qui apparaîtra dans la cellule que le joueur sélectionnera
const playerOne = 'X';
const playerTwo = 'O';

//patterns pour avoir une victoire
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

//attribution du 1er tour au joueur 1
let playerTurn = playerOne;

// si le joueur clique sur une case, on la remplit selon le joueur (X si j1, O si j2) et 1 seul fois
cells.forEach(cell => {
    cell.addEventListener('click', playGame, {once:true});
});


//fonction affichant l'issue du jeu selon la victoire d'un joueur ou d'une égalité
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


//vérifier la victoire d'un joueur ou non en comparant les patterns 
//enregistrés en script ci dessus, à ce qui est fait sur le jeu
function checkWin(playerTurn){
    return winningPatterns.some(combination=> {
        return combination.every(index => {
            return cells[index].innerHTML == playerTurn;
        });
    });
};

//vérifier l'égalité entre les joueurs s'il y en  une
function checkDraw() {
    return [...cells].every(cell => {
        return cell.innerHTML == playerOne || cell.innerHTML == playerTwo;
    });
}


//affichage de texte selon le tour de jeu de chaque joueur
function updateGameStatuts(statuts) {
    let statutsText;

    switch (statuts) {
        case 'X': 
                 statutsText = "player 2 (O) go ";
        break;

        case 'O': 
                 statutsText = "player 1 (X) go ";
        break;

        case 'winsX': 
                 statutsText = "player 1 (X) wins !";
        break;

        case 'winsO': 
                 statutsText = "player 2 (O) wins !";
        break;

        case 'draw': 
                 statutsText = "Draw ! Restart ?";
        break;

    }

    gameStatuts.innerHTML = statutsText;
    endGameStatuts.innerHTML = statutsText;
}

//message de fin de jeu a l'affichage
function endGame() {
document.getElementById("gameEnd").style.display = "block"
};

//relancer une partie
function reloadGame() {
window.location.reload();
};


