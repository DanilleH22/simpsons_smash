let score = 0;
let timer = 10;

let timerId = document.getElementById("timer");
let scoreId = document.getElementById("score");
let startButton = document.getElementById("start");
let bart = document.getElementById("img");
let container = document.querySelector(".game_area");

bart.style.display = 'none';

startButton.addEventListener('click', () => {
    container.appendChild(bart);
    bart.style.display = 'block';
    startGame();
});

function startGame() {

    bart.addEventListener('click', () => {
        score++;
        scoreId.textContent = score + ' hits';
    });

    let contHeight = container.offsetHeight;
    let contWidth = container.offsetWidth;

    let intervalId = setInterval(() => {
        let rTop = Math.random() * (contHeight - 300);
        let rLeft = Math.random() * (contWidth - 100);

        bart.style.position = 'absolute';
        bart.style.top = rTop + "px";
        bart.style.left = rLeft + "px";

        gameTimer()
    }, 1000);

    function gameTimer() {
        timer --;
        timerId.textContent = timer + ' seconds';
        
        if (timer === 0) {
            clearInterval(intervalId);
            alert('Sorry Bart\'s parents found him. Your total hits are: ' + score);
        } 
    }

    reset();
}

