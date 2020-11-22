let apiKey = "a8e71c9932b20c4ceb0aed183e6a83bb"

getWeatherdata = (city) =>{
    const URL = "https://api.openweathermap.org/data/2.5/weather"

    const FullURL = `${URL}?q=${city}&appid=${apiKey}&units=metric`

    const weatherDateReqPromise = fetch(FullURL);
    return weatherDateReqPromise.then((recivedRes) =>{
        return recivedRes.json();
    })
}

console.log(getWeatherdata("New York"))

searchCity = () =>{
    const city = document.getElementById("city-input").value;
    getWeatherdata(city)
    .then((response) => {
        showWeatherData(response);
    }).catch((error) =>{
        console.log(error);
    })
}
showWeatherData = (datas) =>{
    document.getElementById("city-name").innerText = datas.name
    document.getElementById("weather-type").innerText = datas.weather[0].main;
    document.getElementById('temp').innerText = datas.main.temp
    document.getElementById('feelsLike').innerText = datas.main.feels_like
    document.getElementById('min-temp').innerText = datas.main.temp_min
    document.getElementById('max-temp').innerText = datas.main.temp_max
}

