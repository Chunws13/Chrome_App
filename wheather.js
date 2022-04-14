const my_key = "e5478cdaec644affef32ae31b42248c7"

function Geo_ok(positions) {
    const lat = positions.coords.latitude;
    const long = positions.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${my_key}&units=metric`

    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const location = document.querySelector("#weather span:last-child");

        console.log(data.name, data.weather[0].main);
        weather.innerText = data.name;
        location.innerText = `${data.weather[0].main} ${data.main.temp}`;
    });
}

function Geo_error() {
    alert("위치 정보를 찾을 수 없습니다.")
}
navigator.geolocation.getCurrentPosition(Geo_ok, Geo_error);