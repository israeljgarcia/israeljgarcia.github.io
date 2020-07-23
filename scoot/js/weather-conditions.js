const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&units=imperial&appid=3d09dcfebba94b342b674dab45340377";

const weatherURL =
  "https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&units=imperial&appid=3d09dcfebba94b342b674dab45340377";

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.log(jsonObject);
    document.getElementById("temp").innerHTML = Math.round(
      jsonObject.main.temp
    );
    document.getElementById("hum").innerHTML = jsonObject.main.humidity;
    document.getElementById("weather-desc").innerHTML =
      jsonObject.weather[0].description;
  });

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    const forecastDays = jsonObject.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );
    console.log(forecastDays);
    document.getElementById("future-temp").innerHTML = Math.round(
      forecastDays[forecastDays.length - 1].main.temp
    );
  });
