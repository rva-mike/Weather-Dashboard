
var searchButtonEl = document.querySelector(".search");
var inputValueEl = document.querySelector(".inputValue");
var nameEl = document.querySelector(".name");
var tempEl = document.querySelector(".temp");
var windEl = document.querySelector(".wind")
var humidityEl = document.querySelector(".humidity")
var uvIndexEl = document.querySelector(".uvIndex")


var tempEl1 = document.querySelector("temp-1")


searchButtonEl.addEventListener("click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValueEl.value + '&appid=529b41dd58ddfd8a41cab95232af43ae&units=imperial')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var nameValue = data["name"];
            var tempValue = "Temperature " + data['main']["temp"] + "&#176F";
            var windValue = "Wind " + data.wind.speed + " MPH";
            var humidityValue = "Humidity: " + data["main"]['humidity'] + "%";
            var uvIndexValue = ["uvi"];

            nameEl.innerHTML = nameValue;
            tempEl.innerHTML = tempValue;
            windEl.innerHTML = windValue;
            humidityEl.innerHTML = humidityValue;
            uvIndexEl.innerHTML = uvIndexValue;


        })
})
