let score = 0;
let timer = 30;

let timerId = document.getElementById("timer");
let scoreId = document.getElementById("score");
let startButton = document.getElementById("start");
let bart = document.getElementById("face");
let gameContainer = document.querySelector(".gamearea");

let contHeight
let contWidth

bart.style.display = "none";


startButton.addEventListener('click', () => {
    bart.style.display = 'block';
    startGame();

});

/**
 * Funtion for instructions pop up
 */

let alertContainer = document.getElementById("instructionContainer");

function instructions() {
    alertContainer.style.display = "block";
}

function hide() {
    alertContainer.style.display = "none";
}

/** Level one start of the game */

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
function incrementScore() {
    if (timer > 0) {
        score++;
        scoreId.textContent = score;
    }
}

/** Timer */

function gameTimer() {
    timer--;
    timerId.textContent = timer + ' seconds';
    if (timer === 0) {
        clearInterval(intervalId);
        alert('You are out of time! Your total hits were:' + score);
    }

}


/** Reset game */

function reset() {
    score = 0;
    timer = 30;
}
