let score = 0;
let timer = 30;
let contHeight, contWidth, intervalId;

// variables linking code index.html to script.js
let timerId = document.getElementById("timer");
let scoreId = document.getElementById("score");
let startButton = document.getElementById("start");
let bart = document.getElementById("face");
let gameContainer = document.querySelector(".gamearea");
let alertContainer = document.getElementById("instructionContainer");


// Bart display hidden until called on
bart.style.display = "none";

// event listener to start game and when get show Bart's face
startButton.addEventListener('click', () => {
    bart.style.display = 'block';
    startGame();

});

/**
 * When USers click on the button tag it will open the instruction
 * box showing them how to play the game 
 */
function instructions() {
    alertContainer.style.display = "block";
}

/**
 * When the ok button is closed the hide function is activated
 * closing the previous instructions box
 */
function hide() {
    alertContainer.style.display = "none";
}

/** 
 * This function controls the game 
 * When Bart is cliicked the score increases
 * The game timer is then set and Bart is positioned 
 * randomly throughout the screen
 * Game timer 
 * */

function startGame() {

    // When clciked Bart he is removed and the score increases 
    bart.removeEventListener('click', incrementScore);
    bart.addEventListener('click', incrementScore);

    // Set container height and width for game 
    contHeight = gameContainer.offsetHeight;
    contWidth = gameContainer.offsetWidth;

    //Change position of Bart during Timer randomly
    intervalId = setInterval(() => {
        let rTop = Math.random() * (contHeight - 100);
        let rLeft = Math.random() * (contWidth - 100);

        // Postition Bart's face randomly throughout container
        bart.style.position = 'relative';
        bart.style.top = rTop + "px";
        bart.style.left = rLeft + "px";

        gameTimer();

    }, 1000);


    reset();
}

/**
 * This function allows users to increase the score
 * as long as the timer is on
 */
function incrementScore() {
    if (timer > 0) {
        score++;
        scoreId.textContent = score;
    }
}

/** 
 * When timer is started it reduces and tells the user how long they have left
 * When finished users are given their score along with a alert message
 */
function gameTimer() {
    timer--;
    timerId.textContent = timer + ' seconds';
    if (timer === 0) {
        clearInterval(intervalId);
        alert('You are out of time! Your total hits were:' + score);
    }

}


/** 
 * This function resets the game variables score & timer 
 */
function reset() {
    score = 0;
    timer = 30;
}
