const apiKey = "98de7e2529d335c499b50d8a78223398";
//This is a unique key required by the OpenWeatherMap API to verify access.
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
//This is the base URL for accessing weather data from the OpenWeatherMap API.


const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city){
    

    //Making the API Request
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{
        var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }

}


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
} )
            


/*
Summary of the App’s Workflow
1. User types a city name and clicks the search button.
2. The checkWeather function makes an API request to get weather data for that city.
3. If the city is found, the app updates the HTML to show the weather info and an appropriate icon.
4. If the city isn’t found, it displays an error message.
*/