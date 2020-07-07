const requestUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

let prestonTownEvents = "";

let loadEvents = "";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston") {
        let theseEvents = towns[i].events;
        theseEvents.forEach((element) => {
          prestonTownEvents += `<p>${element}</p>`;
        });
        loadEvents = prestonTownEvents;
      }
    }

    document.getElementById("load-events").innerHTML += loadEvents;

    // <h3>Upcoming Events</h3>
    //     <hr />
  });
