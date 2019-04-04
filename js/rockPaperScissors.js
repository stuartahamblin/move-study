player = {
    throwsLeft: 3,
};

opponent = {
    throwsLeft: 3,
};

const attack = (playerThrow) => {
    const possibleThrows = ["rock", "paper", "scissors"];
    const opponentThrow = possibleThrows[Math.floor(Math.random()*3)];
    const roundMessage = document.getElementById('round-message');
    const playerChoice = document.getElementById('player-choice');
    const opponentChoice = document.getElementById('opponent-choice');
    const playerThrowsLeft = document.getElementById('player-throws-left');
    const opponentThrowsLeft = document.getElementById('opponent-throws-left');
    $('.btn').attr('disabled', true);
    playerChoice.innerText = playerThrow.toUpperCase();
    opponentChoice.innerText = opponentThrow.toUpperCase();
    setTimeout(() => {
        if (playerThrow === "rock" ){
            if (opponentThrow === "rock"){
                // return
                roundMessage.innerText = "DRAW"
            } else if (opponentThrow === "paper"){
                player.throwsLeft -= 1;
                roundMessage.innerText = "PAPER WINS"
            } else if (opponentThrow === "scissors"){
                opponent.throwsLeft -= 1;
                roundMessage.innerText = "ROCK WINS"
            }
        } else if (playerThrow === "paper"){
            if (opponentThrow === "rock"){
                opponent.throwsLeft -= 1;
                roundMessage.innerText = "PAPER WINS"
            } else if (opponentThrow === "paper"){
                // return
                roundMessage.innerText = "DRAW"
            } else if (opponentThrow === "scissors"){
                player.throwsLeft -= 1;
                roundMessage.innerText = "SCISSORS WINS"
            }
        } else if (playerThrow === "scissors"){
            if (opponentThrow === "rock"){
                player.throwsLeft -= 1;
                roundMessage.innerText = "ROCK WINS"
            } else if (opponentThrow === "paper"){
                opponent.throwsLeft -= 1;
                roundMessage.innerText = "SCISSORS WINS"
            } else if (opponentThrow === "scissors"){
                // return
                roundMessage.innerText = "DRAW"
            }
        }
        setTimeout(() => {
            if (player.throwsLeft <= 0){
                roundMessage.innerText = "OPPONENT WINS";
                playerChoice.innerText = " ";
                opponentChoice.innerText = " ";
                playerThrowsLeft.innerText = player.throwsLeft;
                opponentThrowsLeft.innerText = opponent.throwsLeft;
                return
            } else if (opponent.throwsLeft <= 0){
                roundMessage.innerText = "PLAYER WINS";
                playerChoice.innerText = " ";
                opponentChoice.innerText = " ";
                playerThrowsLeft.innerText = player.throwsLeft;
                opponentThrowsLeft.innerText = opponent.throwsLeft;
                return
            }
            playerThrowsLeft.innerText = player.throwsLeft;
            opponentThrowsLeft.innerText = opponent.throwsLeft;
            playerChoice.innerText = " ";
            opponentChoice.innerText = " ";
            roundMessage.innerText = " ";
            $('.btn').attr('disabled', false);
        }, 1000);
    }, 1000);

    console.log("Player: " + playerThrow + " , Opponent: " + opponentThrow);
    console.log("Player throws left: " + player.throwsLeft + " , Opponent throws left: " + opponent.throwsLeft)
};