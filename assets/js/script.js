let score = 0;
let timer = 30;

// variables linking code index.html to script.js
let timerId = document.getElementById("timer");
let scoreId = document.getElementById("score");
let startButton = document.getElementById("start");
let bart = document.getElementById("face");
let gameContainer = document.querySelector(".gamearea");
let alertContainer = document.getElementById("instructionContainer");

let contHeight;
let contWidth;
let intervalId;

bart.style.display = "none";

// event listener to start game and show Bart's face
startButton.addEventListener('click', () => {
    bart.style.display = 'block';
    startGame();

});

function instructions() {
    alertContainer.style.display = "block";
}

function hide() {
    alertContainer.style.display = "none";
}

/** Level one start of the game */
// function that allows the timer to begin, move Bart's face randomly over screen,
// increase points for clicking Bart's face and reset game when timer is finished 
function startGame() {


    bart.removeEventListener('click', incrementScore);
    bart.addEventListener('click', incrementScore);

    contHeight = gameContainer.offsetHeight;
    contWidth = gameContainer.offsetWidth;

    intervalId = setInterval(() => {
        let rTop = Math.random() * (contHeight - 100);
        let rLeft = Math.random() * (contWidth - 100);

        bart.style.position = 'relative';
        bart.style.top = rTop + "px";
        bart.style.left = rLeft + "px";

        gameTimer();

    }, 1000);


    reset();
}

/**
 * Increase the score 
 */
// Increase the score everytime Bart's face is clicked
function incrementScore() {
    if (timer > 0) {
        score++;
        scoreId.textContent = score;
    }
}

/** Timer */
// Timer is to go down when started, when it hit's 0 an alert message appears
function gameTimer() {
    timer--;
    timerId.textContent = timer + ' seconds';
    if (timer === 0) {
        clearInterval(intervalId);
        alert('You are out of time! Your total hits were:' + score);
    }

}


/** Reset game */
// when the game is finished it resets variables
function reset() {
    score = 0;
    timer = 30;
}
