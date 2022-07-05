//variables 
var searchButtonEl = document.querySelector(".search");
var inputValueEl = document.querySelector(".inputValue");
var nameEl = document.querySelector(".name");
var tempEl = document.querySelector(".temp");
var windEl = document.querySelector(".wind")
var humidityEl = document.querySelector(".humidity")
var uvIndexEl = document.querySelector(".uvIndex")
var dayOne5 = document.querySelector(".dayOne")
var dayTwo5 = document.querySelector(".dayTwo")
var dayThree5 = document.querySelector(".dayThree")
var dayFour5 = document.querySelector(".dayFour")
var dayFive5 = document.querySelector(".dayFive")
var todayDate = document.querySelector(".currentDay")



searchButtonEl.addEventListener("click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValueEl.value + '&appid=529b41dd58ddfd8a41cab95232af43ae&units=imperial')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var nameValue = data["name"];
            var currentDate = moment().format("dddd, MMMM Do");
            var tempValue = "<b>Temperature: </b>" + data['main']["temp"] + "&#176F";
            var windValue = "<b>Wind: </b>" + data.wind.speed + " MPH";
            var humidityValue = "<b>Humidity: </b>" + data["main"]['humidity'] + "%";
            var uvIndexValue = ["<b>UV Index: </b>"];

            nameEl.innerHTML = nameValue;
            tempEl.innerHTML = tempValue;
            windEl.innerHTML = windValue;
            humidityEl.innerHTML = humidityValue;
            uvIndexEl.innerHTML = uvIndexValue;
            todayDate.innerHTML = currentDate;




        })
})



// five-day api call
searchButtonEl.addEventListener("click", function () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + inputValueEl.value + '&appid=529b41dd58ddfd8a41cab95232af43ae&units=imperial')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            var firstDay = "<b>Temp: </b>" + data['list'][1]["main"]["temp"] + "&#176F. " + "<br>" + "<b>Wind: </b>" + data["list"][1]["wind"]["speed"] + " MPH" + "<br>" + "<b>Humidity: </b>" + data["list"][1]["main"]["humidity"] + "%";

            dayOne5.innerHTML = firstDay;


            var secondDay = "<b>Temp: </b>" + data['list'][2]["main"]["temp"] + "&#176F. " + "<br>" + "<b>Wind: </b>" + data["list"][2]["wind"]["speed"] + " MPH" + "<br>" + "<b>Humidity: </b>" + data["list"][2]["main"]["humidity"] + "%";

            dayTwo5.innerHTML = secondDay;

            var thirdDay = "<b>Temp: </b>" + data['list'][3]["main"]["temp"] + "&#176F. " + "<br>" + "<b>Wind: </b>" + data["list"][3]["wind"]["speed"] + " MPH" + "<br>" + "<b>Humidity: </b>" + data["list"][3]["main"]["humidity"] + "%";

            dayThree5.innerHTML = thirdDay;

            var fourthDay = "<b>Temp: </b>" + data['list'][4]["main"]["temp"] + "&#176F. " + "<br>" + "<b>Wind: </b>" + data["list"][4]["wind"]["speed"] + " MPH" + "<br>" + "<b>Humidity: </b>" + data["list"][4]["main"]["humidity"] + "%";

            dayFour5.innerHTML = fourthDay;

            var fifthDay = "<b>Temp: </b>" + data['list'][5]["main"]["temp"] + "&#176F. " + "<br>" + "<b>Wind: </b>" + data["list"][5]["wind"]["speed"] + " MPH" + "<br>" + "<b>Humidity: </b>" + data["list"][5]["main"]["humidity"] + "%";

            dayFive5.innerHTML = fifthDay;



            // var firstDayTime = data["list"][1]["dt_txt"]








        })
})



localStorage.setItem(hour, text);


// var currentDate = moment().format("dddd, MMMM Do")
//             $("#currentDay").text(currentDate)