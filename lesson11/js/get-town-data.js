const requestUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) { 
        if(towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
            let card = document.createElement('section');
            let townName = document.createElement('h2');
            let townMotto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');

            townName.textContent = towns[i].name;
            townMotto.textContent = towns[i].motto;
            yearFounded.textContent = `Year founded: ${towns[i].yearFounded}`;
            population.textContent = `Population: ${towns[i].currentPopulation}`;
            rainfall.textContent = ` Average Rainfall: ${towns[i].averageRainfall}"`;

            if(towns[i].name == 'Preston') {
                image.setAttribute('src', './images/preston-600x400.jpg');
                image.setAttribute('alt', 'Image of Preston')
            } else if(towns[i].name == "Fish Haven") {
                image.setAttribute('src', './images/fish-haven-600x400.jpg');
                image.setAttribute('alt', 'Image of Fish Haven');
            } else if(towns[i].name == "Soda Springs") {
                image.setAttribute('src', './images/soda-springs-600x400.jpg');
                image.setAttribute('alt', "Image in Soda Springs");
            }
            
            card.appendChild(townName);
            card.appendChild(townMotto);
            card.appendChild(image);
            card.appendChild(yearFounded);
            card.appendChild(population);
            card.appendChild(rainfall);

            document.querySelector('div.town-cards').appendChild(card);
        }
    }
  });
