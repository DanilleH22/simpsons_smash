let score = 0;
let timer = 10;



let timerId = document.getElementById("timer");
let scoreId = document.getElementById("score");
let startButton = document.getElementById("start");
let bart = document.getElementById("face");
let gameContainer = document.querySelector(".gamearea");


let faceDisplay = bart.style.display = "none";

let gameBegin = startButton.addEventListener('click', () => {
    bart.style.display = 'block';
    startGame();
});

/**
 * Funtion for instructions pop up
 */

let alert = document.getElementById("instructionContainer");

function instructions() {
    alert.style.display = "block";
}

function hide() {
    alert.style.display = "none";
}

/** Level one start of the game */

function startGame() {
    bart.addEventListener('click', () => {
        score++;
        scoreId.textContent = score + ' hits';
    });

    let contHeight = gameContainer.offsetHeight;
    let contWidth = gameContainer.offsetWidth;

    intervalId = setInterval(() => {
        let rTop = Math.random() * (contHeight - 100);
        let rLeft = Math.random() * (contWidth - 100);

        bart.style.position = 'relative';
        bart.style.top = rTop + "px";
        bart.style.left = rLeft + "px";

        gameTimer();

    }, 1200);

    reset();
}

/** Timer */

function gameTimer() {

    timer--;
    timerId.textContent = timer + ' seconds';
    if (timer === 0) {
        clearInterval(intervalId);
        alert('Bart\s parents are here scram! Your total hits were:' + score);
    }

}


/** Reset game */

function reset() {
    score = 0;
    timer = 10;
    faceDisplay;
    gameBegin;

}


/**
 * Score is increasing by 2 when second game is launched
 * Level 2 ? 
 * README needs starting.
 * Create Instructions guide.
 */