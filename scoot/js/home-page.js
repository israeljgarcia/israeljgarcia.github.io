if (window.innerWidth > 400 && window.innerWidth < 800) {
  document
    .getElementById("home-page-image")
    .setAttribute("src", "./images/home-page-medium.jpg");
} else if (window.innerWidth > 800) {
  document
    .getElementById("home-page-image")
    .setAttribute("src", "./images/home-page-large.jpg");
}
