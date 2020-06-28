const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3d09dcfebba94b342b674dab45340377';

fetch(weatherURL)
.then(response => response.json())
.then(jsObject => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = Math.floor(jsObject.main.temp);

    const imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].desc;
    document.getElementById("imgsrc").textContent = imgsrc;
    document.getElementById("imgicon").setAttribute("src", imgsrc);
    document.getElementById("imgicon").setAttribute("alt", desc);
}); 