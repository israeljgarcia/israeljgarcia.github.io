const carousel = [
  "./images/beach-trail-small.jpg",
  "./images/grotto-trail-small.jpg",
  "./images/nature-trail-small.jpg",
];

if (window.innerWidth > 400 && window.innerWidth < 800) {
  carousel[0] = "./images/beach-trail-medium.jpg";
  carousel[1] = "./images/grotto-trail-medium.jpg";
  carousel[2] = "./images/nature-trail-medium.jpg";
} else if (window.innerWidth > 800) {
  carousel[0] = "./images/beach-trail-large.jpg";
  carousel[1] = "./images/grotto-trail-large.jpg";
  carousel[2] = "./images/nature-trail-large.jpg";
} else {
  carousel[0] = "./images/beach-trail-small.jpg";
  carousel[1] = "./images/grotto-trail-small.jpg";
  carousel[2] = "./images/nature-trail-small.jpg";
}

let currentImage = document.createElement("img");
currentImage.setAttribute("src", carousel[0]);

document.querySelector("div.carousel").appendChild(currentImage);
