let player = {
    health: 100,
    power: 20
};

let opponent = {
    health: 100,
    power:20

};

const attack = () => {
    let attackButton = document.getElementById('attack-button');
    let restartButton = document.getElementById('restart-button');
    let gameMessage = document.getElementById('game-message');

    let playerAttack = determineAttack(player.power);
    opponent.health -= playerAttack;
    printToScreen();

    if(isGameOver(opponent.health)){
        endGame("Player won fight!");
        return;
    }
    attackButton.disabled = true;
    gameMessage.innerText = "Opponent's turn!";

    setTimeout(() => {
        let opponentAttack = determineAttack(opponent.power);
        player.health -= opponentAttack;
        printToScreen();
        if(isGameOver(player.health)){
            endGame("Opponent won fight!");
            return;
        }
        attackButton.disabled = false;
        gameMessage.innerText = "Player's turn!";
    }, 500)
};

const endGame = (message) => {
    document.getElementById('game-message').innerText = message;
    document.getElementById('attack-button').hidden = true;
    document.getElementById('restart-button').hidden = false;
};

const determineAttack = (power) => {
    return Math.floor(Math.random()*power)
};

const isGameOver = (health) => {
    return health <= 0;
};

const restart = () => {
    let attackButton = document.getElementById('attack-button');
    player.health = 100;
    opponent.health = 100;
    document.getElementById('game-message').innerText = "";
    attackButton.disabled = false;
    attackButton.hidden = false;
    document.getElementById('attack-button').disable = false;
    document.getElementById('restart-button').hidden = true;
    printToScreen();
};

const printToScreen = () => {
    document.getElementById('opponent-health').innerText = opponent.health;
    document.getElementById('player-health').innerText = player.health;
};

printToScreen();