const requestUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

let fishHavenTownEvents = "";

let loadEvents = "";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Fish Haven") {
        let theseEvents = towns[i].events;
        theseEvents.forEach((element) => {
          fishHavenTownEvents += `<p>${element}</p>`;
        });
        loadEvents = fishHavenTownEvents;
      }
    }

    document.getElementById("load-events").innerHTML += loadEvents;

    // <h3>Upcoming Events</h3>
    //     <hr />
  });
