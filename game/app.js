/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;

function getAllZeroes(){
    var zeroElements = ['score-0', 'score-1', 'current-0', 'current-1'];
    for(var i=0; i<zeroElements.length; i++){
        document.getElementById(zeroElements[i]).textContent = 0;
    }
}

function switchPlayer(){
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    if(activePlayer === 0){
        activePlayer = 1;
    }
    else{
        activePlayer = 0;
    }
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

function addScore(){
    document.querySelector('#score-' + activePlayer).textContent += roundScore;
}

function prepareNewGame(){
    document.querySelector('.dice').style.display = 'none';
    getAllZeroes();
}

////////////////////////////////////////////////// PLAYABLE/////////////////////////// 
prepareNewGame();

document.querySelector( '.btn-roll').addEventListener('click', function() {
        var diceRandom = Math.floor(Math.random() * 6 ) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + diceRandom + '.png';
        if (diceRandom !== 1){
            roundScore += diceRandom;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
        }
        else{
            roundScore = 0;
            document.querySelector('#current-'+activePlayer).textContent = 0;
            switchPlayer();
        }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[activePlayer] += roundScore;
    roundScore = 0;
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    document.querySelector('#current-' + activePlayer).textContent = 0;
    switchPlayer();
});

document.querySelector('.btn-new').addEventListener('click', function(){
   location.reload();
});