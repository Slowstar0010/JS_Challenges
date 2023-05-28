const API_KEY = "bf976f775b17a19fbd287efe5e8c328e"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}   
function onGeoError() {
    alert("Can't Find You. No Weather Data For You are Computer");
}   

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);