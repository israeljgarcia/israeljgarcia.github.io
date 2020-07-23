fetch("./json/rentals.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const rentals = data["rentals"];
    for (let i = 0; i < rentals.length; i++) {
      console.log(rentals[i].name);
      let card = document.createElement("div");
      let rentalName = document.createElement("strong");
      let rentalPrice = document.createElement("span");
      let rentalDescription = document.createElement("p");
      let rentalCaption = document.createElement("figcaption");
      let rentalFigure = document.createElement("figure");
      let rentalImage = document.createElement("img");
      let rentalLink = document.createElement("a");

      card.setAttribute("class", "rental-card");
      rentalPrice.setAttribute("class", "rates");
      rentalImage.setAttribute("src", rentals[i].image);
      rentalImage.setAttribute("alt", rentals[i].description);

      rentalName.textContent = rentals[i].name;
      rentalPrice.textContent = `$${rentals[i].resHalfDay}/$${rentals[i].resFullDay}`;
      rentalDescription.textContent = rentals[i].description;

      rentalFigure.appendChild(rentalImage);
      rentalCaption.appendChild(rentalName);
      rentalCaption.appendChild(rentalPrice);
      rentalCaption.appendChild(rentalDescription);
      rentalFigure.appendChild(rentalCaption);

      rentalLink.appendChild(rentalFigure);

      card.appendChild(rentalLink);
      console.log(card);

      document.querySelector("div.rental-cards").appendChild(card);
    }
  });
