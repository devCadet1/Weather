const apiKey = "adc68f9a746902618f465bc19a3cd475";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        
    var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/hr'

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'asset/clouds.png'
    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'asset/clear.png'
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'asset/drizzle.png'
    } else if (data.weather[0].main == 'humidity') {
        weatherIcon.src = 'asset/humidity.png'
    } else if (data.weather[0].main == 'mist') {
        weatherIcon.src = 'asset/mist.png'
    } else if (data.weather[0].main == 'wind') {
        weatherIcon.src = 'asset/wind.png'
    } else if (data.weather[0].main == 'snow') {
        weatherIcon.src = 'asset/snow.png'
    } 


    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none'
    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})

