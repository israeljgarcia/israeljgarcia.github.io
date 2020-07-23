let carousel = [
  "./images/beach-trail-small.jpg",
  "./images/grotto-trail-small.jpg",
  "./images/nature-trail-small.jpg",
];

const titles = ["The Beach Trail", "The Grotto Trail", "The Nature Trail"];
const articles = [
  "The beach trail is a trail with amazing views of the ocean. The water is as blue as you can imagine and the sand is as soft and smooth as silk. People love going on this tour because it is an easy ride through the malecon. This is a perfect tour if you are a single rider or riding as a couple. Admire the small shops and taste Cozumel's most popular street food and snacks.",
  "Our hidden Grotto trail is perfect for any adventurist. This trail is full of beautiful scenery hidden within Cozumel's greenery. This trail is considered medium in difficulty because there are some areas where it is rocky. At the end of the trail is a beautiful structure of the past. It's a historic and popular trail to go on. This trail is best enjoyed in an open-aired vehicle such as the jeep or Pioneer.",
  "The nature trail is our most beautiful trail and it is perfect for families. This is an easy tour on a path through the wilderness of Cozumel. On the way you can see animals such as monkeys and tropical birds. Don't worry, they will not attack you, but keep your food at a distance! This tour is enjoyed best in a closed-door jeep, but it can be toured with any of our vehicles.",
];

let index = 0;

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
document.getElementById("article-title").innerHTML = titles[0];
document.getElementById("tour-article").innerHTML = articles[0];

function plusSlides() {
  index += 1;
  if (index >= carousel.length) {
    index = 0;
  }
  currentImage.setAttribute("src", carousel[index]);
  document.getElementById("article-title").innerHTML = titles[index];
  document.getElementById("tour-article").innerHTML = articles[index];
}

function minusSlides() {
  index -= 1;
  if (index < 0) {
    index = carousel.length - 1;
  }
  currentImage.setAttribute("src", carousel[index]);
  document.getElementById("article-title").innerHTML = titles[index];
  document.getElementById("tour-article").innerHTML = articles[index];
}
