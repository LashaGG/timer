

const time = document.querySelector("#time");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let startTime = 0;
let passedTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

start.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - passedTime;
        intervalId = setInterval(updateTime, 75);
    }
});

pause.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        passedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});

reset.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    passedTime = 0;
    time.textContent = `00:00:00`;
});

function updateTime() {
    passedTime = Date.now() - startTime;
    seconds = addZero(Math.floor((passedTime / 1000) % 60));
    minutes = addZero(Math.floor((passedTime / 60000) % 60));
    hours = addZero(Math.floor((passedTime / 3600000) % 60));

    time.textContent = `${hours}:${minutes}:${seconds}`;
}

function addZero(num) {
    num = "" + num;
    if (num.length === 1) {
        num = "0" + num;
    }
    return num;
}
