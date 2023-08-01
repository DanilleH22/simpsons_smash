let score = 0;
let timer = 10;



let timerId = document.getElementById("timer");
let scoreId = document.getElementById("score");
let startButton = document.getElementById("start");
let bart = document.getElementById("bartface");
let gameContainer = document.querySelector(".gamearea");
let instructions = document.getElementById("instructions");

bart.style.display = "none";

startButton.addEventListener('click', () => {
    bart.style.display = 'block';
    startGame();
});

instructions.addEventListener('click', () => {
    window.confirm('Instructions');
});

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

        bart.style.position = 'absolute';
        bart.style.top = rTop + "px";
        bart.style.left = rLeft + "px";

        gameTimer();

    }, 1500);

    reset();

}

/** Timer */

function gameTimer() {

    timer--;
    timerId.textContent = timer + ' seconds';
    if (timer === 0) {
        clearInterval(intervalId);
        alert('That\s all the time available. Your totale hits were:' + score);
    }

}


/** Reset game */

function reset() {
    score = 0;
    timer = 10;
    bart.style.display = 'none';

    startButton.addEventListener('click', () => {
        con;
        bart.style.display = 'block';
        startGame();
    });

}
