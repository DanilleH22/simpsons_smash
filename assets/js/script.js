let score = 0;
let timer = 10;
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
    levelTwo();
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

    let contHeight = container.offsetHeight;
    let contWidth = container.offsetWidth;

    intervalId = setInterval(() => {
        let rTop = Math.random() * (contHeight - 100);
        let rLeft = Math.random() * (contWidth - 100);

        bart.style.position = 'absolute';
        bart.style.top = rTop + "px";
        bart.style.left = rLeft + "px";

        gameTimer();
    }, 1500);

    levelTwo();

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
    intervalId;
    bart.style.display = 'none';

    startButton.addEventListener('click', () => {
        container.appendChild(bart);
        bart.style.display = 'block';
        startGame();
    }
    );

}

let bob = document.getElementById("Bob");
let bully1 = document.getElementById("bully1");
let bully2 = document.getElementById("bully2");
let bully3 = document.getElementById("bully3");
let dog = document.getElementById("dog");
let mary = document.getElementById("mary");
let millhouse = document.getElementById("millhouse");
let nelson = document.getElementById("nelson");
let shawna = document.getElementById("shawna");
let snake = document.getElementById("snake");



function levelTwo() {

    startButton.addEventListener('click', () => {
        container.appendChild(bart);
        bart.style.display = 'block';
        levelTwo();
    });

    bart.addEventListener('click', () => {
        score++;
        scoreId.textContent = score + ' hits';
    });

    let contHeight = container.offsetHeight;
    let contWidth = container.offsetWidth;

    intervalId = setInterval(() => {
        let rTop = Math.random() * (contHeight - 100);
        let rLeft = Math.random() * (contWidth - 100);

        bart.style.position = 'absolute';
        bart.style.top = rTop + "px";
        bart.style.left = rLeft + "px";

        bob.style.position = 'absolute';
        bob.style.top = rTop + "px";
        bob.style.left = rLeft + "px";

        bully1.style.position = 'absolute';
        bully1.style.top = rTop + "px";
        bully1.style.left = rLeft + "px";

        bully2.style.position = 'absolute';
        bully2.style.top = rTop + "px";
        bully2.style.left = rLeft + "px";

        bully3.style.position = 'absolute';
        bully3.style.top = rTop + "px";
        bully3.style.left = rLeft + "px";

        dog.style.position = 'absolute';
        dog.style.top = rTop + "px";
        dog.style.left = rLeft + "px";

        mary.style.position = 'absolute';
        mary.style.top = rTop + "px";
        mary.style.left = rLeft + "px";

        millhouse.style.position = 'absolute';
        millhouse.style.top = rTop + "px";
        millhouse.style.left = rLeft + "px";

        nelson.style.position = 'absolute';
        nelson.style.top = rTop + "px";
        nelson.style.left = rLeft + "px";

        shawna.style.position = 'absolute';
        shawna.style.top = rTop + "px";
        shawna.style.left = rLeft + "px";

        snake.style.position = 'absolute';
        snake.style.top = rTop + "px";
        snake.style.left = rLeft + "px";

        gameTimer();
    }, 1000);

}