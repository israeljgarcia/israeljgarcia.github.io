let wind_speed = parseFloat(document.getElementById('wind-speed').innerHTML);
let high_temp = parseFloat(document.getElementById("high").innerHTML);
let wind_chill = 0;

console.log(wind_speed);
console.log(high_temp);

if (high_temp <= 50 && wind_speed >= 3) {
    wind_chill = 35.74 + .6215 * high_temp - 35.75 * wind_speed ** .16 + .4275 * high_temp * wind_speed ** .16;
    wind_chill = Math.round(wind_chill);
    console.log(wind_chill);
}

document.getElementById("wind-chill").innerHTML = wind_chill;