carouselImages = [
  "./images/beach-400.jpg",
  "./images/jeep-400.jpg",
  "./images/palm-trees-400x267.jpg",
  "./images/scooter-400.jpg",
];

let imageIndex = 0;

window.setTimeout(() => {
  document
    .getElementById("carousel-image")
    .setAttribute("src", carouselImages[imageIndex]);
  imageIndex += 1;
  if (imageIndex > carouselImages.length) {
    imageIndex = 0;
  }
}, 3000);
