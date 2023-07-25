let score = 0;
let timer = 10;
let level = 1;
let maxLevel = 3;
let intervalId;

let timerId = document.getElementById("timer");
let scoreId = document.getElementById("score");
let startButton = document.getElementById("start");
let bart = document.getElementById("img");
let container = document.querySelector(".game_area");
let instructions = document.getElementById("instructions");

bart.style.display = 'none';

startButton.addEventListener('click', () => {
    container.appendChild(bart);
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
        checkLevel();
    });

    let contHeight = container.offsetHeight;
    let contWidth = container.offsetWidth;

    intervalId = setInterval(() => {
        let rTop = Math.random() * (contHeight - 100);
        let rLeft = Math.random() * (contWidth - 100);

        bart.style.position = 'absolute';
        bart.style.top = rTop + "px";
        bart.style.left = rLeft + "px";
    }, 1000);

    gameTimer();
}

/** Timer */
function gameTimer() {
    timer--;
    timerId.textContent = timer + ' seconds';

    if (timer === 0) {
        clearInterval(intervalId);
        if (level < maxLevel) {
            alert(' Your total hits are: ' + score + '. You are now on going to Level ' + level);
            reset(levelUp);
        } else {
            alert('Congratulations! You have completed all levels. Your total hits are: ' + score);
        }
    }
}

/** Checks level */
function checkLevel() {
    if (score % === 5 && level === 1) {
        levelUp();
    } else if (score % === 12 && level === 2) {
        levelUp();
    } else if (score  % === 18 && level === 3) {
        levelUp();
    }
}

/** Level up */
function levelUp() {
    clearInterval(intervalId);
    level++;
    timer = 10;
    bart.style.display = 'none';
    intervalId = setInterval(() => {
        let rTop = Math.random() * (contHeight - 100);
        let rLeft = Math.random() * (contWidth - 100);

        bart.style.position = 'absolute';
        bart.style.top = rTop + "px";
        bart.style.left = rLeft + "px";

        gameTimer();
    }, 1000);
}


