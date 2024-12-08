  const apikey = "310ec015e153f90a8ea4fee1319e63a2";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon")

    async function checkWeather(city1) {
      const response = await fetch(apiUrl + `q=${city1}&appid=${apikey}`);

      var data = await response.json();
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy.png";
      }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "sunny.png";
      }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "heavy-rain.png";
      }
      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
      }
      else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "fog.png";
      }
    }

    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
    });
