const requestUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

let sodaSpringsTownEvents = "";

let loadEvents = "";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Soda Springs") {
        let theseEvents = towns[i].events;
        theseEvents.forEach((element) => {
          sodaSpringsTownEvents += `<p>${element}</p>`;
        });
        loadEvents = sodaSpringsTownEvents;
      }
    }

    document.getElementById("load-events").innerHTML += loadEvents;

    // <h3>Upcoming Events</h3>
    //     <hr />
  });
