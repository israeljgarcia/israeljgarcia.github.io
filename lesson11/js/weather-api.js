const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=3d09dcfebba94b342b674dab45340377';
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3d09dcfebba94b342b674dab45340377';

let wind_speed;
let high_temp;
let wind_chill = "n/a";


fetch(weatherURL)
.then(response => response.json())
.then(jsObject => {
    console.log(jsObject);
    wind_speed = Math.floor(jsObject.wind.speed);
    high_temp = Math.floor(jsObject.main.temp_max);

    document.getElementById("current-climate").textContent = ` ${jsObject.weather[0].main}`;
    document.getElementById("high").textContent = high_temp;
    document.getElementById("humidity").textContent = `${jsObject.main.humidity}`;
    document.getElementById("wind-speed").textContent = wind_speed;

    if (high_temp <= 50 && wind_speed >= 3) {
        wind_chill = 35.74 + .6215 * high_temp - 35.75 * wind_speed ** .16 + .4275 * high_temp * wind_speed ** .16;
        wind_chill = Math.round(wind_chill);
        console.log(wind_chill);
    }
    
    document.getElementById("wind-chill").innerHTML = (wind_chill != "n/a" ? `${wind_chill}&#176;` : wind_chill);
});

function formatDate(date) {
    let returnDate = date.replace("18:00:00", "");
    returnDate = returnDate.split('-');
    return returnDate;
}

fetch(forecastURL)
.then(response => response.json())
.then(jsObject => {
    console.log(jsObject);
    const forecastDays = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
    console.log(forecastDays);
    
    let index = 1;
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let imagesrc = `https://openweathermap.org/img/w/`
    forecastDays.forEach(day => {
        let date = new Date(formatDate(day.dt_txt));
        document.getElementById(`day-${index}`).textContent = daysOfWeek[date.getDay()];
        document.getElementById(`weather-${index}`).textContent = Math.floor(day.main.temp);
        document.getElementById(`weather-icon-${index}`).setAttribute("src", `${imagesrc}${day.weather[0].icon}.png`)
        index++;
    });

});