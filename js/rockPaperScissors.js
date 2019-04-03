player = {
    throwsLeft: 3,
};

opponent = {
    throwsLeft: 3,
};

const attack = (playerThrow) => {
    const possibleThrows = ["rock", "paper", "scissors"];
    const opponentThrow = possibleThrows[Math.floor(Math.random()*3)];
    document.getElementById('player-choice').innerText = playerThrow;
    setTimeout(() => {
        document.getElementById('opponent-choice').innerText = opponentThrow;
    }, 1000);
    setTimeout(() => {

    }, 1000);
    setTimeout(() => {
        document.getElementById('player-throws-left').innerText = player.throwsLeft;
        document.getElementById('opponent-throws-left').innerText = opponent.throwsLeft
    }, 1000);
    if (playerThrow === "rock" ){
        if (opponentThrow === "rock"){
            // return
        } else if (opponentThrow === "paper"){
            player.throwsLeft -= 1;
        } else if (opponentThrow === "scissors"){
            opponent.throwsLeft -= 1;
        }
    } else if (playerThrow === "paper"){
        if (opponentThrow === "rock"){
            opponent.throwsLeft -= 1;
        } else if (opponentThrow === "paper"){
            // return
        } else if (opponentThrow === "scissors"){
            player.throwsLeft -= 1;
        }
    } else if (playerThrow === "scissors"){
        if (opponentThrow === "rock"){
            player.throwsLeft -= 1;
        } else if (opponentThrow === "paper"){
            opponent.throwsLeft -= 1;
        } else if (opponentThrow === "scissors"){
            // return
        }
    }
    console.log("Player: " + playerThrow + " , Opponent: " + opponentThrow);
    console.log("Player throws left: " + player.throwsLeft + " , Opponent throws left: " + opponent.throwsLeft)
};