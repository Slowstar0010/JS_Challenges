const clock = document.querySelector("h2#clock");

function getClcok() {
    const date = new Date();
    const Housr = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${Housr}:${Minutes}:${Seconds}`;
}

getClcok();
setInterval(getClcok , 1000);