const API_Key = '589f27596d2cb5a7f888b9910a7dde6e';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector(".search");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiUrl + city + '&appid=${API_Key}&units=metric');

    if(response.status == 404)
    {
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{
 //update the image

        var data = await response.json();  
    
    document.querySelector(".citynamw").innerHTML = data.name; 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&#176;C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "img/images/clouds.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "img/images/rain.png"
        }else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/images/sunny.png"
        }else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/images/snowy.png"
        }else{
            weatherIcon.src = "img/images/cloudy.png"
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

    
   
   
}
                      


searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})







