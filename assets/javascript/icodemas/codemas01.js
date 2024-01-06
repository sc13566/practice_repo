const daysCount = document.querySelector("#daysCount");
const hoursCount = document.querySelector("#hoursCount");
const minutesCount = document.querySelector("#minutesCount");
const secondsCount = document.querySelector("#secondsCount");

const xmasDate = new Date("2023-12-25 00:00");

let timeLeftSeparated = {
    "daysLeft": 0,
    "hoursLeft": 0,
    "minutesLeft": 0,
    "secondsLeft": 0,
};

function initialize() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function getCountdown() {
    const currentDateTime = new Date().getTime();
    const timeLeft = xmasDate - currentDateTime;

    if(timeLeft < 0)
        return {
            daysLeft: 0,
            hoursLeft: 0,
            minutesLeft: 0,
            secondLeft: 0,
        }

    return {
        daysLeft: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hoursLeft: Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutesLeft: Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60)),
        secondsLeft: Math.floor(timeLeft % (1000 * 60) / 1000),
    }
}

function updateCountdown() {
    timeLeftSeparated = getCountdown();

    console.log("haha")

    daysCount.innerText = timeLeftSeparated["daysLeft"].toString().padStart(2, "0");
    hoursCount.innerText = timeLeftSeparated["hoursLeft"].toString().padStart(2, "0");
    minutesCount.innerText = timeLeftSeparated["minutesLeft"].toString().padStart(2, "0");
    secondsCount.innerText = timeLeftSeparated["secondsLeft"].toString().padStart(2, "0");
}

initialize();